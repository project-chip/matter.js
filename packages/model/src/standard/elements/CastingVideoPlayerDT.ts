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

export const CastingVideoPlayerDt = DeviceType(
    {
        name: "CastingVideoPlayer", id: 0x23, category: "Media", classification: "simple",

        details: "This defines conformance to the Casting Video Player device type." +
            "\n" +
            "A Video Player (either Basic or Casting) represents a device that is able to play media to a " +
            "physical output or to a display screen which is part of the device." +
            "\n" +
            "A Casting Video Player has basic controls for playback (play, pause, etc.) and keypad input (up, " +
            "down, number input), and is able to launch content." +
            "\n" +
            "For example, a Casting Video Player can be a smart TV device, a TV Set Top Box, or a content " +
            "streaming device that provides input to another device like a TV or computer monitor." +
            "\n" +
            "Please see Video Player Architecture for additional Casting Video Player requirements relating to " +
            "Video Player device endpoint composition, commissioning, feature representation in clusters, and UI " +
            "context.",

        xref: { document: "device", section: "10.3" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 35, revision: 2 } ], element: "attribute" })
    ),
    Requirement({
        name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),
    Requirement({
        name: "WakeOnLan", id: 0x503, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),
    Requirement({
        name: "Channel", id: 0x504, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),
    Requirement({
        name: "TargetNavigator", id: 0x505, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),
    Requirement({
        name: "MediaPlayback", id: 0x506, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),
    Requirement({
        name: "MediaInput", id: 0x507, conformance: "PhysicalInputs", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),
    Requirement({
        name: "LowPower", id: 0x508, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),
    Requirement({
        name: "KeypadInput", id: 0x509, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),
    Requirement({
        name: "ContentLauncher", id: 0x50a, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),
    Requirement({
        name: "AudioOutput", id: 0x50b, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),

    Requirement(
        {
            name: "ApplicationLauncher", id: 0x50c, conformance: "ContentAppPlatform", element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },
        Requirement({ name: "APPLICATIONPLATFORM", conformance: "M", element: "feature" })
    ),

    Requirement({
        name: "AccountLogin", id: 0x50e, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),
    Requirement({
        name: "ContentControl", id: 0x50f, conformance: "P, O", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),
    Requirement({
        name: "Messages", id: 0x97, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "10.3.4" }
    }),

    Field(
        { name: "conditions", type: "enum8" },
        Field({
            name: "ContentAppPlatform",
            description: "The device includes a Content App Platform. A Content App is usually an application built by a Content Provider. A Casting Video Player with a Content App Platform is able to launch Content Apps and represent these apps as separate endpoints.",
            xref: { document: "device", section: "10.3.3" }
        }),
        Field({
            name: "PhysicalInputs", description: "The device has physical inputs for media.",
            xref: { document: "device", section: "10.3.3" }
        })
    )
);

MatterDefinition.children.push(CastingVideoPlayerDt);
