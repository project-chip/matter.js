/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "#general";
import { FanControl } from "#clusters/fan-control";

export namespace FanControlInterface {
    export interface Step {
        /**
         * This command speeds up or slows down the fan, in steps, without the client having to know the fan speed. This
         * command supports, for example, a user operated wall switch, where the user provides the feedback or control
         * to stop sending this command when the proper speed is reached. The step speed values are implementation
         * specific. How many step speeds are implemented is implementation specific.
         *
         * This command supports these fields:
         *
         * @see {@link MatterSpecification.v141.Cluster} § 4.4.7.1
         */
        step(request: FanControl.StepRequest): MaybePromise;
    }
}

export type FanControlInterface = { components: [{ flags: { step: true }, methods: FanControlInterface.Step }] };
