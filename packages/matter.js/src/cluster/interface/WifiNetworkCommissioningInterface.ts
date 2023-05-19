/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WifiNetworkCommissioningCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { ByteArray } from "../../util/index.js";

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

export type State = {
    readonly maxNetworks: number;
    readonly networks: Networks[];
    readonly interfaceEnabled: boolean;
    readonly lastNetworkingStatus: number | undefined;
    readonly lastNetworkId: ByteArray | undefined;
    readonly lastConnectErrorValue: number | undefined;
    readonly scanMaxTimeSeconds?: number;
    readonly connectMaxTimeSeconds?: number;
}

export interface Common {
    invokeScanNetworks(request: ScanNetworksRequest): Promise<ScanNetworksResponse>;
    invokeRemoveNetwork(request: RemoveNetworkRequest): Promise<RemoveNetworkResponse>;
    invokeConnectNetwork(request: ConnectNetworkRequest): Promise<ConnectNetworkResponse>;
    invokeReorderNetwork(request: ReorderNetworkRequest): Promise<ReorderNetworkResponse>;
    invokeAddOrUpdateWiFiNetwork(request: AddOrUpdateWiFiNetworkRequest): Promise<AddOrUpdateWiFiNetworkResponse>;
}

export const WifiNetworkCommissioning: ClusterInterface<State, Common, Common> = {
    definition: WifiNetworkCommissioningCluster
}
