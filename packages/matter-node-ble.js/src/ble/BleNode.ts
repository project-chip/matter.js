/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { TransportInterface } from "@project-chip/matter.js/common";
import { Ble } from "@project-chip/matter.js/ble";
import { BlenoBleServer } from "./BlenoBleServer";
import { BleNetworkInterface } from "./BleNetworkInterface";
import { BleBroadcaster } from "./BleBroadcaster";
import { ByteArray } from "@project-chip/matter.js/util";

export class BleNode extends Ble {
    private blePeripheral: BlenoBleServer | undefined;

    constructor() {
        super();
    }

    getBlePeripheralNetworkInterface(): TransportInterface {
        if (this.blePeripheral === undefined) {
            this.blePeripheral = new BlenoBleServer();
        }
        return new BleNetworkInterface(this.blePeripheral);
    }

    getBleBroadcaster(additionalAdvertisementData?: ByteArray) {
        if (this.blePeripheral === undefined) {
            this.blePeripheral = new BlenoBleServer();
        }
        return new BleBroadcaster(this.blePeripheral, additionalAdvertisementData);
    }

    getBleCentralNetworkInterface(): TransportInterface {
        throw new Error("Method not implemented.");
    }
}
