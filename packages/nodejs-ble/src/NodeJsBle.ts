/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetInterface, TransportInterface } from "@matter/general";
import { Ble, InstanceBroadcaster, Scanner } from "@matter/protocol";
import { BleBroadcaster } from "./BleBroadcaster.js";
import { BlePeripheralInterface } from "./BlePeripheralInterface.js";
import { BleScanner } from "./BleScanner.js";
import { BlenoBleServer } from "./BlenoBleServer.js";
import { NobleBleCentralInterface } from "./NobleBleChannel.js";
import { NobleBleClient } from "./NobleBleClient.js";

export type BleOptions = {
    hciId?: number;
};

export class NodeJsBle extends Ble {
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

    getBleBroadcaster(additionalAdvertisementData?: Uint8Array): InstanceBroadcaster {
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
