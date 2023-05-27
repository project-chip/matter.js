/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cluster, Attribute, } from "./Cluster.js";
import { TlvEndpointNumber } from "../datatype/EndpointNumber.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * ====================== IMPORTANT INFORMATION ======================
 *
 * This file outdated and will soon be auto generated based on the Cluster Schemas in schema
 * directory!! They are still used within the codebase, but will be changed soon!
 *
 * ====================== IMPORTANT INFORMATION ======================
 */

/**
 * The configuration and capabilities of a Device’s power system.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.6
 */

/**
 This cluster is used to describe the configuration and capabilities of a Device’s power system.
 It provides an ordering overview as well as linking to the one or more endpoints each supporting a
 PowerSource cluster.
 */
export const PowerSourceConfigurationCluster = Cluster({
    id: 0x2e,
    name: "PowerSourceConfiguration",
    revision: 1,

    /** @see {@link MatterCoreSpecificationV1_0} § 11.6.5.1 */
    attributes: {
        /** The set of all power sources capable of participating in the power system of this Node. */
        sources: Attribute(0x0, TlvArray(TlvEndpointNumber, { maxLength: 6 }), { default: [] }),
    },
});

