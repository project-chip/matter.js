/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "OnOffSwitchConfiguration", id: 0x7,
    description: "On/off Switch Configuration",
    details: "Attributes and commands for configuring On/Off switching devices.",

    children: [
        {
            tag: "attribute", name: "SwitchType", id: 0x0, type: "enum8", conformance: "M",
            children: [
                { tag: "datatype", name: "Toggle", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Momentary", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "MultiFunction", id: 0x2, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "SwitchActions", id: 0x10, type: "enum8", access: "RW", conformance: "M",
            default: 0,
            children: [
                { tag: "datatype", name: "On", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Off", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Toggle", id: 0x2, conformance: "M" }
            ]
        }
    ]
});
