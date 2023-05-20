/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LevelControlCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type MoveToLevelRequest = TypeFromSchema<typeof LevelControlCluster.commands.moveToLevel.requestSchema>;
type MoveRequest = TypeFromSchema<typeof LevelControlCluster.commands.move.requestSchema>;
type StepRequest = TypeFromSchema<typeof LevelControlCluster.commands.step.requestSchema>;
type StopRequest = TypeFromSchema<typeof LevelControlCluster.commands.stop.requestSchema>;
type MoveToLevelWithOnOffRequest = TypeFromSchema<typeof LevelControlCluster.commands.moveToLevelWithOnOff.requestSchema>;
type MoveWithOnOffRequest = TypeFromSchema<typeof LevelControlCluster.commands.moveWithOnOff.requestSchema>;
type StepWithOnOffRequest = TypeFromSchema<typeof LevelControlCluster.commands.stepWithOnOff.requestSchema>;
type StopWithOnOffRequest = TypeFromSchema<typeof LevelControlCluster.commands.stopWithOnOff.requestSchema>;

export module LevelControl {
    export type State = {
        currentLevel: number | undefined;
        minLevel?: number;
        maxLevel?: number;
        onOffTransitionTime?: number;
        onLevel: number | undefined;
        onTransitionTime?: number | undefined;
        offTransitionTime?: number | undefined;
        defaultMoveRate?: number | undefined;
        options: number;
        remainingTime?: number;
        startUpCurrentLevel?: number | undefined;
    }

    export interface Client {
        sendMoveToLevel(request: MoveToLevelRequest): Promise<void>;
        sendMove(request: MoveRequest): Promise<void>;
        sendStep(request: StepRequest): Promise<void>;
        sendStop(request: StopRequest): Promise<void>;
        sendMoveToLevelWithOnOff(request: MoveToLevelWithOnOffRequest): Promise<void>;
        sendMoveWithOnOff(request: MoveWithOnOffRequest): Promise<void>;
        sendStepWithOnOff(request: StepWithOnOffRequest): Promise<void>;
        sendStopWithOnOff(request: StopWithOnOffRequest): Promise<void>;
    }

    export interface Server {
        onMoveToLevel(request: MoveToLevelRequest): Promise<void>;
        onMove(request: MoveRequest): Promise<void>;
        onStep(request: StepRequest): Promise<void>;
        onStop(request: StopRequest): Promise<void>;
        onMoveToLevelWithOnOff(request: MoveToLevelWithOnOffRequest): Promise<void>;
        onMoveWithOnOff(request: MoveWithOnOffRequest): Promise<void>;
        onStepWithOnOff(request: StepWithOnOffRequest): Promise<void>;
        onStopWithOnOff(request: StopWithOnOffRequest): Promise<void>;
    }
}

export const LevelControl: ClusterInterface<LevelControl.State, LevelControl.Client, LevelControl.Server> = {
    definition: LevelControlCluster
}
