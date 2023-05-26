/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvEnum, TlvUInt16 } from "../tlv/TlvNumber.js";
import { TlvObject, TlvOptionalField } from "../tlv/TlvObject.js";
import { Attribute, ClusterExtend, Command, OptionalCommand, TlvNoResponse } from "./Cluster.js";
import { ClusterServerObjForCluster } from "./server/ClusterServer.js";
import { WindowCoveringClusterSchema } from "./schema/WindowCoveringCluster.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";

/** alias for percentages expressed as 0 to 100.00 with 2 decimals */
const WCPercent100ths = TlvUInt16.bound({ max: 10000 });

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

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.5.15 */
export enum WindowCoveringOperationalStatus {
    Stopped = 0,
    Opening = 1,
    Closing = 2,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.6.5
 - If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute SHALL be set to
   LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute SHALL be set to
   LiftPercentageValue * 100.
 - If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue SHALL be set to
   LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not LiftPercent100thsValue)
   has a value to set the target position.
 - If the server does not support the Position Aware feature, then a zero percentage SHALL be treated as a
   UpOrOpen command and a non-zero percentage SHALL be treated as an DownOrClose command.
   If the device is only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status
   SHOULD be returned.
 */
export const GotoLiftPercentParams = TlvObject({
    /** Legacy Matter - still used by HomePod 16.3.2*/
    percent: TlvOptionalField(0, WCPercent100ths), // TODO - clarify if this is correct and needs to be handled in WC Server
    /** PREFERRED  */
    percent100ths: TlvOptionalField(1, WCPercent100ths),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 5.3.6.7 */
const GotoTiltPercentParams = GotoLiftPercentParams;

// For now use the Schema cluster as basis for the cluster object temporary
export const WindowCoveringCluster = WindowCoveringClusterSchema;

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
        gotoLiftPercent: Command(0x05, GotoLiftPercentParams, 5, TlvNoResponse),
    },
    attributes: {
        type: Attribute(0x0000, TlvEnum<WindowCoveringType>(), {
            default: WindowCoveringType.RollerShade,
            persistent: true,
        }),
        ...statusAttribute,
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
        gotoTiltPercent: Command(0x08, GotoTiltPercentParams, 8, TlvNoResponse),
    },
    attributes: {
        type: Attribute(0x0000, TlvEnum<WindowCoveringType>(), {
            default: WindowCoveringType.TiltOnlyBlind,
            persistent: true,
        }),
        ...statusAttribute,
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
                TlvNoResponse
            ),
            gotoTiltPercent: OptionalCommand(
                0x08,
                GotoTiltPercentParams,
                8,
                TlvNoResponse
            ),
        },
        attributes: {
            ...statusAttribute,
            type: Attribute(0x0000, TlvEnum<WindowCoveringType>(), {
                default: WindowCoveringType.LiftAndTiltBlind,
                persistent: true,
            }),
        },
    }
);

/** convenience type */
export type WindowCoveringClusterObj = ClusterServerObjForCluster<typeof WindowCoveringCluster>;
export type WCPositionAwareLiftClusterObj = ClusterServerObjForCluster<typeof WCPositionAwareLiftCluster>;
export type WCPositionAwareTiltClusterObj = ClusterServerObjForCluster<typeof WCPositionAwareTiltCluster>;
export type WCPositionAwareLiftAndTiltClusterObj = ClusterServerObjForCluster<typeof WCPositionAwareLiftAndTiltCluster>;
