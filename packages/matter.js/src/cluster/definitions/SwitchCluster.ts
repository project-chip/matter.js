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
    preventCluster,
    ClusterForBaseCluster,
    AsConditional
} from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { FixedAttribute, Attribute, Event, EventPriority, Cluster as CreateCluster } from "../../cluster/Cluster.js";
import { TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

export namespace Switch {
    /**
     * Body of the Switch multiPressOngoing event
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.6
     */
    export const TlvMultiPressOngoingEvent = TlvObject({
        newPosition: TlvField(0, TlvUInt8),
        currentNumberOfPressesCounted: TlvField(1, TlvUInt8.bound({ min: 2 }))
    });

    /**
     * Body of the Switch multiPressComplete event
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.7
     */
    export const TlvMultiPressCompleteEvent = TlvObject({
        previousPosition: TlvField(0, TlvUInt8),
        totalNumberOfPressesCounted: TlvField(1, TlvUInt8.bound({ min: 1 }))
    });

    /**
     * Body of the Switch switchLatched event
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.1
     */
    export const TlvSwitchLatchedEvent = TlvObject({ newPosition: TlvField(0, TlvUInt8) });

    /**
     * Body of the Switch initialPress event
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.2
     */
    export const TlvInitialPressEvent = TlvObject({ newPosition: TlvField(0, TlvUInt8) });

    /**
     * Body of the Switch longPress event
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.3
     */
    export const TlvLongPressEvent = TlvObject({ newPosition: TlvField(0, TlvUInt8) });

    /**
     * Body of the Switch longRelease event
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.5
     */
    export const TlvLongReleaseEvent = TlvObject({ previousPosition: TlvField(0, TlvUInt8) });

    /**
     * Body of the Switch shortRelease event
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.4
     */
    export const TlvShortReleaseEvent = TlvObject({ previousPosition: TlvField(0, TlvUInt8) });

    /**
     * These are optional features supported by SwitchCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.4
     */
    export enum Feature {
        /**
         * LatchingSwitch
         */
        LatchingSwitch = "LatchingSwitch",

        /**
         * MomentarySwitch
         */
        MomentarySwitch = "MomentarySwitch",

        /**
         * MomentarySwitchRelease
         */
        MomentarySwitchRelease = "MomentarySwitchRelease",

        /**
         * MomentarySwitchLongPress
         */
        MomentarySwitchLongPress = "MomentarySwitchLongPress",

        /**
         * MomentarySwitchMultiPress
         */
        MomentarySwitchMultiPress = "MomentarySwitchMultiPress"
    }

    /**
     * These elements and properties are present in all Switch clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x3b,
        name: "Switch",
        revision: 1,

        features: {
            /**
             * LatchingSwitch
             */
            latchingSwitch: BitFlag(0),

            /**
             * MomentarySwitch
             */
            momentarySwitch: BitFlag(1),

            /**
             * MomentarySwitchRelease
             */
            momentarySwitchRelease: BitFlag(2),

            /**
             * MomentarySwitchLongPress
             */
            momentarySwitchLongPress: BitFlag(3),

            /**
             * MomentarySwitchMultiPress
             */
            momentarySwitchMultiPress: BitFlag(4)
        },

        attributes: {
            /**
             * This attribute shall indicate the maximum number of positions the switch has. Any kind of switch has a
             * minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case
             * NumberOfPositions>2.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.5.1
             */
            numberOfPositions: FixedAttribute(0x0, TlvUInt8.bound({ min: 2 }), { default: 2 }),

            /**
             * This attribute shall indicate the position of the switch. The valid range is zero to
             * NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the switch:
             * for example the "open" state of a rocker switch, or the "idle" state of a push button switch.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.5.2
             */
            currentPosition: Attribute(0x1, TlvUInt8, { persistent: true, default: 0 })
        }
    });

    /**
     * A SwitchCluster supports these elements if it supports feature MomentarySwitchMultiPress.
     */
    export const MomentarySwitchMultiPressComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute shall indicate how many consecutive presses can be detected and reported by a momentary
             * switch which supports multi-press (e.g. it will report the value 3 if it can detect single press, double
             * press and triple press, but not quad press and beyond).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.5.3
             */
            multiPressMax: FixedAttribute(0x2, TlvUInt8.bound({ min: 2 }), { default: 2 })
        },

        events: {
            /**
             * This event shall be generated to indicate how many times the momentary switch has been pressed in a
             * multi-press sequence, during that sequence. See Section 1.11.9, “Sequence of events for MultiPress”
             * below.
             *
             * The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.
             *
             * The CurrentNumberOfPressesCounted field shall contain:
             *
             *   • a value of 2 when the second press of a multi-press sequence has been detected,
             *
             *   • a value of 3 when the third press of a multi-press sequence has been detected,
             *
             *   • a value of N when the Nth press of a multi-press sequence has been detected.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.6
             */
            multiPressOngoing: Event(0x5, EventPriority.Info, TlvMultiPressOngoingEvent),

            /**
             * This event shall be generated to indicate how many times the momentary switch has been pressed in a
             * multi-press sequence, after it has been detected that the sequence has ended. See Section 1.11.9,
             * “Sequence of events for MultiPress” below.
             *
             * The PreviousPosition field shall indicate the previous value of the CurrentPosition attribute, i.e. just
             * prior to release.
             *
             * The TotalNumberOfPressesCounted field shall contain:
             *
             *   • a value of 1 when there was one press in a multi-press sequence (and the sequence has ended),
             *
             *     i.e. there was no double press (or more),
             *
             *   • a value of 2 when there were exactly two presses in a multi-press sequence (and the sequence has
             *     ended),
             *
             *   • a value of 3 when there were exactly three presses in a multi-press sequence (and the sequence has
             *     ended),
             *
             *   • a value of N when there were exactly N presses in a multi-press sequence (and the sequence has
             *     ended).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.7
             */
            multiPressComplete: Event(0x6, EventPriority.Info, TlvMultiPressCompleteEvent)
        }
    });

    /**
     * A SwitchCluster supports these elements if it supports feature LatchingSwitch.
     */
    export const LatchingSwitchComponent = ClusterComponent({
        events: {
            /**
             * This event shall be generated, when the latching switch is moved to a new position. It may have been
             * delayed by debouncing within the switch.
             *
             * The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. after the move.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.1
             */
            switchLatched: Event(0x0, EventPriority.Info, TlvSwitchLatchedEvent)
        }
    });

    /**
     * A SwitchCluster supports these elements if it supports feature MomentarySwitch.
     */
    export const MomentarySwitchComponent = ClusterComponent({
        events: {
            /**
             * This event shall be generated, when the momentary switch starts to be pressed (after debouncing).
             *
             * The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.2
             */
            initialPress: Event(0x1, EventPriority.Info, TlvInitialPressEvent)
        }
    });

    /**
     * A SwitchCluster supports these elements if it supports feature MomentarySwitchLongPress.
     */
    export const MomentarySwitchLongPressComponent = ClusterComponent({
        events: {
            /**
             * This event shall be generated, when the momentary switch has been pressed for a "long" time (this time
             * interval is manufacturer determined (e.g. since it depends on the switch physics)).
             *
             * The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.3
             */
            longPress: Event(0x2, EventPriority.Info, TlvLongPressEvent),

            /**
             * This event shall be generated, when the momentary switch has been released (after debouncing) and after
             * having been pressed for a long time, i.e. this event shall be generated when the switch is released if a
             * LongPress event has been generated since since the previous InitialPress event. Also see Section 1.11.8,
             * “Sequence of generated events”.
             *
             * The PreviousPosition field shall indicate the previous value of the CurrentPosition attribute, i.e. just
             * prior to release.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.5
             */
            longRelease: Event(0x4, EventPriority.Info, TlvLongReleaseEvent)
        }
    });

    /**
     * A SwitchCluster supports these elements if it supports feature MomentarySwitchRelease.
     */
    export const MomentarySwitchReleaseComponent = ClusterComponent({
        events: {
            /**
             * This event shall be generated, when the momentary switch has been released (after debouncing).
             *
             *   • If the server supports the Momentary Switch LongPress (MSL) feature, this event shall be generated
             *     when the switch is released if no LongPress event had been generated since the previous InitialPress
             *     event.
             *
             *   • If the server does not support the Momentary Switch LongPress (MSL) feature, this event shall be
             *     generated when the switch is released - even when the switch was pressed for a long time.
             *
             *   • Also see Section 1.11.8, “Sequence of generated events”.
             *
             * The PreviousPosition field shall indicate the previous value of the CurrentPosition attribute, i.e. just
             * prior to release.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.4
             */
            shortRelease: Event(0x3, EventPriority.Info, TlvShortReleaseEvent)
        }
    });

    /**
     * Switch
     *
     * This cluster exposes interactions with a switch device, for the purpose of using those interactions by other
     * devices.
     *
     * Two types of switch devices are supported: latching switch (e.g. rocker switch) and momentary switch (e.g. push
     * button), distinguished with their feature flags.
     *
     * Interactions with the switch device are exposed as attributes (for the latching switch) and as events (for both
     * types of switches).
     *
     * An interested client may subscribe to these attributes/events and thus be informed of the interactions, and can
     * perform actions based on this, for example by sending commands to perform an action such as controlling a light
     * or a window shade.
     *
     * SwitchCluster supports optional features that you can enable with the SwitchCluster.with() factory method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a Switch cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a Switch cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, MomentarySwitchMultiPressComponent, { momentarySwitchMultiPress: true });
            extendCluster(cluster, LatchingSwitchComponent, { latchingSwitch: true });
            extendCluster(cluster, MomentarySwitchComponent, { momentarySwitch: true });
            extendCluster(cluster, MomentarySwitchLongPressComponent, { momentarySwitchLongPress: true });
            extendCluster(cluster, MomentarySwitchReleaseComponent, { momentarySwitchRelease: true });

            preventCluster(
                cluster,
                { momentarySwitchRelease: true, momentarySwitch: false },
                { momentarySwitchLongPress: true, momentarySwitch: false },
                { momentarySwitchLongPress: true, momentarySwitchRelease: false },
                { momentarySwitchMultiPress: true, momentarySwitch: false },
                { momentarySwitchMultiPress: true, momentarySwitchRelease: false },
                { latchingSwitch: true, momentarySwitch: true },
                { latchingSwitch: false, momentarySwitch: false }
            );

            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { momentarySwitchMultiPress: true } ? typeof MomentarySwitchMultiPressComponent : {})
        & (SF extends { latchingSwitch: true } ? typeof LatchingSwitchComponent : {})
        & (SF extends { momentarySwitch: true } ? typeof MomentarySwitchComponent : {})
        & (SF extends { momentarySwitchLongPress: true } ? typeof MomentarySwitchLongPressComponent : {})
        & (SF extends { momentarySwitchRelease: true } ? typeof MomentarySwitchReleaseComponent : {})
        & (SF extends { momentarySwitchRelease: true, momentarySwitch: false } ? never : {})
        & (SF extends { momentarySwitchLongPress: true, momentarySwitch: false } ? never : {})
        & (SF extends { momentarySwitchLongPress: true, momentarySwitchRelease: false } ? never : {})
        & (SF extends { momentarySwitchMultiPress: true, momentarySwitch: false } ? never : {})
        & (SF extends { momentarySwitchMultiPress: true, momentarySwitchRelease: false } ? never : {})
        & (SF extends { latchingSwitch: true, momentarySwitch: true } ? never : {})
        & (SF extends { latchingSwitch: false, momentarySwitch: false } ? never : {});

    const MSM = { momentarySwitchMultiPress: true };
    const LS = { latchingSwitch: true };
    const MS = { momentarySwitch: true };
    const MSL = { momentarySwitchLongPress: true };
    const MSR = { momentarySwitchRelease: true };

    /**
     * This cluster supports all Switch features. It may support illegal feature combinations.
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
            multiPressMax: AsConditional(
                MomentarySwitchMultiPressComponent.attributes.multiPressMax,
                { mandatoryIf: [MSM] }
            )
        },

        events: {
            switchLatched: AsConditional(LatchingSwitchComponent.events.switchLatched, { mandatoryIf: [LS] }),
            initialPress: AsConditional(MomentarySwitchComponent.events.initialPress, { mandatoryIf: [MS] }),
            longPress: AsConditional(MomentarySwitchLongPressComponent.events.longPress, { mandatoryIf: [MSL] }),
            shortRelease: AsConditional(MomentarySwitchReleaseComponent.events.shortRelease, { mandatoryIf: [MSR] }),
            longRelease: AsConditional(MomentarySwitchLongPressComponent.events.longRelease, { mandatoryIf: [MSL] }),
            multiPressOngoing: AsConditional(
                MomentarySwitchMultiPressComponent.events.multiPressOngoing,
                { mandatoryIf: [MSM] }
            ),
            multiPressComplete: AsConditional(
                MomentarySwitchMultiPressComponent.events.multiPressComplete,
                { mandatoryIf: [MSM] }
            )
        }
    });
}

export type SwitchCluster = typeof Switch.Cluster;
export const SwitchCluster = Switch.Cluster;
