/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ClusterServer } from "../../protocol/interaction/index.js";
import { IdentifyCluster, IdentifyType } from "../IdentifyCluster.js";
import { ClusterServerHandlers } from "./ClusterServer.js";

export const createDefaultIdentifyClusterServer = (handlers: ClusterServerHandlers<typeof IdentifyCluster>) => new ClusterServer(
    IdentifyCluster,
    {
        query: false,
    },
    {
        identifyTime: 0,
        identifyType: IdentifyType.None,
    },
    handlers
);
