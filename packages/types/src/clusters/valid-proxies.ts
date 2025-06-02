/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { FixedAttribute, Command } from "../cluster/Cluster.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvNodeId } from "../datatype/NodeId.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvNoArguments } from "../tlv/TlvNoArguments.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace ValidProxies {
    /**
     * Encapsulates the Node ID of a Valid Proxy.
     *
     * @see {@link MatterSpecification.v141.Core} § 9.15.14.4.1
     */
    export const TlvValidProxy = TlvObject({ nodeId: TlvField(1, TlvNodeId) });

    /**
     * Encapsulates the Node ID of a Valid Proxy.
     *
     * @see {@link MatterSpecification.v141.Core} § 9.15.14.4.1
     */
    export interface ValidProxy extends TypeFromSchema<typeof TlvValidProxy> {}

    /**
     * This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & Assignment Flow”.
     *
     * @see {@link MatterSpecification.v141.Core} § 9.15.14.6.2
     */
    export const TlvGetValidProxiesResponse = TlvObject({ proxyNodeIdList: TlvField(0, TlvArray(TlvNodeId)) });

    /**
     * This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & Assignment Flow”.
     *
     * @see {@link MatterSpecification.v141.Core} § 9.15.14.6.2
     */
    export interface GetValidProxiesResponse extends TypeFromSchema<typeof TlvGetValidProxiesResponse> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x44,
        name: "ValidProxies",
        revision: 1,

        attributes: {
            /**
             * List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.
             *
             * @see {@link MatterSpecification.v141.Core} § 9.15.14.5.1
             */
            validProxyList: FixedAttribute(0x0, TlvArray(TlvValidProxy), { persistent: true, default: [] })
        },

        commands: {
            /**
             * This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery &
             * Assignment Flow”.
             *
             * @see {@link MatterSpecification.v141.Core} § 9.15.14.6.1
             */
            getValidProxiesRequest: Command(0x0, TlvNoArguments, 0x1, TlvGetValidProxiesResponse)
        }
    });

    /**
     * This cluster provides a means for a device to be told of the valid set of possible proxies that can proxy
     * subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.
     *
     * @see {@link MatterSpecification.v141.Core} § 9.15.14
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type ValidProxiesCluster = ValidProxies.Cluster;
export const ValidProxiesCluster = ValidProxies.Cluster;
ClusterRegistry.register(ValidProxies.Complete);
