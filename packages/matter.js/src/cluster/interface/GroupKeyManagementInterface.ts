import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { GroupKeyManagementCluster } from "../index.js";

export type GroupKeyMap = {
    groupId: number,
    groupKeySetId: number
};

export type GroupTable = {
    groupId: number,
    endPoints: number[],
    groupName: string
};

export type KeySetWriteRequest = {
    groupKeySet: {
        groupKeySetID: number,
        groupKeySecurityPolicy: number,
        epochKey0: string | undefined,
        epochStartTime0: any | undefined,
        epochKey1: string | undefined,
        epochStartTime1: any | undefined,
        epochKey2: string | undefined,
        epochStartTime2: any | undefined,
        GroupKeyMulticastPolicy: number
    }
};

export type KeySetReadRequest = {
    groupKeySetId: number
};

export type KeySetReadAllIndicesResponse = {
    groupKeySetIds: number[]
};

export interface GroupKeyManagementInterface {
    groupKeyMap: GroupKeyMap[];
    setGroupKeyMap(value: GroupKeyMap[]): Promise<void>;
    addGroupKeyMapListener(listener: (newValue: GroupKeyMap[], oldValue: GroupKeyMap[]) => void): void;
    removeGroupKeyMapListener(listener: (newValue: GroupKeyMap[], oldValue: GroupKeyMap[]) => void): void;
    
    groupTable: GroupTable[];
    addGroupTableListener(listener: (newValue: GroupTable[], oldValue: GroupTable[]) => void): void;
    removeGroupTableListener(listener: (newValue: GroupTable[], oldValue: GroupTable[]) => void): void;
    
    maxGroupsPerFabric: number;
    addMaxGroupsPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;
    removeMaxGroupsPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;
    
    maxGroupKeysPerFabric: number;
    addMaxGroupKeysPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;
    removeMaxGroupKeysPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;
    
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
    
    sendKeySetWrite(request: KeySetWriteRequest): Promise<void>;
    sendKeySetRead(request: KeySetReadRequest): Promise<KeySetWriteRequest>;
    sendKeySetRemove(request: KeySetReadRequest): Promise<void>;
    sendKeySetReadAllIndices(request: any): Promise<KeySetReadAllIndicesResponse>;
}

export const GroupKeyManagementClientImpl = ClientIfaceImpl<GroupKeyManagementInterface>(GroupKeyManagementCluster);
export const GroupKeyManagementServerImpl = ServerIfaceImpl<GroupKeyManagementInterface>(GroupKeyManagementCluster);
