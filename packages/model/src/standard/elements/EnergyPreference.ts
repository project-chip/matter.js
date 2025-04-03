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

export const EnergyPreference = Cluster(
    {
        name: "EnergyPreference", id: 0x9b, classification: "application", pics: "EPREF",
        details: "This cluster provides an interface to specify preferences for how devices should consume energy." +
            "\n" +
            "NOTE Support for Energy Preference cluster is provisional.",
        xref: { document: "cluster", section: "9.7" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "9.7.4" } },

        Field({
            name: "BALA", conformance: "O.a+", constraint: "0", description: "EnergyBalance",
            details: "This feature allows a user to select from a list of energy balances with associated descriptions of " +
                "which strategies a device will use to target the specified balance.",
            xref: { document: "cluster", section: "9.7.4.1" }
        }),

        Field({
            name: "LPMS", conformance: "O.a+", constraint: "1", description: "LowPowerModeSensitivity",
            details: "This feature allows the user to select a condition or set of conditions which will cause the device " +
                "to switch to a mode using less power. For example, a device might provide a scale of durations that " +
                "must elapse without user interaction before it goes to sleep.",
            xref: { document: "cluster", section: "9.7.4.2" }
        })
    ),

    Attribute(
        {
            name: "EnergyBalances", id: 0x0, type: "list", access: "R V", conformance: "BALA",
            constraint: "2 to 10", quality: "F",

            details: "Indicates a list of BalanceStructs, each representing a step along a linear scale of relative " +
                "priorities. A Step field with a value of zero shall indicate that the device SHOULD entirely favor " +
                "the priority specified by the first element in EnergyPriorities; whereas a Step field with a value " +
                "of 100 shall indicate that the device SHOULD entirely favor the priority specified by the second " +
                "element in EnergyPriorities. The midpoint value of 50 shall indicate an even split between the two " +
                "priorities." +
                "\n" +
                "This shall contain at least two BalanceStructs." +
                "\n" +
                "Each BalanceStruct shall have a Step field larger than the Step field on the previous BalanceStruct " +
                "in the list." +
                "\n" +
                "The first BalanceStruct shall have a Step value of zero, and the last BalanceStruct shall have a " +
                "Step value of 100.",

            xref: { document: "cluster", section: "9.7.6.1" }
        },

        Field({ name: "entry", type: "BalanceStruct" })
    ),

    Attribute({
        name: "CurrentEnergyBalance", id: 0x1, type: "uint8", access: "RW VO", conformance: "BALA",
        quality: "N",

        details: "Indicates the current preference of the user for balancing different priorities during device use. " +
            "The value of this attribute is the index, 0-based, into the EnergyBalances attribute for the " +
            "currently selected balance." +
            "\n" +
            "If an attempt is made to set this attribute to an index outside the maximum index for " +
            "EnergyBalances, a response with the status code CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If the value of EnergyBalances changes after an update, the device shall migrate the value of the " +
            "CurrentEnergyBalance attribute to the index which the manufacturer specifies most closely matches " +
            "the previous value, while preserving extreme preferences as follows:" +
            "\n" +
            "  1. If the previous value of CurrentEnergyBalance was zero, indicating a total preference for the " +
            "     priority specified by the first element in EnergyPriorities, the new value of " +
            "     CurrentEnergyBalance shall also be zero." +
            "\n" +
            "  2. If the previous value of CurrentEnergyBalance was the index of the last BalanceStruct in the " +
            "     previous value of EnergyBalances, indicating a total preference for the priority specified by " +
            "     the last element in EnergyPriorities, the new value of CurrentEnergyBalance shall be the index " +
            "     of the last element in the updated value of EnergyBalances.",

        xref: { document: "cluster", section: "9.7.6.2" }
    }),

    Attribute(
        {
            name: "EnergyPriorities", id: 0x2, type: "list", access: "R V", conformance: "BALA",
            constraint: "2", quality: "F",

            details: "Indicates two extremes for interpreting the values in the EnergyBalances attribute. These two " +
                "priorities shall be in opposition to each other; e.g. Comfort vs. Efficiency or Speed vs. " +
                "WaterConsumption." +
                "\n" +
                "If the value of EnergyPriorities changes after an update to represent a new balance between " +
                "priorities, the value of the CurrentEnergyBalance attribute shall be set to its default.",

            xref: { document: "cluster", section: "9.7.6.3" }
        },

        Field({ name: "entry", type: "EnergyPriorityEnum" })
    ),

    Attribute(
        {
            name: "LowPowerModeSensitivities", id: 0x3, type: "list", access: "R V", conformance: "LPMS",
            constraint: "2 to 10", quality: "F",
            details: "Indicates a list of BalanceStructs, each representing a condition or set of conditions for the " +
                "device to enter a low power mode. This shall contain at least two BalanceStructs." +
                "\n" +
                "Each BalanceStruct shall have a Step field larger than the Step field on the previous BalanceStruct " +
                "in the list.",
            xref: { document: "cluster", section: "9.7.6.4" }
        },

        Field({ name: "entry", type: "BalanceStruct" })
    ),

    Attribute({
        name: "CurrentLowPowerModeSensitivity", id: 0x4, type: "uint8", access: "RW VO",
        conformance: "LPMS", quality: "N",

        details: "Indicates the current preference of the user for determining when the device should enter a low " +
            "power mode. The value of this attribute is the index, 0-based, into the LowPowerModeSensitivities " +
            "attribute for the currently selected preference." +
            "\n" +
            "If an attempt is made to set this attribute to an index outside the maximum index for " +
            "LowPowerModeSensitivities, a response with the status code CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If the value of LowPowerModeSensitivities changes after an update, the device shall migrate the " +
            "value of the LowPowerModeSensitivity attribute to the index which the manufacturer specifies most " +
            "closely matches the previous value.",

        xref: { document: "cluster", section: "9.7.6.5" }
    }),

    Datatype(
        { name: "EnergyPriorityEnum", type: "enum8", xref: { document: "cluster", section: "9.7.5.1" } },
        Field({
            name: "Comfort", id: 0x0, conformance: "M", description: "User comfort",
            details: "This value shall emphasize user comfort; e.g. local temperature for a thermostat.",
            xref: { document: "cluster", section: "9.7.5.1.1" }
        }),

        Field({
            name: "Speed", id: 0x1, conformance: "M", description: "Speed of operation",
            details: "This value shall emphasize how quickly a device accomplishes its targeted use; e.g. how quickly a " +
                "robot vacuum completes a cleaning cycle.",
            xref: { document: "cluster", section: "9.7.5.1.2" }
        }),

        Field({
            name: "Efficiency", id: 0x2, conformance: "M",
            description: "Amount of Energy consumed by the device",
            details: "This value shall emphasize how much energy a device uses; e.g. electricity usage for a Pump.",
            xref: { document: "cluster", section: "9.7.5.1.3" }
        }),

        Field({ name: "WaterConsumption", id: 0x3, conformance: "M", description: "Amount of water consumed by the device" })
    ),

    Datatype(
        {
            name: "BalanceStruct", type: "struct",
            details: "This represents a step along a scale of preferences.",
            xref: { document: "cluster", section: "9.7.5.2" }
        },
        Field({
            name: "Step", id: 0x0, type: "percent", conformance: "M", quality: "F",
            details: "This field shall indicate the relative value of this step.",
            xref: { document: "cluster", section: "9.7.5.2.1" }
        }),

        Field({
            name: "Label", id: 0x1, type: "string", conformance: "O", constraint: "max 64", quality: "F",
            details: "This field shall indicate an optional string explaining which actions a device might take at the " +
                "given step value.",
            xref: { document: "cluster", section: "9.7.5.2.2" }
        })
    )
);

MatterDefinition.children.push(EnergyPreference);
