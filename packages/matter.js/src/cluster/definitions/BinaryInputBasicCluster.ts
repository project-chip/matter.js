/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    Cluster as CreateCluster,
    OptionalWritableAttribute,
    WritableAttribute,
    OptionalAttribute,
    Attribute
} from "../../cluster/Cluster.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvUInt8, TlvUInt32 } from "../../tlv/TlvNumber.js";

export namespace BinaryInputBasic {
    /**
     * Binary Input (Basic)
     *
     * An interface for reading the value of a binary measurement and accessing various characteristics of that
     * measurement.
     */
    export const Cluster = CreateCluster({
        id: 0xf,
        name: "BinaryInputBasic",
        revision: 1,

        attributes: {
            activeText: OptionalWritableAttribute(0x4, TlvString.bound({ maxLength: 16 }), { default: "" }),
            description: OptionalWritableAttribute(0x1c, TlvString.bound({ maxLength: 16 }), { default: "" }),
            inactiveText: OptionalWritableAttribute(0x2e, TlvString.bound({ maxLength: 16 }), { default: "" }),
            outOfService: WritableAttribute(0x51, TlvBoolean, { default: true }),
            polarity: OptionalAttribute(0x54, TlvUInt8),
            presentValue: WritableAttribute(0x55, TlvBoolean),
            reliability: OptionalWritableAttribute(0x67, TlvUInt8),
            statusFlags: Attribute(0x6f, TlvUInt8),
            applicationType: OptionalAttribute(0x100, TlvUInt32)
        }
    })
}

export type BinaryInputBasicCluster = typeof BinaryInputBasic.Cluster;
export const BinaryInputBasicCluster = BinaryInputBasic.Cluster;
