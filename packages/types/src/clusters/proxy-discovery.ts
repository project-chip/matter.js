/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { Command, TlvNoResponse } from "../cluster/Cluster.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvNodeId } from "../datatype/NodeId.js";
import { TlvUInt16 } from "../tlv/TlvNumber.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace ProxyDiscovery {
    /**
     * Input to the ProxyDiscovery proxyDiscoverRequest command
     *
     * @see {@link MatterSpecification.v141.Core} § 9.15.12.4.1
     */
    export const TlvProxyDiscoverRequest = TlvObject({
        /**
         * This is the Node ID of the source for which a client seeks to find a Proxy.
         *
         * @see {@link MatterSpecification.v141.Core} § 9.15.12.4.1.1
         */
        sourceNodeId: TlvField(0, TlvNodeId),

        /**
         * The number of attribute paths the client will have in the subscription request. This is a heuristic/hint to
         * allow a Proxy to better ascertain whether it can support the ensuing subscription.
         *
         * @see {@link MatterSpecification.v141.Core} § 9.15.12.4.1.2
         */
        numAttributePaths: TlvField(1, TlvUInt16),

        /**
         * The number of event paths the client will have in the subscription request. This is a heuristic/hint to allow
         * a Proxy to better ascertain whether it can support the ensuing subscription.
         *
         * @see {@link MatterSpecification.v141.Core} § 9.15.12.4.1.3
         */
        numEventPaths: TlvField(2, TlvUInt16)
    });

    /**
     * Input to the ProxyDiscovery proxyDiscoverRequest command
     *
     * @see {@link MatterSpecification.v141.Core} § 9.15.12.4.1
     */
    export interface ProxyDiscoverRequest extends TypeFromSchema<typeof TlvProxyDiscoverRequest> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x43,
        name: "ProxyDiscovery",
        revision: 1,

        commands: {
            /**
             * This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery &
             * Assignment Flow”.
             *
             * @see {@link MatterSpecification.v141.Core} § 9.15.12.4.1
             */
            proxyDiscoverRequest: Command(0x0, TlvProxyDiscoverRequest, 0x0, TlvNoResponse)
        }
    });

    /**
     * This cluster contains commands needed to do proxy discovery as defined in the Section 9.15.7.3, “Step 2: Proxy
     * Discovery” and Section 9.15.7.4, “Step 3: Proxy Response” steps of the overall Section 9.15.7, “Proxy Discovery &
     * Assignment Flow”.
     *
     * @see {@link MatterSpecification.v141.Core} § 9.15.12
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type ProxyDiscoveryCluster = ProxyDiscovery.Cluster;
export const ProxyDiscoveryCluster = ProxyDiscovery.Cluster;
ClusterRegistry.register(ProxyDiscovery.Complete);
