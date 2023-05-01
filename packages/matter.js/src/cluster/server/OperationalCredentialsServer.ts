/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// TODO: Rename to NodeOperationalCredentialsServer to match with specs

import { Crypto } from "../../crypto/Crypto.js";
import { MatterDevice } from "../../MatterDevice.js";
import { SecureSession } from "../../session/SecureSession.js";
import { ByteArray } from "../../util/ByteArray.js";
import {
    CertificateChainType, OperationalCertStatus, OperationalCredentialsCluster, TlvAttestation, TlvCertSigningRequest
} from "../OperationalCredentialsCluster.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { ClusterServerHandlers } from "./ClusterServer.js";

export interface OperationalCredentialsServerConf {
    devicePrivateKey: ByteArray,
    deviceCertificate: ByteArray,
    deviceIntermediateCertificate: ByteArray,
    certificationDeclaration: ByteArray,
}

function signWithDeviceKey(conf: OperationalCredentialsServerConf, session: SecureSession<MatterDevice>, data: ByteArray) {
    return Crypto.signPkcs8(conf.devicePrivateKey, [data, session.getAttestationChallengeKey()]);
}

export const OperationalCredentialsClusterHandler: (conf: OperationalCredentialsServerConf) => ClusterServerHandlers<typeof OperationalCredentialsCluster> = (conf) => ({
    requestAttestation: async ({ request: { attestationNonce }, session }) => {
        const elements = TlvAttestation.encode({ declaration: conf.certificationDeclaration, attestationNonce, timestamp: 0 });
        return { elements: elements, signature: signWithDeviceKey(conf, session as SecureSession<MatterDevice>, elements) };
    },

    requestCertSigning: async ({ request: { certSigningRequestNonce }, session }) => {
        const certSigningRequest = session.getContext().getFabricBuilder().createCertificateSigningRequest();
        const elements = TlvCertSigningRequest.encode({ certSigningRequest, certSigningRequestNonce });
        return { elements, signature: signWithDeviceKey(conf, session as SecureSession<MatterDevice>, elements) };
    },

    requestCertChain: async ({ request: { type } }) => {
        switch (type) {
            case CertificateChainType.DeviceAttestation:
                return { certificate: conf.deviceCertificate };
            case CertificateChainType.ProductAttestationIntermediate:
                return { certificate: conf.deviceIntermediateCertificate };
            default:
                throw new Error(`Unsupported certificate type: ${type}`);
        }
    },

    addOperationalCert: async ({ request: { operationalCert, intermediateCaCert, identityProtectionKey, caseAdminNode, adminVendorId }, session }) => {
        if (!session.isSecure()) throw new Error("addOperationalCert should be called on a secure session.");
        const device = session.getContext();
        const fabricBuilder = device.getFabricBuilder();
        fabricBuilder.setOperationalCert(operationalCert);
        if (intermediateCaCert && intermediateCaCert.length > 0) fabricBuilder.setIntermediateCACert(intermediateCaCert);
        fabricBuilder.setRootVendorId(adminVendorId);
        fabricBuilder.setIdentityProtectionKey(identityProtectionKey);
        fabricBuilder.setRootNodeId(caseAdminNode);

        const fabric = await fabricBuilder.build();
        device.addFabric(fabric);

        // TODO: create ACL with caseAdminNode
        console.log("addOperationalCert success")

        return { status: OperationalCertStatus.Success, fabricIndex: fabric.fabricIndex };
    },

    getFabrics: (session) => {
        if (session === undefined || !session.isSecure()) return []; // ???
        return session.getContext().getFabrics().map(fabric => ({
            fabricId: fabric.fabricId,
            label: fabric.label,
            nodeId: fabric.nodeId,
            rootPublicKey: fabric.rootPublicKey,
            vendorId: fabric.rootVendorId,
            // TODO: this is a hack. Fabric-scoped data need to be handled automatically
            fabricIndex: fabric.fabricIndex,
        }));
    },

    getCurrentFabricIndex: (session) => {
        if (session === undefined || !session.isSecure()) return FabricIndex.NO_FABRIC;
        return (session as SecureSession<MatterDevice>).getFabric()?.fabricIndex ?? FabricIndex.NO_FABRIC;
    },

    updateOperationalCert: async () => {
        throw new Error("Not implemented");
    },

    updateFabricLabel: async ({ request: { label }, session }) => {
        if (!session.isSecure()) throw new Error("updateOperationalCert should be called on a secure session.");
        const secureSession = session as SecureSession<MatterDevice>;
        const fabric = secureSession.getFabric();
        if (fabric === undefined) throw new Error("updateOperationalCert on a session linked to a fabric.");

        fabric.setLabel(label);

        return { status: OperationalCertStatus.Success };
    },

    removeFabric: async ({ request: { fabricIndex }, session }) => {
        const device = session.getContext();

        const fabric = device.getFabricByIndex(fabricIndex);

        if (fabric === undefined) {
            return { status: OperationalCertStatus.InvalidFabricIndex };
        }

        fabric.remove();
        return { status: OperationalCertStatus.Success };
    },

    addRootCert: async ({ request: { certificate }, session }) => {
        session.getContext().getFabricBuilder().setRootCert(certificate);
    },
});
