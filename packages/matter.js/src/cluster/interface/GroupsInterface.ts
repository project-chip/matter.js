import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { GroupsCluster } from "../index.js";

export type AddGroupRequest = {
    groupId: number,
    groupName: string
};

export type AddGroupResponse = {
    status: number,
    groupId: number
};

export type ViewGroupRequest = {
    groupId: number
};

export type ViewGroupResponse = {
    status: number,
    groupId: number,
    groupName: string
};

export type GetGroupMembershipRequest = {
    groupList: number[]
};

export type GetGroupMembershipResponse = {
    capacity: number | undefined,
    groupList: number[]
};

export interface GroupsInterface {
    nameSupport: number;
    addNameSupportListener(listener: (newValue: number, oldValue: number) => void): void;
    removeNameSupportListener(listener: (newValue: number, oldValue: number) => void): void;
    
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
    
    sendAddGroup(request: AddGroupRequest): Promise<AddGroupResponse>;
    sendViewGroup(request: ViewGroupRequest): Promise<ViewGroupResponse>;
    sendGetGroupMembership(request: GetGroupMembershipRequest): Promise<GetGroupMembershipResponse>;
    sendRemoveGroup(request: ViewGroupRequest): Promise<AddGroupResponse>;
    sendRemoveAllGroups(request: any): Promise<void>;
    sendAddGroupIfIdentifying(request: AddGroupRequest): Promise<void>;
}

export const GroupsClientImpl = ClientIfaceImpl<GroupsInterface>(GroupsCluster);
export const GroupsServerImpl = ServerIfaceImpl<GroupsInterface>(GroupsCluster);
