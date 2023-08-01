/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "WindowCovering", id: 0x102, classification: "application",
    description: "Window Covering",
    details: "The window covering cluster provides an interface for controlling and adjusting automatic window " +
        "coverings such as drapery motors, automatic shades, curtains and blinds.",
    xref: { document: "cluster", section: "5.3" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "5.3.4" },

            children: [
                {
                    tag: "datatype", name: "LF", conformance: "O.a+", constraint: "0", description: "Lift",
                    details: "Lift Control and behavior for lifting/sliding window coverings"
                },
                {
                    tag: "datatype", name: "TL", conformance: "O.a+", constraint: "1", description: "Tilt",
                    details: "Tilt Control and behavior for tilting window coverings"
                },
                {
                    tag: "datatype", name: "PA_LF", conformance: "[LF]", constraint: "2",
                    description: "PositionAwareLift",
                    details: "Position Aware lift control is supported."
                },
                {
                    tag: "datatype", name: "ABS", conformance: "O", constraint: "3", description: "AbsolutePosition",
                    details: "Absolute positioning is supported."
                },
                {
                    tag: "datatype", name: "PA_TL", conformance: "[TL]", constraint: "4",
                    description: "PositionAwareTilt",
                    details: "Position Aware tilt control is supported."
                }
            ]
        },

        {
            tag: "attribute", name: "Type", id: 0x0, type: "enum8", access: "R V", conformance: "M",
            constraint: "desc", default: 0, quality: "F",
            details: "The Type attribute identifies the type of window covering being controlled by this endpoint and " +
                "shall be set to one of the non-reserved values in the table below.",
            xref: { document: "cluster", section: "5.3.5.1" },

            children: [
                { tag: "datatype", name: "Rollershade", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Rollershade2Motor", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "RollershadeExterior", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "RollershadeExterior2Motor", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Drapery", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Awning", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "Shutter", id: 0x6, conformance: "M" },
                { tag: "datatype", name: "TiltBlindTiltOnly", id: 0x7, conformance: "M" },
                { tag: "datatype", name: "TiltBlindLift", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "ProjectorScreen", id: 0x9, conformance: "M" },
                { tag: "datatype", name: "Unknown", id: 0xff, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "PhysicalClosedLimitLift", id: 0x1, type: "uint16", access: "R V",
            conformance: "[LF & PA_LF & ABS]", default: 0, quality: "F",
            details: "The PhysicalClosedLimitLift attribute identifies the maximum possible encoder position possible (in " +
                "centimeters) to position the height of the window covering Lift.",
            xref: { document: "cluster", section: "5.3.5.2" }
        },

        {
            tag: "attribute", name: "PhysicalClosedLimitTilt", id: 0x2, type: "uint16", access: "R V",
            conformance: "[TL & PA_TL & ABS]", default: 0, quality: "F",
            details: "The PhysicalClosedLimitTilt attribute identifies the maximum possible encoder position possible " +
                "(tenth of a degrees) to position the angle of the window covering Tilt.",
            xref: { document: "cluster", section: "5.3.5.3" }
        },

        {
            tag: "attribute", name: "CurrentPositionLift", id: 0x3, type: "uint16", access: "R V",
            conformance: "[LF & PA_LF & ABS]", constraint: "InstalledOpenLimitLift to InstalledClosedLimitLift",
            default: null, quality: "X N",
            details: "The CurrentPositionLift attribute identifies the actual Lift position (in centimeters) of the " +
                "window covering from the fully-open position.",
            xref: { document: "cluster", section: "5.3.5.4" }
        },

        {
            tag: "attribute", name: "CurrentPositionTilt", id: 0x4, type: "uint16", access: "R V",
            conformance: "[TL & PA_TL & ABS]", constraint: "InstalledOpenLimitTilt to InstalledClosedLimitTilt",
            default: null, quality: "X N",
            details: "The CurrentPositionTilt attribute identifies the actual Tilt position (in tenth of an degree) of " +
                "the window covering from the fully-open position.",
            xref: { document: "cluster", section: "5.3.5.5" }
        },

        {
            tag: "attribute", name: "NumberOfActuationsLift", id: 0x5, type: "uint16", access: "R V",
            conformance: "[LF]", default: 0, quality: "N",
            details: "The NumberOfActuationsLift attribute identifies the total number of lift/slide actuations applied " +
                "to the Window Covering since the device was installed.",
            xref: { document: "cluster", section: "5.3.5.6" }
        },

        {
            tag: "attribute", name: "NumberOfActuationsTilt", id: 0x6, type: "uint16", access: "R V",
            conformance: "[TL]", default: 0, quality: "N",
            details: "The NumberOfActuationsTilt attribute identifies the total number of tilt actuations applied to the " +
                "Window Covering since the device was installed.",
            xref: { document: "cluster", section: "5.3.5.7" }
        },

        {
            tag: "attribute", name: "ConfigStatus", id: 0x7, type: "map8", access: "R V", conformance: "M",
            constraint: "desc", default: 3, quality: "N",
            details: "The ConfigStatus attribute makes configuration and status information available. To change " +
                "settings, devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. " +
                "The behavior causing the setting or clearing of each bit is vendor specific. See table below for " +
                "details on each bit.",
            xref: { document: "cluster", section: "5.3.5.8" },

            children: [
                {
                    tag: "datatype", name: "Operational", constraint: "0",
                    description: "Operational: This status bit defines if the Window Covering is operational.The SafetyStatus & Mode attributes might affect this bit"
                },
                { tag: "datatype", name: "OnlineReserved", constraint: "1", description: "deprecated" },
                {
                    tag: "datatype", name: "LiftMovementReversed", constraint: "2",
                    description: "Reversal: This status bit identifies if the directions of the lift/slide movements have been reversed in order for commands (e.g: Open, Close, GoTos) to match the physical installation conditionsThis bit can be adjusted by setting the appropriate reversal bit value in the Mode attribute"
                },
                {
                    tag: "datatype", name: "LiftPositionAware", constraint: "3",
                    description: "Control - Lift: This status bit identifies if the window covering supports the Position Aware Lift Control"
                },
                {
                    tag: "datatype", name: "TiltPositionAware", constraint: "4",
                    description: "Control - Tilt: This status bit identifies if the window covering supports the Position Aware Tilt Control"
                },
                {
                    tag: "datatype", name: "LiftEncoderControlled", constraint: "5",
                    description: "Encoder - Lift: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for positioning the height of the window covering."
                },
                {
                    tag: "datatype", name: "TiltEncoderControlled", constraint: "6",
                    description: "Encoder - Tilt: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for tilting the window covering."
                }
            ]
        },

        {
            tag: "attribute", name: "CurrentPositionLiftPercentage", id: 0x8, type: "percent", access: "R V",
            conformance: "[LF & PA_LF]", constraint: "0 to 100", default: null, quality: "X N S P",
            details: "The CurrentPositionLiftPercentage attribute identifies the actual position as a percentage from 0% " +
                "to 100% with 1% default step. This attribute is equal to CurrentPositionLiftPercent100ths attribute " +
                "divided by 100.",
            xref: { document: "cluster", section: "5.3.5.11" }
        },

        {
            tag: "attribute", name: "CurrentPositionTiltPercentage", id: 0x9, type: "percent", access: "R V",
            conformance: "[TL & PA_TL]", constraint: "0 to 100", default: null, quality: "X N S P",
            details: "The CurrentPositionTiltPercentage attribute identifies the actual position as a percentage from 0% " +
                "to 100% with 1% default step. This attribute is equal to CurrentPositionTiltPercent100ths attribute " +
                "divided by 100.",
            xref: { document: "cluster", section: "5.3.5.12" }
        },

        {
            tag: "attribute", name: "OperationalStatus", id: 0xa, type: "map8", access: "R V", conformance: "M",
            default: 0, quality: "P",
            details: "The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type " +
                "of devices. See below for details about the meaning of individual bits.",
            xref: { document: "cluster", section: "5.3.5.15" },

            children: [
                {
                    tag: "datatype", name: "Global", type: "MovementStatus", constraint: "0 to 2",
                    description: "Movement status of the cover"
                },
                {
                    tag: "datatype", name: "Lift", type: "MovementStatus", constraint: "2 to 4",
                    description: "Movement status of the cover's lift function"
                },
                {
                    tag: "datatype", name: "Tilt", type: "MovementStatus", constraint: "4 to 6",
                    description: "Movement status of the cover's tilt function"
                }
            ]
        },

        {
            tag: "attribute", name: "TargetPositionLiftPercent100ths", id: 0xb, type: "percent100ths",
            access: "R V", conformance: "LF & PA_LF", constraint: "0 to 10000", default: null, quality: "X S P",
            details: "The TargetPositionLiftPercent100ths attribute identifies the position where the Window Covering " +
                "Lift will go or is moving to as a percentage.",
            xref: { document: "cluster", section: "5.3.5.13" }
        },

        {
            tag: "attribute", name: "TargetPositionTiltPercent100ths", id: 0xc, type: "percent100ths",
            access: "R V", conformance: "TL & PA_TL", constraint: "0 to 10000", default: null, quality: "X S P",
            details: "The TargetPositionTiltPercent100ths attribute identifies the position where the Window Covering " +
                "Tilt will go or is moving to as a percentage.",
            xref: { document: "cluster", section: "5.3.5.14" }
        },

        {
            tag: "attribute", name: "EndProductType", id: 0xd, type: "enum8", access: "R V", conformance: "M",
            constraint: "desc", default: 0, quality: "F",
            details: "The EndProductType attribute identifies the product type in complement of the main category " +
                "indicated by the Type attribute. The window covering shall set this value to one of the values in " +
                "the table below.",
            xref: { document: "cluster", section: "5.3.5.16" },

            children: [
                { tag: "datatype", name: "RollerShade", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "RomanShade", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "BalloonShade", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "WovenWood", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "PleatedShade", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "CellularShade", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "LayeredShade", id: 0x6, conformance: "M" },
                { tag: "datatype", name: "LayeredShade2D", id: 0x7, conformance: "M" },
                { tag: "datatype", name: "SheerShade", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "TiltOnlyInteriorBlind", id: 0x9, conformance: "M" },
                { tag: "datatype", name: "InteriorBlind", id: 0xa, conformance: "M" },
                { tag: "datatype", name: "VerticalBlindStripCurtain", id: 0xb, conformance: "M" },
                { tag: "datatype", name: "InteriorVenetianBlind", id: 0xc, conformance: "M" },
                { tag: "datatype", name: "ExteriorVenetianBlind", id: 0xd, conformance: "M" },
                { tag: "datatype", name: "LateralLeftCurtain", id: 0xe, conformance: "M" },
                { tag: "datatype", name: "LateralRightCurtain", id: 0xf, conformance: "M" },
                { tag: "datatype", name: "CentralCurtain", id: 0x10, conformance: "M" },
                { tag: "datatype", name: "RollerShutter", id: 0x11, conformance: "M" },
                { tag: "datatype", name: "ExteriorVerticalScreen", id: 0x12, conformance: "M" },
                { tag: "datatype", name: "AwningTerrace", id: 0x13, conformance: "M" },
                { tag: "datatype", name: "AwningVerticalScreen", id: 0x14, conformance: "M" },
                { tag: "datatype", name: "TiltOnlyPergola", id: 0x15, conformance: "M" },
                { tag: "datatype", name: "SwingingShutter", id: 0x16, conformance: "M" },
                { tag: "datatype", name: "SlidingShutter", id: 0x17, conformance: "M" },
                { tag: "datatype", name: "Unknown", id: 0xff, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "CurrentPositionLiftPercent100ths", id: 0xe, type: "percent100ths",
            access: "R V", conformance: "LF & PA_LF", constraint: "0 to 10000", default: null, quality: "X N P",
            details: "The CurrentPositionLiftPercent100ths attribute identifies the actual position as a percentage with " +
                "a minimal step of 0.01%. E.g Max 10000 equals 100.00%.",
            xref: { document: "cluster", section: "5.3.5.9" }
        },

        {
            tag: "attribute", name: "CurrentPositionTiltPercent100ths", id: 0xf, type: "percent100ths",
            access: "R V", conformance: "TL & PA_TL", constraint: "0 to 10000", default: null, quality: "X N P",
            details: "The CurrentPositionTiltPercent100ths attribute identifies the actual position as a percentage with " +
                "a minimal step of 0.01%. E.g Max 10000 equals 100.00%.",
            xref: { document: "cluster", section: "5.3.5.10" }
        },

        {
            tag: "attribute", name: "InstalledOpenLimitLift", id: 0x10, type: "uint16", access: "R V",
            conformance: "LF & PA_LF & ABS", constraint: "0 to 65534", default: 0, quality: "N",
            details: "The InstalledOpenLimitLift attribute identifies the Open Limit for Lifting the Window Covering " +
                "whether position (in centimeters) is encoded or timed.",
            xref: { document: "cluster", section: "5.3.5.17" }
        },

        {
            tag: "attribute", name: "InstalledClosedLimitLift", id: 0x11, type: "uint16", access: "R V",
            conformance: "LF & PA_LF & ABS", constraint: "0 to 65534", default: 65534, quality: "N",
            details: "The InstalledClosedLimitLift attribute identifies the Closed Limit for Lifting the Window Covering " +
                "whether position (in centimeters) is encoded or timed.",
            xref: { document: "cluster", section: "5.3.5.18" }
        },

        {
            tag: "attribute", name: "InstalledOpenLimitTilt", id: 0x12, type: "uint16", access: "R V",
            conformance: "TL & PA_TL & ABS", constraint: "0 to 65534", default: 0, quality: "N",
            details: "The InstalledOpenLimitTilt attribute identifies the Open Limit for Tilting the Window Covering " +
                "whether position (in tenth of a degree) is encoded or timed.",
            xref: { document: "cluster", section: "5.3.5.19" }
        },

        {
            tag: "attribute", name: "InstalledClosedLimitTilt", id: 0x13, type: "uint16", access: "R V",
            conformance: "TL & PA_TL & ABS", constraint: "0 to 65534", default: 65534, quality: "N",
            details: "The InstalledClosedLimitTilt attribute identifies the Closed Limit for Tilting the Window Covering " +
                "whether position (in tenth of a degree) is encoded or timed.",
            xref: { document: "cluster", section: "5.3.5.20" }
        },

        {
            tag: "attribute", name: "VelocityLift", id: 0x14, conformance: "D",
            xref: { document: "cluster", section: "5.3.5" }
        },
        {
            tag: "attribute", name: "AccelerationTimeLift", id: 0x15, conformance: "D",
            xref: { document: "cluster", section: "5.3.5" }
        },
        {
            tag: "attribute", name: "DecelerationTimeLift", id: 0x16, conformance: "D",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", name: "Mode", id: 0x17, type: "map8", access: "RW VM", conformance: "M",
            default: 0, quality: "N",

            details: "The Mode attribute allows configuration of the Window Covering, such as: reversing the motor " +
                "direction, placing the Window Covering into calibration mode, placing the motor into maintenance " +
                "mode, disabling the network, and disabling status LEDs. See below for details." +
                "\n" +
                "In the case a device does not support or implement a specific mode, e.g. the device has a specific " +
                "installation method and reversal is not relevant or the device does not include a maintenance mode, " +
                "any write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits " +
                "set, must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned.",

            xref: { document: "cluster", section: "5.3.5.21" },

            children: [
                {
                    tag: "datatype", name: "MotorDirectionReversed", constraint: "0",
                    description: "Disables (0) or Enables (1) Lift reversal"
                },
                {
                    tag: "datatype", name: "CalibrationMode", constraint: "1",
                    description: "Disabled (0) or Enabled (1) placing the Window Covering into calibration Mode where limits are either setup using tools or learned by the Window Covering by doing self-calibration.If in calibration mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, could be accepted and result in a self-calibration being initiated before the command is executed. In case the Window Covering does not have the ability or is not able to perform a self-calibration, the command SHOULD be ignored and a FAILURE status SHOULD be returned.In a write interaction, setting this bit to 0, while the device is in calibration mode, is not allowed and SHALL generate a FAILURE error status. In order to leave calibration mode, the device must perform its calibration routine, either as a self- calibration or assisted by external tool(s), depending on the device/manufacturer implementation.A manufacturer might choose to set the operational bit to its not operational value, if applicable during calibration mode"
                },
                {
                    tag: "datatype", name: "MaintenanceMode", constraint: "2",
                    description: "Disables (0) or Enables (1) placing the Window Covering into Maintenance Mode where it cannot be moved over the network or by a switch connected to a Local Switch Input.While in maintenance mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, must be ignored and respond with a BUSY status. Additionally, the operational bit of the ConfigStatus attribute should be set to its not operational value."
                },
                {
                    tag: "datatype", name: "LedFeedback", constraint: "3",
                    description: "Disables (0) or Enables (1) the display of any feedback LEDs resident especially on the packaging of an endpoint where they may cause distraction to the occupant."
                }
            ]
        },

        {
            tag: "attribute", name: "IntermediateSetpointsLift", id: 0x18, conformance: "D",
            xref: { document: "cluster", section: "5.3.5" }
        },
        {
            tag: "attribute", name: "IntermediateSetpointsTilt", id: 0x19, conformance: "D",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", name: "SafetyStatus", id: 0x1a, type: "map16", access: "R V", conformance: "O",
            constraint: "desc", default: 0, quality: "P",
            details: "The SafetyStatus attribute reflects the state of the safety sensors and the common issues " +
                "preventing movements. By default for nominal operation all flags are cleared (0). A device might " +
                "support none, one or several bit flags from this attribute (all optional). See below for details " +
                "about the meaning of individual bits.",
            xref: { document: "cluster", section: "5.3.5.22" },

            children: [
                {
                    tag: "datatype", name: "RemoteLockout", constraint: "0",
                    description: "Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range."
                },
                {
                    tag: "datatype", name: "TamperDetection", constraint: "1",
                    description: "Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without its actuator(s)."
                },
                {
                    tag: "datatype", name: "FailedCommunication", constraint: "2",
                    description: "Communication failure to sensors or other safety equipment."
                },
                {
                    tag: "datatype", name: "PositionFailure", constraint: "3",
                    description: "Device has failed to reach the desired position. e.g. with Position Aware device, time expired before TargetPosition is reached."
                },
                {
                    tag: "datatype", name: "ThermalProtection", constraint: "4",
                    description: "Motor(s) and/or electric circuit thermal protection activated."
                },
                {
                    tag: "datatype", name: "ObstacleDetected", constraint: "5",
                    description: "An obstacle is preventing actuator movement."
                },
                {
                    tag: "datatype", name: "Power", constraint: "6",
                    description: "Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power might not be fully available at the moment."
                },
                {
                    tag: "datatype", name: "StopInput", constraint: "7",
                    description: "Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335)."
                },
                {
                    tag: "datatype", name: "MotorJammed", constraint: "8",
                    description: "Mechanical problem related to the motor(s) detected."
                },
                {
                    tag: "datatype", name: "HardwareFailure", constraint: "9",
                    description: "PCB, fuse and other electrics problems."
                },
                {
                    tag: "datatype", name: "ManualOperation", constraint: "10",
                    description: "Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled)."
                },
                { tag: "datatype", name: "Protection", constraint: "11", description: "Protection is activated." }
            ]
        },

        {
            tag: "command", name: "UpOrOpen", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",

            details: "Upon receipt of this command, the Window Covering will adjust its position so the physical " +
                "lift/slide and tilt is at the maximum open/up position. This will happen as fast as possible. The " +
                "server attributes shall be updated as follows:" +
                "\n" +
                "if Position Aware feature is supported:" +
                "\n" +
                "  • TargetPositionLiftPercent100ths attribute shall be set to 0.00%." +
                "\n" +
                "  • TargetPositionTiltPercent100ths attribute shall be set to 0.00%." +
                "\n" +
                "The server positioning attributes will follow the movements, once the movement has successfully " +
                "finished, the server attributes shall be updated as follows:" +
                "\n" +
                "if Position Aware feature is supported:" +
                "\n" +
                "  • CurrentPositionLiftPercent100ths attribute shall be 0.00%." +
                "\n" +
                "  • CurrentPositionLiftPercentage attribute shall be 0%." +
                "\n" +
                "  • CurrentPositionTiltPercent100ths attribute shall be 0.00%." +
                "\n" +
                "  • CurrentPositionTiltPercentage attribute shall be 0%. if Absolute Position feature is supported:" +
                "\n" +
                "  • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute." +
                "\n" +
                "  • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute.",

            xref: { document: "cluster", section: "5.3.6.1" }
        },

        {
            tag: "command", name: "DownOrClose", id: 0x1, access: "O", conformance: "M", direction: "request",
            response: "status",

            details: "Upon receipt of this command, the Window Covering will adjust its position so the physical " +
                "lift/slide and tilt is at the maximum closed/down position. This will happen as fast as possible. " +
                "The server attributes supported shall be updated as follows:" +
                "\n" +
                "if Position Aware feature is supported:" +
                "\n" +
                "  • TargetPositionLiftPercent100ths attribute shall be set to 100.00%." +
                "\n" +
                "  • TargetPositionTiltPercent100ths attribute shall be set to 100.00%." +
                "\n" +
                "The server positioning attributes will follow the movements, once the movement has successfully " +
                "finished, the server attributes shall be updated as follows:" +
                "\n" +
                "if Position Aware feature is supported:" +
                "\n" +
                "  • CurrentPositionLiftPercent100ths attribute shall be 100.00%." +
                "\n" +
                "  • CurrentPositionLiftPercentage attribute shall be 100%." +
                "\n" +
                "  • CurrentPositionTiltPercent100ths attribute shall be 100.00%." +
                "\n" +
                "  • CurrentPositionTiltPercentage attribute shall be 100%. if Absolute Position feature is " +
                "    supported:" +
                "\n" +
                "  • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute." +
                "\n" +
                "  • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute.",

            xref: { document: "cluster", section: "5.3.6.2" }
        },

        {
            tag: "command", name: "StopMotion", id: 0x2, access: "O", conformance: "M", direction: "request",
            response: "status",

            details: "Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and " +
                "lift/slide that is currently occurring. The server attributes supported shall be updated as follows:" +
                "\n" +
                "  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths " +
                "    attribute value." +
                "\n" +
                "  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths " +
                "    attribute value.",

            xref: { document: "cluster", section: "5.3.6.3" }
        },

        {
            tag: "command", name: "GoToLiftValue", id: 0x4, access: "O", conformance: "[LF & ABS]",
            direction: "request", response: "status",

            details: "Upon receipt of this command, the Window Covering will adjust the window so the physical lift/slide " +
                "is at the value specified in the payload of this command as long as that value is not larger than " +
                "InstalledOpenLimitLift attribute and not smaller than InstalledClosedLimitLift attribute. Once the " +
                "command is received the TargetPositionLiftPercent100ths attribute will update its value " +
                "accordingly. If the value is out of bounds a response containing the status of CONSTRAINT_ERROR " +
                "will be returned.",

            xref: { document: "cluster", section: "5.3.6.4" },
            children: [
                { tag: "datatype", name: "LiftValue", id: 0x0, type: "uint16", conformance: "M", constraint: "desc" }
            ]
        },

        {
            tag: "command", name: "GoToLiftPercentage", id: 0x5, access: "O", conformance: "LF & PA_LF, [LF]",
            direction: "request", response: "status",

            details: "Upon receipt of this command, the server will adjust the window covering to the lift/slide " +
                "percentage specified in the payload of this command." +
                "\n" +
                "If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute " +
                "shall be set to LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute " +
                "shall be set to LiftPercentageValue * 100." +
                "\n" +
                "If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to " +
                "to LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not " +
                "LiftPercent100thsValue) has a value to set the target position." +
                "\n" +
                "If the server does not support the Position Aware feature, then a zero percentage shall be treated " +
                "as a UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the " +
                "device is only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND " +
                "status SHOULD be returned.",

            xref: { document: "cluster", section: "5.3.6.5" },

            children: [
                {
                    tag: "datatype", name: "LiftPercentageValue", id: 0x0, type: "percent", conformance: "O.a",
                    constraint: "desc"
                },
                {
                    tag: "datatype", name: "LiftPercent100thsValue", id: 0x1, type: "percent100ths", conformance: "O.a",
                    constraint: "desc"
                }
            ]
        },

        {
            tag: "command", name: "GoToTiltValue", id: 0x7, access: "O", conformance: "[TL & ABS]",
            direction: "request", response: "status",

            details: "Upon receipt of this command, the Window Covering will adjust the window so the physical tilt is at " +
                "the tilt value specified in the payload of this command as long as that value is not larger than " +
                "InstalledOpenLimitTilt attribute and not smaller than InstalledClosedLimitTilt attribute. Once the " +
                "command is received the TargetPositionTiltPercent100ths attribute will update its value " +
                "accordingly. If the tilt value is out of bounds a response containing the status of " +
                "CONSTRAINT_ERROR will be returned.",

            xref: { document: "cluster", section: "5.3.6.6" },
            children: [
                { tag: "datatype", name: "TiltValue", id: 0x0, type: "uint16", conformance: "M", constraint: "desc" }
            ]
        },

        {
            tag: "command", name: "GoToTiltPercentage", id: 0x8, access: "O", conformance: "TL & PA_TL, [TL]",
            direction: "request", response: "status",

            details: "Upon receipt of this command, the server will adjust the window covering to the tilt percentage " +
                "specified in the payload of this command." +
                "\n" +
                "If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute" +
                "\n" +
                "shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute " +
                "shall be set to TiltPercentageValue * 100." +
                "\n" +
                "If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to " +
                "to TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not " +
                "TiltPercent100thsValue) has a value to set the target position." +
                "\n" +
                "If the server does not support the Position Aware feature, then a zero percentage shall be treated " +
                "as a UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the " +
                "device is only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND " +
                "status SHOULD be returned.",

            xref: { document: "cluster", section: "5.3.6.7" },

            children: [
                {
                    tag: "datatype", name: "TiltPercentageValue", id: 0x0, type: "percent", conformance: "O.a",
                    constraint: "desc"
                },
                {
                    tag: "datatype", name: "TiltPercent100thsValue", id: 0x1, type: "percent100ths", conformance: "O.a",
                    constraint: "desc"
                }
            ]
        },

        {
            tag: "datatype", name: "ConfigStatus", type: "map8", conformance: "M",

            children: [
                { tag: "datatype", name: "Operational", constraint: "0" },
                { tag: "datatype", name: "OnlineReserved", constraint: "1" },
                { tag: "datatype", name: "LiftMovementReversed", constraint: "2" },
                { tag: "datatype", name: "LiftPositionAware", constraint: "3" },
                { tag: "datatype", name: "TiltPositionAware", constraint: "4" },
                { tag: "datatype", name: "LiftEncoderControlled", constraint: "5" },
                { tag: "datatype", name: "TiltEncoderControlled", constraint: "6" }
            ]
        },

        {
            tag: "datatype", name: "OperationalStatus", type: "map8", conformance: "M",
            children: [
                { tag: "datatype", name: "Global", constraint: "0 to 2" },
                { tag: "datatype", name: "Lift", constraint: "2 to 4" },
                { tag: "datatype", name: "Tilt", constraint: "4 to 6" }
            ]
        },

        {
            tag: "datatype", name: "Mode", type: "map8", conformance: "M",

            children: [
                { tag: "datatype", name: "MotorDirectionReversed", constraint: "0" },
                { tag: "datatype", name: "CalibrationMode", constraint: "1" },
                { tag: "datatype", name: "MaintenanceMode", constraint: "2" },
                { tag: "datatype", name: "LedFeedback", constraint: "3" }
            ]
        },

        {
            tag: "datatype", name: "MovementStatus", type: "enum8",
            details: "Values for OperationalStatus attribute fields.",
            children: [
                { tag: "datatype", name: "Stopped", id: 0x0, details: "Covering is not moving" },
                { tag: "datatype", name: "Opening", id: 0x1, details: "Covering is moving from closed to open" },
                { tag: "datatype", name: "Closing", id: 0x2, details: "Covering is moving from open to closed" }
            ]
        }
    ]
});
