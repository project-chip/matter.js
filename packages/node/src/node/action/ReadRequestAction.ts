/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataVersion, EventNumber, NodeId } from "#types";
import { AttributePath } from "../paths/AttributePath.js";
import { EventPath } from "../paths/EventPath.js";

export namespace ReadRequestAction {
    /**
     * Filters known data from attribute reads.
     *
     * @see {@link MatterSpecification.v11.Core} § 8.4.3.2 & 8.9.2.7
     */
    export type AttributeVersionFilter = AttributePath.Write & {
        version: DataVersion;
    };

    /**
     * Filters to events newer than a specific event number.
     *
     * @see {@link MatterSpecification.v11.Core} § 8.9.3.1
     */
    export type EventSequenceFilter = {
        node: NodeId;
        min: EventNumber;
    };
}

/**
 * Initiates read of attribute and/or event data.
 *
 * @see {@link MatterSpecification.v11.Core} § 8.4.2
 */
export type ReadRequestAction = {
    attributes?: AttributePath.Read[];
    versions?: ReadRequestAction.AttributeVersionFilter[];
    events?: EventPath.Read[];
    sequences?: ReadRequestAction.EventSequenceFilter[];
    fabric?: boolean;
};
