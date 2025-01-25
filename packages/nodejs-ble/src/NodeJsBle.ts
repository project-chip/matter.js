/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
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
    #blePeripheralInstance?: BlenoBleServer;
    #bleCentralInstance?: NobleBleClient;
    #bleScanner?: BleScanner;
    #bleBroadcaster?: BleBroadcaster;
    #bleCentralInterface?: NobleBleCentralInterface;
    #blePeripheralInterface?: BlePeripheralInterface;

    constructor(private readonly options?: BleOptions) {
        super();
    }

    get #blePeripheralServer() {
        if (this.#blePeripheralInstance === undefined) {
            this.#blePeripheralInstance = new BlenoBleServer(this.options);
        }
        return this.#blePeripheralInstance;
    }

    get #bleCentralClient() {
        if (this.#bleCentralInstance === undefined) {
            this.#bleCentralInstance = new NobleBleClient(this.options);
        }
        return this.#bleCentralInstance;
    }

    getBlePeripheralInterface(): TransportInterface {
        if (this.#blePeripheralInterface === undefined) {
            this.#blePeripheralInterface = new BlePeripheralInterface(this.#blePeripheralServer);
        }
        return this.#blePeripheralInterface;
    }

    getBleCentralInterface(): NetInterface {
        if (this.#bleCentralInterface === undefined) {
            this.#bleCentralInterface = new NobleBleCentralInterface(this.getBleScanner() as BleScanner);
        }
        return this.#bleCentralInterface;
    }

    getBleBroadcaster(additionalAdvertisementData?: Uint8Array): InstanceBroadcaster {
        if (this.#bleBroadcaster === undefined) {
            this.#bleBroadcaster = new BleBroadcaster(this.#blePeripheralServer, additionalAdvertisementData);
        }
        return this.#bleBroadcaster;
    }

    getBleScanner(): Scanner {
        if (this.#bleScanner === undefined) {
            this.#bleScanner = new BleScanner(this.#bleCentralClient);
        }
        return this.#bleScanner;
    }
}
