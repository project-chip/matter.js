/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "DoorLock",

    children: [
        // The spec doesn't really define names for these bits, just long-form descriptions that make ugly identifiers.
        // Strangely, CHIP defines the structures but not the actual attributes so they aren't included in our CHIP
        // model.  So set the names manually
        //
        // Aaaand in 1.4 they've disappeared.  Weren't provisional, weren't deprecated
        {
            tag: "attribute",
            id: 0x45,
            name: "KeypadProgrammingEventMask",
            until: "1.3",
            children: [
                { tag: "field", constraint: "0", name: "Unknown" },
                { tag: "field", constraint: "1", name: "PinCodeChanged" },
                { tag: "field", constraint: "2", name: "PinAdded" },
                { tag: "field", constraint: "3", name: "PinCleared" },
                { tag: "field", constraint: "4", name: "PinChanged" },
            ],
        },
        {
            tag: "attribute",
            id: 0x46,
            name: "RemoteProgrammingEventMask",
            until: "1.3",
            children: [
                { tag: "field", constraint: "0", name: "Unknown" },
                { tag: "field", constraint: "2", name: "PinAdded" },
                { tag: "field", constraint: "3", name: "PinCleared" },
                { tag: "field", constraint: "4", name: "PinChanged" },
                { tag: "field", constraint: "5", name: "RfidCodeAdded" },
                { tag: "field", constraint: "6", name: "RfidCodeCleared" },
            ],
        },
        {
            tag: "attribute",
            id: 0x47,
            name: "RfidProgrammingEventMask",
            until: "1.3",
            children: [
                { tag: "field", constraint: "0", name: "Unknown" },
                { tag: "field", constraint: "5", name: "IdAdded" },
                { tag: "field", constraint: "6", name: "IdCleared" },
            ],
        },

        // Aaaand they didn't bother adhering to any convention describing the
        // types for these guys.  Would be easy to detect but since we've
        // already got overrides going on just doing it here
        { tag: "attribute", id: 0x3, name: "DoorState", type: "DoorStateEnum", until: "1.3" },
        { tag: "attribute", id: 0x25, name: "OperatingMode", type: "OperatingModeEnum", until: "1.3" },

        // This name gets mangled by spec importer
        { tag: "attribute", id: 0x33, name: "RequirePinForRemoteOperation" },

        // Because of the special definition of this BitMap (being inverse as usual) we enhance the descriptions
        // and add the other bits as an own entry to set the in a convenient way.
        {
            tag: "datatype",
            name: "OperatingModesBitmap",
            description:
                "For the OperatingModesBitmap, a bit SET indicates that the operating mode IS NOT supported. " +
                "A bit CLEAR indicates that the operating mode IS supported. This is the inverse of most bitmaps in " +
                "this specification, and it is RECOMMENDED that clients carefully take this into consideration.",
            children: [
                {
                    tag: "field",
                    name: "Normal",
                    constraint: "0",
                    description: "Normal operation mode is NOT supported",
                },
                {
                    tag: "field",
                    name: "Vacation",
                    constraint: "1",
                    description: "Vacation operation mode is NOT supported",
                },
                {
                    tag: "field",
                    name: "Privacy",
                    constraint: "2",
                    description: "Privacy operation mode is NOT supported",
                },
                {
                    tag: "field",
                    name: "NoRemoteLockUnlock",
                    constraint: "3",
                    description: "No remote lock and unlock operation mode is NOT supported",
                },
                {
                    tag: "field",
                    name: "Passage",
                    constraint: "4",
                    description: "Passage operation mode is NOT supported",
                },
                {
                    tag: "field",
                    name: "AlwaysSet",
                    constraint: "5 to 16",
                    conformance: "M",
                    description: "This needs always be set because this bitmap is inverse.!",
                },
            ],
        },

        /*
        TODO: This override is needed to correctly assign the field IDs to the fields in the command. But it does not work
        {
            tag: "command",
            id: 0xf,
            name: "GetYearDayScheduleResponse",
            children: [
                {
                    tag: "field",
                    name: "Status",
                    id: 0x2,
                    type: "status",
                    conformance: "M",
                    constraint: "desc",
                    default: 0,

                    details:
                        "Status shall be one of the following values:" +
                        "\n" +
                        "  • SUCCESS if both YearDayIndex and UserIndex are valid and there is a corresponding schedule " +
                        "    entry." +
                        "\n" +
                        "  • INVALID_COMMAND if either YearDayIndex and/or UserIndex values are not within valid range" +
                        "\n" +
                        "  • NOT_FOUND if no corresponding schedule entry found for YearDayIndex." +
                        "\n" +
                        "  • NOT_FOUND if no corresponding user entry found for UserIndex." +
                        "\n" +
                        "If this field is SUCCESS, the optional fields for this command shall be present. For other (error) " +
                        "status values, only the fields up to the status field shall be present.",

                    xref: { document: "cluster", section: "5.2.10.18.3" },
                },

                {
                    tag: "field",
                    name: "LocalStartTime",
                    id: 0x3,
                    type: "epoch-s",
                    conformance: "O",
                    details:
                        "This field shall indicate the starting time for the Year Day schedule in Epoch Time in Seconds with " +
                        "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                        "This shall be null if the schedule is not set for the YearDayIndex and UserIndex provided.",
                    xref: { document: "cluster", section: "5.2.10.18.4" },
                },

                {
                    tag: "field",
                    name: "LocalEndTime",
                    id: 0x4,
                    type: "epoch-s",
                    conformance: "O",
                    details:
                        "This field shall indicate the ending time for the Year Day schedule in Epoch Time in Seconds with " +
                        "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                        "LocalEndTime shall be greater than LocalStartTime. This shall be null if the schedule is not set " +
                        "for the YearDayIndex and UserIndex provided.",
                    xref: { document: "cluster", section: "5.2.10.18.5" },
                },
            ],
        },*/
    ],
});
