import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { AdminCommissioningCluster } from "../index.js";

import { ByteArray } from "../../util/index.js"

export type OpenCommissioningWindowRequest = {
    commissioningTimeout: number,
    pakePasscodeVerifier: ByteArray,
    discriminator: number,
    iterations: number,
    salt: ByteArray
};

export interface AdminCommissioningInterface {
    windowStatus: number;
    addWindowStatusListener(listener: (newValue: number, oldValue: number) => void): void;
    removeWindowStatusListener(listener: (newValue: number, oldValue: number) => void): void;
    
    adminFabricIndex: number | undefined;
    addAdminFabricIndexListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeAdminFabricIndexListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    adminVendorId: number | undefined;
    addAdminVendorIdListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeAdminVendorIdListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
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
    
    sendOpenCommissioningWindow(request: OpenCommissioningWindowRequest): Promise<void>;
    sendRevokeCommissioning(request: any): Promise<void>;
}

export const AdminCommissioningClientImpl = ClientIfaceImpl<AdminCommissioningInterface>(AdminCommissioningCluster);
export const AdminCommissioningServerImpl = ServerIfaceImpl<AdminCommissioningInterface>(AdminCommissioningCluster);
