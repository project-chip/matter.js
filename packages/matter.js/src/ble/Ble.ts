/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InstanceBroadcaster } from "../common/InstanceBroadcaster.js";
import { MatterError, NoProviderError } from "../common/MatterError.js";
import { Scanner } from "../common/Scanner.js";
import { TransportInterface } from "../common/TransportInterface.js";
import { NetInterface } from "../net/NetInterface.js";
import { ByteArray } from "../util/ByteArray.js";

export class BleError extends MatterError {}

function BleDisabled(): Ble {
    throw new NoProviderError("No provider configured");
}

export abstract class Ble {
    static get = BleDisabled;

    static get enabled() {
        return this.get !== BleDisabled;
    }

    abstract getBlePeripheralInterface(): TransportInterface;
    abstract getBleCentralInterface(): NetInterface;
    abstract getBleBroadcaster(additionalAdvertisementData?: ByteArray): InstanceBroadcaster;
    abstract getBleScanner(): Scanner;
}
