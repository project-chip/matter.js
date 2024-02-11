/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { NetworkCommissioning, ClusterServer } from "@project-chip/matter.js/cluster";
import { ByteArray } from "@project-chip/matter.js/util";
import { Endpoint, DeviceTypes, EndpointStructuralAdapter } from "@project-chip/matter.js/device";
import { EndpointNumber } from "@project-chip/matter.js/datatype";
import { TimedOperation } from "@project-chip/matter.js/common";

describe("TimedOperation", () => {
    describe("Store and restore Endpoint data", () => {
        it("2 Network cluster data are restored", async () => {
            const networkId = new ByteArray(32);
            const networkServer1 = ClusterServer(
                NetworkCommissioning.Cluster.with("EthernetNetworkInterface"),
                {
                    maxNetworks: 1,
                    interfaceEnabled: true,
                    lastConnectErrorValue: 0,
                    lastNetworkId: networkId,
                    lastNetworkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                    networks: [{ networkId: networkId, connected: true }],
                },
                {}, // Ethernet is not requiring any methods
            );
            const networkServer2 = ClusterServer(
                NetworkCommissioning.Cluster.with("EthernetNetworkInterface"),
                {
                    maxNetworks: 1,
                    interfaceEnabled: true,
                    lastConnectErrorValue: 0,
                    lastNetworkId: networkId,
                    lastNetworkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                    networks: [{ networkId: networkId, connected: false }],
                },
                {}, // Ethernet is not requiring any methods
            );

            const rootEndpoint = new Endpoint([DeviceTypes.ROOT], { endpointId: EndpointNumber(0) });
            rootEndpoint.addClusterServer(networkServer1);
            const otherEndpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            otherEndpoint.addClusterServer(networkServer2);
            rootEndpoint.addChildEndpoint(otherEndpoint);

            // Open FailSafe context and store network data
            const timedOperation = new TimedOperation({
                sessions: { getPaseSession() { return undefined } } as any,
                fabrics: {} as any,
                expiryLengthSeconds: 100,
                maxCumulativeFailsafeSeconds: 100,
                associatedFabric: undefined,
                rootEndpoint: EndpointStructuralAdapter(rootEndpoint),
            });

            // Now lets change network details
            const newNetworkId = new ByteArray(32);
            newNetworkId[0] = 1;
            networkServer1.setNetworksAttribute([{ networkId: newNetworkId, connected: false }]);
            networkServer2.setNetworksAttribute([{ networkId: newNetworkId, connected: true }]);

            // Restore network data
            await timedOperation.destroy();

            // Check if network data is restored
            assert.deepEqual(networkServer1.getNetworksAttribute(), [{ networkId: networkId, connected: true }]);
            assert.deepEqual(networkServer2.getNetworksAttribute(), [{ networkId: networkId, connected: false }]);
        });
    });
});
