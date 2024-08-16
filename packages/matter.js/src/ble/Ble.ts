/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel, ChannelType } from "../common/Channel.js";
import { InstanceBroadcaster } from "../common/InstanceBroadcaster.js";
import { MatterError, NoProviderError } from "../common/MatterError.js";
import { Scanner } from "../common/Scanner.js";
import { TransportInterface } from "../common/TransportInterface.js";
import { NetInterface } from "../net/NetInterface.js";
import { ByteArray } from "../util/ByteArray.js";
import { BLE_MAX_MATTER_PAYLOAD_SIZE } from "./BleConsts.js";

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

export abstract class BleChannel<T> implements Channel<T> {
    readonly maxPayloadSize = BLE_MAX_MATTER_PAYLOAD_SIZE;
    readonly isReliable = true; // BLE uses BTP which is reliable
    readonly type = ChannelType.BLE;

    abstract name: string;
    abstract send(data: T): Promise<void>;
    abstract close(): Promise<void>;
}
