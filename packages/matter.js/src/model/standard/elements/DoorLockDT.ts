/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "DoorLock", id: 0xa, classification: "simple",
    details: "A Door Lock is a device used to secure a door. It is possible to actuate a door lock either by " +
        "means of a manual or a remote method.",
    xref: { document: "device", section: "8.1" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [
                Requirement({ name: "DeviceTypeList", default: [ { deviceType: 10, revision: 2 } ], element: "attribute" })
            ]
        }),

        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "8.1.4" },
            children: [Requirement({ name: "QRY", conformance: "Zigbee", element: "feature" })]
        }),

        Requirement({
            name: "DoorLock", id: 0x101, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "8.1.4" },

            children: [
                Requirement({ name: "RID", conformance: "[Zigbee], P, O", element: "feature" }),
                Requirement({ name: "LOG", conformance: "[Zigbee]", element: "feature" }),
                Requirement({ name: "USR", conformance: "Matter & (PIN | RID | FPG | FACE)", element: "feature" }),
                Requirement({ name: "NOT", conformance: "[Zigbee]", element: "feature" }),
                Requirement({ name: "AlarmMask", conformance: "[Alarms]", element: "attribute" }),
                Requirement({ name: "KeypadOperationEventMask", conformance: "[Zigbee]", element: "attribute" }),
                Requirement({ name: "RemoteOperationEventMask", conformance: "[Zigbee]", element: "attribute" }),
                Requirement({ name: "ManualOperationEventMask", conformance: "[Zigbee]", element: "attribute" }),
                Requirement({ name: "RfidOperationEventMask", conformance: "[Zigbee]", element: "attribute" }),
                Requirement({ name: "KeypadProgrammingEventMask", conformance: "[Zigbee]", element: "attribute" }),
                Requirement({ name: "RemoteProgrammingEventMask", conformance: "[Zigbee]", element: "attribute" }),
                Requirement({ name: "RfidProgrammingEventMask", conformance: "[Zigbee]", element: "attribute" }),
                Requirement({ name: "OperatingEventNotification", conformance: "[Zigbee]", element: "command" }),
                Requirement({ name: "ProgrammingEventNotification", conformance: "[Zigbee]", element: "command" })
            ]
        }),

        Requirement({
            name: "PollControl", id: 0x20, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "8.1.4" }
        }),
        Requirement({
            name: "TimeSync", id: 0x38, conformance: "P, O", element: "clientCluster",
            xref: { document: "device", section: "8.1.4" }
        })
    ]
}));
