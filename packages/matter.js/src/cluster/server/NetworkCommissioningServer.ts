/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EthernetNetworkCommissioningCluster } from "../NetworkCommissioningCluster.js"
import { ClusterServerHandlers } from "./ClusterServer.js"
import { UnsupportedCommandError } from "./CommandServer.js";

export const NetworkCommissioningHandler: () => ClusterServerHandlers<typeof EthernetNetworkCommissioningCluster> = () => ({
    scanNetworks: async function() {
        throw new UnsupportedCommandError();
    },

    removeNetwork: async function() {
        throw new UnsupportedCommandError();
    },

    connectNetwork: async function() {
        throw new UnsupportedCommandError();
    },

    reorderNetwork: async function() {
        throw new UnsupportedCommandError();
    },

    addOrUpdateWiFiNetwork: async function() {
        throw new UnsupportedCommandError();
    },

    addOrUpdateThreadNetwork: async function() {
        throw new UnsupportedCommandError();
    }
});
