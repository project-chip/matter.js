/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { ColorControl } from "../../../cluster/definitions/ColorControlCluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4
 */
export type MoveToHueRequest = TypeFromSchema<typeof ColorControl.TlvMoveToHueRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5
 */
export type MoveHueRequest = TypeFromSchema<typeof ColorControl.TlvMoveHueRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6
 */
export type StepHueRequest = TypeFromSchema<typeof ColorControl.TlvStepHueRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.7
 */
export type MoveToSaturationRequest = TypeFromSchema<typeof ColorControl.TlvMoveToSaturationRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.8
 */
export type MoveSaturationRequest = TypeFromSchema<typeof ColorControl.TlvMoveSaturationRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9
 */
export type StepSaturationRequest = TypeFromSchema<typeof ColorControl.TlvStepSaturationRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.10
 */
export type MoveToHueAndSaturationRequest = TypeFromSchema<typeof ColorControl.TlvMoveToHueAndSaturationRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.11
 */
export type MoveToColorRequest = TypeFromSchema<typeof ColorControl.TlvMoveToColorRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.12
 */
export type MoveColorRequest = TypeFromSchema<typeof ColorControl.TlvMoveColorRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.13
 */
export type StepColorRequest = TypeFromSchema<typeof ColorControl.TlvStepColorRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.14
 */
export type MoveToColorTemperatureRequest = TypeFromSchema<typeof ColorControl.TlvMoveToColorTemperatureRequest>;

/**
 * The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21
 */
export type MoveColorTemperatureRequest = TypeFromSchema<typeof ColorControl.TlvMoveColorTemperatureRequest>;

/**
 * The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified step size.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22
 */
export type StepColorTemperatureRequest = TypeFromSchema<typeof ColorControl.TlvStepColorTemperatureRequest>;

/**
 * The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their current hue to a
 * target hue.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15
 */
export type EnhancedMoveToHueRequest = TypeFromSchema<typeof ColorControl.TlvEnhancedMoveToHueRequest>;

/**
 * The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their current hue to a
 * target hue.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.16
 */
export type EnhancedMoveHueRequest = TypeFromSchema<typeof ColorControl.TlvEnhancedMoveHueRequest>;

/**
 * The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a target hue,
 * resulting in a linear transition through XY space.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17
 */
export type EnhancedStepHueRequest = TypeFromSchema<typeof ColorControl.TlvEnhancedStepHueRequest>;

/**
 * The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition from their
 * current hue to a target hue and from their current saturation to a target saturation.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18
 */
export type EnhancedMoveToHueAndSaturationRequest = TypeFromSchema<typeof ColorControl.TlvEnhancedMoveToHueAndSaturationRequest>;

/**
 * The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through its range of
 * hues.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19
 */
export type ColorLoopSetRequest = TypeFromSchema<typeof ColorControl.TlvColorLoopSetRequest>;

/**
 * The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this automatically
 * provides symmetry to the Level Control cluster.)
 *
 * Note: the StopMoveStep command has no effect on an active color loop.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.20
 */
export type StopMoveStepRequest = TypeFromSchema<typeof ColorControl.TlvStopMoveStepRequest>;

export namespace ColorControlInterface {
    export interface HueSaturation {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4
         */
        moveToHue(request: MoveToHueRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5
         */
        moveHue(request: MoveHueRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6
         */
        stepHue(request: StepHueRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.7
         */
        moveToSaturation(request: MoveToSaturationRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.8
         */
        moveSaturation(request: MoveSaturationRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9
         */
        stepSaturation(request: StepSaturationRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.10
         */
        moveToHueAndSaturation(request: MoveToHueAndSaturationRequest): MaybePromise;
    }

    export interface Xy {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.11
         */
        moveToColor(request: MoveToColorRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.12
         */
        moveColor(request: MoveColorRequest): MaybePromise;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.13
         */
        stepColor(request: StepColorRequest): MaybePromise;
    }

    export interface ColorTemperature {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.14
         */
        moveToColorTemperature(request: MoveToColorTemperatureRequest): MaybePromise;

        /**
         * The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21
         */
        moveColorTemperature(request: MoveColorTemperatureRequest): MaybePromise;

        /**
         * The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified step
         * size.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22
         */
        stepColorTemperature(request: StepColorTemperatureRequest): MaybePromise;
    }

    export interface EnhancedHue {
        /**
         * The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their current
         * hue to a target hue.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15
         */
        enhancedMoveToHue(request: EnhancedMoveToHueRequest): MaybePromise;

        /**
         * The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their current
         * hue to a target hue.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.16
         */
        enhancedMoveHue(request: EnhancedMoveHueRequest): MaybePromise;

        /**
         * The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a
         * target hue, resulting in a linear transition through XY space.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17
         */
        enhancedStepHue(request: EnhancedStepHueRequest): MaybePromise;

        /**
         * The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition from
         * their current hue to a target hue and from their current saturation to a target saturation.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18
         */
        enhancedMoveToHueAndSaturation(request: EnhancedMoveToHueAndSaturationRequest): MaybePromise;
    }

    export interface ColorLoop {
        /**
         * The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through its
         * range of hues.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19
         */
        colorLoopSet(request: ColorLoopSetRequest): MaybePromise;
    }

    export interface HueSaturationOrXyOrColorTemperature {
        /**
         * The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this
         * automatically provides symmetry to the Level Control cluster.)
         *
         * Note: the StopMoveStep command has no effect on an active color loop.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.20
         */
        stopMoveStep(request: StopMoveStepRequest): MaybePromise;
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
