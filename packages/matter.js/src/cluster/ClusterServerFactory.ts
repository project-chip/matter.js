/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterServer } from "../protocol/interaction/index.js";
import { BitSchema, TypeFromBitSchema } from "../schema/BitmapSchema.js";
import { Attributes, Cluster, Commands, Events, GlobalAttributes, MandatoryLocalAttributeNames, OptionalAttributeNames } from "./Cluster.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./server/ClusterServer.js";
import { UnsupportedCommandError } from "./server/CommandServer.js";

type AnyCluster = Cluster<any, any, any, any, any>;
const GLOBAL_ATTRIBUTES = new Set(Object.keys(GlobalAttributes({})));

export function notImplemented() {
    // Command server will fail gracefully with the appropriate status code
    // in response to this error
    throw new UnsupportedCommandError();
}

function mandatoryLocalAttributeNames<A extends Attributes>(attributes: A) {
    return Object.entries(attributes)
        .filter(([_name, attr]) => !attr.optional)
        .filter(([name]) => !GLOBAL_ATTRIBUTES.has(name))
        .map(([name]) => name as MandatoryLocalAttributeNames<A>);
}

function optionalAttributeNames<A extends Attributes>(attributes: A) {
    return Object.entries(attributes)
        .filter(([_name, attr]) => attr.optional)
        .map(([name]) => name as OptionalAttributeNames<A>)
}

// Shortcut for cluster server implementers - create initial attribute map from
// schema if not provided.  Could move into ClusterServer but then
// attributeInitialValues argument would need to be optional.  Not sure if
// that's desirable.  Also, this file is shorter than InteractionServer ;)
function createDefaultAttributeInitialValues<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(cluster: Cluster<F, SF, A, C, E>): AttributeInitialValues<A> {
    const result = {} as AttributeInitialValues<A>;

    mandatoryLocalAttributeNames(cluster.attributes).forEach((name) =>
        (result as any)[name] = cluster.attributes[name].default);

    // TODO - caller can override but should we make the set of optional
    // attributes configurable?
    optionalAttributeNames(cluster.attributes).forEach((name) => {
        if (cluster.attributes[name] !== undefined) {
            (result as any)[name] = cluster.attributes[name].default
        }
    });

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
    public static getDefaultAttributeInitialValues<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(cluster: Cluster<F, SF, A, C, E>) {
        const aiv = this.defaultAttributeInitialValues.get(cluster) as AttributeInitialValues<A>;
        if (aiv == undefined) {
            return createDefaultAttributeInitialValues(cluster);
        }
        return aiv;
    }

    /**
     * Register the default implementation for a cluster.
     * 
     * @param cluster the cluster to configure
     * @param defaultHandlerProvider a function that create the cluster handlers
     * @param defaultAttributeInitialValues optional overrides for default attribute values
     */
    public static registerClusterDefaults<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, SF, A, C, E>, defaultHandlerProvider: () => ClusterServerHandlers<Cluster<F, SF, A, C, E>>,
        defaultAttributeInitialValues: AttributeInitialValues<A> = createDefaultAttributeInitialValues(cluster)
    ) {
        this.defaultHandlerProviders.set(cluster, defaultHandlerProvider);
        this.defaultAttributeInitialValues.set(cluster, defaultAttributeInitialValues);

        const x = this.defaultAttributeInitialValues.get(cluster);
        if (x.sceneCount) console.log(x.sceneCount);
    }

    /**
     * Create a new cluster server.
     * 
     * @param cluster the cluster for the server
     * @param attributeInitialValues optional overrides for attribute values
     * @param handlers optional overrides for cluster handlers
     * @returns 
     */
    public static create<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(cluster: Cluster<F, SF, A, C, E>, attributeInitialValues?: AttributeInitialValues<A>, handlers?: ClusterServerHandlers<Cluster<F, SF, A, C, E>>) {
        handlers = Object.assign({}, handlers);

        const provider = this.defaultHandlerProviders.get(cluster);
        if (provider) {
            Object.assign(handlers, provider());
        }

        for (const command in cluster.commands) {
            if (!(handlers as any)[command]) {
                (handlers as any)[command] = notImplemented;
            }
        }

        // TODO - should we throw an error here if mandatory attributes do not
        // have a value yet?

        return ClusterServer(
            cluster,
            Object.assign({}, this.getDefaultAttributeInitialValues(cluster), attributeInitialValues),
            handlers);
    }
}
