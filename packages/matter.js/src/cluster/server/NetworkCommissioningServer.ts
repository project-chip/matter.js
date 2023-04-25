/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkCommissioningCluster } from "../NetworkCommissioningCluster.js"
import { ClusterServerHandlers } from "./ClusterServer.js"

export const NetworkCommissioningHandler: () => ClusterServerHandlers<typeof NetworkCommissioningCluster> = () => ({
    scanNetworks: async function() {
        throw new Error("Not implemented");
    },

    removeNetwork: async function() {
        throw new Error("Not implemented");
    },

    connectNetwork: async function() {
        throw new Error("Not implemented");
    },

    reorderNetwork: async function() {
        throw new Error("Not implemented");
    },
});
