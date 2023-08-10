/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvUInt16 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";

/**
 * A Group Identifier (Group ID or GID) is a 16-bit number that identifies a set of Nodes across a
 * Fabric at the message layer (see Section 4.15, “Group Key Management”). A Group ID can further
 * be bound to one or more Endpoints within each Node in the group at the interaction layer.
 *
 * The Group ID space is allocated as described in Table 2, “Group ID Allocations”:
 * 0x0000 - Null or unspecified Group ID
 * 0x0001 - 0xFEFF: Application Group ID, assigned by fabric Administrator
 * 0xFF00 - 0xFFFF: Universal Group ID range reserved for static multicast and anycast identifiers
 *
 * @see {@link MatterCoreSpecificationV1_0} § 2.5.4
 */
export type GroupId = Branded<number, "GroupId">;

export function GroupId(v: number): GroupId {
    return v as GroupId;
}

/** Tlv Schema for a Group Id. */
export const TlvGroupId = new TlvWrapper<GroupId, number>(
    TlvUInt16,
    groupId => groupId,
    value => GroupId(value),
);
