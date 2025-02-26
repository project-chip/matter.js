/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AsyncObservable, camelize, GeneratedClass, ImplementationError } from "#general";
import type { Schema } from "#model";
import {
    ClusterModel,
    DefaultValue,
    ElementTag,
    FeatureMap,
    FeatureSet,
    Matter,
    Metatype,
    Scope,
    ValueModel,
} from "#model";
import { Val } from "#protocol";
import { Attribute, ClusterType } from "#types";
import { Behavior } from "../Behavior.js";
import { DerivedState } from "../state/StateType.js";
import type { ClusterBehavior } from "./ClusterBehavior.js";
import { ClusterBehaviorCache } from "./ClusterBehaviorCache.js";

const KNOWN_DEFAULTS = Symbol("knownDefaults");

/**
 * This is an internal utility used to track default values that we've erased due to conformance.  We reuse in
 * derivatives if the property is once again enabled.
 *
 * We cast the state constructor to this type so [KNOWN_DEFAULTS] becomes a static field on the state class.
 */
interface HasKnownDefaults {
    [KNOWN_DEFAULTS]?: Val.Struct;
}

/**
 * Create a non-functional instance of a {@link Behavior} for introspection purposes.
 */
export function introspectionInstanceOf(type: Behavior.Type) {
    return new (type as unknown as new () => Record<string, (...args: any[]) => any>)();
}

/**
 * This is the actual implementation of ClusterBehavior.for().  The result must match {@link ClusterBehavior.Type}<C>.
 */
export function createType(cluster: ClusterType, base: Behavior.Type, schema?: Schema) {
    if (schema === undefined) {
        if (base.schema) {
            schema = base.schema;
        }
        if (!schema) {
            schema = schemaForCluster(cluster);
        }
    }

    schema = syncFeatures(schema, cluster);

    const cached = ClusterBehaviorCache.get(cluster, base, schema);
    if (cached) {
        return cached;
    }

    let name;
    if (base.name.startsWith(cluster.name)) {
        name = base.name;
    } else {
        name = `${cluster.name}Behavior`;
    }

    // Mutation of schema will almost certainly result in logic errors so ensure that can't happen
    schema.freeze();

    const namesUsed = new Set<string>();
    const type = GeneratedClass({
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
    }) as ClusterBehavior.Type;

    ClusterBehaviorCache.set(cluster, base, schema, type);

    return type;
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
 *
 * Note - we only use the cluster here for default values
 */
function createDerivedState(cluster: ClusterType, schema: Schema, base: Behavior.Type, namesUsed: Set<string>) {
    const BaseState = base["State"];
    if (BaseState === undefined) {
        throw new ImplementationError(`No state class defined for behavior class ${base.name}`);
    }

    const scope = Scope(schema);

    const oldDefaults = new BaseState() as Record<string, any>;
    let knownDefaults = (BaseState as HasKnownDefaults)[KNOWN_DEFAULTS];

    // Determine the set of features so we can test attribute applicability
    let featuresAvailable, featuresSupported;
    if (schema instanceof ClusterModel) {
        const normalized = FeatureSet.normalize(schema.featureMap, schema.supportedFeatures);
        featuresAvailable = normalized.featuresAvailable;
        featuresSupported = normalized.featuresSupported;
    } else {
        featuresAvailable = new FeatureSet();
        featuresSupported = new FeatureSet();
    }

    // Index schema members by name
    const props = {} as Record<string, ValueModel[]>;
    for (const member of scope.membersOf(schema, { conformance: "deconflicted" })) {
        const name = camelize(member.name);
        if (props[name]) {
            props[name].push(member);
        } else {
            props[name] = [member];
        }
    }

    // For each new attribute, inject the attribute's default if we don't already have a value, then inject a descriptor
    const defaults = {} as Record<string, any>;
    for (const name in props) {
        // Determine whether attribute applies based on conformance.  If it doesn't, make sure to overwrite any existing
        // value from previous configurations as otherwise conformance may not pass
        const attrs = props[name];
        let propSchema;
        let applies = false;

        // Determine whether the attribute applies
        for (const attr of attrs) {
            if (attr.effectiveConformance.isApplicable(featuresAvailable, featuresSupported)) {
                propSchema = attr;
                applies = true;
                break;
            }
        }

        // If the attribute doesn't apply, erase any previous default
        if (!applies) {
            if (oldDefaults[name] !== undefined) {
                // Save the default value so we can recreate it if a future derivative re-enables this element
                if (!knownDefaults) {
                    knownDefaults = {};
                } else if (knownDefaults === (BaseState as HasKnownDefaults)[KNOWN_DEFAULTS]) {
                    knownDefaults = { ...knownDefaults };
                }
                knownDefaults[name] = oldDefaults[name];

                // Now clear the default value
                defaults[name] = undefined;
            }
            continue;
        }

        // Attribute applies
        const attribute = cluster.attributes[name];

        // The feature map value requires a special case because it's encoded in the "supportedFeatures" cluster
        // property
        if (attribute?.id === FeatureMap.id) {
            defaults[name] = cluster.supportedFeatures;
            continue;
        }

        // Make sure a default value is present
        defaults[name] = selectDefaultValue(
            scope,
            oldDefaults[name] === undefined ? knownDefaults?.[name] : oldDefaults[name],
            attribute,
            propSchema,
        );
    }

    for (const name in defaults) {
        // Convey the name to the event generator
        namesUsed.add(name);
    }

    const StateType = DerivedState({
        name: `${cluster.name}$State`,
        base: base.State,
        values: defaults,
    });

    if (knownDefaults) {
        (StateType as HasKnownDefaults)[KNOWN_DEFAULTS] = knownDefaults;
    }

    return StateType;
}

/**
 * Extend events with additional implementations.
 */
function createDerivedEvents(cluster: ClusterType, base: Behavior.Type, stateNames: Set<string>) {
    const names = new Set<string>(["interactionBegin", "interactionEnd"]);

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
                (this as Record<string, AsyncObservable>)[name] = AsyncObservable();
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
            schema = child;
            break;
        }
    }

    if (schema === undefined) {
        throw new ImplementationError(`Cannot locate schema for cluster ${cluster.id}, please supply manually`);
    }

    return schema;
}

/**
 * We cache schema for clusters configured for certain features.  This in turn enables the RootSupervisor cache which
 * keys off of the schema.
 */
const configuredSchemaCache = new Map<Schema, Record<string, Schema>>();

/**
 * Ensure the supported features enumerated by schema align with a cluster definition.
 */
function syncFeatures(schema: Schema, cluster: ClusterType) {
    if (!(schema instanceof ClusterModel)) {
        return schema;
    }

    // If features are unchanged, return original schema
    const incomingFeatures = new FeatureSet(cluster.supportedFeatures);
    if (new FeatureSet(cluster.supportedFeatures).is(schema.supportedFeatures)) {
        return schema;
    }

    // If we have cached this version of the cluster, return the cached schema
    const featureKey = [...incomingFeatures].sort().join(",");
    let schemaBucket = configuredSchemaCache.get(schema);
    if (schemaBucket === undefined) {
        schemaBucket = {};
        configuredSchemaCache.set(schema, schemaBucket);
    } else {
        if (featureKey in schemaBucket) {
            return schemaBucket[featureKey];
        }
    }

    // New schema
    schema = schema.clone();
    schema.supportedFeatures = incomingFeatures;

    // Cache
    schemaBucket[featureKey] = schema;

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

function selectDefaultValue(scope: Scope, oldDefault: Val, clusterAttr?: Attribute<any, any>, schemaProp?: ValueModel) {
    if (oldDefault !== undefined) {
        return oldDefault;
    }

    // Use cluster attribute rather than model attribute because currently "enable" modifies the cluster, not the schema
    if (clusterAttr?.optional) {
        return;
    }

    // Use cluster attribute rather than model attribute because currently "set" modifies the cluster, not the schema
    if (clusterAttr?.default !== undefined) {
        return clusterAttr.default;
    }

    // Following checks use the schema
    if (!schemaProp) {
        return;
    }

    if (schemaProp.nullable) {
        return null;
    }

    const effectiveDefault = DefaultValue(scope, schemaProp);
    if (effectiveDefault) {
        return effectiveDefault;
    }

    // TODO - skip the following defaults if conformance is not absolutely mandatory.  This is pretty limited, may need
    // to use more sophisticated evaluation if insufficient
    const conformance = schemaProp.effectiveConformance;
    if (!conformance.isMandatory) {
        return;
    }

    switch (schemaProp.effectiveMetatype) {
        case Metatype.bitmap:
        case Metatype.object:
            // This is not a very good default but it is better than undefined
            return {};

        case Metatype.array:
            // Same
            return [];
    }
}
