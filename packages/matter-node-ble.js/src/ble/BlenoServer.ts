/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Bleno from "@abandonware/bleno";
import { Logger } from "@project-chip/matter.js/log";
import { ByteArray, getPromiseResolver } from "@project-chip/matter.js/util";
import { MatterCoreSpecificationV1_1 } from "@project-chip/matter.js/spec";
import { BTPSessionHandler } from "@project-chip/matter.js/ble";
import { Channel } from "@project-chip/matter.js/common";

const logger = Logger.get("BlenoServer");

/** @see {@link MatterCoreSpecificationV1_1} § 4.17.3.2 */
const MATTER_SERVICE_UUID = "fff6";
const MATTER_C1_CHARACTERISTIC_UUID = "18EE2EF5-263D-4559-959F-4F9C429F9D11";
const MATTER_C2_CHARACTERISTIC_UUID = "18EE2EF5-263D-4559-959F-4F9C429F9D12";
const MATTER_C3_CHARACTERISTIC_UUID = "64630238-8772-45F2-B87D-748A83218F04";

class MatterWriteCharacteristicC1 extends Bleno.Characteristic {
    constructor(
        private readonly blenoServer: BlenoServer
    ) {
        super({
            uuid: MATTER_C1_CHARACTERISTIC_UUID,
            properties: ['write']
        });
    }

    override onWriteRequest(data: Buffer, offset: number, withoutResponse: boolean, callback: (result: number) => void) {
        logger.debug(`C1 write request: ${data.toString('hex')} ${offset} ${withoutResponse}`);

        try {
            this.blenoServer.handleC1WriteRequest(data, offset, withoutResponse);
            callback(this.RESULT_SUCCESS);
        } catch (e) {
            logger.error(`C1 write request failed: ${e}`);
            callback(this.RESULT_UNLIKELY_ERROR);
        }
    }
}

class MatterIndicateCharacteristicC2 extends Bleno.Characteristic {
    constructor(
        private readonly blenoServer: BlenoServer
    ) {
        super({
            uuid: MATTER_C2_CHARACTERISTIC_UUID,
            properties: ['indicate']
        });
    }

    override onSubscribe(maxValueSize: number, updateValueCallback: (data: Buffer) => void) {
        logger.debug(`C2 subscribe ${maxValueSize}`);

        this.blenoServer.handleC2SubscribeRequest(maxValueSize, updateValueCallback);
    }

    override onUnsubscribe() {
        logger.debug('C2 unsubscribe');
    }

    override onIndicate() {
        logger.debug('C2 indicate');
        this.blenoServer.handleC2Indicate();
    }
}

class MatterReadCharacteristicC3 extends Bleno.Characteristic {
    constructor(
        private readonly blenoServer: BlenoServer
    ) {
        super({
            uuid: MATTER_C3_CHARACTERISTIC_UUID,
            properties: ['read']
        });
    }

    override onReadRequest(offset: number, callback: (result: number, data?: Buffer) => void) {
        try {
            const data = this.blenoServer.handleC3ReadRequest(offset);
            logger.debug(`C3 read request: ${data.toString('hex')} ${offset}`);
            callback(this.RESULT_SUCCESS, data);
        } catch (e) {
            logger.debug(`C3 read request failed : ${e} ${offset}`);
            callback(this.RESULT_INVALID_OFFSET);
        }
    }
}

class MatterBleService extends Bleno.PrimaryService {
    constructor(
        blenoServer: BlenoServer
    ) {
        super({
            uuid: MATTER_SERVICE_UUID,
            characteristics: [
                new MatterWriteCharacteristicC1(blenoServer),
                new MatterIndicateCharacteristicC2(blenoServer),
                new MatterReadCharacteristicC3(blenoServer),
            ]
        });
    }
}

/**
 * Implements the Matter over BLE server using Bleno as Peripheral.
 *
 * Note: Bleno is only supporting a single connection at a time right now - mainly because it also only can announce
 * one BLE device at a time!
 */
export class BlenoServer implements Channel<ByteArray> {
    private state = "unknown";
    isAdvertising = false;
    private additionalAdvertisingData: Buffer = Buffer.alloc(0);
    private advertisingData: Buffer | undefined;

    private latestHandshakePayload: Buffer | undefined;
    private btpSession: BTPSessionHandler | undefined;

    private onMatterMessageListener: ((socket: Channel<ByteArray>, data: ByteArray) => void) | undefined;
    private writeConformationResolver: ((value: void) => void) | undefined;

    private clientAddress: string | undefined;

    private readonly matterBleService = new MatterBleService(this);

    constructor() {
        // Bleno gets automatically initialized on import already!

        // Write Bleno into this class
        Bleno.on('stateChange', (state) => {
            if (state === this.state) return;
            this.state = state;
            logger.debug(`stateChange: ${state}, address = ${Bleno.address}`);
            if (state !== 'poweredOn') {
                Bleno.stopAdvertising();
                this.isAdvertising = false;
            } else if (this.advertisingData) {
                Bleno.startAdvertisingWithEIRData(this.advertisingData);
                this.isAdvertising = true;
            }
        });

        // Linux only events /////////////////
        Bleno.on('accept', (clientAddress) => {
            logger.debug(`accept, client: ${clientAddress}`);
            this.clientAddress = clientAddress;
            Bleno.updateRssi();
        });

        Bleno.on('disconnect', (clientAddress) => {
            logger.debug(`disconnect, client: ${clientAddress}`);
            this.btpSession?.close();
            this.btpSession = undefined;
        });

        Bleno.on('rssiUpdate', (rssi) => {
            logger.debug(`rssiUpdate: ${rssi}`);
        });
        //////////////////////////////////////

        Bleno.on('mtuChange', (mtu) => {
            logger.debug(`mtuChange: ${mtu}`);
        });

        Bleno.on('advertisingStart', (error) => {
            logger.debug(`advertisingStart: ${error ? `error ${error}` : 'success'}`);

            if (!error) {
                Bleno.setServices([this.matterBleService]);
            }
            // TODO handle transport error
        });

        Bleno.on('advertisingStop', () => {
            logger.debug('advertisingStop');
        });

        Bleno.on('servicesSet', (error) => {
            logger.debug(`servicesSet: ${error ? `error ${error}` : 'success'}`);
        });
    }

    /**
     * Process a Write request on characteristic C1 from the Matter service.
     * The data are checked if it might be a handshake request and stored until the subscribe request comes in.
     * Otherwise, the data are forwarded to the BTP session handler to be decoded and processed.
     *
     * @param data
     * @param offset
     * @param withoutResponse
     */
    handleC1WriteRequest(data: Buffer, offset: number, withoutResponse: boolean) {
        if (offset !== 0 || withoutResponse) {
            throw new Error(`Offset ${offset} or withoutResponse ${withoutResponse} not supported`);
        }

        if (data[0] === 0x65 && data[1] === 0x6c && data.length === 9) { // Check if the first two bytes and length match the Matter handshake
            logger.info(`Received Matter handshake request: ${data.toString('hex')}, store until subscribe request comes in.`);
            this.latestHandshakePayload = data;
            // TODO Handle edge case where handshake comes with an already open BTP session (should never happen?)
        } else {
            if (this.btpSession !== undefined) {
                logger.debug(`Received Matter data for BTP Session: ${data.toString('hex')}`);
                this.btpSession.handleIncomingBleData(ByteArray.from(data));
            } else {
                throw new Error(`Received Matter data but no BTP session was initialized: ${data.toString('hex')}`);
            }
        }
    }

    /**
     * Process a Subscribe request on characteristic C2 from the Matter service.
     * This is expected directly after a handshake request and initializes the BTP session handler with the stored
     * handshake payload.
     * The BTPSessionHandler instance is wired with the bleno instance for sending data and disconnecting.
     *
     * @param maxValueSize
     * @param updateValueCallback
     */
    handleC2SubscribeRequest(maxValueSize: number, updateValueCallback: (data: Buffer) => void) {
        if (this.latestHandshakePayload === undefined) {
            throw new Error(`Subscription request received before handshake Request`);
        }

        this.btpSession = new BTPSessionHandler(
            Math.min(Bleno.mtu - 3, maxValueSize),
            this.latestHandshakePayload,

            // callback to write data to characteristic C2
            async (data: ByteArray) => {
                updateValueCallback(Buffer.from(data.buffer));
                const { promise, resolver } = await getPromiseResolver<void>();
                this.writeConformationResolver = resolver;

                return promise;
            },

            // callback to disconnect the BLE connection
            () => this.close(),

            // callback to forward decoded an de-assembled Matter messages to ExchangeManager
            (data: ByteArray) => {
                if (this.onMatterMessageListener === undefined) {
                    throw new Error(`No listener registered for Matter messages`);
                }
                this.onMatterMessageListener(this, data);
            }
        );
        this.latestHandshakePayload = undefined; // BTP Session initialized, handshake payload not needed anymore
    }

    handleC2Indicate() {
        if (this.writeConformationResolver !== undefined) {
            this.writeConformationResolver();
            this.writeConformationResolver = undefined;
        } else {
            logger.warn(`Received C2 indication but no former write expected a confirmation`);
        }
    }

    /**
     * Process a Read request on characteristic C3 from the Matter service.
     * The relevant data needs optionally to be set before advertising, else empty data are used.
     *
     * @param offset
     */
    handleC3ReadRequest(offset: number) {
        if (offset > this.additionalAdvertisingData.length) {
            throw new Error(`Offset ${offset} is larger than data ${this.additionalAdvertisingData.length}`);
        } else {
            return this.additionalAdvertisingData.slice(offset);
        }
    }

    advertise(advertiseData: ByteArray, additionalAdvertisementData?: ByteArray) {
        //const advertiseBuffer = Buffer.alloc(15);
        this.advertisingData = Buffer.from(advertiseData.buffer);

        if (additionalAdvertisementData) {
            this.additionalAdvertisingData = Buffer.from(additionalAdvertisementData.buffer);
        } else {
            this.additionalAdvertisingData = Buffer.alloc(0);
        }

        if (this.state === 'poweredOn') {
            Bleno.startAdvertisingWithEIRData(this.advertisingData);
            this.isAdvertising = true;
        } else {
            logger.debug(`State is ${this.state}, advertise when powered on`);
        }
    }

    stopAdvertising() {
        if (this.isAdvertising) {
            Bleno.stopAdvertising();
            this.isAdvertising = false;
        }
    }

    setMatterMessageListener(listener: (socket: Channel<ByteArray>, data: ByteArray) => void) {
        if (this.onMatterMessageListener !== undefined) {
            throw new Error(`onData listener already set`);
        }
        this.onMatterMessageListener = listener;
    }

    close() {
        Bleno.disconnect();
        this.btpSession?.close();
        this.btpSession = undefined;
    }

    // Channel<ByteArray>
    /**
     * Send a Matter message to the connected device - need to do BTP assembly first.
     *
     * @param data
     */
    async send(data: ByteArray) {
        if (this.btpSession === undefined) {
            throw new Error(`Can not send data, no BTP session initialized`);
        }
        await this.btpSession.sendMatterMessage(data);
    }

    // Channel<ByteArray>
    getName() {
        return `ble://${this.clientAddress}`;
    }
}
