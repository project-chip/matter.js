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
    CommandElement as Command,
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const RvcOperationalState = Cluster(
    {
        name: "RvcOperationalState", id: 0x61, type: "OperationalState", classification: "application",
        pics: "RVCOPSTATE",
        details: "This cluster provides an interface for monitoring the operational state of a Robotic Vacuum Cleaner.",
        xref: { document: "cluster", section: "7.4" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Command({ name: "Pause", id: 0x0, xref: { document: "cluster", section: "7.4.5" } }),
    Command({ name: "Stop", id: 0x1, conformance: "D", xref: { document: "cluster", section: "7.4.5" } }),
    Command({ name: "Start", id: 0x2, conformance: "D", xref: { document: "cluster", section: "7.4.5" } }),
    Command({ name: "Resume", id: 0x3, xref: { document: "cluster", section: "7.4.5" } }),
    Command({ name: "OperationalCommandResponse", id: 0x4, xref: { document: "cluster", section: "7.4.5" } }),

    Command({
        name: "GoHome", id: 0x80, access: "O", conformance: "P, O", direction: "request",
        response: "OperationalCommandResponse",

        details: "On receipt of this command, the device shall start seeking the charging dock, if possible in the " +
            "current state of the device." +
            "\n" +
            "If this command is received when already in the SeekingCharger state the device shall respond with " +
            "an OperationalCommandResponse command with an ErrorStateID of NoError but the command shall have no " +
            "other effect." +
            "\n" +
            "A device that receives this command in any state which does not allow seeking the charger, such as " +
            "Charging or Docked, shall respond with an OperationalCommandResponse command with an ErrorStateID " +
            "of CommandInvalidInState and shall have no other effect." +
            "\n" +
            "Otherwise, on success:" +
            "\n" +
            "  • The OperationalState attribute shall be set to SeekingCharger." +
            "\n" +
            "  • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of " +
            "    NoError.",

        xref: { document: "cluster", section: "7.4.5.1" }
    }),

    Datatype(
        {
            name: "OperationalStateEnum", type: "enum8",

            details: "The values defined herein are applicable to this derived cluster of Operational State only and are " +
                "additional to the set of values defined in Operational State itself." +
                "\n" +
                "RVC Pause Compatibility defines the compatibility of the states this cluster defines with the Pause " +
                "command." +
                "\n" +
                "### Table 39. RVC Pause Compatibility" +
                "\n" +
                "RVC Resume Compatibility defines the compatibility of the states this cluster defines with the " +
                "Resume command." +
                "\n" +
                "### Table 40. RVC Resume Compatibility" +
                "\n" +
                "While in the Charging or Docked states, the device shall NOT attempt to resume unless it " +
                "transitioned to those states while operating and can resume, such as, for example, if it is " +
                "recharging while in a cleaning cycle. Else, if the operational state is Charging or Docked but " +
                "there’s no operation to resume or the operation can’t be resumed, the device shall respond with an " +
                "OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState but take no " +
                "further action.",

            xref: { document: "cluster", section: "7.4.4.1" }
        },

        Field({
            name: "SeekingCharger", id: 0x40, conformance: "M",
            description: "The device is en route to the charging dock"
        }),
        Field({ name: "Charging", id: 0x41, conformance: "M", description: "The device is charging" }),
        Field({ name: "Docked", id: 0x42, conformance: "M", description: "The device is on the dock, not charging" })
    ),

    Datatype(
        {
            name: "ErrorStateEnum", type: "enum8",
            details: "The values defined herein are applicable to this derived cluster of Operational State only and are " +
                "additional to the set of values defined in Operational State itself.",
            xref: { document: "cluster", section: "7.4.4.2" }
        },

        Field({
            name: "FailedToFindChargingDock", id: 0x40, conformance: "M",
            description: "The device has failed to find or reach the charging dock"
        }),
        Field({
            name: "Stuck", id: 0x41, conformance: "M",
            description: "The device is stuck and requires manual intervention"
        }),
        Field({
            name: "DustBinMissing", id: 0x42, conformance: "M",
            description: "The device has detected that its dust bin is missing"
        }),
        Field({
            name: "DustBinFull", id: 0x43, conformance: "M",
            description: "The device has detected that its dust bin is full"
        }),
        Field({
            name: "WaterTankEmpty", id: 0x44, conformance: "M",
            description: "The device has detected that its water tank is empty"
        }),
        Field({
            name: "WaterTankMissing", id: 0x45, conformance: "M",
            description: "The device has detected that its water tank is missing"
        }),
        Field({
            name: "WaterTankLidOpen", id: 0x46, conformance: "M",
            description: "The device has detected that its water tank lid is open"
        }),
        Field({
            name: "MopCleaningPadMissing", id: 0x47, conformance: "M",
            description: "The device has detected that its cleaning pad is missing"
        })
    )
);

MatterDefinition.children.push(RvcOperationalState);
