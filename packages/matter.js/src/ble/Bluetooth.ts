/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Broadcaster } from "../common/Broadcaster.js";
import { ByteArray } from "../util/ByteArray.js";
import { TransportInterface } from "../common/TransportInterface.js";

export abstract class Bluetooth {
    static get: () => Bluetooth = () => { throw new Error("No provider configured"); };

    abstract getBlePeripheralNetworkInterface(): TransportInterface;
    abstract getBleBroadcaster(additionalAdvertisementData?: ByteArray): Broadcaster;
    abstract getBleCentralNetworkInterface(): TransportInterface;
}
