import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { ActionsCluster } from "../index.js";

export type ActionList = {
    actionID: number,
    name: string,
    type: number,
    endpointListId: number,
    supportedCommands: number,
    state: number
};

export type EndpointLists = {
    endpointListId: number,
    name: string,
    type: number,
    endpoints: number[]
};

export type InstantActionRequest = {
    actionId: number,
    invokeId: number
};

export type InstantActionWithTransitionRequest = {
    actionId: number,
    invokeId: number,
    transitionTime: number
};

export type StartActionWithDurationRequest = {
    actionId: number,
    invokeId: number,
    duration: number
};

export type StateChangedEvent = {
    actionId: number,
    invokeId: number,
    newState: number
};

export type ActionFailedEvent = {
    actionId: number,
    invokeId: number,
    newState: number,
    error: number
};

export interface ActionsInterface {
    actionList: ActionList[];
    addActionListListener(listener: (newValue: ActionList[], oldValue: ActionList[]) => void): void;
    removeActionListListener(listener: (newValue: ActionList[], oldValue: ActionList[]) => void): void;
    
    endpointLists: EndpointLists[];
    addEndpointListsListener(listener: (newValue: EndpointLists[], oldValue: EndpointLists[]) => void): void;
    removeEndpointListsListener(listener: (newValue: EndpointLists[], oldValue: EndpointLists[]) => void): void;
    
    setupURL?: string;
    addSetupURLListener(listener: (newValue: string, oldValue: string) => void): void;
    removeSetupURLListener(listener: (newValue: string, oldValue: string) => void): void;
    
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
    
    sendInstantAction(request: InstantActionRequest): Promise<void>;
    sendInstantActionWithTransition(request: InstantActionWithTransitionRequest): Promise<void>;
    sendStartAction(request: InstantActionRequest): Promise<void>;
    sendStartActionWithDuration(request: StartActionWithDurationRequest): Promise<void>;
    sendStopAction(request: InstantActionRequest): Promise<void>;
    sendPauseAction(request: InstantActionRequest): Promise<void>;
    sendPauseActionWithDuration(request: StartActionWithDurationRequest): Promise<void>;
    sendResumeAction(request: InstantActionRequest): Promise<void>;
    sendEnableAction(request: InstantActionRequest): Promise<void>;
    sendEnableActionWithDuration(request: StartActionWithDurationRequest): Promise<void>;
    sendDisableAction(request: InstantActionRequest): Promise<void>;
    sendDisableActionWithDuration(request: StartActionWithDurationRequest): Promise<void>;
    
    addStateChangedListener(listener: (event: StateChangedEvent) => void): void;
    removeStateChangedListener(listener: (event: StateChangedEvent) => void): void;
    
    addActionFailedListener(listener: (event: ActionFailedEvent) => void): void;
    removeActionFailedListener(listener: (event: ActionFailedEvent) => void): void;
}

export const ActionsClientImpl = ClientIfaceImpl<ActionsInterface>(ActionsCluster);
export const ActionsServerImpl = ServerIfaceImpl<ActionsInterface>(ActionsCluster);
