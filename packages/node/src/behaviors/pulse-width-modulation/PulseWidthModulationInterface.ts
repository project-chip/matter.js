/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LevelControl } from "#clusters/level-control";
import { MaybePromise } from "#general";
import { TypeFromSchema } from "#types";

/**
 * @see {@link MatterSpecification.v11.Cluster} § 1.6.6.1
 */
export type MoveToLevelRequest = TypeFromSchema<typeof LevelControl.TlvMoveToLevelRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 1.6.6.2
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
 * @see {@link MatterSpecification.v11.Cluster} § 1.6.6.3
 */
export type StepRequest = TypeFromSchema<typeof LevelControl.TlvStepRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 1.6.6.4
 */
export type StopRequest = TypeFromSchema<typeof LevelControl.TlvStopRequest>;

/**
 * @see {@link MatterSpecification.v11.Cluster} § 1.6.6.5
 */
export type MoveToClosestFrequencyRequest = TypeFromSchema<typeof LevelControl.TlvMoveToClosestFrequencyRequest>;

export namespace PulseWidthModulationInterface {
    export interface Base {
        /**
         * @see {@link MatterSpecification.v11.Cluster} § 1.6.6.1
         */
        moveToLevel(request: MoveToLevelRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 1.6.6.2
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
         * @see {@link MatterSpecification.v11.Cluster} § 1.6.6.3
         */
        step(request: StepRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 1.6.6.4
         */
        stop(request: StopRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 1.6.6
         */
        moveToLevelWithOnOff(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 1.6.6
         */
        moveWithOnOff(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 1.6.6
         */
        stepWithOnOff(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v11.Cluster} § 1.6.6
         */
        stopWithOnOff(): MaybePromise;
    }

    export interface Frequency {
        /**
         * @see {@link MatterSpecification.v11.Cluster} § 1.6.6.5
         */
        moveToClosestFrequency(request: MoveToClosestFrequencyRequest): MaybePromise;
    }
}

export type PulseWidthModulationInterface = {
    components: [
        { flags: {}; methods: PulseWidthModulationInterface.Base },
        { flags: { frequency: true }; methods: PulseWidthModulationInterface.Frequency },
    ];
};
