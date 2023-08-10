/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError } from "../common/MatterError.js";
import { Crypto } from "../crypto/Crypto.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvUInt64 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Endian } from "../util/ByteArray.js";
import { DataWriter } from "../util/DataWriter.js";
import { toBigInt } from "../util/Number.js";
import { Branded } from "../util/Type.js";

/**
 * A Node Identifier (Node ID) is a 64-bit number that uniquely identifies an individual Node or a
 * group of Nodes on a Fabric.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 2.5.5
 */
export type NodeId = Branded<bigint, "NodeId">;

export function NodeId(v: bigint | number): NodeId {
    return toBigInt(v) as NodeId;
}

export namespace NodeId {
    const OPERATIONAL_NODE_MIN = BigInt("0x0000000000000001");
    const OPERATIONAL_NODE_MAX = BigInt("0xFFFFFFEFFFFFFFFF");

    export const toHexString = (nodeId: NodeId) => {
        const writer = new DataWriter(Endian.Big);
        writer.writeUInt64(nodeId);
        return writer.toByteArray().toHex().toUpperCase();
    };

    export const getRandomOperationalNodeId = () => {
        while (true) {
            const randomBigInt = BigInt("0x" + Crypto.getRandomData(8).toHex());
            if (randomBigInt >= OPERATIONAL_NODE_MIN && randomBigInt <= OPERATIONAL_NODE_MAX) {
                return NodeId(randomBigInt);
            }
        }
    };

    export const getGroupNodeId = (groupId: number) => {
        if (groupId < 0 || groupId > 0xffff) {
            throw new UnexpectedDataError(`Invalid group ID: ${groupId}`);
        }
        return NodeId(BigInt("0xFFFFFFFFFFFF" + groupId.toString(16).padStart(4, "0")));
    };
}

/** Tlv schema for a Node Identifier. */
export const TlvNodeId = new TlvWrapper<NodeId, number | bigint>(
    TlvUInt64,
    nodeId => nodeId,
    value => NodeId(BigInt(value)),
);
