/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { LevelControl } from "../../../cluster/definitions/LevelControlCluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.1
 */
export type MoveToLevelRequest = TypeFromSchema<typeof LevelControl.TlvMoveToLevelRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2
 */
export type MoveRequest = TypeFromSchema<typeof LevelControl.TlvMoveRequest>;

/**
 * The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.
 *
 * The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second. A step
 * is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this as the device is
 * able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is able.
 *
 * If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.3
 */
export type StepRequest = TypeFromSchema<typeof LevelControl.TlvStepRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.4
 */
export type StopRequest = TypeFromSchema<typeof LevelControl.TlvStopRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export type MoveToLevelWithOnOffRequest = TypeFromSchema<typeof LevelControl.TlvMoveToLevelWithOnOffRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export type MoveWithOnOffRequest = TypeFromSchema<typeof LevelControl.TlvMoveWithOnOffRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export type StepWithOnOffRequest = TypeFromSchema<typeof LevelControl.TlvStepWithOnOffRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export type StopWithOnOffRequest = TypeFromSchema<typeof LevelControl.TlvStopWithOnOffRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.5
 */
export type MoveToClosestFrequencyRequest = TypeFromSchema<typeof LevelControl.TlvMoveToClosestFrequencyRequest>;

export namespace LevelControlInterface {
    export interface Base {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.1
         */
        moveToLevel(request: MoveToLevelRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2
         */
        move(request: MoveRequest): MaybePromise;

        /**
         * The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.
         *
         * The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second.
         * A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this
         * as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is
         * able.
         *
         * If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.3
         */
        step(request: StepRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.4
         */
        stop(request: StopRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
         */
        moveToLevelWithOnOff(request: MoveToLevelWithOnOffRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
         */
        moveWithOnOff(request: MoveWithOnOffRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
         */
        stepWithOnOff(request: StepWithOnOffRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
         */
        stopWithOnOff(request: StopWithOnOffRequest): MaybePromise;
    }

    export interface Frequency {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.5
         */
        moveToClosestFrequency(request: MoveToClosestFrequencyRequest): MaybePromise;
    }
}

export type LevelControlInterface = {
    components: [
        { flags: {}, methods: LevelControlInterface.Base },
        { flags: { frequency: true }, methods: LevelControlInterface.Frequency }
    ]
};
