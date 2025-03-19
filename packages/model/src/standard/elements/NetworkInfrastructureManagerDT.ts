/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const NetworkInfrastructureManagerDt = DeviceType(
    {
        name: "NetworkInfrastructureManager", id: 0x90, category: "Network Infrastructure",
        classification: "simple",

        details: "A Network Infrastructure Manager provides interfaces that allow for the management of the Wi-Fi, " +
            "Thread, and Ethernet networks underlying a Matter deployment, realizing the Star Network Topology " +
            "described in [MatterCore]." +
            "\n" +
            "Examples of physical devices that implement the Matter Network Infrastructure Manager device type " +
            "include Wi-Fi gateway routers." +
            "\n" +
            "Relevant hardware and software requirements for Network Infrastructure Manager devices are defined " +
            "in Section 15.2.6, “Other Requirements” and within the clusters mandated by this device type." +
            "\n" +
            "A Network Infrastructure Manager device may be managed by a service associated with the device " +
            "vendor, for example, an Internet Service Provider. Sometimes this managing service will have " +
            "policies that require the use of the Managed Device feature of the Access Control Cluster (see " +
            "Section 15.2.5.1, “Access Control MNGD Conformance”). Consequently, Commissioners of this device " +
            "type should be aware of this feature and its use.",

        xref: { document: "device", section: "15.2" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 144, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "WiFiNetworkManagement", id: 0x451, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "15.2.4" }
    }),
    Requirement({
        name: "ThreadBorderRouterManagement", id: 0x452, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "15.2.4" }
    }),
    Requirement({
        name: "ThreadNetworkDirectory", id: 0x453, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "15.2.4" }
    })
);

MatterDefinition.children.push(NetworkInfrastructureManagerDt);
