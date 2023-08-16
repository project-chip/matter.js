/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// TODO: Rename to NodeOperationalCredentialsServer to match with specs

import { MatterFlowError, NotImplementedError } from "../../common/MatterError.js";
import { Crypto } from "../../crypto/Crypto.js";
import { PrivateKey } from "../../crypto/Key.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { Logger } from "../../log/Logger.js";
import { MatterDevice } from "../../MatterDevice.js";
import { assertSecureSession, SecureSession } from "../../session/SecureSession.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvField, TlvObject, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { ByteArray } from "../../util/ByteArray.js";
import { BasicInformation } from "../definitions/BasicInformationCluster.js";
import { OperationalCredentials } from "../definitions/OperationalCredentialsCluster.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

const logger = Logger.get("OperationalCredentialsServer");

export interface OperationalCredentialsServerConf {
    devicePrivateKey: ByteArray;
    deviceCertificate: ByteArray;
    deviceIntermediateCertificate: ByteArray;
    certificationDeclaration: ByteArray;
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

function signWithDeviceKey(
    conf: OperationalCredentialsServerConf,
    session: SecureSession<MatterDevice>,
    data: ByteArray,
) {
    return Crypto.sign(PrivateKey(conf.devicePrivateKey), [data, session.getAttestationChallengeKey()]);
}

export const OperationalCredentialsClusterHandler: (
    conf: OperationalCredentialsServerConf,
) => ClusterServerHandlers<typeof OperationalCredentials.Cluster> = conf => ({
    attestationRequest: async ({ request: { attestationNonce }, session }) => {
        assertSecureSession(session);
        const elements = TlvAttestation.encode({
            declaration: conf.certificationDeclaration,
            attestationNonce,
            timestamp: 0,
        });
        return { attestationElements: elements, attestationSignature: signWithDeviceKey(conf, session, elements) };
    },

    csrRequest: async ({ request: { csrNonce }, session }) => {
        assertSecureSession(session);
        const certSigningRequest = session.getContext().getFabricBuilder().createCertificateSigningRequest();
        const nocsrElements = TlvCertSigningRequest.encode({ certSigningRequest, csrNonce });
        return { nocsrElements, attestationSignature: signWithDeviceKey(conf, session, nocsrElements) };
    },

    certificateChainRequest: async ({ request: { certificateType } }) => {
        switch (certificateType) {
            case OperationalCredentials.CertificateChainType.DacCertificate:
                return { certificate: conf.deviceCertificate };
            case OperationalCredentials.CertificateChainType.PaiCertificate:
                return { certificate: conf.deviceIntermediateCertificate };
            default:
                throw new MatterFlowError(`Unsupported certificate type: ${certificateType}`);
        }
    },

    addNoc: async ({
        request: { nocValue, icacValue, ipkValue, caseAdminSubject, adminVendorId },
        attributes: { nocs, commissionedFabrics, fabrics, trustedRootCertificates },
        session,
    }) => {
        if (!session.isSecure()) throw new MatterFlowError("addOperationalCert should be called on a secure session.");
        const device = session.getContext();
        const fabricBuilder = device.getFabricBuilder();
        fabricBuilder.setOperationalCert(nocValue);
        if (icacValue && icacValue.length > 0) fabricBuilder.setIntermediateCACert(icacValue);
        fabricBuilder.setRootVendorId(adminVendorId);
        fabricBuilder.setIdentityProtectionKey(ipkValue);
        fabricBuilder.setRootNodeId(caseAdminSubject);

        const fabric = await fabricBuilder.build();
        await device.addFabric(fabric);

        assertSecureSession(session);
        // Update connected attributes
        nocs.updated(session);
        commissionedFabrics.updated(session);
        fabrics.updated(session);
        trustedRootCertificates.updated(session);

        // TODO: create ACL with caseAdminNode
        logger.info("addOperationalCert success");

        return { statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok, fabricIndex: fabric.fabricIndex };
    },

    fabricsAttributeGetter: ({ session, isFabricFiltered }) => {
        if (session === undefined || !session.isSecure()) return []; // ???
        const fabrics = isFabricFiltered ? [session.getAssociatedFabric()] : session.getContext().getFabrics();

        return fabrics.map(fabric => ({
            fabricId: fabric.fabricId,
            label: fabric.label,
            nodeId: fabric.nodeId,
            rootPublicKey: fabric.rootPublicKey,
            vendorId: fabric.rootVendorId,
            fabricIndex: fabric.fabricIndex,
        }));
    },

    nocsAttributeGetter: ({ session, isFabricFiltered }) => {
        if (session === undefined || !session.isSecure()) return []; // ???
        const fabrics = isFabricFiltered ? [session.getAssociatedFabric()] : session.getContext().getFabrics();
        return fabrics.map(fabric => ({
            noc: fabric.operationalCert,
            icac: fabric.intermediateCACert ?? null,
            fabricIndex: fabric.fabricIndex,
        }));
    },

    commissionedFabricsAttributeGetter: ({ session }) => {
        if (session === undefined || !session.isSecure()) return 0; // ???
        return session.getContext().getFabrics().length;
    },

    trustedRootCertificatesAttributeGetter: ({ session, isFabricFiltered }) => {
        if (session === undefined || !session.isSecure()) return []; // ???
        const fabrics = isFabricFiltered ? [session.getAssociatedFabric()] : session.getContext().getFabrics();
        return fabrics.map(fabric => fabric.rootCert);
    },

    currentFabricIndexAttributeGetter: ({ session }) => {
        if (session === undefined || !session.isSecure()) return FabricIndex.NO_FABRIC;
        assertSecureSession(session);
        return session.getFabric()?.fabricIndex ?? FabricIndex.NO_FABRIC;
    },

    updateNoc: async () => {
        throw new NotImplementedError("Not implemented");
    },

    updateFabricLabel: async ({ request: { label }, attributes: { fabrics }, session }) => {
        assertSecureSession(session, "updateOperationalCert should be called on a secure session.");
        const fabric = session.getFabric();
        if (fabric === undefined) throw new MatterFlowError("updateOperationalCert on a session linked to a fabric.");

        fabric.setLabel(label);

        fabrics.updated(session);

        return { statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok };
    },

    removeFabric: async ({
        request: { fabricIndex },
        attributes: { nocs, commissionedFabrics, fabrics, trustedRootCertificates },
        session,
        endpoint,
    }) => {
        const device = session.getContext();

        const fabric = device.getFabricByIndex(fabricIndex);

        if (fabric === undefined) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.InvalidFabricIndex,
                debugText: `Fabric ${fabricIndex} not found`,
            };
        }

        const basicInformationCluster = endpoint.getClusterServer(BasicInformation.Cluster);
        basicInformationCluster?.triggerLeaveEvent?.({ fabricIndex });

        await fabric.remove();

        assertSecureSession(session);
        nocs.updated(session);
        commissionedFabrics.updated(session);
        fabrics.updated(session);
        trustedRootCertificates.updated(session);

        return {
            statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok,
            fabricIndex,
            debugText: "Fabric removed",
        };
    },

    addTrustedRootCertificate: async ({ request: { rootCaCertificate }, session }) => {
        session.getContext().getFabricBuilder().setRootCert(rootCaCertificate);
    },
});
