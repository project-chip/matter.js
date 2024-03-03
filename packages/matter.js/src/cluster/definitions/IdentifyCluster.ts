/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import {
    Command,
    AccessLevel,
    WritableAttribute,
    Attribute,
    TlvNoResponse,
    OptionalCommand
} from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace Identify {
    /**
     * This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
     * case that the device is currently identifying itself.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.4
     */
    export const TlvIdentifyQueryResponse = TlvObject({
        /**
         * This field contains the current value of the IdentifyTime attribute, and specifies the length of time, in
         * seconds, that the device will continue to identify itself.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.4.1
         */
        timeout: TlvField(0, TlvUInt16)
    });

    /**
     * This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
     * case that the device is currently identifying itself.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.4
     */
    export interface IdentifyQueryResponse extends TypeFromSchema<typeof TlvIdentifyQueryResponse> {}

    /**
     * The value of the Identify identifyType attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.5.2
     */
    export enum IdentifyType {
        /**
         * No presentation.
         */
        None = 0,

        /**
         * Light output of a lighting product.
         */
        LightOutput = 1,

        /**
         * Typically a small LED.
         */
        VisibleIndicator = 2,

        AudibleBeep = 3,

        /**
         * Presentation will be visible on display screen.
         */
        Display = 4,

        /**
         * Presentation will be conveyed by actuator functionality such as through a window blind operation or in-wall
         * relay.
         */
        Actuator = 5
    }

    /**
     * Input to the Identify identify command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.1
     */
    export const TlvIdentifyRequest = TlvObject({ identifyTime: TlvField(0, TlvUInt16) });

    /**
     * Input to the Identify identify command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.1
     */
    export interface IdentifyRequest extends TypeFromSchema<typeof TlvIdentifyRequest> {}

    /**
     * The value of Identify.effectIdentifier
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.1
     */
    export enum EffectIdentifier {
        /**
         * e.g., Light is turned on/off once.
         */
        Blink = 0,

        /**
         * e.g., Light is turned on/off over 1 second and repeated 15 times.
         */
        Breathe = 1,

        /**
         * e.g., Colored light turns green for 1 second; non-colored light flashes twice.
         */
        Okay = 2,

        /**
         * e.g., Colored light turns orange for 8 seconds; non-colored light switches to the maximum brightness for
         * 0.5s and then minimum brightness for 7.5s.
         */
        ChannelChange = 11,

        /**
         * Complete the current effect sequence before terminating. e.g., if in the middle of a breathe effect (as
         * above), first complete the current 1s breathe effect and then terminate the effect.
         */
        FinishEffect = 254,

        /**
         * Terminate the effect as soon as possible.
         */
        StopEffect = 255
    }

    /**
     * The value of Identify.effectVariant
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.2
     */
    export enum EffectVariant {
        Default = 0
    }

    /**
     * Input to the Identify triggerEffect command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3
     */
    export const TlvTriggerEffectRequest = TlvObject({
        /**
         * This field specifies the identify effect to use. All values of the EffectIdentifier shall be supported.
         * Implementors may deviate from the example light effects in the table below, but they SHOULD indicate during
         * testing how they handle each effect.
         *
         * This field shall contain one of the non-reserved values listed below.
         *
         * Table 3. Values of the EffectIdentifier Field of the TriggerEffect Command
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.1
         */
        effectIdentifier: TlvField(0, TlvEnum<EffectIdentifier>()),

        /**
         * This field is used to indicate which variant of the effect, indicated in the EffectIdentifier field, SHOULD
         * be triggered. If a device does not support the given variant, it shall use the default variant. This field
         * shall contain one of the values listed below:
         *
         * Table 4. Values of the EffectVariant Field of the TriggerEffect Command
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.2
         */
        effectVariant: TlvField(1, TlvEnum<EffectVariant>())
    });

    /**
     * Input to the Identify triggerEffect command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3
     */
    export interface TriggerEffectRequest extends TypeFromSchema<typeof TlvTriggerEffectRequest> {}

    /**
     * A IdentifyCluster supports these elements if it supports feature Query.
     */
    export const QueryComponent = MutableCluster.Component({
        commands: {
            /**
             * This command allows the sending device to request the target or targets to respond if they are currently
             * identifying themselves.
             *
             * This command has no data fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.2
             */
            identifyQuery: Command(
                0x1,
                TlvNoArguments,
                0x0,
                TlvIdentifyQueryResponse,
                { invokeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * These are optional features supported by IdentifyCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.4
     */
    export enum Feature {
        /**
         * Query
         *
         * Multicast query for identification state
         */
        Query = "Query"
    }

    /**
     * These elements and properties are present in all Identify clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x3,
        name: "Identify",
        revision: 4,

        features: {
            /**
             * Query
             *
             * Multicast query for identification state
             */
            query: BitFlag(0)
        },

        attributes: {
            /**
             * This attribute specifies the remaining length of time, in seconds, that the endpoint will continue to
             * identify itself.
             *
             * If this attribute is set to a value other than 0 then the device shall enter its identification state,
             * in order to indicate to an observer which of several nodes and/or endpoints it is. It is RECOMMENDED
             * that this state consists of flashing a light with a period of 0.5 seconds. The IdentifyTime attribute
             * shall be decremented every second while in this state.
             *
             * If this attribute reaches or is set to the value 0 then the device shall terminate its identification
             * state.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.5.1
             */
            identifyTime: WritableAttribute(0x0, TlvUInt16, { default: 0 }),

            /**
             * This attribute specifies how the identification state is presented to the user. This field shall contain
             * one of the values listed below:
             *
             * Table 2. Values of the IdentifyType attribute
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.5.2
             */
            identifyType: Attribute(0x1, TlvEnum<IdentifyType>(), { default: IdentifyType.None })
        },

        commands: {
            /**
             * This command starts or stops the receiving device identifying itself.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.1
             */
            identify: Command(0x0, TlvIdentifyRequest, 0x0, TlvNoResponse, { invokeAcl: AccessLevel.Manage }),

            /**
             * This command allows the support of feedback to the user, such as a certain light effect. It is used to
             * allow an implementation to provide visual feedback to the user under certain circumstances such as a
             * color light turning green when it has successfully connected to a network. The use of this command and
             * the effects themselves are entirely up to the implementer to use whenever a visual feedback is useful
             * but it is not the same as and does not replace the identify mechanism used during commissioning.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3
             */
            triggerEffect: OptionalCommand(
                0x40,
                TlvTriggerEffectRequest,
                0x40,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Manage }
            )
        },

        /**
         * This metadata controls which IdentifyCluster elements matter.js activates for specific feature combinations.
         */
        extensions: MutableCluster.Extensions({ flags: { query: true }, component: QueryComponent })
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ ...Base });

    /**
     * Identify
     *
     * This cluster supports an endpoint identification state (e.g., flashing a light), that indicates to an observer
     * (e.g., an installer) which of several nodes and/or endpoints it is. It also supports a multicast request that
     * any endpoint that is identifying itself to respond to the initiator.
     *
     * The state of this cluster may be shared on more than one endpoint on a node.
     *
     * For Example: Two endpoints on a single node, one a temperature sensor, and one a humidity sensor, may both share
     * the same cluster instance and therefore identification state (e.g. single LED on the node).
     *
     * Zigbee: Note that this cluster cannot be disabled, and remains functional regardless of the setting of the
     * DeviceEnable attribute in the Basic cluster.
     *
     * IdentifyCluster supports optional features that you can enable with the IdentifyCluster.with() factory method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    const QRY = { query: true };

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
            identifyQuery: MutableCluster.AsConditional(QueryComponent.commands.identifyQuery, { mandatoryIf: [QRY] })
        }
    });

    /**
     * This cluster supports all Identify features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export interface Complete extends Identity<typeof CompleteInstance> {}

    export const Complete: Complete = CompleteInstance;
}

export type IdentifyCluster = Identify.Cluster;
export const IdentifyCluster = Identify.Cluster;
ClusterRegistry.register(Identify.Complete);
