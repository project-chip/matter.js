/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Attribute, Cluster, BaseClustersMap } from "./Cluster.js";

// Ensure all clusters are loaded so BaseClustersMap is fully populated
import "./clusters.js";

interface CachedAttributeInfo {
    attribute: Attribute<any>;
    name: string;
}
const clusterAttributeCache = new Map<number, Map<number, CachedAttributeInfo>>();

export function getClusterById(clusterId: number): Cluster<any, any, any, any, any> {
    return BaseClustersMap[clusterId];
}

export function getClusterAttributeById(clusterDef: Cluster<any, any, any, any, any>, attributeId: number): CachedAttributeInfo | undefined {
    if (!clusterAttributeCache.has(clusterDef.id)) {
        const attributeMap = new Map<number, CachedAttributeInfo>();

        const { attributes } = clusterDef;

        // Add accessors
        for (const attributeName in attributes) {
            const attribute = attributes[attributeName];
            attributeMap.set(attribute.id, { attribute, name: attributeName });
        }

        clusterAttributeCache.set(clusterDef.id, attributeMap);
        return attributeMap.get(attributeId);
    }
    const attributeMap = clusterAttributeCache.get(clusterDef.id);
    if (attributeMap === undefined) {
        return undefined;
    }
    return attributeMap.get(attributeId);
}
