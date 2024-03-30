/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributePayload } from "../payloads/AttributePayload.js";
import { EventPayload } from "../payloads/EventPayload.js";

/**
 * Read response for attribute/event data.
 *
 * @see {@link MatterSpecification.v11.Core} § 8.4.3
 */
export type ReportDataAction = {
    attributes: AttributePayload.Report[];
    events: EventPayload.Report[];
    suppressResponse?: boolean;
};

/**
 * Subscription notification payload.
 *
 * @see {@link MatterSpecification.v11.Core} § 8.4.3
 */
export type SubscriptionReportDataAction = ReportDataAction & {
    subscription: number;
};
