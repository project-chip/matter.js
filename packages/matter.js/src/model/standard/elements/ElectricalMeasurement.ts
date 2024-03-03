/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    CommandElement as Command,
    FieldElement as Field
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "ElectricalMeasurement", id: 0xb04, description: "Electrical Measurement",
    details: "Attributes related to the electrical properties of a device. This cluster is used by power outlets " +
        "and other devices that need to provide instantaneous data as opposed to metrology data which should " +
        "be retrieved from the metering cluster..",

    children: [
        Attribute({ name: "MeasurementType", id: 0x0, type: "map32", conformance: "O", default: 0 }),
        Attribute({ name: "DcVoltage", id: 0x100, type: "int16", conformance: "O", default: 32768 }),
        Attribute({ name: "DcVoltageMin", id: 0x101, type: "int16", conformance: "O", default: 32768 }),
        Attribute({ name: "DcVoltageMax", id: 0x102, type: "int16", conformance: "O", default: 32768 }),
        Attribute({ name: "DcCurrent", id: 0x103, type: "int16", conformance: "O", default: 32768 }),
        Attribute({ name: "DcCurrentMin", id: 0x104, type: "int16", conformance: "O", default: 32768 }),
        Attribute({ name: "DcCurrentMax", id: 0x105, type: "int16", conformance: "O", default: 32768 }),
        Attribute({ name: "DcPower", id: 0x106, type: "int16", conformance: "O", default: 32768 }),
        Attribute({ name: "DcPowerMin", id: 0x107, type: "int16", conformance: "O", default: 32768 }),
        Attribute({ name: "DcPowerMax", id: 0x108, type: "int16", conformance: "O", default: 32768 }),
        Attribute({
            name: "DcVoltageMultiplier", id: 0x200, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "DcVoltageDivisor", id: 0x201, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "DcCurrentMultiplier", id: 0x202, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "DcCurrentDivisor", id: 0x203, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "DcPowerMultiplier", id: 0x204, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "DcPowerDivisor", id: 0x205, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({ name: "AcFrequency", id: 0x300, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "AcFrequencyMin", id: 0x301, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "AcFrequencyMax", id: 0x302, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "NeutralCurrent", id: 0x303, type: "uint16", conformance: "O", default: 0 }),
        Attribute({ name: "TotalActivePower", id: 0x304, type: "int32", conformance: "O", default: 0 }),
        Attribute({ name: "TotalReactivePower", id: 0x305, type: "int32", conformance: "O", default: 0 }),
        Attribute({
            name: "TotalApparentPower", id: 0x306, type: "uint32", conformance: "O", constraint: "max 16777215",
            default: 1
        }),
        Attribute({
            name: "Measured1StHarmonicCurrent", id: 0x307, type: "int16", conformance: "O", constraint: "max 0",
            default: 32768
        }),
        Attribute({
            name: "Measured3RdHarmonicCurrent", id: 0x308, type: "int16", conformance: "O", constraint: "max 0",
            default: 32768
        }),
        Attribute({
            name: "Measured5ThHarmonicCurrent", id: 0x309, type: "int16", conformance: "O", constraint: "max 0",
            default: 32768
        }),
        Attribute({
            name: "Measured7ThHarmonicCurrent", id: 0x30a, type: "int16", conformance: "O", constraint: "max 0",
            default: 32768
        }),
        Attribute({
            name: "Measured9ThHarmonicCurrent", id: 0x30b, type: "int16", conformance: "O", constraint: "max 0",
            default: 32768
        }),
        Attribute({
            name: "Measured11ThHarmonicCurrent", id: 0x30c, type: "int16", conformance: "O",
            constraint: "max 0", default: 32768
        }),
        Attribute({
            name: "MeasuredPhase1StHarmonicCurrent", id: 0x30d, type: "int16", conformance: "O",
            constraint: "max 0", default: 32768
        }),
        Attribute({
            name: "MeasuredPhase3RdHarmonicCurrent", id: 0x30e, type: "int16", conformance: "O",
            constraint: "max 0", default: 32768
        }),
        Attribute({
            name: "MeasuredPhase5ThHarmonicCurrent", id: 0x30f, type: "int16", conformance: "O",
            constraint: "max 0", default: 32768
        }),
        Attribute({
            name: "MeasuredPhase7ThHarmonicCurrent", id: 0x310, type: "int16", conformance: "O",
            constraint: "max 0", default: 32768
        }),
        Attribute({
            name: "MeasuredPhase9ThHarmonicCurrent", id: 0x311, type: "int16", conformance: "O",
            constraint: "max 0", default: 32768
        }),
        Attribute({
            name: "MeasuredPhase11ThHarmonicCurrent", id: 0x312, type: "int16", conformance: "O",
            constraint: "max 0", default: 32768
        }),
        Attribute({
            name: "AcFrequencyMultiplier", id: 0x400, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "AcFrequencyDivisor", id: 0x401, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "PowerMultiplier", id: 0x402, type: "uint32", conformance: "O", constraint: "max 16777215",
            default: 1
        }),
        Attribute({
            name: "PowerDivisor", id: 0x403, type: "uint32", conformance: "O", constraint: "max 16777215",
            default: 1
        }),
        Attribute({
            name: "HarmonicCurrentMultiplier", id: 0x404, type: "int8", conformance: "O",
            constraint: "min -127", default: 0
        }),
        Attribute({
            name: "PhaseHarmonicCurrentMultiplier", id: 0x405, type: "int8", conformance: "O",
            constraint: "min -127", default: 0
        }),
        Attribute({ name: "InstantaneousVoltage", id: 0x500, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "InstantaneousLineCurrent", id: 0x501, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "InstantaneousActiveCurrent", id: 0x502, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "InstantaneousReactiveCurrent", id: 0x503, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "InstantaneousPower", id: 0x504, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsVoltage", id: 0x505, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsVoltageMin", id: 0x506, type: "uint16", conformance: "O", default: 32768 }),
        Attribute({ name: "RmsVoltageMax", id: 0x507, type: "uint16", conformance: "O", default: 32768 }),
        Attribute({ name: "RmsCurrent", id: 0x508, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsCurrentMin", id: 0x509, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsCurrentMax", id: 0x50a, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "ActivePower", id: 0x50b, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ActivePowerMin", id: 0x50c, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ActivePowerMax", id: 0x50d, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ReactivePower", id: 0x50e, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ApparentPower", id: 0x50f, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({
            name: "AcPowerFactor", id: 0x510, type: "int8", conformance: "O", constraint: "-100 to 100",
            default: 0
        }),
        Attribute({
            name: "AverageRmsVoltageMeasurementPeriod", id: 0x511, type: "uint16", access: "RW",
            conformance: "O", default: 0
        }),
        Attribute({
            name: "AverageRmsUnderVoltageCounter", id: 0x513, type: "uint16", access: "RW", conformance: "O",
            default: 0
        }),
        Attribute({
            name: "RmsExtremeOverVoltagePeriod", id: 0x514, type: "uint16", access: "RW", conformance: "O",
            default: 0
        }),
        Attribute({
            name: "RmsExtremeUnderVoltagePeriod", id: 0x515, type: "uint16", access: "RW", conformance: "O",
            default: 0
        }),
        Attribute({ name: "RmsVoltageSagPeriod", id: 0x516, type: "uint16", access: "RW", conformance: "O", default: 0 }),
        Attribute({
            name: "RmsVoltageSwellPeriod", id: 0x517, type: "uint16", access: "RW", conformance: "O",
            default: 0
        }),
        Attribute({
            name: "AcVoltageMultiplier", id: 0x600, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "AcVoltageDivisor", id: 0x601, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "AcCurrentMultiplier", id: 0x602, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "AcCurrentDivisor", id: 0x603, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "AcPowerMultiplier", id: 0x604, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({
            name: "AcPowerDivisor", id: 0x605, type: "uint16", conformance: "O", constraint: "min 1",
            default: 1
        }),
        Attribute({ name: "DcOverloadAlarmsMask", id: 0x700, type: "map8", access: "RW", conformance: "O", default: 0 }),
        Attribute({ name: "DcVoltageOverload", id: 0x701, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "DcCurrentOverload", id: 0x702, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "AcOverloadAlarmsMask", id: 0x800, type: "map16", access: "RW", conformance: "O", default: 0 }),
        Attribute({ name: "AcVoltageOverload", id: 0x801, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "AcCurrentOverload", id: 0x802, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "AcPowerOverload", id: 0x803, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "AcReactivePowerOverload", id: 0x804, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "AverageRmsOverVoltage", id: 0x805, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "AverageRmsUnderVoltage", id: 0x806, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsExtremeOverVoltage", id: 0x807, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsExtremeUnderVoltage", id: 0x808, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsVoltageSag", id: 0x809, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsVoltageSwell", id: 0x80a, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "LineCurrentPhaseB", id: 0x901, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "ActiveCurrentPhaseB", id: 0x902, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ReactiveCurrentPhaseB", id: 0x903, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsVoltagePhaseB", id: 0x905, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsVoltageMinPhaseB", id: 0x906, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsVoltageMaxPhaseB", id: 0x907, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsCurrentPhaseB", id: 0x908, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsCurrentMinPhaseB", id: 0x909, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsCurrentMaxPhaseB", id: 0x90a, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "ActivePowerPhaseB", id: 0x90b, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ActivePowerMinPhaseB", id: 0x90c, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ActivePowerMaxPhaseB", id: 0x90d, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ReactivePowerPhaseB", id: 0x90e, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ApparentPowerPhaseB", id: 0x90f, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({
            name: "PowerFactorPhaseB", id: 0x910, type: "int8", conformance: "O", constraint: "-100 to 100",
            default: 0
        }),
        Attribute({
            name: "AverageRmsVoltageMeasurementPeriodPhaseB", id: 0x911, type: "uint16", conformance: "O",
            default: 0
        }),
        Attribute({ name: "AverageRmsOverVoltageCounterPhaseB", id: 0x912, type: "uint16", conformance: "O", default: 0 }),
        Attribute({
            name: "AverageRmsUnderVoltageCounterPhaseB", id: 0x913, type: "uint16", conformance: "O",
            default: 0
        }),
        Attribute({ name: "RmsExtremeOverVoltagePeriodPhaseB", id: 0x914, type: "uint16", conformance: "O", default: 0 }),
        Attribute({ name: "RmsExtremeUnderVoltagePeriodPhaseB", id: 0x915, type: "uint16", conformance: "O", default: 0 }),
        Attribute({ name: "RmsVoltageSagPeriodPhaseB", id: 0x916, type: "uint16", conformance: "O", default: 0 }),
        Attribute({ name: "RmsVoltageSwellPeriodPhaseB", id: 0x917, type: "uint16", conformance: "O", default: 0 }),
        Attribute({ name: "LineCurrentPhaseC", id: 0xa01, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "ActiveCurrentPhaseC", id: 0xa02, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ReactiveCurrentPhaseC", id: 0xa03, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsVoltagePhaseC", id: 0xa05, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsVoltageMinPhaseC", id: 0xa06, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsVoltageMaxPhaseC", id: 0xa07, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsCurrentPhaseC", id: 0xa08, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsCurrentMinPhaseC", id: 0xa09, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "RmsCurrentMaxPhaseC", id: 0xa0a, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({ name: "ActivePowerPhaseC", id: 0xa0b, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ActivePowerMinPhaseC", id: 0xa0c, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ActivePowerMaxPhaseC", id: 0xa0d, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ReactivePowerPhaseC", id: 0xa0e, type: "int16", conformance: "O", default: 65535 }),
        Attribute({ name: "ApparentPowerPhaseC", id: 0xa0f, type: "uint16", conformance: "O", default: 65535 }),
        Attribute({
            name: "PowerFactorPhaseC", id: 0xa10, type: "int8", conformance: "O", constraint: "-100 to 100",
            default: 0
        }),
        Attribute({
            name: "AverageRmsVoltageMeasurementPeriodPhaseC", id: 0xa11, type: "uint16", conformance: "O",
            default: 0
        }),
        Attribute({ name: "AverageRmsOverVoltageCounterPhaseC", id: 0xa12, type: "uint16", conformance: "O", default: 0 }),
        Attribute({
            name: "AverageRmsUnderVoltageCounterPhaseC", id: 0xa13, type: "uint16", conformance: "O",
            default: 0
        }),
        Attribute({ name: "RmsExtremeOverVoltagePeriodPhaseC", id: 0xa14, type: "uint16", conformance: "O", default: 0 }),
        Attribute({ name: "RmsExtremeUnderVoltagePeriodPhaseC", id: 0xa15, type: "uint16", conformance: "O", default: 0 }),
        Attribute({ name: "RmsVoltageSagPeriodPhaseC", id: 0xa16, type: "uint16", conformance: "O", default: 0 }),
        Attribute({ name: "RmsVoltageSwellPeriodPhaseC", id: 0xa17, type: "uint16", conformance: "O", default: 0 }),

        Command({
            name: "GetProfileInfoResponseCommand", id: 0x0, conformance: "O", direction: "response",

            children: [
                Field({ name: "ProfileCount", type: "uint8", conformance: "M" }),
                Field({ name: "ProfileIntervalPeriod", type: "enum8", conformance: "M" }),
                Field({ name: "MaxNumberOfIntervals", type: "uint8", conformance: "M" }),
                Field({
                    name: "ListOfAttributes", type: "list", conformance: "M",
                    children: [Field({ name: "entry", type: "uint16" })]
                })
            ]
        }),

        Command({
            name: "GetMeasurementProfileResponseCommand", id: 0x1, conformance: "O", direction: "response",

            children: [
                Field({ name: "StartTime", type: "uint32", conformance: "M" }),
                Field({ name: "Status", type: "status", conformance: "M" }),
                Field({ name: "ProfileIntervalPeriod", type: "enum8", conformance: "M" }),
                Field({ name: "NumberOfIntervalsDelivered", type: "uint8", conformance: "M" }),
                Field({ name: "AttributeId", type: "uint16", conformance: "M" }),
                Field({
                    name: "Intervals", type: "list", conformance: "M",
                    children: [Field({ name: "entry", type: "uint8" })]
                })
            ]
        }),

        Command({ name: "GetProfileInfoCommand", id: 0x0, conformance: "O", direction: "request" }),

        Command({
            name: "GetMeasurementProfileCommand", id: 0x1, conformance: "O", direction: "request",
            children: [
                Field({ name: "AttributeId", type: "uint16", conformance: "M" }),
                Field({ name: "StartTime", type: "uint32", conformance: "M" }),
                Field({ name: "NumberOfIntervals", type: "enum8", conformance: "M" })
            ]
        })
    ]
}));
