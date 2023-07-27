/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    Cluster as CreateCluster,
    OptionalAttribute,
    OptionalWritableAttribute,
    OptionalCommand,
    TlvNoResponse
} from "../../cluster/Cluster.js";
import { TlvUInt32, TlvInt16, TlvUInt16, TlvInt32, TlvInt8, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

export namespace ElectricalMeasurement {
    /**
     * Input to the ElectricalMeasurement getMeasurementProfileCommand command
     */
    export const TlvGetMeasurementProfileCommandRequest = TlvObject({
        attributeId: TlvField(0, TlvUInt16),
        startTime: TlvField(1, TlvUInt32),
        numberOfIntervals: TlvField(2, TlvUInt8)
    });

    /**
     * Electrical Measurement
     *
     * Attributes related to the electrical properties of a device. This cluster is used by power outlets and other
     * devices that need to provide instantaneous data as opposed to metrology data which should be retrieved from the
     * metering cluster..
     */
    export const Cluster = CreateCluster({
        id: 0xb04,
        name: "ElectricalMeasurement",
        revision: 1,

        attributes: {
            measurementType: OptionalAttribute(0x0, TlvUInt32),
            dcVoltage: OptionalAttribute(0x100, TlvInt16, { default: 32768 }),
            dcVoltageMin: OptionalAttribute(0x101, TlvInt16, { default: 32768 }),
            dcVoltageMax: OptionalAttribute(0x102, TlvInt16, { default: 32768 }),
            dcCurrent: OptionalAttribute(0x103, TlvInt16, { default: 32768 }),
            dcCurrentMin: OptionalAttribute(0x104, TlvInt16, { default: 32768 }),
            dcCurrentMax: OptionalAttribute(0x105, TlvInt16, { default: 32768 }),
            dcPower: OptionalAttribute(0x106, TlvInt16, { default: 32768 }),
            dcPowerMin: OptionalAttribute(0x107, TlvInt16, { default: 32768 }),
            dcPowerMax: OptionalAttribute(0x108, TlvInt16, { default: 32768 }),
            dcVoltageMultiplier: OptionalAttribute(0x200, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcVoltageDivisor: OptionalAttribute(0x201, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcCurrentMultiplier: OptionalAttribute(0x202, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcCurrentDivisor: OptionalAttribute(0x203, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcPowerMultiplier: OptionalAttribute(0x204, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcPowerDivisor: OptionalAttribute(0x205, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acFrequency: OptionalAttribute(0x300, TlvUInt16, { default: 65535 }),
            acFrequencyMin: OptionalAttribute(0x301, TlvUInt16, { default: 65535 }),
            acFrequencyMax: OptionalAttribute(0x302, TlvUInt16, { default: 65535 }),
            neutralCurrent: OptionalAttribute(0x303, TlvUInt16, { default: 0 }),
            totalActivePower: OptionalAttribute(0x304, TlvInt32, { default: 0 }),
            totalReactivePower: OptionalAttribute(0x305, TlvInt32, { default: 0 }),
            totalApparentPower: OptionalAttribute(0x306, TlvUInt32.bound({ max: 16777215 }), { default: 1 }),
            measured1StHarmonicCurrent: OptionalAttribute(0x307, TlvInt16, { default: 32768 }),
            measured3RdHarmonicCurrent: OptionalAttribute(0x308, TlvInt16, { default: 32768 }),
            measured5ThHarmonicCurrent: OptionalAttribute(0x309, TlvInt16, { default: 32768 }),
            measured7ThHarmonicCurrent: OptionalAttribute(0x30a, TlvInt16, { default: 32768 }),
            measured9ThHarmonicCurrent: OptionalAttribute(0x30b, TlvInt16, { default: 32768 }),
            measured11ThHarmonicCurrent: OptionalAttribute(0x30c, TlvInt16, { default: 32768 }),
            measuredPhase1StHarmonicCurrent: OptionalAttribute(0x30d, TlvInt16, { default: 32768 }),
            measuredPhase3RdHarmonicCurrent: OptionalAttribute(0x30e, TlvInt16, { default: 32768 }),
            measuredPhase5ThHarmonicCurrent: OptionalAttribute(0x30f, TlvInt16, { default: 32768 }),
            measuredPhase7ThHarmonicCurrent: OptionalAttribute(0x310, TlvInt16, { default: 32768 }),
            measuredPhase9ThHarmonicCurrent: OptionalAttribute(0x311, TlvInt16, { default: 32768 }),
            measuredPhase11ThHarmonicCurrent: OptionalAttribute(0x312, TlvInt16, { default: 32768 }),
            acFrequencyMultiplier: OptionalAttribute(0x400, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acFrequencyDivisor: OptionalAttribute(0x401, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            powerMultiplier: OptionalAttribute(0x402, TlvUInt32.bound({ max: 16777215 }), { default: 1 }),
            powerDivisor: OptionalAttribute(0x403, TlvUInt32.bound({ max: 16777215 }), { default: 1 }),
            harmonicCurrentMultiplier: OptionalAttribute(0x404, TlvInt8.bound({ min: -127 }), { default: 0 }),
            phaseHarmonicCurrentMultiplier: OptionalAttribute(0x405, TlvInt8.bound({ min: -127 }), { default: 0 }),
            instantaneousVoltage: OptionalAttribute(0x500, TlvInt16, { default: 65535 }),
            instantaneousLineCurrent: OptionalAttribute(0x501, TlvUInt16, { default: 65535 }),
            instantaneousActiveCurrent: OptionalAttribute(0x502, TlvInt16, { default: 65535 }),
            instantaneousReactiveCurrent: OptionalAttribute(0x503, TlvInt16, { default: 65535 }),
            instantaneousPower: OptionalAttribute(0x504, TlvInt16, { default: 65535 }),
            rmsVoltage: OptionalAttribute(0x505, TlvUInt16, { default: 65535 }),
            rmsVoltageMin: OptionalAttribute(0x506, TlvUInt16, { default: 32768 }),
            rmsVoltageMax: OptionalAttribute(0x507, TlvUInt16, { default: 32768 }),
            rmsCurrent: OptionalAttribute(0x508, TlvUInt16, { default: 65535 }),
            rmsCurrentMin: OptionalAttribute(0x509, TlvUInt16, { default: 65535 }),
            rmsCurrentMax: OptionalAttribute(0x50a, TlvUInt16, { default: 65535 }),
            activePower: OptionalAttribute(0x50b, TlvInt16, { default: 65535 }),
            activePowerMin: OptionalAttribute(0x50c, TlvInt16, { default: 65535 }),
            activePowerMax: OptionalAttribute(0x50d, TlvInt16, { default: 65535 }),
            reactivePower: OptionalAttribute(0x50e, TlvInt16, { default: 65535 }),
            apparentPower: OptionalAttribute(0x50f, TlvUInt16, { default: 65535 }),
            acPowerFactor: OptionalAttribute(0x510, TlvInt8.bound({ min: -100, max: 100 }), { default: 0 }),
            averageRmsVoltageMeasurementPeriod: OptionalWritableAttribute(0x511, TlvUInt16, { default: 0 }),
            averageRmsUnderVoltageCounter: OptionalWritableAttribute(0x513, TlvUInt16, { default: 0 }),
            rmsExtremeOverVoltagePeriod: OptionalWritableAttribute(0x514, TlvUInt16, { default: 0 }),
            rmsExtremeUnderVoltagePeriod: OptionalWritableAttribute(0x515, TlvUInt16, { default: 0 }),
            rmsVoltageSagPeriod: OptionalWritableAttribute(0x516, TlvUInt16, { default: 0 }),
            rmsVoltageSwellPeriod: OptionalWritableAttribute(0x517, TlvUInt16, { default: 0 }),
            acVoltageMultiplier: OptionalAttribute(0x600, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acVoltageDivisor: OptionalAttribute(0x601, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acCurrentMultiplier: OptionalAttribute(0x602, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acCurrentDivisor: OptionalAttribute(0x603, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acPowerMultiplier: OptionalAttribute(0x604, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acPowerDivisor: OptionalAttribute(0x605, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcOverloadAlarmsMask: OptionalWritableAttribute(0x700, TlvUInt8),
            dcVoltageOverload: OptionalAttribute(0x701, TlvInt16, { default: 65535 }),
            dcCurrentOverload: OptionalAttribute(0x702, TlvInt16, { default: 65535 }),
            acOverloadAlarmsMask: OptionalWritableAttribute(0x800, TlvUInt16),
            acVoltageOverload: OptionalAttribute(0x801, TlvInt16, { default: 65535 }),
            acCurrentOverload: OptionalAttribute(0x802, TlvInt16, { default: 65535 }),
            acPowerOverload: OptionalAttribute(0x803, TlvInt16, { default: 65535 }),
            acReactivePowerOverload: OptionalAttribute(0x804, TlvInt16, { default: 65535 }),
            averageRmsOverVoltage: OptionalAttribute(0x805, TlvInt16, { default: 65535 }),
            averageRmsUnderVoltage: OptionalAttribute(0x806, TlvInt16, { default: 65535 }),
            rmsExtremeOverVoltage: OptionalAttribute(0x807, TlvInt16, { default: 65535 }),
            rmsExtremeUnderVoltage: OptionalAttribute(0x808, TlvInt16, { default: 65535 }),
            rmsVoltageSag: OptionalAttribute(0x809, TlvInt16, { default: 65535 }),
            rmsVoltageSwell: OptionalAttribute(0x80a, TlvInt16, { default: 65535 }),
            lineCurrentPhaseB: OptionalAttribute(0x901, TlvUInt16, { default: 65535 }),
            activeCurrentPhaseB: OptionalAttribute(0x902, TlvInt16, { default: 65535 }),
            reactiveCurrentPhaseB: OptionalAttribute(0x903, TlvInt16, { default: 65535 }),
            rmsVoltagePhaseB: OptionalAttribute(0x905, TlvUInt16, { default: 65535 }),
            rmsVoltageMinPhaseB: OptionalAttribute(0x906, TlvUInt16, { default: 65535 }),
            rmsVoltageMaxPhaseB: OptionalAttribute(0x907, TlvUInt16, { default: 65535 }),
            rmsCurrentPhaseB: OptionalAttribute(0x908, TlvUInt16, { default: 65535 }),
            rmsCurrentMinPhaseB: OptionalAttribute(0x909, TlvUInt16, { default: 65535 }),
            rmsCurrentMaxPhaseB: OptionalAttribute(0x90a, TlvUInt16, { default: 65535 }),
            activePowerPhaseB: OptionalAttribute(0x90b, TlvInt16, { default: 65535 }),
            activePowerMinPhaseB: OptionalAttribute(0x90c, TlvInt16, { default: 65535 }),
            activePowerMaxPhaseB: OptionalAttribute(0x90d, TlvInt16, { default: 65535 }),
            reactivePowerPhaseB: OptionalAttribute(0x90e, TlvInt16, { default: 65535 }),
            apparentPowerPhaseB: OptionalAttribute(0x90f, TlvUInt16, { default: 65535 }),
            powerFactorPhaseB: OptionalAttribute(0x910, TlvInt8.bound({ min: -100, max: 100 }), { default: 0 }),
            averageRmsVoltageMeasurementPeriodPhaseB: OptionalAttribute(0x911, TlvUInt16, { default: 0 }),
            averageRmsOverVoltageCounterPhaseB: OptionalAttribute(0x912, TlvUInt16, { default: 0 }),
            averageRmsUnderVoltageCounterPhaseB: OptionalAttribute(0x913, TlvUInt16, { default: 0 }),
            rmsExtremeOverVoltagePeriodPhaseB: OptionalAttribute(0x914, TlvUInt16, { default: 0 }),
            rmsExtremeUnderVoltagePeriodPhaseB: OptionalAttribute(0x915, TlvUInt16, { default: 0 }),
            rmsVoltageSagPeriodPhaseB: OptionalAttribute(0x916, TlvUInt16, { default: 0 }),
            rmsVoltageSwellPeriodPhaseB: OptionalAttribute(0x917, TlvUInt16, { default: 0 }),
            lineCurrentPhaseC: OptionalAttribute(0xa01, TlvUInt16, { default: 65535 }),
            activeCurrentPhaseC: OptionalAttribute(0xa02, TlvInt16, { default: 65535 }),
            reactiveCurrentPhaseC: OptionalAttribute(0xa03, TlvInt16, { default: 65535 }),
            rmsVoltagePhaseC: OptionalAttribute(0xa05, TlvUInt16, { default: 65535 }),
            rmsVoltageMinPhaseC: OptionalAttribute(0xa06, TlvUInt16, { default: 65535 }),
            rmsVoltageMaxPhaseC: OptionalAttribute(0xa07, TlvUInt16, { default: 65535 }),
            rmsCurrentPhaseC: OptionalAttribute(0xa08, TlvUInt16, { default: 65535 }),
            rmsCurrentMinPhaseC: OptionalAttribute(0xa09, TlvUInt16, { default: 65535 }),
            rmsCurrentMaxPhaseC: OptionalAttribute(0xa0a, TlvUInt16, { default: 65535 }),
            activePowerPhaseC: OptionalAttribute(0xa0b, TlvInt16, { default: 65535 }),
            activePowerMinPhaseC: OptionalAttribute(0xa0c, TlvInt16, { default: 65535 }),
            activePowerMaxPhaseC: OptionalAttribute(0xa0d, TlvInt16, { default: 65535 }),
            reactivePowerPhaseC: OptionalAttribute(0xa0e, TlvInt16, { default: 65535 }),
            apparentPowerPhaseC: OptionalAttribute(0xa0f, TlvUInt16, { default: 65535 }),
            powerFactorPhaseC: OptionalAttribute(0xa10, TlvInt8.bound({ min: -100, max: 100 }), { default: 0 }),
            averageRmsVoltageMeasurementPeriodPhaseC: OptionalAttribute(0xa11, TlvUInt16, { default: 0 }),
            averageRmsOverVoltageCounterPhaseC: OptionalAttribute(0xa12, TlvUInt16, { default: 0 }),
            averageRmsUnderVoltageCounterPhaseC: OptionalAttribute(0xa13, TlvUInt16, { default: 0 }),
            rmsExtremeOverVoltagePeriodPhaseC: OptionalAttribute(0xa14, TlvUInt16, { default: 0 }),
            rmsExtremeUnderVoltagePeriodPhaseC: OptionalAttribute(0xa15, TlvUInt16, { default: 0 }),
            rmsVoltageSagPeriodPhaseC: OptionalAttribute(0xa16, TlvUInt16, { default: 0 }),
            rmsVoltageSwellPeriodPhaseC: OptionalAttribute(0xa17, TlvUInt16, { default: 0 })
        },

        commands: {
            getProfileInfoCommand: OptionalCommand(0x0, TlvNoArguments, 0x0, TlvNoResponse),

            getMeasurementProfileCommand: OptionalCommand(
                0x1,
                TlvGetMeasurementProfileCommandRequest,
                0x1,
                TlvNoResponse
            )
        }
    });
}

export type ElectricalMeasurementCluster = typeof ElectricalMeasurement.Cluster;
export const ElectricalMeasurementCluster = ElectricalMeasurement.Cluster;
