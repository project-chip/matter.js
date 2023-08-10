/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Identify, IdentifyCluster } from "../definitions/IdentifyCluster.js";
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
