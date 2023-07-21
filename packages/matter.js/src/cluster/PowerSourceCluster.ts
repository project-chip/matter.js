/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    OptionalEvent, EventPriority, Cluster, Attribute, OptionalAttribute, FixedAttribute, OptionalFixedAttribute,
    ClusterExtend
} from "./Cluster.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvEnum, TlvUInt16, TlvUInt32, TlvUInt8 } from "../tlv/TlvNumber.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TlvBoolean } from "../tlv/TlvBoolean.js";
import { TlvString } from "../tlv/TlvString.js";
import { MatterCoreSpecificationV1_1 } from "../spec/Specifications.js";

/**
 * ====================== IMPORTANT INFORMATION ======================
 *
 * This file outdated and will soon be auto generated based on the Cluster Schemas in schema
 * directory!! They are still used within the codebase, but will be changed soon!
 *
 * ====================== IMPORTANT INFORMATION ======================
 */

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.5.1 */
export const enum WiredFaultEnum {
    /** Unspecified fault on this wired power source. */
    Unspecified = 0x00,

    /** Supplied voltage is above maximum supported value. */
    OverVoltage = 0x01,

    /** Supplied voltage is below maximum supported value. */
    UnderVoltage = 0x02,
}

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.5.2 */
export const enum BatFaultEnum {
    /** Unspecified fault on this battery power source. */
    Unspecified = 0x00,

    /** Temperature of this battery power source is above ideal operating conditions. */
    OverTemp = 0x01,

    /** Temperature of this battery power source is below ideal operating conditions. */
    UnderTemp = 0x02,
}

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.5.3 */
export const enum BatChargeFaultEnum {
    /** Unspecified fault on this battery source.*/
    Unspecified = 0x00,

    /** Ambient temperature is above the nominal range  */
    AmbientTooHot = 0x01,

    /** Ambient temperature is below the nominal range . */
    AmbientTooCold = 0x02,

    /** Temperature of this battery source is above the nominal range.*/
    BatteryTooHot = 0x03,

    /** Temperature of this battery source is below the nominal range. */
    BatteryTooCold = 0x04,

    /** Battery source is not present. */
    BatteryAbsent = 0x05,

    /** Battery source is over voltage. */
    BatteryOverVoltage = 0x06,

    /** Battery source is under voltage. */
    BatteryUnderVoltage = 0x07,

    /** Charger for this battery source is over voltage. */
    ChargerOverVoltage = 0x08,

    /** Charger for this battery source is under voltage. */
    ChargerUnderVoltage = 0x09,

    /** Charging safety timeout for this battery source. */
    SafetyTimeout = 0x0A,
}

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.1. Table 92 */
export const enum PowerSourceStatusEnum {
    /** SHALL indicate the source status is not specified */
    Unspecified = 0x00,

    /** SHALL indicate the source is available and currently supplying power */
    Active = 0x01,

    /** SHALL indicate the source is available, but is not currently supplying power */
    Standby = 0x02,

    /** SHALL indicate the source is not currently available to supply power */
    Unavailable = 0x03,
}

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.1. Table 93 */
export const enum WiredCurrentTypeEnum {
    /** SHALL indicate AC current */
    AC = 0x00,

    /** SHALL indicate DC current */
    DC = 0x01,
}

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.1. Table 94 */
export const enum BatChargeLevelEnum {
    /** Charge level is nominal */
    OK = 0x00,

    /** Charge level is low, intervention may soon be required. */
    Warning = 0x01,

    /** Charge level is critical, immediate intervention is required */
    Critical = 0x02,
}

/** @see {@link MatterCoreSpecificationV1_1} § Table 95 */
export const enum BatReplaceabilityEnum {
    /** The replaceability is unspecified or unknown. */
    Unspecified = 0x00,

    /** The battery is not replaceable. */
    NotReplaceable = 0x01,

    /** The battery is replaceable by the user or customer. */
    UserReplaceable = 0x02,

    /** The battery is replaceable by an authorized factory technician */
    FactoryReplaceable = 0x03,
}

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.1. Table 98 */
export const enum BatChargeStateEnum {
    /** Unable to determine the charging state */
    Unknown = 0x00,

    /** The battery is charging */
    IsCharging = 0x01,

    /** The battery is at full charge */
    IsAtFullCharge = 0x02,

    /** The battery is not charging */
    IsNotCharging = 0x03,
}

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.1. Table 96 */
export const enum BatCommonDesignationEnum {
    BatteryDesignationUnspecified = 0,
    BatteryDesignationAAA = 1,
    BatteryDesignationAA = 2,
    BatteryDesignationC = 3,
    BatteryDesignationD = 4,
    BatteryDesignation4v5 = 5,
    BatteryDesignation6v0 = 6,
    BatteryDesignation9v0 = 7,
    BatteryDesignation1_2AA = 8,
    BatteryDesignationAAAA = 9,
    BatteryDesignationA = 10,
    BatteryDesignationB = 11,
    BatteryDesignationF = 12,
    BatteryDesignationN = 13,
    BatteryDesignationNo6 = 14,
    BatteryDesignationSubC = 15,
    BatteryDesignationA23 = 16,
    BatteryDesignationA27 = 17,
    BatteryDesignationBA5800 = 18,
    BatteryDesignationDuplex = 19,
    BatteryDesignation4SR44 = 20,
    BatteryDesignation523 = 21,
    BatteryDesignation531 = 22,
    BatteryDesignation15v0 = 23,
    BatteryDesignation22v5 = 24,
    BatteryDesignation30v0 = 25,
    BatteryDesignation45v0 = 26,
    BatteryDesignation67v5 = 27,
    BatteryDesignationJ = 28,
    BatteryDesignationCR123A = 29,
    BatteryDesignationCR2 = 30,
    BatteryDesignation2CR5 = 31,
    BatteryDesignationCR_P2 = 32,
    BatteryDesignationCR_V3 = 33,
    BatteryDesignationSR41 = 34,
    BatteryDesignationSR43 = 35,
    BatteryDesignationSR44 = 36,
    BatteryDesignationSR45 = 37,
    BatteryDesignationSR48 = 38,
    BatteryDesignationSR54 = 39,
    BatteryDesignationSR55 = 40,
    BatteryDesignationSR57 = 41,
    BatteryDesignationSR58 = 42,
    BatteryDesignationSR59 = 43,
    BatteryDesignationSR60 = 44,
    BatteryDesignationSR63 = 45,
    BatteryDesignationSR64 = 46,
    BatteryDesignationSR65 = 47,
    BatteryDesignationSR66 = 48,
    BatteryDesignationSR67 = 49,
    BatteryDesignationSR68 = 50,
    BatteryDesignationSR69 = 51,
    BatteryDesignationSR516 = 52,
    BatteryDesignationSR731 = 53,
    BatteryDesignationSR712 = 54,
    BatteryDesignationLR932 = 55,
    BatteryDesignationA5 = 56,
    BatteryDesignationA10 = 57,
    BatteryDesignationA13 = 58,
    BatteryDesignationA312 = 59,
    BatteryDesignationA675 = 60,
    BatteryDesignationAC41E = 61,
    BatteryDesignation10180 = 62,
    BatteryDesignation10280 = 63,
    BatteryDesignation10440 = 64,
    BatteryDesignation14250 = 65,
    BatteryDesignation14430 = 66,
    BatteryDesignation14500 = 67,
    BatteryDesignation14650 = 68,
    BatteryDesignation15270 = 69,
    BatteryDesignation16340 = 70,
    BatteryDesignationRCR123A = 71,
    BatteryDesignation17500 = 72,
    BatteryDesignation17670 = 73,
    BatteryDesignation18350 = 74,
    BatteryDesignation18500 = 75,
    BatteryDesignation18650 = 76,
    BatteryDesignation19670 = 77,
    BatteryDesignation25500 = 78,
    BatteryDesignation26650 = 79,
    BatteryDesignation32600 = 80,
}

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.1. Table 97 */
export const enum BatApprovedChemistryEnum {
    Unspecified = 0,
    Alkaline = 1,
    LithiumCarbonFluoride = 2,
    LithiumChromiumOxide = 3,
    LithiumCopperOxide = 4,
    LithiumIronDisulfide = 5,
    LithiumManganeseDioxide = 6,
    LithiumThionylChloride = 7,
    Magnesium = 8,
    MercuryOxide = 9,
    NickelOxyhydride = 10,
    SilverOxide = 11,
    ZincAir = 12,
    ZincCarbon = 13,
    ZincChloride = 14,
    ZincManganeseDioxide = 15,
    LeadAcid = 16,
    LithiumCobaltOxide = 17,
    LithiumIon = 18,
    LithiumIonPolymer = 19,
    LithiumIronPhosphate = 20,
    LithiumSulfur = 21,
    LithiumTitanate = 22,
    NickelCadmium = 23,
    NickelHydrogen = 24,
    NickelIron = 25,
    NickelMetalHydride = 26,
    NickelZinc = 27,
    SilverZinc = 28,
    SodiumIon = 29,
    SodiumSulfur = 30,
    ZincBromide = 31,
    ZincCerium = 32,
}

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.2 Table 99 */
const WiredFaultChangeEvent = TlvObject({
    /** SHALL indicate a change in the set of wired faults  */
    current: TlvField(0, TlvArray(TlvEnum<WiredFaultEnum>(), { maxLength: 8 })),
    previous: TlvField(1, TlvArray(TlvEnum<WiredFaultEnum>(), { maxLength: 8 })),
});

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.2 Table 100 */
const BatFaultChangeEvent = TlvObject({
    /** SHALL indicate a change in the set of battery faults */
    current: TlvField(0, TlvArray(TlvEnum<BatFaultEnum>(), { maxLength: 8 })),
    previous: TlvField(1, TlvArray(TlvEnum<BatFaultEnum>(), { maxLength: 8 })),
});

/** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.2 Table 101 */
const BatChargeFaultChangeEvent = TlvObject({
    /**  SHALL indicate a change in the set of charge faults */
    current: TlvField(0, TlvArray(TlvEnum<BatChargeFaultEnum>(), { maxLength: 16 })),
    previous: TlvField(1, TlvArray(TlvEnum<BatChargeFaultEnum>(), { maxLength: 16 })),
});


const ReplaceableAttributes = {
    /** SHALL provide a user-facing description of this battery, which SHOULD contain information required to identify a replacement, such as form factor, chemistry or preferred manufacturer. */
    batReplacementDescription: FixedAttribute(0x0013, TlvString.bound({ maxLength: 60 })),

    /**  SHALL indicate the ID of the datatype or colloquial designation of the battery */
    batCommonDesignation: OptionalFixedAttribute(0x0014, TlvEnum<BatCommonDesignationEnum>()),

    /**  SHALL indicate the string representing the ANSI designation for the battery as specified in ANSI C18.*/
    batANSIDesignation: OptionalFixedAttribute(0x0015, TlvString.bound({ maxLength: 20 })),

    /**  SHALL indicate the string representing the IEC designation for the battery as specified in IEC 60086.*/
    batIECDesignation: OptionalFixedAttribute(0x0016, TlvString.bound({ maxLength: 20 })),

    /** SHALL indicate the ID of the preferred chemistry of the battery source */
    batApprovedChemistry: OptionalFixedAttribute(0x0017, TlvEnum<BatApprovedChemistryEnum>()),

    /** SHALL indicate the preferred minimum charge capacity rating in mAh */
    batCapacity: OptionalFixedAttribute(0x0018, TlvUInt32),

    /** SHALL indicate the quantity of individual, user- or factory-serviceable battery cells or packs in the battery source. */
    batQuantity: FixedAttribute(0x0019, TlvUInt8),
};

const RechargeableAttributes = {
    /**  SHALL indicate the current state of the battery source with respect to charging.*/
    batChargeState: Attribute(0x001A, TlvEnum<BatChargeStateEnum>()),

    /** SHALL indicate the estimated time in seconds before the battery source will be at full charge. */
    batTimeToFullCharge: OptionalAttribute(0x001B, TlvNullable(TlvUInt32)),

    /**  SHALL indicate whether the Node can remain operational while the battery source is charging. */
    batFunctionalWhileCharging: Attribute(0x001C, TlvBoolean),

    /**  SHALL indicate assessed current in mA (milliamps) presently supplied to charge the battery source. */
    batChargingCurrent: OptionalAttribute(0x001D, TlvNullable(TlvUInt32)),

    /** SHALL indicate the set of charge faults currently detected by the Node on this power source */
    activeBatChargeFaults: OptionalAttribute(0x001E, TlvArray(TlvEnum<BatChargeFaultEnum>(), { maxLength: 16 })),
};

const RechargeableEvents = {
    /** SHALL indicate a change in the set of charge faults currently detected*/
    batChargeFaultChange: OptionalEvent(0x2, EventPriority.Info, BatChargeFaultChangeEvent),
}

/**
 * This cluster is used to describe the configuration and capabilities of a physical power source that
 * provides power to the Node. In case the Node has multiple power sources, each is described by its
 * own Power Source cluster. The Power Source Configuration cluster referenced by the Root Node
 * device type for the Node provides the overview of the power source(s) of the Node.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.7
*/
const PowerSourceBaseCluster = Cluster({
    id: 0x2f,
    name: "PowerSource",
    revision: 1,

    /** @see {@link MatterCoreSpecificationV1_1} § 11.7.4 */
    features: {
        /**  Wired power source */
        wired: BitFlag(0),

        /** Battery power source */
        battery: BitFlag(1),

        /** Rechargeable battery power source (requires Battery feature) */
        rechargeable: BitFlag(2),

        /** Replaceable battery power source (requires Battery feature) */
        replaceable: BitFlag(3),
    },

    /** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.1 */
    attributes: {
        /** SHALL indicate the participation of this power source in providing power to the Node. */
        status: Attribute(0x0000, TlvEnum<PowerSourceStatusEnum>()),

        /** SHALL indicate the relative preference with which the Node will select this source to provide power. */
        order: Attribute(0x0001, TlvUInt8, { persistent: true }),

        /** SHALL provide a user-facing description of this source */
        description: FixedAttribute(0x0002, TlvString.bound({ maxLength: 60 })),
    }
});

export const WiredPowerSourceCluster = ClusterExtend(PowerSourceBaseCluster, {
    supportedFeatures: {
        wired: true,
        battery: false,
        rechargeable: false,
        replaceable: false,
    },
    attributes: {
        /** SHALL indicate the assessed RMS or DC voltage currently provided by the hard-wired source, in mV (millivolts) */
        wiredAssessedInputVoltage: OptionalAttribute(0x0003, TlvNullable(TlvUInt32)),

        /** SHALL indicate the assessed frequency of the voltage, currently provided by the hardwired source, in Hz. */
        wiredAssessedInputFrequency: OptionalAttribute(0x0004, TlvNullable(TlvUInt16)),

        /** SHALL indicate the type of current the Node expects to be provided by the hard-wired source. */
        wiredCurrentType: FixedAttribute(0x0005, TlvEnum<WiredCurrentTypeEnum>()),

        /** SHALL indicate the assessed instantaneous current draw of the Node on the hard-wired source, in mA (milliamps) */
        wiredAssessedCurrent: OptionalAttribute(0x0006, TlvNullable(TlvUInt32)),

        /** SHALL indicate the nominal voltage, printed as part of the Node’s regulatory compliance label in mV (millivolts), expected to be provided by the hard-wired source. */
        wiredNominalVoltage: OptionalFixedAttribute(0x0007, TlvUInt32),

        /** SHALL indicate the maximum current, printed as part of the Node’s regulatory compliance label in mA (milliamps), expected to be provided by the hard-wired source. */
        wiredMaximumCurrent: OptionalFixedAttribute(0x0008, TlvUInt32),

        /** SHALL indicate if  that the hard-wired power source is properly connected. */
        wiredPresent: OptionalAttribute(0x0009, TlvBoolean),

        /** SHALL indicate the set of wired faults currently detected  */
        activeWiredFaults: OptionalAttribute(0x000A, TlvArray(TlvEnum<WiredFaultEnum>(), { maxLength: 8 })),
    },

    /** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.2. */
    events: {
        /** SHALL indicate a change in the set of wired faults currently detected  */
        wiredFaultChange: OptionalEvent(0x0, EventPriority.Info, WiredFaultChangeEvent),
    },

});

export const BatteryPowerSourceCluster = ClusterExtend(PowerSourceBaseCluster, {
    supportedFeatures: {
        wired: false,
        battery: true,
        rechargeable: false,
        replaceable: false,
    },
    attributes: {
        /** SHALL indicate the currently measured output voltage of the battery in mV (millivolts) */
        batVoltage: OptionalAttribute(0x000B, TlvNullable(TlvUInt32)),

        /**  SHALL indicate the estimated percentage of battery charge remaining until the battery will no longer be able to provide power to the Node*/
        batPercentRemaining: OptionalAttribute(0x000C, TlvNullable(TlvUInt8.bound({ max: 0xc8 }))),

        /** SHALL indicate the estimated time in seconds before the battery will no longer be able to provide power to the Node.  */
        batTimeRemaining: OptionalAttribute(0x000D, TlvNullable(TlvUInt32)),

        /** SHALL indicate a coarse ranking of the charge level of the battery, used to indicate when intervention is required. */
        batChargeLevel: Attribute(0x000E, TlvEnum<BatChargeLevelEnum>()),

        /** SHALL indicate if the battery needs to be replaced. Replacement MAY be simple routine maintenance */
        batReplacementNeeded: Attribute(0x000F, TlvBoolean),

        /**  SHALL indicate the replaceability of the battery*/
        batReplaceability: FixedAttribute(0x0010, TlvEnum<BatReplaceabilityEnum>()),

        /** SHALL indicate whether the batteries are properly installed. */
        batPresent: OptionalAttribute(0x0011, TlvBoolean),

        /**  SHALL indicate the set of battery faults currently detected  */
        activeBatFaults: OptionalAttribute(0x0012, TlvArray(TlvEnum<BatFaultEnum>(), { maxLength: 8 })),
    },

    /** @see {@link MatterCoreSpecificationV1_1} § 11.7.6.2. */
    events: {
        /** SHALL indicate a change in the set of battery faults currently detected */
        batFaultChange: OptionalEvent(0x1, EventPriority.Info, BatFaultChangeEvent),
    },
});

export const ReplaceableBatteryPowerSourceCluster = ClusterExtend(BatteryPowerSourceCluster, {
    supportedFeatures: {
        wired: false,
        battery: true,
        rechargeable: false,
        replaceable: true,
    },
    attributes: ReplaceableAttributes,
});

export const RechargeableBatteryPowerSourceCluster = ClusterExtend(BatteryPowerSourceCluster, {
    supportedFeatures: {
        wired: false,
        battery: true,
        rechargeable: true,
        replaceable: false,
    },
    attributes: RechargeableAttributes,
    events: RechargeableEvents,
});

export const RechargeableAndReplaceableBatteryPowerSourceCluster = ClusterExtend(ReplaceableBatteryPowerSourceCluster, {
    supportedFeatures: {
        wired: false,
        battery: true,
        rechargeable: true,
        replaceable: true,
    },
    attributes: RechargeableAttributes,
    events: RechargeableEvents,
});
