/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    OptionalAttribute, WritableAttribute, OptionalWritableAttribute, Attribute, Cluster, Command, TlvNoResponse
} from "../Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvBitmap, TlvEnum, TlvUInt16, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvField, TlvObject } from "../../tlv/TlvObject.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../../spec/Specifications.js";

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.5.8 */
const TlvOptionsBitmap = TlvBitmap(TlvUInt8, {
    /** Dependency on On/Off cluster. */
    executeIfOff: BitFlag(0), // default: true

    /** Level effect on color. */
    coupleColorTempToLevel: BitFlag(1),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.6.1 */
const TlvMoveToLevelCommandRequest = TlvObject({
    level: TlvField(0, TlvUInt8.bound({ max: 254 })),
    transitionTime: TlvField(1, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(2, TlvOptionsBitmap),
    optionsOverride: TlvField(3, TlvOptionsBitmap),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.6.2 */
const TlvMoveCommandRequest = TlvObject({
    moveMode: TlvField(0, TlvEnum<MoveMode>()),
    rate: TlvField(1, TlvNullable(TlvUInt8)),
    optionsMask: TlvField(2, TlvOptionsBitmap),
    optionsOverride: TlvField(3, TlvOptionsBitmap),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.6.3 */
const TlvStepCommandRequest = TlvObject({
    stepMode: TlvField(0, TlvEnum<StepMode>()),
    stepSize: TlvField(1, TlvUInt8),
    transitionTime: TlvField(2, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(3, TlvOptionsBitmap),
    optionsOverride: TlvField(4, TlvOptionsBitmap),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.6.4 */
const TlvStopCommandRequest = TlvObject({
    optionsMask: TlvField(0, TlvOptionsBitmap),
    optionsOverride: TlvField(1, TlvOptionsBitmap),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.6.5  */
const TlvMoveToClosestFrequencyCommandRequest = TlvObject({
    frequency: TlvField(0, TlvUInt16),
})

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.4 */
const features = {
    /** Dependency with the On/Off cluster */
    onOff: BitFlag(0), // default: true

    /** Behavior that supports lighting applications. */
    lighting: BitFlag(1),

    /** Supports frequency attributes and behavior. */
    frequency: BitFlag(2)
};

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.6.2.1 */
export const enum MoveMode {
    Up = 0x0,
    Down = 0x1,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.6.3 */
export const enum StepMode {
    Up = 0x0,
    Down = 0x1,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.5 */
const commonAttributes = {
    /** Current level of this device. */
    currentLevel: Attribute(0x0, TlvNullable(TlvUInt8), { default: null, persistent: true, scene: true }),

    /** Minimum value of {@link attributes.currentLevel}. */
    minLevel: OptionalAttribute(0x02, TlvUInt8),

    /** Maximum value of {@link attributes.currentLevel}. */
    maxLevel: OptionalAttribute(0x03, TlvUInt8.bound({ max: 254 }), { default: 254 }),

    /** Time to move to/from the target when On/Off received by On/Off cluster on the same endpoint. */
    onOffTransitionTime: OptionalWritableAttribute(0x10, TlvUInt16, { default: 0 }),

    /** CurrentLevel when OnOff attr of On/Off cluster on the same endpoint is TRUE. */
    onLevel: WritableAttribute(0x11, TlvNullable(TlvUInt8), { default: null }),

    /** Time taken to move the current level from the min level to the max level. */
    onTransitionTime: OptionalWritableAttribute(0x12, TlvNullable(TlvUInt16), { default: null }),

    /** Time taken to move the current level from the max level to the minlevel. */
    offTransitionTime: OptionalWritableAttribute(0x13, TlvNullable(TlvUInt16), { default: null }),

    /** Default rate in units per second when a Move command has a null rate. */
    defaultMoveRate: OptionalWritableAttribute(0x14, TlvNullable(TlvUInt8)),

    /** Determines the default behavior of some cluster commands. */
    options: WritableAttribute(0x0f, TlvOptionsBitmap, { default: { executeIfOff: false, coupleColorTempToLevel: false } }),
};

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.6 */
const commonCommands = {
    /** Moves from the current level to the specified level.*/
    moveToLevel: Command(0x0, TlvMoveToLevelCommandRequest, 0x0, TlvNoResponse),

    /** Moves from the current level up or down in a continuous fashion. */
    move: Command(0x1, TlvMoveCommandRequest, 0x1, TlvNoResponse),

    /** Moves from the current level up or down in a stepwise fashion. */
    step: Command(0x2, TlvStepCommandRequest, 0x2, TlvNoResponse),

    /** Stops moving the current level. */
    stop: Command(0x3, TlvStopCommandRequest, 0x3, TlvNoResponse),

    /** Same as {@link commands.moveToLevel}, but change the status of OnOff device on same endpoint. */
    moveToLevelWithOnOff: Command(0x4, TlvMoveToLevelCommandRequest, 0x4, TlvNoResponse),

    /** Same as {@link commands.move}, but change the status of OnOff device on same endpoint. */
    moveWithOnOff: Command(0x5, TlvMoveCommandRequest, 0x5, TlvNoResponse),

    /** Same as {@link commands.step}, but change the status of OnOff device on same endpoint. */
    stepWithOnOff: Command(0x6, TlvStepCommandRequest, 0x6, TlvNoResponse),

    /** Same as {@link commands.stop}, but change the status of OnOff device on same endpoint. */
    stopWithOnOff: Command(0x7, TlvStopCommandRequest, 0x7, TlvNoResponse),
};

/**
 * Attributes and commands for changing the level of devices, e.g. light intensity
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6
 */
export const LevelControlClusterSchema = Cluster({
    id: 0x08,
    name: "LevelControl",
    revision: 5,
    features,
    attributes: {
        ...commonAttributes,

        /** Time until the current command is complete in 1/10ths of sec. */
        remainingTime: OptionalAttribute(0x01, TlvUInt16, { default: 0 }),

        /** Desired startup level for a device when it is supplied with power. */
        startUpCurrentLevel: OptionalWritableAttribute(0x4000, TlvNullable(TlvUInt8), { persistent: true }),
    },
    commands: commonCommands,
});

/**
 * Attributes and commands for Pulse Width Modulation (Provisional)
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 1.6.3
 */
export const PulseWidthModulationLevelControlClusterSchema = Cluster({
    id: 0x001c,
    name: "PulseWidthModulation",
    revision: 5,
    features,
    attributes: {
        ...commonAttributes,

        /** Frequency at which the device is at CurrentLevel. */
        currentFrequency: Attribute(0x04, TlvUInt16, { default: 0, persistent: true, scene: true }),

        /** Min value of CurrentFrequency capable of being assigned. */
        minFrequency: Attribute(0x05, TlvUInt16, { default: 0 }),

        /** Max value of CurrentFrequency capable of being assigned. */
        maxFrequency: Attribute(0x06, TlvUInt16, { default: 0 }),
    },
    commands: {
        ...commonCommands,

        /** Changes current frequency to the requested frequency, or to the closest frequency. */
        moveToClosestFrequency: Command(0x8, TlvMoveToClosestFrequencyCommandRequest, 0x8, TlvNoResponse),
    },
});
