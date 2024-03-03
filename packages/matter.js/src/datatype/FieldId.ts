/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_1 } from "../spec/Specifications.js";
import { TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";

/**
 * A "field ID" is an unsigned 32-bit integer that identifies a specific field
 * in a cluster struct type.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 7.18.2.18
 */
export type FieldId = Branded<number, "FieldId">;

export function FieldId(id: number): FieldId {
    return id as FieldId;
}

/** TLV schema for a field ID. */
export const TlvFieldId = new TlvWrapper<FieldId, number>(
    TlvUInt32,
    fieldId => fieldId,
    value => FieldId(value),
);
