/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace ProxyDiscovery {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x43,
        name: "ProxyDiscovery",
        revision: 1,

        commands: {
            /**
             * @see {@link MatterSpecification.v11.Core} § 9.15.13.5
             */
            proxyDiscoverRequest: Command(0x0, TlvNoArguments, 0x0, TlvNoResponse)
        }
    })

    /**
     * Proxy Discovery
     *
     * This cluster contains commands needed to do proxy discovery as defined in the Section 9.15.7.3, “Step 2: Proxy
     * Discovery” and Section 9.15.7.4, “Step 3: Proxy Response” steps of the overall Section 9.15.7, “Proxy Discovery
     * & Assignment Flow”.
     *
     * @see {@link MatterSpecification.v11.Core} § 9.15.13
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type ProxyDiscoveryCluster = ProxyDiscovery.Cluster;
export const ProxyDiscoveryCluster = ProxyDiscovery.Cluster;
ClusterRegistry.register(ProxyDiscovery.Complete);
