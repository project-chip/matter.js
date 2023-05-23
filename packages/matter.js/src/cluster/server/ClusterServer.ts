/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeServer } from "./AttributeServer.js";
import {
    Cluster,
    Command,
    Commands,
    AttributeJsType,
    Attributes,
    Attribute,
    OptionalAttribute,
    OptionalCommand,
    OptionalWritableAttribute,
    WritableAttribute,
    GlobalAttributes,
    MandatoryAttributeNames,
    OptionalAttributeNames,
    RequestType, ResponseType, MandatoryLocalAttributeNames,
} from "../Cluster.js";
import { Message } from "../../codec/MessageCodec.js";
import { Merge } from "../../util/Type.js";
import { MatterDevice } from "../../MatterDevice.js";
import { Session } from "../../session/Session.js";
import { CommandServer } from "./CommandServer.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { ClusterClientObj } from "../client/ClusterClient.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { TlvAttributeValuePair } from "../ScenesCluster.js";
import { Endpoint } from "../../device/Endpoint.js";

/** Cluster attributes accessible on the cluster server */
export type AttributeServers<A extends Attributes> = Merge<Omit<{ [P in MandatoryAttributeNames<A>]: AttributeServer<AttributeJsType<A[P]>> }, keyof GlobalAttributes<any>>, { [P in OptionalAttributeNames<A>]?: AttributeServer<AttributeJsType<A[P]>> }>;

/** Initial values for the cluster attribute */
export type AttributeInitialValues<A extends Attributes> = Merge<{ [P in MandatoryLocalAttributeNames<A>]: AttributeJsType<A[P]> }, { [P in OptionalAttributeNames<A>]?: AttributeJsType<A[P]> }>;
export type AttributeServerValues<A extends Attributes> = Merge<{ [P in MandatoryAttributeNames<A>]: AttributeJsType<A[P]> }, { [P in OptionalAttributeNames<A>]?: AttributeJsType<A[P]> }>;

type MandatoryCommandNames<C extends Commands> = { [K in keyof C]: C[K] extends OptionalCommand<any, any> ? never : K }[keyof C];
type OptionalCommandNames<C extends Commands> = { [K in keyof C]: C[K] extends OptionalCommand<any, any> ? K : never }[keyof C];
type AttributeGetters<A extends Attributes> = { [P in keyof A as `get${Capitalize<string & P>}`]?: (args: { attributes: AttributeServers<A>, endpoint?: Endpoint, session?: Session<MatterDevice> }) => AttributeJsType<A[P]> };
export type CommandHandler<C extends Command<any, any>, A extends AttributeServers<any>> = C extends Command<infer RequestT, infer ResponseT> ? (args: { request: RequestT, attributes: A, session: Session<MatterDevice>, message: Message, endpoint: Endpoint }) => Promise<ResponseT> | ResponseT : never;
type CommandHandlers<T extends Commands, A extends AttributeServers<any>> = Merge<{ [P in MandatoryCommandNames<T>]: CommandHandler<T[P], A> }, { [P in OptionalCommandNames<T>]?: CommandHandler<T[P], A> }>;

/** Handlers to process cluster commands */
export type ClusterServerHandlers<C extends Cluster<any, any, any, any, any>> = Merge<CommandHandlers<C["commands"], AttributeServers<C["attributes"]>>, AttributeGetters<C["attributes"]>>;

export type CommandServers<C extends Commands> = Merge<{ [P in MandatoryCommandNames<C>]: CommandServer<RequestType<C[P]>, ResponseType<C[P]>> }, { [P in OptionalCommandNames<C>]?: CommandServer<RequestType<C[P]>, ResponseType<C[P]>> }>;

type OptionalAttributeConf<T extends Attributes> = { [K in OptionalAttributeNames<T>]?: true };
type MakeAttributeMandatory<A extends Attribute<any>> = A extends OptionalWritableAttribute<infer T> ? WritableAttribute<T> : (A extends OptionalAttribute<infer T> ? Attribute<T> : A);
type MakeAttributesMandatory<T extends Attributes, C extends OptionalAttributeConf<T>> = { [K in keyof T]: K extends keyof C ? MakeAttributeMandatory<T[K]> : T[K] };

const MakeAttributesMandatory = <T extends Attributes, C extends OptionalAttributeConf<T>>(attributes: T, conf: C): MakeAttributesMandatory<T, C> => {
    const result = <Attributes>{ ...attributes };
    for (const key in conf) {
        (result as any)[key] = { ...result[key], optional: false };
    }
    return result as MakeAttributesMandatory<T, C>;
};
type UseOptionalAttributes<C extends Cluster<any, any, any, any, any>, A extends OptionalAttributeConf<C["attributes"]>> = Cluster<C["features"], C["supportedFeatures"], MakeAttributesMandatory<C["attributes"], A>, C["commands"], C["events"]>;/** Forces the presence of the specified optional attributes, so they can be used in the command handlers */
/** Forces the presence of the specified optional attributes, so they can be used in the command handlers */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const UseOptionalAttributes = <C extends Cluster<any, any, any, any, any>, A extends OptionalAttributeConf<C["attributes"]>>(cluster: C, conf: A): UseOptionalAttributes<C, A> => ({ ...cluster, attributes: MakeAttributesMandatory(cluster.attributes, conf) });

type GetterTypeFromSpec<A extends Attribute<any>> = A extends OptionalAttribute<infer T> ? (T | undefined) : AttributeJsType<A>;
type ServerAttributeGetters<A extends Attributes> = { [P in keyof A as `get${Capitalize<string & P>}Attribute`]: () => GetterTypeFromSpec<A[P]> };
type ServerAttributeSetters<A extends Attributes> = { [P in keyof A as `set${Capitalize<string & P>}Attribute`]: (value: AttributeJsType<A[P]>) => void };
type ServerAttributeSubscribers<A extends Attributes> = { [P in keyof A as `subscribe${Capitalize<string & P>}Attribute`]: (listener: (newValue: AttributeJsType<A[P]>, oldValue: AttributeJsType<A[P]>) => void) => void };

/** Strongly typed interface of a cluster server */
export type ClusterServerObj<A extends Attributes, C extends Commands> =
    {
        /** Cluster ID */
        id: number;

        /** Cluster name */
        name: string;

        /**
         * Cluster type
         * @private
         */
        _type: "ClusterServer",

        /** Cluster attributes as named object */
        attributes: AttributeServers<A>;

        /**
         * Cluster commands as array
         * @private
         */
        _commands: CommandServers<C>;

        /**
         * Assign this cluster to a specific endpoint
         * @private
         *
         * @param endpoint Endpoint to assign to
         */
        _assignToEndpoint: (endpoint: Endpoint) => void;

        /**
         * Set Storage context used by this cluster
         * @private
         */
        _setStorage: (storageContext: StorageContext) => void;

        /**
         * Get the Scene Extension Fields for this cluster. Used by the Scenes cluster.
         * @private
         */
        _getSceneExtensionFieldSets: () => TypeFromSchema<typeof TlvAttributeValuePair>[];

        /**
         * Set the Scene Extension Fields for this cluster. Used by the Scenes cluster.
         * @private
         */
        _setSceneExtensionFieldSets: (values: TypeFromSchema<typeof TlvAttributeValuePair>[], transitionTime: number) => void;

        /**
         * Verify if a set of Scene Extension Fields match to the current attribute state for this cluster. Used by the Scenes cluster.
         * @private
         */
        _verifySceneExtensionFieldSets: (values: TypeFromSchema<typeof TlvAttributeValuePair>[]) => boolean
    }
    & ServerAttributeGetters<A>
    & ServerAttributeSetters<A>
    & ServerAttributeSubscribers<A>;

export function isClusterServer<A extends Attributes, C extends Commands>(obj: ClusterClientObj<A, C> | ClusterServerObj<A, C>): obj is ClusterServerObj<A, C> {
    return obj._type === "ClusterServer";
}
