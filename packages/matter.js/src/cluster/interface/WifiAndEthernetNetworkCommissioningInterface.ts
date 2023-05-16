/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { WifiAndEthernetNetworkCommissioningCluster } from "../index.js";
import { ByteArray } from "../../util/index.js"

import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type Networks = TypeFromSchema<typeof WifiAndEthernetNetworkCommissioningCluster.attributes.networks.schema>;

type ScanNetworksRequest = TypeFromSchema<typeof WifiAndEthernetNetworkCommissioningCluster.commands.scanNetworks.requestSchema>;

type ScanNetworksResponse = TypeFromSchema<typeof WifiAndEthernetNetworkCommissioningCluster.commands.scanNetworks.responseSchema>;

type RemoveNetworkRequest = TypeFromSchema<typeof WifiAndEthernetNetworkCommissioningCluster.commands.removeNetwork.requestSchema>;

type RemoveNetworkResponse = TypeFromSchema<typeof WifiAndEthernetNetworkCommissioningCluster.commands.removeNetwork.responseSchema>;

type ConnectNetworkRequest = TypeFromSchema<typeof WifiAndEthernetNetworkCommissioningCluster.commands.connectNetwork.requestSchema>;

type ConnectNetworkResponse = TypeFromSchema<typeof WifiAndEthernetNetworkCommissioningCluster.commands.connectNetwork.responseSchema>;

type ReorderNetworkRequest = TypeFromSchema<typeof WifiAndEthernetNetworkCommissioningCluster.commands.reorderNetwork.requestSchema>;

type ReorderNetworkResponse = TypeFromSchema<typeof WifiAndEthernetNetworkCommissioningCluster.commands.reorderNetwork.responseSchema>;

type AddOrUpdateWiFiNetworkRequest = TypeFromSchema<typeof WifiAndEthernetNetworkCommissioningCluster.commands.addOrUpdateWiFiNetwork.requestSchema>;

type AddOrUpdateWiFiNetworkResponse = TypeFromSchema<typeof WifiAndEthernetNetworkCommissioningCluster.commands.addOrUpdateWiFiNetwork.responseSchema>;

export interface WifiAndEthernetNetworkCommissioningInterface {
    maxNetworks: number;
    addMaxNetworksListener(listener: (newValue: number, oldValue: number) => void): void;
    removeMaxNetworksListener(listener: (newValue: number, oldValue: number) => void): void;

    networks: Networks[];
    addNetworksListener(listener: (newValue: Networks[], oldValue: Networks[]) => void): void;
    removeNetworksListener(listener: (newValue: Networks[], oldValue: Networks[]) => void): void;

    interfaceEnabled: boolean;
    setInterfaceEnabled(value: boolean): Promise<void>;
    addInterfaceEnabledListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeInterfaceEnabledListener(listener: (newValue: boolean, oldValue: boolean) => void): void;

    lastNetworkingStatus: number | undefined;
    addLastNetworkingStatusListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeLastNetworkingStatusListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    lastNetworkId: ByteArray | undefined;
    addLastNetworkIdListener(listener: (newValue: ByteArray | undefined, oldValue: ByteArray | undefined) => void): void;
    removeLastNetworkIdListener(listener: (newValue: ByteArray | undefined, oldValue: ByteArray | undefined) => void): void;

    lastConnectErrorValue: number | undefined;
    addLastConnectErrorValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeLastConnectErrorValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    scanMaxTimeSeconds?: number;
    addScanMaxTimeSecondsListener(listener: (newValue: number, oldValue: number) => void): void;
    removeScanMaxTimeSecondsListener(listener: (newValue: number, oldValue: number) => void): void;

    connectMaxTimeSeconds?: number;
    addConnectMaxTimeSecondsListener(listener: (newValue: number, oldValue: number) => void): void;
    removeConnectMaxTimeSecondsListener(listener: (newValue: number, oldValue: number) => void): void;

    sendScanNetworks(request: ScanNetworksRequest): Promise<ScanNetworksResponse>;
    sendRemoveNetwork(request: RemoveNetworkRequest): Promise<RemoveNetworkResponse>;
    sendConnectNetwork(request: ConnectNetworkRequest): Promise<ConnectNetworkResponse>;
    sendReorderNetwork(request: ReorderNetworkRequest): Promise<ReorderNetworkResponse>;
    sendAddOrUpdateWiFiNetwork(request: AddOrUpdateWiFiNetworkRequest): Promise<AddOrUpdateWiFiNetworkResponse>;
}

export const WifiAndEthernetNetworkCommissioningClientImpl = ClientIfaceImpl<WifiAndEthernetNetworkCommissioningInterface>(WifiAndEthernetNetworkCommissioningCluster);
export const WifiAndEthernetNetworkCommissioningServerImpl = ServerIfaceImpl<WifiAndEthernetNetworkCommissioningInterface>(WifiAndEthernetNetworkCommissioningCluster);
