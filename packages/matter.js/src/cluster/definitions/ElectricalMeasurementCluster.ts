/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { OptionalWritableAttribute, OptionalCommand, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvUInt32, TlvInt16, TlvUInt16, TlvInt32, TlvInt8, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

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
     * Input to the ElectricalMeasurement getMeasurementProfileCommand command
     */
    export interface GetMeasurementProfileCommandRequest extends TypeFromSchema<typeof TlvGetMeasurementProfileCommandRequest> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0xb04,
        name: "ElectricalMeasurement",
        revision: 1,

        attributes: {
            measurementType: OptionalWritableAttribute(0x0, TlvUInt32),
            dcVoltage: OptionalWritableAttribute(0x100, TlvInt16, { default: 32768 }),
            dcVoltageMin: OptionalWritableAttribute(0x101, TlvInt16, { default: 32768 }),
            dcVoltageMax: OptionalWritableAttribute(0x102, TlvInt16, { default: 32768 }),
            dcCurrent: OptionalWritableAttribute(0x103, TlvInt16, { default: 32768 }),
            dcCurrentMin: OptionalWritableAttribute(0x104, TlvInt16, { default: 32768 }),
            dcCurrentMax: OptionalWritableAttribute(0x105, TlvInt16, { default: 32768 }),
            dcPower: OptionalWritableAttribute(0x106, TlvInt16, { default: 32768 }),
            dcPowerMin: OptionalWritableAttribute(0x107, TlvInt16, { default: 32768 }),
            dcPowerMax: OptionalWritableAttribute(0x108, TlvInt16, { default: 32768 }),
            dcVoltageMultiplier: OptionalWritableAttribute(0x200, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcVoltageDivisor: OptionalWritableAttribute(0x201, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcCurrentMultiplier: OptionalWritableAttribute(0x202, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcCurrentDivisor: OptionalWritableAttribute(0x203, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcPowerMultiplier: OptionalWritableAttribute(0x204, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcPowerDivisor: OptionalWritableAttribute(0x205, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acFrequency: OptionalWritableAttribute(0x300, TlvUInt16, { default: 65535 }),
            acFrequencyMin: OptionalWritableAttribute(0x301, TlvUInt16, { default: 65535 }),
            acFrequencyMax: OptionalWritableAttribute(0x302, TlvUInt16, { default: 65535 }),
            neutralCurrent: OptionalWritableAttribute(0x303, TlvUInt16, { default: 0 }),
            totalActivePower: OptionalWritableAttribute(0x304, TlvInt32, { default: 0 }),
            totalReactivePower: OptionalWritableAttribute(0x305, TlvInt32, { default: 0 }),
            totalApparentPower: OptionalWritableAttribute(0x306, TlvUInt32.bound({ max: 16777215 }), { default: 1 }),
            measured1StHarmonicCurrent: OptionalWritableAttribute(
                0x307,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            measured3RdHarmonicCurrent: OptionalWritableAttribute(
                0x308,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            measured5ThHarmonicCurrent: OptionalWritableAttribute(
                0x309,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            measured7ThHarmonicCurrent: OptionalWritableAttribute(
                0x30a,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            measured9ThHarmonicCurrent: OptionalWritableAttribute(
                0x30b,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            measured11ThHarmonicCurrent: OptionalWritableAttribute(
                0x30c,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            measuredPhase1StHarmonicCurrent: OptionalWritableAttribute(
                0x30d,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            measuredPhase3RdHarmonicCurrent: OptionalWritableAttribute(
                0x30e,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            measuredPhase5ThHarmonicCurrent: OptionalWritableAttribute(
                0x30f,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            measuredPhase7ThHarmonicCurrent: OptionalWritableAttribute(
                0x310,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            measuredPhase9ThHarmonicCurrent: OptionalWritableAttribute(
                0x311,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            measuredPhase11ThHarmonicCurrent: OptionalWritableAttribute(
                0x312,
                TlvInt16.bound({ max: 0 }),
                { default: 32768 }
            ),
            acFrequencyMultiplier: OptionalWritableAttribute(0x400, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acFrequencyDivisor: OptionalWritableAttribute(0x401, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            powerMultiplier: OptionalWritableAttribute(0x402, TlvUInt32.bound({ max: 16777215 }), { default: 1 }),
            powerDivisor: OptionalWritableAttribute(0x403, TlvUInt32.bound({ max: 16777215 }), { default: 1 }),
            harmonicCurrentMultiplier: OptionalWritableAttribute(0x404, TlvInt8.bound({ min: -127 }), { default: 0 }),
            phaseHarmonicCurrentMultiplier: OptionalWritableAttribute(
                0x405,
                TlvInt8.bound({ min: -127 }),
                { default: 0 }
            ),
            instantaneousVoltage: OptionalWritableAttribute(0x500, TlvInt16, { default: 65535 }),
            instantaneousLineCurrent: OptionalWritableAttribute(0x501, TlvUInt16, { default: 65535 }),
            instantaneousActiveCurrent: OptionalWritableAttribute(0x502, TlvInt16, { default: 65535 }),
            instantaneousReactiveCurrent: OptionalWritableAttribute(0x503, TlvInt16, { default: 65535 }),
            instantaneousPower: OptionalWritableAttribute(0x504, TlvInt16, { default: 65535 }),
            rmsVoltage: OptionalWritableAttribute(0x505, TlvUInt16, { default: 65535 }),
            rmsVoltageMin: OptionalWritableAttribute(0x506, TlvUInt16, { default: 32768 }),
            rmsVoltageMax: OptionalWritableAttribute(0x507, TlvUInt16, { default: 32768 }),
            rmsCurrent: OptionalWritableAttribute(0x508, TlvUInt16, { default: 65535 }),
            rmsCurrentMin: OptionalWritableAttribute(0x509, TlvUInt16, { default: 65535 }),
            rmsCurrentMax: OptionalWritableAttribute(0x50a, TlvUInt16, { default: 65535 }),
            activePower: OptionalWritableAttribute(0x50b, TlvInt16, { default: 65535 }),
            activePowerMin: OptionalWritableAttribute(0x50c, TlvInt16, { default: 65535 }),
            activePowerMax: OptionalWritableAttribute(0x50d, TlvInt16, { default: 65535 }),
            reactivePower: OptionalWritableAttribute(0x50e, TlvInt16, { default: 65535 }),
            apparentPower: OptionalWritableAttribute(0x50f, TlvUInt16, { default: 65535 }),
            acPowerFactor: OptionalWritableAttribute(0x510, TlvInt8.bound({ min: -100, max: 100 }), { default: 0 }),
            averageRmsVoltageMeasurementPeriod: OptionalWritableAttribute(0x511, TlvUInt16, { default: 0 }),
            averageRmsUnderVoltageCounter: OptionalWritableAttribute(0x513, TlvUInt16, { default: 0 }),
            rmsExtremeOverVoltagePeriod: OptionalWritableAttribute(0x514, TlvUInt16, { default: 0 }),
            rmsExtremeUnderVoltagePeriod: OptionalWritableAttribute(0x515, TlvUInt16, { default: 0 }),
            rmsVoltageSagPeriod: OptionalWritableAttribute(0x516, TlvUInt16, { default: 0 }),
            rmsVoltageSwellPeriod: OptionalWritableAttribute(0x517, TlvUInt16, { default: 0 }),
            acVoltageMultiplier: OptionalWritableAttribute(0x600, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acVoltageDivisor: OptionalWritableAttribute(0x601, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acCurrentMultiplier: OptionalWritableAttribute(0x602, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acCurrentDivisor: OptionalWritableAttribute(0x603, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acPowerMultiplier: OptionalWritableAttribute(0x604, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            acPowerDivisor: OptionalWritableAttribute(0x605, TlvUInt16.bound({ min: 1 }), { default: 1 }),
            dcOverloadAlarmsMask: OptionalWritableAttribute(0x700, TlvUInt8),
            dcVoltageOverload: OptionalWritableAttribute(0x701, TlvInt16, { default: 65535 }),
            dcCurrentOverload: OptionalWritableAttribute(0x702, TlvInt16, { default: 65535 }),
            acOverloadAlarmsMask: OptionalWritableAttribute(0x800, TlvUInt16),
            acVoltageOverload: OptionalWritableAttribute(0x801, TlvInt16, { default: 65535 }),
            acCurrentOverload: OptionalWritableAttribute(0x802, TlvInt16, { default: 65535 }),
            acPowerOverload: OptionalWritableAttribute(0x803, TlvInt16, { default: 65535 }),
            acReactivePowerOverload: OptionalWritableAttribute(0x804, TlvInt16, { default: 65535 }),
            averageRmsOverVoltage: OptionalWritableAttribute(0x805, TlvInt16, { default: 65535 }),
            averageRmsUnderVoltage: OptionalWritableAttribute(0x806, TlvInt16, { default: 65535 }),
            rmsExtremeOverVoltage: OptionalWritableAttribute(0x807, TlvInt16, { default: 65535 }),
            rmsExtremeUnderVoltage: OptionalWritableAttribute(0x808, TlvInt16, { default: 65535 }),
            rmsVoltageSag: OptionalWritableAttribute(0x809, TlvInt16, { default: 65535 }),
            rmsVoltageSwell: OptionalWritableAttribute(0x80a, TlvInt16, { default: 65535 }),
            lineCurrentPhaseB: OptionalWritableAttribute(0x901, TlvUInt16, { default: 65535 }),
            activeCurrentPhaseB: OptionalWritableAttribute(0x902, TlvInt16, { default: 65535 }),
            reactiveCurrentPhaseB: OptionalWritableAttribute(0x903, TlvInt16, { default: 65535 }),
            rmsVoltagePhaseB: OptionalWritableAttribute(0x905, TlvUInt16, { default: 65535 }),
            rmsVoltageMinPhaseB: OptionalWritableAttribute(0x906, TlvUInt16, { default: 65535 }),
            rmsVoltageMaxPhaseB: OptionalWritableAttribute(0x907, TlvUInt16, { default: 65535 }),
            rmsCurrentPhaseB: OptionalWritableAttribute(0x908, TlvUInt16, { default: 65535 }),
            rmsCurrentMinPhaseB: OptionalWritableAttribute(0x909, TlvUInt16, { default: 65535 }),
            rmsCurrentMaxPhaseB: OptionalWritableAttribute(0x90a, TlvUInt16, { default: 65535 }),
            activePowerPhaseB: OptionalWritableAttribute(0x90b, TlvInt16, { default: 65535 }),
            activePowerMinPhaseB: OptionalWritableAttribute(0x90c, TlvInt16, { default: 65535 }),
            activePowerMaxPhaseB: OptionalWritableAttribute(0x90d, TlvInt16, { default: 65535 }),
            reactivePowerPhaseB: OptionalWritableAttribute(0x90e, TlvInt16, { default: 65535 }),
            apparentPowerPhaseB: OptionalWritableAttribute(0x90f, TlvUInt16, { default: 65535 }),
            powerFactorPhaseB: OptionalWritableAttribute(0x910, TlvInt8.bound({ min: -100, max: 100 }), { default: 0 }),
            averageRmsVoltageMeasurementPeriodPhaseB: OptionalWritableAttribute(0x911, TlvUInt16, { default: 0 }),
            averageRmsOverVoltageCounterPhaseB: OptionalWritableAttribute(0x912, TlvUInt16, { default: 0 }),
            averageRmsUnderVoltageCounterPhaseB: OptionalWritableAttribute(0x913, TlvUInt16, { default: 0 }),
            rmsExtremeOverVoltagePeriodPhaseB: OptionalWritableAttribute(0x914, TlvUInt16, { default: 0 }),
            rmsExtremeUnderVoltagePeriodPhaseB: OptionalWritableAttribute(0x915, TlvUInt16, { default: 0 }),
            rmsVoltageSagPeriodPhaseB: OptionalWritableAttribute(0x916, TlvUInt16, { default: 0 }),
            rmsVoltageSwellPeriodPhaseB: OptionalWritableAttribute(0x917, TlvUInt16, { default: 0 }),
            lineCurrentPhaseC: OptionalWritableAttribute(0xa01, TlvUInt16, { default: 65535 }),
            activeCurrentPhaseC: OptionalWritableAttribute(0xa02, TlvInt16, { default: 65535 }),
            reactiveCurrentPhaseC: OptionalWritableAttribute(0xa03, TlvInt16, { default: 65535 }),
            rmsVoltagePhaseC: OptionalWritableAttribute(0xa05, TlvUInt16, { default: 65535 }),
            rmsVoltageMinPhaseC: OptionalWritableAttribute(0xa06, TlvUInt16, { default: 65535 }),
            rmsVoltageMaxPhaseC: OptionalWritableAttribute(0xa07, TlvUInt16, { default: 65535 }),
            rmsCurrentPhaseC: OptionalWritableAttribute(0xa08, TlvUInt16, { default: 65535 }),
            rmsCurrentMinPhaseC: OptionalWritableAttribute(0xa09, TlvUInt16, { default: 65535 }),
            rmsCurrentMaxPhaseC: OptionalWritableAttribute(0xa0a, TlvUInt16, { default: 65535 }),
            activePowerPhaseC: OptionalWritableAttribute(0xa0b, TlvInt16, { default: 65535 }),
            activePowerMinPhaseC: OptionalWritableAttribute(0xa0c, TlvInt16, { default: 65535 }),
            activePowerMaxPhaseC: OptionalWritableAttribute(0xa0d, TlvInt16, { default: 65535 }),
            reactivePowerPhaseC: OptionalWritableAttribute(0xa0e, TlvInt16, { default: 65535 }),
            apparentPowerPhaseC: OptionalWritableAttribute(0xa0f, TlvUInt16, { default: 65535 }),
            powerFactorPhaseC: OptionalWritableAttribute(0xa10, TlvInt8.bound({ min: -100, max: 100 }), { default: 0 }),
            averageRmsVoltageMeasurementPeriodPhaseC: OptionalWritableAttribute(0xa11, TlvUInt16, { default: 0 }),
            averageRmsOverVoltageCounterPhaseC: OptionalWritableAttribute(0xa12, TlvUInt16, { default: 0 }),
            averageRmsUnderVoltageCounterPhaseC: OptionalWritableAttribute(0xa13, TlvUInt16, { default: 0 }),
            rmsExtremeOverVoltagePeriodPhaseC: OptionalWritableAttribute(0xa14, TlvUInt16, { default: 0 }),
            rmsExtremeUnderVoltagePeriodPhaseC: OptionalWritableAttribute(0xa15, TlvUInt16, { default: 0 }),
            rmsVoltageSagPeriodPhaseC: OptionalWritableAttribute(0xa16, TlvUInt16, { default: 0 }),
            rmsVoltageSwellPeriodPhaseC: OptionalWritableAttribute(0xa17, TlvUInt16, { default: 0 })
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

    /**
     * Electrical Measurement
     *
     * Attributes related to the electrical properties of a device. This cluster is used by power outlets and other
     * devices that need to provide instantaneous data as opposed to metrology data which should be retrieved from the
     * metering cluster..
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type ElectricalMeasurementCluster = ElectricalMeasurement.Cluster;
export const ElectricalMeasurementCluster = ElectricalMeasurement.Cluster;
ClusterRegistry.register(ElectricalMeasurement.Complete);
