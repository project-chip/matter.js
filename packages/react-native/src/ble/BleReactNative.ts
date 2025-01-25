/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChannelType, ImplementationError, NetInterface, TransportInterface } from "#general";
import { Ble, InstanceBroadcaster, Scanner } from "#protocol";
import { BleScanner } from "./BleScanner.js";
import { ReactNativeBleCentralInterface } from "./ReactNativeBleChannel.js";
import { ReactNativeBleClient } from "./ReactNativeBleClient.js";

export class BleReactNative extends Ble {
    private bleCentral: ReactNativeBleClient | undefined;

    constructor() {
        super();
    }

    getBleCentralInterface(): NetInterface {
        if (this.bleCentral === undefined) {
            this.bleCentral = new ReactNativeBleClient();
        }
        return new ReactNativeBleCentralInterface();
    }

    getBleScanner(): Scanner {
        if (this.bleCentral === undefined) {
            this.bleCentral = new ReactNativeBleClient();
        }
        return new BleScanner(this.bleCentral);
    }

    getBlePeripheralInterface(): TransportInterface {
        throw new ImplementationError("React Native can only act as a central device, not a peripheral.");
    }

    getBleBroadcaster(): InstanceBroadcaster {
        throw new ImplementationError("React Native can only act as a central device, not a broadcaster.");
    }

    supports(type: ChannelType) {
        return type === ChannelType.BLE;
    }
}
