/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ScenesCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type AddSceneRequest = TypeFromSchema<typeof ScenesCluster.commandmodels.addScene.requestSchema>;
type AddSceneResponse = TypeFromSchema<typeof ScenesCluster.commandmodels.addScene.responseSchema>;
type ViewSceneRequest = TypeFromSchema<typeof ScenesCluster.commandmodels.viewScene.requestSchema>;
type ViewSceneResponse = TypeFromSchema<typeof ScenesCluster.commandmodels.viewScene.responseSchema>;
type RemoveSceneRequest = TypeFromSchema<typeof ScenesCluster.commandmodels.removeScene.requestSchema>;
type RemoveSceneResponse = TypeFromSchema<typeof ScenesCluster.commandmodels.removeScene.responseSchema>;
type RemoveAllScenesRequest = TypeFromSchema<typeof ScenesCluster.commandmodels.removeAllScenes.requestSchema>;
type RemoveAllScenesResponse = TypeFromSchema<typeof ScenesCluster.commandmodels.removeAllScenes.responseSchema>;
type StoreSceneRequest = TypeFromSchema<typeof ScenesCluster.commandmodels.storeScene.requestSchema>;
type StoreSceneResponse = TypeFromSchema<typeof ScenesCluster.commandmodels.storeScene.responseSchema>;
type RecallSceneRequest = TypeFromSchema<typeof ScenesCluster.commandmodels.recallScene.requestSchema>;
type GetSceneMembershipRequest = TypeFromSchema<typeof ScenesCluster.commandmodels.getSceneMembership.requestSchema>;
type GetSceneMembershipResponse = TypeFromSchema<typeof ScenesCluster.commandmodels.getSceneMembership.responseSchema>;
type EnhancedAddSceneRequest = TypeFromSchema<typeof ScenesCluster.commandmodels.enhancedAddScene.requestSchema>;
type EnhancedAddSceneResponse = TypeFromSchema<typeof ScenesCluster.commandmodels.enhancedAddScene.responseSchema>;
type EnhancedViewSceneRequest = TypeFromSchema<typeof ScenesCluster.commandmodels.enhancedViewScene.requestSchema>;
type EnhancedViewSceneResponse = TypeFromSchema<typeof ScenesCluster.commandmodels.enhancedViewScene.responseSchema>;
type CopySceneRequest = TypeFromSchema<typeof ScenesCluster.commandmodels.copyScene.requestSchema>;
type CopySceneResponse = TypeFromSchema<typeof ScenesCluster.commandmodels.copyScene.responseSchema>;

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

        onSceneCountChange(): void;
        onCurrentSceneChange(): void;
        onCurrentGroupChange(): void;
        onSceneValidChange(): void;
        onNameSupportChange(): void;
        onLastConfiguredByChange(): void;
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

        onSceneCountChange(): void;
        onCurrentSceneChange(): void;
        onCurrentGroupChange(): void;
        onSceneValidChange(): void;
        onNameSupportChange(): void;
        onLastConfiguredByChange(): void;
    }
}

export const Scenes: ClusterInterface<Scenes.State, Scenes.Client, Scenes.Server> = {
    definition: ScenesCluster
}
