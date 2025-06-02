/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TlvOptionalField, TlvObject } from "../tlv/TlvObject.js";
import { TlvUInt8 } from "../tlv/TlvNumber.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";

/**
 * Time of day
 *
 * Represents time without a date component.
 *
 * @see {@link MatterSpecification.v141.Core} § 7.19.2
 */
export const TlvTod = TlvObject({
    /**
     * Hour of the current day.
     */
    hours: TlvOptionalField(0, TlvUInt8.bound({ max: 23 })),

    /**
     * Minute of the current hour.
     */
    minutes: TlvOptionalField(1, TlvUInt8.bound({ max: 59 })),

    /**
     * Second of the current minute.
     */
    seconds: TlvOptionalField(2, TlvUInt8.bound({ max: 59 })),

    /**
     * Hundredth of the current second.
     */
    hundredths: TlvOptionalField(3, TlvUInt8.bound({ max: 99 }))
});

/**
 * Time of day
 *
 * Represents time without a date component.
 *
 * @see {@link MatterSpecification.v141.Core} § 7.19.2
 */
export interface Tod extends TypeFromSchema<typeof TlvTod> {}
