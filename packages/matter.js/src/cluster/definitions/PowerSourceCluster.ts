/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import {
    BaseClusterComponent,
    ClusterComponent,
    ExtensibleCluster,
    validateFeatureSelection,
    extendCluster,
    ClusterForBaseCluster,
    AsConditional
} from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import {
    Attribute,
    FixedAttribute,
    OptionalAttribute,
    OptionalFixedAttribute,
    OptionalEvent,
    EventPriority,
    Cluster as CreateCluster
} from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt8, TlvUInt32, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

export namespace PowerSource {
    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.4
     */
    export const enum PowerSourceStatus {
        /**
         * Indicate the source status is not specified
         */
        Unspecified = 0,

        /**
         * Indicate the source is available and currently supplying power
         */
        Active = 1,

        /**
         * Indicate the source is available, but is not currently supplying power
         */
        Standby = 2,

        /**
         * Indicate the source is not currently available to supply power
         */
        Unavailable = 3
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.5
     */
    export const enum WiredCurrentType {
        /**
         * Indicates AC current
         */
        Ac = 0,

        /**
         * Indicates DC current
         */
        Dc = 1
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.1
     */
    export const enum WiredFault {
        /**
         * The Node detects an unspecified fault on this wired power source.
         */
        Unspecified = 0,

        /**
         * The Node detects the supplied voltage is above maximum supported value for this wired power source.
         */
        OverVoltage = 1,

        /**
         * The Node detects the supplied voltage is below maximum supported value for this wired power source.
         */
        UnderVoltage = 2
    }

    /**
     * Body of the PowerSource wiredFaultChange event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.1
     */
    export const TlvWiredFaultChangeEvent = TlvObject({
        /**
         * This field shall represent the set of faults currently detected, as per Section 11.7.6.11,
         * “ActiveWiredFaults Attribute”.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.1.1
         */
        current: TlvField(0, TlvArray(TlvEnum<WiredFault>(), { maxLength: 8 })),

        /**
         * This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.11,
         * “ActiveWiredFaults Attribute”.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.1.2
         */
        previous: TlvField(1, TlvArray(TlvEnum<WiredFault>(), { maxLength: 8 }))
    });

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.6
     */
    export const enum BatChargeLevel {
        /**
         * Charge level is nominal
         */
        Ok = 0,

        /**
         * Charge level is low, intervention may soon be required.
         */
        Warning = 1,

        /**
         * Charge level is critical, immediate intervention is required
         */
        Critical = 2
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.7
     */
    export const enum BatReplaceability {
        /**
         * The replaceability is unspecified or unknown.
         */
        Unspecified = 0,

        /**
         * The battery is not replaceable.
         */
        NotReplaceable = 1,

        /**
         * The battery is replaceable by the user or customer.
         */
        UserReplaceable = 2,

        /**
         * The battery is replaceable by an authorized factory technician.
         */
        FactoryReplaceable = 3
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.2
     */
    export const enum BatFault {
        /**
         * The Node detects an unspecified fault on this battery power source.
         */
        Unspecified = 0,

        /**
         * The Node detects the temperature of this battery power source is above ideal operating conditions.
         */
        OverTemp = 1,

        /**
         * The Node detects the temperature of this battery power source is below ideal operating conditions.
         */
        UnderTemp = 2
    }

    /**
     * Body of the PowerSource batFaultChange event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.2
     */
    export const TlvBatFaultChangeEvent = TlvObject({
        current: TlvField(0, TlvArray(TlvEnum<BatFault>(), { maxLength: 8 })),
        previous: TlvField(1, TlvArray(TlvEnum<BatFault>(), { maxLength: 8 }))
    });

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.8
     */
    export const enum BatCommonDesignation {
        /**
         * Common type is unknown or unspecified
         */
        Unspecified = 0,

        /**
         * Common type is as specified
         */
        Aaa = 1,

        /**
         * Common type is as specified
         */
        Aa = 2,

        /**
         * Common type is as specified
         */
        C = 3,

        /**
         * Common type is as specified
         */
        D = 4,

        /**
         * Common type is as specified
         */
        "4V5" = 5,

        /**
         * Common type is as specified
         */
        "6V0" = 6,

        /**
         * Common type is as specified
         */
        "9V0" = 7,

        /**
         * Common type is as specified
         */
        "12Aa" = 8,

        /**
         * Common type is as specified
         */
        Aaaa = 9,

        /**
         * Common type is as specified
         */
        A = 10,

        /**
         * Common type is as specified
         */
        B = 11,

        /**
         * Common type is as specified
         */
        F = 12,

        /**
         * Common type is as specified
         */
        N = 13,

        /**
         * Common type is as specified
         */
        No6 = 14,

        /**
         * Common type is as specified
         */
        SubC = 15,

        /**
         * Common type is as specified
         */
        A23 = 16,

        /**
         * Common type is as specified
         */
        A27 = 17,

        /**
         * Common type is as specified
         */
        Ba5800 = 18,

        /**
         * Common type is as specified
         */
        Duplex = 19,

        /**
         * Common type is as specified
         */
        "4Sr44" = 20,

        /**
         * Common type is as specified
         */
        E523 = 21,

        /**
         * Common type is as specified
         */
        E531 = 22,

        /**
         * Common type is as specified
         */
        "15V0" = 23,

        /**
         * Common type is as specified
         */
        "22V5" = 24,

        /**
         * Common type is as specified
         */
        "30V0" = 25,

        /**
         * Common type is as specified
         */
        "45V0" = 26,

        /**
         * Common type is as specified
         */
        "67V5" = 27,

        /**
         * Common type is as specified
         */
        J = 28,

        /**
         * Common type is as specified
         */
        Cr123A = 29,

        /**
         * Common type is as specified
         */
        Cr2 = 30,

        /**
         * Common type is as specified
         */
        "2Cr5" = 31,

        /**
         * Common type is as specified
         */
        CrP2 = 32,

        /**
         * Common type is as specified
         */
        CrV3 = 33,

        /**
         * Common type is as specified
         */
        Sr41 = 34,

        /**
         * Common type is as specified
         */
        Sr43 = 35,

        /**
         * Common type is as specified
         */
        Sr44 = 36,

        /**
         * Common type is as specified
         */
        Sr45 = 37,

        /**
         * Common type is as specified
         */
        Sr48 = 38,

        /**
         * Common type is as specified
         */
        Sr54 = 39,

        /**
         * Common type is as specified
         */
        Sr55 = 40,

        /**
         * Common type is as specified
         */
        Sr57 = 41,

        /**
         * Common type is as specified
         */
        Sr58 = 42,

        /**
         * Common type is as specified
         */
        Sr59 = 43,

        /**
         * Common type is as specified
         */
        Sr60 = 44,

        /**
         * Common type is as specified
         */
        Sr63 = 45,

        /**
         * Common type is as specified
         */
        Sr64 = 46,

        /**
         * Common type is as specified
         */
        Sr65 = 47,

        /**
         * Common type is as specified
         */
        Sr66 = 48,

        /**
         * Common type is as specified
         */
        Sr67 = 49,

        /**
         * Common type is as specified
         */
        Sr68 = 50,

        /**
         * Common type is as specified
         */
        Sr69 = 51,

        /**
         * Common type is as specified
         */
        Sr516 = 52,

        /**
         * Common type is as specified
         */
        Sr731 = 53,

        /**
         * Common type is as specified
         */
        Sr712 = 54,

        /**
         * Common type is as specified
         */
        Lr932 = 55,

        /**
         * Common type is as specified
         */
        A5 = 56,

        /**
         * Common type is as specified
         */
        A10 = 57,

        /**
         * Common type is as specified
         */
        A13 = 58,

        /**
         * Common type is as specified
         */
        A312 = 59,

        /**
         * Common type is as specified
         */
        A675 = 60,

        /**
         * Common type is as specified
         */
        Ac41E = 61,

        /**
         * Common type is as specified
         */
        E10180 = 62,

        /**
         * Common type is as specified
         */
        E10280 = 63,

        /**
         * Common type is as specified
         */
        E10440 = 64,

        /**
         * Common type is as specified
         */
        E14250 = 65,

        /**
         * Common type is as specified
         */
        E14430 = 66,

        /**
         * Common type is as specified
         */
        E14500 = 67,

        /**
         * Common type is as specified
         */
        E14650 = 68,

        /**
         * Common type is as specified
         */
        E15270 = 69,

        /**
         * Common type is as specified
         */
        E16340 = 70,

        /**
         * Common type is as specified
         */
        Rcr123A = 71,

        /**
         * Common type is as specified
         */
        E17500 = 72,

        /**
         * Common type is as specified
         */
        E17670 = 73,

        /**
         * Common type is as specified
         */
        E18350 = 74,

        /**
         * Common type is as specified
         */
        E18500 = 75,

        /**
         * Common type is as specified
         */
        E18650 = 76,

        /**
         * Common type is as specified
         */
        E19670 = 77,

        /**
         * Common type is as specified
         */
        E25500 = 78,

        /**
         * Common type is as specified
         */
        E26650 = 79,

        /**
         * Common type is as specified
         */
        E32600 = 80
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.9
     */
    export const enum BatApprovedChemistry {
        /**
         * Cell chemistry is unspecified or unknown
         */
        Unspecified = 0,

        /**
         * Cell chemistry is alkaline
         */
        Alkaline = 1,

        /**
         * Cell chemistry is lithium carbon fluoride
         */
        LithiumCarbonFluoride = 2,

        /**
         * Cell chemistry is lithium chromium oxide
         */
        LithiumChromiumOxide = 3,

        /**
         * Cell chemistry is lithium copper oxide
         */
        LithiumCopperOxide = 4,

        /**
         * Cell chemistry is lithium iron disulfide
         */
        LithiumIronDisulfide = 5,

        /**
         * Cell chemistry is lithium manganese dioxide
         */
        LithiumManganeseDioxide = 6,

        /**
         * Cell chemistry is lithium thionyl chloride
         */
        LithiumThionylChloride = 7,

        /**
         * Cell chemistry is magnesium
         */
        Magnesium = 8,

        /**
         * Cell chemistry is mercury oxide
         */
        MercuryOxide = 9,

        /**
         * Cell chemistry is nickel oxyhydride
         */
        NickelOxyhydride = 10,

        /**
         * Cell chemistry is silver oxide
         */
        SilverOxide = 11,

        /**
         * Cell chemistry is zinc air
         */
        ZincAir = 12,

        /**
         * Cell chemistry is zinc carbon
         */
        ZincCarbon = 13,

        /**
         * Cell chemistry is zinc chloride
         */
        ZincChloride = 14,

        /**
         * Cell chemistry is zinc manganese dioxide
         */
        ZincManganeseDioxide = 15,

        /**
         * Cell chemistry is lead acid
         */
        LeadAcid = 16,

        /**
         * Cell chemistry is lithium cobalt oxide
         */
        LithiumCobaltOxide = 17,

        /**
         * Cell chemistry is lithium ion
         */
        LithiumIon = 18,

        /**
         * Cell chemistry is lithium ion polymer
         */
        LithiumIonPolymer = 19,

        /**
         * Cell chemistry is lithium iron phosphate
         */
        LithiumIronPhosphate = 20,

        /**
         * Cell chemistry is lithium sulfur
         */
        LithiumSulfur = 21,

        /**
         * Cell chemistry is lithium titanate
         */
        LithiumTitanate = 22,

        /**
         * Cell chemistry is nickel cadmium
         */
        NickelCadmium = 23,

        /**
         * Cell chemistry is nickel hydrogen
         */
        NickelHydrogen = 24,

        /**
         * Cell chemistry is nickel iron
         */
        NickelIron = 25,

        /**
         * Cell chemistry is nickel metal hydride
         */
        NickelMetalHydride = 26,

        /**
         * Cell chemistry is nickel zinc
         */
        NickelZinc = 27,

        /**
         * Cell chemistry is silver zinc
         */
        SilverZinc = 28,

        /**
         * Cell chemistry is sodium ion
         */
        SodiumIon = 29,

        /**
         * Cell chemistry is sodium sulfur
         */
        SodiumSulfur = 30,

        /**
         * Cell chemistry is zinc bromide
         */
        ZincBromide = 31,

        /**
         * Cell chemistry is zinc cerium
         */
        ZincCerium = 32
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.10
     */
    export const enum BatChargeState {
        /**
         * Unable to determine the charging state
         */
        Unknown = 0,

        /**
         * The battery is charging
         */
        IsCharging = 1,

        /**
         * The battery is at full charge
         */
        IsAtFullCharge = 2,

        /**
         * The battery is not charging
         */
        IsNotCharging = 3
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.3
     */
    export const enum BatChargeFault {
        /**
         * The Node detects an unspecified fault on this battery source.
         */
        Unspecified = 0,

        /**
         * The Node detects the ambient temperature is above the nominal range for this battery source.
         */
        AmbientTooHot = 1,

        /**
         * The Node detects the ambient temperature is below the nominal range for this battery source.
         */
        AmbientTooCold = 2,

        /**
         * The Node detects the temperature of this battery source is above the nominal range.
         */
        BatteryTooHot = 3,

        /**
         * The Node detects the temperature of this battery source is below the nominal range.
         */
        BatteryTooCold = 4,

        /**
         * The Node detects this battery source is not present.
         */
        BatteryAbsent = 5,

        /**
         * The Node detects this battery source is over voltage.
         */
        BatteryOverVoltage = 6,

        /**
         * The Node detects this battery source is under voltage.
         */
        BatteryUnderVoltage = 7,

        /**
         * The Node detects the charger for this battery source is over voltage.
         */
        ChargerOverVoltage = 8,

        /**
         * The Node detects the charger for this battery source is under voltage.
         */
        ChargerUnderVoltage = 9,

        /**
         * The Node detects a charging safety timeout for this battery source.
         */
        SafetyTimeout = 10
    }

    /**
     * Body of the PowerSource batChargeFaultChange event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.3
     */
    export const TlvBatChargeFaultChangeEvent = TlvObject({
        current: TlvField(0, TlvArray(TlvEnum<BatChargeFault>(), { maxLength: 16 })),
        previous: TlvField(1, TlvArray(TlvEnum<BatChargeFault>(), { maxLength: 16 }))
    });

    /**
     * These are optional features supported by PowerSourceCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.4
     */
    export enum Feature {
        /**
         * Wired
         *
         * A wired power source
         */
        Wired = "Wired",

        /**
         * Battery
         *
         * A battery power source
         */
        Battery = "Battery",

        /**
         * Rechargeable
         *
         * A rechargeable battery power source (requires Battery feature)
         */
        Rechargeable = "Rechargeable",

        /**
         * Replaceable
         *
         * A replaceable battery power source (requires Battery feature)
         */
        Replaceable = "Replaceable"
    }

    /**
     * These elements and properties are present in all PowerSource clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x2f,
        name: "PowerSource",
        revision: 1,

        features: {
            /**
             * Wired
             *
             * A wired power source
             */
            wired: BitFlag(0),

            /**
             * Battery
             *
             * A battery power source
             */
            battery: BitFlag(1),

            /**
             * Rechargeable
             *
             * A rechargeable battery power source (requires Battery feature)
             */
            rechargeable: BitFlag(2),

            /**
             * Replaceable
             *
             * A replaceable battery power source (requires Battery feature)
             */
            replaceable: BitFlag(3)
        },

        attributes: {
            /**
             * This attribute shall indicate the participation of this power source in providing power to the Node as
             * specified in PowerSourceStatusEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.1
             */
            status: Attribute(0x0, TlvEnum<PowerSourceStatus>()),

            /**
             * This attribute shall indicate the relative preference with which the Node will select this source to
             * provide power. A source with a lower order shall be selected by the Node to provide power before any
             * other source with a higher order, if the lower order source is available (see Status).
             *
             * Note, Order is read-only and therefore NOT intended to allow clients control over power source selection.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.2
             */
            order: Attribute(0x1, TlvUInt8, { persistent: true }),

            /**
             * This attribute shall provide a user-facing description of this source, used to distinguish it from other
             * power sources, e.g. "DC Power", "Primary Battery" or "Battery back-up". This attribute shall NOT be used
             * to convey information such as battery form factor, or chemistry.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.3
             */
            description: FixedAttribute(0x2, TlvString.bound({ maxLength: 60 }))
        }
    });

    /**
     * A PowerSourceCluster supports these elements if it supports feature Wired.
     */
    export const WiredComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute shall indicate the assessed RMS or DC voltage currently provided by the hard-wired
             * source, in mV (millivolts). A value of NULL shall indicate the Node is currently unable to assess the
             * value. If the wired source is not connected, but the Node is still able to assess a value, then the
             * assessed value may be reported.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.4
             */
            wiredAssessedInputVoltage: OptionalAttribute(0x3, TlvNullable(TlvUInt32), { omitChanges: true }),

            /**
             * This attribute shall indicate the assessed frequency of the voltage, currently provided by the
             * hard-wired source, in Hz. A value of NULL shall indicate the Node is currently unable to assess the
             * value. If the wired source is not connected, but the Node is still able to assess a value, then the
             * assessed value may be reported.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.5
             */
            wiredAssessedInputFrequency: OptionalAttribute(0x4, TlvNullable(TlvUInt16), { omitChanges: true }),

            /**
             * This attribute shall indicate the type of current the Node expects to be provided by the hard- wired
             * source as specified in WiredCurrentTypeEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.6
             */
            wiredCurrentType: FixedAttribute(0x5, TlvEnum<WiredCurrentType>()),

            /**
             * This attribute shall indicate the assessed instantaneous current draw of the Node on the hard- wired
             * source, in mA (milliamps). A value of NULL shall indicate the Node is currently unable to assess the
             * value. If the wired source is not connected, but the Node is still able to assess a value, then the
             * assessed value may be reported.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.7
             */
            wiredAssessedCurrent: OptionalAttribute(0x6, TlvNullable(TlvUInt32), { omitChanges: true }),

            /**
             * This attribute shall indicate the nominal voltage, printed as part of the Node’s regulatory compliance
             * label in mV (millivolts), expected to be provided by the hard-wired source.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.8
             */
            wiredNominalVoltage: OptionalFixedAttribute(0x7, TlvUInt32),

            /**
             * This attribute shall indicate the maximum current, printed as part of the Node’s regulatory compliance
             * label in mA (milliamps), expected to be provided by the hard-wired source.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.9
             */
            wiredMaximumCurrent: OptionalFixedAttribute(0x8, TlvUInt32),

            /**
             * This attribute shall indicate if the Node detects that the hard-wired power source is properly connected.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.10
             */
            wiredPresent: OptionalAttribute(0x9, TlvBoolean),

            /**
             * This attribute shall indicate the set of wired faults currently detected by the Node on this power
             * source. This set is represented as a list of WiredFaultEnum. When the Node detects a fault has been
             * raised, the appropriate WiredFaultEnum value shall be added to this list, provided it is not already
             * present. This list shall NOT contain more than one instance of a specific WiredFaultEnum value. When the
             * Node detects all conditions contributing to a fault have been cleared, the corresponding WiredFaultEnum
             * value shall be removed from this list. An empty list shall indicate there are currently no active
             * faults. The order of this list SHOULD have no significance. Clients interested in monitoring changes in
             * active faults may subscribe to this attribute, or they may subscribe to WiredFaultChange.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.11
             */
            activeWiredFaults: OptionalAttribute(0xa, TlvArray(TlvEnum<WiredFault>(), { length: 8 }))
        },

        events: {
            /**
             * The WiredFaultChange Event shall be generated when the set of wired faults currently detected by the
             * Node on this wired power source changes. This event shall correspond to a change in value of
             * ActiveWiredFaults.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.1
             */
            wiredFaultChange: OptionalEvent(0x0, EventPriority.Info, TlvWiredFaultChangeEvent)
        }
    });

    /**
     * A PowerSourceCluster supports these elements if it supports feature Battery.
     */
    export const BatteryComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute shall indicate the currently measured output voltage of the battery in mV (millivolts). A
             * value of NULL shall indicate the Node is currently unable to assess the value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.12
             */
            batVoltage: OptionalAttribute(0xb, TlvNullable(TlvUInt32), { omitChanges: true }),

            /**
             * This attribute shall indicate the estimated percentage of battery charge remaining until the battery
             * will no longer be able to provide power to the Node. Values are expressed in half percent units, ranging
             * from 0 to 200. E.g. a value of 48 is equivalent to 24%. A value of NULL shall indicate the Node is
             * currently unable to assess the value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.13
             */
            batPercentRemaining: OptionalAttribute(
                0xc,
                TlvNullable(TlvUInt8.bound({ max: 200 })),
                { omitChanges: true }
            ),

            /**
             * This attribute shall indicate the estimated time in seconds before the battery will no longer be able to
             * provide power to the Node. A value of NULL shall indicate the Node is currently unable to assess the
             * value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.14
             */
            batTimeRemaining: OptionalAttribute(0xd, TlvNullable(TlvUInt32), { omitChanges: true }),

            /**
             * This attribute shall indicate a coarse ranking of the charge level of the battery, used to indicate when
             * intervention is required as specified in BatChargeLevelEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.15
             */
            batChargeLevel: Attribute(0xe, TlvEnum<BatChargeLevel>()),

            /**
             * This attribute shall indicate if the battery needs to be replaced. Replacement may be simple routine
             * maintenance, such as with a single use, non-rechargeable cell. Replacement, however, may also indicate
             * end of life, or serious fault with a rechargeable or even non-replaceable cell.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.16
             */
            batReplacementNeeded: Attribute(0xf, TlvBoolean),

            /**
             * This attribute shall indicate the replaceability of the battery as specified in BatReplaceabilityEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.17
             */
            batReplaceability: FixedAttribute(0x10, TlvEnum<BatReplaceability>()),

            /**
             * This attribute shall indicate whether the Node detects that the batteries are properly installed.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.18
             */
            batPresent: OptionalAttribute(0x11, TlvBoolean),

            /**
             * This attribute shall indicate the set of battery faults currently detected by the Node on this power
             * source. This set is represented as a list of BatFaultEnum. When the Node detects a fault has been
             * raised, the appropriate BatFaultEnum value shall be added to this list, provided it is not already
             * present. This list shall NOT contain more than one instance of a specific BatFaultEnum value. When the
             * Node detects all conditions contributing to a fault have been cleared, the corresponding BatFaultEnum
             * value shall be removed from this list. An empty list shall indicate there are currently no active
             * faults. The order of this list SHOULD have no significance. Clients interested in monitoring changes in
             * active faults may subscribe to this attribute, or they may subscribe to Section 11.7.7.2,
             * “BatFaultChange Event”.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.19
             */
            activeBatFaults: OptionalAttribute(0x12, TlvArray(TlvEnum<BatFault>(), { length: 8 }))
        },

        events: {
            /**
             * The BatFaultChange Event shall be generated when the set of battery faults currently detected by the
             * Node on this battery power source changes. This event shall correspond to a change in value of
             * ActiveBatFaults.
             *
             * This field shall represent the set of faults currently detected, as per Section 11.7.6.19,
             * “ActiveBatFaults Attribute”.
             *
             * This field shall represent the set of faults detected prior to this change event, as per Section
             * 11.7.6.19, “ActiveBatFaults Attribute”.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.2
             */
            batFaultChange: OptionalEvent(0x1, EventPriority.Info, TlvBatFaultChangeEvent)
        }
    });

    /**
     * A PowerSourceCluster supports these elements if it supports feature Replaceable.
     */
    export const ReplaceableComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute shall provide a user-facing description of this battery, which SHOULD contain information
             * required to identify a replacement, such as form factor, chemistry or preferred manufacturer.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.20
             */
            batReplacementDescription: FixedAttribute(0x13, TlvString.bound({ maxLength: 60 })),

            /**
             * This attribute shall indicate the ID of the common or colloquial designation of the battery, as
             * specified in BatCommonDesignationEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.21
             */
            batCommonDesignation: OptionalFixedAttribute(0x14, TlvEnum<BatCommonDesignation>()),

            /**
             * This attribute shall indicate the string representing the ANSI designation for the battery as specified
             * in ANSI C18.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.22
             */
            batAnsiDesignation: OptionalFixedAttribute(0x15, TlvString.bound({ maxLength: 20 })),

            /**
             * This attribute shall indicate the string representing the IEC designation for the battery as specified
             * in IEC 60086.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.23
             */
            batIecDesignation: OptionalFixedAttribute(0x16, TlvString.bound({ maxLength: 20 })),

            /**
             * This attribute shall indicate the ID of the preferred chemistry of the battery source as specified in
             * BatApprovedChemistryEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.24
             */
            batApprovedChemistry: OptionalFixedAttribute(0x17, TlvEnum<BatApprovedChemistry>()),

            /**
             * This attribute shall indicate the preferred minimum charge capacity rating in mAh of individual, user-
             * or factory-serviceable battery cells or packs in the battery source.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.25
             */
            batCapacity: OptionalFixedAttribute(0x18, TlvUInt32),

            /**
             * This attribute shall indicate the quantity of individual, user- or factory-serviceable battery cells or
             * packs in the battery source.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.26
             */
            batQuantity: FixedAttribute(0x19, TlvUInt8)
        }
    });

    /**
     * A PowerSourceCluster supports these elements if it supports feature Rechargeable.
     */
    export const RechargeableComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute shall indicate the current state of the battery source with respect to charging as
             * specified in BatChargeStateEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.27
             */
            batChargeState: Attribute(0x1a, TlvEnum<BatChargeState>()),

            /**
             * This attribute shall indicate the estimated time in seconds before the battery source will be at full
             * charge. A value of NULL shall indicate the Node is currently unable to assess the value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.28
             */
            batTimeToFullCharge: OptionalAttribute(0x1b, TlvNullable(TlvUInt32), { omitChanges: true }),

            /**
             * This attribute shall indicate whether the Node can remain operational while the battery source is
             * charging.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.29
             */
            batFunctionalWhileCharging: Attribute(0x1c, TlvBoolean),

            /**
             * This attribute shall indicate assessed current in mA (milliamps) presently supplied to charge the
             * battery source. A value of NULL shall indicate the Node is currently unable to assess the value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.30
             */
            batChargingCurrent: OptionalAttribute(0x1d, TlvNullable(TlvUInt32), { omitChanges: true }),

            /**
             * This attribute shall indicate the set of charge faults currently detected by the Node on this power
             * source. This set is represented as a list of BatChargeFaultEnum. When the Node detects a fault has been
             * raised, the appropriate BatChargeFaultEnum value shall be added to this list, provided it is not already
             * present. This list shall NOT contain more than one instance of a specific BatChargeFaultEnum value. When
             * the Node detects all conditions contributing to a fault have been cleared, the corresponding
             * BatChargeFaultEnum value shall be removed from this list. An empty list shall indicate there are
             * currently no active faults. The order of this list SHOULD have no significance. Clients interested in
             * monitoring changes in active faults may subscribe to this attribute, or they may subscribe to the
             * BatFaultChange event.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.31
             */
            activeBatChargeFaults: OptionalAttribute(0x1e, TlvArray(TlvEnum<BatChargeFault>(), { length: 16 }))
        },

        events: {
            /**
             * The BatChargeFaultChange Event shall be generated when the set of charge faults currently
             *
             * detected by the Node on this battery power source changes. This event shall correspond to a change in
             * value of ActiveBatChargeFaults.
             *
             * This field shall represent the set of faults currently detected, as per Section 11.7.6.31,
             * “ActiveBatChargeFaults Attribute”.
             *
             * This field shall represent the set of faults detected prior to this change event, as per Section
             * 11.7.6.31, “ActiveBatChargeFaults Attribute”.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.3
             */
            batChargeFaultChange: OptionalEvent(0x2, EventPriority.Info, TlvBatChargeFaultChangeEvent)
        }
    });

    /**
     * Power Source
     *
     * This cluster is used to describe the configuration and capabilities of a physical power source that provides
     * power to the Node. In case the Node has multiple power sources, each is described by its own Power Source
     * cluster. The Power Source Configuration cluster referenced by the Root Node device type for the Node provides
     * the overview of the power source(s) of the Node.
     *
     * PowerSourceCluster supports optional features that you can enable with the PowerSourceCluster.with() factory
     * method.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.7
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a PowerSource cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a PowerSource cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, WiredComponent, { wired: true });
            extendCluster(cluster, BatteryComponent, { battery: true });
            extendCluster(cluster, ReplaceableComponent, { replaceable: true });
            extendCluster(cluster, RechargeableComponent, { rechargeable: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { wired: true } ? typeof WiredComponent : {})
        & (SF extends { battery: true } ? typeof BatteryComponent : {})
        & (SF extends { replaceable: true } ? typeof ReplaceableComponent : {})
        & (SF extends { rechargeable: true } ? typeof RechargeableComponent : {});

    const WIRED = { wired: true };
    const BAT = { battery: true };
    const REPLC = { replaceable: true };
    const RECHG = { rechargeable: true };

    /**
     * This cluster supports all PowerSource features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = CreateCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,

        attributes: {
            ...Cluster.attributes,
            wiredAssessedInputVoltage: AsConditional(
                WiredComponent.attributes.wiredAssessedInputVoltage,
                { optionalIf: [WIRED] }
            ),
            wiredAssessedInputFrequency: AsConditional(
                WiredComponent.attributes.wiredAssessedInputFrequency,
                { optionalIf: [WIRED] }
            ),
            wiredCurrentType: AsConditional(WiredComponent.attributes.wiredCurrentType, { mandatoryIf: [WIRED] }),
            wiredAssessedCurrent: AsConditional(
                WiredComponent.attributes.wiredAssessedCurrent,
                { optionalIf: [WIRED] }
            ),
            wiredNominalVoltage: AsConditional(WiredComponent.attributes.wiredNominalVoltage, { optionalIf: [WIRED] }),
            wiredMaximumCurrent: AsConditional(WiredComponent.attributes.wiredMaximumCurrent, { optionalIf: [WIRED] }),
            wiredPresent: AsConditional(WiredComponent.attributes.wiredPresent, { optionalIf: [WIRED] }),
            activeWiredFaults: AsConditional(WiredComponent.attributes.activeWiredFaults, { optionalIf: [WIRED] }),
            batVoltage: AsConditional(BatteryComponent.attributes.batVoltage, { optionalIf: [BAT] }),
            batPercentRemaining: AsConditional(BatteryComponent.attributes.batPercentRemaining, { optionalIf: [BAT] }),
            batTimeRemaining: AsConditional(BatteryComponent.attributes.batTimeRemaining, { optionalIf: [BAT] }),
            batChargeLevel: AsConditional(BatteryComponent.attributes.batChargeLevel, { mandatoryIf: [BAT] }),
            batReplacementNeeded: AsConditional(
                BatteryComponent.attributes.batReplacementNeeded,
                { mandatoryIf: [BAT] }
            ),
            batReplaceability: AsConditional(BatteryComponent.attributes.batReplaceability, { mandatoryIf: [BAT] }),
            batPresent: AsConditional(BatteryComponent.attributes.batPresent, { optionalIf: [BAT] }),
            activeBatFaults: AsConditional(BatteryComponent.attributes.activeBatFaults, { optionalIf: [BAT] }),
            batReplacementDescription: AsConditional(
                ReplaceableComponent.attributes.batReplacementDescription,
                { mandatoryIf: [REPLC] }
            ),
            batCommonDesignation: AsConditional(
                ReplaceableComponent.attributes.batCommonDesignation,
                { optionalIf: [REPLC] }
            ),
            batAnsiDesignation: AsConditional(
                ReplaceableComponent.attributes.batAnsiDesignation,
                { optionalIf: [REPLC] }
            ),
            batIecDesignation: AsConditional(
                ReplaceableComponent.attributes.batIecDesignation,
                { optionalIf: [REPLC] }
            ),
            batApprovedChemistry: AsConditional(
                ReplaceableComponent.attributes.batApprovedChemistry,
                { optionalIf: [REPLC] }
            ),
            batCapacity: AsConditional(ReplaceableComponent.attributes.batCapacity, { optionalIf: [REPLC] }),
            batQuantity: AsConditional(ReplaceableComponent.attributes.batQuantity, { mandatoryIf: [REPLC] }),
            batChargeState: AsConditional(RechargeableComponent.attributes.batChargeState, { mandatoryIf: [RECHG] }),
            batTimeToFullCharge: AsConditional(
                RechargeableComponent.attributes.batTimeToFullCharge,
                { optionalIf: [RECHG] }
            ),
            batFunctionalWhileCharging: AsConditional(
                RechargeableComponent.attributes.batFunctionalWhileCharging,
                { mandatoryIf: [RECHG] }
            ),
            batChargingCurrent: AsConditional(
                RechargeableComponent.attributes.batChargingCurrent,
                { optionalIf: [RECHG] }
            ),
            activeBatChargeFaults: AsConditional(
                RechargeableComponent.attributes.activeBatChargeFaults,
                { optionalIf: [RECHG] }
            )
        },

        events: {
            wiredFaultChange: AsConditional(WiredComponent.events.wiredFaultChange, { optionalIf: [WIRED] }),
            batFaultChange: AsConditional(BatteryComponent.events.batFaultChange, { optionalIf: [BAT] }),
            batChargeFaultChange: AsConditional(
                RechargeableComponent.events.batChargeFaultChange,
                { optionalIf: [RECHG] }
            )
        }
    });
}

export type PowerSourceCluster = typeof PowerSource.Cluster;
export const PowerSourceCluster = PowerSource.Cluster;
