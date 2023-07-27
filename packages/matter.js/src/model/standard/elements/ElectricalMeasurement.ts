/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ElectricalMeasurement", id: 0xb04, description: "Electrical Measurement",
    details: "Attributes related to the electrical properties of a device. This cluster is used by power outlets " +
        "and other devices that need to provide instantaneous data as opposed to metrology data which should " +
        "be retrieved from the metering cluster..",

    children: [
        { tag: "attribute", name: "MeasurementType", id: 0x0, type: "map32", conformance: "O", default: 0 },
        { tag: "attribute", name: "DcVoltage", id: 0x100, type: "int16", conformance: "O", default: 32768 },
        { tag: "attribute", name: "DcVoltageMin", id: 0x101, type: "int16", conformance: "O", default: 32768 },
        { tag: "attribute", name: "DcVoltageMax", id: 0x102, type: "int16", conformance: "O", default: 32768 },
        { tag: "attribute", name: "DcCurrent", id: 0x103, type: "int16", conformance: "O", default: 32768 },
        { tag: "attribute", name: "DcCurrentMin", id: 0x104, type: "int16", conformance: "O", default: 32768 },
        { tag: "attribute", name: "DcCurrentMax", id: 0x105, type: "int16", conformance: "O", default: 32768 },
        { tag: "attribute", name: "DcPower", id: 0x106, type: "int16", conformance: "O", default: 32768 },
        { tag: "attribute", name: "DcPowerMin", id: 0x107, type: "int16", conformance: "O", default: 32768 },
        { tag: "attribute", name: "DcPowerMax", id: 0x108, type: "int16", conformance: "O", default: 32768 },
        {
            tag: "attribute", name: "DcVoltageMultiplier", id: 0x200, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "DcVoltageDivisor", id: 0x201, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "DcCurrentMultiplier", id: 0x202, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "DcCurrentDivisor", id: 0x203, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "DcPowerMultiplier", id: 0x204, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "DcPowerDivisor", id: 0x205, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        { tag: "attribute", name: "AcFrequency", id: 0x300, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "AcFrequencyMin", id: 0x301, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "AcFrequencyMax", id: 0x302, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "NeutralCurrent", id: 0x303, type: "uint16", conformance: "O", default: 0 },
        { tag: "attribute", name: "TotalActivePower", id: 0x304, type: "int32", conformance: "O", default: 0 },
        { tag: "attribute", name: "TotalReactivePower", id: 0x305, type: "int32", conformance: "O", default: 0 },
        {
            tag: "attribute", name: "TotalApparentPower", id: 0x306, type: "uint32", conformance: "O",
            constraint: "max 16777215", default: 1
        },
        {
            tag: "attribute", name: "Measured1StHarmonicCurrent", id: 0x307, type: "int16", conformance: "O",
            default: 32768
        },
        {
            tag: "attribute", name: "Measured3RdHarmonicCurrent", id: 0x308, type: "int16", conformance: "O",
            default: 32768
        },
        {
            tag: "attribute", name: "Measured5ThHarmonicCurrent", id: 0x309, type: "int16", conformance: "O",
            default: 32768
        },
        {
            tag: "attribute", name: "Measured7ThHarmonicCurrent", id: 0x30a, type: "int16", conformance: "O",
            default: 32768
        },
        {
            tag: "attribute", name: "Measured9ThHarmonicCurrent", id: 0x30b, type: "int16", conformance: "O",
            default: 32768
        },
        {
            tag: "attribute", name: "Measured11ThHarmonicCurrent", id: 0x30c, type: "int16", conformance: "O",
            default: 32768
        },
        {
            tag: "attribute", name: "MeasuredPhase1StHarmonicCurrent", id: 0x30d, type: "int16",
            conformance: "O", default: 32768
        },
        {
            tag: "attribute", name: "MeasuredPhase3RdHarmonicCurrent", id: 0x30e, type: "int16",
            conformance: "O", default: 32768
        },
        {
            tag: "attribute", name: "MeasuredPhase5ThHarmonicCurrent", id: 0x30f, type: "int16",
            conformance: "O", default: 32768
        },
        {
            tag: "attribute", name: "MeasuredPhase7ThHarmonicCurrent", id: 0x310, type: "int16",
            conformance: "O", default: 32768
        },
        {
            tag: "attribute", name: "MeasuredPhase9ThHarmonicCurrent", id: 0x311, type: "int16",
            conformance: "O", default: 32768
        },
        {
            tag: "attribute", name: "MeasuredPhase11ThHarmonicCurrent", id: 0x312, type: "int16",
            conformance: "O", default: 32768
        },
        {
            tag: "attribute", name: "AcFrequencyMultiplier", id: 0x400, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "AcFrequencyDivisor", id: 0x401, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "PowerMultiplier", id: 0x402, type: "uint32", conformance: "O",
            constraint: "max 16777215", default: 1
        },
        {
            tag: "attribute", name: "PowerDivisor", id: 0x403, type: "uint32", conformance: "O",
            constraint: "max 16777215", default: 1
        },
        {
            tag: "attribute", name: "HarmonicCurrentMultiplier", id: 0x404, type: "int8", conformance: "O",
            constraint: "min -127", default: 0
        },
        {
            tag: "attribute", name: "PhaseHarmonicCurrentMultiplier", id: 0x405, type: "int8", conformance: "O",
            constraint: "min -127", default: 0
        },
        { tag: "attribute", name: "InstantaneousVoltage", id: 0x500, type: "int16", conformance: "O", default: 65535 },
        {
            tag: "attribute", name: "InstantaneousLineCurrent", id: 0x501, type: "uint16", conformance: "O",
            default: 65535
        },
        {
            tag: "attribute", name: "InstantaneousActiveCurrent", id: 0x502, type: "int16", conformance: "O",
            default: 65535
        },
        {
            tag: "attribute", name: "InstantaneousReactiveCurrent", id: 0x503, type: "int16", conformance: "O",
            default: 65535
        },
        { tag: "attribute", name: "InstantaneousPower", id: 0x504, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsVoltage", id: 0x505, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsVoltageMin", id: 0x506, type: "uint16", conformance: "O", default: 32768 },
        { tag: "attribute", name: "RmsVoltageMax", id: 0x507, type: "uint16", conformance: "O", default: 32768 },
        { tag: "attribute", name: "RmsCurrent", id: 0x508, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsCurrentMin", id: 0x509, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsCurrentMax", id: 0x50a, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ActivePower", id: 0x50b, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ActivePowerMin", id: 0x50c, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ActivePowerMax", id: 0x50d, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ReactivePower", id: 0x50e, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ApparentPower", id: 0x50f, type: "uint16", conformance: "O", default: 65535 },
        {
            tag: "attribute", name: "AcPowerFactor", id: 0x510, type: "int8", conformance: "O",
            constraint: "-100 to 100", default: 0
        },
        {
            tag: "attribute", name: "AverageRmsVoltageMeasurementPeriod", id: 0x511, type: "uint16",
            access: "RW", conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "AverageRmsUnderVoltageCounter", id: 0x513, type: "uint16", access: "RW",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "RmsExtremeOverVoltagePeriod", id: 0x514, type: "uint16", access: "RW",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "RmsExtremeUnderVoltagePeriod", id: 0x515, type: "uint16", access: "RW",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "RmsVoltageSagPeriod", id: 0x516, type: "uint16", access: "RW",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "RmsVoltageSwellPeriod", id: 0x517, type: "uint16", access: "RW",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "AcVoltageMultiplier", id: 0x600, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "AcVoltageDivisor", id: 0x601, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "AcCurrentMultiplier", id: 0x602, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "AcCurrentDivisor", id: 0x603, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "AcPowerMultiplier", id: 0x604, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "AcPowerDivisor", id: 0x605, type: "uint16", conformance: "O",
            constraint: "min 1", default: 1
        },
        {
            tag: "attribute", name: "DcOverloadAlarmsMask", id: 0x700, type: "map8", access: "RW",
            conformance: "O", default: 0
        },
        { tag: "attribute", name: "DcVoltageOverload", id: 0x701, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "DcCurrentOverload", id: 0x702, type: "int16", conformance: "O", default: 65535 },
        {
            tag: "attribute", name: "AcOverloadAlarmsMask", id: 0x800, type: "map16", access: "RW",
            conformance: "O", default: 0
        },
        { tag: "attribute", name: "AcVoltageOverload", id: 0x801, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "AcCurrentOverload", id: 0x802, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "AcPowerOverload", id: 0x803, type: "int16", conformance: "O", default: 65535 },
        {
            tag: "attribute", name: "AcReactivePowerOverload", id: 0x804, type: "int16", conformance: "O",
            default: 65535
        },
        { tag: "attribute", name: "AverageRmsOverVoltage", id: 0x805, type: "int16", conformance: "O", default: 65535 },
        {
            tag: "attribute", name: "AverageRmsUnderVoltage", id: 0x806, type: "int16", conformance: "O",
            default: 65535
        },
        { tag: "attribute", name: "RmsExtremeOverVoltage", id: 0x807, type: "int16", conformance: "O", default: 65535 },
        {
            tag: "attribute", name: "RmsExtremeUnderVoltage", id: 0x808, type: "int16", conformance: "O",
            default: 65535
        },
        { tag: "attribute", name: "RmsVoltageSag", id: 0x809, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsVoltageSwell", id: 0x80a, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "LineCurrentPhaseB", id: 0x901, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ActiveCurrentPhaseB", id: 0x902, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ReactiveCurrentPhaseB", id: 0x903, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsVoltagePhaseB", id: 0x905, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsVoltageMinPhaseB", id: 0x906, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsVoltageMaxPhaseB", id: 0x907, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsCurrentPhaseB", id: 0x908, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsCurrentMinPhaseB", id: 0x909, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsCurrentMaxPhaseB", id: 0x90a, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ActivePowerPhaseB", id: 0x90b, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ActivePowerMinPhaseB", id: 0x90c, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ActivePowerMaxPhaseB", id: 0x90d, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ReactivePowerPhaseB", id: 0x90e, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ApparentPowerPhaseB", id: 0x90f, type: "uint16", conformance: "O", default: 65535 },
        {
            tag: "attribute", name: "PowerFactorPhaseB", id: 0x910, type: "int8", conformance: "O",
            constraint: "-100 to 100", default: 0
        },
        {
            tag: "attribute", name: "AverageRmsVoltageMeasurementPeriodPhaseB", id: 0x911, type: "uint16",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "AverageRmsOverVoltageCounterPhaseB", id: 0x912, type: "uint16",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "AverageRmsUnderVoltageCounterPhaseB", id: 0x913, type: "uint16",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "RmsExtremeOverVoltagePeriodPhaseB", id: 0x914, type: "uint16",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "RmsExtremeUnderVoltagePeriodPhaseB", id: 0x915, type: "uint16",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "RmsVoltageSagPeriodPhaseB", id: 0x916, type: "uint16", conformance: "O",
            default: 0
        },
        {
            tag: "attribute", name: "RmsVoltageSwellPeriodPhaseB", id: 0x917, type: "uint16", conformance: "O",
            default: 0
        },
        { tag: "attribute", name: "LineCurrentPhaseC", id: 0xa01, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ActiveCurrentPhaseC", id: 0xa02, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ReactiveCurrentPhaseC", id: 0xa03, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsVoltagePhaseC", id: 0xa05, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsVoltageMinPhaseC", id: 0xa06, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsVoltageMaxPhaseC", id: 0xa07, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsCurrentPhaseC", id: 0xa08, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsCurrentMinPhaseC", id: 0xa09, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "RmsCurrentMaxPhaseC", id: 0xa0a, type: "uint16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ActivePowerPhaseC", id: 0xa0b, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ActivePowerMinPhaseC", id: 0xa0c, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ActivePowerMaxPhaseC", id: 0xa0d, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ReactivePowerPhaseC", id: 0xa0e, type: "int16", conformance: "O", default: 65535 },
        { tag: "attribute", name: "ApparentPowerPhaseC", id: 0xa0f, type: "uint16", conformance: "O", default: 65535 },
        {
            tag: "attribute", name: "PowerFactorPhaseC", id: 0xa10, type: "int8", conformance: "O",
            constraint: "-100 to 100", default: 0
        },
        {
            tag: "attribute", name: "AverageRmsVoltageMeasurementPeriodPhaseC", id: 0xa11, type: "uint16",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "AverageRmsOverVoltageCounterPhaseC", id: 0xa12, type: "uint16",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "AverageRmsUnderVoltageCounterPhaseC", id: 0xa13, type: "uint16",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "RmsExtremeOverVoltagePeriodPhaseC", id: 0xa14, type: "uint16",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "RmsExtremeUnderVoltagePeriodPhaseC", id: 0xa15, type: "uint16",
            conformance: "O", default: 0
        },
        {
            tag: "attribute", name: "RmsVoltageSagPeriodPhaseC", id: 0xa16, type: "uint16", conformance: "O",
            default: 0
        },
        {
            tag: "attribute", name: "RmsVoltageSwellPeriodPhaseC", id: 0xa17, type: "uint16", conformance: "O",
            default: 0
        },

        {
            tag: "command", name: "GetProfileInfoResponseCommand", id: 0x0, conformance: "O",
            direction: "response",

            children: [
                { tag: "datatype", name: "ProfileCount", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "ProfileIntervalPeriod", type: "enum8", conformance: "M" },
                { tag: "datatype", name: "MaxNumberOfIntervals", type: "uint8", conformance: "M" },
                {
                    tag: "datatype", name: "ListOfAttributes", type: "list", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "uint16" }]
                }
            ]
        },

        {
            tag: "command", name: "GetMeasurementProfileResponseCommand", id: 0x1, conformance: "O",
            direction: "response",

            children: [
                { tag: "datatype", name: "StartTime", type: "uint32", conformance: "M" },
                { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                { tag: "datatype", name: "ProfileIntervalPeriod", type: "enum8", conformance: "M" },
                { tag: "datatype", name: "NumberOfIntervalsDelivered", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "AttributeId", type: "uint16", conformance: "M" },
                {
                    tag: "datatype", name: "Intervals", type: "list", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "uint8" }]
                }
            ]
        },

        { tag: "command", name: "GetProfileInfoCommand", id: 0x0, conformance: "O", direction: "request" },

        {
            tag: "command", name: "GetMeasurementProfileCommand", id: 0x1, conformance: "O",
            direction: "request",
            children: [
                { tag: "datatype", name: "AttributeId", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "StartTime", type: "uint32", conformance: "M" },
                { tag: "datatype", name: "NumberOfIntervals", type: "enum8", conformance: "M" }
            ]
        }
    ]
});
