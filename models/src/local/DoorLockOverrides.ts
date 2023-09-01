/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "DoorLock",

    children: [
        // The spec doesn't really define names for these bits, just long-form
        // descriptions that make ugly identifiers.  Strangely, CHIP defines
        // the structures but not the actual attributes so they aren't included
        // in our CHIP model.  So set the names manually
        {
            tag: "attribute",
            id: 0x45,
            name: "KeypadProgrammingEventMask",
            children: [
                { tag: "datatype", constraint: "0", name: "Unknown" },
                { tag: "datatype", constraint: "1", name: "PinCodeChanged" },
                { tag: "datatype", constraint: "2", name: "PinAdded" },
                { tag: "datatype", constraint: "3", name: "PinCleared" },
                { tag: "datatype", constraint: "4", name: "PinChanged" },
            ],
        },
        {
            tag: "attribute",
            id: 0x46,
            name: "RemoteProgrammingEventMask",
            children: [
                { tag: "datatype", constraint: "0", name: "Unknown" },
                { tag: "datatype", constraint: "2", name: "PinAdded" },
                { tag: "datatype", constraint: "3", name: "PinCleared" },
                { tag: "datatype", constraint: "4", name: "PinChanged" },
                { tag: "datatype", constraint: "5", name: "RfidCodeAdded" },
                { tag: "datatype", constraint: "6", name: "RfidCodeCleared" },
            ],
        },
        {
            tag: "attribute",
            id: 0x47,
            name: "RfidProgrammingEventMask",
            children: [
                { tag: "datatype", constraint: "0", name: "Unknown" },
                { tag: "datatype", constraint: "5", name: "IdAdded" },
                { tag: "datatype", constraint: "6", name: "IdCleared" },
            ],
        },

        // Aaaand they didn't bother adhering to any convention describing the
        // types for these guys.  Would be easy to detect but since we've
        // already got overrides going on just doing it here
        { tag: "attribute", id: 0x3, name: "DoorState", type: "DoorStateEnum" },
        { tag: "attribute", id: 0x25, name: "OperatingMode", type: "OperatingModeEnum" },

        // This name gets mangled by spec importer
        { tag: "attribute", id: 0x33, name: "RequirePinForRemoteOperation" },
    ],
});
