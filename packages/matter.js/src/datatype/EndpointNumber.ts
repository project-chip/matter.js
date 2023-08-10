/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvUInt16 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";

/**
 * A Endpoint Number is a 16-bit number that that indicates an instance of a device type.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.18.2.11
 */
export type EndpointNumber = Branded<number, "EndpointNumber">;

export function EndpointNumber(n: number): EndpointNumber {
    return n as EndpointNumber;
}

/** Tlv schema for an Endpoint number. */
export const TlvEndpointNumber = new TlvWrapper<EndpointNumber, number>(
    TlvUInt16,
    endpointNumber => endpointNumber,
    value => EndpointNumber(value),
);
