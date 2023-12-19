/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterBehavior } from "../../../src/behavior/cluster/ClusterBehavior.js";
import {
    Attribute,
    Command,
    Event,
    EventPriority,
    OptionalAttribute,
    OptionalCommand,
    OptionalEvent,
} from "../../../src/cluster/Cluster.js";
import { ClusterType } from "../../../src/cluster/ClusterType.js";
import { AttributeElement, ClusterModel, CommandElement, EventElement } from "../../../src/model/index.js";
import { TlvBoolean } from "../../../src/tlv/TlvBoolean.js";
import { TlvString } from "../../../src/tlv/TlvString.js";
import { MaybePromise } from "../../../src/util/Type.js";

export const MyCluster = ClusterType({
    id: 1,
    revision: 1,
    name: "MyCluster",

    attributes: {
        reqAttr: Attribute(1, TlvString, { default: "hello" }),
        optAttr: OptionalAttribute(2, TlvBoolean, { default: true }),
    },

    commands: {
        reqCmd: Command(5, TlvString, 5, TlvString),
        optCmd: OptionalCommand(6, TlvBoolean, 6, TlvBoolean),
    },

    events: {
        reqEv: Event(7, EventPriority.Critical, TlvString),
        optEv: OptionalEvent(8, EventPriority.Debug, TlvString),
    },
});
export type MyCluster = typeof MyCluster;

export const MySchema = new ClusterModel({
    id: 1,
    name: "MyCluster",

    children: [
        AttributeElement({ id: 1, name: "ReqAttr", type: "string", conformance: "M" }),
        AttributeElement({ id: 2, name: "Optattr", type: "bool", conformance: "O" }),
        CommandElement({ id: 5, name: "ReqCmd", response: "ReqResponse", type: "string", conformance: "M" }),
        CommandElement({ id: 5, name: "ReqResponse", direction: "response", type: "string", conformance: "M" }),
        CommandElement({ id: 6, name: "OptCmd", response: "ReqResponse", type: "string", conformance: "O" }),
        CommandElement({ id: 6, name: "OptResponse", direction: "response", type: "string", conformance: "O" }),
        EventElement({ id: 7, name: "ReqEv", priority: "critical", type: "string" }),
        EventElement({ id: 8, name: "OptEv", priority: "debug", type: "string" }),
    ],
});

interface MyClusterBaseInterface {
    reqCmd(request: string): MaybePromise<string>;
    optCmd(request: boolean): MaybePromise<boolean>;
}

interface MyClusterInterface {
    components: [
        {
            flags: {};
            methods: MyClusterBaseInterface;
        },
    ];
}

export const BaseBehavior = ClusterBehavior.withInterface<MyClusterInterface>().for(MyCluster, MySchema);

export class MyBehavior extends BaseBehavior {}
