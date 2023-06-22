/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import {
    Attribute, AttributeJsType, Attributes, Command, Commands, OptionalAttribute, OptionalWritableAttribute,
    RequestType, ResponseType, WritableAttribute, MandatoryAttributeNames, OptionalAttributeNames,
    EventType, Events, MandatoryEventNames, OptionalEventNames, Cluster
} from "../Cluster.js";
import { AttributeClient } from "./AttributeClient.js";
import { Merge } from "../../util/Type.js";
import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { ClusterServerObj } from "../server/ClusterServer.js";
import { EventClient } from "./EventClient.js";

export type AttributeClients<A extends Attributes> = Merge<{ [P in MandatoryAttributeNames<A>]: AttributeClient<AttributeJsType<A[P]>> }, { [P in OptionalAttributeNames<A>]: AttributeClient<AttributeJsType<A[P]> | undefined> }>;

export type EventClients<E extends Events> = Merge<{ [P in MandatoryEventNames<E>]: EventClient<EventType<E[P]>> }, { [P in OptionalEventNames<E>]: EventClient<EventType<E[P]> | undefined> }>;

export type SignatureFromCommandSpec<C extends Command<any, any, any>> = (request: RequestType<C>) => Promise<ResponseType<C>>;
type GetterTypeFromSpec<A extends Attribute<any, any>> = A extends OptionalAttribute<infer T, any> ? (T | undefined) : AttributeJsType<A>;
type ClientAttributeGetters<A extends Attributes> = { [P in keyof A as `get${Capitalize<string & P>}Attribute`]: () => Promise<GetterTypeFromSpec<A[P]>> };
type WritableAttributeNames<A extends Attributes> = { [K in keyof A]: A[K] extends WritableAttribute<any, any> ? K : never }[keyof A] | { [K in keyof A]: A[K] extends OptionalWritableAttribute<any, any> ? K : never }[keyof A];
type ClientAttributeSetters<A extends Attributes> = { [P in WritableAttributeNames<A> as `set${Capitalize<string & P>}Attribute`]: (value: AttributeJsType<A[P]>) => Promise<void> };
type ClientAttributeSubscribers<A extends Attributes> = { [P in keyof A as `subscribe${Capitalize<string & P>}Attribute`]: (listener: (value: AttributeJsType<A[P]>) => void, minIntervalS: number, maxIntervalS: number) => Promise<void> };

type CommandServers<C extends Commands> = { [P in keyof C]: SignatureFromCommandSpec<C[P]> };

type ClientEventGetters<E extends Events> = { [P in keyof E as `get${Capitalize<string & P>}Event`]: () => Promise<EventType<E[P]>> };
type ClientEventSubscribers<E extends Events> = { [P in keyof E as `subscribe${Capitalize<string & P>}Event`]: (listener: (value: EventType<E[P]>) => void, minIntervalS: number, maxIntervalS: number) => Promise<void> };

export type ClusterClientObjForCluster<C extends Cluster<any, any, any, any, any>> = ClusterClientObj<C["attributes"], C["commands"], C["events"]>;

/** Strongly typed interface of a cluster client */
export type ClusterClientObj<A extends Attributes, C extends Commands, E extends Events> =
    {
        id: number;
        _type: "ClusterClient";
        name: string;
        endpointId: number;
        attributes: AttributeClients<A>;
        events: EventClients<E>;
        commands: CommandServers<C>;
        subscriptAllAttributes: (minIntervalFloorSeconds: number, maxIntervalCeilingSeconds: number) => Promise<void>;
        _clone: (newInteractionClient?: InteractionClient) => ClusterClientObj<A, C, E>;
    }
    & ClientAttributeGetters<A>
    & ClientAttributeSetters<A>
    & ClientAttributeSubscribers<A>
    & CommandServers<C>
    & ClientEventGetters<E>
    & ClientEventSubscribers<E>;

export function isClusterClient<A extends Attributes, C extends Commands, E extends Events>(obj: ClusterClientObj<A, C, E> | ClusterServerObj<A, C, E>): obj is ClusterClientObj<A, C, E> {
    return obj._type === "ClusterClient";
}
