import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { DescriptorCluster } from "../index.js";

export type DeviceTypeList = {
    deviceType: number,
    revision: number
};

export interface DescriptorInterface {
    deviceTypeList: DeviceTypeList[];
    addDeviceTypeListListener(listener: (newValue: DeviceTypeList[], oldValue: DeviceTypeList[]) => void): void;
    removeDeviceTypeListListener(listener: (newValue: DeviceTypeList[], oldValue: DeviceTypeList[]) => void): void;
    
    serverList: number[];
    addServerListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeServerListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    clientList: number[];
    addClientListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeClientListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    partsList: number[];
    addPartsListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removePartsListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
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

export const DescriptorClientImpl = ClientIfaceImpl<DescriptorInterface>(DescriptorCluster);
export const DescriptorServerImpl = ServerIfaceImpl<DescriptorInterface>(DescriptorCluster);
