/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterServer, NetworkCommissioning } from "@project-chip/matter.js/cluster";
import { FailSafeManager } from "@project-chip/matter.js/common";
import { EndpointNumber } from "@project-chip/matter.js/datatype";
import { DeviceTypes, Endpoint } from "@project-chip/matter.js/device";
import { ByteArray, createPromise } from "@project-chip/matter.js/util";
import * as assert from "assert";

// TODO identify more cases that are not handled by chip tool tests
describe("FailSafeManager Test", () => {
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
            await rootEndpoint.addClusterServer(networkServer1);
            const otherEndpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            await otherEndpoint.addClusterServer(networkServer2);
            await rootEndpoint.addChildEndpoint(otherEndpoint);

            // Open FailSafe context and store network data
            const failSafe = await FailSafeManager.create(
                {} as any,
                undefined,
                100,
                100,
                () => Promise.resolve(),
                rootEndpoint,
            );

            // Now lets change network details
            const newNetworkId = new ByteArray(32);
            newNetworkId[0] = 1;
            await networkServer1.setNetworksAttribute([{ networkId: newNetworkId, connected: false }]);
            await networkServer2.setNetworksAttribute([{ networkId: newNetworkId, connected: true }]);

            // Restore network data
            await failSafe.restoreEndpointState();

            // Check if network data is restored
            assert.deepEqual(networkServer1.getNetworksAttribute(), [{ networkId: networkId, connected: true }]);
            assert.deepEqual(networkServer2.getNetworksAttribute(), [{ networkId: networkId, connected: false }]);
        });
    });

    describe("Verify Expiry handling", () => {
        it("Expiry callback is called when failsafe expires", async () => {
            const { promise, resolver } = createPromise<void>();
            const rootEndpoint = new Endpoint([DeviceTypes.ROOT], { endpointId: EndpointNumber(0) });
            await FailSafeManager.create({} as any, undefined, 1, 100, async () => resolver(), rootEndpoint);

            await MockTime.advance(1000);

            await promise;
        });

        it("Expiry callback is called when failsafe expires after being rearmed (extended)", async () => {
            const rootEndpoint = new Endpoint([DeviceTypes.ROOT], { endpointId: EndpointNumber(0) });
            let expired = false;
            const failSafe = await FailSafeManager.create(
                {} as any,
                undefined,
                3,
                100,
                async () => {
                    expired = true;
                },
                rootEndpoint,
            );

            await MockTime.advance(1500);
            assert.equal(expired, false);
            await failSafe.reArm(undefined, 3);
            assert.equal(expired, false);
            await MockTime.advance(1500);
            assert.equal(expired, false);
            await MockTime.advance(1499);
            assert.equal(expired, false);
            await MockTime.advance(1);
            assert.equal(expired, true);
        });

        it("Expiry callback is called directly when failsafe expires after being rearmed (with 0)", async () => {
            const rootEndpoint = new Endpoint([DeviceTypes.ROOT], { endpointId: EndpointNumber(0) });
            let expired = false;
            const failSafe = await FailSafeManager.create(
                {} as any,
                undefined,
                3,
                100,
                async () => {
                    expired = true;
                },
                rootEndpoint,
            );

            await MockTime.advance(1500);
            assert.equal(expired, false);
            await failSafe.reArm(undefined, 0);
            assert.equal(expired, true);
        });

        it("Expiry callback is called when max cumulative failsafe expires", async () => {
            const rootEndpoint = new Endpoint([DeviceTypes.ROOT], { endpointId: EndpointNumber(0) });
            let expired = false;
            const failSafe = await FailSafeManager.create(
                {} as any,
                undefined,
                3,
                2,
                async () => {
                    expired = true;
                },
                rootEndpoint,
            );

            await MockTime.advance(1500);
            assert.equal(expired, false);
            await failSafe.reArm(undefined, 1);
            assert.equal(expired, false);
            await MockTime.advance(500);
            assert.equal(expired, true);
        });

        it("Expiry callback is not called when failsafe was completed", async () => {
            const rootEndpoint = new Endpoint([DeviceTypes.ROOT], { endpointId: EndpointNumber(0) });
            let expired = false;
            const failSafe = await FailSafeManager.create(
                {} as any,
                undefined,
                3,
                2,
                async () => {
                    expired = true;
                },
                rootEndpoint,
            );

            await MockTime.advance(1500);
            assert.equal(expired, false);
            failSafe.complete();
            assert.equal(expired, false);
            await MockTime.advance(1500);
            assert.equal(expired, false);
        });
    });
});
