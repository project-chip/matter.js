/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, Logger } from "@matter/general";
import {
    BtpCodec,
    CommissionerInstanceData,
    CommissioningMode,
    CommissioningModeInstanceData,
    InstanceBroadcaster,
} from "@matter/protocol";
import { VendorId } from "@matter/types";
import { BlenoBleServer } from "./BlenoBleServer.js";

const logger = Logger.get("BleBroadcaster");

export class BleBroadcaster implements InstanceBroadcaster {
    #blenoServer: BlenoBleServer;
    #additionalAdvertisementData?: Uint8Array;
    #vendorId: VendorId | undefined;
    #productId: number | undefined;
    #discriminator: number | undefined;
    #advertise = false;
    #isClosed = false;

    constructor(blenoServer: BlenoBleServer, additionalAdvertisementData?: Uint8Array) {
        this.#blenoServer = blenoServer;
        this.#additionalAdvertisementData = additionalAdvertisementData;
    }

    async setCommissionMode(
        mode: number,
        { name: deviceName, deviceType, vendorId, productId, discriminator }: CommissioningModeInstanceData,
    ) {
        this.#assertOpen();
        if (mode !== CommissioningMode.Basic) {
            this.#advertise = false;
            logger.info(
                `skip BLE announce because of commissioning mode ${mode} ${deviceName} ${deviceType} ${vendorId} ${productId} ${discriminator}`,
            );
            await this.#blenoServer.stopAdvertising();
            return;
        }
        logger.debug(
            `set data for commissioning mode ${mode} ${deviceName} ${deviceType} ${vendorId} ${productId} ${discriminator}`,
        );
        this.#productId = productId;
        this.#vendorId = vendorId;
        this.#discriminator = discriminator;
        process.env["BLENO_DEVICE_NAME"] = deviceName;
        this.#advertise = true;
    }

    async setFabrics() {
        this.#assertOpen();
        this.#advertise = false;
        logger.info(`skip BLE announce because announcing an operational device is not supported`);
        await this.#blenoServer.stopAdvertising();
        return; // Not needed because we only advertise un-commissioned devices
    }

    async setCommissionerInfo(_commissionerData: CommissionerInstanceData) {
        this.#assertOpen();
        this.#advertise = false;
        logger.error(`skip BLE announce because announcing a commissioner is not supported`);
    }

    async announce() {
        this.#assertOpen();
        if (this.#vendorId === undefined || this.#productId === undefined || this.#discriminator === undefined) {
            logger.debug(
                `skip BLE announce because of missing commissioning data vendorId, productId or discriminator`,
            );
            return;
        }
        if (!this.#advertise) {
            logger.debug(`skip BLE announce because nothing to advertise`);
            return;
        }

        const advertisementData = BtpCodec.encodeBleAdvertisementData(
            this.#discriminator,
            this.#vendorId,
            this.#productId,
            this.#additionalAdvertisementData !== undefined && this.#additionalAdvertisementData.length > 0,
        );

        // TODO if needed implement this according to the spec 5.4.2.5.3. (first 30s 20-60ms, 150-1285ms after)
        process.env["BLENO_ADVERTISING_INTERVAL"] = "100"; // use statically 100ms for now

        await this.#blenoServer.advertise(advertisementData, this.#additionalAdvertisementData);
    }

    async expireCommissioningAnnouncement() {
        this.#assertOpen();
        this.#advertise = false;
        await this.#blenoServer.stopAdvertising();
    }

    async expireFabricAnnouncement() {
        // nothing to do
    }

    async expireAllAnnouncements() {
        this.#assertOpen();
        this.#advertise = false;
        await this.#blenoServer.stopAdvertising();
    }

    async close() {
        if (this.#isClosed) {
            return;
        }
        this.#isClosed = true;

        await this.#blenoServer.stopAdvertising();
    }

    #assertOpen() {
        if (this.#isClosed) {
            throw new ImplementationError("Illegal operation on closed BleBroadcaster");
        }
    }
}
