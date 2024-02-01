/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cluster } from "../cluster/Cluster.js";
import { AttributeServer, FabricScopedAttributeServer } from "../cluster/server/AttributeServer.js";
import { ClusterServerObjInternal } from "../cluster/server/ClusterServerTypes.js";
import { InternalError } from "../common/MatterError.js";
import { EndpointInterface } from "../endpoint/EndpointInterface.js";
import { ClusterStructuralAdapter, EndpointStructuralAdapter } from "../endpoint/StructuralAdapter.js";
import { Fabric } from "../fabric/Fabric.js";

/**
 * Create a {@link StructuralAdapter} for an {@link EndpointInterface}.
 */
export function EndpointStructuralAdapter(endpoint: EndpointInterface): EndpointStructuralAdapter {
    return {
        number: endpoint.getNumber(),

        get children() {
            return endpoint.getChildEndpoints().map(e => EndpointStructuralAdapter(e));
        },

        getCluster<C extends Cluster<any, any, any, any, any>>(cluster: C) {
            return ClusterStructuralAdapter(endpoint, cluster);
        },
    };
}

function isFabric(server: AttributeServer<any>): server is FabricScopedAttributeServer<any> {
    return typeof (server as any).setLocalForFabric === "function";
}

function ClusterStructuralAdapter<C extends Cluster<any, any, any, any, any>>(
    endpoint: EndpointInterface,
    cluster: C,
): undefined | ClusterStructuralAdapter<C> {
    const server = endpoint.getClusterServer(cluster) as ClusterServerObjInternal<any, any, any> | undefined;
    if (!server) {
        return;
    }

    function attrServerFor(name: any) {
        const attr = server?.attributes[name];
        if (!attr) {
            throw new InternalError(`Attribute ${name} is not present`);
        }
        return attr as AttributeServer<any>;
    }

    return {
        trigger(event, payload) {
            server._events[event]?.triggerEvent(payload);
        },

        async set(attribute, value) {
            attrServerFor(attribute).setLocal(value);
        },

        get(attribute) {
            return attrServerFor(attribute).getLocal();
        },

        refresh(attribute, fabric?: Fabric) {
            const server = attrServerFor(attribute);
            if (isFabric(server)) {
                if (!fabric) {
                    throw new InternalError(`Attribute ${name} is fabric-scoped but no fabric specified`);
                }
                return server.updatedLocalForFabric(fabric);
            }
            return attrServerFor(attribute).updatedLocal();
        },
    };
}
