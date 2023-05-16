/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { ActionsCluster } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type ActionList = TypeFromSchema<typeof ActionsCluster.attributes.actionList.schema>;

type EndpointLists = TypeFromSchema<typeof ActionsCluster.attributes.endpointLists.schema>;

type InstantActionRequest = TypeFromSchema<typeof ActionsCluster.commands.instantAction.requestSchema>;

type InstantActionWithTransitionRequest = TypeFromSchema<typeof ActionsCluster.commands.instantActionWithTransition.requestSchema>;

type StartActionRequest = TypeFromSchema<typeof ActionsCluster.commands.startAction.requestSchema>;

type StartActionWithDurationRequest = TypeFromSchema<typeof ActionsCluster.commands.startActionWithDuration.requestSchema>;

type StopActionRequest = TypeFromSchema<typeof ActionsCluster.commands.stopAction.requestSchema>;

type PauseActionRequest = TypeFromSchema<typeof ActionsCluster.commands.pauseAction.requestSchema>;

type PauseActionWithDurationRequest = TypeFromSchema<typeof ActionsCluster.commands.pauseActionWithDuration.requestSchema>;

type ResumeActionRequest = TypeFromSchema<typeof ActionsCluster.commands.resumeAction.requestSchema>;

type EnableActionRequest = TypeFromSchema<typeof ActionsCluster.commands.enableAction.requestSchema>;

type EnableActionWithDurationRequest = TypeFromSchema<typeof ActionsCluster.commands.enableActionWithDuration.requestSchema>;

type DisableActionRequest = TypeFromSchema<typeof ActionsCluster.commands.disableAction.requestSchema>;

type DisableActionWithDurationRequest = TypeFromSchema<typeof ActionsCluster.commands.disableActionWithDuration.requestSchema>;

type StateChangedEvent = TypeFromSchema<typeof ActionsCluster.events.stateChanged.schema>;

type ActionFailedEvent = TypeFromSchema<typeof ActionsCluster.events.actionFailed.schema>;

export interface ActionsInterface {
    actionList: ActionList[];
    addActionListListener(listener: (newValue: ActionList[], oldValue: ActionList[]) => void): void;
    removeActionListListener(listener: (newValue: ActionList[], oldValue: ActionList[]) => void): void;

    endpointLists: EndpointLists[];
    addEndpointListsListener(listener: (newValue: EndpointLists[], oldValue: EndpointLists[]) => void): void;
    removeEndpointListsListener(listener: (newValue: EndpointLists[], oldValue: EndpointLists[]) => void): void;

    setupURL?: string;
    addSetupUrlListener(listener: (newValue: string, oldValue: string) => void): void;
    removeSetupUrlListener(listener: (newValue: string, oldValue: string) => void): void;

    sendInstantAction(request: InstantActionRequest): Promise<void>;
    sendInstantActionWithTransition(request: InstantActionWithTransitionRequest): Promise<void>;
    sendStartAction(request: StartActionRequest): Promise<void>;
    sendStartActionWithDuration(request: StartActionWithDurationRequest): Promise<void>;
    sendStopAction(request: StopActionRequest): Promise<void>;
    sendPauseAction(request: PauseActionRequest): Promise<void>;
    sendPauseActionWithDuration(request: PauseActionWithDurationRequest): Promise<void>;
    sendResumeAction(request: ResumeActionRequest): Promise<void>;
    sendEnableAction(request: EnableActionRequest): Promise<void>;
    sendEnableActionWithDuration(request: EnableActionWithDurationRequest): Promise<void>;
    sendDisableAction(request: DisableActionRequest): Promise<void>;
    sendDisableActionWithDuration(request: DisableActionWithDurationRequest): Promise<void>;

    addStateChangedListener(listener: (event: StateChangedEvent) => void): void;
    removeStateChangedListener(listener: (event: StateChangedEvent) => void): void;

    addActionFailedListener(listener: (event: ActionFailedEvent) => void): void;
    removeActionFailedListener(listener: (event: ActionFailedEvent) => void): void;
}

export const ActionsClientImpl = ClientIfaceImpl<ActionsInterface>(ActionsCluster);
export const ActionsServerImpl = ServerIfaceImpl<ActionsInterface>(ActionsCluster);
