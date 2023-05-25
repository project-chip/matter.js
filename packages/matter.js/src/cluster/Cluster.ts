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

export const enum AccessLevel {
    View,
    Manage,
    Administer,
}

/* Interfaces and helper methods to define a cluster attribute */
export interface Attribute<T> {
    id: number,
    schema: TlvSchema<T>,
    optional: boolean,
    optionalIf: number[],
    requiredIf: number[],
    readAcl: AccessLevel,
    writable: boolean,
    scene: boolean,
    persistent: boolean,
    fixed: boolean,
    fabricScoped: boolean,
    omitChanges: boolean,
     writeAcl?: AccessLevel,
     default?: T
    }

export interface OptionalAttribute<T> extends Attribute<T> { optional: true }

export interface WritableAttribute<T> extends Attribute<T> { writable: true }

export interface OptionalWritableAttribute<T> extends OptionalAttribute<T> { writable: true }
export interface WritableFabricScopedAttribute<T> extends WritableAttribute<T> { fabricScoped: true }
export interface OptionalWritableFabricScopedAttribute<T> extends OptionalWritableAttribute<T> { fabricScoped: true }
export interface FixedAttribute<T> extends Attribute<T> { fixed: true }
export interface OptionalFixedAttribute<T> extends OptionalAttribute<T> { fixed: true }

export type AttributeJsType<T extends Attribute<any>> = T extends Attribute<infer JsType> ? JsType : never;

interface AttributeOptions<T> {
  scene?: boolean;
  persistent?: boolean;
  omitChanges?: boolean;
  default?: T;
  readAcl?: AccessLevel;
  writeAcl?: AccessLevel;
  /** only valid on optional attributes */
  optionalIf?: Array<number>;
  /** only valid on optional attributes */
  requiredIf?: Array<number>;
}

export const Attribute = <T, V extends T>(
  id: number,
  schema: TlvSchema<T>,
  {
    scene = false,
    persistent = false,
    omitChanges = false,
    default: conformanceValue,
    readAcl = AccessLevel.View,
  }: AttributeOptions<V> = {}
): Attribute<T> => ({
  id,
  schema,
  optional: false,
  optionalIf: [],
  requiredIf: [],
  writable: false,
  fixed: false,
  fabricScoped: false,
  scene,
  persistent,
  omitChanges,
  default: conformanceValue,
  readAcl,
});

export const OptionalAttribute = <T, V extends T>(
  id: number,
  schema: TlvSchema<T>,
  {
    scene = false,
    persistent = false,
    omitChanges = false,
    default: conformanceValue,
    optionalIf,
    requiredIf,
    readAcl = AccessLevel.View,
  }: AttributeOptions<V> = {}
): OptionalAttribute<T> => ({
  id,
  schema,
  optional: true,
  writable: false,
  fixed: false,
  scene,
  persistent,
  fabricScoped: false,
  omitChanges,
  optionalIf: optionalIf ?? [],
  requiredIf: requiredIf ?? [],
  default: conformanceValue,
  readAcl,
});

export const WritableAttribute = <T, V extends T>(
  id: number,
  schema: TlvSchema<T>,
  {
    scene = false,
    persistent = false,
    omitChanges = false,
    default: conformanceValue,
    readAcl = AccessLevel.View,
    writeAcl = AccessLevel.View,
    optionalIf,
    requiredIf,
  }: AttributeOptions<V> = {}
): WritableAttribute<T> => ({
  id,
  schema,
  optional: false,
  optionalIf: optionalIf ?? [],
  requiredIf: requiredIf ?? [],
  writable: true,
  fixed: false,
  fabricScoped: false,
  scene,
  persistent,
  omitChanges,
  default: conformanceValue,
  readAcl,
  writeAcl,
});

export const OptionalWritableAttribute = <T, V extends T>(
  id: number,
  schema: TlvSchema<T>,
  {
    scene = false,
    persistent = false,
    omitChanges = false,
    default: conformanceValue,
    readAcl = AccessLevel.View,
    writeAcl = AccessLevel.View,
    optionalIf,
    requiredIf,
  }: AttributeOptions<V> = {}
): OptionalWritableAttribute<T> => ({
  id,
  schema,
  optional: true,
  optionalIf: optionalIf ?? [],
  requiredIf: requiredIf ?? [],
  writable: true,
  fixed: false,
  fabricScoped: false,
  scene,
  persistent,
  omitChanges,
  default: conformanceValue,
  readAcl,
  writeAcl,
});

export const WritableFabricScopedAttribute = <T, V extends T>(
  id: number,
  schema: TlvSchema<T>,
  {
    scene = false,
    persistent = true,
    omitChanges = false,
    default: conformanceValue,
    readAcl = AccessLevel.View,
    writeAcl = AccessLevel.View,
  }: AttributeOptions<V> = {}
): WritableFabricScopedAttribute<T> => ({
  id,
  schema,
  optional: false,
  writable: true,
  fixed: false,
  scene,
  persistent,
  fabricScoped: true,
  omitChanges,
  default: conformanceValue,
  readAcl,
  writeAcl,
  optionalIf: [],
  requiredIf: [],
});

export const OptionalWritableFabricScopedAttribute = <T, V extends T>(
  id: number,
  schema: TlvSchema<T>,
  {
    scene = false,
    persistent = true,
    omitChanges = false,
    default: conformanceValue,
    readAcl = AccessLevel.View,
    writeAcl = AccessLevel.View,
    optionalIf,
    requiredIf,
  }: AttributeOptions<V> = {}
): OptionalWritableFabricScopedAttribute<T> => ({
  id,
  schema,
  optional: true,
  writable: true,
  fixed: false,
  scene,
  persistent,
  fabricScoped: true,
  omitChanges,
  default: conformanceValue,
  readAcl,
  writeAcl,
  optionalIf: optionalIf ?? [],
  requiredIf: requiredIf ?? [],
});

export const FixedAttribute = <T, V extends T>(
  id: number,
  schema: TlvSchema<T>,
  {
    scene = false,
    persistent = false,
    omitChanges = false,
    default: conformanceValue,
    readAcl = AccessLevel.View,
  }: AttributeOptions<V> = {}
): FixedAttribute<T> => ({
  id,
  schema,
  optional: false,
  writable: false,
  fixed: true,
  scene,
  persistent,
  fabricScoped: false,
  omitChanges,
  default: conformanceValue,
  readAcl,
  optionalIf: [],
  requiredIf: [],
});

export const OptionalFixedAttribute = <T, V extends T>(
  id: number,
  schema: TlvSchema<T>,
  {
    scene = false,
    persistent = false,
    omitChanges = false,
    default: conformanceValue,
    readAcl = AccessLevel.View,
    optionalIf,
    requiredIf,
  }: AttributeOptions<V> = {}
): OptionalFixedAttribute<T> => ({
  id,
  schema,
  optional: true,
  writable: false,
  fixed: true,
  scene,
  persistent,
  fabricScoped: false,
  omitChanges,
  default: conformanceValue,
  readAcl,
  optionalIf: optionalIf ?? [],
  requiredIf: requiredIf ?? [],
});

export type MandatoryAttributeNames<A extends Attributes> = { [K in keyof A]: A[K] extends OptionalAttribute<any> ? never : K }[keyof A];
export type OptionalAttributeNames<A extends Attributes> = { [K in keyof A]: A[K] extends OptionalAttribute<any> ? K : never }[keyof A];

/* Interfaces and helper methods to define a cluster command */
export const TlvNoResponse = TlvVoid;
export interface Command<RequestT, ResponseT> {
    optional: boolean,
    requestId: number,
    requestSchema: TlvSchema<RequestT>,
    responseId: number,
    responseSchema: TlvSchema<ResponseT>

}
export interface OptionalCommand<RequestT, ResponseT> extends Command<RequestT, ResponseT> {
    optional: true,
    requiredIf?: number[],
    options?: CommandOptions
}

export type ResponseType<T extends Command<any, any>> = T extends OptionalCommand<any, infer ResponseT> ? ResponseT : (T extends Command<any, infer ResponseT> ? ResponseT : never);
export type RequestType<T extends Command<any, any>> = T extends OptionalCommand<infer RequestT, any> ? RequestT : (T extends Command<infer RequestT, any> ? RequestT : never);


interface CommandOptions {
    optionalIf?: Array<number>,
    requiredIf?: Array<number>
}

export const Command =
    <RequestT, ResponseT>(
        requestId: number,
        requestSchema: TlvSchema<RequestT>,
        responseId: number,
        responseSchema: TlvSchema<ResponseT>
    ): Command<RequestT, ResponseT> => ({
        optional: false,
        requestId,
        requestSchema,
        responseId,
        responseSchema
    });

export const OptionalCommand =
    <RequestT, ResponseT>(
        requestId: number,
        requestSchema: TlvSchema<RequestT>,
        responseId: number,
        responseSchema: TlvSchema<ResponseT>,
        options?: CommandOptions
    ): OptionalCommand<RequestT, ResponseT> => ({
        optional: true,
        options,
        requestId,
        requestSchema,
        responseId,
        responseSchema
    });

/* Interfaces and helper methods to define a cluster event */
export const enum EventPriority {
    Critical,
    Info,
    Debug,
}
export interface Event<T> { id: number, schema: TlvSchema<T>, priority: EventPriority, optional: boolean }
export interface OptionalEvent<T> extends Event<T> { optional: true }
export const Event = <FT extends TlvFields>(id: number, priority: EventPriority, data: FT = <FT>{}): Event<TypeFromFields<FT>> => ({ id, schema: TlvObject(data), priority, optional: false });
export const OptionalEvent = <FT extends TlvFields>(id: number, priority: EventPriority, data: FT = <FT>{}): OptionalEvent<TypeFromFields<FT>> => ({ id, schema: TlvObject(data), priority, optional: true });
export type EventType<T extends Event<any>> = T extends OptionalEvent<infer EventT> ? EventT : (T extends Event<infer EventT> ? EventT : never);
export type MandatoryEventNames<E extends Events> = { [K in keyof E]: E[K] extends OptionalEvent<any> ? never : K }[keyof E];
export type OptionalEventNames<E extends Events> = { [K in keyof E]: E[K] extends OptionalEvent<any> ? K : never }[keyof E];

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
    id: number,
    name: string,
    revision: number,
    features: F,
    supportedFeatures: SF,
    attributes: A,
    commands: C,
    events: E,
}
export const Cluster = <F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes = {}, C extends Commands = {}, E extends Events = {}>({
    id,
    name,
    revision,
    features = <F>{},
    supportedFeatures = <SF>{},
    attributes = <A>{},
    commands = <C>{},
    events = <E>{},
}: {
    id: number,
    name: string,
    revision: number,
    features?: F,
    supportedFeatures?: SF,
    attributes?: A,
    commands?: C,
    events?: E,
}): Cluster<F, SF, Merge<A, GlobalAttributes<F>>, C, E> => ({
    id,
    name,
    revision,
    features,
    supportedFeatures,
    commands,
    attributes: Merge(attributes, GlobalAttributes(features)),
    events,
});

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
        SF_EXTEND extends TypeFromBitSchema<F>,
        A_BASE extends Attributes = {},
        C_BASE extends Commands = {},
        E_BASE extends Events = {},
        A_EXTEND extends Attributes = {},
        C_EXTEND extends Commands = {},
        E_EXTEND extends Events = {},
    >(
        { id, name, revision, features, supportedFeatures, attributes, commands, events }: Cluster<F, SF_BASE, A_BASE, C_BASE, E_BASE>,
        {
            supportedFeatures: supportedFeaturesExtend,
            attributes: attributesExtend = <A_EXTEND>{},
            commands: commandsExtend = <C_EXTEND>{},
            events: eventsExtend = <E_EXTEND>{},
        }: ClusterExtend<F, SF_EXTEND, A_EXTEND, C_EXTEND, E_EXTEND>
    ): Cluster<
        F,
        Merge<SF_BASE, SF_EXTEND>,
        Merge<A_BASE, A_EXTEND>,
        Merge<C_BASE, C_EXTEND>,
        Merge<E_BASE, E_EXTEND>
    > => (
        {
            id,
            name,
            revision,
            features,
            supportedFeatures: Merge(supportedFeatures, supportedFeaturesExtend),
            attributes: Merge(attributes, attributesExtend),
            commands: Merge(commands, commandsExtend),
            events: Merge(events, eventsExtend),
        }
    );
