/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvUInt16 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * A Endpoint Number is a 16-bit number that that indicates an instance of a device type.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.18.2.11
 */
export class EndpointNumber {
    constructor(
        readonly number: number
    ) { }
}

/** Tlv schema for an Endpoint number. */
export const TlvEndpointNumber = new TlvWrapper<EndpointNumber, number>(
    TlvUInt16,
    endpointNumber => endpointNumber.number,
    value => new EndpointNumber(value),
);
