import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { OnOffLightingCluster } from "../index.js";

export type OffWithEffectRequest = {
    effectIdentifier: number,
    effectVariant: number
};

export type OnWithTimedOffRequest = {
    onOffControl: number,
    onTime: number | undefined,
    offWaitTime: number | undefined
};

export interface OnOffLightingInterface {
    onOff: boolean;
    addOnOffListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeOnOffListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
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
    
    globalSceneControl: boolean;
    addGlobalSceneControlListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeGlobalSceneControlListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
    onTime: number | undefined;
    setOnTime(value: number | undefined): Promise<void>;
    addOnTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeOnTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    offWaitTime: number | undefined;
    setOffWaitTime(value: number | undefined): Promise<void>;
    addOffWaitTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeOffWaitTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    startUpOnOff: number | undefined;
    setStartUpOnOff(value: number | undefined): Promise<void>;
    addStartUpOnOffListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeStartUpOnOffListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    sendOff(request: any): Promise<void>;
    sendOn(request: any): Promise<void>;
    sendToggle(request: any): Promise<void>;
    sendOffWithEffect(request: OffWithEffectRequest): Promise<void>;
    sendOnWithRecallGlobalScene(request: void): Promise<void>;
    sendOnWithTimedOff(request: OnWithTimedOffRequest): Promise<void>;
}

export const OnOffLightingClientImpl = ClientIfaceImpl<OnOffLightingInterface>(OnOffLightingCluster);
export const OnOffLightingServerImpl = ServerIfaceImpl<OnOffLightingInterface>(OnOffLightingCluster);
