/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvBoolean } from "../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../tlv/TlvNoArguments.js";
import { Attribute, Cluster, Command, TlvNoResponse } from "./Cluster.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * Defined how the devices should behave when it is powered on.
 * If the value is null, the OnOff attribute is set to its previous value when the device starts up.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 1.5.5.1
 */
export const enum StartUpOnOff {
    /** Set the OnOff attribute to FALSE when the device starts up. */
    Off = 0,

    /** Set the OnOff attribute to TRUE when the device starts up. */
    On = 1,

    /**
     * If the previous value of the OnOff attribute is equal to FALSE, set the OnOff
     * attribute to TRUE. If the previous value of the OnOff attribute is equal to TRUE,
     * set the OnOff attribute to FALSE (toggle).
     */
    Toggle = 2,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.5.7.4.1 */
export const enum OnOffEffectIdentifier {
    DelayedAllOff = 0,
    DyingLight = 1,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.5.7.4.2 */
export const enum DelayedAllOffEffectVariant {
    /** Fade to off in 0.8 seconds. */
    Fade = 0,

    /** Don't fade, turn off immediately. */
    NoFade = 1,

    /** 50% dim down in 0.8 seconds then fade to off in 12 seconds. */
    DimDownThenFade = 2,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.5.7.4.2 */
export const enum DyingLightEffectVariant {
    /** 20% dim up in 0.5s then fade to off in 1 second. */
    DimUpThenFade = 0,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.5.7.4.2 */
/*
const TlvEffectVariant = TlvUInt8 as TlvSchema<DyingLightEffectVariant | DelayedAllOffEffectVariant>;
*/

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.5.7.4 */
/*
const TlvOffWithEffectRequest = TlvObject({
    effectIdentifier: TlvField(0, TlvEnum<OnOffEffectIdentifier>()),
    effectVariant: TlvField(1, TlvEffectVariant),
}) as TlvSchema<
    { effectIdentifier: OnOffEffectIdentifier.DelayedAllOff, effectVariant: DelayedAllOffEffectVariant } |
    { effectIdentifier: OnOffEffectIdentifier.DyingLight, effectVariant: DyingLightEffectVariant }
>;
*/

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.5.7.4.2 */
/*
const TlvOnOffControlBitmap = TlvBitmap(TlvUInt8, {
    acceptOnlyWhenOn: BitFlag(0),
});
*/

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.5.7.6. */
/*
const TlvOnWithTimedOffRequest = TlvObject({
    onOffControl: TlvField(0, TlvOnOffControlBitmap),
    onTime: TlvField(1, TlvNullable(TlvUInt8.bound({ min: 0, max: 254 }))),
    offWaitTime: TlvField(2, TlvNullable(TlvUInt8.bound({ min: 0, max: 254 }))),
});
*/

/**
 * Attributes and commands for switching devices between 'On' and 'Off' states.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 1.5
 */
export const OnOffCluster = Cluster({
    // TODO create two cluster definitions ... One with set Lighting Flag and one without to make
    //  Attributes and Comments correctly optional
    id: 0x06,
    name: "OnOff",
    revision: 4,
    features: {
        /** Level Control for Lighting - Behavior that supports lighting applications */
        lightingLevelControl: BitFlag(0),
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.5.6 */
    attributes: {
        /** Indicates whether the device type implemented on the endpoint is turned off (false) or turned on (true). */
        onOff: Attribute(0, TlvBoolean, { persistent: true, default: false }), /* reportable: true, scene:true - Specs 1.0 wrong here, using chip XMLs*/

        // The following attributes are only needed for "Level Control for Lighting" support

        /**
         * Mandatory Attribute when extended lightingLevelControl is used!
         * Used to remember if a state is already stored in an old scene to not store one again when sending another Off command
         */
        //globalSceneControl: OptionalAttribute(0x4000, TlvBoolean, { default: true }),

        /**
         * Mandatory Attribute when extended lightingLevelControl is used!
         * Specifies the length of time (in 1/10ths second) that the ‘On’ state SHALL be maintained before
         * automatically transitioning to the ‘Off’ state when using the OnWithTimedOff command.
         */
        //onTime: OptionalWritableAttribute(0x4001, TlvNullable(TlvUInt16), { default: 0 }), /* unit: 1/10s */

        /**
         * Mandatory Attribute when extended lightingLevelControl is used!
         * Specifies the length of time (in 1/10ths second) that the ‘Off’ state SHALL be guarded to prevent
         * another OnWithTimedOff command turning the server back to its ‘On’ state
         */
        //offWaitTime: OptionalWritableAttribute(0x4002, TlvNullable(TlvUInt16), { default: 0 }), /* unit: 1/10s */

        /**
         * Mandatory Attribute when extended lightingLevelControl is used!
         * Defines the desired startup behavior of a device when it is supplied with power.
         */
        //startUpOnOff: OptionalWritableAttribute(0x4003, TlvNullable(TlvEnum<StartUpOnOff>()), { persistent: true, writeAcl: AccessLevel.Manage }),
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.5.7 */
    commands: {
        /**
         * On receipt of this command, a device SHALL enter its ‘Off’ state. This state is device dependent, but it is
         * recommended that it is used for power off or similar functions. On receipt of the Off command, the OnTime
         * attribute SHALL be set to 0.
         */
        off: Command(0, TlvNoArguments, 0, TlvNoResponse),

        /**
         * On receipt of this command, a device SHALL enter its ‘On’ state. This state is device dependent, but it is
         * recommended that it is used for power on or similar functions. On receipt of the On command, if the value
         * of the OnTime attribute is equal to 0, the device SHALL set the OffWaitTime attribute to 0.
         */
        on: Command(1, TlvNoArguments, 1, TlvNoResponse),

        /**
         * On receipt of this command, if a device is in its ‘Off’ state it SHALL enter its ‘On’ state. Otherwise,
         * if it is in its ‘On’ state it SHALL enter its ‘Off’ state. On receipt of the Toggle command, if the value
         * of the OnOff attribute is equal to FALSE and if the value of the OnTime attribute is equal to 0, the device
         * SHALL set the OffWaitTime attribute to 0. If the value of the OnOff attribute is equal to TRUE, the OnTime
         * attribute SHALL be set to 0.
         */
        toggle: Command(2, TlvNoArguments, 2, TlvNoResponse),

        // The following attributes are only needed for "Level Control for Lighting" support
        // So we declare them option for now!
        // TODO: Split these out into a separate Cluster Spec that adds "Level Control for Lighting" support

        /**
         * Mandatory Command when extended lightingLevelControl is used!
         * The OffWithEffect command allows devices to be turned off using enhanced ways of fading.
         */
        //offWithEffect: OptionalCommand(0x40, TlvOffWithEffectRequest, 0x40, TlvNoResponse),

        /**
         * Mandatory Command when extended lightingLevelControl is used!
         * The OnWithRecallGlobalScene command allows the recall of the settings when the device was turned off.
         */
        //onWithRecallGlobalScene: OptionalCommand(0x41, TlvNoArguments, 0x41, TlvNoResponse),

        /**
         * Mandatory Command when extended lightingLevelControl is used!
         * The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off
         * duration so that SHOULD the device be subsequently switched off, further OnWithTimedOff commands, received
         * during this time, are prevented from turning the devices back on.
         */
        //onWithTimedOff: OptionalCommand(0x42, TlvOnWithTimedOffRequest, 0x42, TlvNoResponse),
    },
});
