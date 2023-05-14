import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { OperationalCredentialsCluster } from "../index.js";

import { ByteArray } from "../../util/index.js"

export type Nocs = {
    noc: ByteArray,
    icac: ByteArray | undefined
};

export type Fabrics = {
    rootPublicKey: ByteArray,
    vendorId: number,
    fabricId: any,
    nodeId: any,
    label: string,
    fabricIndex: number
};

export type RequestAttestationRequest = {
    attestationNonce: ByteArray
};

export type RequestAttestationResponse = {
    elements: ByteArray,
    signature: ByteArray
};

export type RequestCertChainRequest = {
    type: number
};

export type RequestCertChainResponse = {
    certificate: ByteArray
};

export type RequestCertSigningRequest = {
    certSigningRequestNonce: ByteArray,
    isForUpdateNOC: boolean
};

export type AddOperationalCertRequest = {
    operationalCert: ByteArray,
    intermediateCaCert: ByteArray,
    identityProtectionKey: ByteArray,
    caseAdminNode: any,
    adminVendorId: number
};

export type AddOperationalCertResponse = {
    status: number,
    fabricIndex: number,
    debugText: string
};

export type UpdateOperationalCertRequest = {
    operationalCert: ByteArray,
    intermediateCaCert: ByteArray
};

export type UpdateFabricLabelRequest = {
    label: string
};

export type RemoveFabricRequest = {
    fabricIndex: number
};

export interface OperationalCredentialsInterface {
    nocs: Nocs[];
    addNocsListener(listener: (newValue: Nocs[], oldValue: Nocs[]) => void): void;
    removeNocsListener(listener: (newValue: Nocs[], oldValue: Nocs[]) => void): void;
    
    fabrics: Fabrics[];
    addFabricsListener(listener: (newValue: Fabrics[], oldValue: Fabrics[]) => void): void;
    removeFabricsListener(listener: (newValue: Fabrics[], oldValue: Fabrics[]) => void): void;
    
    supportedFabrics: number;
    addSupportedFabricsListener(listener: (newValue: number, oldValue: number) => void): void;
    removeSupportedFabricsListener(listener: (newValue: number, oldValue: number) => void): void;
    
    commissionedFabrics: number;
    addCommissionedFabricsListener(listener: (newValue: number, oldValue: number) => void): void;
    removeCommissionedFabricsListener(listener: (newValue: number, oldValue: number) => void): void;
    
    trustedRootCertificates: ByteArray[];
    addTrustedRootCertificatesListener(listener: (newValue: ByteArray[], oldValue: ByteArray[]) => void): void;
    removeTrustedRootCertificatesListener(listener: (newValue: ByteArray[], oldValue: ByteArray[]) => void): void;
    
    currentFabricIndex: number;
    addCurrentFabricIndexListener(listener: (newValue: number, oldValue: number) => void): void;
    removeCurrentFabricIndexListener(listener: (newValue: number, oldValue: number) => void): void;
    
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
    
    sendRequestAttestation(request: RequestAttestationRequest): Promise<RequestAttestationResponse>;
    sendRequestCertChain(request: RequestCertChainRequest): Promise<RequestCertChainResponse>;
    sendRequestCertSigning(request: RequestCertSigningRequest): Promise<RequestAttestationResponse>;
    sendAddOperationalCert(request: AddOperationalCertRequest): Promise<AddOperationalCertResponse>;
    sendUpdateOperationalCert(request: UpdateOperationalCertRequest): Promise<AddOperationalCertResponse>;
    sendUpdateFabricLabel(request: UpdateFabricLabelRequest): Promise<AddOperationalCertResponse>;
    sendRemoveFabric(request: RemoveFabricRequest): Promise<AddOperationalCertResponse>;
    sendAddRootCert(request: RequestCertChainResponse): Promise<void>;
}

export const OperationalCredentialsClientImpl = ClientIfaceImpl<OperationalCredentialsInterface>(OperationalCredentialsCluster);
export const OperationalCredentialsServerImpl = ServerIfaceImpl<OperationalCredentialsInterface>(OperationalCredentialsCluster);
