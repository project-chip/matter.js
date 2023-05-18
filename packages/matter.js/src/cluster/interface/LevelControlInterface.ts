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

export interface Common {
    readonly currentLevel: number | undefined;
    readonly minLevel?: number;
    readonly maxLevel?: number;
    readonly onOffTransitionTime?: number;
    readonly onLevel: number | undefined;
    readonly onTransitionTime?: number | undefined;
    readonly offTransitionTime?: number | undefined;
    readonly defaultMoveRate?: number | undefined;
    readonly options: number;
    readonly remainingTime?: number;
    readonly startUpCurrentLevel?: number | undefined;

    invokeMoveToLevel(request: MoveToLevelRequest): Promise<void>;
    invokeMove(request: MoveRequest): Promise<void>;
    invokeStep(request: StepRequest): Promise<void>;
    invokeStop(request: StopRequest): Promise<void>;
    invokeMoveToLevelWithOnOff(request: MoveToLevelWithOnOffRequest): Promise<void>;
    invokeMoveWithOnOff(request: MoveWithOnOffRequest): Promise<void>;
    invokeStepWithOnOff(request: StepWithOnOffRequest): Promise<void>;
    invokeStopWithOnOff(request: StopWithOnOffRequest): Promise<void>;
}

export const LevelControl: ClusterInterface<Common, Common> = {
    definition: LevelControlCluster
}
