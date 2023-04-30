/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterServer } from "../../protocol/interaction/InteractionServer.js";
import { ScenesCluster } from "../ScenesCluster.js";

// TODO: Implement Scenes Handler

export const createDefaultScenesClusterServer = () => new ClusterServer(
    ScenesCluster,
    {
        sceneNames: true,
    },
    {
        sceneCount: 0,
        currentScene: 0,
        currentGroup: 0,
        sceneValid: false,
        nameSupport: {
            sceneNames: true,
        },
        lastConfiguredBy: null,
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO implement
    {}
);
