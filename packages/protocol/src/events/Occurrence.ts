/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterId, EndpointNumber, EventId, EventNumber, EventPriority } from "#types";

/**
 * Description of a single event occurrence.
 */
export interface Occurrence {
    endpointId: EndpointNumber;
    clusterId: ClusterId;
    eventId: EventId;
    epochTimestamp: number;
    priority: EventPriority;
    payload: unknown;
}

/**
 * A persisted {@link Occurrence} with an allocated ID.
 */
export interface NumberedOccurrence extends Occurrence {
    number: EventNumber;
}
