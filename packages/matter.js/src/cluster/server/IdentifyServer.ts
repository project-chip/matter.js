/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Identify, IdentifyCluster } from "#clusters";
import { ClusterServer } from "./ClusterServer.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

export const createDefaultIdentifyClusterServer = (handlers: ClusterServerHandlers<typeof IdentifyCluster>) =>
    ClusterServer(
        IdentifyCluster,
        {
            identifyTime: 0,
            identifyType: Identify.IdentifyType.None,
        },
        handlers,
    );
