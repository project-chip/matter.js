/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { WindowCovering, WindowCoveringCluster } from "../../../src/cluster/definitions/WindowCoveringCluster.js";
import { AttributeId } from "../../../src/datatype/AttributeId.js";
import { CommandId } from "../../../src/datatype/CommandId.js";
import { ClusterServer } from "../../../src/protocol/interaction/InteractionServer.js";
import { BitFlags } from "../../../src/schema/BitmapSchema.js";

function wrapIds<T>(factory: new (id: number) => T, ...ids: number[]) {
    return ids.map(id => new factory(id));
}

describe("WindowCoveringCluster", () => {
    const WindowCovering_LF_PALF = WindowCoveringCluster.with("Lift", "PositionAwareLift");

    it("correctly initializes elements for LF & PA_LF", () => {
        const NONE = [false, false, false, false];
        const OPTIONAL = [true, false, false, false];
        const WRITABLE = [false, true, false, false];
        const FIXED = [false, false, true, false];

        expect(
            Object.fromEntries(Object.entries(WindowCovering_LF_PALF.attributes).map(
                ([k, { optional, writable, fixed, fabricScoped }]) => [k, [optional, writable, fixed, fabricScoped]]
            ))
        ).toEqual({ // TODO - make strict after updating web tester
            acceptedCommandList: NONE,
            attributeList: NONE,
            clusterRevision: NONE,
            configStatus: NONE,
            currentPositionLiftPercent100ths: NONE,
            currentPositionLiftPercentage: OPTIONAL,
            endProductType: FIXED,
            eventList: NONE,
            featureMap: NONE,
            generatedCommandList: NONE,
            mode: WRITABLE,
            numberOfActuationsLift: OPTIONAL,
            operationalStatus: NONE,
            safetyStatus: OPTIONAL,
            targetPositionLiftPercent100ths: NONE,
            type: FIXED
        });

        expect(
            Object.fromEntries(Object.entries(WindowCovering_LF_PALF.commands).map(
                ([k, { optional }]) => [k, [optional, false, false, false]]
            ))
        ).toEqual({ // TODO - make strict after updating web tester
            downOrClose: NONE,
            goToLiftPercentage: NONE,
            stopMotion: NONE,
            upOrOpen: NONE
        })
    });

    it("correctly configures ClusterServer for LF & PA_LF", () => {
        const server = ClusterServer(
            WindowCovering_LF_PALF,
            {
                type: WindowCovering.WindowCoveringType.ProjectorScreen,

                // Hrm, should this accept a partial bitmap?
                configStatus: BitFlags(
                    WindowCovering.ConfigStatus,
                    "Operational",
                    "LiftPositionAware",
                    "OnlineReserved"
                ),

                currentPositionLiftPercent100ths: 5000,
                targetPositionLiftPercent100ths: 5000,
                endProductType: WindowCovering.EndProductType.PleatedShade,
                mode: BitFlags(
                    WindowCovering.Mode
                ),
                operationalStatus: {
                    global: WindowCovering.MovementStatus.Stopped,
                    lift: WindowCovering.MovementStatus.Stopped,
                    tilt: WindowCovering.MovementStatus.Stopped
                },
                safetyStatus: BitFlags(
                    WindowCovering.SafetyStatus,
                    "ObstacleDetected"
                )
            },
            {
                // trues for eslint
                downOrClose: () => { true },
                stopMotion: () => { true },
                upOrOpen: () => { true }
            }
        );

        const attrValues = Object.fromEntries(
            Object.entries(server.attributes)
                .map(([k, v]) => [k, v.getLocal()])
        );

        expect(attrValues).toEqual({ // TODO - make strict after updating web tester
            acceptedCommandList: wrapIds(CommandId,
                0, 1, 2
            ),
            attributeList: wrapIds(AttributeId,
                0, 7, 10, 13, 23, 26, 65533, 65532, 65531, 65530, 65529, 65528, 11, 14
            ),
            clusterRevision: 5,
            configStatus: {
                operational: true,
                onlineReserved: true,
                liftMovementReversed: false,
                liftPositionAware: true,
                tiltPositionAware: false,
                liftEncoderControlled: false,
                tiltEncoderControlled: false
            },
            currentPositionLiftPercent100ths: 5000,
            endProductType: 4,
            eventList: [],
            featureMap: {
                lift: true,
                tilt: false,
                positionAwareLift: true,
                positionAwareTilt: false,
                absolutePosition: false
            },
            generatedCommandList: [],
            mode: {
                motorDirectionReversed: false,
                calibrationMode: false,
                maintenanceMode: false,
                ledFeedback: false
            },
            operationalStatus: {
                global: 0,
                lift: 0,
                tilt: 0
            },
            safetyStatus: {
                failedCommunication: false,
                hardwareFailure: false,
                manualOperation: false,
                motorJammed: false,
                obstacleDetected: true,
                positionFailure: false,
                power: false,
                protection: false,
                remoteLockout: false,
                stopInput: false,
                tamperDetection: false,
                thermalProtection: false
            },
            targetPositionLiftPercent100ths: 5000,
            type: 9
        })
    })
})
