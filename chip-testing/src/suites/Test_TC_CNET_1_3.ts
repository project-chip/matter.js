/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { MinimalOnOffDeviceTestInstance } from "../MinimalOnOffDeviceTestInstance.js";

import { ClusterServer, NetworkCommissioning, NetworkCommissioningCluster } from "@project-chip/matter.js/cluster";
import { StorageBackendMemory } from "@project-chip/matter.js/storage";
import { ByteArray } from "@project-chip/matter.js/util";

/** Test case "Test_TC_CNET_1_3" */
export class Test_TC_CNET_1_3_F02 extends MinimalOnOffDeviceTestInstance {
    constructor(storage: StorageBackendMemory) {
        super("Test_TC_CNET_1_3", "Test_TC_CNET_1_3-F02.txt", storage);
    }

    override async setupCommissioningServer() {
        const commissioningServer = await super.setupCommissioningServer();

        const networkId = new ByteArray(32);
        commissioningServer.addRootClusterServer(
            ClusterServer(
                NetworkCommissioningCluster.with("EthernetNetworkInterface"),
                {
                    maxNetworks: 1,
                    interfaceEnabled: true,
                    lastConnectErrorValue: 0,
                    lastNetworkId: networkId,
                    lastNetworkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                    networks: [{ networkId: networkId, connected: true }],
                },
                {}, // Ethernet is not requiring any methods
            ),
        );

        return commissioningServer;
    }
}
