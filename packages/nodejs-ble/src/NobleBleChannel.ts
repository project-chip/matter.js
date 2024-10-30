/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Channel,
    ChannelType,
    InternalError,
    Logger,
    NetInterface,
    ServerAddress,
    Time,
    TransportInterface,
    createPromise,
} from "@matter/general";
import {
    BLE_MATTER_C1_CHARACTERISTIC_UUID,
    BLE_MATTER_C2_CHARACTERISTIC_UUID,
    BLE_MATTER_C3_CHARACTERISTIC_UUID,
    BLE_MATTER_SERVICE_UUID,
    BLE_MAXIMUM_BTP_MTU,
    BTP_CONN_RSP_TIMEOUT_MS,
    BTP_MAXIMUM_WINDOW_SIZE,
    BTP_SUPPORTED_VERSIONS,
    Ble,
    BleChannel,
    BleError,
    BtpCodec,
    BtpFlowError,
    BtpSessionHandler,
} from "@matter/protocol";
import type { Characteristic, Peripheral } from "@stoprocent/noble";
import { BleScanner } from "./BleScanner.js";

const logger = Logger.get("BleChannel");

/**
 * Convert a UUID in noble's format to a proper UUID.
 *
 * @param {string} uuid - UUID to convert
 * @returns {string} UUID
 */
function nobleUuidToUuid(uuid: string): string {
    uuid = uuid.toUpperCase();

    if (uuid.length !== 32) {
        return uuid;
    }

    const parts = [
        uuid.substring(0, 8),
        uuid.substring(8, 12),
        uuid.substring(12, 16),
        uuid.substring(16, 20),
        uuid.substring(20, 32),
    ];

    return parts.join("-");
}

export class NobleBleCentralInterface implements NetInterface {
    private openChannels: Map<ServerAddress, Peripheral> = new Map();
    private onMatterMessageListener: ((socket: Channel<Uint8Array>, data: Uint8Array) => void) | undefined;

    openChannel(address: ServerAddress, tryCount = 1): Promise<Channel<Uint8Array>> {
        return new Promise((resolve, reject) => {
            if (this.onMatterMessageListener === undefined) {
                reject(new InternalError(`Network Interface was not added to the system yet.`));
                return;
            }
            if (address.type !== "ble") {
                reject(new InternalError(`Unsupported address type ${address.type}.`));
                return;
            }

            // Get the peripheral by address and connect to it.
            const { peripheral, hasAdditionalAdvertisementData } = (
                Ble.get().getBleScanner() as BleScanner
            ).getDiscoveredDevice(address.peripheralAddress);

            if (tryCount > 3) {
                reject(new BleError(`Failed to connect to peripheral ${peripheral.address}`));
                return;
            }

            logger.debug("BLE peripheral state", peripheral.state);
            if (peripheral.state === "connected" || peripheral.state === "connecting") {
                reject(
                    new BleError(
                        `Peripheral ${address.peripheralAddress} is already connected or connecting. Only one connection supported right now.`,
                    ),
                );
                return;
            }
            if (this.openChannels.has(address)) {
                reject(
                    new BleError(
                        `Peripheral ${address.peripheralAddress} is already connected. Only one connection supported right now.`,
                    ),
                );
                return;
            }
            if (peripheral.state !== "disconnected") {
                // Try to cleanup strange "in between" states
                peripheral.disconnectAsync().then(() => this.openChannel(address, tryCount), reject);
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            peripheral.once("connect", async () => {
                if (this.onMatterMessageListener === undefined) {
                    reject(new InternalError(`Network Interface was not added to the system yet.`));
                    return;
                }

                const services = await peripheral.discoverServicesAsync([BLE_MATTER_SERVICE_UUID]);
                logger.debug(`Found services: ${services.map(s => s.uuid).join(", ")}`);

                for (const service of services) {
                    logger.debug(`found service: ${service.uuid}`);
                    if (service.uuid !== BLE_MATTER_SERVICE_UUID) continue;

                    // So, discover its characteristics.
                    const characteristics = await service.discoverCharacteristicsAsync();

                    let characteristicC1ForWrite: Characteristic | undefined;
                    let characteristicC2ForSubscribe: Characteristic | undefined;
                    let additionalCommissioningRelatedData: Uint8Array | undefined;

                    for (const characteristic of characteristics) {
                        // Loop through each characteristic and match them to the UUIDs that we know about.
                        logger.debug("found characteristic:", characteristic.uuid, characteristic.properties);

                        switch (nobleUuidToUuid(characteristic.uuid)) {
                            case BLE_MATTER_C1_CHARACTERISTIC_UUID:
                                logger.debug("found C1 characteristic");
                                characteristicC1ForWrite = characteristic;
                                break;

                            case BLE_MATTER_C2_CHARACTERISTIC_UUID:
                                logger.debug("found C2 characteristic");
                                characteristicC2ForSubscribe = characteristic;
                                break;

                            case BLE_MATTER_C3_CHARACTERISTIC_UUID:
                                logger.debug("found C3 characteristic");
                                if (hasAdditionalAdvertisementData) {
                                    logger.debug("reading additional commissioning related data");
                                    const data = await characteristic.readAsync();
                                    additionalCommissioningRelatedData = new Uint8Array(data);
                                    logger.debug("additional data", data);
                                }
                        }
                    }

                    if (!characteristicC1ForWrite || !characteristicC2ForSubscribe) {
                        logger.debug("missing characteristics");
                        continue;
                    }

                    peripheral.removeAllListeners("disconnect");
                    this.openChannels.set(address, peripheral);
                    resolve(
                        await NobleBleChannel.create(
                            peripheral,
                            characteristicC1ForWrite,
                            characteristicC2ForSubscribe,
                            this.onMatterMessageListener,
                            additionalCommissioningRelatedData,
                        ),
                    );
                    return;
                }

                peripheral.removeAllListeners("disconnect");
                reject(new BleError(`Peripheral ${peripheral.address} does not have the required characteristics`));
            });
            const reTryHandler = async (error?: any) => {
                if (error) {
                    logger.error(
                        `Peripheral ${peripheral.address} disconnected while trying to connect, try again`,
                        error,
                    );
                } else {
                    logger.info(`Peripheral ${peripheral.address} disconnected while trying to connect, try gain`);
                }
                // Cleanup listeners and try again
                peripheral.removeAllListeners("disconnect");
                peripheral.removeAllListeners("connect");
                this.openChannel(address, tryCount + 1)
                    .then(resolve)
                    .catch(reject);
            };
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            peripheral.once("disconnect", reTryHandler);
            logger.debug(`Connect to Peripheral now (try ${tryCount})`);
            peripheral.connectAsync().catch(reTryHandler);
        });
    }

    onData(listener: (socket: Channel<Uint8Array>, data: Uint8Array) => void): TransportInterface.Listener {
        this.onMatterMessageListener = listener;
        return {
            close: async () => await this.close(),
        };
    }

    async close() {
        for (const peripheral of this.openChannels.values()) {
            await peripheral.disconnectAsync();
        }
    }

    supports(type: ChannelType, _address?: string) {
        if (type !== ChannelType.BLE) {
            return false;
        }
        return true;
    }
}

export class NobleBleChannel extends BleChannel<Uint8Array> {
    static async create(
        peripheral: Peripheral,
        characteristicC1ForWrite: Characteristic,
        characteristicC2ForSubscribe: Characteristic,
        onMatterMessageListener: (socket: Channel<Uint8Array>, data: Uint8Array) => void,
        _additionalCommissioningRelatedData?: Uint8Array,
    ): Promise<NobleBleChannel> {
        let mtu = peripheral.mtu ?? 0;
        if (mtu > BLE_MAXIMUM_BTP_MTU) {
            mtu = BLE_MAXIMUM_BTP_MTU;
        }
        logger.debug(`Using MTU=${mtu} (Peripheral MTU=${peripheral.mtu})`);
        const btpHandshakeRequest = BtpCodec.encodeBtpHandshakeRequest({
            versions: BTP_SUPPORTED_VERSIONS,
            attMtu: mtu,
            clientWindowSize: BTP_MAXIMUM_WINDOW_SIZE,
        });
        logger.debug(`sending BTP handshake request: ${Logger.toJSON(btpHandshakeRequest)}`);
        await characteristicC1ForWrite.writeAsync(Buffer.from(btpHandshakeRequest.buffer), false);

        const btpHandshakeTimeout = Time.getTimer("BLE handshake timeout", BTP_CONN_RSP_TIMEOUT_MS, async () => {
            await peripheral.disconnectAsync();
            logger.debug("Handshake Response not received. Disconnected from peripheral");
        }).start();

        logger.debug("subscribing to C2 characteristic");
        await characteristicC2ForSubscribe.subscribeAsync();

        const { promise: handshakeResponseReceivedPromise, resolver } = createPromise<Buffer>();

        characteristicC2ForSubscribe.once("data", (data, isNotification) => {
            logger.debug(`received first data on C2: ${data.toString("hex")} (isNotification: ${isNotification})`);

            if (data[0] === 0x65 && data[1] === 0x6c && data.length === 6) {
                // Check if the first two bytes and length match the Matter handshake
                logger.info(`Received Matter handshake response: ${data.toString("hex")}.`);
                btpHandshakeTimeout.stop();
                resolver(data);
            }
        });

        const handshakeResponse = await handshakeResponseReceivedPromise;

        const btpSession = await BtpSessionHandler.createAsCentral(
            new Uint8Array(handshakeResponse),
            // callback to write data to characteristic C1
            async (data: Uint8Array) => {
                return await characteristicC1ForWrite.writeAsync(Buffer.from(data.buffer), false);
            },
            // callback to disconnect the BLE connection
            async () =>
                void characteristicC2ForSubscribe
                    .unsubscribeAsync()
                    .then(() => peripheral.disconnectAsync().then(() => logger.debug("disconnected from peripheral"))),
            // callback to forward decoded and de-assembled Matter messages to ExchangeManager
            async (data: Uint8Array) => {
                if (onMatterMessageListener === undefined) {
                    throw new InternalError(`No listener registered for Matter messages`);
                }
                onMatterMessageListener(nobleChannel, data);
            },
        );

        characteristicC2ForSubscribe.on("data", (data, isNotification) => {
            logger.debug(`received data on C2: ${data.toString("hex")} (isNotification: ${isNotification})`);

            void btpSession.handleIncomingBleData(new Uint8Array(data));
        });

        const nobleChannel = new NobleBleChannel(peripheral, btpSession);
        return nobleChannel;
    }

    private connected = true;

    constructor(
        private readonly peripheral: Peripheral,
        private readonly btpSession: BtpSessionHandler,
    ) {
        super();
        peripheral.once("disconnect", () => {
            logger.debug(`Disconnected from peripheral ${peripheral.address}`);
            this.connected = false;
            void this.btpSession.close();
        });
    }

    /**
     * Send a Matter message to the connected device - need to do BTP assembly first.
     *
     * @param data
     */
    async send(data: Uint8Array) {
        if (!this.connected) {
            logger.debug("Cannot send data because not connected to peripheral.");
            return;
        }
        if (this.btpSession === undefined) {
            throw new BtpFlowError(`Cannot send data, no BTP session initialized`);
        }
        await this.btpSession.sendMatterMessage(data);
    }

    // Channel<Uint8Array>
    get name() {
        return `${this.type}://${this.peripheral.address}`;
    }

    async close() {
        await this.btpSession.close();
        await this.peripheral.disconnectAsync();
    }
}
