/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    DeviceTypeElement as DeviceType,
    FieldElement as Field,
    RequirementElement as Requirement
} from "../../elements/index.js";

export const BaseDt = DeviceType(
    { name: "Base", classification: "base", xref: { document: "device", section: "1.1" } },

    Field(
        { name: "conditions", type: "enum8" },
        Field({
            name: "Zha", description: "Zigbee Home Automation standard",
            xref: { document: "device", section: "1.1.3.1" }
        }),
        Field({ name: "Zse", description: "Zigbee Smart Energy standard", xref: { document: "device", section: "1.1.3.1" } }),
        Field({ name: "Gp", description: "Zigbee Green Power standard", xref: { document: "device", section: "1.1.3.1" } }),
        Field({ name: "Zigbee", description: "Zigbee standard", xref: { document: "device", section: "1.1.3.1" } }),
        Field({ name: "SuZi", description: "Zigbee PRO Sub-GHz standard", xref: { document: "device", section: "1.1.3.1" } }),
        Field({ name: "Matter", description: "Matter standard", xref: { document: "device", section: "1.1.3.1" } }),
        Field({
            name: "LanguageLocale",
            description: "The node supports localization for conveying text to the user",
            xref: { document: "device", section: "1.1.3.3" }
        }),
        Field({
            name: "TimeLocale", description: "The node supports localization for conveying time to the user",
            xref: { document: "device", section: "1.1.3.3" }
        }),
        Field({
            name: "UnitLocale",
            description: "The node supports localization for conveying units of measure to the user",
            xref: { document: "device", section: "1.1.3.3" }
        }),
        Field({
            name: "Sit", description: "The node is a short idle time intermittently connected device",
            xref: { document: "device", section: "1.1.4" }
        }),
        Field({
            name: "Lit", description: "The node is a long idle time intermittently connected device",
            xref: { document: "device", section: "1.1.4" }
        }),
        Field({
            name: "Active", description: "The node is always able to communicate",
            xref: { document: "device", section: "1.1.4" }
        }),
        Field({ name: "Node", xref: { document: "device", section: "1.1.5" } }),
        Field({ name: "App", xref: { document: "device", section: "1.1.5" } }),
        Field({ name: "Simple", xref: { document: "device", section: "1.1.5" } }),
        Field({ name: "Dynamic", xref: { document: "device", section: "1.1.5" } }),
        Field({ name: "Composed", xref: { document: "device", section: "1.1.5" } }),
        Field({ name: "Client", xref: { document: "device", section: "1.1.6" } }),
        Field({ name: "Server", xref: { document: "device", section: "1.1.6" } }),
        Field({ name: "Duplicate", xref: { document: "device", section: "1.1.6" } }),
        Field({ name: "BridgedPowerSourceInfo", xref: { document: "device", section: "1.1.6" } })
    ),

    Requirement(
        {
            name: "Descriptor", id: 0x1d, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "1.1.7" }
        },
        Requirement({ name: "TAGLIST", conformance: "Duplicate", element: "feature" })
    ),

    Requirement({
        name: "Binding", id: 0x1e, conformance: "Simple & Client", element: "serverCluster",
        xref: { document: "device", section: "1.1.7" }
    }),
    Requirement({
        name: "FixedLabel", id: 0x40, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "1.1.7" }
    }),
    Requirement({
        name: "UserLabel", id: 0x41, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "1.1.7" }
    })
);

MatterDefinition.children.push(BaseDt);
