import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { ThreadNetworkCommissioningCluster } from "../index.js";

import { ByteArray } from "../../util/index.js"

export type Networks = {
    networkId: ByteArray,
    connected: boolean
};

export type ScanNetworksRequest = {
    ssid: ByteArray | undefined,
    breadcrumb: any
};

export type ScanNetworksResponse = {
    networkingStatus: number,
    debugText: string,
    wiFiScanResults: {
        security: number,
        ssid: ByteArray,
        bssid: ByteArray,
        channel: number,
        wiFiBand: number,
        rssi: number
    }[],
    threadScanResults: {
        panId: number,
        extendedPanId: any,
        networkName: string,
        channel: number,
        version: number,
        extendedAddress: ByteArray,
        rssi: number,
        lqi: number
    }[]
};

export type RemoveNetworkRequest = {
    networkId: ByteArray,
    breadcrumb: any
};

export type RemoveNetworkResponse = {
    networkingStatus: number,
    debugText: string,
    networkIndex: number
};

export type ConnectNetworkResponse = {
    networkingStatus: number,
    debugText: string,
    errorValue: number | undefined
};

export type ReorderNetworkRequest = {
    networkId: ByteArray,
    networkIndex: number,
    breadcrumb: any
};

export type AddOrUpdateThreadNetworkRequest = {
    OperationalDataset: ByteArray,
    breadcrumb: any
};

export interface ThreadNetworkCommissioningInterface {
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
    
    clusterRevision: number;
    addClusterRevisionListener(listener: (newValue: number, oldValue: number) => void): void;
    removeClusterRevisionListener(listener: (newValue: number, oldValue: number) => void): void;
    
    featureMap: number;
    addFeatureMapListener(listener: (newValue: number, oldValue: number) => void): void;
    removeFeatureMapListener(listener: (newValue: number, oldValue: number) => void): void;
    
    attributeList: number[];
    addAttributeListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeAttributeListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    eventList: number[];
    addEventListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeEventListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    acceptedCommandList: number[];
    addAcceptedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeAcceptedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    generatedCommandList: number[];
    addGeneratedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeGeneratedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    scanMaxTimeSeconds?: number;
    addScanMaxTimeSecondsListener(listener: (newValue: number, oldValue: number) => void): void;
    removeScanMaxTimeSecondsListener(listener: (newValue: number, oldValue: number) => void): void;
    
    connectMaxTimeSeconds?: number;
    addConnectMaxTimeSecondsListener(listener: (newValue: number, oldValue: number) => void): void;
    removeConnectMaxTimeSecondsListener(listener: (newValue: number, oldValue: number) => void): void;
    
    sendScanNetworks(request: ScanNetworksRequest): Promise<ScanNetworksResponse>;
    sendRemoveNetwork(request: RemoveNetworkRequest): Promise<RemoveNetworkResponse>;
    sendConnectNetwork(request: RemoveNetworkRequest): Promise<ConnectNetworkResponse>;
    sendReorderNetwork(request: ReorderNetworkRequest): Promise<RemoveNetworkResponse>;
    sendAddOrUpdateThreadNetwork(request: AddOrUpdateThreadNetworkRequest): Promise<RemoveNetworkResponse>;
}

export const ThreadNetworkCommissioningClientImpl = ClientIfaceImpl<ThreadNetworkCommissioningInterface>(ThreadNetworkCommissioningCluster);
export const ThreadNetworkCommissioningServerImpl = ServerIfaceImpl<ThreadNetworkCommissioningInterface>(ThreadNetworkCommissioningCluster);
