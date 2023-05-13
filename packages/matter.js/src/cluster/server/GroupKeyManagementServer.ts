/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterServerHandlers } from "./ClusterServer.js";
import { GroupKeyManagementCluster } from "../GroupKeyManagementCluster.js";

// TODO: Implement this

export const GroupKeyManagementClusterHandler: () => ClusterServerHandlers<typeof GroupKeyManagementCluster> = () => ({
    keySetWrite: async () => {
        throw new Error("Not implemented");
    },
    keySetRead: async () => {
        throw new Error("Not implemented");
    },
    keySetRemove: async () => {
        throw new Error("Not implemented");
    },
    keySetReadAllIndices: async () => {
        throw new Error("Not implemented");
    }
});
