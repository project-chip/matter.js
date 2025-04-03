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

export const BridgedNodeDt = DeviceType(
    {
        name: "BridgedNode", id: 0x13, category: "Utility", classification: "utility",
        details: "This defines conformance for a Bridged Node root endpoint. This endpoint is akin to a \"read me " +
            "first\" endpoint that describes itself and any other endpoints that make up the Bridged Node. A " +
            "Bridged Node endpoint represents a device on a foreign network, but is not the root endpoint of the " +
            "bridge itself.",
        xref: { document: "device", section: "2.5" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 19, revision: 3 } ], element: "attribute" })
    ),
    Requirement({
        name: "BridgedDeviceBasicInformation", id: 0x39, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "2.5.5" }
    }),
    Requirement({
        name: "PowerSourceConfiguration", id: 0x2e, conformance: "BridgedPowerSourceInfo, D",
        element: "serverCluster",
        xref: { document: "device", section: "2.5.5" }
    }),
    Requirement({
        name: "PowerSource", id: 0x2f, conformance: "BridgedPowerSourceInfo", element: "serverCluster",
        xref: { document: "device", section: "2.5.5" }
    }),
    Requirement({
        name: "EcosystemInformation", id: 0x750, conformance: "FabricSynchronizedNode, O",
        element: "serverCluster",
        xref: { document: "device", section: "2.5.5" }
    }),
    Requirement({
        name: "AdministratorCommissioning", id: 0x3c, conformance: "FabricSynchronizedNode",
        element: "serverCluster",
        xref: { document: "device", section: "2.5.5" }
    }),

    Field(
        { name: "conditions", type: "enum8" },
        Field({
            name: "FabricSynchronizedNode", description: "See description below.",
            xref: { document: "device", section: "2.5.3" }
        })
    )
);

MatterDefinition.children.push(BridgedNodeDt);
