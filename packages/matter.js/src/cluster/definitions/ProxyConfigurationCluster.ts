/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, WritableAttribute } from "../../cluster/Cluster.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNodeId } from "../../datatype/NodeId.js";

export namespace ProxyConfiguration {
    /**
     * ProxyAllNodes
     *
     * This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When 'true', the
     * SourceList attribute is ignored.
     *
     * SourceList
     *
     * When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy shall
     * specifically proxy.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.15.14.4.1
     */
    export const TlvConfigurationStruct = TlvObject({
        proxyAllNodes: TlvField(1, TlvBoolean),
        sourceList: TlvField(2, TlvArray(TlvNodeId))
    });

    /**
     * Proxy Configuration
     *
     * This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.15.14
     */
    export const Cluster = CreateCluster({
        id: 0x42,
        name: "ProxyConfiguration",
        revision: 1,

        attributes: {
            /**
             * List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.15.14.5.1
             */
            configurationList: WritableAttribute(
                0x0,
                TlvArray(TlvConfigurationStruct),
                { persistent: true, default: [] }
            )
        }
    });
}

export type ProxyConfigurationCluster = typeof ProxyConfiguration.Cluster;
export const ProxyConfigurationCluster = ProxyConfiguration.Cluster;
