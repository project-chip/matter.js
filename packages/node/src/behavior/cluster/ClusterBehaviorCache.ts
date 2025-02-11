/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ClusterBehavior } from "#index.js";
import { Schema } from "#model";
import { ClusterType } from "#types";

/**
 * To save memory we cache behavior implementations specialized for specific clusters.  This allows for efficient
 * configuration of behaviors with conditional runtime logic.
 *
 * We use the cluster and schema as cache keys so this relies on similar caching for those items.
 */
const typeCache = new WeakMap<
    Behavior.Type,
    WeakMap<ClusterType, WeakMap<Schema, WeakRef<ClusterBehavior.Type<any>>>>
>();

export namespace ClusterBehaviorCache {
    export function get(cluster: ClusterType, base: Behavior.Type, schema: Schema) {
        const baseCache = typeCache.get(base);
        if (baseCache === undefined) {
            return;
        }

        const clusterCache = baseCache.get(cluster);
        if (clusterCache === undefined) {
            return;
        }

        return clusterCache.get(schema)?.deref();
    }

    export function set(cluster: ClusterType, base: Behavior.Type, schema: Schema, type: ClusterBehavior.Type) {
        let baseCache = typeCache.get(base);
        if (baseCache === undefined) {
            typeCache.set(base, (baseCache = new WeakMap()));
        }

        let clusterCache = baseCache.get(cluster);
        if (clusterCache === undefined) {
            baseCache.set(cluster, (clusterCache = new WeakMap()));
        }

        clusterCache.set(schema, new WeakRef(type));
    }
}
