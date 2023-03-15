/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cluster, Attribute,} from "./Cluster";
import { TlvEndpointNumber } from "../common/EndpointNumber";
import { MatterCoreSpecificationV1_0, TlvArray } from "@project-chip/matter.js";

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
    name: "Power Source Configuration",
    revision: 1,

    /** @see {@link MatterCoreSpecificationV1_0} § 11.6.5.1 */
    attributes: {
        /** The set of all power sources capable of participating in the power system of this Node. */
        sources: Attribute(0x0, TlvArray(TlvEndpointNumber, { maxLength: 6 }), { default: [] }),
    },
});

