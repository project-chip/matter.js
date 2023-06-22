/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvEnum } from "../tlv/TlvNumber.js";
import { ClusterExtend, Command, FixedAttribute, OptionalCommand, TlvNoResponse } from "./Cluster.js";
import { ClusterServerObjForCluster } from "./server/ClusterServer.js";
import {
    TlvGoToLiftPercentRequest, TlvGoToLiftValueRequest, TlvGoToTiltPercentRequest, WindowCoveringClusterSchema,
    WindowCoveringType
} from "./schema/WindowCovering.js";

// For now use the Schema cluster as basis for the cluster object temporary
export const WindowCoveringCluster = WindowCoveringClusterSchema;

////////////////////////////////// MIGHT GO AWAY


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
        gotoLiftPercent: Command(0x05, TlvGoToLiftPercentRequest, 5, TlvNoResponse),
    },
    attributes: {
        type: FixedAttribute(0x0000, TlvEnum<WindowCoveringType>(), {
            default: WindowCoveringType.RollerShade,
            persistent: true,
        }),
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
        gotoTiltPercent: Command(0x08, TlvGoToLiftValueRequest, 8, TlvNoResponse),
    },
    attributes: {
        type: FixedAttribute(0x0000, TlvEnum<WindowCoveringType>(), {
            default: WindowCoveringType.TiltBlindTiltOnly,
            persistent: true,
        }),
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
                TlvGoToLiftPercentRequest,
                5,
                TlvNoResponse
            ),
            gotoTiltPercent: OptionalCommand(
                0x08,
                TlvGoToTiltPercentRequest,
                8,
                TlvNoResponse
            ),
        },
        attributes: {
            type: FixedAttribute(0x0000, TlvEnum<WindowCoveringType>(), {
                default: WindowCoveringType.TiltBlindLiftAndTilt,
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
