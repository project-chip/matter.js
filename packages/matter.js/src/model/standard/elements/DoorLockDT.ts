/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "DoorLock", id: 0xa, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 10 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 2 }
                ]
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, element: "serverCluster",
            xref: { document: "device", section: "8.1.4" },
            children: [{ tag: "requirement", name: "Qry", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, element: "serverCluster",
            xref: { document: "device", section: "8.1.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, element: "serverCluster",
            xref: { document: "device", section: "8.1.4" }
        },

        {
            tag: "requirement", name: "DoorLock", id: 0x101, element: "serverCluster",
            xref: { document: "device", section: "8.1.4" },

            children: [
                { tag: "requirement", name: "Rid", element: "feature" },
                { tag: "requirement", name: "Log", element: "feature" },
                { tag: "requirement", name: "Usr", element: "feature" },
                { tag: "requirement", name: "Not", element: "feature" },
                { tag: "requirement", name: "AlarmMask", element: "attribute" },
                { tag: "requirement", name: "KeypadOperationEventMask", element: "attribute" },
                { tag: "requirement", name: "RemoteOperationEventMask", element: "attribute" },
                { tag: "requirement", name: "ManualOperationEventMask", element: "attribute" },
                { tag: "requirement", name: "RfidOperationEventMask", element: "attribute" },
                { tag: "requirement", name: "KeypadProgrammingEventMask", element: "attribute" },
                { tag: "requirement", name: "RemoteProgrammingEventMask", element: "attribute" },
                { tag: "requirement", name: "RfidProgrammingEventMask", element: "attribute" },
                { tag: "requirement", name: "OperatingEventNotification", element: "command" },
                { tag: "requirement", name: "ProgrammingEventNotification", element: "command" }
            ]
        },

        {
            tag: "requirement", name: "Alarms", id: 0x9, element: "serverCluster",
            xref: { document: "device", section: "8.1.4" }
        },
        {
            tag: "requirement", name: "PollControl", id: 0x20, element: "serverCluster",
            xref: { document: "device", section: "8.1.4" }
        },
        {
            tag: "requirement", name: "Time", id: 0xa, element: "clientCluster",
            xref: { document: "device", section: "8.1.4" }
        },
        {
            tag: "requirement", name: "TimeSync", id: 0x38, element: "clientCluster",
            xref: { document: "device", section: "8.1.4" }
        }
    ]
});
