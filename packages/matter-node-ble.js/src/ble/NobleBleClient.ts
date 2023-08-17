/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Peripheral } from "@abandonware/noble";
import { BLE_MATTER_SERVICE_UUID } from "@project-chip/matter.js/ble";
import { Logger } from "@project-chip/matter.js/log";
import { ByteArray } from "@project-chip/matter.js/util";
import { BleOptions } from "./BleNode";

const logger = Logger.get("NobleBleClient");
let noble: typeof import("@abandonware/noble");

function loadNoble(hciId?: number) {
    // load noble driver with the correct device selected
    if (hciId !== undefined) {
        process.env.NOBLE_HCI_DEVICE_ID = hciId.toString();
    }
    try {
        noble = require("@abandonware/noble");
        if (typeof noble.on !== "function") {
            // The following commit broke the default exported instance of noble:
            // https://github.com/abandonware/noble/commit/b67eea246f719947fc45b1b52b856e61637a8a8e
            noble = (noble as any)({ extended: false });
        }
    } catch (error: any) {
        logger.error(`Error loading noble: ${error.message}`);
        throw error;
    }
}

export class NobleBleClient {
    private readonly discoveredPeripherals = new Map<
        string,
        { peripheral: Peripheral; matterServiceData: ByteArray }
    >();
    private shouldScan = false;
    private isScanning = false;
    private nobleState = "unknown";
    private deviceDiscoveredCallback: ((peripheral: Peripheral, manufacturerData: ByteArray) => void) | undefined;

    constructor(options?: BleOptions) {
        loadNoble(options?.hciId);
        noble.on("stateChange", state => {
            this.nobleState = state;
            logger.debug(`Noble state changed to ${state}`);
            if (state === "poweredOn") {
                if (this.shouldScan) {
                    void this.startScanning();
                }
            } else {
                void this.stopScanning();
            }
        });
        noble.on("discover", peripheral => this.handleDiscoveredDevice(peripheral));
        noble.on("scanStart", () => (this.isScanning = true));
        noble.on("scanStop", () => (this.isScanning = false));
    }

    public setDiscoveryCallback(callback: (peripheral: Peripheral, manufacturerData: ByteArray) => void) {
        this.deviceDiscoveredCallback = callback;
        for (const { peripheral, matterServiceData } of this.discoveredPeripherals.values()) {
            this.deviceDiscoveredCallback(peripheral, matterServiceData);
        }
    }

    public async startScanning() {
        if (this.isScanning) return;

        this.shouldScan = true;
        if (this.nobleState === "poweredOn") {
            logger.debug("Start scanning for Matter Services ...");
            await noble.startScanningAsync([BLE_MATTER_SERVICE_UUID], false);
        } else {
            logger.debug("noble state is not poweredOn ... delay scanning till poweredOn");
        }
    }

    public async stopScanning() {
        this.shouldScan = false;
        await noble.stopScanningAsync();
    }

    private handleDiscoveredDevice(peripheral: Peripheral) {
        // The advertisement data contains a name, power level (if available), certain advertised service uuids,
        // as well as manufacturer data.
        // {"localName":"MATTER-3840","serviceData":[{"uuid":"fff6","data":{"type":"Buffer","data":[0,0,15,241,255,1,128,0]}}],"serviceUuids":["fff6"],"solicitationServiceUuids":[],"serviceSolicitationUuids":[]}
        logger.debug(
            `Found peripheral ${peripheral.address} (${peripheral.advertisement.localName}): ${Logger.toJSON(
                peripheral.advertisement,
            )}`,
        );

        if (!peripheral.connectable) {
            logger.info(`Peripheral ${peripheral.address} is not connectable ... ignoring`);
            return;
        }
        const matterServiceData = peripheral.advertisement.serviceData.find(
            serviceData => serviceData.uuid === BLE_MATTER_SERVICE_UUID,
        );
        if (matterServiceData === undefined || matterServiceData.data.length !== 8) {
            logger.info(`Peripheral ${peripheral.address} does not advertise Matter Service ... ignoring`);
            return;
        }

        this.discoveredPeripherals.set(peripheral.address, { peripheral, matterServiceData: matterServiceData.data });

        this.deviceDiscoveredCallback?.(peripheral, matterServiceData.data);
    }
}
