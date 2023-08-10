/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Characteristic, Peripheral } from "@abandonware/noble";
import {
    Ble,
    BleError,
    BLE_MATTER_C1_CHARACTERISTIC_UUID,
    BLE_MATTER_C2_CHARACTERISTIC_UUID,
    BLE_MATTER_C3_CHARACTERISTIC_UUID,
    BLE_MATTER_SERVICE_UUID,
    BLE_MAXIMUM_BTP_MTU,
    BtpFlowError,
    BtpSessionHandler,
    BTP_CONN_RSP_TIMEOUT_MS,
    BTP_MAXIMUM_WINDOW_SIZE,
    BTP_SUPPORTED_VERSIONS,
} from "@project-chip/matter.js/ble";
import { BtpCodec } from "@project-chip/matter.js/codec";
import { Channel, InternalError, Listener, ServerAddress } from "@project-chip/matter.js/common";
import { Logger } from "@project-chip/matter.js/log";
import { NetInterface } from "@project-chip/matter.js/net";
import { Time } from "@project-chip/matter.js/time";
import { ByteArray, getPromiseResolver } from "@project-chip/matter.js/util";
import { BleScanner } from "./BleScanner";

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
    private onMatterMessageListener: ((socket: Channel<ByteArray>, data: ByteArray) => void) | undefined;

    async openChannel(address: ServerAddress): Promise<Channel<ByteArray>> {
        if (address.type !== "ble") {
            throw new InternalError(`Unsupported address type ${address.type}.`);
        }
        if (this.onMatterMessageListener === undefined) {
            throw new InternalError(`Network Interface was not added to the system yet.`);
        }

        // Get the peripheral by address and connect to it.
        const { peripheral, hasAdditionalAdvertisementData } = (
            Ble.get().getBleScanner() as BleScanner
        ).getDiscoveredDevice(address.peripheralAddress);
        if (peripheral.state === "connected" || peripheral.state === "connecting") {
            throw new BleError(
                `Peripheral ${address.peripheralAddress} is already connected or connecting. Only one connection supported right now.`,
            );
        }
        if (this.openChannels.has(address)) {
            throw new BleError(
                `Peripheral ${address.peripheralAddress} is already connected. Only one connection supported right now.`,
            );
        }
        await peripheral.connectAsync();

        // Once the peripheral has been connected, then discover the services and characteristics of interest.
        const services = await peripheral.discoverServicesAsync([BLE_MATTER_SERVICE_UUID]);

        for (const service of services) {
            logger.debug(`found service: ${service.uuid}`);
            if (service.uuid !== BLE_MATTER_SERVICE_UUID) continue;

            // So, discover its characteristics.
            const characteristics = await service.discoverCharacteristicsAsync();

            let characteristicC1ForWrite: Characteristic | undefined;
            let characteristicC2ForSubscribe: Characteristic | undefined;
            let additionalCommissioningRelatedData: ByteArray | undefined;

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
                            additionalCommissioningRelatedData = new ByteArray(data);
                        }
                }
            }

            if (!characteristicC1ForWrite || !characteristicC2ForSubscribe) {
                logger.debug("missing characteristics");
                continue;
            }

            this.openChannels.set(address, peripheral);
            return await NobleBleChannel.create(
                peripheral,
                characteristicC1ForWrite,
                characteristicC2ForSubscribe,
                this.onMatterMessageListener,
                additionalCommissioningRelatedData,
            );
        }

        throw new BleError(`No Matter service found on peripheral ${peripheral.address}`);
    }

    onData(listener: (socket: Channel<ByteArray>, data: ByteArray) => void): Listener {
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
}

export class NobleBleChannel implements Channel<ByteArray> {
    static async create(
        peripheral: Peripheral,
        characteristicC1ForWrite: Characteristic,
        characteristicC2ForSubscribe: Characteristic,
        onMatterMessageListener: (socket: Channel<ByteArray>, data: ByteArray) => void,
        _additionalCommissioningRelatedData?: ByteArray,
    ): Promise<NobleBleChannel> {
        let mtu = peripheral.mtu ?? 0;
        if (mtu > BLE_MAXIMUM_BTP_MTU) {
            mtu = BLE_MAXIMUM_BTP_MTU;
        }
        logger.debug(`Using MTU=${mtu} (Peripheral MTU=${peripheral.mtu})`); // TODO Fix noble types
        const btpHandshakeRequest = BtpCodec.encodeBtpHandshakeRequest({
            versions: BTP_SUPPORTED_VERSIONS,
            attMtu: mtu,
            clientWindowSize: BTP_MAXIMUM_WINDOW_SIZE,
        });
        logger.debug(`sending BTP handshake request: ${Logger.toJSON(btpHandshakeRequest)}`);
        await characteristicC1ForWrite.writeAsync(Buffer.from(btpHandshakeRequest.buffer), false);

        const btpHandshakeTimeout = Time.getTimer(BTP_CONN_RSP_TIMEOUT_MS, async () => {
            await peripheral.disconnectAsync();
            logger.debug("Handshake Response not received. Disconnected from peripheral");
        }).start();

        logger.debug("subscribing to C2 characteristic");
        await characteristicC2ForSubscribe.subscribeAsync();

        const { promise: handshakeResponseReceivedPromise, resolver } = await getPromiseResolver<Buffer>();

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
            new ByteArray(handshakeResponse),
            // callback to write data to characteristic C1
            async (data: ByteArray) => {
                return await characteristicC1ForWrite.writeAsync(Buffer.from(data.buffer), false);
            },
            // callback to disconnect the BLE connection
            async () =>
                void characteristicC2ForSubscribe
                    .unsubscribeAsync()
                    .then(() => peripheral.disconnectAsync().then(() => logger.debug("disconnected from peripheral"))),
            // callback to forward decoded and de-assembled Matter messages to ExchangeManager
            async (data: ByteArray) => {
                if (onMatterMessageListener === undefined) {
                    throw new InternalError(`No listener registered for Matter messages`);
                }
                onMatterMessageListener(nobleChannel, data);
            },
        );

        characteristicC2ForSubscribe.on("data", (data, isNotification) => {
            logger.debug(`received data on C2: ${data.toString("hex")} (isNotification: ${isNotification})`);

            void btpSession.handleIncomingBleData(new ByteArray(data));
        });

        const nobleChannel = new NobleBleChannel(peripheral, btpSession);
        return nobleChannel;
    }

    private connected = true;

    constructor(
        private readonly peripheral: Peripheral,
        private readonly btpSession: BtpSessionHandler,
    ) {
        peripheral.on("disconnect", () => {
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
    async send(data: ByteArray) {
        if (!this.connected) {
            logger.debug("Cannot send data because not connected to peripheral.");
            return;
        }
        if (this.btpSession === undefined) {
            throw new BtpFlowError(`Cannot send data, no BTP session initialized`);
        }
        await this.btpSession.sendMatterMessage(data);
    }

    // Channel<ByteArray>
    get name() {
        return `ble://${this.peripheral.address}`;
    }

    async close() {
        await this.btpSession.close();
        await this.peripheral.disconnectAsync();
    }
}
