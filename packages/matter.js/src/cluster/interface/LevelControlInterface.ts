/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { LevelControlCluster } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type MoveToLevelRequest = TypeFromSchema<typeof LevelControlCluster.commands.moveToLevel.requestSchema>;

type MoveRequest = TypeFromSchema<typeof LevelControlCluster.commands.move.requestSchema>;

type StepRequest = TypeFromSchema<typeof LevelControlCluster.commands.step.requestSchema>;

type StopRequest = TypeFromSchema<typeof LevelControlCluster.commands.stop.requestSchema>;

type MoveToLevelWithOnOffRequest = TypeFromSchema<typeof LevelControlCluster.commands.moveToLevelWithOnOff.requestSchema>;

type MoveWithOnOffRequest = TypeFromSchema<typeof LevelControlCluster.commands.moveWithOnOff.requestSchema>;

type StepWithOnOffRequest = TypeFromSchema<typeof LevelControlCluster.commands.stepWithOnOff.requestSchema>;

type StopWithOnOffRequest = TypeFromSchema<typeof LevelControlCluster.commands.stopWithOnOff.requestSchema>;

export interface LevelControlInterface {
    currentLevel: number | undefined;
    addCurrentLevelListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeCurrentLevelListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    minLevel?: number;
    addMinLevelListener(listener: (newValue: number, oldValue: number) => void): void;
    removeMinLevelListener(listener: (newValue: number, oldValue: number) => void): void;

    maxLevel?: number;
    addMaxLevelListener(listener: (newValue: number, oldValue: number) => void): void;
    removeMaxLevelListener(listener: (newValue: number, oldValue: number) => void): void;

    onOffTransitionTime?: number;
    setOnOffTransitionTime(value: number): Promise<void>;
    addOnOffTransitionTimeListener(listener: (newValue: number, oldValue: number) => void): void;
    removeOnOffTransitionTimeListener(listener: (newValue: number, oldValue: number) => void): void;

    onLevel: number | undefined;
    setOnLevel(value: number | undefined): Promise<void>;
    addOnLevelListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeOnLevelListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    onTransitionTime?: number | undefined;
    setOnTransitionTime(value: number | undefined): Promise<void>;
    addOnTransitionTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeOnTransitionTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    offTransitionTime?: number | undefined;
    setOffTransitionTime(value: number | undefined): Promise<void>;
    addOffTransitionTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeOffTransitionTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    defaultMoveRate?: number | undefined;
    setDefaultMoveRate(value: number | undefined): Promise<void>;
    addDefaultMoveRateListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeDefaultMoveRateListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    options: number;
    setOptions(value: number): Promise<void>;
    addOptionsListener(listener: (newValue: number, oldValue: number) => void): void;
    removeOptionsListener(listener: (newValue: number, oldValue: number) => void): void;

    remainingTime?: number;
    addRemainingTimeListener(listener: (newValue: number, oldValue: number) => void): void;
    removeRemainingTimeListener(listener: (newValue: number, oldValue: number) => void): void;

    startUpCurrentLevel?: number | undefined;
    setStartUpCurrentLevel(value: number | undefined): Promise<void>;
    addStartUpCurrentLevelListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeStartUpCurrentLevelListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    sendMoveToLevel(request: MoveToLevelRequest): Promise<void>;
    sendMove(request: MoveRequest): Promise<void>;
    sendStep(request: StepRequest): Promise<void>;
    sendStop(request: StopRequest): Promise<void>;
    sendMoveToLevelWithOnOff(request: MoveToLevelWithOnOffRequest): Promise<void>;
    sendMoveWithOnOff(request: MoveWithOnOffRequest): Promise<void>;
    sendStepWithOnOff(request: StepWithOnOffRequest): Promise<void>;
    sendStopWithOnOff(request: StopWithOnOffRequest): Promise<void>;
}

export const LevelControlClientImpl = ClientIfaceImpl<LevelControlInterface>(LevelControlCluster);
export const LevelControlServerImpl = ServerIfaceImpl<LevelControlInterface>(LevelControlCluster);
