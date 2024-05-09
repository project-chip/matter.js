/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute } from "../../cluster/Cluster.js";
import { ClusterType } from "../../cluster/ClusterType.js";
import { ImplementationError } from "../../common/MatterError.js";
import { AttributeModel, ClusterModel, ElementTag, FeatureSet, Matter, Metatype } from "../../model/index.js";
import { GeneratedClass } from "../../util/GeneratedClass.js";
import { AsyncObservable } from "../../util/Observable.js";
import { camelize } from "../../util/String.js";
import { Behavior } from "../Behavior.js";
import { DerivedState } from "../state/StateType.js";
import { Val } from "../state/Val.js";
import { Schema } from "../supervision/Schema.js";
import type { ClusterBehavior } from "./ClusterBehavior.js";

/**
 * Create a non-functional instance of a {@link Behavior} for introspection purposes.
 */
export function introspectionInstanceOf(type: Behavior.Type) {
    return new (type as unknown as new () => Record<string, (...args: any[]) => any>)();
}

/**
 * This is the actual implementation of ClusterBehavior.for().  The result must match {@link ClusterBehavior.Type}<C>.
 */
export function createType<const C extends ClusterType>(cluster: C, base: Behavior.Type, schema?: Schema) {
    const namesUsed = new Set<string>();

    if (schema === undefined) {
        if (base.schema) {
            schema = base.schema;
        }
        if (!schema) {
            schema = schemaForCluster(cluster);
        }
    }

    schema = syncFeatures(schema, cluster);

    let name;
    if (base.name.startsWith(cluster.name)) {
        name = base.name;
    } else {
        name = `${cluster.name}Behavior`;
    }

    return GeneratedClass({
        name,
        base,

        // These are really read-only but installing as getters on the prototype prevents us from overriding using
        // namespace overrides.  If we instead override as static properties then we lose the automatic interface type.
        // So just publish as static properties.
        staticProperties: {
            State: createDerivedState(cluster, schema, base, namesUsed),

            Events: createDerivedEvents(cluster, base, namesUsed),
        },

        staticDescriptors: {
            id: {
                value: camelize(cluster.name) as Uncapitalize<string>,
                enumerable: true,
            },

            cluster: {
                value: cluster,
                enumerable: true,
            },

            schema: {
                value: schema,
            },
        },

        instanceDescriptors: createDefaultCommandDescriptors(cluster, base),
    });
}

/**
 * The cluster type for a behavior.
 */
export type ClusterOf<B extends Behavior.Type> = B extends { cluster: infer C extends ClusterType }
    ? C
    : ClusterType.Unknown;

/**
 * The extension interface for a behavior.
 */
export type ExtensionInterfaceOf<B extends Behavior.Type> = B extends { ExtensionInterface: infer I extends {} }
    ? I
    : {};

/**
 * Create a new state subclass that inherits relevant default values from a base Behavior.Type and adds new default
 * values from cluster attributes.
 */
function createDerivedState(cluster: ClusterType, schema: Schema, base: Behavior.Type, namesUsed: Set<string>) {
    const BaseState = base["State"];
    if (BaseState === undefined) {
        throw new ImplementationError(`No state class defined for behavior class ${base.name}`);
    }

    const oldDefaults = new BaseState() as Record<string, any>;
    const statePrefix = `${camelize(cluster.name)}.state`;

    const newAttributes = {} as Record<string, ClusterType.Attribute>;
    for (const name in cluster.attributes) {
        const attribute = cluster.attributes[name];
        if (isGlobal(attribute)) {
            continue;
        }
        newAttributes[name] = attribute;
    }

    let featuresAvailable, featuresSupported;
    if (schema instanceof ClusterModel) {
        const normalized = FeatureSet.normalize(schema.featureMap, schema.supportedFeatures);
        featuresAvailable = normalized.featuresAvailable;
        featuresSupported = normalized.featuresSupported;
    } else {
        featuresAvailable = new FeatureSet();
        featuresSupported = new FeatureSet();
    }

    // For each new attribute, inject the attribute's default if we don't already have a value, then inject a descriptor
    const defaults = {} as Record<string, any>;
    for (const name in newAttributes) {
        // Determine whether attribute applies based on conformance.  If it doesn't, make sure to overwrite any existing
        // value from previous configurations as otherwise conformance may not pass
        const attrSchema = schema.get(AttributeModel, camelize(name, true));
        if (attrSchema && !attrSchema.effectiveConformance.isApplicable(featuresAvailable, featuresSupported)) {
            if (oldDefaults[name] !== undefined) {
                defaults[name] = undefined;
            }
            continue;
        }

        // Attribute applies.  Make sure a default value is present
        defaults[name] = selectDefaultValue(
            oldDefaults[name],
            cluster.attributes[name],
            schema.get(AttributeModel, camelize(name, true)),
        );
    }

    for (const name in defaults) {
        if (namesUsed.has(name)) {
            throw new ImplementationError(`Conflicting definitions of property ${statePrefix}.${name}`);
        }
        namesUsed.add(name);
    }

    return DerivedState({
        name: `${cluster.name}$State`,
        base: base.State,
        values: defaults,
    });
}

function isGlobal(attribute: ClusterType.Attribute) {
    return attribute.id === 0xfe || (attribute.id >= 0xfff0 && attribute.id <= 0xffff);
}

/**
 * Extend events with additional implementations.
 */
function createDerivedEvents(cluster: ClusterType, base: Behavior.Type, stateNames: Set<string>) {
    const names = new Set<string>();

    const baseInstance = new base.Events() as unknown as Record<string, unknown>;

    // Add mandatory events that are not present in the base class
    const applicableClusterEvents = new Set();
    for (const name in cluster.events) {
        applicableClusterEvents.add(name);
        if (!cluster.events[name].optional && baseInstance[name] === undefined) {
            names.add(name);
        }
    }

    // Add events for mandatory attributes that are not present in the base class
    for (const attrName of stateNames) {
        const changing = `${attrName}$Changing`;
        if (baseInstance[changing] === undefined) {
            names.add(changing);
        }

        const changed = `${attrName}$Changed`;
        if (baseInstance[changed] === undefined) {
            names.add(changed);
        }
    }

    // TODO - if necessary, mask out (set to undefined) events present in base cluster but not derived cluster

    return GeneratedClass({
        name: `${cluster.name}$Events`,
        base: base.Events,

        initialize() {
            for (const name of names) {
                (this as any)[name] = AsyncObservable();
            }
        },
    });
}

/**
 * Obtain schema for a particular cluster.
 *
 * Currently we model TLV and TypeScript types with ClusterType and use ClusterModel for logical operations.  This dual
 * mode could probably be improved but we will continue to need a source for type information (ClusterType) and more
 * exhaustive operational metadata (ClusterModel).
 *
 * This acts as an adapter to load the appropriate {@link ClusterModel} for a {@link ClusterType}.
 */
function schemaForCluster(cluster: ClusterType) {
    let schema: ClusterModel | undefined;

    for (const child of Matter.children) {
        if (child.tag === ElementTag.Cluster && child.id === cluster.id) {
            schema = new ClusterModel(child);
            break;
        }
    }

    if (schema === undefined) {
        throw new ImplementationError(`Cannot locate schema for cluster ${cluster.id}, please supply manually`);
    }

    return schema;
}

/**
 * Ensure the supported features enumerated by schema align with a cluster definition.
 */
function syncFeatures(schema: Schema, cluster: ClusterType) {
    if (!(schema instanceof ClusterModel)) {
        return schema;
    }

    const incomingFeatures = new FeatureSet(cluster.supportedFeatures);
    if (new FeatureSet(cluster.supportedFeatures).is(schema.supportedFeatures)) {
        return schema;
    }
    schema = schema.clone();
    schema.supportedFeatures = incomingFeatures;
    return schema;
}

function createDefaultCommandDescriptors(cluster: ClusterType, base: Behavior.Type) {
    const result = {} as Record<string, PropertyDescriptor>;
    const instance = introspectionInstanceOf(base);

    for (const name in cluster.commands) {
        if (!instance[name]) {
            result[name] = {
                value: Behavior.unimplemented,
                writable: true,
            };
        }
    }

    return result;
}

/**
 * TODO - currently we inject default values for attributes even if they're optional, thus indicating support.
 * Developer may override by setting the default to undefined, but it may be desirable to instead set the default to
 * undefined if the attribute is not mandatory
 */
function selectDefaultValue(oldDefault: Val, clusterAttr: Attribute<any, any>, schemaAttr?: AttributeModel) {
    if (oldDefault) {
        return oldDefault;
    }

    if (clusterAttr.optional) {
        return;
    }

    if (clusterAttr.default !== undefined) {
        return clusterAttr.default;
    }

    if (!schemaAttr) {
        return;
    }

    if (schemaAttr.nullable) {
        return null;
    }

    // TODO - skip the following defaults if conformance is not absolutely mandatory.  This is pretty limited, may need
    // to use more sophisticated evaluation if insufficient
    const conformance = schemaAttr.effectiveConformance;
    if (!conformance.mandatory) {
        return;
    }

    switch (schemaAttr.effectiveMetatype) {
        case Metatype.bitmap:
        case Metatype.object:
            // This is not a very good default but it is better than undefined
            return {};

        case Metatype.array:
            // Same
            return [];
    }
}
