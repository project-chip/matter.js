/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { MaybePromise } from "#general";
import { AttributeElement, ClusterModel, CommandElement, EventElement, FieldElement } from "#model";
import {
    Attribute,
    BitFlag,
    Command,
    Event,
    EventPriority,
    MutableCluster,
    OptionalAttribute,
    OptionalCommand,
    OptionalEvent,
    TlvBoolean,
    TlvNoResponse,
    TlvString,
    TlvUInt8,
} from "#types";

export namespace My {
    export enum Feature {
        Awesome = "Awesome",
    }

    export const AwesomeComponent = MutableCluster.Component({
        attributes: {
            awesomeSauce: Attribute(9, TlvUInt8),
        },

        commands: {
            becomeAwesome: Command(10, TlvUInt8, 10, TlvNoResponse),
        },

        events: {
            becameAwesome: Event(11, EventPriority.Info, TlvUInt8),
        },
    });

    export const Base = MutableCluster.Component({
        id: 1,
        revision: 1,
        name: "MyCluster",

        features: {
            awesome: BitFlag(0),
        },

        // Note -- not a good way to test it automatically but including comments inline below so we can manually
        // confirm that types are homomorphic and thus convey comments and code location

        attributes: {
            /** This attribute is required */
            reqAttr: Attribute(1, TlvString, { default: "hello" }),

            /** This attribute is optional */
            optAttr: OptionalAttribute(2, TlvBoolean, { default: true }),
        },

        commands: {
            /** This command is required */
            reqCmd: Command(5, TlvString, 5, TlvString),

            /** This command is optional */
            optCmd: OptionalCommand(6, TlvBoolean, 6, TlvBoolean),
        },

        events: {
            /** This event is required */
            reqEv: Event(7, EventPriority.Critical, TlvString),

            /** This event is optional */
            optEv: OptionalEvent(8, EventPriority.Debug, TlvString),
        },

        extensions: MutableCluster.Extensions({ flags: { awesome: true }, component: AwesomeComponent }),
    });

    export const Cluster = MutableCluster(Base);
}

export const MyCluster = My.Cluster;
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

        AttributeElement({
            name: "FeatureMap",
            id: 0xfffc,
            type: "FeatureMap",
            children: [
                FieldElement({
                    name: "AWE",
                    constraint: "0",
                    description: "Awesome",
                    details: "That which makes me more awesome.",
                }),
            ],
        }),
        AttributeElement({ id: 9, name: "AwesomeSauce", conformance: "AWE", type: "uint8" }),
        CommandElement({ id: 10, name: "BecomeAwesome", conformance: "AWE", type: "uint8" }),
        EventElement({ id: 11, name: "BecameAwesome", conformance: "AWE", type: "uint8", priority: "info" }),
    ],
});

interface MyClusterBaseInterface {
    reqCmd(request: string): MaybePromise<string>;
    optCmd(request: boolean): MaybePromise<boolean>;
}

interface MyClusterAwesomeInterface {
    becomeAwesome(request: number): MaybePromise;
}

interface MyClusterInterface {
    components: [
        {
            flags: {};
            methods: MyClusterBaseInterface;
        },

        {
            flags: { awesome: true };
            methods: MyClusterAwesomeInterface;
        },
    ];
}

export const BaseBehavior = ClusterBehavior.withInterface<MyClusterInterface>().for(MyCluster, MySchema);

export class MyBehavior extends BaseBehavior {}
