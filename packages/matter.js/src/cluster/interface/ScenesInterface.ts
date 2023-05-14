import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { ScenesCluster } from "../index.js";

export type AddSceneRequest = {
    groupId: number,
    sceneId: number,
    transitionTime: number,
    sceneName: string,
    extensionFieldSets: {
        clusterId: number,
        attributeValueList: {
            attributeId: number,
            attributeValue: any
        }[]
    }[]
};

export type AddSceneResponse = {
    status: number,
    groupId: number,
    sceneId: number
};

export type ViewSceneRequest = {
    groupId: number,
    sceneId: number
};

export type ViewSceneResponse = {
    status: number,
    groupId: number,
    sceneId: number,
    transitionTime: number,
    sceneName: string,
    extensionFieldSets: {
        clusterId: number,
        attributeValueList: {
            attributeId: number,
            attributeValue: any
        }[]
    }[]
};

export type RemoveAllScenesRequest = {
    groupId: number
};

export type RemoveAllScenesResponse = {
    status: number,
    groupId: number
};

export type RecallSceneRequest = {
    groupId: number,
    sceneId: number,
    transitionTime: number | undefined
};

export type GetSceneMembershipResponse = {
    status: number,
    capacity: number | undefined,
    groupId: number,
    sceneList: number[]
};

export type CopySceneRequest = {
    mode: number,
    groupIdFrom: number,
    sceneIdFrom: number,
    groupIdTo: number,
    sceneIdTo: number
};

export type CopySceneResponse = {
    status: number,
    groupIdFrom: number,
    sceneIdFrom: number
};

export interface ScenesInterface {
    sceneCount: number;
    addSceneCountListener(listener: (newValue: number, oldValue: number) => void): void;
    removeSceneCountListener(listener: (newValue: number, oldValue: number) => void): void;
    
    currentScene: number;
    addCurrentSceneListener(listener: (newValue: number, oldValue: number) => void): void;
    removeCurrentSceneListener(listener: (newValue: number, oldValue: number) => void): void;
    
    currentGroup: number;
    addCurrentGroupListener(listener: (newValue: number, oldValue: number) => void): void;
    removeCurrentGroupListener(listener: (newValue: number, oldValue: number) => void): void;
    
    sceneValid: boolean;
    addSceneValidListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeSceneValidListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
    nameSupport: number;
    addNameSupportListener(listener: (newValue: number, oldValue: number) => void): void;
    removeNameSupportListener(listener: (newValue: number, oldValue: number) => void): void;
    
    lastConfiguredBy?: any | undefined;
    addLastConfiguredByListener(listener: (newValue: any | undefined, oldValue: any | undefined) => void): void;
    removeLastConfiguredByListener(listener: (newValue: any | undefined, oldValue: any | undefined) => void): void;
    
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
    
    sendAddScene(request: AddSceneRequest): Promise<AddSceneResponse>;
    sendViewScene(request: ViewSceneRequest): Promise<ViewSceneResponse>;
    sendRemoveScene(request: ViewSceneRequest): Promise<AddSceneResponse>;
    sendRemoveAllScenes(request: RemoveAllScenesRequest): Promise<RemoveAllScenesResponse>;
    sendStoreScene(request: ViewSceneRequest): Promise<AddSceneResponse>;
    sendRecallScene(request: RecallSceneRequest): Promise<void>;
    sendGetSceneMembership(request: RemoveAllScenesRequest): Promise<GetSceneMembershipResponse>;
    sendEnhancedAddScene(request: AddSceneRequest): Promise<AddSceneResponse>;
    sendEnhancedViewScene(request: ViewSceneRequest): Promise<ViewSceneResponse>;
    sendCopyScene(request: CopySceneRequest): Promise<CopySceneResponse>;
}

export const ScenesClientImpl = ClientIfaceImpl<ScenesInterface>(ScenesCluster);
export const ScenesServerImpl = ServerIfaceImpl<ScenesInterface>(ScenesCluster);
