/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const SpeakerDt = DeviceType(
    {
        name: "Speaker", id: 0x22, category: "Media", classification: "simple",

        details: "This defines conformance to the Speaker device type. This feature controls the speaker volume of the " +
            "device." +
            "\n" +
            "To control unmute/mute, the On/Off cluster shall be used. A value of TRUE for the OnOff attribute " +
            "shall represent the volume on (not muted) state, while a value of FALSE shall represent the volume " +
            "off (muted) state. For volume level control, the Level cluster shall be used." +
            "\n" +
            "A dedicated endpoint is needed because the On/Off cluster can also be used for other purposes, such " +
            "as for power control." +
            "\n" +
            "The decision to use Level and On/Off clusters for volume (rather than defining a new audio control " +
            "cluster) was made in order to treat volume in a fashion consistent with lighting which also uses " +
            "these clusters and has matching functional requirements.",

        xref: { document: "device", section: "10.4" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 34, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "10.4.4" }
    }),
    Requirement({
        name: "LevelControl", id: 0x8, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "10.4.4" }
    })
);

MatterDefinition.children.push(SpeakerDt);
