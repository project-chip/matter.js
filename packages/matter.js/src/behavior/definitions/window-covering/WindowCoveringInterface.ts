/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { WindowCovering } from "../../../cluster/definitions/WindowCoveringCluster.js";

/**
 * Upon receipt of this command, the server will adjust the window covering to the lift/slide percentage specified in
 * the payload of this command.
 *
 * If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall be set to
 * LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be set to LiftPercentageValue
 * * 100.
 *
 * If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to to
 * LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not
 * LiftPercent100thsValue) has a value to set the target position.
 *
 * If the server does not support the Position Aware feature, then a zero percentage shall be treated as a UpOrOpen
 * command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only a tilt control
 * device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be returned.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.5
 */
export type GoToLiftPercentageRequest = TypeFromSchema<typeof WindowCovering.TlvGoToLiftPercentageRequest>;

/**
 * Upon receipt of this command, the server will adjust the window covering to the tilt percentage specified in the
 * payload of this command.
 *
 * If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute
 *
 * shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be set to
 * TiltPercentageValue * 100.
 *
 * If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to to
 * TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not
 * TiltPercent100thsValue) has a value to set the target position.
 *
 * If the server does not support the Position Aware feature, then a zero percentage shall be treated as a UpOrOpen
 * command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only a tilt control
 * device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be returned.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.7
 */
export type GoToTiltPercentageRequest = TypeFromSchema<typeof WindowCovering.TlvGoToTiltPercentageRequest>;

/**
 * Upon receipt of this command, the Window Covering will adjust the window so the physical lift/slide is at the value
 * specified in the payload of this command as long as that value is not larger than InstalledOpenLimitLift attribute
 * and not smaller than InstalledClosedLimitLift attribute. Once the command is received the
 * TargetPositionLiftPercent100ths attribute will update its value accordingly. If the value is out of bounds a
 * response containing the status of CONSTRAINT_ERROR will be returned.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.4
 */
export type GoToLiftValueRequest = TypeFromSchema<typeof WindowCovering.TlvGoToLiftValueRequest>;

/**
 * Upon receipt of this command, the Window Covering will adjust the window so the physical tilt is at the tilt value
 * specified in the payload of this command as long as that value is not larger than InstalledOpenLimitTilt attribute
 * and not smaller than InstalledClosedLimitTilt attribute. Once the command is received the
 * TargetPositionTiltPercent100ths attribute will update its value accordingly. If the tilt value is out of bounds a
 * response containing the status of CONSTRAINT_ERROR will be returned.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.6
 */
export type GoToTiltValueRequest = TypeFromSchema<typeof WindowCovering.TlvGoToTiltValueRequest>;

export namespace WindowCoveringInterface {
    export interface Base {
        /**
         * Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and
         * tilt is at the maximum open/up position. This will happen as fast as possible. The server attributes shall
         * be updated as follows:
         *
         * if Position Aware feature is supported:
         *
         *   • TargetPositionLiftPercent100ths attribute shall be set to 0.00%.
         *
         *   • TargetPositionTiltPercent100ths attribute shall be set to 0.00%.
         *
         * The server positioning attributes will follow the movements, once the movement has successfully finished,
         * the server attributes shall be updated as follows:
         *
         * if Position Aware feature is supported:
         *
         *   • CurrentPositionLiftPercent100ths attribute shall be 0.00%.
         *
         *   • CurrentPositionLiftPercentage attribute shall be 0%.
         *
         *   • CurrentPositionTiltPercent100ths attribute shall be 0.00%.
         *
         *   • CurrentPositionTiltPercentage attribute shall be 0%. if Absolute Position feature is supported:
         *
         *   • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute.
         *
         *   • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.1
         */
        upOrOpen(): MaybePromise;

        /**
         * Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and
         * tilt is at the maximum closed/down position. This will happen as fast as possible. The server attributes
         * supported shall be updated as follows:
         *
         * if Position Aware feature is supported:
         *
         *   • TargetPositionLiftPercent100ths attribute shall be set to 100.00%.
         *
         *   • TargetPositionTiltPercent100ths attribute shall be set to 100.00%.
         *
         * The server positioning attributes will follow the movements, once the movement has successfully finished,
         * the server attributes shall be updated as follows:
         *
         * if Position Aware feature is supported:
         *
         *   • CurrentPositionLiftPercent100ths attribute shall be 100.00%.
         *
         *   • CurrentPositionLiftPercentage attribute shall be 100%.
         *
         *   • CurrentPositionTiltPercent100ths attribute shall be 100.00%.
         *
         *   • CurrentPositionTiltPercentage attribute shall be 100%. if Absolute Position feature is supported:
         *
         *   • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute.
         *
         *   • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.2
         */
        downOrClose(): MaybePromise;

        /**
         * Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
         * lift/slide that is currently occurring. The server attributes supported shall be updated as follows:
         *
         *   • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute
         *     value.
         *
         *   • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute
         *     value.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.3
         */
        stopMotion(): MaybePromise;
    }

    export interface Lift {
        /**
         * Upon receipt of this command, the server will adjust the window covering to the lift/slide percentage
         * specified in the payload of this command.
         *
         * If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall be set
         * to LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be set to
         * LiftPercentageValue * 100.
         *
         * If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to to
         * LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not
         * LiftPercent100thsValue) has a value to set the target position.
         *
         * If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
         * UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only
         * a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be
         * returned.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.5
         */
        goToLiftPercentage(request: GoToLiftPercentageRequest): MaybePromise;
    }

    export interface Tilt {
        /**
         * Upon receipt of this command, the server will adjust the window covering to the tilt percentage specified in
         * the payload of this command.
         *
         * If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute
         *
         * shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be set
         * to TiltPercentageValue * 100.
         *
         * If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to to
         * TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not
         * TiltPercent100thsValue) has a value to set the target position.
         *
         * If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
         * UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only
         * a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be
         * returned.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.7
         */
        goToTiltPercentage(request: GoToTiltPercentageRequest): MaybePromise;
    }

    export interface LiftAndPositionAwareLift {
        /**
         * Upon receipt of this command, the server will adjust the window covering to the lift/slide percentage
         * specified in the payload of this command.
         *
         * If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall be set
         * to LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be set to
         * LiftPercentageValue * 100.
         *
         * If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to to
         * LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not
         * LiftPercent100thsValue) has a value to set the target position.
         *
         * If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
         * UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only
         * a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be
         * returned.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.5
         */
        goToLiftPercentage(request: GoToLiftPercentageRequest): MaybePromise;
    }

    export interface TiltAndPositionAwareTilt {
        /**
         * Upon receipt of this command, the server will adjust the window covering to the tilt percentage specified in
         * the payload of this command.
         *
         * If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute
         *
         * shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be set
         * to TiltPercentageValue * 100.
         *
         * If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to to
         * TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not
         * TiltPercent100thsValue) has a value to set the target position.
         *
         * If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
         * UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only
         * a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be
         * returned.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.7
         */
        goToTiltPercentage(request: GoToTiltPercentageRequest): MaybePromise;
    }

    export interface LiftAndAbsolutePosition {
        /**
         * Upon receipt of this command, the Window Covering will adjust the window so the physical lift/slide is at
         * the value specified in the payload of this command as long as that value is not larger than
         * InstalledOpenLimitLift attribute and not smaller than InstalledClosedLimitLift attribute. Once the command
         * is received the TargetPositionLiftPercent100ths attribute will update its value accordingly. If the value is
         * out of bounds a response containing the status of CONSTRAINT_ERROR will be returned.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.4
         */
        goToLiftValue(request: GoToLiftValueRequest): MaybePromise;
    }

    export interface TiltAndAbsolutePosition {
        /**
         * Upon receipt of this command, the Window Covering will adjust the window so the physical tilt is at the tilt
         * value specified in the payload of this command as long as that value is not larger than
         * InstalledOpenLimitTilt attribute and not smaller than InstalledClosedLimitTilt attribute. Once the command
         * is received the TargetPositionTiltPercent100ths attribute will update its value accordingly. If the tilt
         * value is out of bounds a response containing the status of CONSTRAINT_ERROR will be returned.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.6
         */
        goToTiltValue(request: GoToTiltValueRequest): MaybePromise;
    }
}

export type WindowCoveringInterface = {
    components: [
        { flags: {}, methods: WindowCoveringInterface.Base },
        { flags: { lift: true }, methods: WindowCoveringInterface.Lift },
        { flags: { tilt: true }, methods: WindowCoveringInterface.Tilt },
        { flags: { lift: true, positionAwareLift: true }, methods: WindowCoveringInterface.LiftAndPositionAwareLift },
        { flags: { tilt: true, positionAwareTilt: true }, methods: WindowCoveringInterface.TiltAndPositionAwareTilt },
        { flags: { lift: true, absolutePosition: true }, methods: WindowCoveringInterface.LiftAndAbsolutePosition },
        { flags: { tilt: true, absolutePosition: true }, methods: WindowCoveringInterface.TiltAndAbsolutePosition }
    ]
};
