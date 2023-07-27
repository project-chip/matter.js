/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, WritableFixedAttribute, Command } from "../../cluster/Cluster.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace ValidProxies {
    /**
     * Encapsulates the Node ID of a Valid Proxy.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.15.15.4.1
     */
    export const TlvValidProxyStruct = TlvObject({ nodeId: TlvField(1, TlvNodeId) });

    /**
     * Proxy Valid
     *
     * This cluster provides a means for a device to be told of the valid set of possible proxies that can proxy
     * subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.15.15
     */
    export const Cluster = CreateCluster({
        id: 0x44,
        name: "ValidProxies",
        revision: 1,

        attributes: {
            /**
             * List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.15.15.5.1
             */
            validProxyList: WritableFixedAttribute(
                0x0,
                TlvArray(TlvValidProxyStruct),
                { persistent: true, default: [] }
            )
        },

        commands: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.15.15.6
             */
            getValidProxiesRequest: Command(0x0, TlvNoArguments, 0x1, TlvNoArguments)
        }
    });
}

export type ValidProxiesCluster = typeof ValidProxies.Cluster;
export const ValidProxiesCluster = ValidProxies.Cluster;
