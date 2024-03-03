/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "OnOffSwitchConfiguration", id: 0x7, description: "On/off Switch Configuration",
    details: "Attributes and commands for configuring On/Off switching devices.",

    children: [
        Attribute({
            name: "SwitchType", id: 0x0, type: "enum8", conformance: "M",
            children: [
                Field({ name: "Toggle", id: 0x0, conformance: "M" }),
                Field({ name: "Momentary", id: 0x1, conformance: "M" }),
                Field({ name: "MultiFunction", id: 0x2, conformance: "M" })
            ]
        }),

        Attribute({
            name: "SwitchActions", id: 0x10, type: "enum8", access: "RW", conformance: "M", default: 0,
            children: [
                Field({ name: "On", id: 0x0, conformance: "M" }),
                Field({ name: "Off", id: 0x1, conformance: "M" }),
                Field({ name: "Toggle", id: 0x2, conformance: "M" })
            ]
        })
    ]
}));
