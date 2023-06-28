/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import {TransportInterface} from "@project-chip/matter.js/common";
import {Bluetooth} from "@project-chip/matter.js/ble";
import {BlenoServer} from "./BlenoServer";
import {BleNetworkInterface} from "./BleNetworkInterface";
import {BleBroadcaster} from "./BleBroadcaster";
import {ByteArray} from "@project-chip/matter.js/util";

export class BluetoothNode extends Bluetooth {
    private blePeripheral: BlenoServer | undefined;

    constructor() {
        super();
    }

    getBlePeripheralNetworkInterface(): TransportInterface {
        if (this.blePeripheral === undefined) {
            this.blePeripheral = new BlenoServer();
        }
        return new BleNetworkInterface(this.blePeripheral);
    }

    getBleBroadcaster(additionalAdvertisementData?: ByteArray){
        if (this.blePeripheral === undefined) {
            this.blePeripheral = new BlenoServer();
        }
        return new BleBroadcaster(this.blePeripheral, additionalAdvertisementData);
    }

    getBleCentralNetworkInterface(): TransportInterface {
        throw new Error("Method not implemented.");
    }
}
