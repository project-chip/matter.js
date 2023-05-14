import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { GeneralCommissioningCluster } from "../index.js";

export type BasicCommissioningInfo = {
    failSafeExpiryLengthSeconds: number,
    maxCumulativeFailsafeSeconds: number
};

export type ArmFailSafeRequest = {
    expiryLengthSeconds: number,
    breadcrumb: any
};

export type ArmFailSafeResponse = {
    errorCode: number,
    debugText: string
};

export type SetRegulatoryConfigRequest = {
    newRegulatoryConfig: number,
    countryCode: string,
    breadcrumb: any
};

export interface GeneralCommissioningInterface {
    breadcrumb: any;
    setBreadcrumb(value: any): Promise<void>;
    addBreadcrumbListener(listener: (newValue: any, oldValue: any) => void): void;
    removeBreadcrumbListener(listener: (newValue: any, oldValue: any) => void): void;
    
    basicCommissioningInfo: BasicCommissioningInfo;
    addBasicCommissioningInfoListener(listener: (newValue: BasicCommissioningInfo, oldValue: BasicCommissioningInfo) => void): void;
    removeBasicCommissioningInfoListener(listener: (newValue: BasicCommissioningInfo, oldValue: BasicCommissioningInfo) => void): void;
    
    regulatoryConfig: number;
    addRegulatoryConfigListener(listener: (newValue: number, oldValue: number) => void): void;
    removeRegulatoryConfigListener(listener: (newValue: number, oldValue: number) => void): void;
    
    locationCapability: number;
    addLocationCapabilityListener(listener: (newValue: number, oldValue: number) => void): void;
    removeLocationCapabilityListener(listener: (newValue: number, oldValue: number) => void): void;
    
    supportsConcurrentConnections: boolean;
    addSupportsConcurrentConnectionsListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeSupportsConcurrentConnectionsListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
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
    
    sendArmFailSafe(request: ArmFailSafeRequest): Promise<ArmFailSafeResponse>;
    sendSetRegulatoryConfig(request: SetRegulatoryConfigRequest): Promise<ArmFailSafeResponse>;
    sendCommissioningComplete(request: any): Promise<ArmFailSafeResponse>;
}

export const GeneralCommissioningClientImpl = ClientIfaceImpl<GeneralCommissioningInterface>(GeneralCommissioningCluster);
export const GeneralCommissioningServerImpl = ServerIfaceImpl<GeneralCommissioningInterface>(GeneralCommissioningCluster);
