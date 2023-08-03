/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import {
    BaseClusterComponent,
    ClusterComponent,
    ExtensibleCluster,
    validateFeatureSelection,
    extendCluster,
    preventCluster,
    ClusterForBaseCluster,
    AsConditional
} from "../../cluster/ClusterFactory.js";
import {
    BitFlag,
    BitsFromPartial,
    BitFieldEnum,
    BitFlags,
    TypeFromPartialBitSchema
} from "../../schema/BitmapSchema.js";
import {
    FixedAttribute,
    Attribute,
    WritableAttribute,
    AccessLevel,
    OptionalAttribute,
    Command,
    TlvNoResponse,
    OptionalFixedAttribute,
    OptionalCommand,
    Cluster as CreateCluster
} from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt8, TlvBitmap, TlvUInt16, TlvPercent, TlvPercent100ths } from "../../tlv/TlvNumber.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvOptionalField, TlvField } from "../../tlv/TlvObject.js";

export namespace WindowCovering {
    /**
     * The value of the WindowCovering type attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.1
     */
    export const enum WindowCoveringType {
        Rollershade = 0,
        Rollershade2Motor = 1,
        RollershadeExterior = 2,
        RollershadeExterior2Motor = 3,
        Drapery = 4,
        Awning = 5,
        Shutter = 6,
        TiltBlindTiltOnly = 7,
        TiltBlindLift = 8,
        ProjectorScreen = 9,
        Unknown = 255
    }

    /**
     * The value of the WindowCovering configStatus attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.8
     */
    export const ConfigStatus = {
        /**
         * Operational: This status bit defines if the Window Covering is operational.The SafetyStatus & Mode
         * attributes might affect this bit
         */
        operational: BitFlag(0),

        /**
         * deprecated
         */
        onlineReserved: BitFlag(1),

        /**
         * Reversal: This status bit identifies if the directions of the lift/slide movements have been reversed in
         * order for commands (e.g: Open, Close, GoTos) to match the physical installation conditionsThis bit can be
         * adjusted by setting the appropriate reversal bit value in the Mode attribute
         */
        liftMovementReversed: BitFlag(2),

        /**
         * Control - Lift: This status bit identifies if the window covering supports the Position Aware Lift Control
         */
        liftPositionAware: BitFlag(3),

        /**
         * Control - Tilt: This status bit identifies if the window covering supports the Position Aware Tilt Control
         */
        tiltPositionAware: BitFlag(4),

        /**
         * Encoder - Lift: This status bit identifies if a Position Aware Controlled Window Covering is employing an
         * encoder for positioning the height of the window covering.
         */
        liftEncoderControlled: BitFlag(5),

        /**
         * Encoder - Tilt: This status bit identifies if a Position Aware Controlled Window Covering is employing an
         * encoder for tilting the window covering.
         */
        tiltEncoderControlled: BitFlag(6)
    };

    /**
     * The value of the WindowCovering operationalStatus attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.15
     */
    export const OperationalStatus = {
        /**
         * Movement status of the cover
         */
        global: BitFieldEnum<MovementStatus>(0, 2),

        /**
         * Movement status of the cover's lift function
         */
        lift: BitFieldEnum<MovementStatus>(2, 2),

        /**
         * Movement status of the cover's tilt function
         */
        tilt: BitFieldEnum<MovementStatus>(4, 2)
    };

    /**
     * Values for OperationalStatus attribute fields.
     */
    export const enum MovementStatus {
        /**
         * Covering is not moving
         */
        Stopped = 0,

        /**
         * Covering is moving from closed to open
         */
        Opening = 1,

        /**
         * Covering is moving from open to closed
         */
        Closing = 2
    }

    /**
     * The value of the WindowCovering endProductType attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.16
     */
    export const enum EndProductType {
        RollerShade = 0,
        RomanShade = 1,
        BalloonShade = 2,
        WovenWood = 3,
        PleatedShade = 4,
        CellularShade = 5,
        LayeredShade = 6,
        LayeredShade2D = 7,
        SheerShade = 8,
        TiltOnlyInteriorBlind = 9,
        InteriorBlind = 10,
        VerticalBlindStripCurtain = 11,
        InteriorVenetianBlind = 12,
        ExteriorVenetianBlind = 13,
        LateralLeftCurtain = 14,
        LateralRightCurtain = 15,
        CentralCurtain = 16,
        RollerShutter = 17,
        ExteriorVerticalScreen = 18,
        AwningTerrace = 19,
        AwningVerticalScreen = 20,
        TiltOnlyPergola = 21,
        SwingingShutter = 22,
        SlidingShutter = 23,
        Unknown = 255
    }

    /**
     * The value of the WindowCovering mode attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.21
     */
    export const Mode = {
        /**
         * Disables (0) or Enables (1) Lift reversal
         */
        motorDirectionReversed: BitFlag(0),

        /**
         * Disabled (0) or Enabled (1) placing the Window Covering into calibration Mode where limits are either setup
         * using tools or learned by the Window Covering by doing self-calibration.If in calibration mode, all commands
         * (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, could be accepted and result in a
         * self-calibration being initiated before the command is executed. In case the Window Covering does not have
         * the ability or is not able to perform a self-calibration, the command SHOULD be ignored and a FAILURE status
         * SHOULD be returned.In a write interaction, setting this bit to 0, while the device is in calibration mode,
         * is not allowed and SHALL generate a FAILURE error status. In order to leave calibration mode, the device
         * must perform its calibration routine, either as a self- calibration or assisted by external tool(s),
         * depending on the device/manufacturer implementation.A manufacturer might choose to set the operational bit
         * to its not operational value, if applicable during calibration mode
         */
        calibrationMode: BitFlag(1),

        /**
         * Disables (0) or Enables (1) placing the Window Covering into Maintenance Mode where it cannot be moved over
         * the network or by a switch connected to a Local Switch Input.While in maintenance mode, all commands (e.g:
         * UpOrOpen, DownOrClose, GoTos) that can result in movement, must be ignored and respond with a BUSY status.
         * Additionally, the operational bit of the ConfigStatus attribute should be set to its not operational value.
         */
        maintenanceMode: BitFlag(2),

        /**
         * Disables (0) or Enables (1) the display of any feedback LEDs resident especially on the packaging of an
         * endpoint where they may cause distraction to the occupant.
         */
        ledFeedback: BitFlag(3)
    };

    /**
     * The value of the WindowCovering safetyStatus attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.22
     */
    export const SafetyStatus = {
        /**
         * Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range.
         */
        remoteLockout: BitFlag(0),

        /**
         * Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without
         * its actuator(s).
         */
        tamperDetection: BitFlag(1),

        /**
         * Communication failure to sensors or other safety equipment.
         */
        failedCommunication: BitFlag(2),

        /**
         * Device has failed to reach the desired position. e.g. with Position Aware device, time expired before
         * TargetPosition is reached.
         */
        positionFailure: BitFlag(3),

        /**
         * Motor(s) and/or electric circuit thermal protection activated.
         */
        thermalProtection: BitFlag(4),

        /**
         * An obstacle is preventing actuator movement.
         */
        obstacleDetected: BitFlag(5),

        /**
         * Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power
         * might not be fully available at the moment.
         */
        power: BitFlag(6),

        /**
         * Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335).
         */
        stopInput: BitFlag(7),

        /**
         * Mechanical problem related to the motor(s) detected.
         */
        motorJammed: BitFlag(8),

        /**
         * PCB, fuse and other electrics problems.
         */
        hardwareFailure: BitFlag(9),

        /**
         * Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled).
         */
        manualOperation: BitFlag(10),

        /**
         * Protection is activated.
         */
        protection: BitFlag(11)
    };

    /**
     * Input to the WindowCovering goToLiftPercentage command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.5
     */
    export const TlvGoToLiftPercentageRequest = TlvObject({
        liftPercentageValue: TlvOptionalField(0, TlvPercent),
        liftPercent100thsValue: TlvOptionalField(1, TlvPercent100ths)
    });

    /**
     * Input to the WindowCovering goToTiltPercentage command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.7
     */
    export const TlvGoToTiltPercentageRequest = TlvObject({
        tiltPercentageValue: TlvOptionalField(0, TlvPercent),
        tiltPercent100thsValue: TlvOptionalField(1, TlvPercent100ths)
    });

    /**
     * Input to the WindowCovering goToLiftValue command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.4
     */
    export const TlvGoToLiftValueRequest = TlvObject({ liftValue: TlvField(0, TlvUInt16) });

    /**
     * Input to the WindowCovering goToTiltValue command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.6
     */
    export const TlvGoToTiltValueRequest = TlvObject({ tiltValue: TlvField(0, TlvUInt16) });

    /**
     * These are optional features supported by WindowCoveringCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.4
     */
    export enum Feature {
        /**
         * Lift
         *
         * Lift Control and behavior for lifting/sliding window coverings
         */
        Lift = "Lift",

        /**
         * Tilt
         *
         * Tilt Control and behavior for tilting window coverings
         */
        Tilt = "Tilt",

        /**
         * PositionAwareLift
         *
         * Position Aware lift control is supported.
         */
        PositionAwareLift = "PositionAwareLift",

        /**
         * AbsolutePosition
         *
         * Absolute positioning is supported.
         */
        AbsolutePosition = "AbsolutePosition",

        /**
         * PositionAwareTilt
         *
         * Position Aware tilt control is supported.
         */
        PositionAwareTilt = "PositionAwareTilt"
    }

    /**
     * These elements and properties are present in all WindowCovering clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x102,
        name: "WindowCovering",
        revision: 5,

        features: {
            /**
             * Lift
             *
             * Lift Control and behavior for lifting/sliding window coverings
             */
            lift: BitFlag(0),

            /**
             * Tilt
             *
             * Tilt Control and behavior for tilting window coverings
             */
            tilt: BitFlag(1),

            /**
             * PositionAwareLift
             *
             * Position Aware lift control is supported.
             */
            positionAwareLift: BitFlag(2),

            /**
             * AbsolutePosition
             *
             * Absolute positioning is supported.
             */
            absolutePosition: BitFlag(3),

            /**
             * PositionAwareTilt
             *
             * Position Aware tilt control is supported.
             */
            positionAwareTilt: BitFlag(4)
        },

        attributes: {
            /**
             * The Type attribute identifies the type of window covering being controlled by this endpoint and shall be
             * set to one of the non-reserved values in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.1
             */
            type: FixedAttribute(0x0, TlvEnum<WindowCoveringType>(), { default: WindowCoveringType.Rollershade }),

            /**
             * The ConfigStatus attribute makes configuration and status information available. To change settings,
             * devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
             * causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.8
             */
            configStatus: Attribute(
                0x7,
                TlvBitmap(TlvUInt8, ConfigStatus),
                {
                    persistent: true,
                    default: BitsFromPartial(ConfigStatus, { operational: true, onlineReserved: true })
                }
            ),

            /**
             * The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
             * devices. See below for details about the meaning of individual bits.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.15
             */
            operationalStatus: Attribute(0xa, TlvBitmap(TlvUInt8, OperationalStatus)),

            /**
             * The EndProductType attribute identifies the product type in complement of the main category indicated by
             * the Type attribute. The window covering shall set this value to one of the values in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.16
             */
            endProductType: FixedAttribute(0xd, TlvEnum<EndProductType>(), { default: EndProductType.RollerShade }),

            /**
             * The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction,
             * placing the Window Covering into calibration mode, placing the motor into maintenance mode, disabling
             * the network, and disabling status LEDs. See below for details.
             *
             * In the case a device does not support or implement a specific mode, e.g. the device has a specific
             * installation method and reversal is not relevant or the device does not include a maintenance mode, any
             * write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits set,
             * must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.21
             */
            mode: WritableAttribute(
                0x17,
                TlvBitmap(TlvUInt8, Mode),
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing
             * movements. By default for nominal operation all flags are cleared (0). A device might support none, one
             * or several bit flags from this attribute (all optional). See below for details about the meaning of
             * individual bits.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.22
             */
            safetyStatus: OptionalAttribute(0x1a, TlvBitmap(TlvUInt16, SafetyStatus))
        },

        commands: {
            /**
             * Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide
             * and tilt is at the maximum open/up position. This will happen as fast as possible. The server attributes
             * shall be updated as follows:
             *
             * if Position Aware feature is supported:
             *
             *   • TargetPositionLiftPercent100ths attribute shall be set to 0.00%.
             *
             *   • TargetPositionTiltPercent100ths attribute shall be set to 0.00%.
             *
             * The server positioning attributes will follow the movements, once the movement has successfully
             * finished, the server attributes shall be updated as follows:
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
            upOrOpen: Command(0x0, TlvNoArguments, 0x0, TlvNoResponse),

            /**
             * Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide
             * and tilt is at the maximum closed/down position. This will happen as fast as possible. The server
             * attributes supported shall be updated as follows:
             *
             * if Position Aware feature is supported:
             *
             *   • TargetPositionLiftPercent100ths attribute shall be set to 100.00%.
             *
             *   • TargetPositionTiltPercent100ths attribute shall be set to 100.00%.
             *
             * The server positioning attributes will follow the movements, once the movement has successfully
             * finished, the server attributes shall be updated as follows:
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
            downOrClose: Command(0x1, TlvNoArguments, 0x1, TlvNoResponse),

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
            stopMotion: Command(0x2, TlvNoArguments, 0x2, TlvNoResponse)
        }
    });

    /**
     * A WindowCoveringCluster supports these elements if it supports features Lift, PositionAwareLift and
     * AbsolutePosition.
     */
    export const LiftAndPositionAwareLiftAndAbsolutePositionComponent = ClusterComponent({
        attributes: {
            /**
             * The PhysicalClosedLimitLift attribute identifies the maximum possible encoder position possible (in
             * centimeters) to position the height of the window covering Lift.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.2
             */
            physicalClosedLimitLift: OptionalFixedAttribute(0x1, TlvUInt16, { default: 0 }),

            /**
             * The CurrentPositionLift attribute identifies the actual Lift position (in centimeters) of the window
             * covering from the fully-open position.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.4
             */
            currentPositionLift: OptionalAttribute(
                0x3,
                TlvNullable(TlvUInt16.bound({ max: 65534 })),
                { persistent: true, default: null }
            ),

            /**
             * The InstalledOpenLimitLift attribute identifies the Open Limit for Lifting the Window Covering whether
             * position (in centimeters) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.17
             */
            installedOpenLimitLift: Attribute(0x10, TlvUInt16.bound({ max: 65534 }), { persistent: true, default: 0 }),

            /**
             * The InstalledClosedLimitLift attribute identifies the Closed Limit for Lifting the Window Covering
             * whether position (in centimeters) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.18
             */
            installedClosedLimitLift: Attribute(
                0x11,
                TlvUInt16.bound({ max: 65534 }),
                { persistent: true, default: 65534 }
            )
        }
    });

    /**
     * A WindowCoveringCluster supports these elements if it supports features Tilt, PositionAwareTilt and
     * AbsolutePosition.
     */
    export const TiltAndPositionAwareTiltAndAbsolutePositionComponent = ClusterComponent({
        attributes: {
            /**
             * The PhysicalClosedLimitTilt attribute identifies the maximum possible encoder position possible (tenth
             * of a degrees) to position the angle of the window covering Tilt.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.3
             */
            physicalClosedLimitTilt: OptionalFixedAttribute(0x2, TlvUInt16, { default: 0 }),

            /**
             * The CurrentPositionTilt attribute identifies the actual Tilt position (in tenth of an degree) of the
             * window covering from the fully-open position.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.5
             */
            currentPositionTilt: OptionalAttribute(
                0x4,
                TlvNullable(TlvUInt16.bound({ max: 65534 })),
                { persistent: true, default: null }
            ),

            /**
             * The InstalledOpenLimitTilt attribute identifies the Open Limit for Tilting the Window Covering whether
             * position (in tenth of a degree) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.19
             */
            installedOpenLimitTilt: Attribute(0x12, TlvUInt16.bound({ max: 65534 }), { persistent: true, default: 0 }),

            /**
             * The InstalledClosedLimitTilt attribute identifies the Closed Limit for Tilting the Window Covering
             * whether position (in tenth of a degree) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.20
             */
            installedClosedLimitTilt: Attribute(
                0x13,
                TlvUInt16.bound({ max: 65534 }),
                { persistent: true, default: 65534 }
            )
        }
    });

    /**
     * A WindowCoveringCluster supports these elements if it supports feature Lift.
     */
    export const LiftComponent = ClusterComponent({
        attributes: {
            /**
             * The NumberOfActuationsLift attribute identifies the total number of lift/slide actuations applied to the
             * Window Covering since the device was installed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.6
             */
            numberOfActuationsLift: OptionalAttribute(0x5, TlvUInt16, { persistent: true, default: 0 })
        },

        commands: {
            /**
             * Upon receipt of this command, the server will adjust the window covering to the lift/slide percentage
             * specified in the payload of this command.
             *
             * If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall be
             * set to LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be set to
             * LiftPercentageValue * 100.
             *
             * If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to to
             * LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not
             * LiftPercent100thsValue) has a value to set the target position.
             *
             * If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
             * UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is
             * only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD
             * be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.5
             */
            goToLiftPercentage: OptionalCommand(0x5, TlvGoToLiftPercentageRequest, 0x5, TlvNoResponse)
        }
    });

    /**
     * A WindowCoveringCluster supports these elements if it supports feature Tilt.
     */
    export const TiltComponent = ClusterComponent({
        attributes: {
            /**
             * The NumberOfActuationsTilt attribute identifies the total number of tilt actuations applied to the
             * Window Covering since the device was installed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.7
             */
            numberOfActuationsTilt: OptionalAttribute(0x6, TlvUInt16, { persistent: true, default: 0 })
        },

        commands: {
            /**
             * Upon receipt of this command, the server will adjust the window covering to the tilt percentage
             * specified in the payload of this command.
             *
             * If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute
             *
             * shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be
             * set to TiltPercentageValue * 100.
             *
             * If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to to
             * TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not
             * TiltPercent100thsValue) has a value to set the target position.
             *
             * If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
             * UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is
             * only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD
             * be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.7
             */
            goToTiltPercentage: OptionalCommand(0x8, TlvGoToTiltPercentageRequest, 0x8, TlvNoResponse)
        }
    });

    /**
     * A WindowCoveringCluster supports these elements if it supports features Lift and PositionAwareLift.
     */
    export const LiftAndPositionAwareLiftComponent = ClusterComponent({
        attributes: {
            /**
             * The CurrentPositionLiftPercentage attribute identifies the actual position as a percentage from 0% to
             * 100% with 1% default step. This attribute is equal to CurrentPositionLiftPercent100ths attribute divided
             * by 100.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.11
             */
            currentPositionLiftPercentage: OptionalAttribute(
                0x8,
                TlvNullable(TlvPercent),
                { scene: true, persistent: true, default: null }
            ),

            /**
             * The TargetPositionLiftPercent100ths attribute identifies the position where the Window Covering Lift
             * will go or is moving to as a percentage.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.13
             */
            targetPositionLiftPercent100ths: Attribute(
                0xb,
                TlvNullable(TlvPercent100ths),
                { scene: true, default: null }
            ),

            /**
             * The CurrentPositionLiftPercent100ths attribute identifies the actual position as a percentage with a
             * minimal step of 0.01%. E.g Max 10000 equals 100.00%.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.9
             */
            currentPositionLiftPercent100ths: Attribute(
                0xe,
                TlvNullable(TlvPercent100ths),
                { persistent: true, default: null }
            )
        },

        commands: {
            /**
             * Upon receipt of this command, the server will adjust the window covering to the lift/slide percentage
             * specified in the payload of this command.
             *
             * If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall be
             * set to LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be set to
             * LiftPercentageValue * 100.
             *
             * If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to to
             * LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not
             * LiftPercent100thsValue) has a value to set the target position.
             *
             * If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
             * UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is
             * only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD
             * be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.5
             */
            goToLiftPercentage: Command(0x5, TlvGoToLiftPercentageRequest, 0x5, TlvNoResponse)
        }
    });

    /**
     * A WindowCoveringCluster supports these elements if it supports features Tilt and PositionAwareTilt.
     */
    export const TiltAndPositionAwareTiltComponent = ClusterComponent({
        attributes: {
            /**
             * The CurrentPositionTiltPercentage attribute identifies the actual position as a percentage from 0% to
             * 100% with 1% default step. This attribute is equal to CurrentPositionTiltPercent100ths attribute divided
             * by 100.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.12
             */
            currentPositionTiltPercentage: OptionalAttribute(
                0x9,
                TlvNullable(TlvPercent),
                { scene: true, persistent: true, default: null }
            ),

            /**
             * The TargetPositionTiltPercent100ths attribute identifies the position where the Window Covering Tilt
             * will go or is moving to as a percentage.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.14
             */
            targetPositionTiltPercent100ths: Attribute(
                0xc,
                TlvNullable(TlvPercent100ths),
                { scene: true, default: null }
            ),

            /**
             * The CurrentPositionTiltPercent100ths attribute identifies the actual position as a percentage with a
             * minimal step of 0.01%. E.g Max 10000 equals 100.00%.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.10
             */
            currentPositionTiltPercent100ths: Attribute(
                0xf,
                TlvNullable(TlvPercent100ths),
                { persistent: true, default: null }
            )
        },

        commands: {
            /**
             * Upon receipt of this command, the server will adjust the window covering to the tilt percentage
             * specified in the payload of this command.
             *
             * If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute
             *
             * shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be
             * set to TiltPercentageValue * 100.
             *
             * If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to to
             * TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not
             * TiltPercent100thsValue) has a value to set the target position.
             *
             * If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
             * UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is
             * only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD
             * be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.7
             */
            goToTiltPercentage: Command(0x8, TlvGoToTiltPercentageRequest, 0x8, TlvNoResponse)
        }
    });

    /**
     * A WindowCoveringCluster supports these elements if it supports features Lift and AbsolutePosition.
     */
    export const LiftAndAbsolutePositionComponent = ClusterComponent({
        commands: {
            /**
             * Upon receipt of this command, the Window Covering will adjust the window so the physical lift/slide is
             * at the value specified in the payload of this command as long as that value is not larger than
             * InstalledOpenLimitLift attribute and not smaller than InstalledClosedLimitLift attribute. Once the
             * command is received the TargetPositionLiftPercent100ths attribute will update its value accordingly. If
             * the value is out of bounds a response containing the status of CONSTRAINT_ERROR will be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.4
             */
            goToLiftValue: OptionalCommand(0x4, TlvGoToLiftValueRequest, 0x4, TlvNoResponse)
        }
    });

    /**
     * A WindowCoveringCluster supports these elements if it supports features Tilt and AbsolutePosition.
     */
    export const TiltAndAbsolutePositionComponent = ClusterComponent({
        commands: {
            /**
             * Upon receipt of this command, the Window Covering will adjust the window so the physical tilt is at the
             * tilt value specified in the payload of this command as long as that value is not larger than
             * InstalledOpenLimitTilt attribute and not smaller than InstalledClosedLimitTilt attribute. Once the
             * command is received the TargetPositionTiltPercent100ths attribute will update its value accordingly. If
             * the tilt value is out of bounds a response containing the status of CONSTRAINT_ERROR will be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.6
             */
            goToTiltValue: OptionalCommand(0x7, TlvGoToTiltValueRequest, 0x7, TlvNoResponse)
        }
    });

    /**
     * Window Covering
     *
     * The window covering cluster provides an interface for controlling and adjusting automatic window coverings such
     * as drapery motors, automatic shades, curtains and blinds.
     *
     * WindowCoveringCluster supports optional features that you can enable with the WindowCoveringCluster.with()
     * factory method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a WindowCovering cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a WindowCovering cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(
                cluster,
                LiftAndPositionAwareLiftAndAbsolutePositionComponent,
                { lift: true, positionAwareLift: true, absolutePosition: true }
            );
            extendCluster(
                cluster,
                TiltAndPositionAwareTiltAndAbsolutePositionComponent,
                { tilt: true, positionAwareTilt: true, absolutePosition: true }
            );
            extendCluster(cluster, LiftComponent, { lift: true });
            extendCluster(cluster, TiltComponent, { tilt: true });
            extendCluster(cluster, LiftAndPositionAwareLiftComponent, { lift: true, positionAwareLift: true });
            extendCluster(cluster, TiltAndPositionAwareTiltComponent, { tilt: true, positionAwareTilt: true });
            extendCluster(cluster, LiftAndAbsolutePositionComponent, { lift: true, absolutePosition: true });
            extendCluster(cluster, TiltAndAbsolutePositionComponent, { tilt: true, absolutePosition: true });

            preventCluster(
                cluster,
                { positionAwareLift: true, lift: false },
                { positionAwareTilt: true, tilt: false },
                { lift: false, tilt: false }
            );

            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { lift: true, positionAwareLift: true, absolutePosition: true } ? typeof LiftAndPositionAwareLiftAndAbsolutePositionComponent : {})
        & (SF extends { tilt: true, positionAwareTilt: true, absolutePosition: true } ? typeof TiltAndPositionAwareTiltAndAbsolutePositionComponent : {})
        & (SF extends { lift: true } ? typeof LiftComponent : {})
        & (SF extends { tilt: true } ? typeof TiltComponent : {})
        & (SF extends { lift: true, positionAwareLift: true } ? typeof LiftAndPositionAwareLiftComponent : {})
        & (SF extends { tilt: true, positionAwareTilt: true } ? typeof TiltAndPositionAwareTiltComponent : {})
        & (SF extends { lift: true, absolutePosition: true } ? typeof LiftAndAbsolutePositionComponent : {})
        & (SF extends { tilt: true, absolutePosition: true } ? typeof TiltAndAbsolutePositionComponent : {})
        & (SF extends { positionAwareLift: true, lift: false } ? never : {})
        & (SF extends { positionAwareTilt: true, tilt: false } ? never : {})
        & (SF extends { lift: false, tilt: false } ? never : {});

    const LF_PA_LF_ABS = { lift: true, positionAwareLift: true, absolutePosition: true };
    const TL_PA_TL_ABS = { tilt: true, positionAwareTilt: true, absolutePosition: true };
    const LF = { lift: true };
    const TL = { tilt: true };
    const LF_PA_LF = { lift: true, positionAwareLift: true };
    const TL_PA_TL = { tilt: true, positionAwareTilt: true };
    const LF_ABS = { lift: true, absolutePosition: true };
    const TL_ABS = { tilt: true, absolutePosition: true };

    /**
     * This cluster supports all WindowCovering features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = CreateCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,

        attributes: {
            ...Cluster.attributes,
            physicalClosedLimitLift: AsConditional(
                LiftAndPositionAwareLiftAndAbsolutePositionComponent.attributes.physicalClosedLimitLift,
                { optionalIf: [LF_PA_LF_ABS] }
            ),
            physicalClosedLimitTilt: AsConditional(
                TiltAndPositionAwareTiltAndAbsolutePositionComponent.attributes.physicalClosedLimitTilt,
                { optionalIf: [TL_PA_TL_ABS] }
            ),
            currentPositionLift: AsConditional(
                LiftAndPositionAwareLiftAndAbsolutePositionComponent.attributes.currentPositionLift,
                { optionalIf: [LF_PA_LF_ABS] }
            ),
            currentPositionTilt: AsConditional(
                TiltAndPositionAwareTiltAndAbsolutePositionComponent.attributes.currentPositionTilt,
                { optionalIf: [TL_PA_TL_ABS] }
            ),
            numberOfActuationsLift: AsConditional(
                LiftComponent.attributes.numberOfActuationsLift,
                { optionalIf: [LF] }
            ),
            numberOfActuationsTilt: AsConditional(
                TiltComponent.attributes.numberOfActuationsTilt,
                { optionalIf: [TL] }
            ),
            currentPositionLiftPercentage: AsConditional(
                LiftAndPositionAwareLiftComponent.attributes.currentPositionLiftPercentage,
                { optionalIf: [LF_PA_LF] }
            ),
            currentPositionTiltPercentage: AsConditional(
                TiltAndPositionAwareTiltComponent.attributes.currentPositionTiltPercentage,
                { optionalIf: [TL_PA_TL] }
            ),
            targetPositionLiftPercent100ths: AsConditional(
                LiftAndPositionAwareLiftComponent.attributes.targetPositionLiftPercent100ths,
                { mandatoryIf: [LF_PA_LF] }
            ),
            targetPositionTiltPercent100ths: AsConditional(
                TiltAndPositionAwareTiltComponent.attributes.targetPositionTiltPercent100ths,
                { mandatoryIf: [TL_PA_TL] }
            ),
            currentPositionLiftPercent100ths: AsConditional(
                LiftAndPositionAwareLiftComponent.attributes.currentPositionLiftPercent100ths,
                { mandatoryIf: [LF_PA_LF] }
            ),
            currentPositionTiltPercent100ths: AsConditional(
                TiltAndPositionAwareTiltComponent.attributes.currentPositionTiltPercent100ths,
                { mandatoryIf: [TL_PA_TL] }
            ),
            installedOpenLimitLift: AsConditional(
                LiftAndPositionAwareLiftAndAbsolutePositionComponent.attributes.installedOpenLimitLift,
                { mandatoryIf: [LF_PA_LF_ABS] }
            ),
            installedClosedLimitLift: AsConditional(
                LiftAndPositionAwareLiftAndAbsolutePositionComponent.attributes.installedClosedLimitLift,
                { mandatoryIf: [LF_PA_LF_ABS] }
            ),
            installedOpenLimitTilt: AsConditional(
                TiltAndPositionAwareTiltAndAbsolutePositionComponent.attributes.installedOpenLimitTilt,
                { mandatoryIf: [TL_PA_TL_ABS] }
            ),
            installedClosedLimitTilt: AsConditional(
                TiltAndPositionAwareTiltAndAbsolutePositionComponent.attributes.installedClosedLimitTilt,
                { mandatoryIf: [TL_PA_TL_ABS] }
            )
        },

        commands: {
            ...Cluster.commands,
            goToLiftValue: AsConditional(
                LiftAndAbsolutePositionComponent.commands.goToLiftValue,
                { optionalIf: [LF_ABS] }
            ),
            goToLiftPercentage: AsConditional(
                LiftComponent.commands.goToLiftPercentage,
                { optionalIf: [LF], mandatoryIf: [LF_PA_LF] }
            ),
            goToTiltValue: AsConditional(
                TiltAndAbsolutePositionComponent.commands.goToTiltValue,
                { optionalIf: [TL_ABS] }
            ),
            goToTiltPercentage: AsConditional(
                TiltComponent.commands.goToTiltPercentage,
                { optionalIf: [TL], mandatoryIf: [TL_PA_TL] }
            )
        }
    });
}

export type WindowCoveringCluster = typeof WindowCovering.Cluster;
export const WindowCoveringCluster = WindowCovering.Cluster;
