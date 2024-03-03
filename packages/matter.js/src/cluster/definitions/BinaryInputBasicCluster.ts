/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { OptionalWritableAttribute, WritableAttribute } from "../../cluster/Cluster.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvUInt8, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace BinaryInputBasic {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0xf,
        name: "BinaryInputBasic",
        revision: 1,

        attributes: {
            activeText: OptionalWritableAttribute(0x4, TlvString.bound({ maxLength: 16 }), { default: "" }),
            description: OptionalWritableAttribute(0x1c, TlvString.bound({ maxLength: 16 }), { default: "" }),
            inactiveText: OptionalWritableAttribute(0x2e, TlvString.bound({ maxLength: 16 }), { default: "" }),
            outOfService: WritableAttribute(0x51, TlvBoolean, { default: true }),
            polarity: OptionalWritableAttribute(0x54, TlvUInt8),
            presentValue: WritableAttribute(0x55, TlvBoolean),
            reliability: OptionalWritableAttribute(0x67, TlvUInt8),
            statusFlags: WritableAttribute(0x6f, TlvUInt8),
            applicationType: OptionalWritableAttribute(0x100, TlvUInt32)
        }
    })

    /**
     * Binary Input (Basic)
     *
     * An interface for reading the value of a binary measurement and accessing various characteristics of that
     * measurement.
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type BinaryInputBasicCluster = BinaryInputBasic.Cluster;
export const BinaryInputBasicCluster = BinaryInputBasic.Cluster;
ClusterRegistry.register(BinaryInputBasic.Complete);
