/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    DeviceTypeElement as DeviceType,
    RequirementElement as Requirement,
    FieldElement as Field
} from "../../elements/index.js";

export const BasicVideoPlayerDt = DeviceType(
    {
        name: "BasicVideoPlayer", id: 0x28, category: "Media", classification: "simple",

        details: "This defines conformance to the Basic Video Player device type." +
            "\n" +
            "A Video Player (either Basic or Casting) represents a device that is able to play media to a " +
            "physical output or to a display screen which is part of the device." +
            "\n" +
            "A Basic Video Player has playback controls (play, pause, etc.) and keypad remote controls (up, down, " +
            "number input), but is not able to launch content and is not a content app platform (the Casting " +
            "Video Player device type is used for these functions)." +
            "\n" +
            "For example, a Basic Video Player can be a traditional TV device a physical media playback device " +
            "such as a DVD Player, or a device that provides input to another device like a TV or computer " +
            "monitor." +
            "\n" +
            "Please see Video Player Architecture for additional Basic Video Player requirements relating to " +
            "Video Player device endpoint composition, commissioning, feature representation in clusters, and UI " +
            "context.",

        xref: { document: "device", section: "10.2" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 40, revision: 2 } ], element: "attribute" })
    ),
    Requirement({
        name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "10.2.4" }
    }),
    Requirement({
        name: "WakeOnLan", id: 0x503, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.2.4" }
    }),
    Requirement({
        name: "Channel", id: 0x504, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.2.4" }
    }),
    Requirement({
        name: "TargetNavigator", id: 0x505, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.2.4" }
    }),
    Requirement({
        name: "MediaPlayback", id: 0x506, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "10.2.4" }
    }),
    Requirement({
        name: "MediaInput", id: 0x507, conformance: "PhysicalInputs", element: "serverCluster",
        xref: { document: "device", section: "10.2.4" }
    }),
    Requirement({
        name: "LowPower", id: 0x508, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.2.4" }
    }),
    Requirement({
        name: "KeypadInput", id: 0x509, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "10.2.4" }
    }),
    Requirement({
        name: "AudioOutput", id: 0x50b, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.2.4" }
    }),
    Requirement({
        name: "ContentControl", id: 0x50f, conformance: "P, O", element: "serverCluster",
        xref: { document: "device", section: "10.2.4" }
    }),
    Requirement({
        name: "Messages", id: 0x97, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.2.4" }
    }),

    Field(
        { name: "conditions", type: "enum8" },
        Field({
            name: "PhysicalInputs", description: "The device has physical inputs for media.",
            xref: { document: "device", section: "10.2.3" }
        })
    )
);

MatterDefinition.children.push(BasicVideoPlayerDt);
