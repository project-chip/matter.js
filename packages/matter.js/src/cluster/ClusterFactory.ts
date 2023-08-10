/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../common/MatterError.js";
import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { serialize } from "../util/String.js";
import { Merge } from "../util/Type.js";
import {
    Attribute,
    Attributes,
    Cluster,
    Command,
    Commands,
    ConditionalFeatureList,
    Event,
    Events,
    GlobalAttributes,
} from "./Cluster.js";

export class IllegalClusterError extends MatterError {}

/**
 * A "cluster component" is a set of elements that can be added to a cluster.
 */
export type ClusterComponent<A extends Attributes, C extends Commands, E extends Events> = {
    readonly attributes: A;
    readonly commands: C;
    readonly events: E;
};

export function ClusterComponent<A extends Attributes, C extends Commands, E extends Events>({
    attributes = {} as A,
    commands = {} as C,
    events = {} as E,
}: Partial<ClusterComponent<A, C, E>>): ClusterComponent<A, C, E> {
    return {
        attributes,
        commands,
        events,
    };
}

/**
 * A "base cluster component" contains properties and elements that apply to a
 * cluster regardless of which features are enabled.
 */
export type BaseClusterComponent<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events> = {
    id: number;
    name: string;
    revision: number;
    readonly features: F;
} & ClusterComponent<A, C, E>;

export function BaseClusterComponent<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>({
    id,
    name,
    revision,
    features = {} as F,
    attributes = {} as A,
    commands = {} as C,
    events = {} as E,
}: {
    id: number;
    name: string;
    revision: number;
    features?: F;
} & Partial<ClusterComponent<A, C, E>>): BaseClusterComponent<F, A, C, E> {
    return {
        id,
        name,
        revision,
        features,
        attributes,
        commands,
        events,
    };
}

/**
 * Obtain a cluster type for a BaseClusterComponent.
 */
export type ClusterForBaseCluster<T, SF> = T extends BaseClusterComponent<infer F, infer A, infer C, infer E>
    ? SF extends TypeFromPartialBitSchema<F>
        ? Cluster<F, SF, A, C, E>
        : never
    : never;

/**
 * Injects a set of functionality into a cluster if the cluster supports the
 * specified features.
 */
export function extendCluster<F extends BitSchema>(
    cluster: Cluster<F, any, any, any, any>,
    component: ClusterComponent<any, any, any>,
    ...applicableFeatures: TypeFromPartialBitSchema<F>[]
) {
    let applicable = false;
    pool: for (const features of applicableFeatures) {
        for (const k in features) {
            if (!!cluster.supportedFeatures[k] !== !!features[k]) {
                continue pool;
            }
        }
        applicable = true;
        break;
    }

    if (!applicable) {
        return;
    }

    if (component.attributes) {
        if (cluster.attributes) {
            cluster.attributes = { ...cluster.attributes, ...component.attributes };
        } else {
            cluster.attributes = component.attributes;
        }
    }

    if (component.commands) {
        if (cluster.commands) {
            cluster.commands = { ...cluster.commands, ...component.commands };
        } else {
            cluster.commands = component.commands;
        }
    }

    if (component.events) {
        if (cluster.events) {
            cluster.events = { ...cluster.events, ...component.events };
        } else {
            cluster.events = component.events;
        }
    }
}

/**
 * Validates a set of feature flags against the features supported by a
 * cluster.
 */
export function validateFeatureSelection(features: string[], validFeatures: { [name: string]: string }) {
    for (const f of features) {
        if (!validFeatures[f]) {
            throw new IllegalClusterError(`"${f}" is not a valid feature identifier`);
        }
    }
}

/**
 * Throws an error if a feature combination is illegal per the Matter
 * specification.
 */
export function preventCluster<F extends BitSchema>(
    cluster: Cluster<F, any, any, any, any>,
    ...illegalFeatureCombinations: TypeFromPartialBitSchema<F>[]
) {
    pool: for (const bitmap of illegalFeatureCombinations) {
        for (const k in bitmap) {
            if (!!cluster.supportedFeatures[k] !== !!bitmap[k]) {
                continue pool;
            }
        }
        throw new IllegalClusterError(
            `Feature combination ${serialize(bitmap)} is disallowed by the Matter specification`,
        );
    }
}

export type ClusterFactory = (...features: any) => Cluster<any, any, any, any, any>;

/**
 * This is a cluster that can be extended with optional features.
 */
export type ExtensibleCluster<
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    A extends Attributes,
    C extends Commands,
    E extends Events,
    W extends ClusterFactory,
> = Cluster<F, SF, A, C, E> & {
    with: W;
};

export function ExtensibleCluster<
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    W extends ClusterFactory,
    A extends Attributes = {},
    C extends Commands = {},
    E extends Events = {},
>({
    id,
    name,
    revision,
    features = <F>{},
    supportedFeatures = <SF>{},
    attributes = <A>{},
    commands = <C>{},
    events = <E>{},
    factory,
}: {
    id: number;
    name: string;
    revision: number;
    features?: F;
    supportedFeatures?: SF;
    attributes?: A;
    commands?: C;
    events?: E;
    factory: W;
}): ExtensibleCluster<F, SF, Merge<A, GlobalAttributes<F>>, C, E, W> {
    return {
        ...Cluster({
            id,
            name,
            revision,
            features,
            supportedFeatures,
            commands,
            attributes,
            events,
        }),
        with: factory,
    };
}

/**
 * This is a factory for clusters that cannot be used without supporting one
 * or more optional features.  These features are "optional" in the sense that
 * they need not all be present but one or more is required.
 */
export type ExtensionRequiredCluster<W extends ClusterFactory> = {
    with: W;
};

export function ExtensionRequiredCluster<W extends ClusterFactory>({
    factory,
}: {
    factory: W;
}): ExtensionRequiredCluster<W> {
    return { with: factory };
}

export type ClusterElement<F extends BitSchema> = Attribute<any, F> | Command<any, any, F> | Event<any, F>;

export type AsConditional<F extends BitSchema, E extends ClusterElement<F>> = Omit<E, "optional"> & {
    optional: true;
    isConditional: true;
};

export type ClusterElementConditions<F extends BitSchema> = {
    optionalIf: ConditionalFeatureList<F>;
    mandatoryIf: ConditionalFeatureList<F>;
};

export function AsConditional<F extends BitSchema, E extends ClusterElement<F>>(
    element: E,
    { optionalIf = [], mandatoryIf = [] }: Partial<ClusterElementConditions<F>>,
) {
    const result = {
        ...element,
        optional: true,
        isConditional: true,
        optionalIf: optionalIf,
        mandatoryIf: mandatoryIf,
    };
    result.optional = true;
    return result as AsConditional<F, E>;
}
