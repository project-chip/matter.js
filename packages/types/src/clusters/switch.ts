/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { FixedAttribute, Event, EventPriority, Attribute } from "../cluster/Cluster.js";
import { TlvUInt8 } from "../tlv/TlvNumber.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace Switch {
    /**
     * These are optional features supported by SwitchCluster.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.4
     */
    export enum Feature {
        /**
         * LatchingSwitch (LS)
         *
         * This feature is for a switch that maintains its position after being pressed (or turned).
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.4.1
         */
        LatchingSwitch = "LatchingSwitch",

        /**
         * MomentarySwitch (MS)
         *
         * This feature is for a switch that does not maintain its position after being pressed (or turned). After
         * releasing, it goes back to its idle position.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.4.2
         */
        MomentarySwitch = "MomentarySwitch",

        /**
         * MomentarySwitchRelease (MSR)
         *
         * This feature is for a momentary switch that can distinguish and report release events. When this feature
         * flag MSR is present, MS shall be present as well.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.4.3
         */
        MomentarySwitchRelease = "MomentarySwitchRelease",

        /**
         * MomentarySwitchLongPress (MSL)
         *
         * This feature is for a momentary switch that can distinguish and report long presses from short presses. When
         * this feature flag MSL is present, MS and MSR shall be present as well.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.4.4
         */
        MomentarySwitchLongPress = "MomentarySwitchLongPress",

        /**
         * MomentarySwitchMultiPress (MSM)
         *
         * This feature is for a momentary switch that can distinguish and report double press and potentially multiple
         * presses with more events, such as triple press, etc. When this feature flag MSM is present, MS and MSR shall
         * be present as well.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.4.5
         */
        MomentarySwitchMultiPress = "MomentarySwitchMultiPress"
    }

    /**
     * Body of the Switch multiPressOngoing event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.6
     */
    export const TlvMultiPressOngoingEvent = TlvObject({
        /**
         * This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.6.1
         */
        newPosition: TlvField(0, TlvUInt8),

        /**
         * This field shall contain:
         *
         *   • a value of 2 when the second press of a multi-press sequence has been detected,
         *
         *   • a value of 3 when the third press of a multi-press sequence has been detected,
         *
         *   • a value of N when the Nth press of a multi-press sequence has been detected.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.6.2
         */
        currentNumberOfPressesCounted: TlvField(1, TlvUInt8.bound({ min: 2 }))
    });

    /**
     * Body of the Switch multiPressOngoing event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.6
     */
    export interface MultiPressOngoingEvent extends TypeFromSchema<typeof TlvMultiPressOngoingEvent> {}

    /**
     * Body of the Switch multiPressComplete event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.7
     */
    export const TlvMultiPressCompleteEvent = TlvObject({
        previousPosition: TlvField(0, TlvUInt8),
        totalNumberOfPressesCounted: TlvField(1, TlvUInt8.bound({ min: 1 }))
    });

    /**
     * Body of the Switch multiPressComplete event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.7
     */
    export interface MultiPressCompleteEvent extends TypeFromSchema<typeof TlvMultiPressCompleteEvent> {}

    /**
     * Body of the Switch switchLatched event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.1
     */
    export const TlvSwitchLatchedEvent = TlvObject({
        /**
         * This field shall indicate the new value of the CurrentPosition attribute, i.e. after the move.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.1.1
         */
        newPosition: TlvField(0, TlvUInt8)
    });

    /**
     * Body of the Switch switchLatched event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.1
     */
    export interface SwitchLatchedEvent extends TypeFromSchema<typeof TlvSwitchLatchedEvent> {}

    /**
     * Body of the Switch initialPress event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.2
     */
    export const TlvInitialPressEvent = TlvObject({
        /**
         * This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.2.1
         */
        newPosition: TlvField(0, TlvUInt8)
    });

    /**
     * Body of the Switch initialPress event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.2
     */
    export interface InitialPressEvent extends TypeFromSchema<typeof TlvInitialPressEvent> {}

    /**
     * Body of the Switch longPress event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.3
     */
    export const TlvLongPressEvent = TlvObject({
        /**
         * This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.3.1
         */
        newPosition: TlvField(0, TlvUInt8)
    });

    /**
     * Body of the Switch longPress event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.3
     */
    export interface LongPressEvent extends TypeFromSchema<typeof TlvLongPressEvent> {}

    /**
     * Body of the Switch longRelease event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.5
     */
    export const TlvLongReleaseEvent = TlvObject({
        /**
         * This field shall indicate the previous value of the CurrentPosition attribute, i.e. just prior to release.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.5.1
         */
        previousPosition: TlvField(0, TlvUInt8)
    });

    /**
     * Body of the Switch longRelease event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.5
     */
    export interface LongReleaseEvent extends TypeFromSchema<typeof TlvLongReleaseEvent> {}

    /**
     * Body of the Switch shortRelease event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.4
     */
    export const TlvShortReleaseEvent = TlvObject({
        /**
         * This field shall indicate the previous value of the CurrentPosition attribute, i.e. just prior to release.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.4.1
         */
        previousPosition: TlvField(0, TlvUInt8)
    });

    /**
     * Body of the Switch shortRelease event
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.4
     */
    export interface ShortReleaseEvent extends TypeFromSchema<typeof TlvShortReleaseEvent> {}

    /**
     * A SwitchCluster supports these elements if it supports feature MomentarySwitchMultiPress.
     */
    export const MomentarySwitchMultiPressComponent = MutableCluster.Component({
        attributes: {
            /**
             * Indicates how many consecutive presses can be detected and reported by a momentary switch which supports
             * multi-press (e.g. it will report the value 3 if it can detect single press, double press and triple
             * press, but not quad press and beyond).
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.5.3
             */
            multiPressMax: FixedAttribute(0x2, TlvUInt8.bound({ min: 2 }), { default: 2 })
        },

        events: {
            /**
             * This event shall be generated to indicate how many times the momentary switch has been pressed in a
             * multi-press sequence, during that sequence. See Multi Press Details below.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.6
             */
            multiPressOngoing: Event(0x5, EventPriority.Info, TlvMultiPressOngoingEvent),

            /**
             * This event shall be generated to indicate how many times the momentary switch has been pressed in a
             * multi-press sequence, after it has been detected that the sequence has ended. See Multi Press Details.
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
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.7
             */
            multiPressComplete: Event(0x6, EventPriority.Info, TlvMultiPressCompleteEvent)
        }
    });

    /**
     * A SwitchCluster supports these elements if it supports feature LatchingSwitch.
     */
    export const LatchingSwitchComponent = MutableCluster.Component({
        events: {
            /**
             * This event shall be generated, when the latching switch is moved to a new position. It may have been
             * delayed by debouncing within the switch.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.1
             */
            switchLatched: Event(0x0, EventPriority.Info, TlvSwitchLatchedEvent)
        }
    });

    /**
     * A SwitchCluster supports these elements if it supports feature MomentarySwitch.
     */
    export const MomentarySwitchComponent = MutableCluster.Component({
        events: {
            /**
             * This event shall be generated, when the momentary switch starts to be pressed (after debouncing).
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.2
             */
            initialPress: Event(0x1, EventPriority.Info, TlvInitialPressEvent)
        }
    });

    /**
     * A SwitchCluster supports these elements if it supports feature MomentarySwitchLongPress.
     */
    export const MomentarySwitchLongPressComponent = MutableCluster.Component({
        events: {
            /**
             * This event shall be generated, when the momentary switch has been pressed for a "long" time (this time
             * interval is manufacturer determined (e.g. since it depends on the switch physics)).
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.3
             */
            longPress: Event(0x2, EventPriority.Info, TlvLongPressEvent),

            /**
             * This event shall be generated, when the momentary switch has been released (after debouncing) and after
             * having been pressed for a long time, i.e. this event shall be generated when the switch is released if a
             * LongPress event has been generated since the previous InitialPress event. Also see Section 1.13.7,
             * “Sequence of generated events”.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.5
             */
            longRelease: Event(0x4, EventPriority.Info, TlvLongReleaseEvent)
        }
    });

    /**
     * A SwitchCluster supports these elements if it supports feature MomentarySwitchRelease.
     */
    export const MomentarySwitchReleaseComponent = MutableCluster.Component({
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
             *   • Also see Section 1.13.7, “Sequence of generated events”.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.6.4
             */
            shortRelease: Event(0x3, EventPriority.Info, TlvShortReleaseEvent)
        }
    });

    /**
     * These elements and properties are present in all Switch clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x3b,
        name: "Switch",
        revision: 1,

        features: {
            /**
             * LatchingSwitch
             *
             * This feature is for a switch that maintains its position after being pressed (or turned).
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.4.1
             */
            latchingSwitch: BitFlag(0),

            /**
             * MomentarySwitch
             *
             * This feature is for a switch that does not maintain its position after being pressed (or turned). After
             * releasing, it goes back to its idle position.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.4.2
             */
            momentarySwitch: BitFlag(1),

            /**
             * MomentarySwitchRelease
             *
             * This feature is for a momentary switch that can distinguish and report release events. When this feature
             * flag MSR is present, MS shall be present as well.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.4.3
             */
            momentarySwitchRelease: BitFlag(2),

            /**
             * MomentarySwitchLongPress
             *
             * This feature is for a momentary switch that can distinguish and report long presses from short presses.
             * When this feature flag MSL is present, MS and MSR shall be present as well.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.4.4
             */
            momentarySwitchLongPress: BitFlag(3),

            /**
             * MomentarySwitchMultiPress
             *
             * This feature is for a momentary switch that can distinguish and report double press and potentially
             * multiple presses with more events, such as triple press, etc. When this feature flag MSM is present, MS
             * and MSR shall be present as well.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.4.5
             */
            momentarySwitchMultiPress: BitFlag(4)
        },

        attributes: {
            /**
             * Indicates the maximum number of positions the switch has. Any kind of switch has a minimum of 2
             * positions. Also see Multi Position Details for the case NumberOfPositions>2.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.5.1
             */
            numberOfPositions: FixedAttribute(0x0, TlvUInt8.bound({ min: 2 }), { default: 2 }),

            /**
             * Indicates the position of the switch. The valid range is zero to NumberOfPositions-1. CurrentPosition
             * value 0 shall be assigned to the default position of the switch: for example the "open" state of a
             * rocker switch, or the "idle" state of a push button switch.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.13.5.2
             */
            currentPosition: Attribute(0x1, TlvUInt8, { persistent: true, default: 0 })
        },

        /**
         * This metadata controls which SwitchCluster elements matter.js activates for specific feature combinations.
         */
        extensions: MutableCluster.Extensions(
            { flags: { momentarySwitchMultiPress: true }, component: MomentarySwitchMultiPressComponent },
            { flags: { latchingSwitch: true }, component: LatchingSwitchComponent },
            { flags: { momentarySwitch: true }, component: MomentarySwitchComponent },
            { flags: { momentarySwitchLongPress: true }, component: MomentarySwitchLongPressComponent },
            { flags: { momentarySwitchRelease: true }, component: MomentarySwitchReleaseComponent },
            { flags: { momentarySwitchRelease: true, momentarySwitch: false }, component: false },
            { flags: { momentarySwitchLongPress: true, momentarySwitch: false }, component: false },
            { flags: { momentarySwitchLongPress: true, momentarySwitchRelease: false }, component: false },
            { flags: { momentarySwitchMultiPress: true, momentarySwitch: false }, component: false },
            { flags: { momentarySwitchMultiPress: true, momentarySwitchRelease: false }, component: false },
            { flags: { latchingSwitch: true, momentarySwitch: true }, component: false },
            { flags: { latchingSwitch: false, momentarySwitch: false }, component: false }
        )
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster.ExtensibleOnly(Base);

    /**
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
     * Per the Matter specification you cannot use {@link SwitchCluster} without enabling certain feature combinations.
     * You must use the {@link with} factory method to obtain a working cluster.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.13
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    const MSM = { momentarySwitchMultiPress: true };
    const LS = { latchingSwitch: true };
    const MS = { momentarySwitch: true };
    const MSL = { momentarySwitchLongPress: true };
    const MSR = { momentarySwitchRelease: true };

    /**
     * @see {@link Complete}
     */
    export const CompleteInstance = MutableCluster({
        id: Base.id,
        name: Base.name,
        revision: Base.revision,
        features: Base.features,

        attributes: {
            ...Base.attributes,
            multiPressMax: MutableCluster.AsConditional(
                MomentarySwitchMultiPressComponent.attributes.multiPressMax,
                { mandatoryIf: [MSM] }
            )
        },

        events: {
            switchLatched: MutableCluster.AsConditional(
                LatchingSwitchComponent.events.switchLatched,
                { mandatoryIf: [LS] }
            ),
            initialPress: MutableCluster.AsConditional(
                MomentarySwitchComponent.events.initialPress,
                { mandatoryIf: [MS] }
            ),
            longPress: MutableCluster.AsConditional(
                MomentarySwitchLongPressComponent.events.longPress,
                { mandatoryIf: [MSL] }
            ),
            shortRelease: MutableCluster.AsConditional(
                MomentarySwitchReleaseComponent.events.shortRelease,
                { mandatoryIf: [MSR] }
            ),
            longRelease: MutableCluster.AsConditional(
                MomentarySwitchLongPressComponent.events.longRelease,
                { mandatoryIf: [MSL] }
            ),
            multiPressOngoing: MutableCluster.AsConditional(
                MomentarySwitchMultiPressComponent.events.multiPressOngoing,
                { mandatoryIf: [MSM] }
            ),
            multiPressComplete: MutableCluster.AsConditional(
                MomentarySwitchMultiPressComponent.events.multiPressComplete,
                { mandatoryIf: [MSM] }
            )
        }
    });

    /**
     * This cluster supports all Switch features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export interface Complete extends Identity<typeof CompleteInstance> {}

    export const Complete: Complete = CompleteInstance;
}

export type SwitchCluster = Switch.Cluster;
export const SwitchCluster = Switch.Cluster;
ClusterRegistry.register(Switch.Complete);
