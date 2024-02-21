/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkCommissioning } from "@project-chip/matter-node.js/cluster";
import { ByteArray } from "@project-chip/matter-node.js/util";
import { GeneralCommissioningBehavior } from "@project-chip/matter.js/behavior/definitions/general-commissioning";
import {
    AddOrUpdateThreadNetworkRequest,
    ConnectNetworkRequest,
    NetworkCommissioningBehavior,
    RemoveNetworkRequest,
    ReorderNetworkRequest,
    ScanNetworksRequest,
    ScanNetworksResponse,
} from "@project-chip/matter.js/behavior/definitions/network-commissioning";

const firstNetworkId = new ByteArray(32);

/**
 * This represents a Dummy version of a Wifi Network Commissioning Cluster Server without real Wifi related logic, beside
 * returning some values provided as CLI parameters. This dummy implementation is only there for tests/as showcase for BLE
 * commissioning of a device.
 */
export class DummyThreadNetworkCommissioningServer extends NetworkCommissioningBehavior.with(
    NetworkCommissioning.Feature.ThreadNetworkInterface,
) {
    override scanNetworks({ breadcrumb }: ScanNetworksRequest): ScanNetworksResponse {
        console.log(`---> scanNetworks called on NetworkCommissioning cluster: ${breadcrumb}`);

        // Simulate successful scan
        if (breadcrumb !== undefined) {
            const generalCommissioningCluster = this.agent.get(GeneralCommissioningBehavior);
            generalCommissioningCluster.state.breadcrumb = breadcrumb;
        }

        const networkingStatus = NetworkCommissioning.NetworkCommissioningStatus.Success;
        this.state.lastNetworkingStatus = networkingStatus;

        return {
            networkingStatus,
            threadScanResults: [
                {
                    panId: this.endpoint.env.vars.number("ble.thread.panId"),
                    extendedPanId: this.endpoint.env.vars.number("ble.thread.extendedPanId"),
                    networkName: this.endpoint.env.vars.string("ble.thread.networkName"),
                    channel: this.endpoint.env.vars.number("ble.thread.channel"),
                    version: 385,
                    extendedAddress: ByteArray.fromString("00:00:00:00:00:00"),
                    rssi: -50,
                    lqi: 0,
                },
            ],
        };
    }

    override addOrUpdateThreadNetwork({ operationalDataset, breadcrumb }: AddOrUpdateThreadNetworkRequest) {
        console.log(
            `---> addOrUpdateWiFiNetwork called on NetworkCommissioning cluster: ${operationalDataset.toHex()} ${breadcrumb}`,
        );

        this.session.getContext().assertFailSafeArmed("Failsafe timer needs to be armed to add or update networks.");

        // Simulate successful add or update
        if (breadcrumb !== undefined) {
            const generalCommissioningCluster = this.agent.get(GeneralCommissioningBehavior);
            generalCommissioningCluster.state.breadcrumb = breadcrumb;
        }

        const networkingStatus = NetworkCommissioning.NetworkCommissioningStatus.Success;
        this.state.lastNetworkingStatus = networkingStatus;
        this.state.lastNetworkId = firstNetworkId;

        return {
            networkingStatus,
            networkIndex: 0,
        };
    }

    override removeNetwork({ networkId, breadcrumb }: RemoveNetworkRequest) {
        console.log(`---> removeNetwork called on NetworkCommissioning cluster: ${networkId.toHex()} ${breadcrumb}`);

        this.session.getContext().assertFailSafeArmed("Failsafe timer needs to be armed to add or update networks.");

        // Simulate successful add or update
        if (breadcrumb !== undefined) {
            const generalCommissioningCluster = this.agent.get(GeneralCommissioningBehavior);
            generalCommissioningCluster.state.breadcrumb = breadcrumb;
        }

        const networkingStatus = NetworkCommissioning.NetworkCommissioningStatus.Success;
        this.state.lastNetworkingStatus = networkingStatus;
        this.state.lastNetworkId = firstNetworkId;

        return {
            networkingStatus,
            networkIndex: 0,
        };
    }

    override async connectNetwork({ networkId, breadcrumb }: ConnectNetworkRequest) {
        console.log(`---> connectNetwork called on NetworkCommissioning cluster: ${networkId.toHex()} ${breadcrumb}`);

        this.session.getContext().assertFailSafeArmed("Failsafe timer needs to be armed to add or update networks.");

        // Simulate successful connection
        if (breadcrumb !== undefined) {
            const generalCommissioningCluster = this.agent.get(GeneralCommissioningBehavior);
            generalCommissioningCluster.state.breadcrumb = breadcrumb;
        }

        this.state.networks[0].connected = true;

        const networkingStatus = NetworkCommissioning.NetworkCommissioningStatus.Success;
        this.state.lastNetworkingStatus = networkingStatus;
        this.state.lastNetworkId = firstNetworkId;
        this.state.lastConnectErrorValue = null;

        // Announce operational in IP network
        const device = this.session.getContext();
        await device.startAnnouncement();

        return {
            networkingStatus,
            errorValue: null,
        };
    }

    override reorderNetwork({ networkId, networkIndex, breadcrumb }: ReorderNetworkRequest) {
        console.log(
            `---> reorderNetwork called on NetworkCommissioning cluster: ${networkId.toHex()} ${networkIndex} ${breadcrumb}`,
        );

        // Simulate successful connection
        if (breadcrumb !== undefined) {
            const generalCommissioningCluster = this.agent.get(GeneralCommissioningBehavior);
            generalCommissioningCluster.state.breadcrumb = breadcrumb;
        }

        const networkingStatus = NetworkCommissioning.NetworkCommissioningStatus.Success;
        this.state.lastNetworkingStatus = networkingStatus;

        return {
            networkingStatus,
            networkIndex: 0,
        };
    }
}
