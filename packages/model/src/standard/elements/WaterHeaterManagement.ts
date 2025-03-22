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
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const WaterHeaterManagement = Cluster(
    {
        name: "WaterHeaterManagement", id: 0x94, classification: "application", pics: "EWATERHTR",

        details: "This cluster is used to allow clients to control the operation of a hot water heating appliance so " +
            "that it can be used with energy management." +
            "\n" +
            "Heating of hot water is one of the main energy uses in homes, and when coupled with the Energy " +
            "Management cluster, it can help consumers save cost (e.g. using power at cheaper times or from local " +
            "solar PV generation).",

        xref: { document: "cluster", section: "9.5" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "9.5.4" } },
        Field({
            name: "EM", conformance: "O", constraint: "0", description: "EnergyManagement",
            details: "Allows energy management control of the tank"
        }),
        Field({
            name: "TP", conformance: "O", constraint: "1", description: "TankPercent",
            details: "Supports monitoring the percentage of hot water in the tank"
        })
    ),

    Attribute({
        name: "HeaterTypes", id: 0x0, type: "WaterHeaterHeatSourceBitmap", access: "R V", conformance: "M",
        default: 0, quality: "F",
        details: "Indicates the heat sources that the water heater can call on for heating. If a bit is set then the " +
            "water heater supports the corresponding heat source.",
        xref: { document: "cluster", section: "9.5.7.1" }
    }),

    Attribute({
        name: "HeatDemand", id: 0x1, type: "WaterHeaterHeatSourceBitmap", access: "R V", conformance: "M",
        default: 0,
        details: "Indicates if the water heater is heating water. If a bit is set then the corresponding heat source " +
            "is active.",
        xref: { document: "cluster", section: "9.5.7.2" }
    }),

    Attribute({
        name: "TankVolume", id: 0x2, type: "uint16", access: "R V", conformance: "EM", default: 0,
        details: "Indicates the volume of water that the hot water tank can hold (in units of Litres). This allows an " +
            "energy management system to estimate the required heating energy needed to reach the target " +
            "temperature.",
        xref: { document: "cluster", section: "9.5.7.3" }
    }),

    Attribute(
        {
            name: "EstimatedHeatRequired", id: 0x3, type: "energy-mWh", access: "R V", conformance: "EM",
            constraint: "min 0", default: 0,

            details: "Indicates the estimated heat energy needed to raise the water temperature to the target setpoint. " +
                "This can be computed by taking the specific heat capacity of water (4182 J/kg °C) and by knowing the " +
                "current temperature of the water, the tank volume and target temperature." +
                "\n" +
                "For example, if the target temperature was 60°C, the current temperature was 20°C and the tank " +
                "volume was 100L:" +
                "\n" +
                "Mass of water = 1kg per Litre" +
                "\n" +
                "Total Mass = 100 x 1kg = 100kg" +
                "\n" +
                "Δ Temperature = (target temperature - current temperature)" +
                "\n" +
                "= (60°C - 20°C) = 40°C" +
                "\n" +
                "Energy required to" +
                "\n" +
                "heat the water to 60°C = 4182 x 40 x 100 = 16,728,000 J" +
                "\n" +
                "Converting Joules in to Wh of heat (divide by 3600):" +
                "\n" +
                "If the TankPercent feature is supported, then this estimate shall also take into account the " +
                "percentage of the water in the tank which is already hot." +
                "\n" +
                "NOTE" +
                "\n" +
                "The electrical energy required to heat the water depends on the heating system used to heat the " +
                "water. For example, a direct electric immersion heating element can be close to 100% efficient, so " +
                "the electrical energy needed to heat the hot water is nearly the same as the " +
                "EstimatedHeatEnergyRequired. However some forms of heating, such as an air-source heat pump which " +
                "extracts heat from ambient air, requires much less electrical energy to heat hot water. Heat pumps " +
                "can be produce 3kWh of heat output for 1kWh of electrical energy input. The conversion between heat " +
                "energy and electrical energy is outside the scope of this cluster.",

            xref: { document: "cluster", section: "9.5.7.4" }
        }
    ),

    Attribute(
        {
            name: "TankPercentage", id: 0x4, type: "percent", access: "R V", conformance: "TP", default: 0,

            details: "Indicates an approximate level of hot water stored in the tank, which might help consumers " +
                "understand the amount of hot water remaining in the tank. The accuracy of this attribute is " +
                "manufacturer specific." +
                "\n" +
                "In most hot water tanks, there is a stratification effect where the hot water layer rests above a " +
                "cooler layer of water below. For this reason cold water is fed in at the bottom of the tank and the " +
                "hot water is drawn from the top." +
                "\n" +
                "Some water tanks might use multiple temperature probes to estimate the level of the hot water layer. " +
                "A water heater with multiple temperature probes is likely to implement an algorithm to estimate the " +
                "hot water tank percentage by taking into account the temperature values of each probe to determine " +
                "the height of the hot water." +
                "\n" +
                "However it might be possible with a single temperature probe to estimate how much hot water is left " +
                "using a simpler algorithm:" +
                "\n" +
                "For example, if the target temperature was 60°C, the CurrentTemperature was 40°C from a single " +
                "temperature probe measuring the average water temperature and the temperature of incoming cold water " +
                "(COLD_WATER_TEMP) was assumed to be 20°C:" +
                "\n" +
                "TankPercentage = int(((current temperature - COLD_WATER_TEMP) / (target temperature - " +
                "COLD_WATER_TEMP)) * 100)" +
                "\n" +
                "TankPercentage = min( max(TankPercentage,0), 100)" +
                "\n" +
                "TankPercentage = 50%",

            xref: { document: "cluster", section: "9.5.7.5" }
        }
    ),

    Attribute({
        name: "BoostState", id: 0x5, type: "BoostStateEnum", access: "R V", conformance: "M", default: 0,
        details: "Indicates whether the Boost, as triggered by a Boost command, is currently" +
            "\n" +
            "Active or Inactive." +
            "\n" +
            "See Boost and CancelBoost commands for more details.",
        xref: { document: "cluster", section: "9.5.7.6" }
    }),

    Event(
        {
            name: "BoostStarted", id: 0x0, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated whenever a Boost command is accepted." +
                "\n" +
                "The corresponding structure fields within the WaterHeaterBoostInfoStruct are copied from the Boost " +
                "command.",
            xref: { document: "cluster", section: "9.5.9.1" }
        },

        Field({ name: "BoostInfo", id: 0x0, type: "WaterHeaterBoostInfoStruct", conformance: "M" })
    ),

    Event({
        name: "BoostEnded", id: 0x1, access: "V", conformance: "M", priority: "info",
        details: "This event shall be generated whenever the BoostState transitions from Active to Inactive.",
        xref: { document: "cluster", section: "9.5.9.2" }
    }),

    Command(
        {
            name: "Boost", id: 0x0, access: "M", conformance: "M", direction: "request", response: "status",
            details: "Allows a client to request that the water heater is put into a Boost state.",
            xref: { document: "cluster", section: "9.5.8.1" }
        },
        Field({ name: "BoostInfo", id: 0x0, type: "WaterHeaterBoostInfoStruct", conformance: "M" })
    ),

    Command({
        name: "CancelBoost", id: 0x1, access: "M", conformance: "M", direction: "request",
        response: "status",
        details: "Allows a client to cancel an ongoing Boost operation. This command has no payload.",
        xref: { document: "cluster", section: "9.5.8.2" }
    }),

    Datatype(
        { name: "WaterHeaterHeatSourceBitmap", type: "map8", xref: { document: "cluster", section: "9.5.6.1" } },
        Field({ name: "ImmersionElement1", constraint: "0", description: "Immersion Heating Element 1" }),
        Field({ name: "ImmersionElement2", constraint: "1", description: "Immersion Heating Element 2" }),
        Field({ name: "HeatPump", constraint: "2", description: "Heat pump Heating" }),
        Field({ name: "Boiler", constraint: "3", description: "Boiler Heating (e.g. Gas or Oil)" }),
        Field({ name: "Other", constraint: "4", description: "Other Heating" })
    ),

    Datatype(
        { name: "BoostStateEnum", type: "enum8", xref: { document: "cluster", section: "9.5.6.2" } },
        Field({ name: "Inactive", id: 0x0, conformance: "M", description: "Boost is not currently active" }),
        Field({ name: "Active", id: 0x1, conformance: "M", description: "Boost is currently active" })
    ),

    Datatype(
        { name: "WaterHeaterBoostInfoStruct", type: "struct", xref: { document: "cluster", section: "9.5.6.3" } },
        Field({
            name: "Duration", id: 0x0, type: "elapsed-s", conformance: "M", constraint: "min 1",
            details: "This field shall indicate the time period, in seconds, for which the boost state is activated.",
            xref: { document: "cluster", section: "9.5.6.3.1" }
        }),

        Field({
            name: "OneShot", id: 0x1, type: "bool", conformance: "[!TP], [TP].a-", default: false,

            details: "This field shall indicate whether the boost state shall be automatically canceled once the hot water " +
                "has reached either:" +
                "\n" +
                "  • the set point temperature (from the thermostat cluster)" +
                "\n" +
                "  • the TemporarySetpoint temperature (if specified)" +
                "\n" +
                "  • the TargetPercentage (if specified).",

            xref: { document: "cluster", section: "9.5.6.3.2" }
        }),

        Field({
            name: "EmergencyBoost", id: 0x2, type: "bool", conformance: "O", default: false,
            details: "This field shall indicate that the consumer wants the water to be heated quickly. This may cause " +
                "multiple heat sources to be activated (e.g. a heat pump and direct electric immersion heating " +
                "element)." +
                "\n" +
                "The choice of which heat sources are activated is manufacturer specific.",
            xref: { document: "cluster", section: "9.5.6.3.3" }
        }),

        Field({
            name: "TemporarySetpoint", id: 0x3, type: "temperature", conformance: "O", constraint: "desc",

            details: "This field shall indicate the target temperature to which the water will be heated." +
                "\n" +
                "If included, it shall be used instead of the thermostat cluster set point temperature whilst the " +
                "boost state is activated." +
                "\n" +
                "The value of this field shall be within the constraints of the MinHeatSetpointLimit and " +
                "MaxHeatSetpointLimit attributes (inclusive), of the thermostat cluster.",

            xref: { document: "cluster", section: "9.5.6.3.4" }
        }),

        Field({
            name: "TargetPercentage", id: 0x4, type: "percent", conformance: "TargetReheat, [TP]",
            details: "This field shall indicate the target percentage of hot water in the tank that the TankPercentage " +
                "attribute must reach before the heating is switched off.",
            xref: { document: "cluster", section: "9.5.6.3.5" }
        }),

        Field({
            name: "TargetReheat", id: 0x5, type: "percent", conformance: "[TP].a-",
            constraint: "max targetPercentage",

            details: "This field shall indicate the percentage to which the hot water in the tank shall be allowed to fall " +
                "before again beginning to reheat it." +
                "\n" +
                "For example if the TargetPercentage was 80%, and the TargetReheat was 40%, then after initial " +
                "heating to 80% hot water, the tank may have hot water drawn off until only 40% hot water remains. At " +
                "this point the heater will begin to heat back up to 80% of hot water. If this field and the OneShot " +
                "field were both omitted, heating would begin again after any water draw which reduced the " +
                "TankPercentage below 80%." +
                "\n" +
                "This field shall be less than or equal to the TargetPercentage field.",

            xref: { document: "cluster", section: "9.5.6.3.6" }
        })
    )
);

MatterDefinition.children.push(WaterHeaterManagement);
