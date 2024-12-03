/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import {
    Attribute,
    Command,
    TlvNoResponse,
    OptionalAttribute,
    OptionalWritableAttribute,
    WritableAttribute,
    FixedAttribute,
    OptionalFixedAttribute
} from "../cluster/Cluster.js";
import { TlvUInt8, TlvEnum, TlvUInt16, TlvBitmap, TlvInt16 } from "../tlv/TlvNumber.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { BitFlag, BitField } from "../schema/BitmapSchema.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { AccessLevel } from "#model";
import { TlvString } from "../tlv/TlvString.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace ColorControl {
    /**
     * These are optional features supported by ColorControlCluster.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.5
     */
    export enum Feature {
        /**
         * HueSaturation (HS)
         *
         * Supports color specification via hue/saturation.
         */
        HueSaturation = "HueSaturation",

        /**
         * EnhancedHue (EHUE)
         *
         * Enhanced hue is supported.
         */
        EnhancedHue = "EnhancedHue",

        /**
         * ColorLoop (CL)
         *
         * Color loop is supported.
         */
        ColorLoop = "ColorLoop",

        /**
         * Xy (XY)
         *
         * Supports color specification via XY.
         */
        Xy = "Xy",

        /**
         * ColorTemperature (CT)
         *
         * Supports specification of color temperature.
         */
        ColorTemperature = "ColorTemperature"
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.4.2
     */
    export enum Direction {
        ShortestDistance = 0,
        LongestDistance = 1,
        Up = 2,
        Down = 3
    }

    /**
     * The value of the ColorControl options attribute
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.11
     */
    export const Options = { executeIfOff: BitFlag(0) };

    /**
     * Input to the ColorControl moveToHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.4
     */
    export const TlvMoveToHueRequest = TlvObject({
        /**
         * The Hue field specifies the hue to be moved to.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.4.1
         */
        hue: TlvField(0, TlvUInt8.bound({ max: 254 })),

        /**
         * The Direction field shall be one of the non-reserved values in Values of the Direction Field.
         *
         * ### Table 17. Values of the Direction Field
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.4.2
         */
        direction: TlvField(1, TlvEnum<Direction>()),

        /**
         * The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to move to the new
         * hue.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.4.3
         */
        transitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),

        optionsMask: TlvField(3, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(4, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl moveToHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.4
     */
    export interface MoveToHueRequest extends TypeFromSchema<typeof TlvMoveToHueRequest> {}

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.5.1
     */
    export enum MoveMode {
        Stop = 0,
        Up = 1,
        Down = 3
    }

    /**
     * Input to the ColorControl moveHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.5
     */
    export const TlvMoveHueRequest = TlvObject({
        /**
         * The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field. If the MoveMode
         * field is equal to 0 (Stop), the Rate field shall be ignored.
         *
         * ### Table 18. Values of the MoveMode Field
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.5.1
         */
        moveMode: TlvField(0, TlvEnum<MoveMode>()),

        /**
         * The Rate field specifies the rate of movement in steps per second. A step is a change in the device’s hue of
         * one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of zero, the
         * command has no effect and a response command shall be sent in response, with the status code set to
         * INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.5.2
         */
        rate: TlvField(1, TlvUInt8),

        optionsMask: TlvField(2, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(3, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl moveHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.5
     */
    export interface MoveHueRequest extends TypeFromSchema<typeof TlvMoveHueRequest> {}

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.6.1
     */
    export enum StepMode {
        Up = 1,
        Down = 3
    }

    /**
     * Input to the ColorControl stepHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.6
     */
    export const TlvStepHueRequest = TlvObject({
        /**
         * The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.
         *
         * ### Table 20. Values of the StepMode Field
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.6.1
         */
        stepMode: TlvField(0, TlvEnum<StepMode>()),

        /**
         * The change to be added to (or subtracted from) the current value of the device’s hue.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.6.2
         */
        stepSize: TlvField(1, TlvUInt8),

        /**
         * The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
         * step. A step is a change in the device’s hue of ‘Step size’ units.
         *
         * NOTE
         *
         * Here the TransitionTime data field is of data type uint8, where uint16 is more common for TransitionTime
         * data fields in other clusters / commands.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.6.3
         */
        transitionTime: TlvField(2, TlvUInt8),

        optionsMask: TlvField(3, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(4, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl stepHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.6
     */
    export interface StepHueRequest extends TypeFromSchema<typeof TlvStepHueRequest> {}

    /**
     * Input to the ColorControl moveToSaturation command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.7
     */
    export const TlvMoveToSaturationRequest = TlvObject({
        saturation: TlvField(0, TlvUInt8.bound({ max: 254 })),
        transitionTime: TlvField(1, TlvUInt16.bound({ max: 65534 })),
        optionsMask: TlvField(2, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(3, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl moveToSaturation command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.7
     */
    export interface MoveToSaturationRequest extends TypeFromSchema<typeof TlvMoveToSaturationRequest> {}

    /**
     * Input to the ColorControl moveSaturation command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.8
     */
    export const TlvMoveSaturationRequest = TlvObject({
        /**
         * The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field. If the MoveMode
         * field is equal to 0 (Stop), the Rate field shall be ignored.
         *
         * ### Table 22. Values of the MoveMode Field
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.8.1
         */
        moveMode: TlvField(0, TlvEnum<MoveMode>()),

        /**
         * The Rate field specifies the rate of movement in steps per second. A step is a change in the device’s
         * saturation of one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of
         * zero, the command has no effect and a response command shall be sent in response, with the status code set
         * to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.8.2
         */
        rate: TlvField(1, TlvUInt8),

        optionsMask: TlvField(2, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(3, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl moveSaturation command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.8
     */
    export interface MoveSaturationRequest extends TypeFromSchema<typeof TlvMoveSaturationRequest> {}

    /**
     * Input to the ColorControl stepSaturation command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.9
     */
    export const TlvStepSaturationRequest = TlvObject({
        /**
         * The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.
         *
         * ### Table 24. Values of the StepMode Field
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.9.1
         */
        stepMode: TlvField(0, TlvEnum<StepMode>()),

        /**
         * The change to be added to (or subtracted from) the current value of the device’s saturation.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.9.2
         */
        stepSize: TlvField(1, TlvUInt8),

        /**
         * The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
         * step. A step is a change in the device’s saturation of ‘Step size’ units.
         *
         * NOTE
         *
         * Here the TransitionTime data field is of data type uint8, where uint16 is more common for TransitionTime
         * data fields in other clusters / commands.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.9.3
         */
        transitionTime: TlvField(2, TlvUInt8),

        optionsMask: TlvField(3, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(4, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl stepSaturation command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.9
     */
    export interface StepSaturationRequest extends TypeFromSchema<typeof TlvStepSaturationRequest> {}

    /**
     * Input to the ColorControl moveToHueAndSaturation command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.10
     */
    export const TlvMoveToHueAndSaturationRequest = TlvObject({
        hue: TlvField(0, TlvUInt8.bound({ max: 254 })),
        saturation: TlvField(1, TlvUInt8.bound({ max: 254 })),
        transitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),
        optionsMask: TlvField(3, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(4, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl moveToHueAndSaturation command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.10
     */
    export interface MoveToHueAndSaturationRequest extends TypeFromSchema<typeof TlvMoveToHueAndSaturationRequest> {}

    /**
     * Input to the ColorControl moveToColor command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.11
     */
    export const TlvMoveToColorRequest = TlvObject({
        colorX: TlvField(0, TlvUInt16.bound({ max: 65279 })),
        colorY: TlvField(1, TlvUInt16.bound({ max: 65279 })),
        transitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),
        optionsMask: TlvField(3, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(4, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl moveToColor command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.11
     */
    export interface MoveToColorRequest extends TypeFromSchema<typeof TlvMoveToColorRequest> {}

    /**
     * Input to the ColorControl moveColor command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.12
     */
    export const TlvMoveColorRequest = TlvObject({
        /**
         * The RateX field specifies the rate of movement in steps per second. A step is a change in the device’s
         * CurrentX attribute of one unit.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.12.1
         */
        rateX: TlvField(0, TlvInt16),

        /**
         * The RateY field specifies the rate of movement in steps per second. A step is a change in the device’s
         * CurrentY attribute of one unit.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.12.2
         */
        rateY: TlvField(1, TlvInt16),

        optionsMask: TlvField(2, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(3, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl moveColor command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.12
     */
    export interface MoveColorRequest extends TypeFromSchema<typeof TlvMoveColorRequest> {}

    /**
     * Input to the ColorControl stepColor command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.13
     */
    export const TlvStepColorRequest = TlvObject({
        stepX: TlvField(0, TlvInt16),
        stepY: TlvField(1, TlvInt16),

        /**
         * The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
         * color change.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.13.2
         */
        transitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),

        optionsMask: TlvField(3, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(4, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl stepColor command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.13
     */
    export interface StepColorRequest extends TypeFromSchema<typeof TlvStepColorRequest> {}

    /**
     * Input to the ColorControl moveToColorTemperature command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.14
     */
    export const TlvMoveToColorTemperatureRequest = TlvObject({
        colorTemperatureMireds: TlvField(0, TlvUInt16.bound({ max: 65279 })),
        transitionTime: TlvField(1, TlvUInt16.bound({ max: 65534 })),
        optionsMask: TlvField(2, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(3, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl moveToColorTemperature command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.14
     */
    export interface MoveToColorTemperatureRequest extends TypeFromSchema<typeof TlvMoveToColorTemperatureRequest> {}

    /**
     * Input to the ColorControl moveColorTemperature command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.21
     */
    export const TlvMoveColorTemperatureRequest = TlvObject({
        /**
         * This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster (see
         * sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall be ignored.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.21.1
         */
        moveMode: TlvField(0, TlvEnum<MoveMode>()),

        /**
         * The Rate field specifies the rate of movement in steps per second. A step is a change in the color
         * temperature of a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field
         * has a value of zero, the command has no effect and a response command shall be sent in response, with the
         * status code set to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.21.2
         */
        rate: TlvField(1, TlvUInt16),

        /**
         * The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds attribute (≡
         * an upper bound on the color temperature in kelvins) for the current move operation
         *
         * ColorTempPhysicalMinMireds <= ColorTemperatureMinimumMireds field <= ColorTemperatureMireds
         *
         * As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the
         * ColorTemperatureMinimumMireds field it shall be clipped so that the above invariant is satisfied. If the
         * ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall be used as the lower bound
         * for the ColorTemperatureMireds attribute.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.21.3
         */
        colorTemperatureMinimumMireds: TlvField(2, TlvUInt16.bound({ max: 65279 })),

        /**
         * The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds attribute (≡
         * a lower bound on the color temperature in kelvins) for the current move operation
         *
         * ColorTemperatureMireds <= ColorTemperatureMaximumMireds field <= ColorTempPhysicalMaxMireds
         *
         * As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the
         * ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. If the
         * ColorTemperatureMaximumMireds field is set to 0, ColorTempPhysicalMaxMireds shall be used as the upper bound
         * for the ColorTemperatureMireds attribute.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.21.4
         */
        colorTemperatureMaximumMireds: TlvField(3, TlvUInt16.bound({ max: 65279 })),

        optionsMask: TlvField(4, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(5, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl moveColorTemperature command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.21
     */
    export interface MoveColorTemperatureRequest extends TypeFromSchema<typeof TlvMoveColorTemperatureRequest> {}

    /**
     * Input to the ColorControl stepColorTemperature command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.22
     */
    export const TlvStepColorTemperatureRequest = TlvObject({
        /**
         * This field is identical to the StepMode field of the StepHue command of the Color Control cluster (see
         * sub-clause StepHue Command).
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.22.1
         */
        stepMode: TlvField(0, TlvEnum<StepMode>()),

        /**
         * The StepSize field specifies the change to be added to (or subtracted from) the current value of the
         * device’s color temperature.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.22.2
         */
        stepSize: TlvField(1, TlvUInt16),

        /**
         * The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken to perform
         * the step. A step is a change to the device’s color temperature of a magnitude corresponding to the StepSize
         * field.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.22.3
         */
        transitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),

        /**
         * The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds attribute (≡
         * an upper bound on the color temperature in kelvins) for the current step operation
         *
         * ColorTempPhysicalMinMireds <= ColorTemperatureMinimumMireds field <= ColorTemperatureMireds
         *
         * As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the Color
         * Temperature Minimum Mireds field it shall be clipped so that the above invariant is satisfied. If the
         * ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall be used as the lower bound
         * for the ColorTemperatureMireds attribute.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.22.4
         */
        colorTemperatureMinimumMireds: TlvField(3, TlvUInt16.bound({ max: 65279 })),

        /**
         * The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds attribute (≡
         * a lower bound on the color temperature in kelvins) for the current step operation
         *
         * ColorTemperatureMireds ≤ ColorTemperatureMaximumMireds field ≤ ColorTempPhysicalMaxMireds
         *
         * As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the
         * ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. If the
         * ColorTemperatureMaximum Mireds field is set to 0, ColorTempPhysicalMaxMireds shall be used as the upper
         * bound for the ColorTemperatureMireds attribute.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.22.5
         */
        colorTemperatureMaximumMireds: TlvField(4, TlvUInt16.bound({ max: 65279 })),

        optionsMask: TlvField(5, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(6, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl stepColorTemperature command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.22
     */
    export interface StepColorTemperatureRequest extends TypeFromSchema<typeof TlvStepColorTemperatureRequest> {}

    /**
     * Input to the ColorControl enhancedMoveToHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.15
     */
    export const TlvEnhancedMoveToHueRequest = TlvObject({
        /**
         * The EnhancedHue field specifies the target extended hue for the lamp.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.15.1
         */
        enhancedHue: TlvField(0, TlvUInt16),

        /**
         * This field is identical to the Direction field of the MoveToHue command of the Color Control cluster (see
         * sub-clause Use of the OptionsMask and OptionsOverride fields).
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.15.2
         */
        direction: TlvField(1, TlvEnum<Direction>()),

        /**
         * This field is identical to the TransitionTime field of the MoveToHue command of the Color Control cluster
         * (see sub-clause Use of the OptionsMask and OptionsOverride fields).
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.15.3
         */
        transitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),

        optionsMask: TlvField(3, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(4, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl enhancedMoveToHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.15
     */
    export interface EnhancedMoveToHueRequest extends TypeFromSchema<typeof TlvEnhancedMoveToHueRequest> {}

    /**
     * Input to the ColorControl enhancedMoveHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.16
     */
    export const TlvEnhancedMoveHueRequest = TlvObject({
        /**
         * This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster (see
         * sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall be ignored.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.16.1
         */
        moveMode: TlvField(0, TlvEnum<MoveMode>()),

        /**
         * The Rate field specifies the rate of movement in steps per second. A step is a change in the extended hue of
         * a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of
         * zero, the command has no effect and a response command shall be sent in response, with the status code set
         * to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.16.2
         */
        rate: TlvField(1, TlvUInt16),

        optionsMask: TlvField(2, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(3, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl enhancedMoveHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.16
     */
    export interface EnhancedMoveHueRequest extends TypeFromSchema<typeof TlvEnhancedMoveHueRequest> {}

    /**
     * Input to the ColorControl enhancedStepHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.17
     */
    export const TlvEnhancedStepHueRequest = TlvObject({
        /**
         * This field is identical to the StepMode field of the StepHue command of the Color Control cluster (see
         * sub-clause StepHue Command).
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.17.1
         */
        stepMode: TlvField(0, TlvEnum<StepMode>()),

        /**
         * The StepSize field specifies the change to be added to (or subtracted from) the current value of the
         * device’s enhanced hue.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.17.2
         */
        stepSize: TlvField(1, TlvUInt16),

        /**
         * The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken to perform
         * the step. A step is a change to the device’s enhanced hue of a magnitude corresponding to the StepSize field.
         *
         * NOTE
         *
         * Here TransitionTime data field is of data type uint16, while the TransitionTime data field of the StepHue
         * command is of data type uint8.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.17.3
         */
        transitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),

        optionsMask: TlvField(3, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(4, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl enhancedStepHue command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.17
     */
    export interface EnhancedStepHueRequest extends TypeFromSchema<typeof TlvEnhancedStepHueRequest> {}

    /**
     * Input to the ColorControl enhancedMoveToHueAndSaturation command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.18
     */
    export const TlvEnhancedMoveToHueAndSaturationRequest = TlvObject({
        /**
         * The EnhancedHue field specifies the target extended hue for the lamp.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.18.1
         */
        enhancedHue: TlvField(0, TlvUInt16),

        /**
         * This field is identical to the Saturation field of the MoveToHueAndSaturation command of the Color Control
         * cluster (see sub-clause MoveToHueAndSaturation Command).
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.18.2
         */
        saturation: TlvField(1, TlvUInt8.bound({ max: 254 })),

        /**
         * This field is identical to the TransitionTime field of the MoveToHue command of the Color Control cluster
         * (see sub-clause MoveToHueAndSaturation Command).
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.18.3
         */
        transitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),

        optionsMask: TlvField(3, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(4, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl enhancedMoveToHueAndSaturation command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.18
     */
    export interface EnhancedMoveToHueAndSaturationRequest extends TypeFromSchema<typeof TlvEnhancedMoveToHueAndSaturationRequest> {}

    /**
     * The value of the ColorControl colorLoopActive attribute
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.14
     */
    export enum ColorLoopActive {
        Inactive = 0,
        Active = 1
    }

    /**
     * The value of the ColorControl colorLoopDirection attribute
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.15
     */
    export enum ColorLoopDirection {
        Decrement = 0,
        Increment = 1
    }

    /**
     * The value of ColorControl.updateFlags
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.19.1
     */
    export const UpdateFlags = {
        updateAction: BitFlag(0),
        updateDirection: BitFlag(1),
        updateTime: BitFlag(2),
        updateStartHue: BitFlag(3),
        reserved: BitField(4, 4)
    };

    /**
     * The value of ColorControl.action
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.19.2
     */
    export enum Action {
        DeActivateTheColorLoop = 0,
        ActivateTheColorLoopFromTheValueInTheColorLoopStartEnhancedHueField = 1,
        ActivateTheColorLoopFromTheValueOfTheEnhancedCurrentHueAttribute = 2
    }

    /**
     * The value of ColorControl.direction
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.19.3
     */
    export enum ColorLoopSetDirection {
        DecrementTheHueInTheColorLoop = 0,
        IncrementTheHueInTheColorLoop = 1
    }

    /**
     * Input to the ColorControl colorLoopSet command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.19
     */
    export const TlvColorLoopSetRequest = TlvObject({
        /**
         * The UpdateFlags field specifies which color loop attributes to update before the color loop is started. This
         * field shall be formatted as illustrated in Format of the UpdateFlags Field of the ColorLoopSet Command.
         *
         * ### Table 28. Format of the UpdateFlags Field of the ColorLoopSet Command
         *
         * The UpdateAction sub-field is 1 bit in length and specifies whether the device shall adhere to the action
         * field in order to process the command. If this sub-field is set to 1, the device shall adhere to the action
         * field. If this sub-field is set to 0, the device shall ignore the Action field.
         *
         * The UpdateDirection sub-field is 1 bit in length and specifies whether the device shall update the
         * ColorLoopDirection attribute with the Direction field. If this sub-field is set to 1, the device shall
         * update the value of the ColorLoopDirection attribute with the value of the Direction field. If this
         * sub-field is set to 0, the device shall ignore the Direction field.
         *
         * The UpdateTime sub-field is 1 bit in length and specifies whether the device shall update the ColorLoopTime
         * attribute with the Time field. If this sub-field is set to 1, the device shall update the value of the
         * ColorLoopTime attribute with the value of the Time field. If this sub-field is set to 0, the device shall
         * ignore the Time field.
         *
         * The UpdateStartHue sub-field is 1 bit in length and specifies whether the device shall update the
         * ColorLoopStartEnhancedHue attribute with the StartHue field. If this sub-field is set to 1, the device shall
         * update the value of the ColorLoopStartEnhancedHue attribute with the value of the StartHue field. If this
         * sub-field is set to 0, the device shall ignore the StartHue field.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.19.1
         */
        updateFlags: TlvField(0, TlvBitmap(TlvUInt8, UpdateFlags)),

        /**
         * The Action field specifies the action to take for the color loop if the UpdateAction sub-field of the
         * UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in Values of
         * the Action Field of the ColorLoopSet Command.
         *
         * ### Table 29. Values of the Action Field of the ColorLoopSet Command
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.19.2
         */
        action: TlvField(1, TlvEnum<Action>()),

        /**
         * The Direction field specifies the direction for the color loop if the Update Direction field of the
         * UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in Values of
         * the Direction Field of the ColorLoopSet Command.
         *
         * ### Table 30. Values of the Direction Field of the ColorLoopSet Command
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.19.3
         */
        direction: TlvField(2, TlvEnum<ColorLoopSetDirection>()),

        /**
         * The Time field specifies the number of seconds over which to perform a full color loop if the UpdateTime
         * sub-field of the UpdateFlags field is set to 1.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.19.4
         */
        time: TlvField(3, TlvUInt16),

        startHue: TlvField(4, TlvUInt16),
        optionsMask: TlvField(5, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(6, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl colorLoopSet command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.19
     */
    export interface ColorLoopSetRequest extends TypeFromSchema<typeof TlvColorLoopSetRequest> {}

    /**
     * Input to the ColorControl stopMoveStep command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.20
     */
    export const TlvStopMoveStepRequest = TlvObject({
        optionsMask: TlvField(0, TlvBitmap(TlvUInt8, Options)),
        optionsOverride: TlvField(1, TlvBitmap(TlvUInt8, Options))
    });

    /**
     * Input to the ColorControl stopMoveStep command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.20
     */
    export interface StopMoveStepRequest extends TypeFromSchema<typeof TlvStopMoveStepRequest> {}

    /**
     * The value of the ColorControl driftCompensation attribute
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.7
     */
    export enum DriftCompensation {
        None = 0,
        OtherUnknown = 1,
        TemperatureMonitoring = 2,
        OpticalLuminanceMonitoringAndFeedback = 3,
        OpticalColorMonitoringAndFeedback = 4
    }

    /**
     * The value of the ColorControl colorMode attribute
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.10
     */
    export enum ColorMode {
        CurrentHueAndCurrentSaturation = 0,
        CurrentXAndCurrentY = 1,
        ColorTemperatureMireds = 2
    }

    /**
     * The value of the ColorControl enhancedColorMode attribute
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.13
     */
    export enum EnhancedColorMode {
        CurrentHueAndCurrentSaturation = 0,
        CurrentXAndCurrentY = 1,
        ColorTemperatureMireds = 2,
        EnhancedCurrentHueAndCurrentSaturation = 3
    }

    /**
     * The value of the ColorControl colorCapabilities attribute
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.19
     */
    export const ColorCapabilities = {
        hueSaturation: BitFlag(0),
        enhancedHue: BitFlag(1),
        colorLoop: BitFlag(2),
        xy: BitFlag(3),
        colorTemperature: BitFlag(4)
    };

    /**
     * A ColorControlCluster supports these elements if it supports feature HueSaturation.
     */
    export const HueSaturationComponent = MutableCluster.Component({
        attributes: {
            /**
             * The CurrentHue attribute contains the current hue value of the light. It is updated as fast as practical
             * during commands that change the hue.
             *
             * The hue in degrees shall be related to the CurrentHue attribute by the relationship: Hue = CurrentHue x
             * 360 / 254 (CurrentHue in the range 0 to 254 inclusive)
             *
             * If this attribute is implemented then the CurrentSaturation and ColorMode attributes shall also be
             * implemented.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.2
             */
            currentHue: Attribute(0x0, TlvUInt8.bound({ max: 254 }), { persistent: true, default: 0 }),

            /**
             * The CurrentSaturation attribute holds the current saturation value of the light. It is updated as fast
             * as practical during commands that change the saturation.
             *
             * The saturation shall be related to the CurrentSaturation attribute by the relationship: Saturation =
             * CurrentSaturation/254 (CurrentSaturation in the range 0 to 254 inclusive)
             *
             * If this attribute is implemented then the CurrentHue and ColorMode attributes shall also be implemented.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.3
             */
            currentSaturation: Attribute(
                0x1,
                TlvUInt8.bound({ max: 254 }),
                { scene: true, persistent: true, default: 0 }
            )
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.4
             */
            moveToHue: Command(0x0, TlvMoveToHueRequest, 0x0, TlvNoResponse),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.5
             */
            moveHue: Command(0x1, TlvMoveHueRequest, 0x1, TlvNoResponse),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.6
             */
            stepHue: Command(0x2, TlvStepHueRequest, 0x2, TlvNoResponse),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.7
             */
            moveToSaturation: Command(0x3, TlvMoveToSaturationRequest, 0x3, TlvNoResponse),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.8
             */
            moveSaturation: Command(0x4, TlvMoveSaturationRequest, 0x4, TlvNoResponse),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.9
             */
            stepSaturation: Command(0x5, TlvStepSaturationRequest, 0x5, TlvNoResponse),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.10
             */
            moveToHueAndSaturation: Command(0x6, TlvMoveToHueAndSaturationRequest, 0x6, TlvNoResponse)
        }
    });

    /**
     * A ColorControlCluster supports these elements if it supports feature Xy.
     */
    export const XyComponent = MutableCluster.Component({
        attributes: {
            /**
             * The CurrentX attribute contains the current value of the normalized chromaticity value x, as defined in
             * the CIE xyY Color Space. It is updated as fast as practical during commands that change the color.
             *
             * The value of x shall be related to the CurrentX attribute by the relationship x = CurrentX / 65536
             * (CurrentX in the range 0 to 65279 inclusive)
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.5
             */
            currentX: Attribute(
                0x3,
                TlvUInt16.bound({ max: 65279 }),
                { scene: true, persistent: true, default: 24939 }
            ),

            /**
             * The CurrentY attribute contains the current value of the normalized chromaticity value y, as defined in
             * the CIE xyY Color Space. It is updated as fast as practical during commands that change the color.
             *
             * The value of y shall be related to the CurrentY attribute by the relationship y = CurrentY / 65536
             * (CurrentY in the range 0 to 65279 inclusive)
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.6
             */
            currentY: Attribute(
                0x4,
                TlvUInt16.bound({ max: 65279 }),
                { scene: true, persistent: true, default: 24701 }
            )
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.11
             */
            moveToColor: Command(0x7, TlvMoveToColorRequest, 0x7, TlvNoResponse),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.12
             */
            moveColor: Command(0x8, TlvMoveColorRequest, 0x8, TlvNoResponse),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.13
             */
            stepColor: Command(0x9, TlvStepColorRequest, 0x9, TlvNoResponse)
        }
    });

    /**
     * A ColorControlCluster supports these elements if it supports feature ColorTemperature.
     */
    export const ColorTemperatureComponent = MutableCluster.Component({
        attributes: {
            /**
             * The ColorTemperatureMireds attribute contains a scaled inverse of the current value of the color
             * temperature. The unit of ColorTemperatureMireds is the mired (micro reciprocal degree), a.k.a. mirek
             * (micro reciprocal kelvin). It is updated as fast as practical during commands that change the color.
             *
             * The color temperature value in kelvins shall be related to the ColorTemperatureMireds attribute in
             * mireds by the relationship
             *
             * Color temperature in kelvins = 1,000,000 / ColorTemperatureMireds, where ColorTemperatureMireds is in
             * the range 1 to 65279 mireds inclusive, giving a color temperature range from 1,000,000 kelvins to 15.32
             * kelvins.
             *
             * If this attribute is implemented then the ColorMode attribute shall also be implemented.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.9
             */
            colorTemperatureMireds: Attribute(0x7, TlvUInt16, { scene: true, persistent: true, default: 250 }),

            /**
             * The ColorTempPhysicalMinMireds attribute indicates the minimum mired value supported by the hardware.
             * ColorTempPhysicalMinMireds corresponds to the maximum color temperature in kelvins supported by the
             * hardware. ColorTempPhysicalMinMireds <= ColorTemperatureMireds.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.20
             */
            colorTempPhysicalMinMireds: Attribute(0x400b, TlvUInt16.bound({ max: 65279 }), { default: 0 }),

            /**
             * The ColorTempPhysicalMaxMireds attribute indicates the maximum mired value supported by the hardware.
             * ColorTempPhysicalMaxMireds corresponds to the minimum color temperature in kelvins supported by the
             * hardware. ColorTemperatureMireds <= ColorTempPhysicalMaxMireds.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.21
             */
            colorTempPhysicalMaxMireds: Attribute(0x400c, TlvUInt16.bound({ max: 65279 }), { default: 65279 }),

            /**
             * The CoupleColorTempToLevelMinMireds attribute specifies a lower bound on the value of the
             * ColorTemperatureMireds attribute for the purposes of coupling the ColorTemperatureMireds attribute to
             * the CurrentLevel attribute when the CoupleColorTempToLevel bit of the Options attribute of the Level
             * Control cluster is equal to 1. When coupling the ColorTemperatureMireds attribute to the CurrentLevel
             * attribute, this value shall correspond to a CurrentLevel value of 0xFE (100%).
             *
             * This attribute shall be set such that the following relationship exists: ColorTempPhysicalMinMireds ≤
             * CoupleColorTempToLevelMinMireds ≤ ColorTemperatureMireds
             *
             * Note that since this attribute is stored as a micro reciprocal degree (mired) value (i.e. color
             * temperature in kelvins = 1,000,000 / CoupleColorTempToLevelMinMireds), the
             * CoupleColorTempToLevelMinMireds attribute corresponds to an upper bound on the value of the color
             * temperature in kelvins supported by the device.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.22
             */
            coupleColorTempToLevelMinMireds: OptionalAttribute(0x400d, TlvUInt16),

            /**
             * The StartUpColorTemperatureMireds attribute shall define the desired startup color temperature value a
             * lamp shall use when it is supplied with power and this value shall be reflected in the
             * ColorTemperatureMireds attribute. In addition, the ColorMode and EnhancedColorMode attributes shall be
             * set to 0x02 (color temperature). The values of the StartUpColorTemperatureMireds attribute are listed in
             * the table below,
             *
             * Table 12. Values of the StartUpColorTemperatureMireds attribute
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.23
             */
            startUpColorTemperatureMireds: OptionalWritableAttribute(
                0x4010,
                TlvNullable(TlvUInt16.bound({ max: 65279 })),
                { persistent: true, writeAcl: AccessLevel.Manage }
            )
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.14
             */
            moveToColorTemperature: Command(0xa, TlvMoveToColorTemperatureRequest, 0xa, TlvNoResponse),

            /**
             * The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.21
             */
            moveColorTemperature: Command(0x4b, TlvMoveColorTemperatureRequest, 0x4b, TlvNoResponse),

            /**
             * The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified
             * step size.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.22
             */
            stepColorTemperature: Command(0x4c, TlvStepColorTemperatureRequest, 0x4c, TlvNoResponse)
        }
    });

    /**
     * A ColorControlCluster supports these elements if it supports feature EnhancedHue.
     */
    export const EnhancedHueComponent = MutableCluster.Component({
        attributes: {
            /**
             * The EnhancedCurrentHue attribute represents non-equidistant steps along the CIE 1931 color triangle, and
             * it provides 16-bits precision.
             *
             * The upper 8 bits of this attribute shall be used as an index in the implementation specific XY lookup
             * table to provide the non-equidistance steps. The lower 8 bits shall be used to interpolate between these
             * steps in a linear way in order to provide color zoom for the user.
             *
             * To provide compatibility with standard ZCL, the CurrentHue attribute shall contain a hue value in the
             * range 0 to 254, calculated from the EnhancedCurrentHue attribute.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.12
             */
            enhancedCurrentHue: Attribute(0x4000, TlvUInt16, { scene: true, persistent: true, default: 0 })
        },

        commands: {
            /**
             * The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their
             * current hue to a target hue.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.15
             */
            enhancedMoveToHue: Command(0x40, TlvEnhancedMoveToHueRequest, 0x40, TlvNoResponse),

            /**
             * The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their
             * current hue to a target hue.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.16
             */
            enhancedMoveHue: Command(0x41, TlvEnhancedMoveHueRequest, 0x41, TlvNoResponse),

            /**
             * The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a
             * target hue, resulting in a linear transition through XY space.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.17
             */
            enhancedStepHue: Command(0x42, TlvEnhancedStepHueRequest, 0x42, TlvNoResponse),

            /**
             * The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition
             * from their current hue to a target hue and from their current saturation to a target saturation.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.18
             */
            enhancedMoveToHueAndSaturation: Command(
                0x43,
                TlvEnhancedMoveToHueAndSaturationRequest,
                0x43,
                TlvNoResponse
            )
        }
    });

    /**
     * A ColorControlCluster supports these elements if it supports feature ColorLoop.
     */
    export const ColorLoopComponent = MutableCluster.Component({
        attributes: {
            /**
             * The ColorLoopActive attribute specifies the current active status of the color loop. If this attribute
             * has the value 0, the color loop shall not be active. If this attribute has the value 1, the color loop
             * shall be active. All other values (2 to 254) are reserved.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.14
             */
            colorLoopActive: Attribute(
                0x4002,
                TlvEnum<ColorLoopActive>(),
                { scene: true, persistent: true, default: ColorLoopActive.Inactive }
            ),

            /**
             * The ColorLoopDirection attribute specifies the current direction of the color loop. If this attribute
             * has the value 0, the EnhancedCurrentHue attribute shall be decremented. If this attribute has the value
             * 1, the EnhancedCurrentHue attribute shall be incremented. All other values (2 to 254) are reserved.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.15
             */
            colorLoopDirection: Attribute(
                0x4003,
                TlvEnum<ColorLoopDirection>(),
                { scene: true, persistent: true, default: ColorLoopDirection.Decrement }
            ),

            /**
             * The ColorLoopTime attribute specifies the number of seconds it shall take to perform a full color loop,
             * i.e., to cycle all values of the EnhancedCurrentHue attribute (between 0 and 0xFFFE).
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.16
             */
            colorLoopTime: Attribute(0x4004, TlvUInt16, { scene: true, persistent: true, default: 25 }),

            /**
             * The ColorLoopStartEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute from
             * which the color loop shall be started.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.17
             */
            colorLoopStartEnhancedHue: Attribute(0x4005, TlvUInt16, { default: 8960 }),

            /**
             * The ColorLoopStoredEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute before
             * the color loop was started. Once the color loop is complete, the EnhancedCurrentHue attribute shall be
             * restored to this value.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.18
             */
            colorLoopStoredEnhancedHue: Attribute(0x4006, TlvUInt16, { default: 0 })
        },

        commands: {
            /**
             * The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through
             * its range of hues.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.19
             */
            colorLoopSet: Command(0x44, TlvColorLoopSetRequest, 0x44, TlvNoResponse)
        }
    });

    /**
     * A ColorControlCluster supports these elements if it supports features HueSaturation, Xy or ColorTemperature.
     */
    export const HueSaturationOrXyOrColorTemperatureComponent = MutableCluster.Component({
        commands: {
            /**
             * The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this
             * automatically provides symmetry to the Level Control cluster.)
             *
             * NOTE the StopMoveStep command has no effect on an active color loop.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.11.20
             */
            stopMoveStep: Command(0x47, TlvStopMoveStepRequest, 0x47, TlvNoResponse)
        }
    });

    /**
     * These elements and properties are present in all ColorControl clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x300,
        name: "ColorControl",
        revision: 6,

        features: {
            /**
             * HueSaturation
             *
             * Supports color specification via hue/saturation.
             */
            hueSaturation: BitFlag(0),

            /**
             * EnhancedHue
             *
             * Enhanced hue is supported.
             */
            enhancedHue: BitFlag(1),

            /**
             * ColorLoop
             *
             * Color loop is supported.
             */
            colorLoop: BitFlag(2),

            /**
             * Xy
             *
             * Supports color specification via XY.
             */
            xy: BitFlag(3),

            /**
             * ColorTemperature
             *
             * Supports specification of color temperature.
             */
            colorTemperature: BitFlag(4)
        },

        attributes: {
            /**
             * The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active
             * command will be complete.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.4
             */
            remainingTime: OptionalAttribute(0x2, TlvUInt16, { default: 0 }),

            /**
             * The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
             * color/intensity drift over time. It shall be one of the non-reserved values in Values of the
             * DriftCompensation Attribute.
             *
             * ### Table 8. Values of the DriftCompensation Attribute
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.7
             */
            driftCompensation: OptionalAttribute(0x5, TlvEnum<DriftCompensation>()),

            /**
             * The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to
             * compensate for color/intensity drift over time.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.8
             */
            compensationText: OptionalAttribute(0x6, TlvString.bound({ maxLength: 254 })),

            /**
             * The ColorMode attribute indicates which attributes are currently determining the color of the device.
             *
             * The value of the ColorMode attribute cannot be written directly - it is set upon reception of any
             * command in section Commands to the appropriate mode for that command.
             *
             * Table 9. Values of the ColorMode Attribute
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.10
             */
            colorMode: Attribute(0x8, TlvEnum<ColorMode>(), { persistent: true }),

            /**
             * The Options attribute is meant to be changed only during commissioning. The Options attribute is a
             * bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
             * the Options attribute shall first construct a temporary Options bitmap that is in effect during the
             * command processing. The temporary Options bitmap has the same format and meaning as the Options
             * attribute, but includes any bits that may be overridden by command fields.
             *
             * Below is the format and description of the Options attribute and temporary Options bitmap and the effect
             * on dependent commands.
             *
             * Table 10. Options Attribute
             *
             * ExecuteIfOff Options bit: Command execution shall NOT continue beyond the Options processing if all of
             * these criteria are true:
             *
             *   • The On/Off cluster exists on the same endpoint as this cluster.
             *
             *   • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE.
             *
             *   • The value of the ExecuteIfOff bit is 0.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.11
             */
            options: WritableAttribute(0xf, TlvBitmap(TlvUInt8, Options)),

            /**
             * The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
             * value of null shall indicate that the number of primaries is unknown.
             *
             * Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of
             * the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without
             * leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is
             * optional.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.8.1
             */
            numberOfPrimaries: FixedAttribute(0x10, TlvNullable(TlvUInt8.bound({ max: 6 }))),

            /**
             * The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined in the
             * CIE xyY Color Space.
             *
             * The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / 65536
             * (Primary1X in the range 0 to 65279 inclusive)
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.8.2
             */
            primary1X: OptionalFixedAttribute(0x11, TlvUInt16.bound({ max: 65279 })),

            /**
             * The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined in the
             * CIE xyY Color Space.
             *
             * The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / 65536
             * (Primary1Y in the range 0 to 65279 inclusive)
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.8.3
             */
            primary1Y: OptionalFixedAttribute(0x12, TlvUInt16.bound({ max: 65279 })),

            /**
             * The Primary1intensity attribute contains a representation of the maximum intensity of this primary as
             * defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration
             * Cluster), normalized such that the primary with the highest maximum intensity contains the value 0xFE.
             *
             * A value of null shall indicate that this primary is not available.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.8.4
             */
            primary1Intensity: OptionalFixedAttribute(0x13, TlvNullable(TlvUInt8)),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.8
             */
            primary2X: OptionalFixedAttribute(0x15, TlvUInt16.bound({ max: 65279 })),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.8
             */
            primary2Y: OptionalFixedAttribute(0x16, TlvUInt16.bound({ max: 65279 })),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.8
             */
            primary2Intensity: OptionalFixedAttribute(0x17, TlvNullable(TlvUInt8)),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.8
             */
            primary3X: OptionalFixedAttribute(0x19, TlvUInt16.bound({ max: 65279 })),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.8
             */
            primary3Y: OptionalFixedAttribute(0x1a, TlvUInt16.bound({ max: 65279 })),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.8
             */
            primary3Intensity: OptionalFixedAttribute(0x1b, TlvNullable(TlvUInt8)),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.9
             */
            primary4X: OptionalFixedAttribute(0x20, TlvUInt16.bound({ max: 65279 })),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.9
             */
            primary4Y: OptionalFixedAttribute(0x21, TlvUInt16.bound({ max: 65279 })),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.9
             */
            primary4Intensity: OptionalFixedAttribute(0x22, TlvNullable(TlvUInt8)),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.9
             */
            primary5X: OptionalFixedAttribute(0x24, TlvUInt16.bound({ max: 65279 })),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.9
             */
            primary5Y: OptionalFixedAttribute(0x25, TlvUInt16.bound({ max: 65279 })),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.9
             */
            primary5Intensity: OptionalFixedAttribute(0x26, TlvNullable(TlvUInt8)),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.9
             */
            primary6X: OptionalFixedAttribute(0x28, TlvUInt16.bound({ max: 65279 })),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.9
             */
            primary6Y: OptionalFixedAttribute(0x29, TlvUInt16.bound({ max: 65279 })),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.9
             */
            primary6Intensity: OptionalFixedAttribute(0x2a, TlvNullable(TlvUInt8)),

            /**
             * The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
             * Space, of the current white point of the device.
             *
             * The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / 65536
             * (WhitePointX in the range 0 to 65279 inclusive)
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.10.1
             */
            whitePointX: OptionalWritableAttribute(
                0x30,
                TlvUInt16.bound({ max: 65279 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY
             *
             * Color Space, of the current white point of the device.
             *
             * The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / 65536
             * (WhitePointY in the range 0 to 65279 inclusive)
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.10.2
             */
            whitePointY: OptionalWritableAttribute(
                0x31,
                TlvUInt16.bound({ max: 65279 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
             * Space, of the red color point of the device.
             *
             * The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX /
             * 65536 (ColorPointRX in the range 0 to 65279 inclusive)
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.10.3
             */
            colorPointRx: OptionalWritableAttribute(
                0x32,
                TlvUInt16.bound({ max: 65279 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
             * Space, of the red color point of the device.
             *
             * The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY /
             * 65536 (ColorPointRY in the range 0 to 65279 inclusive)
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.10.4
             */
            colorPointRy: OptionalWritableAttribute(
                0x33,
                TlvUInt16.bound({ max: 65279 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * The ColorPointRIntensity attribute contains a representation of the relative intensity of the red color
             * point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast
             * Configuration Cluster), normalized such that the color point with the highest relative intensity
             * contains the value 0xFE.
             *
             * A value of null shall indicate an invalid value.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.10.5
             */
            colorPointRIntensity: OptionalWritableAttribute(
                0x34,
                TlvNullable(TlvUInt8),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.10
             */
            colorPointGx: OptionalWritableAttribute(
                0x36,
                TlvUInt16.bound({ max: 65279 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.10
             */
            colorPointGy: OptionalWritableAttribute(
                0x37,
                TlvUInt16.bound({ max: 65279 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.10
             */
            colorPointGIntensity: OptionalWritableAttribute(
                0x38,
                TlvNullable(TlvUInt8),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.10
             */
            colorPointBx: OptionalWritableAttribute(
                0x3a,
                TlvUInt16.bound({ max: 65279 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.10
             */
            colorPointBy: OptionalWritableAttribute(
                0x3b,
                TlvUInt16.bound({ max: 65279 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.10
             */
            colorPointBIntensity: OptionalWritableAttribute(
                0x3c,
                TlvNullable(TlvUInt8),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * The EnhancedColorMode attribute specifies which attributes are currently determining the color of the
             * device, as detailed in Values of the EnhancedColorMode Attribute.
             *
             * ### Table 11. Values of the EnhancedColorMode Attribute
             *
             * To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate ‘CurrentHue
             * and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the ColorMode attribute
             * is changed, e.g., due to one of the standard Color Control cluster commands defined in the ZCL, its new
             * value shall be copied to the EnhancedColorMode attribute.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.13
             */
            enhancedColorMode: Attribute(
                0x4001,
                TlvEnum<EnhancedColorMode>(),
                { scene: true, persistent: true, default: EnhancedColorMode.CurrentXAndCurrentY }
            ),

            /**
             * Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of the
             * FeatureMap attribute. All other bits in ColorCapabilities shall be 0.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 3.2.7.19
             */
            colorCapabilities: Attribute(0x400a, TlvBitmap(TlvUInt16, ColorCapabilities))
        },

        /**
         * This metadata controls which ColorControlCluster elements matter.js activates for specific feature
         * combinations.
         */
        extensions: MutableCluster.Extensions(
            { flags: { hueSaturation: true }, component: HueSaturationComponent },
            { flags: { xy: true }, component: XyComponent },
            { flags: { colorTemperature: true }, component: ColorTemperatureComponent },
            { flags: { enhancedHue: true }, component: EnhancedHueComponent },
            { flags: { colorLoop: true }, component: ColorLoopComponent },
            { flags: { hueSaturation: true }, component: HueSaturationOrXyOrColorTemperatureComponent },
            { flags: { xy: true }, component: HueSaturationOrXyOrColorTemperatureComponent },
            { flags: { colorTemperature: true }, component: HueSaturationOrXyOrColorTemperatureComponent }
        )
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster(Base);

    /**
     * ColorControlCluster supports optional features that you can enable with the ColorControlCluster.with() factory
     * method.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 3.2
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    const HS = { hueSaturation: true };
    const XY = { xy: true };
    const CT = { colorTemperature: true };
    const EHUE = { enhancedHue: true };
    const CL = { colorLoop: true };

    /**
     * @see {@link Complete}
     */
    export const CompleteInstance = MutableCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,

        attributes: {
            ...Cluster.attributes,
            currentHue: MutableCluster.AsConditional(
                HueSaturationComponent.attributes.currentHue,
                { mandatoryIf: [HS] }
            ),
            currentSaturation: MutableCluster.AsConditional(
                HueSaturationComponent.attributes.currentSaturation,
                { mandatoryIf: [HS] }
            ),
            currentX: MutableCluster.AsConditional(XyComponent.attributes.currentX, { mandatoryIf: [XY] }),
            currentY: MutableCluster.AsConditional(XyComponent.attributes.currentY, { mandatoryIf: [XY] }),
            colorTemperatureMireds: MutableCluster.AsConditional(
                ColorTemperatureComponent.attributes.colorTemperatureMireds,
                { mandatoryIf: [CT] }
            ),
            enhancedCurrentHue: MutableCluster.AsConditional(
                EnhancedHueComponent.attributes.enhancedCurrentHue,
                { mandatoryIf: [EHUE] }
            ),
            colorLoopActive: MutableCluster.AsConditional(
                ColorLoopComponent.attributes.colorLoopActive,
                { mandatoryIf: [CL] }
            ),
            colorLoopDirection: MutableCluster.AsConditional(
                ColorLoopComponent.attributes.colorLoopDirection,
                { mandatoryIf: [CL] }
            ),
            colorLoopTime: MutableCluster.AsConditional(
                ColorLoopComponent.attributes.colorLoopTime,
                { mandatoryIf: [CL] }
            ),
            colorLoopStartEnhancedHue: MutableCluster.AsConditional(
                ColorLoopComponent.attributes.colorLoopStartEnhancedHue,
                { mandatoryIf: [CL] }
            ),
            colorLoopStoredEnhancedHue: MutableCluster.AsConditional(
                ColorLoopComponent.attributes.colorLoopStoredEnhancedHue,
                { mandatoryIf: [CL] }
            ),
            colorTempPhysicalMinMireds: MutableCluster.AsConditional(
                ColorTemperatureComponent.attributes.colorTempPhysicalMinMireds,
                { mandatoryIf: [CT] }
            ),
            colorTempPhysicalMaxMireds: MutableCluster.AsConditional(
                ColorTemperatureComponent.attributes.colorTempPhysicalMaxMireds,
                { mandatoryIf: [CT] }
            ),
            coupleColorTempToLevelMinMireds: MutableCluster.AsConditional(
                ColorTemperatureComponent.attributes.coupleColorTempToLevelMinMireds,
                { optionalIf: [CT] }
            ),
            startUpColorTemperatureMireds: MutableCluster.AsConditional(
                ColorTemperatureComponent.attributes.startUpColorTemperatureMireds,
                { optionalIf: [CT] }
            )
        },

        commands: {
            moveToHue: MutableCluster.AsConditional(HueSaturationComponent.commands.moveToHue, { mandatoryIf: [HS] }),
            moveHue: MutableCluster.AsConditional(HueSaturationComponent.commands.moveHue, { mandatoryIf: [HS] }),
            stepHue: MutableCluster.AsConditional(HueSaturationComponent.commands.stepHue, { mandatoryIf: [HS] }),
            moveToSaturation: MutableCluster.AsConditional(
                HueSaturationComponent.commands.moveToSaturation,
                { mandatoryIf: [HS] }
            ),
            moveSaturation: MutableCluster.AsConditional(
                HueSaturationComponent.commands.moveSaturation,
                { mandatoryIf: [HS] }
            ),
            stepSaturation: MutableCluster.AsConditional(
                HueSaturationComponent.commands.stepSaturation,
                { mandatoryIf: [HS] }
            ),
            moveToHueAndSaturation: MutableCluster.AsConditional(
                HueSaturationComponent.commands.moveToHueAndSaturation,
                { mandatoryIf: [HS] }
            ),
            moveToColor: MutableCluster.AsConditional(XyComponent.commands.moveToColor, { mandatoryIf: [XY] }),
            moveColor: MutableCluster.AsConditional(XyComponent.commands.moveColor, { mandatoryIf: [XY] }),
            stepColor: MutableCluster.AsConditional(XyComponent.commands.stepColor, { mandatoryIf: [XY] }),
            moveToColorTemperature: MutableCluster.AsConditional(
                ColorTemperatureComponent.commands.moveToColorTemperature,
                { mandatoryIf: [CT] }
            ),
            enhancedMoveToHue: MutableCluster.AsConditional(
                EnhancedHueComponent.commands.enhancedMoveToHue,
                { mandatoryIf: [EHUE] }
            ),
            enhancedMoveHue: MutableCluster.AsConditional(
                EnhancedHueComponent.commands.enhancedMoveHue,
                { mandatoryIf: [EHUE] }
            ),
            enhancedStepHue: MutableCluster.AsConditional(
                EnhancedHueComponent.commands.enhancedStepHue,
                { mandatoryIf: [EHUE] }
            ),
            enhancedMoveToHueAndSaturation: MutableCluster.AsConditional(
                EnhancedHueComponent.commands.enhancedMoveToHueAndSaturation,
                { mandatoryIf: [EHUE] }
            ),
            colorLoopSet: MutableCluster.AsConditional(ColorLoopComponent.commands.colorLoopSet, { mandatoryIf: [CL] }),
            stopMoveStep: MutableCluster.AsConditional(
                HueSaturationOrXyOrColorTemperatureComponent.commands.stopMoveStep,
                { mandatoryIf: [HS, XY, CT] }
            ),
            moveColorTemperature: MutableCluster.AsConditional(
                ColorTemperatureComponent.commands.moveColorTemperature,
                { mandatoryIf: [CT] }
            ),
            stepColorTemperature: MutableCluster.AsConditional(
                ColorTemperatureComponent.commands.stepColorTemperature,
                { mandatoryIf: [CT] }
            )
        }
    });

    /**
     * This cluster supports all ColorControl features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export interface Complete extends Identity<typeof CompleteInstance> {}

    export const Complete: Complete = CompleteInstance;
}

export type ColorControlCluster = ColorControl.Cluster;
export const ColorControlCluster = ColorControl.Cluster;
ClusterRegistry.register(ColorControl.Complete);
