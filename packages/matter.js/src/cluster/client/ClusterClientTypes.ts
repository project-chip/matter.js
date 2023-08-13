/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ClusterId } from "../../datatype/ClusterId.js";
import { DecodedEventData } from "../../protocol/interaction/EventDataDecoder.js";
import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { BitSchema, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
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
type ClientAttributeGetters<A extends Attributes> = {
    [P in keyof A as `get${Capitalize<string & P>}Attribute`]: () => Promise<GetterTypeFromSpec<A[P]>>;
};
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
    ) => Promise<void>;
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

export type ClusterClientObjForCluster<C extends Cluster<any, any, any, any, any>> = ClusterClientObj<
    C["features"],
    C["attributes"],
    C["commands"],
    C["events"]
>;

/** Strongly typed interface of a cluster client */
export type ClusterClientObj<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events> = {
    id: ClusterId;
    _type: "ClusterClient";
    revision: number;
    name: string;
    isUnknown: boolean;
    endpointId: number;
    supportedFeatures: TypeFromPartialBitSchema<F>;
    attributes: AttributeClients<F, A>;
    events: EventClients<E>;
    commands: CommandServers<C>;
    subscribeAllAttributes: (
        minIntervalFloorSeconds: number,
        maxIntervalCeilingSeconds: number,
        keepSubscriptions?: boolean,
        isFabricFiltered?: boolean,
    ) => Promise<void>;
    _clone: (newInteractionClient?: InteractionClient) => ClusterClientObj<F, A, C, E>;
} & ClientAttributeGetters<A> &
    ClientGlobalAttributeGetters<F> &
    ClientAttributeSetters<A> &
    ClientAttributeSubscribers<A> &
    CommandServers<C> &
    ClientEventGetters<E> &
    ClientEventSubscribers<E>;

export function isClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
    obj: ClusterClientObj<F, A, C, E> | ClusterServerObj<A, C, E>,
): obj is ClusterClientObj<F, A, C, E> {
    return obj._type === "ClusterClient";
}
