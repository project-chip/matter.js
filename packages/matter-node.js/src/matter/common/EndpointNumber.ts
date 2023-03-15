/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0, TlvUInt16, TlvWrapper } from "@project-chip/matter.js";

/**
 * A Endpoint Number is a 16-bit number that that indicates an instance of a device type.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.18.2.11
 */
export class EndpointNumber {
    constructor(
        readonly number: number
    ) {}
}

/** Tlv schema for an Endpoint number. */
export const TlvEndpointNumber = new TlvWrapper<EndpointNumber, number>(
    TlvUInt16,
    endpointNumber => endpointNumber.number,
    value => new EndpointNumber(value),
);
