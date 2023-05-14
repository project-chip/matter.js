import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { BasicInformationCluster } from "../index.js";

export type CapabilityMinima = {
    caseSessionsPerFabric: number,
    subscriptionsPerFabric: number
};

export type StartUpEvent = {
    softwareVersion: number
};

export type ShutDownEvent = {
    
};

export type LeaveEvent = {
    fabricIndex: number
};

export type ReachableChangedEvent = {
    reachableNewValue: boolean
};

export interface BasicInformationInterface {
    dataModelRevision: number;
    addDataModelRevisionListener(listener: (newValue: number, oldValue: number) => void): void;
    removeDataModelRevisionListener(listener: (newValue: number, oldValue: number) => void): void;
    
    vendorName: string;
    addVendorNameListener(listener: (newValue: string, oldValue: string) => void): void;
    removeVendorNameListener(listener: (newValue: string, oldValue: string) => void): void;
    
    vendorId: number;
    addVendorIdListener(listener: (newValue: number, oldValue: number) => void): void;
    removeVendorIdListener(listener: (newValue: number, oldValue: number) => void): void;
    
    productName: string;
    addProductNameListener(listener: (newValue: string, oldValue: string) => void): void;
    removeProductNameListener(listener: (newValue: string, oldValue: string) => void): void;
    
    productId: number;
    addProductIdListener(listener: (newValue: number, oldValue: number) => void): void;
    removeProductIdListener(listener: (newValue: number, oldValue: number) => void): void;
    
    nodeLabel: string;
    setNodeLabel(value: string): Promise<void>;
    addNodeLabelListener(listener: (newValue: string, oldValue: string) => void): void;
    removeNodeLabelListener(listener: (newValue: string, oldValue: string) => void): void;
    
    location: string;
    setLocation(value: string): Promise<void>;
    addLocationListener(listener: (newValue: string, oldValue: string) => void): void;
    removeLocationListener(listener: (newValue: string, oldValue: string) => void): void;
    
    hardwareVersion: number;
    addHardwareVersionListener(listener: (newValue: number, oldValue: number) => void): void;
    removeHardwareVersionListener(listener: (newValue: number, oldValue: number) => void): void;
    
    hardwareVersionString: string;
    addHardwareVersionStringListener(listener: (newValue: string, oldValue: string) => void): void;
    removeHardwareVersionStringListener(listener: (newValue: string, oldValue: string) => void): void;
    
    softwareVersion: number;
    addSoftwareVersionListener(listener: (newValue: number, oldValue: number) => void): void;
    removeSoftwareVersionListener(listener: (newValue: number, oldValue: number) => void): void;
    
    softwareVersionString: string;
    addSoftwareVersionStringListener(listener: (newValue: string, oldValue: string) => void): void;
    removeSoftwareVersionStringListener(listener: (newValue: string, oldValue: string) => void): void;
    
    manufacturingDate?: string;
    addManufacturingDateListener(listener: (newValue: string, oldValue: string) => void): void;
    removeManufacturingDateListener(listener: (newValue: string, oldValue: string) => void): void;
    
    partNumber?: string;
    addPartNumberListener(listener: (newValue: string, oldValue: string) => void): void;
    removePartNumberListener(listener: (newValue: string, oldValue: string) => void): void;
    
    productURL?: string;
    addProductURLListener(listener: (newValue: string, oldValue: string) => void): void;
    removeProductURLListener(listener: (newValue: string, oldValue: string) => void): void;
    
    productLabel?: string;
    addProductLabelListener(listener: (newValue: string, oldValue: string) => void): void;
    removeProductLabelListener(listener: (newValue: string, oldValue: string) => void): void;
    
    serialNumber?: string;
    addSerialNumberListener(listener: (newValue: string, oldValue: string) => void): void;
    removeSerialNumberListener(listener: (newValue: string, oldValue: string) => void): void;
    
    localConfigDisabled?: boolean;
    setLocalConfigDisabled(value: boolean): Promise<void>;
    addLocalConfigDisabledListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeLocalConfigDisabledListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
    reachable?: boolean;
    addReachableListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeReachableListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
    uniqueId?: string;
    addUniqueIdListener(listener: (newValue: string, oldValue: string) => void): void;
    removeUniqueIdListener(listener: (newValue: string, oldValue: string) => void): void;
    
    capabilityMinima: CapabilityMinima;
    addCapabilityMinimaListener(listener: (newValue: CapabilityMinima, oldValue: CapabilityMinima) => void): void;
    removeCapabilityMinimaListener(listener: (newValue: CapabilityMinima, oldValue: CapabilityMinima) => void): void;
    
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
    
    addStartUpListener(listener: (event: StartUpEvent) => void): void;
    removeStartUpListener(listener: (event: StartUpEvent) => void): void;
    
    addShutDownListener(listener: (event: ShutDownEvent) => void): void;
    removeShutDownListener(listener: (event: ShutDownEvent) => void): void;
    
    addLeaveListener(listener: (event: LeaveEvent) => void): void;
    removeLeaveListener(listener: (event: LeaveEvent) => void): void;
    
    addReachableChangedListener(listener: (event: ReachableChangedEvent) => void): void;
    removeReachableChangedListener(listener: (event: ReachableChangedEvent) => void): void;
}

export const BasicInformationClientImpl = ClientIfaceImpl<BasicInformationInterface>(BasicInformationCluster);
export const BasicInformationServerImpl = ServerIfaceImpl<BasicInformationInterface>(BasicInformationCluster);
