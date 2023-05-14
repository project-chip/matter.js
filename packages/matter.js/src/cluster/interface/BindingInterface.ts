import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { BindingCluster } from "../index.js";

export type BindingList = {
    node: any,
    group: number,
    endpoint: number,
    cluster: number
};

export interface BindingInterface {
    bindingList: BindingList[];
    setBindingList(value: BindingList[]): Promise<void>;
    addBindingListListener(listener: (newValue: BindingList[], oldValue: BindingList[]) => void): void;
    removeBindingListListener(listener: (newValue: BindingList[], oldValue: BindingList[]) => void): void;
    
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
}

export const BindingClientImpl = ClientIfaceImpl<BindingInterface>(BindingCluster);
export const BindingServerImpl = ServerIfaceImpl<BindingInterface>(BindingCluster);
