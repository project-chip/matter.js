import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { BooleanStateCluster } from "../index.js";

export type StateChangeEvent = {
    stateValue: boolean
};

export interface BooleanStateInterface {
    stateValue: boolean;
    addStateValueListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeStateValueListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
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
    
    addStateChangeListener(listener: (event: StateChangeEvent) => void): void;
    removeStateChangeListener(listener: (event: StateChangeEvent) => void): void;
}

export const BooleanStateClientImpl = ClientIfaceImpl<BooleanStateInterface>(BooleanStateCluster);
export const BooleanStateServerImpl = ServerIfaceImpl<BooleanStateInterface>(BooleanStateCluster);
