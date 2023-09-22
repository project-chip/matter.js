/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../common/MatterError.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { serialize } from "../util/String.js";
import { Branded, Merge } from "../util/Type.js";
import {
    Attribute as ClusterAttribute,
    Command as ClusterCommand,
    Event as ClusterEvent,
    ConditionalFeatureList,
    GlobalAttributes,
} from "./Cluster.js";

export class IllegalClusterError extends MatterError {}

/**
 * The formal definitions of clusters in matter.js are generated
 * programmatically.  There is no single formal "cluster factory" but rather a
 * set of types and methods for each cluster.
 *
 * Individual modules associated with each cluster use the utility types and
 * methods as building blocks.
 *
 * Note:  There is overlap between the types here and those in Cluster.ts.
 * They may converge over time but are fully compatible.
 */
export namespace ClusterFactory {
    /**
     * An "element set" defines the set of elements (commands, attributes or
     * events) of a cluster.
     */
    export type ElementSet<T> = Record<string, T | undefined>;

    /**
     * Definition of a cluster attribute.
     */
    export type Attribute = ClusterAttribute<any, any>;

    /**
     * Definition of a cluster command.
     */
    export type Command = ClusterCommand<any, any, any>;

    /**
     * Definition of a cluster event.
     */
    export type Event = ClusterEvent<any, any>;

    /**
     * These fields uniquely identify a cluster.
     */
    export interface Identity {
        readonly id: ClusterId;
        readonly name: string;
        readonly revision: number;
    }

    /**
     * Cluster "elements" are attributes, commands and events that may comprise
     * a cluster.
     */
    export interface ClusterElements {
        readonly attributes: ElementSet<Attribute>;
        readonly commands: ElementSet<Command>;
        readonly events: ElementSet<Event>;
    }

    /**
     * A cluster "component" is a set of elements intended to be added to a
     * cluster definition.
     */
    export interface Component extends ClusterElements {}

    /**
     * A "typed component" is a component with detailed type information.
     */
    export interface TypedComponent<T extends Partial<Component>> {
        attributes: T["attributes"] extends ElementSet<Attribute> ? T["attributes"] : {};
        commands: T["commands"] extends ElementSet<Command> ? T["commands"] : {};
        events: T["events"] extends ElementSet<Event> ? T["events"] : {};
    }

    /**
     * Cluster "features" describe the features supported by a cluster.
     */
    export interface Features<F extends BitSchema = {}> {
        readonly features: F;
        readonly supportedFeatures: TypeFromPartialBitSchema<F>;
        readonly unknown?: boolean;
    }

    /**
     * A Cluster represents a fully formed cluster with features selected.
     */
    export interface Cluster extends Identity, Features<BitSchema>, ClusterElements {}

    /**
     * A "partial definition" is a cluster definition that does not require
     * empty elements to be present.
     */
    export type PartialDefinition = { id: number } & Omit<Identity, "id"> &
        Partial<Features> & {
            attributes?: ElementSet<Attribute>;
            commands?: ElementSet<Command>;
            events?: ElementSet<Event>;
        };

    /**
     * A "definition" is the fully typed Cluster for a PartialDefinition.
     */
    export type Definition<T extends PartialDefinition> = {
        id: Branded<T["id"], "ClusterId">;
        name: T["name"];
        revision: T["revision"];
        features: T["features"] extends {} ? T["features"] : {};
        supportedFeatures: T["supportedFeatures"] extends {} ? T["supportedFeatures"] : {};
        attributes: T["attributes"] extends infer A extends {}
            ? Merge<A, GlobalAttributes<T["features"] extends {} ? T["features"] : {}>>
            : {};
        commands: T["commands"] extends {} ? T["commands"] : {};
        events: T["events"] extends {} ? T["events"] : {};
        unknown: T["unknown"] extends boolean ? T["unknown"] : false;
    } & Omit<T, "attributes">;

    /**
     * A "MutableDefinition" is a Cluster with fields that may be modified.
     */
    export type MutableDefinition = {
        -readonly [Key in keyof Cluster]: Cluster[Key];
    };

    /**
     * An "extender" is a function that creates a cluster with specific
     * features enabled.
     */
    export type Extender = (...features: any) => Cluster;

    /**
     * An "extensible" cluster is a base cluster with support for enabling
     * features.
     */
    export interface Extensible extends Cluster {
        with: Extender;
    }

    /**
     * An "element" is a single attribute, command or event of a cluster.
     */
    export type Element = Attribute | Command | Event;

    /**
     * Define a cluster component.
     */
    export function Component<const T extends Partial<Component>>(component: T): TypedComponent<T> {
        return {
            attributes: {},
            commands: {},
            events: {},
            ...component,
        };
    }

    /**
     * Define a cluster.
     */
    export function Definition<const T extends PartialDefinition>(definition: T) {
        return {
            id: ClusterId(definition.id),
            name: definition.name,
            revision: definition.revision,
            features: definition.features ?? {},
            supportedFeatures: definition.supportedFeatures ?? {},
            attributes: {
                ...GlobalAttributes(definition.features ?? {}),
                ...definition.attributes,
            },
            commands: definition.commands ?? {},
            events: definition.events ?? {},
            unknown: definition.unknown,
        } as Definition<T>;
    }

    /**
     * Define an extensible cluster.
     */
    export function Extensible<
        const DefinitionT extends Identity & Partial<ClusterElements> & Partial<Features>,
        const ExtenderT extends Extender,
    >(definition: DefinitionT, extender: ExtenderT) {
        return {
            ...Definition(definition),
            with: extender,
        } as const;
    }

    /**
     * Define a cluster that can only be extended.
     */
    export function ExtensibleOnly<const ExtenderT extends Extender>(extender: ExtenderT) {
        return {
            with: extender,
        } as const;
    }

    /**
     * Injects a set of functionality into a cluster if the cluster supports
     * the specified features.
     *
     * This is used by extenders and does not convey type information.
     */
    export function extend(
        definition: MutableDefinition,
        elements: ClusterElements,
        ...applicableFeatures: TypeFromPartialBitSchema<any>[]
    ) {
        let applicable = false;
        pool: for (const features of applicableFeatures) {
            for (const k in features) {
                if (!!definition.supportedFeatures[k] !== !!features[k]) {
                    continue pool;
                }
            }
            applicable = true;
            break;
        }

        if (!applicable) {
            return;
        }

        if (elements.attributes) {
            if (definition.attributes) {
                definition.attributes = { ...definition.attributes, ...elements.attributes };
            } else {
                definition.attributes = elements.attributes;
            }
        }

        if (elements.commands) {
            if (definition.commands) {
                definition.commands = { ...definition.commands, ...elements.commands };
            } else {
                definition.commands = elements.commands;
            }
        }

        if (elements.events) {
            if (definition.events) {
                definition.events = { ...definition.events, ...elements.events };
            } else {
                definition.events = elements.events;
            }
        }
    }

    /**
     * Validates a set of feature flags against the features supported by a
     * cluster.
     *
     * Used by extenders.
     */
    export function validateFeatureSelection(features: string[], validFeatures: Record<string, string>) {
        for (const f of features) {
            if (!validFeatures[f]) {
                throw new IllegalClusterError(`"${f}" is not a valid feature identifier`);
            }
        }
    }

    /**
     * Throws an error if a feature combination is illegal per the Matter
     * specification.
     *
     * Used by extenders.
     */
    export function prevent(definition: Cluster, ...illegalFeatureCombinations: Record<string, boolean>[]) {
        pool: for (const bitmap of illegalFeatureCombinations) {
            for (const k in bitmap) {
                if (!!definition.supportedFeatures[k] !== !!bitmap[k]) {
                    continue pool;
                }
            }
            throw new IllegalClusterError(
                `Feature combination ${serialize(bitmap)} is disallowed by the Matter specification`,
            );
        }
    }

    /**
     * Create a conditional version of an unconditional element definition.
     */
    export function AsConditional<
        const ClusterT extends Cluster,
        const E extends Element,
        const OI extends ConditionalFeatureList<ClusterT["features"]>,
        const MI extends ConditionalFeatureList<ClusterT["features"]>,
    >(element: E, { optionalIf, mandatoryIf }: { optionalIf?: OI; mandatoryIf?: MI }) {
        return {
            ...element,
            optional: true,
            isConditional: true,
            optionalIf: optionalIf ?? [],
            mandatoryIf: mandatoryIf ?? [],
        } as const;
    }

    /**
     * Extract the type of a cluster's attributes.
     */
    export type AttributesOf<C extends Cluster> = C extends { attributes: infer E extends { [K in string]: Attribute } }
        ? { [K in Extract<keyof E, string> as E[K] extends Attribute ? K : never]: E[K] }
        : never;

    /**
     * Extract the type of a cluster's commands.
     */
    export type CommandsOf<C extends Cluster> = C extends { commands: infer E extends { [K in string]: Command } }
        ? { [K in Extract<keyof E, string> as E[K] extends Command ? K : never]: E[K] }
        : never;

    /**
     * Extract the type of a cluster's events.
     */
    export type EventsOf<C extends Cluster> = C extends { events: infer E extends { [K in string]: Event } }
        ? { [K in Extract<keyof E, string> as E[K] extends Event ? K : never]: E[K] }
        : never;
}
