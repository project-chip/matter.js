/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InstanceBroadcaster, Scanner, TransportInterface } from "@project-chip/matter.js/common";
import { Ble } from "@project-chip/matter.js/ble";
import { BlenoBleServer } from "./BlenoBleServer";
import { BlePeripheralInterface } from "./BlePeripheralInterface";
import { BleBroadcaster } from "./BleBroadcaster";
import { ByteArray } from "@project-chip/matter.js/util";
import { NobleBleClient } from "./NobleBleClient";
import { BleScanner } from "./BleScanner";
import { NobleBleCentralInterface } from "./NobleBleChannel";
import { NetInterface } from "@project-chip/matter.js/net";

export class BleNode extends Ble {
    private blePeripheral: BlenoBleServer | undefined;
    private bleCentral: NobleBleClient | undefined;

    constructor() {
        super();
    }

    getBlePeripheralInterface(): TransportInterface {
        if (this.blePeripheral === undefined) {
            this.blePeripheral = new BlenoBleServer();
        }
        return new BlePeripheralInterface(this.blePeripheral);
    }

    getBleCentralInterface(): NetInterface {
        if (this.bleCentral === undefined) {
            this.bleCentral = new NobleBleClient();
        }
        return new NobleBleCentralInterface();
    }

    getBleBroadcaster(additionalAdvertisementData?: ByteArray): InstanceBroadcaster {
        if (this.blePeripheral === undefined) {
            this.blePeripheral = new BlenoBleServer();
        }
        return new BleBroadcaster(this.blePeripheral, additionalAdvertisementData);
    }

    getBleScanner(): Scanner {
        if (this.bleCentral === undefined) {
            this.bleCentral = new NobleBleClient();
        }
        return new BleScanner(this.bleCentral);
    }
}
