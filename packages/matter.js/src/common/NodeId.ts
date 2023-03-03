/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvUInt64 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { Endian } from "../util/ByteArray.js";
import { DataWriter } from "../util/DataWriter.js";

/**
 * A Node Identifier (Node ID) is a 64-bit number that uniquely identifies an individual Node or a
 * group of Nodes on a Fabric.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § 2.5.5
 */
export class NodeId {
    constructor(
        readonly id: bigint,
    ) { }

    toString() {
        const writer = new DataWriter(Endian.Big);
        writer.writeUInt64(this.id);
        return writer.toByteArray().toHex().toUpperCase();
    }
}

/** Tlv schema for a Node Identifier. */
export const TlvNodeId = new TlvWrapper<NodeId, number | bigint>(
    TlvUInt64,
    nodeId => nodeId.id,
    value => new NodeId(BigInt(value)),
);
