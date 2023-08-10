/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Peripheral } from "@abandonware/noble";
import { BleError } from "@project-chip/matter.js/ble";
import { BtpCodec } from "@project-chip/matter.js/codec";
import {
    CommissionableDevice,
    CommissionableDeviceIdentifiers,
    Scanner,
    ServerAddressIp,
} from "@project-chip/matter.js/common";
import { VendorId } from "@project-chip/matter.js/datatype";
import { Logger } from "@project-chip/matter.js/log";
import { Time, Timer } from "@project-chip/matter.js/time";
import { ByteArray, getPromiseResolver } from "@project-chip/matter.js/util";
import { NobleBleClient } from "./NobleBleClient";

const logger = Logger.get("BleScanner");

export type DiscoveredBleDevice = {
    deviceData: CommissionableDeviceData;
    peripheral: Peripheral;
    hasAdditionalAdvertisementData: boolean;
};

type CommissionableDeviceData = CommissionableDevice & {
    SD: number; // Additional Field for Short discriminator
};

export class BleScanner implements Scanner {
    private readonly recordWaiters = new Map<string, { resolver: () => void; timer: Timer }>();
    private readonly discoveredMatterDevices = new Map<string, DiscoveredBleDevice>();

    constructor(private readonly nobleClient: NobleBleClient) {
        this.nobleClient.setDiscoveryCallback((address, manufacturerData) =>
            this.handleDiscoveredDevice(address, manufacturerData),
        );
    }

    public getDiscoveredDevice(address: string): DiscoveredBleDevice {
        const device = this.discoveredMatterDevices.get(address);
        if (device === undefined) {
            throw new BleError(`No device found for address ${address}`);
        }
        return device;
    }

    /**
     * Registers a deferred promise for a specific queryId together with a timeout and return the promise.
     * The promise will be resolved when the timer runs out latest.
     */
    private async registerWaiterPromise(queryId: string, timeoutSeconds: number) {
        const { promise, resolver } = await getPromiseResolver<void>();
        const timer = Time.getTimer(timeoutSeconds * 1000, () => this.finishWaiter(queryId, true)).start();
        this.recordWaiters.set(queryId, { resolver, timer });
        logger.debug(`Registered waiter for query ${queryId} with timeout ${timeoutSeconds} seconds`);
        return { promise };
    }

    /**
     * Remove a waiter promise for a specific queryId and stop the connected timer. If required also resolve the
     * promise.
     */
    private finishWaiter(queryId: string, resolvePromise = false) {
        const waiter = this.recordWaiters.get(queryId);
        if (waiter === undefined) return;
        const { timer, resolver } = waiter;
        logger.debug(`Finishing waiter for query ${queryId}, resolving: ${resolvePromise}`);
        timer.stop();
        if (resolvePromise) {
            resolver();
        }
        this.recordWaiters.delete(queryId);
    }

    private handleDiscoveredDevice(peripheral: Peripheral, manufacturerServiceData: ByteArray) {
        logger.debug(`Discovered device ${peripheral.address} ${manufacturerServiceData?.toHex()}`);

        try {
            const { discriminator, vendorId, productId, hasAdditionalAdvertisementData } =
                BtpCodec.decodeBleAdvertisementServiceData(manufacturerServiceData);

            const commissionableDevice: CommissionableDeviceData = {
                D: discriminator,
                SD: (discriminator >> 8) & 0x0f,
                VP: `${vendorId}+${productId}`,
                CM: 1, // Can be no other mode,
                addresses: [{ type: "ble", peripheralAddress: peripheral.address }],
            };
            logger.debug(`Discovered device ${peripheral.address} data: ${JSON.stringify(commissionableDevice)}`);

            this.discoveredMatterDevices.set(peripheral.address, {
                deviceData: commissionableDevice,
                peripheral: peripheral,
                hasAdditionalAdvertisementData,
            });

            const queryKey = this.findCommissionableQueryIdentifier(commissionableDevice);
            if (queryKey !== undefined) {
                this.finishWaiter(queryKey, true);
            }
        } catch (error) {
            logger.debug(`Seems not to be a valid Matter device: Failed to decode device data: ${error}`);
        }
    }

    private findCommissionableQueryIdentifier(record: CommissionableDeviceData) {
        const longDiscriminatorQueryId = this.buildCommissionableQueryIdentifier({ longDiscriminator: record.D });
        if (this.recordWaiters.has(longDiscriminatorQueryId)) {
            return longDiscriminatorQueryId;
        }

        const shortDiscriminatorQueryId = this.buildCommissionableQueryIdentifier({ shortDiscriminator: record.SD });
        if (this.recordWaiters.has(shortDiscriminatorQueryId)) {
            return shortDiscriminatorQueryId;
        }

        if (record.VP !== undefined) {
            const vendorIdQueryId = this.buildCommissionableQueryIdentifier({
                vendorId: VendorId(parseInt(record.VP.split("+")[0])),
            });
            if (this.recordWaiters.has(vendorIdQueryId)) {
                return vendorIdQueryId;
            }
            if (record.VP.includes("+")) {
                const productIdQueryId = this.buildCommissionableQueryIdentifier({
                    vendorId: VendorId(parseInt(record.VP.split("+")[1])),
                });
                if (this.recordWaiters.has(productIdQueryId)) {
                    return productIdQueryId;
                }
            }
        }

        if (this.recordWaiters.has("*")) {
            return "*";
        }

        return undefined;
    }

    /**
     * Builds an identifier string for commissionable queries based on the given identifier object.
     * Some identifiers are identical to the official DNS-SD identifiers, others are custom.
     */
    private buildCommissionableQueryIdentifier(identifier: CommissionableDeviceIdentifiers) {
        if ("longDiscriminator" in identifier) {
            return `D:${identifier.longDiscriminator}`;
        } else if ("shortDiscriminator" in identifier) {
            return `SD:${identifier.shortDiscriminator}`;
        } else if ("vendorId" in identifier) {
            return `V:${identifier.vendorId}`;
        } else if ("productId" in identifier) {
            // Custom identifier because normally productId is only included in TXT record
            return `P:${identifier.productId}`;
        } else return "*";
    }

    private getCommissionableDevices(identifier: CommissionableDeviceIdentifiers) {
        const storedRecords = Array.from(this.discoveredMatterDevices.values());

        const foundRecords = new Array<DiscoveredBleDevice>();
        if ("longDiscriminator" in identifier) {
            foundRecords.push(...storedRecords.filter(({ deviceData: { D } }) => D === identifier.longDiscriminator));
        } else if ("shortDiscriminator" in identifier) {
            foundRecords.push(
                ...storedRecords.filter(({ deviceData: { SD } }) => SD === identifier.shortDiscriminator),
            );
        } else if ("vendorId" in identifier) {
            foundRecords.push(
                ...storedRecords.filter(
                    ({ deviceData: { VP } }) =>
                        VP === `${identifier.vendorId}` || VP?.startsWith(`${identifier.vendorId}+`),
                ),
            );
        } else if ("productId" in identifier) {
            foundRecords.push(
                ...storedRecords.filter(({ deviceData: { VP } }) => VP?.endsWith(`+${identifier.productId}`)),
            );
        } else {
            foundRecords.push(...storedRecords.filter(({ deviceData: { CM } }) => CM === 1 || CM === 2));
        }

        return foundRecords;
    }

    async findOperationalDevice(): Promise<ServerAddressIp[]> {
        logger.info(`skip BLE scan because scanning for operational devices is not supported`);
        return [];
    }

    getDiscoveredOperationalDevices(): ServerAddressIp[] {
        logger.info(`skip BLE scan because scanning for operational devices is not supported`);
        return [];
    }

    async findCommissionableDevices(
        identifier: CommissionableDeviceIdentifiers,
        timeoutSeconds = 10,
    ): Promise<CommissionableDevice[]> {
        let storedRecords = this.getCommissionableDevices(identifier);
        if (storedRecords.length === 0) {
            const queryKey = this.buildCommissionableQueryIdentifier(identifier);
            const { promise } = await this.registerWaiterPromise(queryKey, timeoutSeconds);

            await this.nobleClient.startScanning();

            await promise;

            storedRecords = this.getCommissionableDevices(identifier);
            await this.nobleClient.stopScanning();
        }
        return storedRecords.map(({ deviceData }) => deviceData);
    }

    getDiscoveredCommissionableDevices(identifier: CommissionableDeviceIdentifiers): CommissionableDevice[] {
        return this.getCommissionableDevices(identifier).map(({ deviceData }) => deviceData);
    }

    close(): void {
        void this.nobleClient.stopScanning();
        [...this.recordWaiters.keys()].forEach(queryId => this.finishWaiter(queryId, true));
    }
}
