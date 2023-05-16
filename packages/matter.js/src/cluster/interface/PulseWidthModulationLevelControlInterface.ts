/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PulseWidthModulationLevelControlCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type MoveToLevelRequest = TypeFromSchema<typeof PulseWidthModulationLevelControlCluster.commands.moveToLevel.requestSchema>;

type MoveRequest = TypeFromSchema<typeof PulseWidthModulationLevelControlCluster.commands.move.requestSchema>;

type StepRequest = TypeFromSchema<typeof PulseWidthModulationLevelControlCluster.commands.step.requestSchema>;

type StopRequest = TypeFromSchema<typeof PulseWidthModulationLevelControlCluster.commands.stop.requestSchema>;

type MoveToLevelWithOnOffRequest = TypeFromSchema<typeof PulseWidthModulationLevelControlCluster.commands.moveToLevelWithOnOff.requestSchema>;

type MoveWithOnOffRequest = TypeFromSchema<typeof PulseWidthModulationLevelControlCluster.commands.moveWithOnOff.requestSchema>;

type StepWithOnOffRequest = TypeFromSchema<typeof PulseWidthModulationLevelControlCluster.commands.stepWithOnOff.requestSchema>;

type StopWithOnOffRequest = TypeFromSchema<typeof PulseWidthModulationLevelControlCluster.commands.stopWithOnOff.requestSchema>;

type MoveToClosestFrequencyRequest = TypeFromSchema<typeof PulseWidthModulationLevelControlCluster.commands.moveToClosestFrequency.requestSchema>;

export interface PulseWidthModulationLevelControlInterface {
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

    currentFrequency: number;
    addCurrentFrequencyListener(listener: (newValue: number, oldValue: number) => void): void;
    removeCurrentFrequencyListener(listener: (newValue: number, oldValue: number) => void): void;

    minFrequency: number;
    addMinFrequencyListener(listener: (newValue: number, oldValue: number) => void): void;
    removeMinFrequencyListener(listener: (newValue: number, oldValue: number) => void): void;

    maxFrequency: number;
    addMaxFrequencyListener(listener: (newValue: number, oldValue: number) => void): void;
    removeMaxFrequencyListener(listener: (newValue: number, oldValue: number) => void): void;

    sendMoveToLevel(request: MoveToLevelRequest): Promise<void>;
    sendMove(request: MoveRequest): Promise<void>;
    sendStep(request: StepRequest): Promise<void>;
    sendStop(request: StopRequest): Promise<void>;
    sendMoveToLevelWithOnOff(request: MoveToLevelWithOnOffRequest): Promise<void>;
    sendMoveWithOnOff(request: MoveWithOnOffRequest): Promise<void>;
    sendStepWithOnOff(request: StepWithOnOffRequest): Promise<void>;
    sendStopWithOnOff(request: StopWithOnOffRequest): Promise<void>;
    sendMoveToClosestFrequency(request: MoveToClosestFrequencyRequest): Promise<void>;
}

export const PulseWidthModulationLevelControl:
    ClusterInterface<PulseWidthModulationLevelControlInterface> =
{
    definition: PulseWidthModulationLevelControlCluster
};
