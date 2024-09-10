/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "#general";
import { ColorControl } from "#clusters/color-control";

export namespace ColorControlInterface {
    export interface HueSaturation {
        /**
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.4
         */
        moveToHue(request: ColorControl.MoveToHueRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.5
         */
        moveHue(request: ColorControl.MoveHueRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.6
         */
        stepHue(request: ColorControl.StepHueRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.7
         */
        moveToSaturation(request: ColorControl.MoveToSaturationRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.8
         */
        moveSaturation(request: ColorControl.MoveSaturationRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.9
         */
        stepSaturation(request: ColorControl.StepSaturationRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.10
         */
        moveToHueAndSaturation(request: ColorControl.MoveToHueAndSaturationRequest): MaybePromise;
    }

    export interface Xy {
        /**
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.11
         */
        moveToColor(request: ColorControl.MoveToColorRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.12
         */
        moveColor(request: ColorControl.MoveColorRequest): MaybePromise;

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.13
         */
        stepColor(request: ColorControl.StepColorRequest): MaybePromise;
    }

    export interface ColorTemperature {
        /**
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.14
         */
        moveToColorTemperature(request: ColorControl.MoveToColorTemperatureRequest): MaybePromise;

        /**
         * The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.21
         */
        moveColorTemperature(request: ColorControl.MoveColorTemperatureRequest): MaybePromise;

        /**
         * The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified step
         * size.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.22
         */
        stepColorTemperature(request: ColorControl.StepColorTemperatureRequest): MaybePromise;
    }

    export interface EnhancedHue {
        /**
         * The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their current
         * hue to a target hue.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.15
         */
        enhancedMoveToHue(request: ColorControl.EnhancedMoveToHueRequest): MaybePromise;

        /**
         * The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their current
         * hue to a target hue.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.16
         */
        enhancedMoveHue(request: ColorControl.EnhancedMoveHueRequest): MaybePromise;

        /**
         * The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a
         * target hue, resulting in a linear transition through XY space.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.17
         */
        enhancedStepHue(request: ColorControl.EnhancedStepHueRequest): MaybePromise;

        /**
         * The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition from
         * their current hue to a target hue and from their current saturation to a target saturation.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.18
         */
        enhancedMoveToHueAndSaturation(request: ColorControl.EnhancedMoveToHueAndSaturationRequest): MaybePromise;
    }

    export interface ColorLoop {
        /**
         * The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through its
         * range of hues.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.19
         */
        colorLoopSet(request: ColorControl.ColorLoopSetRequest): MaybePromise;
    }

    export interface HueSaturationOrXyOrColorTemperature {
        /**
         * The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this
         * automatically provides symmetry to the Level Control cluster.)
         *
         * NOTE the StopMoveStep command has no effect on an active color loop.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.20
         */
        stopMoveStep(request: ColorControl.StopMoveStepRequest): MaybePromise;
    }
}

export type ColorControlInterface = {
    components: [
        { flags: { hueSaturation: true }, methods: ColorControlInterface.HueSaturation },
        { flags: { xy: true }, methods: ColorControlInterface.Xy },
        { flags: { colorTemperature: true }, methods: ColorControlInterface.ColorTemperature },
        { flags: { enhancedHue: true }, methods: ColorControlInterface.EnhancedHue },
        { flags: { colorLoop: true }, methods: ColorControlInterface.ColorLoop },
        { flags: { hueSaturation: true }, methods: ColorControlInterface.HueSaturationOrXyOrColorTemperature },
        { flags: { xy: true }, methods: ColorControlInterface.HueSaturationOrXyOrColorTemperature },
        { flags: { colorTemperature: true }, methods: ColorControlInterface.HueSaturationOrXyOrColorTemperature }
    ]
};
