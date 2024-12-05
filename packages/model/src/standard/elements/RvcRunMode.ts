/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const RvcRunMode = Cluster(
    {
        name: "RvcRunMode", id: 0x54, type: "ModeBase", classification: "application", pics: "RVCRUNM",
        details: "This cluster is derived from the Mode Base cluster to define specifics for Robotic Vacuum Cleaner " +
            "devices. It also defines a namespace for the running modes of these devices.",
        xref: { document: "cluster", section: "7.2" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Attribute({ name: "SupportedModes", id: 0x0, xref: { document: "cluster", section: "7.2.6" } }),
    Attribute({ name: "CurrentMode", id: 0x1, xref: { document: "cluster", section: "7.2.6" } }),
    Attribute({ name: "StartUpMode", id: 0x2, conformance: "X", xref: { document: "cluster", section: "7.2.6" } }),
    Attribute({ name: "OnMode", id: 0x3, conformance: "D", xref: { document: "cluster", section: "7.2.6" } }),

    Datatype({
        name: "ModeOptionStruct", type: "ModeOptionStruct",

        details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
            "ModeOptionStruct type. A blank field indicates no change." +
            "\n" +
            "At least one entry in the SupportedModes attribute shall include the Idle mode tag in the ModeTags " +
            "field." +
            "\n" +
            "At least one entry in the SupportedModes attribute (different from the one above) shall include the " +
            "Cleaning mode tag in the ModeTags field." +
            "\n" +
            "The Mapping, Cleaning, and Idle mode tags are mutually exclusive and shall NOT be used together in " +
            "a mode’s ModeTags.",

        xref: { document: "cluster", section: "7.2.5.1" }
    }),

    Datatype(
        { name: "ModeChangeStatus", type: "enum8" },
        Field({ name: "Stuck", id: 0x41, xref: { document: "cluster", section: "7.2.7.1" } }),
        Field({ name: "DustBinMissing", id: 0x42, xref: { document: "cluster", section: "7.2.7.1" } }),
        Field({ name: "DustBinFull", id: 0x43, xref: { document: "cluster", section: "7.2.7.1" } }),
        Field({ name: "WaterTankEmpty", id: 0x44, xref: { document: "cluster", section: "7.2.7.1" } }),
        Field({ name: "WaterTankMissing", id: 0x45, xref: { document: "cluster", section: "7.2.7.1" } }),
        Field({ name: "WaterTankLidOpen", id: 0x46, xref: { document: "cluster", section: "7.2.7.1" } }),
        Field({ name: "MopCleaningPadMissing", id: 0x47, xref: { document: "cluster", section: "7.2.7.1" } }),
        Field({ name: "BatteryLow", id: 0x48, xref: { document: "cluster", section: "7.2.7.1" } })
    ),

    Datatype(
        { name: "ModeTag", type: "enum16" },

        Field({
            name: "Idle", id: 0x4000,
            details: "The device is not performing any of the main operations of the other modes. However, auxiliary " +
                "actions, such as seeking the charger or charging, may occur." +
                "\n" +
                "For example, the device has completed cleaning, successfully or not, on its own or due to a " +
                "command, or has not been asked to clean after a restart.",
            xref: { document: "cluster", section: "7.2.7.2.1" }
        }),

        Field({
            name: "Cleaning", id: 0x4001,
            details: "The device was asked to clean so it may be actively running, or paused due to an error, due to a " +
                "pause command, or for recharging etc. If currently paused and the device can resume it will " +
                "continue to clean.",
            xref: { document: "cluster", section: "7.2.7.2.2" }
        }),

        Field({
            name: "Mapping", id: 0x4002,

            details: "The device was asked to create a map of the space it is located in, so it may be actively running, " +
                "or paused due to an error, due to a pause command, or for recharging etc. If currently paused and " +
                "the device can resume, it will continue to map." +
                "\n" +
                "NOTE" +
                "\n" +
                "this mode is intended to be used so the current space can be mapped by the device if the robot has " +
                "not previously done that, or if the layout has substantially changed, for an optimal subsequent " +
                "cleaning experience.",

            xref: { document: "cluster", section: "7.2.7.2.3" }
        })
    )
);

MatterDefinition.children.push(RvcRunMode);
