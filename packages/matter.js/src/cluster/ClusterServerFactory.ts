/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../common/MatterError.js";
import { ClusterServer } from "../protocol/interaction/index.js";
import { BitSchema, TypeFromBitSchema } from "../schema/BitmapSchema.js";
import { Attributes, Cluster, Commands, Events, GlobalAttributes, MandatoryLocalAttributeNames } from "./Cluster.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./server/ClusterServer.js";

type AnyCluster = Cluster<any, any, any, any, any>;
const GLOBAL_ATTRIBUTES = new Set(Object.keys(GlobalAttributes({})));

function mandatoryLocalAttributeNames<A extends Attributes>(attributes: A) {
    return Object.entries(attributes)
        .filter(([_name, attr]) => !attr.optional)
        .filter(([name]) => !GLOBAL_ATTRIBUTES.has(name))
        .map(([name]) => name as MandatoryLocalAttributeNames<A>);
}

// Shortcut for cluster server implementers - create initial attribute map from
// schema if not provided
function createDefaultAttributeInitialValues<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(cluster: Cluster<F, SF, A, C, E>): AttributeInitialValues<A> {
    const result = {} as AttributeInitialValues<A>;

    mandatoryLocalAttributeNames(cluster.attributes).forEach((name) =>
        (result as any)[name] = cluster.attributes[name].default);

    return result;
}

/**
 * This factory acts as a central registry for default cluster implementations.
 */
export class ClusterServerFactory {
    private static defaultHandlerProviders = new Map<AnyCluster, () => any>();
    private static defaultAttributeInitialValues = new Map<AnyCluster, any>;

    /**
     * Retrieve default values for attributes based on cluster schema.
     */
    static getDefaultAttributeInitialValues<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, SF, A, C, E>
    ) {
        let aiv = this.defaultAttributeInitialValues.get(cluster);
        if (aiv == undefined) {
            this.defaultAttributeInitialValues.set(cluster, aiv = createDefaultAttributeInitialValues(cluster));
        }

        // Do not pass by reference so the user can't overwrite
        return Object.assign({}, aiv) as AttributeInitialValues<A>;
    }

    /**
     * Register the default implementation for a cluster.
     * 
     * @param cluster the cluster to configure
     * @param defaultHandlerProvider a function that create the cluster handlers
     * @param defaultAttributeInitialValues optional overrides for default attribute values
     */
    static registerClusterDefaults<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, SF, A, C, E>,
        defaultHandlerProvider: () => ClusterServerHandlers<Cluster<F, SF, A, C, E>>,
        defaultAttributeInitialValues: AttributeInitialValues<A> = createDefaultAttributeInitialValues(cluster)
    ) {
        this.defaultHandlerProviders.set(cluster, defaultHandlerProvider);
        this.defaultAttributeInitialValues.set(cluster, defaultAttributeInitialValues);
    }

    /**
     * Create a new cluster server.
     * 
     * @param cluster the cluster for the server
     * @param attributeInitialValues optional overrides for attribute values
     * @param handlers optional overrides for cluster handlers
     * @returns 
     */
    static create<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, SF, A, C, E>,
        attributeInitialValues?: AttributeInitialValues<A>,
        handlers?: ClusterServerHandlers<Cluster<F, SF, A, C, E>>
    ) {
        handlers = Object.assign({}, handlers);

        const provider = this.defaultHandlerProviders.get(cluster);
        if (provider) {
            Object.assign(handlers, provider());
        }

        const aiv = Object.assign(
            this.getDefaultAttributeInitialValues(cluster),
            attributeInitialValues);

        // Sanity check - ensure all mandatory attributes are present
        const missing = mandatoryLocalAttributeNames(cluster.attributes)
            .filter((name) => (<any>aiv)[name] === undefined);
        if (missing.length) {
            throw new MatterError(`Cannot create ${cluster.name} server, missing mandatory attributes: ${missing.join(", ")}`);
        }

        return ClusterServer(
            cluster,
            aiv,
            handlers);
    }
}
