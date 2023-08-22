/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "../../codec/MessageCodec.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { Endpoint } from "../../device/Endpoint.js";
import { Fabric } from "../../fabric/Fabric.js";
import { MatterDevice } from "../../MatterDevice.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { BitSchema } from "../../schema/BitmapSchema.js";
import { Session } from "../../session/Session.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { Merge } from "../../util/Type.js";
import { ClusterClientObj } from "../client/ClusterClientTypes.js";
import {
    Attribute,
    AttributeJsType,
    Attributes,
    Cluster,
    Command,
    Commands,
    Events,
    EventType,
    FabricScopedAttribute,
    FixedAttribute,
    GlobalAttributes,
    MandatoryAttributeNames,
    MandatoryEventNames,
    OptionalAttribute,
    OptionalAttributeNames,
    OptionalCommand,
    OptionalEventNames,
    OptionalFixedAttribute,
    OptionalWritableAttribute,
    OptionalWritableFabricScopedAttribute,
    RequestType,
    ResponseType,
    WritableAttribute,
    WritableFabricScopedAttribute,
} from "../Cluster.js";
import { Scenes } from "../definitions/ScenesCluster.js";
import { AttributeServer, FabricScopedAttributeServer, FixedAttributeServer } from "./AttributeServer.js";
import { CommandServer } from "./CommandServer.js";
import { EventServer } from "./EventServer.js";

/** Cluster attributes accessible on the cluster server */
type MandatoryAttributeServers<A extends Attributes> = Omit<
    {
        [P in MandatoryAttributeNames<A>]: A[P] extends FabricScopedAttribute<any, any>
            ? FabricScopedAttributeServer<AttributeJsType<A[P]>>
            : A[P] extends WritableFabricScopedAttribute<any, any>
            ? FabricScopedAttributeServer<AttributeJsType<A[P]>>
            : A[P] extends FixedAttribute<any, any>
            ? FixedAttributeServer<AttributeJsType<A[P]>>
            : AttributeServer<AttributeJsType<A[P]>>;
    },
    keyof GlobalAttributes<any>
>;
type OptionalAttributeServers<A extends Attributes> = {
    [P in OptionalAttributeNames<A>]?: A[P] extends OptionalWritableFabricScopedAttribute<any, any>
        ? FabricScopedAttributeServer<AttributeJsType<A[P]>>
        : A[P] extends OptionalFixedAttribute<any, any>
        ? FixedAttributeServer<AttributeJsType<A[P]>>
        : AttributeServer<AttributeJsType<A[P]>>;
};
export type AttributeServers<A extends Attributes> = Merge<MandatoryAttributeServers<A>, OptionalAttributeServers<A>>;

/** Initial values for the cluster attribute */
export type AttributeInitialValues<A extends Attributes> = Merge<
    Omit<{ [P in MandatoryAttributeNames<A>]: AttributeJsType<A[P]> }, keyof GlobalAttributes<any>>,
    { [P in OptionalAttributeNames<A>]?: AttributeJsType<A[P]> }
>;
export type AttributeServerValues<A extends Attributes> = Merge<
    { [P in MandatoryAttributeNames<A>]: AttributeJsType<A[P]> },
    { [P in OptionalAttributeNames<A>]?: AttributeJsType<A[P]> }
>;

type MandatoryCommandNames<C extends Commands> = {
    [K in keyof C]: C[K] extends OptionalCommand<any, any, any> ? never : K;
}[keyof C];
type OptionalCommandNames<C extends Commands> = {
    [K in keyof C]: C[K] extends OptionalCommand<any, any, any> ? K : never;
}[keyof C];
type AttributeGetters<A extends Attributes> = {
    [P in keyof A as `${string & P}AttributeGetter`]?: (args: {
        attributes: AttributeServers<A>;
        endpoint?: Endpoint;
        session?: Session<MatterDevice>;
        isFabricFiltered?: boolean;
    }) => AttributeJsType<A[P]>;
};
type AttributeSetters<A extends Attributes> = {
    [P in keyof A as `${string & P}AttributeSetter`]?: (
        value: AttributeJsType<A[P]>,
        args: { attributes: AttributeServers<A>; endpoint?: Endpoint; session?: Session<MatterDevice> },
    ) => boolean;
};
type AttributeValidators<A extends Attributes> = {
    [P in keyof A as `${string & P}AttributeValidator`]?: (
        value: AttributeJsType<A[P]>,
        args: { attributes: AttributeServers<A>; endpoint?: Endpoint; session?: Session<MatterDevice> },
    ) => void;
};
export type CommandHandler<
    C extends Command<any, any, any>,
    AS extends AttributeServers<any>,
    ES extends EventServers<any>,
> = C extends Command<infer RequestT, infer ResponseT, any>
    ? (args: {
          request: RequestT;
          attributes: AS;
          events: ES;
          session: Session<MatterDevice>;
          message: Message;
          endpoint: Endpoint;
      }) => Promise<ResponseT> | ResponseT
    : never;
type CommandHandlers<T extends Commands, AS extends AttributeServers<any>, ES extends EventServers<any>> = Merge<
    { [P in MandatoryCommandNames<T>]: CommandHandler<T[P], AS, ES> },
    { [P in OptionalCommandNames<T>]?: CommandHandler<T[P], AS, ES> }
>;

/** Handlers to process cluster commands */
type AttributeHandlers<A extends Attributes> = Merge<
    AttributeGetters<A>,
    Merge<AttributeSetters<A>, AttributeValidators<A>>
>;
export type ClusterServerHandlers<C extends Cluster<any, any, any, any, any>> = Merge<
    CommandHandlers<C["commands"], AttributeServers<C["attributes"]>, EventServers<C["events"]>>,
    AttributeHandlers<C["attributes"]>
>;

export type CommandServers<C extends Commands> = Merge<
    { [P in MandatoryCommandNames<C>]: CommandServer<RequestType<C[P]>, ResponseType<C[P]>> },
    { [P in OptionalCommandNames<C>]?: CommandServer<RequestType<C[P]>, ResponseType<C[P]>> }
>;

type OptionalAttributeConf<T extends Attributes> = { [K in OptionalAttributeNames<T>]?: true };
type MakeAttributeMandatory<A extends Attribute<any, any>> = A extends OptionalWritableFabricScopedAttribute<
    infer T,
    any
>
    ? WritableFabricScopedAttribute<T, any>
    : A extends OptionalWritableAttribute<infer T, any>
    ? WritableAttribute<T, any>
    : A extends OptionalAttribute<infer T, any>
    ? Attribute<T, any>
    : A;
type MakeAttributesMandatory<T extends Attributes, C extends OptionalAttributeConf<T>> = {
    [K in keyof T]: K extends keyof C ? MakeAttributeMandatory<T[K]> : T[K];
};

const MakeAttributesMandatory = <T extends Attributes, C extends OptionalAttributeConf<T>>(
    attributes: T,
    conf: C,
): MakeAttributesMandatory<T, C> => {
    const result = <Attributes>{ ...attributes };
    for (const key in conf) {
        (result as any)[key] = { ...result[key], optional: false };
    }
    return result as MakeAttributesMandatory<T, C>;
};
type UseOptionalAttributes<
    C extends Cluster<any, any, any, any, any>,
    A extends OptionalAttributeConf<C["attributes"]>,
> = Cluster<
    C["features"],
    C["supportedFeatures"],
    MakeAttributesMandatory<C["attributes"], A>,
    C["commands"],
    C["events"]
>; /** Forces the presence of the specified optional attributes, so they can be used in the command handlers */
/** Forces the presence of the specified optional attributes, so they can be used in the command handlers */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const UseOptionalAttributes = <
    C extends Cluster<any, any, any, any, any>,
    A extends OptionalAttributeConf<C["attributes"]>,
>(
    cluster: C,
    conf: A,
): UseOptionalAttributes<C, A> => ({ ...cluster, attributes: MakeAttributesMandatory(cluster.attributes, conf) });

export type FabricScopedAttributeNames<A extends Attributes> = {
    [K in keyof A]: A[K] extends FabricScopedAttribute<any, any>
        ? K
        : A[K] extends WritableFabricScopedAttribute<any, any>
        ? K
        : A[K] extends OptionalWritableFabricScopedAttribute<any, any>
        ? K
        : never;
}[keyof A];
export type NonFixedAttributeNames<A extends Attributes> = {
    [K in keyof A]: A[K] extends FixedAttribute<any, any>
        ? never
        : A[K] extends OptionalFixedAttribute<any, any>
        ? never
        : K;
}[keyof A];

type GetterTypeFromSpec<A extends Attribute<any, any>> = A extends OptionalAttribute<infer T, any>
    ? T | undefined
    : AttributeJsType<A>;
type ServerAttributeGetters<A extends Attributes> = {
    [P in MandatoryAttributeNames<A> as `get${Capitalize<string & P>}Attribute`]: () => GetterTypeFromSpec<A[P]>;
} & { [P in OptionalAttributeNames<A> as `get${Capitalize<string & P>}Attribute`]?: () => GetterTypeFromSpec<A[P]> } & {
    [P in FabricScopedAttributeNames<A> as `get${Capitalize<string & P>}Attribute`]: (
        fabric: Fabric,
    ) => GetterTypeFromSpec<A[P]>;
};
type ServerAttributeSetters<A extends Attributes> = {
    [P in NonFixedAttributeNames<A> as `set${Capitalize<string & P>}Attribute`]: (value: AttributeJsType<A[P]>) => void;
} & {
    [P in FabricScopedAttributeNames<A> as `set${Capitalize<string & P>}Attribute`]: (
        value: AttributeJsType<A[P]>,
        fabric: Fabric,
    ) => void;
};
type ServerAttributeSubscribers<A extends Attributes> = {
    [P in NonFixedAttributeNames<A> as `subscribe${Capitalize<string & P>}Attribute`]: (
        listener: (newValue: AttributeJsType<A[P]>, oldValue: AttributeJsType<A[P]>) => void,
    ) => void;
} & {
    [P in FabricScopedAttributeNames<A> as `subscribe${Capitalize<string & P>}Attribute`]: (
        listener: (newValue: AttributeJsType<A[P]>, oldValue: AttributeJsType<A[P]>) => void,
        fabric: Fabric,
    ) => void;
};

export type EventServers<E extends Events> = Merge<
    { [P in MandatoryEventNames<E>]: EventServer<EventType<E[P]>> },
    { [P in OptionalEventNames<E>]?: EventServer<EventType<E[P]>> }
>;
type ServerEventTriggers<E extends Events> = {
    [P in MandatoryEventNames<E> as `trigger${Capitalize<string & P>}Event`]: (event: EventType<E[P]>) => void;
} & { [P in OptionalEventNames<E> as `trigger${Capitalize<string & P>}Event`]?: (event: EventType<E[P]>) => void };
export type SupportedEventsList<E extends Events> = Merge<
    { [P in MandatoryEventNames<E>]: true },
    { [P in OptionalEventNames<E>]?: boolean }
>;

export type ClusterServerObjForCluster<C extends Cluster<any, any, any, any, any>> = ClusterServerObj<
    C["attributes"],
    C["events"]
>;

export type ClusterServerObj<A extends Attributes, E extends Events> = {
    /**
     * Cluster ID
     * @readonly
     */
    id: ClusterId;

    /**
     * Cluster name
     * @readonly
     */
    readonly name: string;

    /**
     * Cluster type
     * @private
     * @readonly
     */
    _type: "ClusterServer";

    /**
     * Cluster data version
     * @readonly
     */
    readonly clusterDataVersion: number;

    /**
     * Cluster attributes as named object that can be used to programmatically work with available attributes
     * @readonly
     */
    readonly attributes: AttributeServers<A>;
} & ServerAttributeGetters<A> &
    ServerAttributeSetters<A> &
    ServerAttributeSubscribers<A> &
    ServerEventTriggers<E>;

/** Strongly typed interface of a cluster server */
export type ClusterServerObjInternal<A extends Attributes, C extends Commands, E extends Events> = ClusterServerObj<
    A,
    E
> & {
    /**
     * Cluster commands as array
     * @private
     * @readonly
     */
    readonly _commands: CommandServers<C>;

    /**
     * Cluster events as named object
     * @private
     * @readonly
     */
    readonly _events: EventServers<E>;

    /**
     * Assign this cluster to a specific endpoint
     * @private
     *
     * @param endpoint Endpoint to assign to
     */
    readonly _assignToEndpoint: (endpoint: Endpoint) => void;

    /**
     * Register an event handler for this cluster
     * @private
     *
     * @param eventHandler
     */
    readonly _registerEventHandler: (eventHandler: EventHandler) => void;

    /**
     * Set Storage context used by this cluster
     * @private
     */
    readonly _setStorage: (storageContext: StorageContext) => void;

    /**
     * Get the Scene Extension Fields for this cluster. Used by the Scenes cluster.
     * @private
     */
    readonly _getSceneExtensionFieldSets: () => TypeFromSchema<typeof Scenes.TlvAttributeValuePair>[];

    /**
     * Set the Scene Extension Fields for this cluster. Used by the Scenes cluster.
     * @private
     */
    readonly _setSceneExtensionFieldSets: (
        values: TypeFromSchema<typeof Scenes.TlvAttributeValuePair>[],
        transitionTime: number,
    ) => void;

    /**
     * Verify if a set of Scene Extension Fields match to the current attribute state for this cluster. Used by the Scenes cluster.
     * @private
     */
    readonly _verifySceneExtensionFieldSets: (values: TypeFromSchema<typeof Scenes.TlvAttributeValuePair>[]) => boolean;
};

export function isClusterServer<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
    obj: ClusterClientObj<F, A, C, E> | ClusterServerObj<A, E>,
): obj is ClusterServerObj<A, E> {
    return obj._type === "ClusterServer";
}

export function isClusterServerInternal<
    F extends BitSchema,
    A extends Attributes,
    C extends Commands,
    E extends Events,
>(obj: ClusterClientObj<F, A, C, E> | ClusterServerObj<A, E>): obj is ClusterServerObjInternal<A, C, E> {
    return obj._type === "ClusterServer";
}

export function asClusterServerInternal<A extends Attributes, E extends Events>(
    obj: ClusterServerObj<A, E>,
): ClusterServerObjInternal<A, Commands, E> {
    if (!isClusterServerInternal(obj)) {
        throw new Error("Object is not a ClusterServerObj instance.");
    }
    return obj;
}
