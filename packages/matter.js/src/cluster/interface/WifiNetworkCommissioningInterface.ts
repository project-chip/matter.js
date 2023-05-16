/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { WifiNetworkCommissioningCluster } from "../index.js";
import { ByteArray } from "../../util/index.js"

import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type Networks = TypeFromSchema<typeof WifiNetworkCommissioningCluster.attributes.networks.schema>;

type ScanNetworksRequest = TypeFromSchema<typeof WifiNetworkCommissioningCluster.commands.scanNetworks.requestSchema>;

type ScanNetworksResponse = TypeFromSchema<typeof WifiNetworkCommissioningCluster.commands.scanNetworks.responseSchema>;

type RemoveNetworkRequest = TypeFromSchema<typeof WifiNetworkCommissioningCluster.commands.removeNetwork.requestSchema>;

type RemoveNetworkResponse = TypeFromSchema<typeof WifiNetworkCommissioningCluster.commands.removeNetwork.responseSchema>;

type ConnectNetworkRequest = TypeFromSchema<typeof WifiNetworkCommissioningCluster.commands.connectNetwork.requestSchema>;

type ConnectNetworkResponse = TypeFromSchema<typeof WifiNetworkCommissioningCluster.commands.connectNetwork.responseSchema>;

type ReorderNetworkRequest = TypeFromSchema<typeof WifiNetworkCommissioningCluster.commands.reorderNetwork.requestSchema>;

type ReorderNetworkResponse = TypeFromSchema<typeof WifiNetworkCommissioningCluster.commands.reorderNetwork.responseSchema>;

type AddOrUpdateWiFiNetworkRequest = TypeFromSchema<typeof WifiNetworkCommissioningCluster.commands.addOrUpdateWiFiNetwork.requestSchema>;

type AddOrUpdateWiFiNetworkResponse = TypeFromSchema<typeof WifiNetworkCommissioningCluster.commands.addOrUpdateWiFiNetwork.responseSchema>;

export interface WifiNetworkCommissioningInterface {
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

export const WifiNetworkCommissioningClientImpl = ClientIfaceImpl<WifiNetworkCommissioningInterface>(WifiNetworkCommissioningCluster);
export const WifiNetworkCommissioningServerImpl = ServerIfaceImpl<WifiNetworkCommissioningInterface>(WifiNetworkCommissioningCluster);
