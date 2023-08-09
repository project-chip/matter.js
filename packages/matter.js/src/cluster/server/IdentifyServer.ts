/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { IdentifyCluster, Identify } from "../definitions/IdentifyCluster.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";
import { ClusterServer } from "./ClusterServer.js";

export const createDefaultIdentifyClusterServer = (handlers: ClusterServerHandlers<typeof IdentifyCluster>) => ClusterServer(
    IdentifyCluster,
    {
        identifyTime: 0,
        identifyType: Identify.IdentifyType.None,
    },
    handlers
);
