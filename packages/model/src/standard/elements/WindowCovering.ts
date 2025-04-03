/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const WindowCovering = Cluster(
    {
        name: "WindowCovering", id: 0x102, classification: "application", pics: "WNCV",
        details: "The window covering cluster provides an interface for controlling and adjusting automatic window " +
            "coverings such as drapery motors, automatic shades, curtains and blinds.",
        xref: { document: "cluster", section: "5.3" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "5.3.4" } },

        Field({
            name: "LF", conformance: "O.a+", constraint: "0", description: "Lift",
            details: "The Lift feature applies to window coverings that lift up and down (e.g. for a roller shade, Up and " +
                "Down is lift Open and Close) or slide left to right (e.g. for a sliding curtain, Left and Right is " +
                "lift Open and Close).",
            xref: { document: "cluster", section: "5.3.4.1" }
        }),

        Field({
            name: "TL", conformance: "O.a+", constraint: "1", description: "Tilt",
            details: "The Tilt feature applies to window coverings with vertical or horizontal strips.",
            xref: { document: "cluster", section: "5.3.4.2" }
        }),
        Field({
            name: "PA_LF", conformance: "[LF]", constraint: "2", description: "PositionAwareLift",
            details: "Position aware lift control is supported."
        }),

        Field({
            name: "ABS", conformance: "O", constraint: "3", description: "AbsolutePosition",

            details: "The percentage attributes shall indicate the position as a percentage between the " +
                "InstalledOpenLimits and InstalledClosedLimits attributes of the window covering starting at the open " +
                "(0.00%)." +
                "\n" +
                "As a general rule, absolute positioning (in centimeters or tenth of a degrees) SHOULD NOT be " +
                "supported for new implementations.",

            xref: { document: "cluster", section: "5.3.4.4" }
        }),

        Field({
            name: "PA_TL", conformance: "[TL]", constraint: "4", description: "PositionAwareTilt",
            details: "Position aware tilt control is supported."
        })
    ),

    Attribute({
        name: "Type", id: 0x0, type: "TypeEnum", access: "R V", conformance: "M", constraint: "desc",
        default: 0, quality: "F",
        details: "This attribute shall identify the type of window covering.",
        xref: { document: "cluster", section: "5.3.6.1" }
    }),

    Attribute({
        name: "PhysicalClosedLimitLift", id: 0x1, type: "uint16", access: "R V",
        conformance: "[LF & PA_LF & ABS]", default: 0, quality: "F",
        details: "Indicates the maximum possible encoder position possible (Unit cm, centimeters) to position the " +
            "height of the window covering lift.",
        xref: { document: "cluster", section: "5.3.6.2" }
    }),

    Attribute({
        name: "PhysicalClosedLimitTilt", id: 0x2, type: "uint16", access: "R V",
        conformance: "[TL & PA_TL & ABS]", default: 0, quality: "F",
        details: "Indicates the maximum possible encoder position possible (Unit 0.1°, tenths of a degree) to position " +
            "the angle of the window covering tilt.",
        xref: { document: "cluster", section: "5.3.6.3" }
    }),

    Attribute({
        name: "CurrentPositionLift", id: 0x3, type: "uint16", access: "R V",
        conformance: "[LF & PA_LF & ABS]", constraint: "installedOpenLimitLift to installedClosedLimitLift",
        default: null, quality: "X N",
        details: "Indicates the actual lift position (Unit cm, centimeters) of the window covering from the fully-open " +
            "position.",
        xref: { document: "cluster", section: "5.3.6.4" }
    }),

    Attribute({
        name: "CurrentPositionTilt", id: 0x4, type: "uint16", access: "R V",
        conformance: "[TL & PA_TL & ABS]", constraint: "installedOpenLimitTilt to installedClosedLimitTilt",
        default: null, quality: "X N",
        details: "Indicates the actual tilt position (Unit 0.1°, tenths of a degree) of the window covering from the " +
            "fully-open position.",
        xref: { document: "cluster", section: "5.3.6.5" }
    }),

    Attribute({
        name: "NumberOfActuationsLift", id: 0x5, type: "uint16", access: "R V", conformance: "[LF]",
        default: 0, quality: "N",
        details: "Indicates the total number of lift/slide actuations applied to the window covering since the device " +
            "was installed.",
        xref: { document: "cluster", section: "5.3.6.6" }
    }),

    Attribute({
        name: "NumberOfActuationsTilt", id: 0x6, type: "uint16", access: "R V", conformance: "[TL]",
        default: 0, quality: "N",
        details: "Indicates the total number of tilt actuations applied to the window covering since the device was " +
            "installed.",
        xref: { document: "cluster", section: "5.3.6.7" }
    }),

    Attribute({
        name: "ConfigStatus", id: 0x7, type: "ConfigStatusBitmap", access: "R V", conformance: "M",
        constraint: "desc", quality: "N",
        details: "This attribute specifies the configuration and status information of the window covering." +
            "\n" +
            "To change settings, devices shall write to the Mode attribute. The behavior causing the setting or " +
            "clearing of each bit is vendor specific.",
        xref: { document: "cluster", section: "5.3.6.8" }
    }),

    Attribute({
        name: "CurrentPositionLiftPercentage", id: 0x8, type: "percent", access: "R V",
        conformance: "[LF & PA_LF]", default: null, quality: "X N P",
        details: "Indicates the actual position as a percentage from 0% to 100% with 1% default step. This attribute " +
            "is equal to CurrentPositionLiftPercent100ths attribute divided by 100.",
        xref: { document: "cluster", section: "5.3.6.11" }
    }),

    Attribute({
        name: "CurrentPositionTiltPercentage", id: 0x9, type: "percent", access: "R V",
        conformance: "[TL & PA_TL]", default: null, quality: "X N P",
        details: "Indicates the actual position as a percentage from 0% to 100% with 1% default step. This attribute " +
            "is equal to CurrentPositionTiltPercent100ths attribute divided by 100.",
        xref: { document: "cluster", section: "5.3.6.12" }
    }),

    Attribute({
        name: "OperationalStatus", id: 0xa, type: "OperationalStatusBitmap", access: "R V",
        conformance: "M", default: 0, quality: "P",
        details: "Indicates the currently ongoing operations and applies to all type of devices.",
        xref: { document: "cluster", section: "5.3.6.15" }
    }),

    Attribute({
        name: "TargetPositionLiftPercent100ths", id: 0xb, type: "percent100ths", access: "R V",
        conformance: "LF & PA_LF", default: null, quality: "X P",
        details: "Indicates the position where the window covering lift will go or is moving to as a percentage (Unit " +
            "0.01%).",
        xref: { document: "cluster", section: "5.3.6.13" }
    }),

    Attribute({
        name: "TargetPositionTiltPercent100ths", id: 0xc, type: "percent100ths", access: "R V",
        conformance: "TL & PA_TL", default: null, quality: "X P",
        details: "Indicates the position where the window covering tilt will go or is moving to as a percentage (Unit " +
            "0.01%).",
        xref: { document: "cluster", section: "5.3.6.14" }
    }),

    Attribute({
        name: "EndProductType", id: 0xd, type: "EndProductTypeEnum", access: "R V", conformance: "M",
        constraint: "desc", default: 0, quality: "F",
        details: "This attribute SHOULD provide more detail about the product type than can be determined from the " +
            "main category indicated by the Type attribute." +
            "\n" +
            "The table below helps to match the EndProductType attribute with the Type attribute.",
        xref: { document: "cluster", section: "5.3.6.16" }
    }),

    Attribute({
        name: "CurrentPositionLiftPercent100ths", id: 0xe, type: "percent100ths", access: "R V",
        conformance: "LF & PA_LF", constraint: "max 10000", default: null, quality: "X N P",
        details: "Indicates the actual position as a percentage with a minimal step of 0.01%. E.g Max 10000 equals " +
            "100.00%.",
        xref: { document: "cluster", section: "5.3.6.9" }
    }),

    Attribute({
        name: "CurrentPositionTiltPercent100ths", id: 0xf, type: "percent100ths", access: "R V",
        conformance: "TL & PA_TL", constraint: "max 10000", default: null, quality: "X N P",
        details: "Indicates the actual position as a percentage with a minimal step of 0.01%. E.g Max 10000 equals " +
            "100.00%.",
        xref: { document: "cluster", section: "5.3.6.10" }
    }),

    Attribute({
        name: "InstalledOpenLimitLift", id: 0x10, type: "uint16", access: "R V",
        conformance: "LF & PA_LF & ABS", constraint: "max 65534", default: 0, quality: "N",
        details: "Indicates the open limit for lifting the window covering whether position (in centimeters) is " +
            "encoded or timed.",
        xref: { document: "cluster", section: "5.3.6.17" }
    }),

    Attribute({
        name: "InstalledClosedLimitLift", id: 0x11, type: "uint16", access: "R V",
        conformance: "LF & PA_LF & ABS", constraint: "max 65534", default: 65534, quality: "N",
        details: "Indicates the closed limit for lifting the window covering whether position (in centimeters) is " +
            "encoded or timed.",
        xref: { document: "cluster", section: "5.3.6.18" }
    }),

    Attribute({
        name: "InstalledOpenLimitTilt", id: 0x12, type: "uint16", access: "R V",
        conformance: "TL & PA_TL & ABS", constraint: "max 65534", default: 0, quality: "N",
        details: "Indicates the open limit for tilting the window covering whether position (in tenth of a degree) is " +
            "encoded or timed.",
        xref: { document: "cluster", section: "5.3.6.19" }
    }),

    Attribute({
        name: "InstalledClosedLimitTilt", id: 0x13, type: "uint16", access: "R V",
        conformance: "TL & PA_TL & ABS", constraint: "max 65534", default: 65534, quality: "N",
        details: "Indicates the closed limit for tilting the window covering whether position (in tenth of a degree) " +
            "is encoded or timed.",
        xref: { document: "cluster", section: "5.3.6.20" }
    }),

    Attribute({ name: "VelocityLift", id: 0x14, conformance: "D", xref: { document: "cluster", section: "5.3.6" } }),
    Attribute(
        { name: "AccelerationTimeLift", id: 0x15, conformance: "D", xref: { document: "cluster", section: "5.3.6" } }
    ),
    Attribute(
        { name: "DecelerationTimeLift", id: 0x16, conformance: "D", xref: { document: "cluster", section: "5.3.6" } }
    ),

    Attribute({
        name: "Mode", id: 0x17, type: "ModeBitmap", access: "RW VM", conformance: "M", default: 0,
        quality: "N",

        details: "The Mode attribute allows configuration of the window covering, such as: reversing the motor " +
            "direction, placing the window covering into calibration mode, placing the motor into maintenance " +
            "mode, disabling the network, and disabling status LEDs." +
            "\n" +
            "In the case a device does not support or implement a specific mode, e.g. the device has a specific " +
            "installation method and reversal is not relevant or the device does not include a maintenance mode, " +
            "any write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits " +
            "set, must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned.",

        xref: { document: "cluster", section: "5.3.6.21" }
    }),

    Attribute({ name: "IntermediateSetpointsLift", id: 0x18, conformance: "D", xref: { document: "cluster", section: "5.3.6" } }),
    Attribute({ name: "IntermediateSetpointsTilt", id: 0x19, conformance: "D", xref: { document: "cluster", section: "5.3.6" } }),

    Attribute({
        name: "SafetyStatus", id: 0x1a, type: "SafetyStatusBitmap", access: "R V", conformance: "O",
        constraint: "desc", default: 0, quality: "P",
        details: "The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing " +
            "movements. By default for nominal operation all flags are cleared (0). A device might support none, " +
            "one or several bit flags from this attribute (all optional).",
        xref: { document: "cluster", section: "5.3.6.22" }
    }),

    Command({
        name: "UpOrOpen", id: 0x0, access: "O", conformance: "M", direction: "request", response: "status",

        details: "Upon receipt of this command, the window covering will adjust its position so the physical " +
            "lift/slide and tilt is at the maximum open/up position. This will happen as fast as possible. The " +
            "server attributes shall be updated as follows:" +
            "\n" +
            "if the PositionAware feature is supported:" +
            "\n" +
            "  • TargetPositionLiftPercent100ths attribute shall be set to 0.00%." +
            "\n" +
            "  • TargetPositionTiltPercent100ths attribute shall be set to 0.00%." +
            "\n" +
            "The server positioning attributes will follow the movements, once the movement has successfully " +
            "finished, the server attributes shall be updated as follows:" +
            "\n" +
            "if the PositionAware feature is supported:" +
            "\n" +
            "  • CurrentPositionLiftPercent100ths attribute shall be 0.00%." +
            "\n" +
            "  • CurrentPositionLiftPercentage attribute shall be 0%." +
            "\n" +
            "  • CurrentPositionTiltPercent100ths attribute shall be 0.00%." +
            "\n" +
            "  • CurrentPositionTiltPercentage attribute shall be 0%. if the AbsolutePosition feature is " +
            "    supported:" +
            "\n" +
            "  • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute." +
            "\n" +
            "  • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute.",

        xref: { document: "cluster", section: "5.3.7.1" }
    }),

    Command({
        name: "DownOrClose", id: 0x1, access: "O", conformance: "M", direction: "request",
        response: "status",

        details: "Upon receipt of this command, the window covering will adjust its position so the physical " +
            "lift/slide and tilt is at the maximum closed/down position. This will happen as fast as possible. " +
            "The server attributes supported shall be updated as follows:" +
            "\n" +
            "if the PositionAware feature is supported:" +
            "\n" +
            "  • TargetPositionLiftPercent100ths attribute shall be set to 100.00%." +
            "\n" +
            "  • TargetPositionTiltPercent100ths attribute shall be set to 100.00%." +
            "\n" +
            "The server positioning attributes will follow the movements, once the movement has successfully " +
            "finished, the server attributes shall be updated as follows:" +
            "\n" +
            "if the PositionAware feature is supported:" +
            "\n" +
            "  • CurrentPositionLiftPercent100ths attribute shall be 100.00%." +
            "\n" +
            "  • CurrentPositionLiftPercentage attribute shall be 100%." +
            "\n" +
            "  • CurrentPositionTiltPercent100ths attribute shall be 100.00%." +
            "\n" +
            "  • CurrentPositionTiltPercentage attribute shall be 100%. if the AbsolutePosition feature is " +
            "    supported:" +
            "\n" +
            "  • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute." +
            "\n" +
            "  • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute.",

        xref: { document: "cluster", section: "5.3.7.2" }
    }),

    Command({
        name: "StopMotion", id: 0x2, access: "O", conformance: "M", direction: "request",
        response: "status",

        details: "Upon receipt of this command, the window covering will stop any adjusting to the physical tilt and " +
            "lift/slide that is currently occurring. The server attributes supported shall be updated as follows:" +
            "\n" +
            "  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths " +
            "    attribute value." +
            "\n" +
            "  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths " +
            "    attribute value.",

        xref: { document: "cluster", section: "5.3.7.3" }
    }),

    Command(
        {
            name: "GoToLiftValue", id: 0x4, access: "O", conformance: "[LF & ABS]", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.3.7.4" }
        },

        Field({
            name: "LiftValue", id: 0x0, type: "uint16", conformance: "M",
            constraint: "installedOpenLimitLift to installedClosedLimitLift",
            details: "This field shall specify the requested physical lift/slide position in unit cm (centimeters).",
            xref: { document: "cluster", section: "5.3.7.4.1" }
        })
    ),

    Command(
        {
            name: "GoToLiftPercentage", id: 0x5, access: "O", conformance: "LF & PA_LF, [LF]",
            direction: "request", response: "status",

            details: "Upon receipt of this command, the server will adjust the window covering to the lift/slide " +
                "percentage specified in the payload of this command." +
                "\n" +
                "If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall " +
                "be set to LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be " +
                "set to LiftPercentageValue * 100." +
                "\n" +
                "If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to " +
                "LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not " +
                "LiftPercent100thsValue) has a value to set the target position." +
                "\n" +
                "If the server does not support the PositionAware feature, then a zero percentage shall be treated as " +
                "a UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the " +
                "device is only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND " +
                "status SHOULD be returned.",

            xref: { document: "cluster", section: "5.3.7.5" }
        },

        Field({ name: "LiftPercent100thsValue", id: 0x0, type: "percent100ths", conformance: "M", constraint: "desc" }),
        Field({ name: "Ignored", id: 0x1, conformance: "X" })
    ),

    Command(
        {
            name: "GoToTiltValue", id: 0x7, access: "O", conformance: "[TL & ABS]", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.3.7.6" }
        },

        Field({
            name: "TiltValue", id: 0x0, type: "uint16", conformance: "M",
            constraint: "installedOpenLimitTilt to installedClosedLimitTilt",
            details: "This field shall specify the requested physical tilt position in unit 0.1° (tenth of a degrees).",
            xref: { document: "cluster", section: "5.3.7.6.1" }
        })
    ),

    Command(
        {
            name: "GoToTiltPercentage", id: 0x8, access: "O", conformance: "TL & PA_TL, [TL]",
            direction: "request", response: "status",

            details: "Upon receipt of this command, the server will adjust the window covering to the tilt percentage " +
                "specified in the payload of this command." +
                "\n" +
                "If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute shall " +
                "be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be " +
                "set to TiltPercentageValue * 100." +
                "\n" +
                "If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to " +
                "TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not " +
                "TiltPercent100thsValue) has a value to set the target position." +
                "\n" +
                "If the server does not support the PositionAware feature, then a zero percentage shall be treated as " +
                "a UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the " +
                "device is only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND " +
                "status SHOULD be returned.",

            xref: { document: "cluster", section: "5.3.7.7" }
        },

        Field({ name: "TiltPercent100thsValue", id: 0x0, type: "percent100ths", conformance: "M", constraint: "desc" }),
        Field({ name: "Ignored", id: 0x1, conformance: "X" })
    ),

    Datatype(
        { name: "ConfigStatusBitmap", type: "map8", xref: { document: "cluster", section: "5.3.5.1" } },

        Field(
            {
                name: "Operational", constraint: "0", description: "Device is operational.",
                details: "This bit shall indicate whether the window covering is operational for regular use:" +
                    "\n" +
                    "  • 0 = Not Operational" +
                    "\n" +
                    "  • 1 = Operational",
                xref: { document: "cluster", section: "5.3.5.1.1" }
            }
        ),

        Field({ name: "OnlineReserved", constraint: "1" }),

        Field(
            {
                name: "LiftMovementReversed", constraint: "2", description: "The lift movement is reversed.",
                details: "This bit shall indicate whether the lift movement is reversed:" +
                    "\n" +
                    "  • 0 = Lift movement is normal" +
                    "\n" +
                    "  • 1 = Lift movement is reversed",
                xref: { document: "cluster", section: "5.3.5.1.2" }
            }
        ),

        Field(
            {
                name: "LiftPositionAware", constraint: "3",
                description: "Supports the PositionAwareLift feature (PA_LF).",
                details: "This bit shall indicate whether the window covering supports the PositionAwareLift feature:" +
                    "\n" +
                    "  • 0 = Lift control is not position aware" +
                    "\n" +
                    "  • 1 = Lift control is position aware (PA_LF)",
                xref: { document: "cluster", section: "5.3.5.1.3" }
            }
        ),

        Field(
            {
                name: "TiltPositionAware", constraint: "4",
                description: "Supports the PositionAwareTilt feature (PA_TL).",
                details: "This bit shall indicate whether the window covering supports the PositionAwareTilt feature:" +
                    "\n" +
                    "  • 0 = Tilt control is not position aware" +
                    "\n" +
                    "  • 1 = Tilt control is position aware (PA_TL)",
                xref: { document: "cluster", section: "5.3.5.1.4" }
            }
        ),

        Field(
            {
                name: "LiftEncoderControlled", constraint: "5", description: "Uses an encoder for lift.",

                details: "This bit shall indicate whether a position aware controlled window covering is employing an encoder " +
                    "for positioning the height of the window covering:" +
                    "\n" +
                    "  • 0 = Timer Controlled" +
                    "\n" +
                    "  • 1 = Encoder Controlled",

                xref: { document: "cluster", section: "5.3.5.1.5" }
            }
        ),

        Field(
            {
                name: "TiltEncoderControlled", constraint: "6", description: "Uses an encoder for tilt.",

                details: "This bit shall indicate whether a position aware controlled window covering is employing an encoder " +
                    "for tilting the window covering:" +
                    "\n" +
                    "  • 0 = Timer Controlled" +
                    "\n" +
                    "  • 1 = Encoder Controlled",

                xref: { document: "cluster", section: "5.3.5.1.6" }
            }
        )
    ),

    Datatype(
        { name: "ModeBitmap", type: "map8", xref: { document: "cluster", section: "5.3.5.2" } },

        Field(
            {
                name: "MotorDirectionReversed", constraint: "0", description: "Reverse the lift direction.",
                details: "This bit shall control the motor direction:" +
                    "\n" +
                    "  • 0 = Lift movement is normal" +
                    "\n" +
                    "  • 1 = Lift movement is reversed",
                xref: { document: "cluster", section: "5.3.5.2.1" }
            }
        ),

        Field(
            {
                name: "CalibrationMode", constraint: "1", description: "Perform a calibration.",
                details: "This bit shall set the window covering into calibration mode:" +
                    "\n" +
                    "  • 0 = Normal mode" +
                    "\n" +
                    "  • 1 = Calibration mode",
                xref: { document: "cluster", section: "5.3.5.2.2" }
            }
        ),

        Field(
            {
                name: "MaintenanceMode", constraint: "2", description: "Freeze all motions for maintenance.",
                details: "This bit shall set the window covering into maintenance mode:" +
                    "\n" +
                    "  • 0 = Normal mode" +
                    "\n" +
                    "  • 1 = Maintenance mode",
                xref: { document: "cluster", section: "5.3.5.2.3" }
            }
        ),

        Field(
            {
                name: "LedFeedback", constraint: "3", description: "Control the LEDs feedback.",
                details: "This bit shall control feedback LEDs:" +
                    "\n" +
                    "  • 0 = LEDs are off" +
                    "\n" +
                    "  • 1 = LEDs will display feedback",
                xref: { document: "cluster", section: "5.3.5.2.4" }
            }
        )
    ),

    Datatype(
        {
            name: "OperationalStatusBitmap", type: "map8",

            details: "The OperationalStatusBitmap is using several internal operational state fields (composed of 2 bits) " +
                "following this definition:" +
                "\n" +
                "  • 00b = Currently not moving" +
                "\n" +
                "  • 01b = Currently opening (e.g. moving from closed to open)." +
                "\n" +
                "  • 10b = Currently closing (e.g. moving from open to closed)." +
                "\n" +
                "  • 11b = Reserved",

            xref: { document: "cluster", section: "5.3.5.3" }
        },

        Field({
            name: "Global", type: "MovementStatus", constraint: "0 to 1",
            description: "Global operational state.",
            details: "These bits shall indicate in which direction the covering is currently moving or if it has stopped. " +
                "Global operational state shall always reflect the overall motion of the device.",
            xref: { document: "cluster", section: "5.3.5.3.1" }
        }),

        Field({
            name: "Lift", type: "MovementStatus", constraint: "2 to 3", description: "Lift operational state.",
            details: "These bits shall indicate in which direction the covering’s lift is currently moving or if it has " +
                "stopped.",
            xref: { document: "cluster", section: "5.3.5.3.2" }
        }),

        Field({
            name: "Tilt", type: "MovementStatus", constraint: "4 to 5", description: "Tilt operational state.",
            details: "These bits shall indicate in which direction the covering’s tilt is currently moving or if it has " +
                "stopped.",
            xref: { document: "cluster", section: "5.3.5.3.3" }
        })
    ),

    Datatype(
        { name: "SafetyStatusBitmap", type: "map16", xref: { document: "cluster", section: "5.3.5.4" } },
        Field({
            name: "RemoteLockout", constraint: "0",
            description: "Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range."
        }),
        Field({
            name: "TamperDetection", constraint: "1",
            description: "Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without its actuator(s)."
        }),
        Field({
            name: "FailedCommunication", constraint: "2",
            description: "Communication failure to sensors or other safety equipment."
        }),
        Field({
            name: "PositionFailure", constraint: "3",
            description: "Device has failed to reach the desired position. e.g. with position aware device, time expired before TargetPosition is reached."
        }),
        Field({
            name: "ThermalProtection", constraint: "4",
            description: "Motor(s) and/or electric circuit thermal protection activated."
        }),
        Field({ name: "ObstacleDetected", constraint: "5", description: "An obstacle is preventing actuator movement." }),
        Field({
            name: "Power", constraint: "6",
            description: "Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power might not be fully available at the moment."
        }),
        Field({
            name: "StopInput", constraint: "7",
            description: "Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335)."
        }),
        Field({ name: "MotorJammed", constraint: "8", description: "Mechanical problem related to the motor(s) detected." }),
        Field({ name: "HardwareFailure", constraint: "9", description: "PCB, fuse and other electrics problems." }),
        Field({
            name: "ManualOperation", constraint: "10",
            description: "Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled)."
        }),
        Field({ name: "Protection", constraint: "11", description: "Protection is activated." })
    ),

    Datatype(
        { name: "TypeEnum", type: "enum8", asOf: "1.2", xref: { document: "cluster", section: "5.3.5.5" } },
        Field({ name: "Rollershade", id: 0x0, conformance: "LF & !TL", description: "RollerShade" }),
        Field({ name: "Rollershade2Motor", id: 0x1, conformance: "LF & !TL", description: "RollerShade - 2 Motor" }),
        Field({ name: "RollershadeExterior", id: 0x2, conformance: "LF & !TL", description: "RollerShade - Exterior" }),
        Field({
            name: "RollershadeExterior2Motor", id: 0x3, conformance: "LF & !TL",
            description: "RollerShade - Exterior - 2 Motor"
        }),
        Field({ name: "Drapery", id: 0x4, conformance: "LF & !TL", description: "Drapery (curtain)" }),
        Field({ name: "Awning", id: 0x5, conformance: "LF & !TL", description: "Awning" }),
        Field({ name: "Shutter", id: 0x6, conformance: "LF | TL", description: "Shutter" }),
        Field({ name: "TiltBlindTiltOnly", id: 0x7, conformance: "!LF & TL", description: "Tilt Blind - Tilt Only" }),
        Field({ name: "TiltBlindLift", id: 0x8, conformance: "LF & TL", description: "Tilt Blind - Lift & Tilt" }),
        Field({ name: "ProjectorScreen", id: 0x9, conformance: "LF & !TL", description: "Projector Screen" }),
        Field({ name: "Unknown", id: 0xff, conformance: "O", description: "Unknown" })
    ),

    Datatype(
        { name: "EndProductTypeEnum", type: "enum8", xref: { document: "cluster", section: "5.3.5.6" } },
        Field({ name: "RollerShade", id: 0x0, conformance: "LF", description: "Simple Roller Shade" }),
        Field({ name: "RomanShade", id: 0x1, conformance: "LF", description: "Roman Shade" }),
        Field({ name: "BalloonShade", id: 0x2, conformance: "LF", description: "Balloon Shade" }),
        Field({ name: "WovenWood", id: 0x3, conformance: "LF", description: "Woven Wood" }),
        Field({ name: "PleatedShade", id: 0x4, conformance: "LF", description: "Pleated Shade" }),
        Field({ name: "CellularShade", id: 0x5, conformance: "LF", description: "Cellular Shade" }),
        Field({ name: "LayeredShade", id: 0x6, conformance: "LF", description: "Layered Shade" }),
        Field({ name: "LayeredShade2D", id: 0x7, conformance: "LF", description: "Layered Shade 2D" }),
        Field({ name: "SheerShade", id: 0x8, conformance: "LF & TL", description: "Sheer Shade" }),
        Field({ name: "TiltOnlyInteriorBlind", id: 0x9, conformance: "TL", description: "Tilt Only Interior Blind" }),
        Field({ name: "InteriorBlind", id: 0xa, conformance: "LF & TL", description: "Interior Blind" }),
        Field({
            name: "VerticalBlindStripCurtain", id: 0xb, conformance: "LF & TL",
            description: "Vertical Blind, Strip Curtain"
        }),
        Field({ name: "InteriorVenetianBlind", id: 0xc, conformance: "LF & TL", description: "Interior Venetian Blind" }),
        Field({ name: "ExteriorVenetianBlind", id: 0xd, conformance: "LF & TL", description: "Exterior Venetian Blind" }),
        Field({ name: "LateralLeftCurtain", id: 0xe, conformance: "LF", description: "Lateral Left Curtain" }),
        Field({ name: "LateralRightCurtain", id: 0xf, conformance: "LF", description: "Lateral Right Curtain" }),
        Field({ name: "CentralCurtain", id: 0x10, conformance: "LF", description: "Central Curtain" }),
        Field({ name: "RollerShutter", id: 0x11, conformance: "LF", description: "Roller Shutter" }),
        Field({ name: "ExteriorVerticalScreen", id: 0x12, conformance: "LF", description: "Exterior Vertical Screen" }),
        Field({ name: "AwningTerracePatio", id: 0x13, conformance: "LF", description: "Awning Terrace (Patio)" }),
        Field({ name: "AwningVerticalScreen", id: 0x14, conformance: "LF", description: "Awning Vertical Screen" }),
        Field({ name: "TiltOnlyPergola", id: 0x15, conformance: "LF | TL", description: "Tilt Only Pergola" }),
        Field({ name: "SwingingShutter", id: 0x16, conformance: "LF | TL", description: "Swinging Shutter" }),
        Field({ name: "SlidingShutter", id: 0x17, conformance: "LF | TL", description: "Sliding Shutter" }),
        Field({ name: "Unknown", id: 0xff, conformance: "O", description: "Unknown" })
    ),

    Datatype(
        { name: "MovementStatus", type: "enum8", details: "Values for OperationalStatus attribute fields." },
        Field({ name: "Stopped", id: 0x0, details: "Covering is not moving" }),
        Field({ name: "Opening", id: 0x1, details: "Covering is moving from closed to open" }),
        Field({ name: "Closing", id: 0x2, details: "Covering is moving from open to closed" })
    )
);

MatterDefinition.children.push(WindowCovering);
