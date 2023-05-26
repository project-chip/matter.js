/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Merge } from "../util/Type.js";
import { BitSchema, TypeFromBitSchema } from "../schema/BitmapSchema.js";
import { TlvSchema } from "../tlv/TlvSchema.js";
import { TlvVoid } from "../tlv/TlvVoid.js";
import { TlvFields, TlvObject, TypeFromFields } from "../tlv/TlvObject.js";
import { AttributeId, TlvAttributeId } from "../datatype/AttributeId.js";
import { EventId, TlvEventId } from "../datatype/EventId.js";
import { CommandId, TlvCommandId } from "../datatype/CommandId.js";
import { TlvBitmap, TlvUInt16, TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { ClusterIdentifier } from "./ClusterIdentifier.js";

export const enum AccessLevel {
    View,
    Manage,
    Administer,
}

/* Interfaces and helper methods to define a cluster attribute */
export interface Attribute<T> { id: number, schema: TlvSchema<T>, optional: boolean, readAcl: AccessLevel, writable: boolean, scene: boolean, persistent: boolean, omitChanges: boolean, writeAcl?: AccessLevel, default?: T }
export interface OptionalAttribute<T> extends Attribute<T> { optional: true }
export interface WritableAttribute<T> extends Attribute<T> { writable: true }
export interface OptionalWritableAttribute<T> extends OptionalAttribute<T> { writable: true }
export type AttributeJsType<T extends Attribute<any>> = T extends Attribute<infer JsType> ? JsType : never;
interface AttributeOptions<T> { scene?: boolean, persistent?: boolean, omitChanges?: boolean, default?: T, readAcl?: AccessLevel, writeAcl?: AccessLevel }
export const Attribute = <T, V extends T>(id: number, schema: TlvSchema<T>, { scene = false, persistent = false, omitChanges = false, default: conformanceValue, readAcl = AccessLevel.View }: AttributeOptions<V> = {}): Attribute<T> => ({ id, schema, optional: false, writable: false, scene, persistent, omitChanges, default: conformanceValue, readAcl });
export const OptionalAttribute = <T, V extends T>(id: number, schema: TlvSchema<T>, { scene = false, persistent = false, omitChanges = false, default: conformanceValue, readAcl = AccessLevel.View }: AttributeOptions<V> = {}): OptionalAttribute<T> => ({ id, schema, optional: true, writable: false, scene, persistent, omitChanges, default: conformanceValue, readAcl });
export const WritableAttribute = <T, V extends T>(id: number, schema: TlvSchema<T>, { scene = false, persistent = false, omitChanges = false, default: conformanceValue, readAcl = AccessLevel.View, writeAcl = AccessLevel.View }: AttributeOptions<V> = {}): WritableAttribute<T> => ({ id, schema, optional: false, writable: true, scene, persistent, omitChanges, default: conformanceValue, readAcl, writeAcl });
export const OptionalWritableAttribute = <T, V extends T>(id: number, schema: TlvSchema<T>, { scene = false, persistent = false, omitChanges = false, default: conformanceValue, readAcl = AccessLevel.View, writeAcl = AccessLevel.View }: AttributeOptions<V> = {}): OptionalWritableAttribute<T> => ({ id, schema, optional: true, writable: true, scene, persistent, omitChanges, default: conformanceValue, readAcl, writeAcl });

// We know that Attributes extensions will only have string keys but TS
// doesn't.  Use this so attribute names are only strings
export type AttributeNames<A extends Attributes> = Extract<keyof A, string>;

export type MandatoryAttributeNames<A extends Attributes> = { [K in AttributeNames<A>]: A[K] extends OptionalAttribute<any> ? never : K }[AttributeNames<A>];
export type OptionalAttributeNames<A extends Attributes> = { [K in AttributeNames<A>]: A[K] extends OptionalAttribute<any> ? K : never }[AttributeNames<A>];
export type MandatoryLocalAttributeNames<A extends Attributes> = Exclude<MandatoryAttributeNames<A>, AttributeNames<GlobalAttributes<any>>>;

/* Interfaces and helper methods to define a cluster command */
export const TlvNoResponse = TlvVoid;
export interface Command<RequestT, ResponseT> { optional: boolean, requestId: number, requestSchema: TlvSchema<RequestT>, responseId: number, responseSchema: TlvSchema<ResponseT> }
export interface OptionalCommand<RequestT, ResponseT> extends Command<RequestT, ResponseT> { optional: true }
export type ResponseType<T extends Command<any, any>> = T extends OptionalCommand<any, infer ResponseT> ? ResponseT : (T extends Command<any, infer ResponseT> ? ResponseT : never);
export type RequestType<T extends Command<any, any>> = T extends OptionalCommand<infer RequestT, any> ? RequestT : (T extends Command<infer RequestT, any> ? RequestT : never);

export const Command = <RequestT, ResponseT>(requestId: number, requestSchema: TlvSchema<RequestT>, responseId: number, responseSchema: TlvSchema<ResponseT>): Command<RequestT, ResponseT> => ({ optional: false, requestId, requestSchema, responseId, responseSchema });
export const OptionalCommand = <RequestT, ResponseT>(requestId: number, requestSchema: TlvSchema<RequestT>, responseId: number, responseSchema: TlvSchema<ResponseT>): OptionalCommand<RequestT, ResponseT> => ({ optional: true, requestId, requestSchema, responseId, responseSchema });

/* Interfaces and helper methods to define a cluster event */
export const enum EventPriority {
    Critical,
    Info,
}
export interface Event<T> { id: number, schema: TlvSchema<T>, priority: EventPriority, optional: boolean }
export interface OptionalEvent<T> extends Event<T> { optional: true }
export const Event = <FT extends TlvFields>(id: number, priority: EventPriority, data: FT = <FT>{}): Event<TypeFromFields<FT>> => ({ id, schema: TlvObject(data), priority, optional: false });
export const OptionalEvent = <FT extends TlvFields>(id: number, priority: EventPriority, data: FT = <FT>{}): Event<TypeFromFields<FT>> => ({ id, schema: TlvObject(data), priority, optional: true });

/* Interfaces and helper methods to define a cluster */
export interface Attributes { [key: string]: Attribute<any> }
export interface Commands { [key: string]: Command<any, any> }
export interface Events { [key: string]: Event<any> }

// TODO Adjust typing to be derived from the schema below
/** @see {@link MatterCoreSpecificationV1_0} § 7.13 */
export type GlobalAttributes<F extends BitSchema> = {
    /** Indicates the revision of the server cluster specification supported by the cluster instance. */
    clusterRevision: Attribute<number>,

    /** Indicates whether the server supports zero or more optional cluster features. */
    featureMap: Attribute<TypeFromBitSchema<F>>,

    /** List of the attribute IDs of the attributes supported by the cluster instance. */
    attributeList: Attribute<AttributeId[]>,

    /** List of the event IDs of the events supported by the cluster instance. */
    eventList: Attribute<EventId[]>,

    /** List of client generated commands which are supported by this cluster server instance. */
    acceptedCommandList: Attribute<CommandId[]>,

    /** List of server generated commands (server to client commands). */
    generatedCommandList: Attribute<CommandId[]>,
}

export const GlobalAttributes = <F extends BitSchema>(features: F) => ({
    clusterRevision: Attribute(0xFFFD, TlvUInt16),
    featureMap: Attribute(0xFFFC, TlvBitmap(TlvUInt32, features)),
    attributeList: Attribute(0xFFFB, TlvArray(TlvAttributeId)),
    eventList: Attribute(0xFFFA, TlvArray(TlvEventId)),
    acceptedCommandList: Attribute(0xFFF9, TlvArray(TlvCommandId)),
    generatedCommandList: Attribute(0xFFF8, TlvArray(TlvCommandId)),
} as GlobalAttributes<F>);
export interface Cluster<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events> {
    id: ClusterIdentifier,
    name: string,
    revision: number,
    isPrivate: false,
    features: F,
    supportedFeatures: SF,
    attributes: A,
    commands: C,
    events: E,
}
export const Cluster = <F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>({
    id,
    name,
    revision,
    isPrivate = false,
    features = <F>{},
    supportedFeatures = <SF>{},
    attributes = <A>{},
    commands = <C>{},
    events = <E>{},
}: {
    id: ClusterIdentifier,
    name: string,
    revision: number,
    isPrivate?: boolean,
    features?: F,
    supportedFeatures?: SF,
    attributes?: A,
    commands?: C,
    events?: E,
}) => {
    const cluster = {
        id,
        name,
        revision,
        isPrivate,
        features,
        supportedFeatures,
        commands,
        attributes: Merge(attributes, GlobalAttributes(features)),
        events,
        private: false
    } as Cluster<F, SF, Merge<A, GlobalAttributes<F>>, C, E>;

    triggerClusterDefinition(cluster);

    return cluster;
};

type ClusterExtend<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events> = {
    supportedFeatures: SF,
    attributes?: A,
    commands?: C,
    events?: E,
};

// TODO Find out why eslint markts that as unused
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ClusterExtend =
    <
        F extends BitSchema,
        SF_BASE extends TypeFromBitSchema<F>,
        A_BASE extends Attributes,
        C_BASE extends Commands,
        E_BASE extends Events,
        SF_EXTEND extends TypeFromBitSchema<F>,
        A_EXTEND extends Attributes,
        C_EXTEND extends Commands,
        E_EXTEND extends Events,
    >(
        { id, name, revision, isPrivate, features, supportedFeatures, attributes, commands, events }: Cluster<F, SF_BASE, A_BASE, C_BASE, E_BASE>,
        {
            supportedFeatures: supportedFeaturesExtend,
            attributes: attributesExtend = <A_EXTEND>{},
            commands: commandsExtend = <C_EXTEND>{},
            events: eventsExtend = <E_EXTEND>{},
        }: ClusterExtend<F, SF_EXTEND, A_EXTEND, C_EXTEND, E_EXTEND>
    ) => {
        const cluster = {
            id,
            name,
            revision,
            isPrivate,
            features,
            supportedFeatures: Merge(supportedFeatures, supportedFeaturesExtend),
            attributes: Merge(attributes, attributesExtend),
            commands: Merge(commands, commandsExtend),
            events: Merge(events, eventsExtend),
            private: false,
        } as Cluster<
            F,
            Merge<SF_BASE, SF_EXTEND>,
            Merge<A_BASE, A_EXTEND>,
            Merge<C_BASE, C_EXTEND>,
            Merge<E_BASE, E_EXTEND>
        >;

        triggerClusterDefinition(cluster);

        return cluster;
    };

type ClusterDefinitionListener = (cluster: Cluster<any, any, any, any, any>) => void;
const clusterDefinitionListeners = Array<ClusterDefinitionListener>();

function triggerClusterDefinition(cluster: Cluster<any, any, any, any, any>) {
    clusterDefinitionListeners.forEach((listener) => listener(cluster));
}

/**
 * Register a listener that is invoked when a new cluster is defined.  This is
 * primarily intended for ClusterFactory.  Handled this way to avoid circular
 * references and keep privates private.
 * 
 * @param listener invoked when a new cluster is instantiated
 */
export function onClusterDefinition(listener: ClusterDefinitionListener) {
    clusterDefinitionListeners.push(listener);
}
