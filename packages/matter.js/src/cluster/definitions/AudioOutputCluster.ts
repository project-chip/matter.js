/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Command, TlvNoResponse, AccessLevel, Attribute } from "../../cluster/Cluster.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvUInt8, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace AudioOutput {
    /**
     * Input to the AudioOutput renameOutput command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.5.4.2
     */
    export const TlvRenameOutputRequest = TlvObject({ index: TlvField(0, TlvUInt8), name: TlvField(1, TlvString) });

    /**
     * Input to the AudioOutput renameOutput command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.5.4.2
     */
    export interface RenameOutputRequest extends TypeFromSchema<typeof TlvRenameOutputRequest> {}

    /**
     * The type of output, expressed as an enum, with the following values:
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.5.5.2
     */
    export enum OutputType {
        /**
         * HDMI
         */
        Hdmi = 0,

        Bt = 1,
        Optical = 2,
        Headphone = 3,
        Internal = 4,
        Other = 5
    }

    /**
     * This contains information about an output.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.5.5.1
     */
    export const TlvOutputInfoStruct = TlvObject({
        /**
         * This shall indicate the unique index into the list of outputs.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.5.5.1.1
         */
        index: TlvField(0, TlvUInt8),

        /**
         * This shall indicate the type of output
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.5.5.1.2
         */
        outputType: TlvField(1, TlvEnum<OutputType>()),

        /**
         * The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be blank,
         * but SHOULD be provided when known.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.5.5.1.3
         */
        name: TlvField(2, TlvString.bound({ maxLength: 32 }))
    });

    /**
     * This contains information about an output.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.5.5.1
     */
    export interface OutputInfoStruct extends TypeFromSchema<typeof TlvOutputInfoStruct> {}

    /**
     * Input to the AudioOutput selectOutput command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.5.4
     */
    export const TlvSelectOutputRequest = TlvObject({ index: TlvField(0, TlvUInt8) });

    /**
     * Input to the AudioOutput selectOutput command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.5.4
     */
    export interface SelectOutputRequest extends TypeFromSchema<typeof TlvSelectOutputRequest> {}

    /**
     * A AudioOutputCluster supports these elements if it supports feature NameUpdates.
     */
    export const NameUpdatesComponent = MutableCluster.Component({
        commands: {
            /**
             * Upon receipt, this shall rename the output at a specific index in the Output List.
             *
             * Updates to the output name shall appear in the device’s settings menus. Name updates may automatically
             * be sent to the actual device to which the output connects.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 6.5.4.2
             */
            renameOutput: Command(0x1, TlvRenameOutputRequest, 0x1, TlvNoResponse, { invokeAcl: AccessLevel.Manage })
        }
    });

    /**
     * These are optional features supported by AudioOutputCluster.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.5.2
     */
    export enum Feature {
        /**
         * NameUpdates
         *
         * Supports updates to output names
         */
        NameUpdates = "NameUpdates"
    }

    /**
     * These elements and properties are present in all AudioOutput clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x50b,
        name: "AudioOutput",
        revision: 1,

        features: {
            /**
             * NameUpdates
             *
             * Supports updates to output names
             */
            nameUpdates: BitFlag(0)
        },

        attributes: {
            /**
             * This list provides the outputs supported by the device.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 6.5.3.1
             */
            outputList: Attribute(0x0, TlvArray(TlvOutputInfoStruct)),

            /**
             * This field contains the value of the index field of the currently selected OutputInfoStruct.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 6.5.3.2
             */
            currentOutput: Attribute(0x1, TlvUInt8, { default: 0 })
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v11.Cluster} § 6.5.4
             */
            selectOutput: Command(0x0, TlvSelectOutputRequest, 0x0, TlvNoResponse)
        },

        /**
         * This metadata controls which AudioOutputCluster elements matter.js activates for specific feature
         * combinations.
         */
        extensions: MutableCluster.Extensions({ flags: { nameUpdates: true }, component: NameUpdatesComponent })
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ ...Base });

    /**
     * Audio Output
     *
     * This cluster provides an interface for controlling the Output on a Video Player device such as a TV.
     *
     * AudioOutputCluster supports optional features that you can enable with the AudioOutputCluster.with() factory
     * method.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.5
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    const NU = { nameUpdates: true };

    /**
     * @see {@link Complete}
     */
    export const CompleteInstance = MutableCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,
        attributes: Cluster.attributes,

        commands: {
            ...Cluster.commands,
            renameOutput: MutableCluster.AsConditional(
                NameUpdatesComponent.commands.renameOutput,
                { mandatoryIf: [NU] }
            )
        }
    });

    /**
     * This cluster supports all AudioOutput features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export interface Complete extends Identity<typeof CompleteInstance> {}

    export const Complete: Complete = CompleteInstance;
}

export type AudioOutputCluster = AudioOutput.Cluster;
export const AudioOutputCluster = AudioOutput.Cluster;
ClusterRegistry.register(AudioOutput.Complete);
