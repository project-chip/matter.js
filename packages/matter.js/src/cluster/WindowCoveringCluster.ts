/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Attribute,
    Cluster,
    ClusterExtend,
    Command,
    OptionalAttribute,
    OptionalCommand,
    WritableAttribute,
} from "./Cluster.js";
import { TlvBitmap, TlvEnum, TlvField, TlvNoArguments, TlvObject, TlvOptionalField, TlvUInt16, TlvUInt8 } from "../tlv/index.js";
import { StatusCode } from "../protocol/interaction/InteractionProtocol.js";
import { BitFlag } from "../schema/index.js";
import { ClusterServerObj } from "./index.js";

export const TlvStatusResponse = TlvObject({
    status: TlvField(0, TlvEnum<StatusCode>()),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** alias for percentages expressed as 0 to 100 */
const WCPercent = TlvUInt16.bound({ min: 0, max: 100 });

/** alias for percentages expressed as 0 to 100.00 with 2 decimals */
const WCPercent100ths = TlvUInt16.bound({ min: 0, max: 10000 });

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.4 */
export const WindowCoveringFeatures = {
    /** The Lift feature applies to window coverings that lift up and down (ex: for a rollershade, Up and Down is Lift Open and Close) or slide left to right (ex: for a sliding curtain, Left and Right is Lift Open and Close). */
    lift: BitFlag(0),
    /** The Tilt feature applies to window coverings with vertical or horizontal strips. */
    tilt: BitFlag(1),
    /**
     * Relative positioning with percent100ths (min step 0.01%) attribute is mandatory,
      E.g Max 10000 equals 100.00% and relative positioning with percent (min step 1%) attribute is for backward com­ patibility.
      The CurrentPosition attributes SHALL always reflects the physical position of an actuator and the
      TargetPosition attribute SHALL reflect the requested position of an actuator once a positioning command is received.
    */
    positionAwareLift: BitFlag(2),
    /**
     * The percentage attributes SHALL indicate the position as a percentage between the InstalledOpen­ Limits and InstalledClosedLimits attributes of the window covering starting at the open (0.00%).
     * As a general rule, absolute positioning (in centimeters or tenth of a degrees) SHOULD NOT be sup­ported for new implementations. */
    absolutePosition: BitFlag(3),
    /** Position Aware tilt control is supported. */
    positionAwareTilt: BitFlag(4),
};

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.5.1 */
export enum WindowCoveringType {
    /** Lift Only */
    RollerShade = 0x00,
    /** Lift Only */
    RollerShade2Motor = 0x01,
    /** Lift Only */
    RollerShadeExterior = 0x02,
    /** Lift Only */
    RollerShadeExterior2Motor = 0x03,
    /** Lift Only */
    Drapery = 0x04,
    /** Lift Only */
    Awning = 0x05,
    /** Lift & Tilt */
    Shutter = 0x06,
    /** Tilt Only */
    TiltOnlyBlind = 0x07,
    /** Lift & Tilt */
    LiftAndTiltBlind = 0x08,
    /** Lift Only */
    ProjectorScreen = 0x09,
    Unknown = 0xff,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.5.16 */
export enum WindowCoveringEndProductType {
    RollerShade = 0x00,
    RomanShade = 0x01,
    BalloonShade = 0x02,
    WovenWood = 0x03,
    PleatedShade = 0x04,
    CellularShade = 0x05,
    LayeredShade = 0x06,
    LayeredShade2D = 0x07,
    SheerShade = 0x08,
    TiltOnlyInteriorBlind = 0x09,
    InteriorBlind = 0x0a,
    VerticalBlindStripCurtain = 0x0b,
    InteriorVenetianBlind = 0x0c,
    ExteriorVenetianBlind = 0x0d,
    LateralLeftCurtain = 0x0e,
    LateralRightCurtain = 0x0f,
    CentralCurtain = 0x10,
    RollerShutter = 0x11,
    ExteriorVerticalScreen = 0x12,
    AwningTerrace = 0x13,
    AwningVerticalScreen = 0x14,
    TiltOnlyPergola = 0x15,
    SwingingShutter = 0x16,
    SlidingShutter = 0x17,
    Unknown = 0xff,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.5.8 */
export const WindowCoveringConfigStatus = {
    /**
     * Operational: This status bit defines if the Win­ dow Covering is operational.
     * note: The SafetyStatus & Mode attributes might affect this bit
     */
    operational: BitFlag(0),
    // reserved: BitFlag(1),
    /**
     * Reversal: This status bit identifies if the direc­ tions of the lift/slide movements have been
     * reversed in order for commands (e.g: Open, Close, GoTos) to match the physical installa­ tion conditions
     */
    reversed: BitFlag(2), // LF
    /**
     * Control - Lift: This status bit identifies if the window covering supports the Position Aware
     */
    liftPositionAware: BitFlag(3), // LF
    /**
     * Control - Tilt: This status bit identifies if the window covering supports the Position Aware
     */
    tiltPositionAware: BitFlag(4), // LT
    /**
     * Encoder - Lift: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for positioning the height of the window covering.
     * 0 = Timer Controlled
     * 1 = Encoder Controlled
     */
    liftPositionType: BitFlag(5), // LF & PA_LF
    /**
     * Encoder - Tilt: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for tilting the win­dow covering.
     * 0 = Timer Controlled
     * 1 = Encoder Controlled
     */
    tiltPositionType: BitFlag(6), // TL & PA_TL
};

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.5.15 */
export enum WindowCoveringOperationalStatus {
    Stopped = 0,
    Opening = 1,
    Closing = 2,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.5.21 */
export const WindowCoveringMode = {
    reversed: BitFlag(0),
    calibrateMode: BitFlag(1),
    maintenanceMode: BitFlag(2),
    ledFeedback: BitFlag(3),
};

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.5.22 */
export const WindowCoveringSafetyStatus = {
    /** Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range. */
    remoteLockout: BitFlag(0),
    /** Tampering detected on sensors or any other safety equip­ ment. Ex: a device has been forcedly moved without its actuator(s). */
    tamperDetection: BitFlag(1),
    /** Communication failure to sensors or other safety equip­ ment. */
    failedCommunication: BitFlag(2),
    /** Device has failed to reach the desired position. e.g. with Position Aware device, time expired before TargetPosition is reached. */
    positionFailure: BitFlag(3),
    /** Motor(s) and/or electric circuit thermal protection acti­ vated. */
    thermalProtection: BitFlag(4),
    /** An obstacle is preventing actuator movement. */
    obstacleDetected: BitFlag(5),
    /** Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power might not be fully available at the moment. */
    powerIssue: BitFlag(6),
    /** Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335). */
    stopInput: BitFlag(7),
    /** Mechanical problem related to the motor(s) detected. */
    motorJammed: BitFlag(8),
    /** PCB, fuse and other electrics problems. */
    hardwareFailure: BitFlag(9),
    /** Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled). */
    manualOperation: BitFlag(10),
    /** Protection is activated. - wow so helpful */
    protection: BitFlag(11),
};

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.6.4 */
const GoToLiftValueParams = TlvObject({
    value: TlvField(0, TlvUInt16),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.6.5
 - If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute SHALL be set to LiftPercent100thsValue.
     Otherwise the TargetPositionLiftPercent100ths attribute SHALL be set to LiftPercentageValue * 100.
 - If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue SHALL be set to to LiftPercent100thsValue / 100,
    so a legacy server which only supports LiftPercentageValue (not LiftPercent100thsValue) has a value to set the target position.
- If the server does not support the Position Aware feature, then a zero percentage SHALL be treated as a
    UpOrOpen command and a non-zero percentage SHALL be treated as an DownOrClose com­mand.
    If the device is only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be returned.
*/
export const GotoLiftPercentParams = TlvObject({
    /** Legacy Matter - still used by HomePod 16.3.2*/
    percent: TlvOptionalField(0, WCPercent100ths), // TODO - clarify if this is correct and needs to be handled in WC Server
    /** PREFERRED  */
    percent100ths: TlvOptionalField(1, WCPercent100ths),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.6.6 */
const GotoTiltValueParams = GoToLiftValueParams;

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.6.7 */
const GotoTiltPercentParams = GotoLiftPercentParams;

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.6.8

 If the Scenes server cluster is implemented on the same endpoint, the following extension fields SHALL be added to the Scene Table in the given order:
  - CurrentPositionLiftPercentage
  - CurrentPositionTiltPercentage
  - TargetPositionLiftPercent100ths
  - TargetPositionTiltPercent100ths
*/

const FeatureBase = {
    lift: false,
    tilt: false,
    positionAwareLift: false,
    positionAwareTilt: false,
    absolutePosition: false
}

function features(...features: (keyof typeof FeatureBase)[]) {
    const result = { ...FeatureBase };
    features.forEach(f => result[f] = true);
    return result;
}

const LF = features("lift");
const LF_ABS = features("lift", "absolutePosition");
const LF_PALF = features("lift", "positionAwareLift");
const LF_PALF_ABS = features("lift", "positionAwareLift", "absolutePosition"); // Wes check me here, this didn't have absolutePosition in original
const TL = features("tilt");
//const TL_ABS        = featureSet("tilt", "absolutePosition");
const TL_PATL = features("tilt", "positionAwareTilt");
const TL_PATL_ABS = features("tilt", "positionAwareTilt", "absolutePosition");

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3 */
export const WindowCoveringCluster = Cluster({
    id: 0x102,
    name: "Window Covering",

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.1 */
    revision: 5,

    /** At least ONE of the Lift and Tilt features SHALL be supported */
    features: WindowCoveringFeatures,

    supportedFeatures: {
        absolutePosition: false,
        lift: false,
        positionAwareLift: false,
        positionAwareTilt: false,
        tilt: false,
    },

    /** NOTE: Unlike the most popular shading systems, ALL INTERNAL Percentages are percent OPEN, NOT percent light transmission */

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.5 */
    attributes: {
        /** Note that the WindowCoveringType is associated with the Supported Features as well */
        type: Attribute(0x0000, TlvEnum<WindowCoveringType>(), {
            default: 0,
            persistent: true,
        }),
        /** [LF & PA_LF & ABS] */
        physicalClosedLimitLift: OptionalAttribute(0x0001, TlvUInt16, {
            optionalIf: [LF_PALF_ABS],
            default: 0,
        }),
        /** [TL & PA_TL & ABS] */
        physicalClosedLimitTilt: OptionalAttribute(0x0002, TlvUInt16, {
            optionalIf: [TL_PATL_ABS],
            default: 0,
        }),
        /** [LF & PA_LF & ABS] */
        currentPositionLift: OptionalAttribute(0x0003, TlvUInt16, {
            optionalIf: [LF_PALF_ABS],
        }),
        /** [TL & PA_TL & ABS] */
        currentPositionTilt: OptionalAttribute(0x0004, TlvUInt16, {
            optionalIf: [TL_PATL_ABS],
        }),
        /** [LF] */
        numOfActuationsLift: OptionalAttribute(0x0005, TlvUInt16, {
            optionalIf: [LF],
            default: 0,
        }),
        /** [TL] */
        numOfActuationsTilt: OptionalAttribute(0x0006, TlvUInt16, {
            optionalIf: [TL],
            default: 0,
        }),
        /** M */
        configStatus: Attribute(
            0x0007,
            TlvBitmap(TlvUInt8, WindowCoveringConfigStatus),
            {
                default: {
                    liftPositionAware: false,
                    operational: false,
                    liftPositionType: false,
                    reversed: false,
                    tiltPositionAware: false,
                    tiltPositionType: false,
                },
                persistent: true,
            }
        ),
        /** [LF & PA_LF] */
        currentPositionLiftPercent: OptionalAttribute(0x0008, WCPercent, {
            optionalIf: [LF_PALF],
        }),
        /** [TL & PA_TL] */
        currentPositionTiltPercent: OptionalAttribute(0x0009, WCPercent, {
            optionalIf: [TL_PATL],
        }),
        /** M */
        operationalStatus: Attribute(
            0x000a,
            TlvEnum<WindowCoveringOperationalStatus>(),
            {
                default: WindowCoveringOperationalStatus.Stopped,
                persistent: true,
            }
        ),
        /** LF & PA_LF */
        targetPositionLiftPercent100ths: OptionalAttribute(
            0x000b,
            WCPercent100ths,
            { requiredIf: [LF_PALF] }
        ),
        /** TL & PA_TL */
        targetPositionTiltPercent100ths: OptionalAttribute(
            0x000c,
            WCPercent100ths,
            { requiredIf: [TL_PATL] }
        ),
        /** M */
        endProductType: WritableAttribute(
            0x000d,
            TlvEnum<WindowCoveringEndProductType>(),
            {
                default: 0,
                persistent: true,
            }
        ),
        /** LF & PA_LF */
        currentPositionLiftPercent100ths: OptionalAttribute(
            0x000e,
            WCPercent100ths,
            { requiredIf: [LF_PALF] }
        ),
        /** TL & PA_TL */
        currentPositionTiltPercent100ths: OptionalAttribute(
            0x000f,
            WCPercent100ths,
            { requiredIf: [TL_PATL] }
        ),
        /** LF & PA_LF & ABS */
        installedOpenLimitLift: OptionalAttribute(0x0010, TlvUInt16, {
            requiredIf: [LF_PALF_ABS],
            default: 0,
        }),
        /** LF & PA_LF & ABS */
        installedClosedLimitLift: OptionalAttribute(0x0011, TlvUInt16, {
            requiredIf: [LF_PALF_ABS],
        }),
        /** TL & PA_TL & ABS */
        installedOpenLimitTilt: OptionalAttribute(0x0012, TlvUInt16, {
            requiredIf: [TL_PATL_ABS],
        }),
        /** TL & PA_TL & ABS */
        installedClosedLimitTilt: OptionalAttribute(0x0013, TlvUInt16, {
            requiredIf: [TL_PATL_ABS],
        }),
        // velocityLift:                  Attribute(0x0014, TlvDeprecated),
        // accelerationTimeLift:          Attribute(0x000f, TlvDeprecated),
        // decelerationTimeLift:          Attribute(0x000f, TlvDeprecated),
        mode: Attribute(0x0017, TlvBitmap(TlvUInt8, WindowCoveringMode)),
        // intermediateSetpointsLift:     Attribute(0x0018, TlvDeprecated),
        // intermediateSetpointsTilt:     Attribute(0x0019, TlvDeprecated),
        /** O (no conditions) */
        safetyStatus: OptionalAttribute(
            0x001a,
            TlvBitmap(TlvUInt16, WindowCoveringSafetyStatus)
        ),
    },

    // ToDo validate response types for commands.  They are required, but the Spec doesn't define a return type
    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.6 */
    commands: {
        /** Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and tilt is at the maximum open/up position. */
        open: Command(0x00, TlvNoArguments, 0, TlvStatusResponse),
        /** Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and tilt is at the maximum closed/down position. */
        close: Command(0x01, TlvNoArguments, 1, TlvStatusResponse),
        /** Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and lift/slide that is currently occurring. */
        stop: Command(0x02, TlvNoArguments, 2, TlvStatusResponse),

        /** [LF & ABS] */
        gotoLiftValue: OptionalCommand(
            0x04,
            GoToLiftValueParams,
            4,
            TlvStatusResponse,
            { optionalIf: [LF_ABS] }
        ),
        /** LF & PA_LF, [LF] */
        gotoLiftPercent: OptionalCommand(
            0x05,
            GotoLiftPercentParams,
            5,
            TlvStatusResponse,
            { optionalIf: [LF], requiredIf: [LF_PALF] }
        ),
        /** [TL & ABS ]*/
        gotoTiltValue: OptionalCommand(
            0x07,
            GotoTiltValueParams,
            7,
            TlvStatusResponse,
            { optionalIf: [LF_ABS] }
        ),
        /** [TL & PA_TL], [TL]*/
        gotoTiltPercent: OptionalCommand(
            0x08,
            GotoTiltPercentParams,
            8,
            TlvStatusResponse,
            { optionalIf: [TL], requiredIf: [TL_PATL] }
        ),
    },
});

////////////////////////////////// MIGHT GO AWAY

const statusAttribute = {
    operationalStatus: Attribute(
        0x000a,
        TlvEnum<WindowCoveringOperationalStatus>(),
        {
            default: WindowCoveringOperationalStatus.Stopped,
        }
    ),
};
const liftAttributes = {
    currentPositionLiftPercent: OptionalAttribute(0x0008, WCPercent, {
        optionalIf: [LF_PALF],
    }),
    targetPositionLiftPercent100ths: OptionalAttribute(0x000b, WCPercent100ths, {
        requiredIf: [LF_PALF],
    }),
    currentPositionLiftPercent100ths: OptionalAttribute(0x000e, WCPercent100ths, {
        requiredIf: [LF_PALF],
    }),
};

const tiltAttributes = {
    currentPositionTiltPercent: OptionalAttribute(0x0009, WCPercent, {
        optionalIf: [TL_PATL],
    }),
    targetPositionTiltPercent100ths: OptionalAttribute(0x000c, WCPercent100ths, {
        requiredIf: [TL_PATL],
    }),
    currentPositionTiltPercent100ths: OptionalAttribute(0x000f, WCPercent100ths, {
        requiredIf: [TL_PATL],
    }),
};

/** PositionAwareLift */
export const WCPositionAwareLiftCluster = ClusterExtend(WindowCoveringCluster, {
    supportedFeatures: {
        lift: true,
        tilt: false,
        positionAwareLift: true,
        positionAwareTilt: false,
        absolutePosition: false,
    },
    commands: {
        gotoLiftPercent: Command(0x05, GotoLiftPercentParams, 5, TlvStatusResponse),
    },
    attributes: {
        type: Attribute(0x0000, TlvEnum<WindowCoveringType>(), {
            default: WindowCoveringType.RollerShade,
            persistent: true,
        }),
        ...statusAttribute,
        ...liftAttributes,
    },
});

/** PositionAware TiltCluster */
export const WCPositionAwareTiltCluster = ClusterExtend(WindowCoveringCluster, {
    supportedFeatures: {
        lift: false,
        tilt: true,
        positionAwareLift: false,
        positionAwareTilt: true,
        absolutePosition: false,
    },
    commands: {
        gotoTiltPercent: Command(0x08, GotoTiltPercentParams, 8, TlvStatusResponse),
    },
    attributes: {
        type: Attribute(0x0000, TlvEnum<WindowCoveringType>(), {
            default: WindowCoveringType.TiltOnlyBlind,
            persistent: true,
        }),
        ...statusAttribute,
        ...tiltAttributes,
    },
});

/** Position Aware Lift & Tilt */
export const WCPositionAwareLiftAndTiltCluster = ClusterExtend(
    WindowCoveringCluster,
    {
        supportedFeatures: {
            lift: true,
            tilt: true,
            positionAwareLift: true,
            positionAwareTilt: true,
            absolutePosition: false,
        },
        commands: {
            gotoLiftPercent: OptionalCommand(
                0x05,
                GotoLiftPercentParams,
                5,
                TlvStatusResponse
            ),
            gotoTiltPercent: OptionalCommand(
                0x08,
                GotoTiltPercentParams,
                8,
                TlvStatusResponse
            ),
        },
        attributes: {
            ...statusAttribute,
            ...liftAttributes,
            ...tiltAttributes,
            type: Attribute(0x0000, TlvEnum<WindowCoveringType>(), {
                default: WindowCoveringType.LiftAndTiltBlind,
                persistent: true,
            }),
        },
    }
);

/** convenience type */
export type WindowCoveringClusterObj = ClusterServerObj<
    typeof WindowCoveringCluster.attributes,
    typeof WindowCoveringCluster.commands,
    {}
>;
export type WCPositionAwareLiftClusterObj = ClusterServerObj<
    typeof WCPositionAwareLiftCluster.attributes,
    typeof WCPositionAwareLiftCluster.commands,
    {}
>;
export type WCPositionAwareTiltClusterObj = ClusterServerObj<
    typeof WCPositionAwareTiltCluster.attributes,
    typeof WCPositionAwareTiltCluster.commands,
    {}
>;
export type WCPositionAwareLiftAndTiltClusterObj = ClusterServerObj<
    typeof WCPositionAwareLiftAndTiltCluster.attributes,
    typeof WCPositionAwareLiftAndTiltCluster.commands,
    {}
>;
