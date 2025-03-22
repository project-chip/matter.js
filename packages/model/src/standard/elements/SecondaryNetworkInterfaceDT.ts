/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const SecondaryNetworkInterfaceDt = DeviceType(
    {
        name: "SecondaryNetworkInterface", id: 0x19, category: "Utility", classification: "utility",

        details: "A Secondary Network Interface device provides an additional network interface supported by the Node, " +
            "supplementing the primary interface hosted by the Root Node endpoint." +
            "\n" +
            "A Node supporting multiple network interfaces shall include the primary interface on the Root Node " +
            "endpoint, along with secondary interfaces on other endpoints. The priorities of these network " +
            "interfaces are determined by the order of their endpoints, where interfaces with smaller endpoint " +
            "numbers are higher priority.",

        xref: { document: "device", section: "2.8" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 25, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "NetworkCommissioning", id: 0x31, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "2.8.3" }
    }),
    Requirement({
        name: "EthernetNetworkDiagnostics", id: 0x37, conformance: "[Ethernet]", element: "serverCluster",
        xref: { document: "device", section: "2.8.3" }
    }),
    Requirement({
        name: "WiFiNetworkDiagnostics", id: 0x36, conformance: "[Wi, Fi]", element: "serverCluster",
        xref: { document: "device", section: "2.8.3" }
    }),
    Requirement({
        name: "ThreadNetworkDiagnostics", id: 0x35, conformance: "[Thread]", element: "serverCluster",
        xref: { document: "device", section: "2.8.3" }
    })
);

MatterDefinition.children.push(SecondaryNetworkInterfaceDt);
