/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { FixedAttribute, Command } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace ValidProxies {
    /**
     * Encapsulates the Node ID of a Valid Proxy.
     *
     * @see {@link MatterSpecification.v11.Core} § 9.15.15.4.1
     */
    export const TlvValidProxyStruct = TlvObject({ nodeId: TlvField(1, TlvNodeId) });

    /**
     * Encapsulates the Node ID of a Valid Proxy.
     *
     * @see {@link MatterSpecification.v11.Core} § 9.15.15.4.1
     */
    export interface ValidProxyStruct extends TypeFromSchema<typeof TlvValidProxyStruct> {}

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
             * @see {@link MatterSpecification.v11.Core} § 9.15.15.5.1
             */
            validProxyList: FixedAttribute(0x0, TlvArray(TlvValidProxyStruct), { persistent: true, default: [] })
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v11.Core} § 9.15.15.6
             */
            getValidProxiesRequest: Command(0x0, TlvNoArguments, 0x1, TlvNoArguments)
        }
    });

    /**
     * Proxy Valid
     *
     * This cluster provides a means for a device to be told of the valid set of possible proxies that can proxy
     * subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.
     *
     * @see {@link MatterSpecification.v11.Core} § 9.15.15
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type ValidProxiesCluster = ValidProxies.Cluster;
export const ValidProxiesCluster = ValidProxies.Cluster;
ClusterRegistry.register(ValidProxies.Complete);
