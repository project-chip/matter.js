import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { AccessControlCluster } from "../index.js";

import { ByteArray } from "../../util/index.js"

export type Acl = {
    privilege: number,
    authMode: number,
    subjects: any[] | undefined,
    targets: {
        cluster: number | undefined,
        endpoint: number | undefined,
        deviceType: number | undefined
    }[] | undefined
};

export type Extension = {
    data: ByteArray
};

export type AccessControlEntryChangedEvent = {
    adminNodeID: any | undefined,
    adminPasscodeID: number | undefined,
    changeType: number,
    latestValue: {
        privilege: number,
        authMode: number,
        subjects: any[] | undefined,
        targets: {
            cluster: number | undefined,
            endpoint: number | undefined,
            deviceType: number | undefined
        }[] | undefined
    } | undefined
};

export type AccessControlExtensionChangedEvent = {
    adminNodeID: any | undefined,
    adminPasscodeID: number | undefined,
    changeType: number,
    latestValue: {
        data: ByteArray
    } | undefined
};

export interface AccessControlInterface {
    acl: Acl[];
    setAcl(value: Acl[]): Promise<void>;
    addAclListener(listener: (newValue: Acl[], oldValue: Acl[]) => void): void;
    removeAclListener(listener: (newValue: Acl[], oldValue: Acl[]) => void): void;
    
    extension?: Extension[];
    setExtension(value: Extension[]): Promise<void>;
    addExtensionListener(listener: (newValue: Extension[], oldValue: Extension[]) => void): void;
    removeExtensionListener(listener: (newValue: Extension[], oldValue: Extension[]) => void): void;
    
    subjectsPerAccessControlEntry: number;
    addSubjectsPerAccessControlEntryListener(listener: (newValue: number, oldValue: number) => void): void;
    removeSubjectsPerAccessControlEntryListener(listener: (newValue: number, oldValue: number) => void): void;
    
    targetsPerAccessControlEntry: number;
    addTargetsPerAccessControlEntryListener(listener: (newValue: number, oldValue: number) => void): void;
    removeTargetsPerAccessControlEntryListener(listener: (newValue: number, oldValue: number) => void): void;
    
    accessControlEntriesPerFabric: number;
    addAccessControlEntriesPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;
    removeAccessControlEntriesPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;
    
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
    
    addAccessControlEntryChangedListener(listener: (event: AccessControlEntryChangedEvent) => void): void;
    removeAccessControlEntryChangedListener(listener: (event: AccessControlEntryChangedEvent) => void): void;
    
    addAccessControlExtensionChangedListener(listener: (event: AccessControlExtensionChangedEvent) => void): void;
    removeAccessControlExtensionChangedListener(listener: (event: AccessControlExtensionChangedEvent) => void): void;
}

export const AccessControlClientImpl = ClientIfaceImpl<AccessControlInterface>(AccessControlCluster);
export const AccessControlServerImpl = ServerIfaceImpl<AccessControlInterface>(AccessControlCluster);
