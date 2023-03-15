/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkCommissioningCluster } from "../NetworkCommissioningCluster"
import { AttributeServers, ClusterServerHandlers } from "./ClusterServer"

export const NetworkCommissioningHandler: () => ClusterServerHandlers<typeof NetworkCommissioningCluster> = () => ({
    scanNetworks: async function () {
        throw new Error("Not implemented");
    },

    removeNetwork: async function () {
        throw new Error("Not implemented");
    },

    connectNetwork: async function () {
        throw new Error("Not implemented");
    },

    reorderNetwork: async function () {
        throw new Error("Not implemented");
    },
});
