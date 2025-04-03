/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const EnergyEvseMode = Cluster(
    {
        name: "EnergyEvseMode", id: 0x9d, type: "ModeBase", classification: "application", pics: "EEVSEM",
        details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
            "enumerated values for EVSE devices.",
        xref: { document: "cluster", section: "9.4" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "9.4.4" } },
        Field({
            name: "DEPONOFF", conformance: "X", constraint: "0", description: "OnOff",
            details: "Dependency with the OnOff cluster"
        })
    ),

    Attribute({
        name: "SupportedModes", id: 0x0,

        details: "At least one entry in the SupportedModes attribute shall include the Manual mode tag in the ModeTags " +
            "field list." +
            "\n" +
            "Modes with entries in the SupportedModes attribute which contain multiple mode tags permitting" +
            "\n" +
            "charging or discharging under different conditions shall permit the charging or discharging to occur " +
            "if any of the conditions are satisfied." +
            "\n" +
            "Modes shall NOT have both the Manual tag and the TimeOfUse or SolarCharging tags defined in the " +
            "SupportedModes attribute.",

        xref: { document: "cluster", section: "9.4.6.1" }
    }),

    Attribute({ name: "CurrentMode", id: 0x1, xref: { document: "cluster", section: "9.4.6" } }),
    Attribute({ name: "StartUpMode", id: 0x2, conformance: "X", xref: { document: "cluster", section: "9.4.6" } }),
    Attribute({ name: "OnMode", id: 0x3, conformance: "X", xref: { document: "cluster", section: "9.4.6" } }),

    Datatype({
        name: "ModeOptionStruct", type: "ModeOptionStruct",
        details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
            "ModeOptionStruct type. A blank field indicates no change.",
        xref: { document: "cluster", section: "9.4.5.1" }
    }),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({ name: "Auto", id: 0x0, xref: { document: "cluster", section: "9.4.7.1" } }),
        Field({ name: "Quick", id: 0x1, xref: { document: "cluster", section: "9.4.7.1" } }),
        Field({ name: "Quiet", id: 0x2, xref: { document: "cluster", section: "9.4.7.1" } }),
        Field({ name: "LowNoise", id: 0x3, xref: { document: "cluster", section: "9.4.7.1" } }),
        Field({ name: "LowEnergy", id: 0x4, xref: { document: "cluster", section: "9.4.7.1" } }),
        Field({ name: "Vacation", id: 0x5, xref: { document: "cluster", section: "9.4.7.1" } }),
        Field({ name: "Min", id: 0x6, xref: { document: "cluster", section: "9.4.7.1" } }),
        Field({ name: "Max", id: 0x7, xref: { document: "cluster", section: "9.4.7.1" } }),
        Field({ name: "Night", id: 0x8, xref: { document: "cluster", section: "9.4.7.1" } }),
        Field({ name: "Day", id: 0x9, xref: { document: "cluster", section: "9.4.7.1" } }),

        Field({
            name: "Manual", id: 0x4000,
            details: "While in modes with this tag, and once enabled with the EnableCharging command, the EVSE will permit " +
                "charging based on demand from the EV.",
            xref: { document: "cluster", section: "9.4.7.1.1" }
        }),

        Field({
            name: "TimeOfUse", id: 0x4001,
            details: "While in modes with this tag, and once enabled with the EnableCharging command, the EVSE will " +
                "attempt to automatically start charging based on the user’s charging targets (for example, set based " +
                "on a Time of Use tariff to charge at the cheapest times of the day).",
            xref: { document: "cluster", section: "9.4.7.1.2" }
        }),

        Field({
            name: "SolarCharging", id: 0x4002,
            details: "While in modes with this tag, and once enabled with the EnableCharging, the EVSE will attempt to" +
                "\n" +
                "automatically start charging based on available excess solar PV generation, limiting the charging " +
                "power to avoid importing energy from the grid.",
            xref: { document: "cluster", section: "9.4.7.1.3" }
        }),

        Field({
            name: "V2X", id: 0x4003,

            details: "While in modes with this tag, and once enabled with the EnableDischarging command, the EVSE will " +
                "permit discharging based on the current charge state of the EV, and its control from an associated " +
                "Device Energy Management cluster." +
                "\n" +
                "NOTE" +
                "\n" +
                "being in a mode with this tag set or not does not affect the handling of the EnableDischarging " +
                "command by the Energy EVSE cluster, but once enabled, only modes with this tag enable the " +
                "discharging to actually occur.",

            xref: { document: "cluster", section: "9.4.7.1.4" }
        })
    )
);

MatterDefinition.children.push(EnergyEvseMode);
