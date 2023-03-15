/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0, TlvUInt32, TlvWrapper } from "@project-chip/matter.js";

/**
 * An EVent ID is a 32 bit number and indicates an event defined in a cluster specification.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.18.2.17
 */
export class EventId {
    constructor(
        readonly id: number
    ) {}
}

/** Tlv schema for an Event Id. */
export const TlvEventId = new TlvWrapper<EventId, number>(
    TlvUInt32,
    eventId => eventId.id,
    value => new EventId(value),
);
