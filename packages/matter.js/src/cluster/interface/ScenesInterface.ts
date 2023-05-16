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

export const Scenes:
    ClusterInterface<ScenesInterface> =
{
    definition: ScenesCluster
};
