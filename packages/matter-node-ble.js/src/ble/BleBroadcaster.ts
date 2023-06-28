/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {BlenoServer} from "./BlenoServer";
import {VendorId} from "@project-chip/matter.js/datatype";
import {Broadcaster} from "@project-chip/matter.js/common";
import {Logger} from "@project-chip/matter.js/log";
import {ByteArray, DataWriter, Endian} from "@project-chip/matter.js/util";

const logger = Logger.get('BleBroadcaster');

const MATTER_SERVICE_UUID = 0xFFF6;

export class BleBroadcaster implements Broadcaster {
    private vendorId: VendorId | undefined;
    private productId: number | undefined;
    private discriminator: number | undefined;

    constructor(
        private readonly blenoServer: BlenoServer,
        private readonly additionalAdvertisementData?: ByteArray
    ) {}

    setCommissionMode(mode: number, deviceName: string, deviceType: number, vendorId: VendorId, productId: number, discriminator: number) {
        if (mode !== 1) {
            logger.info(`skip BLE announce because of commissioning mode ${mode} ${deviceName} ${deviceType} ${vendorId.id} ${productId} ${discriminator}`);
            this.blenoServer.stopAdvertising();
            return;
        }
        logger.debug(`store data for commissioning mode ${mode} ${deviceName} ${deviceType} ${vendorId.id} ${productId} ${discriminator}`);
        this.productId = productId;
        this.vendorId = vendorId;
        this.discriminator = discriminator;
        process.env['BLENO_DEVICE_NAME'] = deviceName;
    }

    setFabrics() {
        this.blenoServer.stopAdvertising();
        return; // Not needed because we only advertise un-commissioned devices
    }

    announce() {
        if (this.vendorId === undefined || this.productId === undefined || this.discriminator === undefined) {
            logger.debug(`skip BLE announce because of missing commissioning data vendorId, productId or discriminator`);
            return;
        }
        const writer = new DataWriter(Endian.Little);
        writer.writeUInt8(0x02);
        writer.writeUInt8(0x01);
        writer.writeUInt8(0x06);
        writer.writeUInt8(0x0B);
        writer.writeUInt8(0x16)
        writer.writeUInt16(MATTER_SERVICE_UUID);
        writer.writeUInt8(0x00);
        writer.writeUInt16(this.discriminator);
        writer.writeUInt16(this.vendorId.id);
        writer.writeUInt16(this.productId);
        writer.writeUInt8((this.additionalAdvertisementData !== undefined && this.additionalAdvertisementData.length > 0) ? 0x01 : 0x00);

        // TODO if needed implement this according to the spec 5.4.2.5.3. (first 30s 20-60ms, 150-1200ms after)
        process.env['BLENO_ADVERTISING_INTERVAL'] = '100'; // use statically 100ms for now

        this.blenoServer.advertise(writer.toByteArray(), this.additionalAdvertisementData);
    }

    close() {
        this.blenoServer.stopAdvertising();
    }
}

