/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel, Attribute, Cluster, Command, TlvNoResponse } from "./Cluster.js";
import { TlvField, TlvObject, TlvOptionalField } from "../tlv/TlvObject.js";
import { TlvByteString, TlvString, TlvString32max } from "../tlv/TlvString.js";
import { TlvVendorId } from "../datatype/VendorId.js";
import { TlvFabricId } from "../datatype/FabricId.js";
import { TlvNodeId } from "../datatype/NodeId.js";
import { FabricIndex, TlvFabricIndex } from "../datatype/FabricIndex.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TlvBoolean } from "../tlv/TlvBoolean.js";
import { TlvEnum, TlvUInt32, TlvUInt8 } from "../tlv/TlvNumber.js";
import { TlvSubjectId } from "../datatype/SubjectId.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

// TODO: Rename to NodeOperationalCredentialsCluster to match with specs

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.5.1 */
export const RESP_MAX = 900;

/**
 * Encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.17.5.3
 */
const TlvFabricDescriptor = TlvObject({ /* fabricScoped: true */
    /** Contains the public key for the trusted root that scopes the fabric referenced by FabricIndex and its associated operational credential. */
    rootPublicKey: TlvField(1, TlvByteString.bound({ length: 65 })),

    /** Contains the value of AdminVendorID provided in the AddNOC command that led to the creation of this FabricDescriptorStruct. */
    vendorId: TlvField(2, TlvVendorId),

    /** Contains the FabricID allocated to the fabric referenced by FabricIndex. */
    fabricId: TlvField(3, TlvFabricId),

    /** Contain the NodeID in use within the fabric referenced by FabricIndex. */
    nodeId: TlvField(4, TlvNodeId),

    /** Contains a commissioner-set label for the fabric referenced by FabricIndex. */
    label: TlvField(5, TlvString.bound({ maxLength: 32 })), /* default: "" */

    // TODO: this data is scoped in the fabric context and should be marked as such
    fabricIndex: TlvField(0xfe, TlvFabricIndex),
});

/**
 * Encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.17.5.2
 */
const TlvNoc = TlvObject({ /* fabricScoped: true */
    /** Contains the NOC for the struct’s associated fabric. */
    noc: TlvField(1, TlvByteString.bound({ maxLength: 400 })), /* fabricSensitive: true */

    /** Contains the ICAC or the struct’s associated fabric. */
    icac: TlvField(2, TlvNullable(TlvByteString.bound({ maxLength: 400 }))), /* default(not present): null, fabricSensitive: true */
});

/**
 * Used by the CertificateChainRequest command to convey which certificate from the device attestation certificate
 * chain to transmit back to the client.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.17.5.8 */
export const enum CertificateChainType {
    /** Request the DER- encoded DAC certificate */
    DeviceAttestation = 1,

    /** Request the DER- encoded PAI certificate */
    ProductAttestationIntermediate = 2,
}

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.1 */
const TlvAttestationRequest = TlvObject({
    /** Contains the attestation nonce to be used in the computation of the Attestation Information. */
    attestationNonce: TlvField(0, TlvByteString.bound({ length: 32 })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.2 */
const TlvAttestationResponse = TlvObject({
    /** Contains the octet string of the serialized attestation_elements_message. */
    elements: TlvField(0, TlvByteString.bound({ maxLength: RESP_MAX })),

    /** Contains the octet string of the necessary attestation_signature. */
    signature: TlvField(1, TlvByteString.bound({ length: 64 })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.5 */
const TlvCertSigningRequestRequest = TlvObject({
    /** Contains the CSRNonce to be used in the computation of the NOCSR information. */
    certSigningRequestNonce: TlvField(0, TlvByteString.bound({ length: 32 })),

    /**
     * If set to true, the internal state of the CSR associated keypair SHALL be tagged as being for
     * a subsequent UpdateNOC, otherwise the internal state of the CSR SHALL be tagged as being for a
     * subsequent AddNOC
     * */
    isForUpdateNOC: TlvOptionalField(1, TlvBoolean), /* default: false */
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.6 */
const TlvCertSigningRequestResponse = TlvObject({
    /** Contains the octet string of the serialized nocsr_elements_message. */
    elements: TlvField(0, TlvByteString.bound({ maxLength: RESP_MAX })),

    /** Contains the octet string of the necessary attestation_signature. */
    signature: TlvField(1, TlvByteString.bound({ length: 64 })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.3 */
const TlvCertChainRequest = TlvObject({
    /** Contains the type of certificate to be requested. */
    type: TlvField(0, TlvEnum<CertificateChainType>()),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.4 */
const TlvCertChainResponse = TlvObject({
    /** Contains the octet string of the requested certificate. */
    certificate: TlvField(0, TlvByteString.bound({ maxLength: 600 })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.8 */
const TlvAddNocRequest = TlvObject({
    /** Contains the Node Operational Certificate (NOC) to be added. */
    operationalCert: TlvField(0, TlvByteString.bound({ maxLength: 400 })),

    /** Contains the Intermediate CA Certificate (ICAC). */
    intermediateCaCert: TlvOptionalField(1, TlvByteString.bound({ maxLength: 400 })),

    /** Contains the value of the Epoch Key for the Identity Protection Key (IPK) to set for the Fabric which is to be added. */
    identityProtectionKey: TlvField(2, TlvByteString.bound({ length: 16 })),

    /**
     * Used to atomically add an Access Control Entry enabling that Subject to subsequently administer
     * the Node whose operational identity is being added by this command.
     */
    caseAdminNode: TlvField(3, TlvSubjectId),

    /** Contains the Vendor ID of the entity issuing the AddNOC command. */
    adminVendorId: TlvField(4, TlvVendorId),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.9 */
const TlvUpdateNocRequest = TlvObject({
    /** Contains the Node Operational Certificate (NOC). */
    operationalCert: TlvField(0, TlvByteString.bound({ maxLength: 400 })),

    /** Contains the Intermediate CA Certificate (ICAC). */
    intermediateCaCert: TlvOptionalField(1, TlvByteString.bound({ maxLength: 400 })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.13 */
const TlvAddTrustedRootCertificateRequest = TlvObject({
    /** Contains the Trusted Root Certificate (TRC) to be added. */
    certificate: TlvField(0, TlvByteString.bound({ maxLength: 400 })),
});

/**
 * Used by the NOCResponse datatype response command to convey detailed outcome of several of this cluster’s operations.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.17.5.9 */
export const enum OperationalCertStatus {
    /** OK, no error. */
    Success = 0x00,

    /** Public Key in the NOC does not match the public key in the NOCSR. */
    InvalidPublicKey = 0x01,

    /** The Node Operational ID in the NOC is not formatted correctly. */
    InvalidNodeOpId = 0x02,

    /** Any other validation error in NOC chain. */
    InvalidOperationalCert = 0x03,

    /** No record of prior CSR for which this NOC could match. */
    MissingCsr = 0x04,

    /** NOCs table full, cannot add another one. */
    TableFull = 0x05,

    /** Invalid CaseAdminSubject field for an AddNOC command. */
    InvalidAdminSubject = 0x06,

    /** Trying to AddNOC instead of UpdateNOC against an existing Fabric. */
    FabricConflict = 0x09,

    /** Label already exists on another Fabric. */
    LabelConflict = 0x0a,

    /** FabricIndex argument is invalid. */
    InvalidFabricIndex = 0x0b,
}

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.10 */
const TlvOperationalCertificateStatusResponse = TlvObject({
    /** Contains a NOCStatus value representing the status of an operation involving a NOC. */
    status: TlvField(0, TlvEnum<OperationalCertStatus>()),

    /** When action was successful, contains the Fabric Index of the Fabric last added, removed or updated. */
    fabricIndex: TlvOptionalField(1, TlvFabricIndex),

    /** Optionally contains debugging textual information from the cluster implementation and should be visible in logs, not User UI */
    debugText: TlvOptionalField(2, TlvString.bound({ maxLength: 128 })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.5.4 */
export const TlvAttestation = TlvObject({
    declaration: TlvField(1, TlvByteString),
    attestationNonce: TlvField(2, TlvByteString.bound({ length: 32 })),
    timestamp: TlvField(3, TlvUInt32), // TODO: check actual max length in specs
    firmwareInfo: TlvOptionalField(4, TlvByteString),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.5.6 */
export const TlvCertSigningRequest = TlvObject({
    certSigningRequest: TlvField(1, TlvByteString),
    certSigningRequestNonce: TlvField(2, TlvByteString.bound({ length: 32 })),
    vendorReserved1: TlvOptionalField(3, TlvByteString),
    vendorReserved2: TlvOptionalField(4, TlvByteString),
    vendorReserved3: TlvOptionalField(5, TlvByteString),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.11 */
const TlvUpdateFabricLabelRequest = TlvObject({
    /** Contains the label to set for the fabric associated with the current secure session. */
    label: TlvField(0, TlvString32max),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.17.7.12 */
const TlvRemoveFabricRequest = TlvObject({
    /** Contains the Fabric Index reference associated with the Fabric which is to be removed from the device. */
    fabricIndex: TlvField(0, TlvFabricIndex),
});

/**
 * This cluster is used to add or remove Operational Credentials on a Commissionee or Node, as well as manage the
 * associated Fabrics.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.17
 */
export const OperationalCredentialsCluster = Cluster({
    id: 0x3e,
    name: "OperationalCredentials",
    revision: 1,

    /** @see {@link MatterCoreSpecificationV1_0} § 11.17.6 */
    attributes: {
        /** Contains all NOCs applicable to this Node. */
        nocs: Attribute(0, TlvArray(TlvNoc), { persistent: true, omitChanges: true, readAcl: AccessLevel.Administer }),

        /** Describes all fabrics to which this Node is commissioned. */
        fabrics: Attribute(1, TlvArray(TlvFabricDescriptor), { persistent: true }),

        /** Contains the number of Fabrics that are supported by the device. */
        supportedFabrics: Attribute(2, TlvUInt8.bound({ min: 5, max: 254 })),

        /** Contains the number of Fabrics to which the device is currently commissioned. */
        commissionedFabrics: Attribute(3, TlvUInt8, { persistent: true }),

        /** Contains a read-only list of Trusted Root CA Certificates installed on the Node. */
        trustedRootCertificates: Attribute(4, TlvArray(TlvByteString, { maxLength: 400 }), { persistent: true, omitChanges: true }),

        /** Contains accessing fabric index. */
        currentFabricIndex: Attribute(5, TlvFabricIndex, { default: new FabricIndex(0) }),
    },

    /** @see {@link MatterCoreSpecificationV1_0} § 11.17.7 */
    commands: {
        /** Sender is requesting attestation information from the receiver. */
        requestAttestation: Command(0, TlvAttestationRequest, 1, TlvAttestationResponse),

        /** Sender is requesting a device attestation certificate from the receiver. */
        requestCertChain: Command(2, TlvCertChainRequest, 3, TlvCertChainResponse),

        /** Sender is requesting a certificate signing request (CSR) from the receiver. */
        requestCertSigning: Command(4, TlvCertSigningRequestRequest, 5, TlvCertSigningRequestResponse),

        /** Sender is requesting to add the new node operational certificates. */
        addOperationalCert: Command(6, TlvAddNocRequest, 8, TlvOperationalCertificateStatusResponse),

        /** Sender is requesting to update the node operational certificates. */
        updateOperationalCert: Command(7, TlvUpdateNocRequest, 8, TlvOperationalCertificateStatusResponse), /* fabricScoped: true */

        /**
         * This command SHALL be used by an Administrative Node to set the user-visible Label field for a given
         * Fabric, as reflected by entries in the Fabrics attribute.
         */
        updateFabricLabel: Command(9, TlvUpdateFabricLabelRequest, 8, TlvOperationalCertificateStatusResponse), /* fabricScoped: true */

        /**
         * This command is used by Administrative Nodes to remove a given fabric index and delete all associated
         * fabric-scoped data.
         */
        removeFabric: Command(10, TlvRemoveFabricRequest, 8, TlvOperationalCertificateStatusResponse),

        /**
         * This command SHALL add a Trusted Root CA Certificate, provided as its CHIP Certificate representation.
         */
        addRootCert: Command(11, TlvAddTrustedRootCertificateRequest, 11, TlvNoResponse),
    },
});
