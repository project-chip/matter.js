/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { OperationalCredentialsCluster } from "../index.js";
import { ByteArray } from "../../util/index.js"

import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type Nocs = TypeFromSchema<typeof OperationalCredentialsCluster.attributes.nocs.schema>;

type Fabrics = TypeFromSchema<typeof OperationalCredentialsCluster.attributes.fabrics.schema>;

type RequestAttestationRequest = TypeFromSchema<typeof OperationalCredentialsCluster.commands.requestAttestation.requestSchema>;

type RequestAttestationResponse = TypeFromSchema<typeof OperationalCredentialsCluster.commands.requestAttestation.responseSchema>;

type RequestCertChainRequest = TypeFromSchema<typeof OperationalCredentialsCluster.commands.requestCertChain.requestSchema>;

type RequestCertChainResponse = TypeFromSchema<typeof OperationalCredentialsCluster.commands.requestCertChain.responseSchema>;

type RequestCertSigningRequest = TypeFromSchema<typeof OperationalCredentialsCluster.commands.requestCertSigning.requestSchema>;

type RequestCertSigningResponse = TypeFromSchema<typeof OperationalCredentialsCluster.commands.requestCertSigning.responseSchema>;

type AddOperationalCertRequest = TypeFromSchema<typeof OperationalCredentialsCluster.commands.addOperationalCert.requestSchema>;

type AddOperationalCertResponse = TypeFromSchema<typeof OperationalCredentialsCluster.commands.addOperationalCert.responseSchema>;

type UpdateOperationalCertRequest = TypeFromSchema<typeof OperationalCredentialsCluster.commands.updateOperationalCert.requestSchema>;

type UpdateOperationalCertResponse = TypeFromSchema<typeof OperationalCredentialsCluster.commands.updateOperationalCert.responseSchema>;

type UpdateFabricLabelRequest = TypeFromSchema<typeof OperationalCredentialsCluster.commands.updateFabricLabel.requestSchema>;

type UpdateFabricLabelResponse = TypeFromSchema<typeof OperationalCredentialsCluster.commands.updateFabricLabel.responseSchema>;

type RemoveFabricRequest = TypeFromSchema<typeof OperationalCredentialsCluster.commands.removeFabric.requestSchema>;

type RemoveFabricResponse = TypeFromSchema<typeof OperationalCredentialsCluster.commands.removeFabric.responseSchema>;

type AddRootCertRequest = TypeFromSchema<typeof OperationalCredentialsCluster.commands.addRootCert.requestSchema>;

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

    sendRequestAttestation(request: RequestAttestationRequest): Promise<RequestAttestationResponse>;
    sendRequestCertChain(request: RequestCertChainRequest): Promise<RequestCertChainResponse>;
    sendRequestCertSigning(request: RequestCertSigningRequest): Promise<RequestCertSigningResponse>;
    sendAddOperationalCert(request: AddOperationalCertRequest): Promise<AddOperationalCertResponse>;
    sendUpdateOperationalCert(request: UpdateOperationalCertRequest): Promise<UpdateOperationalCertResponse>;
    sendUpdateFabricLabel(request: UpdateFabricLabelRequest): Promise<UpdateFabricLabelResponse>;
    sendRemoveFabric(request: RemoveFabricRequest): Promise<RemoveFabricResponse>;
    sendAddRootCert(request: AddRootCertRequest): Promise<void>;
}

export const OperationalCredentialsClientImpl = ClientIfaceImpl<OperationalCredentialsInterface>(OperationalCredentialsCluster);
export const OperationalCredentialsServerImpl = ServerIfaceImpl<OperationalCredentialsInterface>(OperationalCredentialsCluster);
