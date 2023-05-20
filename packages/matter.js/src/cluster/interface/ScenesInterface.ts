/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ScenesCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type AddSceneRequest = TypeFromSchema<typeof ScenesCluster.commands.addScene.requestSchema>;
type AddSceneResponse = TypeFromSchema<typeof ScenesCluster.commands.addScene.responseSchema>;
type ViewSceneRequest = TypeFromSchema<typeof ScenesCluster.commands.viewScene.requestSchema>;
type ViewSceneResponse = TypeFromSchema<typeof ScenesCluster.commands.viewScene.responseSchema>;
type RemoveSceneRequest = TypeFromSchema<typeof ScenesCluster.commands.removeScene.requestSchema>;
type RemoveSceneResponse = TypeFromSchema<typeof ScenesCluster.commands.removeScene.responseSchema>;
type RemoveAllScenesRequest = TypeFromSchema<typeof ScenesCluster.commands.removeAllScenes.requestSchema>;
type RemoveAllScenesResponse = TypeFromSchema<typeof ScenesCluster.commands.removeAllScenes.responseSchema>;
type StoreSceneRequest = TypeFromSchema<typeof ScenesCluster.commands.storeScene.requestSchema>;
type StoreSceneResponse = TypeFromSchema<typeof ScenesCluster.commands.storeScene.responseSchema>;
type RecallSceneRequest = TypeFromSchema<typeof ScenesCluster.commands.recallScene.requestSchema>;
type GetSceneMembershipRequest = TypeFromSchema<typeof ScenesCluster.commands.getSceneMembership.requestSchema>;
type GetSceneMembershipResponse = TypeFromSchema<typeof ScenesCluster.commands.getSceneMembership.responseSchema>;
type EnhancedAddSceneRequest = TypeFromSchema<typeof ScenesCluster.commands.enhancedAddScene.requestSchema>;
type EnhancedAddSceneResponse = TypeFromSchema<typeof ScenesCluster.commands.enhancedAddScene.responseSchema>;
type EnhancedViewSceneRequest = TypeFromSchema<typeof ScenesCluster.commands.enhancedViewScene.requestSchema>;
type EnhancedViewSceneResponse = TypeFromSchema<typeof ScenesCluster.commands.enhancedViewScene.responseSchema>;
type CopySceneRequest = TypeFromSchema<typeof ScenesCluster.commands.copyScene.requestSchema>;
type CopySceneResponse = TypeFromSchema<typeof ScenesCluster.commands.copyScene.responseSchema>;

namespace Scenes {
    export type State = {
        sceneCount: number;
        currentScene: number;
        currentGroup: number;
        sceneValid: boolean;
        nameSupport: number;
        lastConfiguredBy?: any | undefined;
    }

    export interface Client {
        sendAddScene(request: AddSceneRequest): Promise<AddSceneResponse>;
        sendViewScene(request: ViewSceneRequest): Promise<ViewSceneResponse>;
        sendRemoveScene(request: RemoveSceneRequest): Promise<RemoveSceneResponse>;
        sendRemoveAllScenes(request: RemoveAllScenesRequest): Promise<RemoveAllScenesResponse>;
        sendStoreScene(request: StoreSceneRequest): Promise<StoreSceneResponse>;
        sendRecallScene(request: RecallSceneRequest): Promise<void>;
        sendGetSceneMembership(request: GetSceneMembershipRequest): Promise<GetSceneMembershipResponse>;
        sendEnhancedAddScene(request: EnhancedAddSceneRequest): Promise<EnhancedAddSceneResponse>;
        sendEnhancedViewScene(request: EnhancedViewSceneRequest): Promise<EnhancedViewSceneResponse>;
        sendCopyScene(request: CopySceneRequest): Promise<CopySceneResponse>;
    }

    export interface Server {
        onAddScene(request: AddSceneRequest): Promise<AddSceneResponse>;
        onViewScene(request: ViewSceneRequest): Promise<ViewSceneResponse>;
        onRemoveScene(request: RemoveSceneRequest): Promise<RemoveSceneResponse>;
        onRemoveAllScenes(request: RemoveAllScenesRequest): Promise<RemoveAllScenesResponse>;
        onStoreScene(request: StoreSceneRequest): Promise<StoreSceneResponse>;
        onRecallScene(request: RecallSceneRequest): Promise<void>;
        onGetSceneMembership(request: GetSceneMembershipRequest): Promise<GetSceneMembershipResponse>;
        onEnhancedAddScene(request: EnhancedAddSceneRequest): Promise<EnhancedAddSceneResponse>;
        onEnhancedViewScene(request: EnhancedViewSceneRequest): Promise<EnhancedViewSceneResponse>;
        onCopyScene(request: CopySceneRequest): Promise<CopySceneResponse>;
    }
}

export const Scenes: ClusterInterface<Scenes.State, Scenes.Client, Scenes.Server> = {
    definition: ScenesCluster
}
