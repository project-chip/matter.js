/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_1 } from "../spec/Specifications.js";
import { TlvUInt64 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";

/**
 * An "event number" is an increasing 64-bit unsigned integer assigned to
 * cluster events.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 7.14.2.1
 */
export type EventNumber = Branded<number | bigint, "EventNumber">;

export function EventNumber(id: number | bigint): EventNumber {
    return id as EventNumber;
}

/** TLV schema for a data version. */
export const TlvEventNumber = new TlvWrapper<EventNumber, number | bigint>(
    TlvUInt64,
    dataVersion => dataVersion,
    value => EventNumber(value),
);
