/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvUInt16, TlvUInt32, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvField, TlvObject } from "../../tlv/TlvObject.js";

/** @see {@link MatterSpecification.v13.Core}, section 10.7.5 */

export const TlvSubscribeResponse = TlvObject({
    /** Identifies the subscription. */
    subscriptionId: TlvField(0, TlvUInt32),

    /** The final maximum interval for the subscription in seconds. */
    maxInterval: TlvField(2, TlvUInt16),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});
