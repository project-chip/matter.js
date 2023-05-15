/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, Cluster, ClusterExtend, OptionalEvent, EventPriority } from "./Cluster.js";
import { TlvUInt8 } from "../tlv/TlvNumber.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvField } from "../tlv/TlvObject.js";

/**
 * Exposes interactions with a switch device for the purpose of using those interactions by other devices
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 1.11
 */
export const LatchingSwitchCluster = Cluster({
    id: 0x3b,
    name: "Switch",
    revision: 1,

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.11.4 */
    features: {
        /**  Indicates a switch that maintains its position after being pressed (or turned) */
        latchingSwitch: BitFlag(0), // TODO: Validate when set, momentarySwitch is NOT set.

        /** Indicates a switch that does not maintain its position after being pressed (or turned)  */
        momentarySwitch: BitFlag(1), // TODO: Validate when set, latchingSwitch is NOT set.

        /** Indicates a momentary switch that can distinguish and report release events. */
        momentarySwitchRelease: BitFlag(2), // TODO: Validate when set, momentarySwitch is set.

        /** Indicates a momentary switch that can distinguish and report long presses from short presses. */
        momentarySwitchLongPress: BitFlag(3), // TODO: Validate when set, momentarySwitch and momentarySwitchRelease are both set.

        /** 
         * Idicates a momentary switch that can distinguish and report double press 
         *  and potentially multiple presses with more events, such as triple press, etc. 
         */
        momentarySwitchMultiPress: BitFlag(4), // TODO: Validate when set, momentarySwitch and momentarySwitchRelease are both set.
    },
    supportedFeatures: {
        latchingSwitch: true,
        momentarySwitch: false,
        momentarySwitchRelease: false,
        momentarySwitchLongPress: false,
        momentarySwitchMultiPress: false,
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.11.5 */
    attributes: {
        /** Indicates the maximum number of positions the switch has with a minimum of 2 */
        numberOfPositions: Attribute(0, TlvUInt8.bound({ min: 2 }), { default: 2 }),

        /** Indicates the position of the switch with a valid range of zero to NumberOfPositions-1 */
        currentPosition: Attribute(1, TlvUInt8, { default: 0 }),
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 11.11.7 */
    events: {
        /** Generated when the latching switch is moved to a new position. */
        SwitchLatched: OptionalEvent(0, EventPriority.Info, { newPosition: TlvField(0, TlvUInt8) }),
    }
});

export const MomentarySwitchCluster = ClusterExtend(
    LatchingSwitchCluster,
    {
        supportedFeatures: {
            latchingSwitch: false,
            momentarySwitch: true,
            momentarySwitchRelease: false,
            momentarySwitchLongPress: false,
            momentarySwitchMultiPress: false,
        },
        attributes: {
            /** Indicates how many consecutive presses can be detected/reported by a multi-press switch */
            multiPressMax: Attribute(2, TlvUInt8.bound({ min: 2 }), { default: 2 }),
        },
        events: {
            /** Generated when the momentary switch starts to be pressed. */
            InitialPress: OptionalEvent(1, EventPriority.Info, { newPosition: TlvField(0, TlvUInt8) }),

            /** Generated when the momentary switch has been pressed for a "long" time. */
            LongPress: OptionalEvent(2, EventPriority.Info, { newPosition: TlvField(0, TlvUInt8) }),

            /** Generated when the momentary switch has been released. */
            ShortRelease: OptionalEvent(3, EventPriority.Info, { previousPosition: TlvField(0, TlvUInt8) }),

            /** Gnerated when the momentary switch has been released. */
            LongRelease: OptionalEvent(4, EventPriority.Info, { previousPosition: TlvField(0, TlvUInt8) }),

            /** Indicates how many times the switch has been pressed in a multi-press sequence during that sequence */
            MultiPressOngoing: OptionalEvent(5, EventPriority.Info, { newPosition: TlvField(0, TlvUInt8), currentNumberOfPressesCounted: TlvField(1, TlvUInt8.bound({ min: 2 })) }),

            /** Indicates how many times the switch has been pressed after it has been detected that the sequence has ended. */
            MultiPressComplete: OptionalEvent(6, EventPriority.Info, { previousPosition: TlvField(0, TlvUInt8), totalNumberOfPressesCounted: TlvField(1, TlvUInt8.bound({ min: 1 })) }),
        }
    }
);

export const MomentarySwitchClusterwithRelease = ClusterExtend(
    MomentarySwitchCluster,
    {
        supportedFeatures: {
            latchingSwitch: false,
            momentarySwitch: true,
            momentarySwitchRelease: true,
            momentarySwitchLongPress: false,
            momentarySwitchMultiPress: false,
        },
    },
);

export const MomentarySwitchClusterWithReleaseAndLongPress = ClusterExtend(
    MomentarySwitchClusterwithRelease,
    {
        supportedFeatures: {
            latchingSwitch: false,
            momentarySwitch: true,
            momentarySwitchRelease: true,
            momentarySwitchLongPress: true,
            momentarySwitchMultiPress: false,
        },
    },
);

export const MomentarySwitchClusterwithMultiPress = ClusterExtend(
    MomentarySwitchCluster,
    {
        supportedFeatures: {
            latchingSwitch: false,
            momentarySwitch: true,
            momentarySwitchRelease: true,
            momentarySwitchLongPress: false,
            momentarySwitchMultiPress: true,
        },
    },
);

export const MomentarySwitchClusterwithLongPressAndMultiPress = ClusterExtend(
    MomentarySwitchCluster,
    {
        supportedFeatures: {
            latchingSwitch: false,
            momentarySwitch: true,
            momentarySwitchRelease: true,
            momentarySwitchLongPress: true,
            momentarySwitchMultiPress: true,
        },
    },
);
