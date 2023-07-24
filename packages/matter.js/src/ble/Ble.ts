/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InstanceBroadcaster } from "../common/InstanceBroadcaster.js";
import { ByteArray } from "../util/ByteArray.js";
import { Scanner } from "../common/Scanner.js";
import { NetInterface } from "../net/NetInterface.js";
import { TransportInterface } from "../common/TransportInterface.js";

export abstract class Ble {
    static get: () => Ble = () => { throw new Error("No provider configured"); };

    abstract getBlePeripheralInterface(): TransportInterface;
    abstract getBleCentralInterface(): NetInterface;
    abstract getBleBroadcaster(additionalAdvertisementData?: ByteArray): InstanceBroadcaster;
    abstract getBleScanner(): Scanner;
}
