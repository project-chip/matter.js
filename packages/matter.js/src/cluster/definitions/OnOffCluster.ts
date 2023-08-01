/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import {
    BaseClusterComponent,
    ClusterComponent,
    ExtensibleCluster,
    validateFeatureSelection,
    extendCluster,
    ClusterForBaseCluster,
    AsConditional
} from "../../cluster/ClusterFactory.js";
import { BitFlag, BitField, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import {
    Attribute,
    Command,
    TlvNoResponse,
    WritableAttribute,
    AccessLevel,
    Cluster as CreateCluster
} from "../../cluster/Cluster.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvUInt16, TlvEnum, TlvUInt8, TlvBitmap } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

export namespace OnOff {
    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.5.1
     */
    export const enum StartUpOnOff {
        /**
         * Set the OnOff attribute to FALSE
         */
        Off = 0,

        /**
         * Set the OnOff attribute to TRUE
         */
        On = 1,

        /**
         * If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the
         * previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle).
         */
        Toggle = 2
    }

    export const enum OnOffEffectIdentifier {
        DelayedAllOff = 0,
        DyingLight = 1
    }

    /**
     * Input to the OnOff offWithEffect command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4
     */
    export const TlvOffWithEffectRequest = TlvObject({
        /**
         * The EffectIdentifier field specifies the fading effect to use when turning the device off. This field shall
         * contain one of the non-reserved values listed in Values of the EffectIdentifier Field of the OffWithEffect
         * Command.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4.1
         */
        effectIdentifier: TlvField(0, TlvEnum<OnOffEffectIdentifier>()),

        /**
         * The EffectVariant field is used to indicate which variant of the effect, indicated in the EffectIdentifier
         * field, SHOULD be triggered. If the server does not support the given variant, it shall use the default
         * variant. This field is dependent on the value of the EffectIdentifier field and shall contain one of the
         * non-reserved values listed in Values of the EffectVariant Field of the OffWithEffect Command.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4.2
         */
        effectVariant: TlvField(1, TlvUInt8)
    });

    /**
     * The value of OnOff.onOffControl
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.1
     */
    export const OnOffControl = { acceptOnlyWhenOn: BitFlag(0), reserved: BitField(1, 7) };

    /**
     * Input to the OnOff onWithTimedOff command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6
     */
    export const TlvOnWithTimedOffRequest = TlvObject({
        /**
         * The OnOffControl field contains information on how the server is to be operated. This field shall be
         * formatted as illustrated in Format of the OnOffControl Field of the OnWithTimedOff Command.
         *
         * The AcceptOnlyWhenOn sub-field is 1 bit in length and specifies whether the OnWithTimedOff command is to be
         * processed unconditionally or only when the OnOff attribute is equal to TRUE. If this sub-field is set to 1,
         * the OnWithTimedOff command shall only be accepted if the OnOff attribute is equal to TRUE. If this sub-field
         * is set to 0, the OnWithTimedOff command shall be processed unconditionally.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.1
         */
        onOffControl: TlvField(0, TlvBitmap(TlvUInt8, OnOffControl)),

        /**
         * The OnTime field is used to adjust the value of the OnTime attribute.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.2
         */
        onTime: TlvField(1, TlvNullable(TlvUInt16)),

        /**
         * The OffWaitTime field is used to adjust the value of the OffWaitTime attribute.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.3
         */
        offWaitTime: TlvField(2, TlvNullable(TlvUInt16))
    });

    /**
     * These are optional features supported by OnOffCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.4
     */
    export enum Feature {
        /**
         * LevelControlForLighting
         *
         * Behavior that supports lighting applications.
         */
        LevelControlForLighting = "LevelControlForLighting"
    }

    /**
     * These elements and properties are present in all OnOff clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x6,
        name: "OnOff",
        revision: 4,

        features: {
            /**
             * LevelControlForLighting
             *
             * Behavior that supports lighting applications.
             */
            levelControlForLighting: BitFlag(0)
        },

        attributes: {
            /**
             * The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or
             * turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.1
             */
            onOff: Attribute(0x0, TlvBoolean, { scene: true, persistent: true, default: true })
        },

        commands: {
            /**
             * This command does not have any data fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.1
             */
            off: Command(0x0, TlvNoArguments, 0x0, TlvNoResponse),

            /**
             * This command does not have any data fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.2
             */
            on: Command(0x1, TlvNoArguments, 0x1, TlvNoResponse),

            /**
             * This command does not have any data fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.3
             */
            toggle: Command(0x2, TlvNoArguments, 0x2, TlvNoResponse)
        }
    });

    /**
     * A OnOffCluster supports these elements if it supports feature LevelControlForLighting.
     */
    export const LevelControlForLightingComponent = ClusterComponent({
        attributes: {
            /**
             * In order to support the use case where the user gets back the last setting of a set of devices (e.g.
             * level settings for lights), a global scene is introduced which is stored when the devices are turned off
             * and recalled when the devices are turned on. The global scene is defined as the scene that is stored
             * with group identifier 0 and scene identifier 0.
             *
             * The GlobalSceneControl attribute is defined in order to prevent a second Off command storing the
             * all-devices-off situation as a global scene, and to prevent a second On command destroying the current
             * settings by going back to the global scene.
             *
             * The GlobalSceneControl attribute shall be set to TRUE after the reception of a command which causes the
             * OnOff attribute to be set to TRUE, such as a standard On command, a MoveToLevel(WithOnOff) command, a
             * RecallScene command or a OnWithRecallGlobalScene command (see OnWithRecallGlobalScene Command).
             *
             * The GlobalSceneControl attribute is set to FALSE after reception of a OffWithEffect command.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.2
             */
            globalSceneControl: Attribute(0x4000, TlvBoolean, { default: true }),

            /**
             * The OnTime attribute specifies the length of time (in 1/10ths second) that the ‘On’ state shall be
             * maintained before automatically transitioning to the ‘Off’ state when using the OnWithTimedOff command.
             * This attribute can be written at any time, but writing a value only has effect when in the ‘Timed On’
             * state. See OnWithTimedOff Command for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.3
             */
            onTime: WritableAttribute(0x4001, TlvNullable(TlvUInt16), { default: 0 }),

            /**
             * The OffWaitTime attribute specifies the length of time (in 1/10ths second) that the ‘Off’ state shall be
             * guarded to prevent another OnWithTimedOff command turning the server back to its ‘On’ state (e.g., when
             * leaving a room, the lights are turned off but an occupancy sensor detects the leaving person and
             * attempts to turn the lights back on). This attribute can be written at any time, but writing a value
             * only has an effect when in the ‘Timed On’ state followed by a transition to the ‘Delayed Off' state, or
             * in the ‘Delayed Off’ state. See OnWithTimedOff Command for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.4
             */
            offWaitTime: WritableAttribute(0x4002, TlvNullable(TlvUInt16), { default: 0 }),

            /**
             * The StartUpOnOff attribute shall define the desired startup behavior of a device when it is supplied
             * with power and this state shall be reflected in the OnOff attribute. If the value is null, the OnOff
             * attribute is set to its previous value. Otherwise, the behavior is defined in the table defining
             * StartUpOnOffEnum.
             *
             * This behavior does not apply to reboots associated with OTA. After an OTA restart, the OnOff attribute
             * shall return to its value prior to the restart.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.5
             */
            startUpOnOff: WritableAttribute(
                0x4003,
                TlvNullable(TlvEnum<StartUpOnOff>()),
                { persistent: true, writeAcl: AccessLevel.Manage }
            )
        },

        commands: {
            /**
             * The OffWithEffect command allows devices to be turned off using enhanced ways of fading.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4
             */
            offWithEffect: Command(0x40, TlvOffWithEffectRequest, 0x40, TlvNoResponse),

            /**
             * The OnWithRecallGlobalScene command allows the recall of the settings when the device was turned off.
             *
             * The OnWithRecallGlobalScene command shall have no parameters.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.5
             */
            onWithRecallGlobalScene: Command(0x41, TlvNoArguments, 0x41, TlvNoResponse),

            /**
             * The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off
             * duration so that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received
             * during this time, are prevented from turning the devices back on. Further
             *
             * OnWithTimedOff commands received while the server is turned on, will update the period that the device
             * is turned on.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6
             */
            onWithTimedOff: Command(0x42, TlvOnWithTimedOffRequest, 0x42, TlvNoResponse)
        }
    });

    /**
     * On/Off
     *
     * Attributes and commands for turning devices on and off.
     *
     * OnOffCluster supports optional features that you can enable with the OnOffCluster.with() factory method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create an OnOff cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns an OnOff cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, LevelControlForLightingComponent, { levelControlForLighting: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { levelControlForLighting: true } ? typeof LevelControlForLightingComponent : {});
    const LT = { levelControlForLighting: true };

    /**
     * This cluster supports all OnOff features. It may support illegal feature combinations.
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
            globalSceneControl: AsConditional(
                LevelControlForLightingComponent.attributes.globalSceneControl,
                { mandatoryIf: [LT] }
            ),
            onTime: AsConditional(LevelControlForLightingComponent.attributes.onTime, { mandatoryIf: [LT] }),
            offWaitTime: AsConditional(LevelControlForLightingComponent.attributes.offWaitTime, { mandatoryIf: [LT] }),
            startUpOnOff: AsConditional(
                LevelControlForLightingComponent.attributes.startUpOnOff,
                { mandatoryIf: [LT] }
            )
        },

        commands: {
            ...Cluster.commands,
            offWithEffect: AsConditional(
                LevelControlForLightingComponent.commands.offWithEffect,
                { mandatoryIf: [LT] }
            ),
            onWithRecallGlobalScene: AsConditional(
                LevelControlForLightingComponent.commands.onWithRecallGlobalScene,
                { mandatoryIf: [LT] }
            ),
            onWithTimedOff: AsConditional(
                LevelControlForLightingComponent.commands.onWithTimedOff,
                { mandatoryIf: [LT] }
            )
        }
    });
}

export type OnOffCluster = typeof OnOff.Cluster;
export const OnOffCluster = OnOff.Cluster;
