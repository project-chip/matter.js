/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Ble } from "@project-chip/matter.js/ble";
import { InstanceBroadcaster, Scanner, TransportInterface } from "@project-chip/matter.js/common";
import { NetInterface } from "@project-chip/matter.js/net";
import { ByteArray } from "@project-chip/matter.js/util";
import { BleBroadcaster } from "./BleBroadcaster.js";
import { BlePeripheralInterface } from "./BlePeripheralInterface.js";
import { BleScanner } from "./BleScanner.js";
import { BlenoBleServer } from "./BlenoBleServer.js";
import { NobleBleCentralInterface } from "./NobleBleChannel.js";
import { NobleBleClient } from "./NobleBleClient.js";

export type BleOptions = {
    hciId?: number;
};

export class BleNode extends Ble {
    private blePeripheral: BlenoBleServer | undefined;
    private bleCentral: NobleBleClient | undefined;

    constructor(private readonly options?: BleOptions) {
        super();
    }

    getBlePeripheralInterface(): TransportInterface {
        if (this.blePeripheral === undefined) {
            this.blePeripheral = new BlenoBleServer(this.options);
        }
        return new BlePeripheralInterface(this.blePeripheral);
    }

    getBleCentralInterface(): NetInterface {
        if (this.bleCentral === undefined) {
            this.bleCentral = new NobleBleClient(this.options);
        }
        return new NobleBleCentralInterface();
    }

    getBleBroadcaster(additionalAdvertisementData?: ByteArray): InstanceBroadcaster {
        if (this.blePeripheral === undefined) {
            this.blePeripheral = new BlenoBleServer(this.options);
        }
        return new BleBroadcaster(this.blePeripheral, additionalAdvertisementData);
    }

    getBleScanner(): Scanner {
        if (this.bleCentral === undefined) {
            this.bleCentral = new NobleBleClient(this.options);
        }
        return new BleScanner(this.bleCentral);
    }
}
