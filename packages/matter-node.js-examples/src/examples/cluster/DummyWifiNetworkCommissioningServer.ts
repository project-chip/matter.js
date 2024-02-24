/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkCommissioning } from "@project-chip/matter-node.js/cluster";
import { ByteArray } from "@project-chip/matter-node.js/util";
import { GeneralCommissioningBehavior } from "@project-chip/matter.js/behavior/definitions/general-commissioning";
import {
    AddOrUpdateWiFiNetworkRequest,
    ConnectNetworkRequest,
    NetworkCommissioningBehavior,
    RemoveNetworkRequest,
    ReorderNetworkRequest,
    ScanNetworksRequest,
} from "@project-chip/matter.js/behavior/definitions/network-commissioning";

const firstNetworkId = new ByteArray(32);

/**
 * This represents a Dummy version of a Wifi Network Commissioning Cluster Server without real Wifi related logic, beside
 * returning some values provided as CLI parameters. This dummy implementation is only there for tests/as showcase for BLE
 * commissioning of a device.
 */
export class DummyWifiNetworkCommissioningServer extends NetworkCommissioningBehavior.with(
    NetworkCommissioning.Feature.WiFiNetworkInterface,
) {
    override scanNetworks({ ssid, breadcrumb }: ScanNetworksRequest) {
        console.log(`---> scanNetworks called on NetworkCommissioning cluster: ${ssid?.toHex()} ${breadcrumb}`);

        // Simulate successful scan
        if (breadcrumb !== undefined) {
            const generalCommissioningCluster = this.agent.get(GeneralCommissioningBehavior);
            generalCommissioningCluster.state.breadcrumb = breadcrumb;
        }

        const networkingStatus = NetworkCommissioning.NetworkCommissioningStatus.Success;
        this.state.lastNetworkingStatus = networkingStatus;

        return {
            networkingStatus,
            wiFiScanResults: [
                {
                    security: {
                        unencrypted: false,
                        wep: false,
                        wpaPersonal: false,
                        wpa2Personal: true,
                        wpa3Personal: true,
                    },
                    ssid: ssid || ByteArray.fromString(this.endpoint.env.vars.get("ble.wifi.scanSsid") ?? "TestSSID"), // Set a valid existing local Wi-Fi SSID here
                    bssid: ByteArray.fromString(
                        this.endpoint.env.vars.get("ble.wifi.scanBssid") ?? "00:00:00:00:00:00",
                    ),
                    channel: 1,
                },
            ],
        };
    }

    override addOrUpdateWiFiNetwork({ ssid, credentials, breadcrumb }: AddOrUpdateWiFiNetworkRequest) {
        console.log(
            `---> addOrUpdateWiFiNetwork called on NetworkCommissioning cluster: ${ssid.toHex()} ${credentials.toHex()} ${breadcrumb}`,
        );

        this.session.context.assertFailSafeArmed("Failsafe timer needs to be armed to add or update networks.");

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

        this.session.context.assertFailSafeArmed("Failsafe timer needs to be armed to add or update networks.");

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

        this.session.context.assertFailSafeArmed("Failsafe timer needs to be armed to add or update networks.");

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
        const device = this.session.context;
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
