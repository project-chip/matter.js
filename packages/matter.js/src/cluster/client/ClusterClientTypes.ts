/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { AttributeId } from "../../datatype/AttributeId.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { EventId } from "../../datatype/EventId.js";
import { DecodedEventData } from "../../protocol/interaction/EventDataDecoder.js";
import { TlvEventFilter } from "../../protocol/interaction/InteractionProtocol.js";
import { BitSchema, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { Merge } from "../../util/Type.js";
import {
    Attribute,
    AttributeJsType,
    Attributes,
    Cluster,
    Command,
    Commands,
    Events,
    EventType,
    GlobalAttributeNames,
    GlobalAttributes,
    MandatoryAttributeNames,
    MandatoryEventNames,
    OptionalAttribute,
    OptionalAttributeNames,
    OptionalEventNames,
    OptionalWritableAttribute,
    RequestType,
    ResponseType,
    WritableAttribute,
} from "../Cluster.js";
import { ClusterServerObj } from "../server/ClusterServerTypes.js";
import { AttributeClient } from "./AttributeClient.js";
import { EventClient } from "./EventClient.js";

export type AttributeClients<F extends BitSchema, A extends Attributes> = Merge<
    Merge<
        { [P in MandatoryAttributeNames<A>]: AttributeClient<AttributeJsType<A[P]>> },
        { [P in OptionalAttributeNames<A>]: AttributeClient<AttributeJsType<A[P]> | undefined> }
    >,
    { [P in GlobalAttributeNames<F>]: AttributeClient<AttributeJsType<GlobalAttributes<F>[P]>> }
>;

export type EventClients<E extends Events> = Merge<
    { [P in MandatoryEventNames<E>]: EventClient<EventType<E[P]>> },
    { [P in OptionalEventNames<E>]: EventClient<EventType<E[P]> | undefined> }
>;

export type SignatureFromCommandSpec<C extends Command<any, any, any>> = (
    request: RequestType<C>,
) => Promise<ResponseType<C>>;
type GetterTypeFromSpec<A extends Attribute<any, any>> = A extends OptionalAttribute<infer T, any>
    ? T | undefined
    : AttributeJsType<A>;
type ClientAttributeGetters<A extends Attributes> = Omit<
    {
        [P in keyof A as `get${Capitalize<string & P>}Attribute`]: (
            alwaysRequestFromRemote?: boolean,
            isFabricFiltered?: boolean,
        ) => Promise<GetterTypeFromSpec<A[P]>>;
    },
    keyof GlobalAttributes<any>
>;
type ClientGlobalAttributeGetters<F extends BitSchema> = {
    [P in GlobalAttributeNames<F> as `get${Capitalize<string & P>}Attribute`]: () => Promise<
        GetterTypeFromSpec<GlobalAttributes<F>[P]>
    >;
};
type WritableAttributeNames<A extends Attributes> =
    | { [K in keyof A]: A[K] extends WritableAttribute<any, any> ? K : never }[keyof A]
    | { [K in keyof A]: A[K] extends OptionalWritableAttribute<any, any> ? K : never }[keyof A];
type ClientAttributeSetters<A extends Attributes> = {
    [P in WritableAttributeNames<A> as `set${Capitalize<string & P>}Attribute`]: (
        value: AttributeJsType<A[P]>,
    ) => Promise<void>;
};
type ClientAttributeSubscribers<A extends Attributes> = {
    [P in keyof A as `subscribe${Capitalize<string & P>}Attribute`]: (
        listener: (value: AttributeJsType<A[P]>) => void,
        minIntervalS: number,
        maxIntervalS: number,
        knownDataVersion?: number,
        isFabricFiltered?: boolean,
    ) => Promise<void>;
};
type ClientAttributeListeners<A extends Attributes> = {
    [P in keyof A as `add${Capitalize<string & P>}AttributeListener`]: (
        listener: (value: AttributeJsType<A[P]>) => void,
    ) => void;
};

type CommandServers<C extends Commands> = { [P in keyof C]: SignatureFromCommandSpec<C[P]> };

type ClientEventGetters<E extends Events> = {
    [P in keyof E as `get${Capitalize<string & P>}Event`]: (
        minimumEventNumber?: number | bigint,
        isFabricFiltered?: boolean,
    ) => Promise<DecodedEventData<EventType<E[P]>>>;
};
type ClientEventSubscribers<E extends Events> = {
    [P in keyof E as `subscribe${Capitalize<string & P>}Event`]: (
        listener: (value: DecodedEventData<EventType<E[P]>>) => void,
        minIntervalS: number,
        maxIntervalS: number,
        isUrgent?: boolean,
        minimumEventNumber?: number | bigint,
        isFabricFiltered?: boolean,
    ) => Promise<void>;
};
type ClientEventListeners<E extends Events> = {
    [P in keyof E as `add${Capitalize<string & P>}EventListener`]: (
        listener: (value: DecodedEventData<EventType<E[P]>>) => void,
    ) => void;
};

export type ClusterClientObjForCluster<C extends Cluster<any, any, any, any, any>> = ClusterClientObj<
    C["features"],
    C["attributes"],
    C["commands"],
    C["events"]
>;

/** Strongly typed interface of a cluster client */
export type ClusterClientObj<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events> = {
    /**
     * Cluster ID
     * @readonly
     */
    id: ClusterId;

    /**
     * Cluster type
     * @private
     * @readonly
     */
    _type: "ClusterClient";

    /**
     * Cluster revision
     * @readonly
     */
    readonly revision: number;

    /**
     * Cluster name
     * @readonly
     */
    readonly name: string;

    /**
     * Whether the cluster is unknown, means that we do not have types and schema information for it. Most likely no
     * official cluster.
     * @readonly
     */
    readonly isUnknown: boolean;

    /**
     * Endpoint ID the cluster is on.
     * @readonly
     */
    readonly endpointId: number;

    /**
     * Supported Features of the cluster
     * @readonly
     */
    readonly supportedFeatures: TypeFromPartialBitSchema<F>;

    /**
     * Attributes of the cluster as object with named keys. This can be used to discover the attributes of the cluster
     * programmatically.
     * @readonly
     */
    readonly attributes: AttributeClients<F, A>;

    /**
     * Events of the cluster as object with named keys. This can be used to discover the events of the cluster
     * programmatically.
     * @readonly
     */
    readonly events: EventClients<E>;

    /**
     * Commands of the cluster as object with named keys. This can be used to discover the commands of the cluster
     * programmatically.
     * @readonly
     */
    readonly commands: CommandServers<C>;

    /**
     * Subscribe to all attributes of the cluster. This will subscribe to all attributes of the cluster. Add listeners
     * to the relevant attributes you want to get updates for.
     */
    readonly subscribeAllAttributes: (options: {
        minIntervalFloorSeconds: number;
        maxIntervalCeilingSeconds: number;
        keepSubscriptions?: boolean;
        isFabricFiltered?: boolean;
        eventFilters?: TypeFromSchema<typeof TlvEventFilter>[];
        dataVersionFilters?: { endpointId: EndpointNumber; clusterId: ClusterId; dataVersion: number }[];
    }) => Promise<void>;
} & ClientAttributeGetters<A> &
    ClientGlobalAttributeGetters<F> &
    ClientAttributeSetters<A> &
    ClientAttributeSubscribers<A> &
    ClientAttributeListeners<A> &
    CommandServers<C> &
    ClientEventGetters<E> &
    ClientEventSubscribers<E> &
    ClientEventListeners<E>;

export type ClusterClientObjInternal<
    F extends BitSchema,
    A extends Attributes,
    C extends Commands,
    E extends Events,
> = ClusterClientObj<F, A, C, E> & {
    /**
     * Trigger an attribute update. This is mainly used internally and not needed to be called by the user.
     * @private
     */
    readonly _triggerAttributeUpdate: (attributeId: AttributeId, value: any) => void;

    /**
     * Trigger an event update. This is mainly used internally and not needed to be called by the user.
     * @private
     */
    readonly _triggerEventUpdate: (eventId: EventId, events: DecodedEventData<any>[]) => void;
};

export function isClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
    obj: ClusterClientObj<F, A, C, E> | ClusterServerObj<A, E>,
): obj is ClusterClientObj<F, A, C, E> {
    return obj._type === "ClusterClient";
}

export function isClusterClientInternal<
    F extends BitSchema,
    A extends Attributes,
    C extends Commands,
    E extends Events,
>(obj: ClusterClientObj<F, A, C, E> | ClusterServerObj<A, E>): obj is ClusterClientObjInternal<F, A, C, E> {
    return obj._type === "ClusterClient";
}

export function asClusterClientInternal<
    F extends BitSchema,
    A extends Attributes,
    C extends Commands,
    E extends Events,
>(obj: ClusterClientObj<F, A, C, E>): ClusterClientObjInternal<F, A, C, E> {
    if (!isClusterClientInternal(obj)) {
        throw new Error("Object is not a ClusterClientObj instance.");
    }
    return obj;
}
