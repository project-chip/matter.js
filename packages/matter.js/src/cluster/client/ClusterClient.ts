/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import {
    Attribute, AttributeJsType, Attributes, Command, Commands, OptionalAttribute, OptionalWritableAttribute,
    RequestType, ResponseType, WritableAttribute, MandatoryAttributeNames, OptionalAttributeNames
} from "../Cluster.js";
import { AttributeClient } from "./AttributeClient.js";
import { Merge } from "../../util/Type.js";
import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { ClusterServerObj } from "../server/ClusterServer.js";

export type AttributeClients<A extends Attributes> = Merge<{ [P in MandatoryAttributeNames<A>]: AttributeClient<AttributeJsType<A[P]>> }, { [P in OptionalAttributeNames<A>]: AttributeClient<AttributeJsType<A[P]> | undefined> }>;

export type SignatureFromCommandSpec<C extends Command<any, any>> = (request: RequestType<C>) => Promise<ResponseType<C>>;
type GetterTypeFromSpec<A extends Attribute<any>> = A extends OptionalAttribute<infer T> ? (T | undefined) : AttributeJsType<A>;
type ClientAttributeGetters<A extends Attributes> = { [P in keyof A as `get${Capitalize<string & P>}Attribute`]: () => Promise<GetterTypeFromSpec<A[P]>> };
type WritableAttributeNames<A extends Attributes> = { [K in keyof A]: A[K] extends WritableAttribute<any> ? K : never }[keyof A] | { [K in keyof A]: A[K] extends OptionalWritableAttribute<any> ? K : never }[keyof A];
type ClientAttributeSetters<A extends Attributes> = { [P in WritableAttributeNames<A> as `set${Capitalize<string & P>}Attribute`]: (value: AttributeJsType<A[P]>) => Promise<void> };
type ClientAttributeSubscribers<A extends Attributes> = { [P in keyof A as `subscribe${Capitalize<string & P>}Attribute`]: (listener: (value: AttributeJsType<A[P]>) => void, minIntervalS: number, maxIntervalS: number) => Promise<void> };

/** Strongly typed interface of a cluster client */
export type ClusterClientObj<A extends Attributes, C extends Commands> =
    {
        id: number;
        _type: "ClusterClient";
        name: string;
        endpointId: number;
        attributes: AttributeClients<A>;
        commands: { [P in keyof C]: SignatureFromCommandSpec<C[P]> };
        subscriptAllAttributes: (minIntervalFloorSeconds: number, maxIntervalCeilingSeconds: number) => Promise<void>;
        _clone: (newInteractionClient?: InteractionClient) => ClusterClientObj<A, C>;
    }
    & ClientAttributeGetters<A>
    & ClientAttributeSetters<A>
    & ClientAttributeSubscribers<A>
    & { [P in keyof C]: SignatureFromCommandSpec<C[P]> };

export function isClusterClient(obj: ClusterClientObj<any, any> | ClusterServerObj<any>): obj is ClusterClientObj<any, any> {
    return obj._type === "ClusterClient";
}
