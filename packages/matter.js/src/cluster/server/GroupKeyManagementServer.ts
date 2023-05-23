/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterServerHandlers } from "./ClusterServer.js";
import { GroupKeyManagementCluster } from "../GroupKeyManagementCluster.js";
import { UnsupportedCommandError } from "./CommandServer.js";

// TODO: Implement this

export const GroupKeyManagementClusterHandler: () => ClusterServerHandlers<typeof GroupKeyManagementCluster> = () => ({
    keySetWrite: async () => {
        throw new UnsupportedCommandError();
    },
    keySetRead: async () => {
        throw new UnsupportedCommandError();
    },
    keySetRemove: async () => {
        throw new UnsupportedCommandError();
    },
    keySetReadAllIndices: async () => {
        throw new UnsupportedCommandError();
    }
});
