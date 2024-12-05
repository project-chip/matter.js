/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import {
    WritableAttribute,
    FixedAttribute,
    Attribute,
    OptionalWritableAttribute,
    Command,
    TlvNoResponse
} from "../cluster/Cluster.js";
import { TlvUInt8, TlvEnum } from "../tlv/TlvNumber.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvField, TlvOptionalField, TlvObject } from "../tlv/TlvObject.js";
import { TlvString } from "../tlv/TlvString.js";
import { TlvVendorId } from "../datatype/VendorId.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { ModeBase } from "./mode-base.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace OvenMode {
    /**
     * These are optional features supported by OvenModeCluster.
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
         * This mode sets the device into baking mode for baking food items.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.1
         */
        Bake = 16384,

        /**
         * This mode sets the device into convection mode which creates an airflow within the device during the cooking
         * duration.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.2
         */
        Convection = 16385,

        /**
         * This mode sets the device into grill mode for grilling food items. This is the same as Broil for many
         * regions.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.3
         */
        Grill = 16386,

        /**
         * This mode sets the device into roast mode for roasting food items.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.4
         */
        Roast = 16387,

        /**
         * This mode sets the device into cleaning mode to clean the internal components of the appliance.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.5
         */
        Clean = 16388,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1
         */
        ConvectionBake = 16389,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1
         */
        ConvectionRoast = 16390,

        /**
         * This mode sets the device into a warming mode which begins warming the cavity.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.8
         */
        Warming = 16391,

        /**
         * This mode sets the device into proofing mode which creates an environment ready for proofing.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.9
         */
        Proofing = 16392,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1
         */
        Steam = 16393,

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
     * This is a struct representing a possible mode of the server.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.2
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
     * This is a struct representing a possible mode of the server.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.2
     */
    export interface ModeOption extends TypeFromSchema<typeof TlvModeOption> {}

    /**
     * A OvenModeCluster supports these elements if it supports feature OnOff.
     */
    export const OnOffComponent = MutableCluster.Component({
        attributes: {
            /**
             * Indicates whether the value of CurrentMode depends on the state of the On/Off cluster on the same
             * endpoint. If this attribute is not present or is set to null, there is no dependency, otherwise the
             * CurrentMode attribute shall depend on the OnOff attribute in the On/Off cluster
             *
             * The value of this field shall match the Mode field of one of the entries in the SupportedModes attribute.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.10.6.5
             */
            onMode: WritableAttribute(0x3, TlvNullable(TlvUInt8), { persistent: true, default: null })
        }
    });

    /**
     * These elements and properties are present in all OvenMode clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x49,
        name: "OvenMode",
        revision: 1,

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
             * This attribute shall contain the list of supported modes that may be selected for the CurrentMode
             * attribute. Each item in this list represents a unique mode as indicated by the Mode field of the
             * ModeOptionStruct.
             *
             * Each entry in this list shall have a unique value for the Mode field. Each entry in this list shall have
             * a unique value for the Label field.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.10.6.2
             */
            supportedModes: FixedAttribute(0x0, TlvArray(TlvModeOption, { minLength: 2, maxLength: 255 })),

            /**
             * Indicates the current mode of the server.
             *
             * The value of this field shall match the Mode field of one of the entries in the SupportedModes attribute.
             *
             * The value of this attribute may change at any time via an out-of-band interaction outside of the server,
             * such as interactions with a user interface, via internal mode changes due to autonomously progressing
             * through a sequence of operations, on system time-outs or idle delays, or via interactions coming from a
             * fabric other than the one which last executed a ChangeToMode.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.10.6.3
             */
            currentMode: Attribute(0x1, TlvUInt8, { scene: true, persistent: true }),

            /**
             * Indicates the desired startup mode for the server when it is supplied with power.
             *
             * If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, when the
             * server is powered up, except in the case when the OnMode attribute overrides the StartUpMode attribute
             * (see OnModeWithPowerUp).
             *
             * This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode
             * attribute shall return to its value prior to the restart.
             *
             * The value of this field shall match the Mode field of one of the entries in the SupportedModes attribute.
             *
             * If this attribute is not implemented, or is set to the null value, it shall have no effect.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.10.6.4
             */
            startUpMode: OptionalWritableAttribute(0x2, TlvNullable(TlvUInt8), { persistent: true })
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
         * This metadata controls which OvenModeCluster elements matter.js activates for specific feature combinations.
         */
        extensions: MutableCluster.Extensions({ flags: { onOff: true }, component: OnOffComponent })
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster(Base);

    /**
     * This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced enumerated
     * values for oven devices.
     *
     * OvenModeCluster supports optional features that you can enable with the OvenModeCluster.with() factory method.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.11
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    const DEPONOFF = { onOff: true };

    /**
     * @see {@link Complete}
     */
    export const CompleteInstance = MutableCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,
        attributes: {
            ...Cluster.attributes,
            onMode: MutableCluster.AsConditional(OnOffComponent.attributes.onMode, { mandatoryIf: [DEPONOFF] })
        },
        commands: Cluster.commands
    });

    /**
     * This cluster supports all OvenMode features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export interface Complete extends Identity<typeof CompleteInstance> {}

    export const Complete: Complete = CompleteInstance;
}

export type OvenModeCluster = OvenMode.Cluster;
export const OvenModeCluster = OvenMode.Cluster;
ClusterRegistry.register(OvenMode.Complete);
