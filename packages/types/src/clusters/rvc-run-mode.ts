/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { FixedAttribute, Attribute, Command, TlvNoResponse } from "../cluster/Cluster.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvField, TlvOptionalField, TlvObject } from "../tlv/TlvObject.js";
import { TlvString } from "../tlv/TlvString.js";
import { TlvUInt8, TlvEnum } from "../tlv/TlvNumber.js";
import { TlvVendorId } from "../datatype/VendorId.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { ModeBase } from "./mode-base.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace RvcRunMode {
    /**
     * These are optional features supported by RvcRunModeCluster.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.10.4
     */
    export enum Feature {
        /**
         * OnOff (DEPONOFF)
         *
         * This feature creates a dependency between an OnOff cluster instance and this cluster instance on the same
         * endpoint. See OnMode for more information.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.4.1
         */
        OnOff = "OnOff"
    }

    export enum ModeTag {
        /**
         * The device is not performing any of the main operations of the other modes. However, auxiliary actions, such
         * as seeking the charger or charging, may occur.
         *
         * For example, the device has completed cleaning, successfully or not, on its own or due to a command, or has
         * not been asked to clean after a restart.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.2.1
         */
        Idle = 16384,

        /**
         * The device was asked to clean so it may be actively running, or paused due to an error, due to a pause
         * command, or for recharging etc. If currently paused and the device can resume it will continue to clean.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.2.2
         */
        Cleaning = 16385,

        /**
         * The device was asked to create a map of the space it is located in, so it may be actively running, or paused
         * due to an error, due to a pause command, or for recharging etc. If currently paused and the device can
         * resume, it will continue to map.
         *
         * NOTE
         *
         * this mode is intended to be used so the current space can be mapped by the device if the robot has not
         * previously done that, or if the layout has substantially changed, for an optimal subsequent cleaning
         * experience.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.2.3
         */
        Mapping = 16386,

        /**
         * The device decides which options, features and setting values to use.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.8
         */
        Auto = 0,

        /**
         * The mode of the device is optimizing for faster completion.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.8
         */
        Quick = 1,

        /**
         * The device is silent or barely audible while in this mode.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.8
         */
        Quiet = 2,

        /**
         * Either the mode is inherently low noise or the device optimizes for that.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.8
         */
        LowNoise = 3,

        /**
         * The device is optimizing for lower energy usage in this mode. Sometimes called "Eco mode".
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.8
         */
        LowEnergy = 4,

        /**
         * A mode suitable for use during vacations or other extended absences.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.8
         */
        Vacation = 5,

        /**
         * The mode uses the lowest available setting value.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.8
         */
        Min = 6,

        /**
         * The mode uses the highest available setting value.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.8
         */
        Max = 7,

        /**
         * The mode is recommended or suitable for use during night time.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.8
         */
        Night = 8,

        /**
         * The mode is recommended or suitable for use during day time.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.8
         */
        Day = 9
    }

    /**
     * A Mode Tag is meant to be interpreted by the client for the purpose the cluster serves.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.1
     */
    export const TlvModeTagStruct = TlvObject({
        /**
         * If the MfgCode field exists, the Value field shall be in the manufacturer-specific value range (see Section
         * 1.10.8, “Mode Namespace”).
         *
         * This field shall indicate the manufacturer’s VendorID and it shall determine the meaning of the Value field.
         *
         * The same manufacturer code and mode tag value in separate cluster instances are part of the same namespace
         * and have the same meaning. For example: a manufacturer tag meaning "pinch" can be used both in a cluster
         * whose purpose is to choose the amount of sugar, or in a cluster whose purpose is to choose the amount of
         * salt.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.1.1
         */
        mfgCode: TlvOptionalField(0, TlvVendorId),

        /**
         * This field shall indicate the mode tag within a mode tag namespace which is either manufacturer specific or
         * standard.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.1.2
         */
        value: TlvField(1, TlvEnum<ModeTag>())
    });

    /**
     * A Mode Tag is meant to be interpreted by the client for the purpose the cluster serves.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.1
     */
    export interface ModeTagStruct extends TypeFromSchema<typeof TlvModeTagStruct> {}

    /**
     * The table below lists the changes relative to the Mode Base cluster for the fields of the ModeOptionStruct type.
     * A blank field indicates no change.
     *
     * At least one entry in the SupportedModes attribute shall include the Idle mode tag in the ModeTags field.
     *
     * At least one entry in the SupportedModes attribute (different from the one above) shall include the Cleaning
     * mode tag in the ModeTags field.
     *
     * The Mapping, Cleaning, and Idle mode tags are mutually exclusive and shall NOT be used together in a mode’s
     * ModeTags.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.2.5.1
     */
    export const TlvModeOption = TlvObject({
        /**
         * This field shall indicate readable text that describes the mode option, so that a client can provide it to
         * the user to indicate what this option means. This field is meant to be readable and understandable by the
         * user.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.2.1
         */
        label: TlvField(0, TlvString.bound({ maxLength: 64 })),

        /**
         * This field is used to identify the mode option.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.2.2
         */
        mode: TlvField(1, TlvUInt8),

        /**
         * This field shall contain a list of tags that are associated with the mode option. This may be used by
         * clients to determine the full or the partial semantics of a certain mode, depending on which tags they
         * understand, using standard definitions and/or manufacturer specific namespace definitions.
         *
         * The standard mode tags are defined in this cluster specification. For the derived cluster instances, if the
         * specification of the derived cluster defines a namespace, the set of standard mode tags also includes the
         * mode tag values from that namespace.
         *
         * Mode tags can help clients look for options that meet certain criteria, render the user interface, use
         *
         * the mode in an automation, or to craft help text their voice-driven interfaces. A mode tag shall be either a
         * standard tag or a manufacturer specific tag, as defined in each ModeTagStruct list entry.
         *
         * A mode option may have more than one mode tag. A mode option may be associated with a mixture of standard
         * and manufacturer specific mode tags. A mode option shall be associated with at least one standard mode tag.
         *
         * A few examples are provided below.
         *
         *   • A mode named "100%" can have both the High (manufacturer specific) and Max (standard) mode tag. Clients
         *     seeking the mode for either High or Max will find the same mode in this case.
         *
         *   • A mode that includes a LowEnergy tag can be displayed by the client using a widget icon that shows a
         *     green leaf.
         *
         *   • A mode that includes a LowNoise tag may be used by the client when the user wishes for a lower level of
         *     audible sound, less likely to disturb the household’s activities.
         *
         *   • A mode that includes a LowEnergy tag (standard, defined in this cluster specification) and also a
         *     Delicate tag (standard, defined in the namespace of a Laundry Mode derived cluster).
         *
         *   • A mode that includes both a generic Quick tag (defined here), and Vacuum and Mop tags, (defined in the
         *     RVC Clean cluster that is a derivation of this cluster).
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.2.3
         */
        modeTags: TlvField(2, TlvArray(TlvModeTagStruct, { maxLength: 8 }))
    });

    /**
     * The table below lists the changes relative to the Mode Base cluster for the fields of the ModeOptionStruct type.
     * A blank field indicates no change.
     *
     * At least one entry in the SupportedModes attribute shall include the Idle mode tag in the ModeTags field.
     *
     * At least one entry in the SupportedModes attribute (different from the one above) shall include the Cleaning
     * mode tag in the ModeTags field.
     *
     * The Mapping, Cleaning, and Idle mode tags are mutually exclusive and shall NOT be used together in a mode’s
     * ModeTags.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.2.5.1
     */
    export interface ModeOption extends TypeFromSchema<typeof TlvModeOption> {}

    export enum ModeChangeStatus {
        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        Stuck = 65,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        DustBinMissing = 66,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        DustBinFull = 67,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        WaterTankEmpty = 68,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        WaterTankMissing = 69,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        WaterTankLidOpen = 70,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        MopCleaningPadMissing = 71,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        BatteryLow = 72,

        /**
         * Switching to the mode indicated by the NewMode field is allowed and possible. The CurrentMode attribute is
         * set to the value of the NewMode field.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.7.2.1.2
         */
        Success = 0,

        /**
         * The value of the NewMode field doesn’t match any entries in the SupportedMode attribute.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.7.2.1.2
         */
        UnsupportedMode = 1,

        /**
         * Generic failure code, indicating that switching to the mode indicated by the NewMode field is not allowed or
         * not possible.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.7.2.1.2
         */
        GenericFailure = 2,

        /**
         * The received request cannot be handled due to the current mode of the device
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.7.2.1.2
         */
        InvalidInMode = 3
    }

    /**
     * These elements and properties are present in all RvcRunMode clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x54,
        name: "RvcRunMode",
        revision: 2,

        features: {
            /**
             * OnOff
             *
             * This feature creates a dependency between an OnOff cluster instance and this cluster instance on the
             * same endpoint. See OnMode for more information.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.10.4.1
             */
            onOff: BitFlag(0)
        },

        attributes: {
            /**
             * @see {@link MatterSpecification.v13.Cluster} § 7.2.6
             */
            supportedModes: FixedAttribute(
                0x0,
                TlvArray(TlvModeOption, { minLength: 2, maxLength: 255 }),
                { default: [] }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 7.2.6
             */
            currentMode: Attribute(0x1, TlvUInt8, { scene: true, persistent: true })
        },

        commands: {
            /**
             * This command is used to change device modes.
             *
             * On receipt of this command the device shall respond with a ChangeToModeResponse command.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.10.7.1
             */
            changeToMode: Command(0x0, ModeBase.TlvChangeToModeRequest, 0x0, TlvNoResponse)
        },

        /**
         * This metadata controls which RvcRunModeCluster elements matter.js activates for specific feature
         * combinations.
         */
        extensions: MutableCluster.Extensions()
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster(Base);

    /**
     * This cluster is derived from the Mode Base cluster to define specifics for Robotic Vacuum Cleaner devices. It
     * also defines a namespace for the running modes of these devices.
     *
     * RvcRunModeCluster supports optional features that you can enable with the RvcRunModeCluster.with() factory
     * method.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.2
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type RvcRunModeCluster = RvcRunMode.Cluster;
export const RvcRunModeCluster = RvcRunMode.Cluster;
ClusterRegistry.register(RvcRunMode.Complete);
