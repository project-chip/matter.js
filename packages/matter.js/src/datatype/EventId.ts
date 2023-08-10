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
 * An EVent ID is a 32 bit number and indicates an event defined in a cluster specification.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.18.2.17
 */
export type EventId = Branded<number, "EventId">;

export function EventId(v: number): EventId {
    return v as EventId;
}

/** Tlv schema for an Event Id. */
export const TlvEventId = new TlvWrapper<EventId, number>(
    TlvUInt32,
    eventId => eventId,
    value => EventId(value),
);
