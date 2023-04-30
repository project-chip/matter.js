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
export interface Attribute<T> { id: number, schema: TlvSchema<T>, optional: boolean, readAcl: AccessLevel, writable: boolean, persistent: boolean, omitChanges: boolean, writeAcl?: AccessLevel, default?: T }
export interface OptionalAttribute<T> extends Attribute<T> { optional: true }
export interface WritableAttribute<T> extends Attribute<T> { writable: true }
export interface OptionalWritableAttribute<T> extends OptionalAttribute<T> { writable: true }
export type AttributeJsType<T extends Attribute<any>> = T extends Attribute<infer JsType> ? JsType : never;
interface AttributeOptions<T> { persistent?: boolean, omitChanges?: boolean, default?: T, readAcl?: AccessLevel, writeAcl?: AccessLevel }
export const Attribute = <T, V extends T>(id: number, schema: TlvSchema<T>, { persistent = false, omitChanges = false, default: conformanceValue, readAcl = AccessLevel.View }: AttributeOptions<V> = {}): Attribute<T> => ({ id, schema, optional: false, writable: false, persistent, omitChanges, default: conformanceValue, readAcl });
export const OptionalAttribute = <T, V extends T>(id: number, schema: TlvSchema<T>, { persistent = false, omitChanges = false, default: conformanceValue, readAcl = AccessLevel.View }: AttributeOptions<V> = {}): OptionalAttribute<T> => ({ id, schema, optional: true, writable: false, persistent, omitChanges, default: conformanceValue, readAcl });
export const WritableAttribute = <T, V extends T>(id: number, schema: TlvSchema<T>, { persistent = false, omitChanges = false, default: conformanceValue, readAcl = AccessLevel.View, writeAcl = AccessLevel.View }: AttributeOptions<V> = {}): WritableAttribute<T> => ({ id, schema, optional: false, writable: true, persistent, omitChanges, default: conformanceValue, readAcl, writeAcl });
export const OptionalWritableAttribute = <T, V extends T>(id: number, schema: TlvSchema<T>, { persistent = false, omitChanges = false, default: conformanceValue, readAcl = AccessLevel.View, writeAcl = AccessLevel.View }: AttributeOptions<V> = {}): OptionalWritableAttribute<T> => ({ id, schema, optional: true, writable: true, persistent, omitChanges, default: conformanceValue, readAcl, writeAcl });

export type MandatoryAttributeNames<A extends Attributes> = { [K in keyof A]: A[K] extends OptionalAttribute<any> ? never : K }[keyof A];
export type OptionalAttributeNames<A extends Attributes> = { [K in keyof A]: A[K] extends OptionalAttribute<any> ? K : never }[keyof A];

/* Interfaces and helper methods to define a cluster command */
export const TlvNoResponse = TlvVoid;
export interface Command<RequestT, ResponseT> { optional: boolean, requestId: number, requestSchema: TlvSchema<RequestT>, responseId: number, responseSchema: TlvSchema<ResponseT> }
export interface OptionalCommand<RequestT, ResponseT> extends Command<RequestT, ResponseT> { optional: true }
export type ResponseType<T extends Command<any, any>> = T extends OptionalCommand<any, infer ResponseT> ? ResponseT | undefined : (T extends Command<any, infer ResponseT> ? ResponseT : never);
export type RequestType<T extends Command<any, any>> = T extends Command<infer RequestT, any> ? RequestT : never;
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

export interface Cluster<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events> {
    id: number,
    name: string,
    revision: number,
    features: F,
    attributes: A,
    commands: C,
    events: E,
}
export const Cluster = <F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>({
    id,
    name,
    revision,
    features = <F>{},
    attributes = <A>{},
    commands = <C>{},
    events = <E>{},
}: {
    id: number,
    name: string,
    revision: number,
    features?: F,
    attributes?: A,
    commands?: C,
    events?: E,
}): Cluster<F, Merge<A, GlobalAttributes<F>>, C, E> => ({
    id,
    name,
    revision,
    features,
    commands,
    attributes: Merge(attributes, GlobalAttributes(features)),
    events,
});
