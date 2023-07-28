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
import { OperationalCredentials, OperationalCredentialsCluster } from "../definitions/OperationalCredentialsCluster.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { ClusterServerHandlers } from "./ClusterServer.js";
import { TlvField, TlvObject, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { TlvUInt32 } from "../../tlv/TlvNumber.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";

export interface OperationalCredentialsServerConf {
    devicePrivateKey: ByteArray,
    deviceCertificate: ByteArray,
    deviceIntermediateCertificate: ByteArray,
    certificationDeclaration: ByteArray,
}

/** @see {@link MatterCoreSpecificationV1_1} § 11.17.5.4 */
export const TlvAttestation = TlvObject({
    declaration: TlvField(1, TlvByteString),
    attestationNonce: TlvField(2, TlvByteString.bound({ length: 32 })),
    timestamp: TlvField(3, TlvUInt32), // TODO: check actual max length in specs
    firmwareInfo: TlvOptionalField(4, TlvByteString),
});

/** @see {@link MatterCoreSpecificationV1_1} § 11.17.5.6 */
export const TlvCertSigningRequest = TlvObject({
    certSigningRequest: TlvField(1, TlvByteString),
    csrNonce: TlvField(2, TlvByteString.bound({ length: 32 })),
    vendorReserved1: TlvOptionalField(3, TlvByteString),
    vendorReserved2: TlvOptionalField(4, TlvByteString),
    vendorReserved3: TlvOptionalField(5, TlvByteString),
});

function signWithDeviceKey(conf: OperationalCredentialsServerConf, session: SecureSession<MatterDevice>, data: ByteArray) {
    return Crypto.signPkcs8(conf.devicePrivateKey, [data, session.getAttestationChallengeKey()]);
}

export const OperationalCredentialsClusterHandler: (conf: OperationalCredentialsServerConf) => ClusterServerHandlers<typeof OperationalCredentialsCluster> = (conf) => ({
    attestationRequest: async ({ request: { attestationNonce }, session }) => {
        const elements = TlvAttestation.encode({ declaration: conf.certificationDeclaration, attestationNonce, timestamp: 0 });
        return { attestationElements: elements, attestationSignature: signWithDeviceKey(conf, session as SecureSession<MatterDevice>, elements) };
    },

    csrRequest: async ({ request: { csrNonce }, session }) => {
        const certSigningRequest = session.getContext().getFabricBuilder().createCertificateSigningRequest();
        const nocsrElements = TlvCertSigningRequest.encode({ certSigningRequest, csrNonce });
        return { nocsrElements, attestationSignature: signWithDeviceKey(conf, session as SecureSession<MatterDevice>, nocsrElements) };
    },

    certificateChainRequest: async ({ request: { certificateType } }) => {
        switch (certificateType) {
            case OperationalCredentials.CertificateChainType.DacCertificate:
                return { certificate: conf.deviceCertificate };
            case OperationalCredentials.CertificateChainType.PaiCertificate:
                return { certificate: conf.deviceIntermediateCertificate };
            default:
                throw new Error(`Unsupported certificate type: ${certificateType}`);
        }
    },

    addNoc: async ({ request: { nocValue, icacValue, ipkValue, caseAdminSubject, adminVendorId }, attributes: { nocs, commissionedFabrics, fabrics, trustedRootCertificates }, session }) => {
        if (!session.isSecure()) throw new Error("addOperationalCert should be called on a secure session.");
        const device = session.getContext();
        const fabricBuilder = device.getFabricBuilder();
        fabricBuilder.setOperationalCert(nocValue);
        if (icacValue && icacValue.length > 0) fabricBuilder.setIntermediateCACert(icacValue);
        fabricBuilder.setRootVendorId(adminVendorId);
        fabricBuilder.setIdentityProtectionKey(ipkValue);
        fabricBuilder.setRootNodeId(caseAdminSubject);

        const fabric = await fabricBuilder.build();
        device.addFabric(fabric);

        // Update connected attributes
        nocs.update(session as SecureSession<MatterDevice>);
        commissionedFabrics.update(session as SecureSession<MatterDevice>);
        fabrics.update(session as SecureSession<MatterDevice>);
        trustedRootCertificates.update(session as SecureSession<MatterDevice>);

        // TODO: create ACL with caseAdminNode
        console.log("addOperationalCert success")

        return { statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok, fabricIndex: fabric.fabricIndex };
    },

    fabricsAttributeGetter: ({ session, isFabricFiltered }) => {
        if (session === undefined || !session.isSecure()) return []; // ???
        const fabrics = isFabricFiltered ? [session.getAccessingFabric()] : session.getContext().getFabrics();

        return fabrics.map(fabric => ({
            fabricId: fabric.fabricId,
            label: fabric.label,
            nodeId: fabric.nodeId,
            rootPublicKey: fabric.rootPublicKey,
            vendorId: fabric.rootVendorId,
            fabricIndex: fabric.fabricIndex,
        }));
    },

    nocsAttributeGetter: ({ session }) => {
        if (session === undefined || !session.isSecure()) return []; // ???
        return session.getContext().getFabrics().map(fabric => ({
            noc: fabric.operationalCert,
            icac: fabric.intermediateCACert ?? null
        }));
    },

    commissionedFabricsAttributeGetter: ({ session }) => {
        if (session === undefined || !session.isSecure()) return 0; // ???
        return session.getContext().getFabrics().length;
    },

    trustedRootCertificatesAttributeGetter: ({ session }) => {
        if (session === undefined || !session.isSecure()) return []; // ???
        return session.getContext().getFabrics().map(fabric => fabric.rootCert);
    },

    currentFabricIndexAttributeGetter: ({ session }) => {
        if (session === undefined || !session.isSecure()) return FabricIndex.NO_FABRIC;
        return (session as SecureSession<MatterDevice>).getFabric()?.fabricIndex ?? FabricIndex.NO_FABRIC;
    },

    updateNoc: async () => {
        throw new Error("Not implemented");
    },

    updateFabricLabel: async ({ request: { label }, attributes: { fabrics }, session }) => {
        if (!session.isSecure()) throw new Error("updateOperationalCert should be called on a secure session.");
        const secureSession = session as SecureSession<MatterDevice>;
        const fabric = secureSession.getFabric();
        if (fabric === undefined) throw new Error("updateOperationalCert on a session linked to a fabric.");

        fabric.setLabel(label);

        fabrics.update(session as SecureSession<MatterDevice>);

        return { statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok };
    },

    removeFabric: async ({ request: { fabricIndex }, attributes: { nocs, commissionedFabrics, fabrics, trustedRootCertificates }, session }) => {
        const device = session.getContext();

        const fabric = device.getFabricByIndex(fabricIndex);

        if (fabric === undefined) {
            return { statusCode: OperationalCredentials.NodeOperationalCertStatus.InvalidFabricIndex, debugText: `Fabric ${fabricIndex.index} not found` };
        }

        fabric.remove();

        nocs.update(session as SecureSession<MatterDevice>);
        commissionedFabrics.update(session as SecureSession<MatterDevice>);
        fabrics.update(session as SecureSession<MatterDevice>);
        trustedRootCertificates.update(session as SecureSession<MatterDevice>);

        return { statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok, fabricIndex, debugText: "Fabric removed" };
    },

    addTrustedRootCertificate: async ({ request: { rootCaCertificate }, session }) => {
        session.getContext().getFabricBuilder().setRootCert(rootCaCertificate);
    },
});
