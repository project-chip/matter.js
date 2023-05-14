import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { PulseWidthModulationLevelControlCluster } from "../index.js";

export type MoveToLevelRequest = {
    level: number,
    transitionTime: number | undefined,
    optionsMask: number,
    optionsOverride: number
};

export type MoveRequest = {
    moveMode: number,
    rate: number | undefined,
    optionsMask: number,
    optionsOverride: number
};

export type StepRequest = {
    stepMode: number,
    stepSize: number,
    transitionTime: number | undefined,
    optionsMask: number,
    optionsOverride: number
};

export type StopRequest = {
    optionsMask: number,
    optionsOverride: number
};

export type MoveToClosestFrequencyRequest = {
    frequency: number
};

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
    
    clusterRevision: number;
    addClusterRevisionListener(listener: (newValue: number, oldValue: number) => void): void;
    removeClusterRevisionListener(listener: (newValue: number, oldValue: number) => void): void;
    
    featureMap: number;
    addFeatureMapListener(listener: (newValue: number, oldValue: number) => void): void;
    removeFeatureMapListener(listener: (newValue: number, oldValue: number) => void): void;
    
    attributeList: number[];
    addAttributeListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeAttributeListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    eventList: number[];
    addEventListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeEventListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    acceptedCommandList: number[];
    addAcceptedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeAcceptedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    generatedCommandList: number[];
    addGeneratedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeGeneratedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    sendMoveToLevel(request: MoveToLevelRequest): Promise<void>;
    sendMove(request: MoveRequest): Promise<void>;
    sendStep(request: StepRequest): Promise<void>;
    sendStop(request: StopRequest): Promise<void>;
    sendMoveToLevelWithOnOff(request: MoveToLevelRequest): Promise<void>;
    sendMoveWithOnOff(request: MoveRequest): Promise<void>;
    sendStepWithOnOff(request: StepRequest): Promise<void>;
    sendStopWithOnOff(request: StopRequest): Promise<void>;
    sendMoveToClosestFrequency(request: MoveToClosestFrequencyRequest): Promise<void>;
}

export const PulseWidthModulationLevelControlClientImpl = ClientIfaceImpl<PulseWidthModulationLevelControlInterface>(PulseWidthModulationLevelControlCluster);
export const PulseWidthModulationLevelControlServerImpl = ServerIfaceImpl<PulseWidthModulationLevelControlInterface>(PulseWidthModulationLevelControlCluster);
