import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { IdentifyCluster } from "../index.js";

export type IdentifyRequest = {
    identifyTime: number
};

export type TriggerEffectRequest = {
    effectIdentifier: number,
    effectVariant: number
};

export interface IdentifyInterface {
    identifyTime: number;
    setIdentifyTime(value: number): Promise<void>;
    addIdentifyTimeListener(listener: (newValue: number, oldValue: number) => void): void;
    removeIdentifyTimeListener(listener: (newValue: number, oldValue: number) => void): void;
    
    identifyType: number;
    addIdentifyTypeListener(listener: (newValue: number, oldValue: number) => void): void;
    removeIdentifyTypeListener(listener: (newValue: number, oldValue: number) => void): void;
    
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
    
    sendIdentify(request: IdentifyRequest): Promise<void>;
    sendTriggerEffect(request: TriggerEffectRequest): Promise<void>;
}

export const IdentifyClientImpl = ClientIfaceImpl<IdentifyInterface>(IdentifyCluster);
export const IdentifyServerImpl = ServerIfaceImpl<IdentifyInterface>(IdentifyCluster);
