/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";

/**
 * An Attribute ID is a 32 bit number and indicates an attribute defined in a cluster specification.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.18.2.15
 */
export type AttributeId = Branded<number, "AttributeId">;

export function AttributeId(id: number): AttributeId {
    return id as AttributeId;
}

/** Tlv schema for an Attribute Id. */
export const TlvAttributeId = new TlvWrapper<AttributeId, number>(
    TlvUInt32,
    attributeId => attributeId,
    value => AttributeId(value),
);
