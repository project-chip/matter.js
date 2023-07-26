/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace ProxyDiscovery {
    /**
     * Proxy Discovery
     *
     * This cluster contains commands needed to do proxy discovery as defined in the Section 9.15.7.3, “Step 2: Proxy
     * Discovery” and Section 9.15.7.4, “Step 3: Proxy Response” steps of the overall Section 9.15.7, “Proxy Discovery
     * & Assignment Flow”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.15.13
     */
    export const Cluster = CreateCluster({
        id: 0x43,
        name: "ProxyDiscovery",
        revision: 1,

        commands: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.15.13.5
             */
            proxyDiscoverRequest: Command(0x0, TlvNoArguments, 0x0, TlvNoResponse)
        }
    })
}

export type ProxyDiscoveryCluster = typeof ProxyDiscovery.Cluster;
export const ProxyDiscoveryCluster = ProxyDiscovery.Cluster;
