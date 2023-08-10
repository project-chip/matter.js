/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BtpCodec } from "@project-chip/matter.js/codec";
import {
    CommissionerInstanceData,
    CommissioningModeInstanceData,
    InstanceBroadcaster,
} from "@project-chip/matter.js/common";
import { VendorId } from "@project-chip/matter.js/datatype";
import { Logger } from "@project-chip/matter.js/log";
import { ByteArray } from "@project-chip/matter.js/util";
import { BlenoBleServer } from "./BlenoBleServer";

const logger = Logger.get("BleBroadcaster");

export class BleBroadcaster implements InstanceBroadcaster {
    private vendorId: VendorId | undefined;
    private productId: number | undefined;
    private discriminator: number | undefined;
    private advertise = false;

    constructor(
        private readonly blenoServer: BlenoBleServer,
        private readonly additionalAdvertisementData?: ByteArray,
    ) {}

    async setCommissionMode(
        mode: number,
        { deviceName, deviceType, vendorId, productId, discriminator }: CommissioningModeInstanceData,
    ) {
        if (mode !== 1) {
            this.advertise = false;
            logger.info(
                `skip BLE announce because of commissioning mode ${mode} ${deviceName} ${deviceType} ${vendorId} ${productId} ${discriminator}`,
            );
            await this.blenoServer.stopAdvertising();
            return;
        }
        logger.debug(
            `store data for commissioning mode ${mode} ${deviceName} ${deviceType} ${vendorId} ${productId} ${discriminator}`,
        );
        this.productId = productId;
        this.vendorId = vendorId;
        this.discriminator = discriminator;
        process.env["BLENO_DEVICE_NAME"] = deviceName;
        this.advertise = true;
    }

    async setFabrics() {
        this.advertise = false;
        logger.info(`skip BLE announce because announcing an operational device is not supported`);
        await this.blenoServer.stopAdvertising();
        return; // Not needed because we only advertise un-commissioned devices
    }

    async setCommissionerInfo(_commissionerData: CommissionerInstanceData) {
        this.advertise = false;
        logger.error(`skip BLE announce because announcing a commissioner is not supported`);
    }

    async announce() {
        if (this.vendorId === undefined || this.productId === undefined || this.discriminator === undefined) {
            logger.debug(
                `skip BLE announce because of missing commissioning data vendorId, productId or discriminator`,
            );
            return;
        }
        if (!this.advertise) {
            logger.debug(`skip BLE announce because nothing to advertise`);
            return;
        }

        const advertisementData = BtpCodec.encodeBleAdvertisementData(
            this.discriminator,
            this.vendorId,
            this.productId,
            this.additionalAdvertisementData !== undefined && this.additionalAdvertisementData.length > 0,
        );

        // TODO if needed implement this according to the spec 5.4.2.5.3. (first 30s 20-60ms, 150-1200ms after)
        process.env["BLENO_ADVERTISING_INTERVAL"] = "100"; // use statically 100ms for now

        await this.blenoServer.advertise(advertisementData, this.additionalAdvertisementData);
    }

    async close() {
        await this.blenoServer.stopAdvertising();
    }
}
