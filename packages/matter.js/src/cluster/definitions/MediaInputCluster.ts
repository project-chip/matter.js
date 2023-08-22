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
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { Attribute, Command, TlvNoResponse, AccessLevel, Cluster as CreateCluster } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvUInt8, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace MediaInput {
    /**
     * The type of input, expressed as an enum, with the following values:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.2
     */
    export const enum InputType {
        /**
         * Indicates content not coming from a physical input.
         */
        Internal = 0,

        Aux = 1,
        Coax = 2,
        Composite = 3,
        Hdmi = 4,
        Input = 5,
        Line = 6,
        Optical = 7,
        Video = 8,
        Scart = 9,
        Usb = 10,
        Other = 11
    }

    /**
     * This contains information about an input.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1
     */
    export const TlvInputInfoStruct = TlvObject({
        /**
         * This shall indicate the unique index into the list of Inputs.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.1
         */
        index: TlvField(0, TlvUInt8),

        /**
         * This shall indicate the type of input
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.2
         */
        inputType: TlvField(1, TlvEnum<InputType>()),

        /**
         * This shall indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be provided when
         * known.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.3
         */
        name: TlvField(2, TlvString.bound({ maxLength: 32 })),

        /**
         * This shall indicate the user editable input description, such as “Living room Playstation”. This field may
         * be blank, but SHOULD be provided when known.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.4
         */
        description: TlvField(3, TlvString.bound({ maxLength: 32 }))
    });

    /**
     * Input to the MediaInput selectInput command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.1
     */
    export const TlvSelectInputRequest = TlvObject({
        /**
         * This shall indicate the index field of the InputInfoStruct from the InputList attribute in which to change
         * to.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.1.1
         */
        index: TlvField(0, TlvUInt8)
    });

    /**
     * Input to the MediaInput renameInput command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.4
     */
    export const TlvRenameInputRequest = TlvObject({ index: TlvField(0, TlvUInt8), name: TlvField(1, TlvString) });

    /**
     * These are optional features supported by MediaInputCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.2
     */
    export enum Feature {
        /**
         * NameUpdates
         *
         * Supports updates to the input names
         */
        NameUpdates = "NameUpdates"
    }

    /**
     * These elements and properties are present in all MediaInput clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x507,
        name: "MediaInput",
        revision: 1,

        features: {
            /**
             * NameUpdates
             *
             * Supports updates to the input names
             */
            nameUpdates: BitFlag(0)
        },

        attributes: {
            /**
             * This list provides the media inputs supported by the device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.3.1
             */
            inputList: Attribute(0x0, TlvArray(TlvInputInfoStruct, { maxLength: 254 }), { default: [] }),

            /**
             * This field contains the value of the index field of the currently selected InputInfoStruct.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.3.2
             */
            currentInput: Attribute(0x1, TlvUInt8, { default: 0 })
        },

        commands: {
            /**
             * Upon receipt, this shall change the media input on the device to the input at a specific index in the
             * Input List.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.1
             */
            selectInput: Command(0x0, TlvSelectInputRequest, 0x0, TlvNoResponse),

            /**
             * Upon receipt, this shall display the active status of the input list on screen.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.2
             */
            showInputStatus: Command(0x1, TlvNoArguments, 0x1, TlvNoResponse),

            /**
             * Upon receipt, this shall hide the input list from the screen.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.3
             */
            hideInputStatus: Command(0x2, TlvNoArguments, 0x2, TlvNoResponse)
        }
    });

    /**
     * A MediaInputCluster supports these elements if it supports feature NameUpdates.
     */
    export const NameUpdatesComponent = ClusterComponent({
        commands: {
            /**
             * Upon receipt, this shall rename the input at a specific index in the Input List. Updates to the input
             * name shall appear in the device’s settings menus.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.4
             */
            renameInput: Command(0x3, TlvRenameInputRequest, 0x3, TlvNoResponse, { invokeAcl: AccessLevel.Manage })
        }
    });

    /**
     * Media Input
     *
     * This cluster provides an interface for controlling the Input Selector on a media device such as a Video Player.
     *
     * MediaInputCluster supports optional features that you can enable with the MediaInputCluster.with() factory
     * method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a MediaInput cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a MediaInput cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, NameUpdatesComponent, { nameUpdates: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { nameUpdates: true } ? typeof NameUpdatesComponent : {});
    const NU = { nameUpdates: true };

    /**
     * This cluster supports all MediaInput features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = CreateCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,
        attributes: Cluster.attributes,
        commands: {
            ...Cluster.commands,
            renameInput: AsConditional(NameUpdatesComponent.commands.renameInput, { mandatoryIf: [NU] })
        }
    });
}

export type MediaInputCluster = typeof MediaInput.Cluster;
export const MediaInputCluster = MediaInput.Cluster;
