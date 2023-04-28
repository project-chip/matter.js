/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvUInt64 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Crypto } from "../crypto/Crypto.js";
import { DataWriter } from "../util/DataWriter.js";
import { Endian } from "../util/ByteArray.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

const OPERATIONAL_NODE_MIN = BigInt('0x0000000000000001');
const OPERATIONAL_NODE_MAX = BigInt('0xFFFFFFEFFFFFFFFF');

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

    static getRandomOperationalNodeId() {
        while (true) {
            const randomBigInt = BigInt('0x' + Crypto.getRandomData(8).toHex());
            if (randomBigInt >= OPERATIONAL_NODE_MIN && randomBigInt <= OPERATIONAL_NODE_MAX) {
                return new NodeId(randomBigInt);
            }
        }
    }

    static getGroupNodeId(groupId: number) {
        if (groupId < 0 || groupId > 0xFFFF) {
            throw new Error(`Invalid group ID: ${groupId}`);
        }
        return new NodeId(BigInt('0xFFFFFFFFFFFF' + groupId.toString(16).padStart(4, "0")));
    }
}

/** Tlv schema for a Node Identifier. */
export const TlvNodeId = new TlvWrapper<NodeId, number | bigint>(
    TlvUInt64,
    nodeId => nodeId.id,
    value => new NodeId(BigInt(value)),
);
