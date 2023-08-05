/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterServerHandlers } from "./ClusterServer.js";
import { GroupKeyManagementCluster } from "../definitions/GroupKeyManagementCluster.js";
import { NotImplementedError } from "../../common/MatterError.js";

// TODO: Implement this

export const GroupKeyManagementClusterHandler: () => ClusterServerHandlers<typeof GroupKeyManagementCluster> = () => ({
    keySetWrite: async () => {
        throw new NotImplementedError("Not implemented");
    },
    keySetRead: async () => {
        throw new NotImplementedError("Not implemented");
    },
    keySetRemove: async () => {
        throw new NotImplementedError("Not implemented");
    },
    keySetReadAllIndices: async () => {
        throw new NotImplementedError("Not implemented");
    }
});
