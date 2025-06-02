/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { FabricScopedAttribute, FixedAttribute, Attribute, Command, TlvNoResponse } from "../cluster/Cluster.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvField, TlvObject, TlvOptionalField } from "../tlv/TlvObject.js";
import { TlvByteString, TlvString } from "../tlv/TlvString.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TlvFabricIndex, FabricIndex } from "../datatype/FabricIndex.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { AccessLevel } from "#model";
import { TlvVendorId } from "../datatype/VendorId.js";
import { TlvFabricId } from "../datatype/FabricId.js";
import { TlvNodeId } from "../datatype/NodeId.js";
import { TlvUInt8, TlvEnum } from "../tlv/TlvNumber.js";
import { TlvBoolean } from "../tlv/TlvBoolean.js";
import { TlvSubjectId } from "../datatype/SubjectId.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace OperationalCredentials {
    /**
     * This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.
     *
     * Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
     * TrustedRootCertificates attribute of the Node Operational Credentials cluster.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.4.4
     */
    export const TlvNoc = TlvObject({
        /**
         * This field shall contain the NOC for the struct’s associated fabric, encoded using Matter Certificate
         * Encoding.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.4.4.1
         */
        noc: TlvField(1, TlvByteString.bound({ maxLength: 400 })),

        /**
         * This field shall contain the ICAC or the struct’s associated fabric, encoded using Matter Certificate
         * Encoding. If no ICAC is present in the chain, this field shall be set to null.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.4.4.2
         */
        icac: TlvField(2, TlvNullable(TlvByteString.bound({ maxLength: 400 }))),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.
     *
     * Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
     * TrustedRootCertificates attribute of the Node Operational Credentials cluster.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.4.4
     */
    export interface Noc extends TypeFromSchema<typeof TlvNoc> {}

    /**
     * This structure encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.4.5
     */
    export const TlvFabricDescriptor = TlvObject({
        /**
         * This field shall contain the public key for the trusted root that scopes the fabric referenced by FabricIndex
         * and its associated operational credential (see Section 6.4.5.3, “Trusted Root CA Certificates”). The format
         * for the key shall be the same as that used in the ec-pub-key field of the Matter Certificate Encoding for the
         * root in the operational certificate chain.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.4.5.1
         */
        rootPublicKey: TlvField(1, TlvByteString.bound({ length: 65 })),

        /**
         * This field shall contain the value of AdminVendorID provided in the AddNOC command that led to the creation
         * of this FabricDescriptorStruct. The set of allowed values is defined in AdminVendorID.
         *
         * The intent is to provide some measure of user transparency about which entities have Administer privileges on
         * the Node.
         *
         * Clients shall consider the VendorID field value to be untrustworthy until the NOC chain associated with the
         * fabric has passed the Vendor ID Validation Procedure against the associated RCAC.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.4.5.2
         */
        vendorId: TlvField(2, TlvVendorId),

        /**
         * This field shall contain the FabricID allocated to the fabric referenced by FabricIndex. This field shall
         * match the value found in the matter-fabric-id field from the operational certificate providing the
         * operational identity under this Fabric.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.4.5.3
         */
        fabricId: TlvField(3, TlvFabricId),

        /**
         * This field shall contain the NodeID in use within the fabric referenced by FabricIndex. This field shall
         * match the value found in the matter-node-id field from the operational certificate providing this operational
         * identity.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.4.5.4
         */
        nodeId: TlvField(4, TlvNodeId),

        /**
         * This field shall contain a commissioner-set label for the fabric referenced by FabricIndex. This label is set
         * by the UpdateFabricLabel command.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.4.5.5
         */
        label: TlvField(5, TlvString.bound({ maxLength: 32 })),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * This structure encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.4.5
     */
    export interface FabricDescriptor extends TypeFromSchema<typeof TlvFabricDescriptor> {}

    /**
     * Input to the OperationalCredentials attestationRequest command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.1
     */
    export const TlvAttestationRequest = TlvObject({ attestationNonce: TlvField(0, TlvByteString.bound({ length: 32 })) });

    /**
     * Input to the OperationalCredentials attestationRequest command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.1
     */
    export interface AttestationRequest extends TypeFromSchema<typeof TlvAttestationRequest> {}

    /**
     * This command shall be generated in response to an Attestation Request command.
     *
     * See Section 11.18.4.7, “Attestation Information” for details about the generation of the fields within this
     * response command.
     *
     * See Section F.2, “Device Attestation Response test vector” for an example computation of an AttestationResponse.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.2
     */
    export const TlvAttestationResponse = TlvObject({
        /**
         * This field shall contain the octet string of the serialized attestation_elements_message.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.2.1
         */
        attestationElements: TlvField(0, TlvByteString.bound({ maxLength: 900 })),

        /**
         * This field shall contain the octet string of the necessary attestation_signature as described in Section
         * 11.18.4.7, “Attestation Information”.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.2.2
         */
        attestationSignature: TlvField(1, TlvByteString.bound({ length: 64 }))
    });

    /**
     * This command shall be generated in response to an Attestation Request command.
     *
     * See Section 11.18.4.7, “Attestation Information” for details about the generation of the fields within this
     * response command.
     *
     * See Section F.2, “Device Attestation Response test vector” for an example computation of an AttestationResponse.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.2
     */
    export interface AttestationResponse extends TypeFromSchema<typeof TlvAttestationResponse> {}

    /**
     * This enumeration is used by the CertificateChainRequest command to convey which certificate from the device
     * attestation certificate chain to transmit back to the client.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.4.2
     */
    export enum CertificateChainType {
        /**
         * Request the DER- encoded DAC certificate
         */
        DacCertificate = 1,

        /**
         * Request the DER- encoded PAI certificate
         */
        PaiCertificate = 2
    }

    /**
     * Input to the OperationalCredentials certificateChainRequest command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.3
     */
    export const TlvCertificateChainRequest = TlvObject({ certificateType: TlvField(0, TlvEnum<CertificateChainType>()) });

    /**
     * Input to the OperationalCredentials certificateChainRequest command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.3
     */
    export interface CertificateChainRequest extends TypeFromSchema<typeof TlvCertificateChainRequest> {}

    /**
     * This command shall be generated in response to a CertificateChainRequest command.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.4
     */
    export const TlvCertificateChainResponse = TlvObject({
        /**
         * This field shall be the DER encoded certificate corresponding to the CertificateType field in the
         * CertificateChainRequest command.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.4.1
         */
        certificate: TlvField(0, TlvByteString.bound({ maxLength: 600 }))
    });

    /**
     * This command shall be generated in response to a CertificateChainRequest command.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.4
     */
    export interface CertificateChainResponse extends TypeFromSchema<typeof TlvCertificateChainResponse> {}

    /**
     * Input to the OperationalCredentials csrRequest command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.5
     */
    export const TlvCsrRequest = TlvObject({
        csrNonce: TlvField(0, TlvByteString.bound({ length: 32 })),
        isForUpdateNoc: TlvOptionalField(1, TlvBoolean)
    });

    /**
     * Input to the OperationalCredentials csrRequest command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.5
     */
    export interface CsrRequest extends TypeFromSchema<typeof TlvCsrRequest> {}

    /**
     * This command shall be generated in response to a CSRRequest Command.
     *
     * See Section 11.18.4.9, “NOCSR Information” for details about the generation of the fields within this response
     * command.
     *
     * See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.6
     */
    export const TlvCsrResponse = TlvObject({
        /**
         * This field shall contain the octet string of the serialized nocsr_elements_message.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.6.1
         */
        nocsrElements: TlvField(0, TlvByteString.bound({ maxLength: 900 })),

        /**
         * This field shall contain the octet string of the necessary attestation_signature as described in Section
         * 11.18.4.9, “NOCSR Information”.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.6.2
         */
        attestationSignature: TlvField(1, TlvByteString.bound({ length: 64 }))
    });

    /**
     * This command shall be generated in response to a CSRRequest Command.
     *
     * See Section 11.18.4.9, “NOCSR Information” for details about the generation of the fields within this response
     * command.
     *
     * See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.6
     */
    export interface CsrResponse extends TypeFromSchema<typeof TlvCsrResponse> {}

    /**
     * Input to the OperationalCredentials addNoc command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.8
     */
    export const TlvAddNocRequest = TlvObject({
        nocValue: TlvField(0, TlvByteString.bound({ maxLength: 400 })),
        icacValue: TlvOptionalField(1, TlvByteString.bound({ maxLength: 400 })),

        /**
         * This field shall contain the value of the Epoch Key for the Identity Protection Key (IPK) to set for the
         * Fabric which is to be added. This is needed to bootstrap a necessary configuration value for subsequent CASE
         * to succeed. See Section 4.14.2.6.1, “Identity Protection Key (IPK)” for details.
         *
         * The IPK shall be provided as an octet string of length CRYPTO_SYMMETRIC_KEY_LENGTH_BYTES.
         *
         * On successful execution of the AddNOC command, the side-effect of having provided this field shall be
         * equivalent to having done a GroupKeyManagement cluster KeySetWrite command invocation using the newly joined
         * fabric as the accessing fabric and with the following argument fields (assuming KeySetWrite allowed a
         * GroupKeySetID set to 0):
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.8.1
         */
        ipkValue: TlvField(2, TlvByteString.bound({ length: 16 })),

        /**
         * If the AddNOC command succeeds according to the semantics of the following subsections, then the Access
         * Control SubjectID shall be used to atomically add an Access Control Entry enabling that Subject to
         * subsequently administer the Node whose operational identity is being added by this command.
         *
         * The format of the new Access Control Entry, created from this, shall be:
         *
         * > [!NOTE]
         *
         * > Unless such an Access Control Entry is added atomically as described here, there would be no way for the
         *   caller on its given Fabric to eventually add another Access Control Entry for CASE authentication mode, to
         *   enable the new Administrator to administer the device, since the Fabric Scoping of the Access Control List
         *   prevents the current Node from being able to write new entries scoped to that Fabric, if the session is
         *   established from CASE. While a session established from PASE does gain Fabric Scope of a newly-joined
         *   Fabric, this argument is made mandatory to provide symmetry between both types of session establishment,
         *   both of which need to eventually add an "Administer Node over CASE" Access Control Entry to finalize new
         *   Fabric configuration and subsequently be able to call the CommissioningComplete command.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.8.2
         */
        caseAdminSubject: TlvField(3, TlvSubjectId),

        /**
         * This field shall be set to the Vendor ID of the entity issuing the AddNOC command. This value shall NOT be
         * one of the reserved Vendor ID values defined in Table 1, “Vendor ID Allocations”.
         *
         * ### Effect When Received
         *
         * If this command is received without an armed fail-safe context (see ArmFailSafe), then this command shall
         * fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
         *
         * If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then this
         * command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.
         *
         * If the prior CSRRequest state that preceded AddNOC had the IsForUpdateNOC field indicated as true, then this
         * command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.
         *
         * If no prior AddTrustedRootCertificate command was successfully executed within the fail-safe timer period,
         * then this command shall process an error by responding with a NOCResponse with a StatusCode of InvalidNOC as
         * described in Section 11.18.6.7.2, “Handling Errors”. In other words, AddNOC always requires that the client
         * provides the root of trust certificate within the same Fail- Safe context as the rest of the new fabric’s
         * operational credentials, even if some other fabric already uses the exact same root of trust certificate.
         *
         * If the NOC provided in the NOCValue encodes an Operational Identifier for a <Root Public Key, FabricID> pair
         * already present on the device, then the device shall process the error by responding with a StatusCode of
         * FabricConflict as described in Section 11.18.6.7.2, “Handling Errors”.
         *
         * If the device already has the CommissionedFabrics attribute equal to the SupportedFabrics attribute, then the
         * device’s operational credentials table is considered full and the device shall process the error by
         * responding with a StatusCode of TableFull as described in Section 11.18.6.7.2, “Handling Errors”.
         *
         * If the CaseAdminSubject field is not a valid ACL subject in the context of AuthMode set to CASE, such as not
         * being in either the Operational or CASE Authenticated Tag range, then the device shall process the error by
         * responding with a StatusCode of InvalidAdminSubject as described in Section 11.18.6.7.2, “Handling Errors”.
         *
         * Otherwise, the command is considered an addition of credentials, also known as "joining a fabric", and the
         * following shall apply:
         *
         *   1. A new FabricIndex shall be allocated, taking the next valid fabric-index value in monotonically
         *      incrementing order, wrapping around from 254 (0xFE) to 1, since value 0 is reserved and using 255 (0xFF)
         *      would prevent cluster specifications from using nullable fabric-idx fields.
         *
         *   2. An entry within the Fabrics attribute table shall be added, reflecting the matter-fabric-id RDN within
         *      the NOC’s subject, along with the public key of the trusted root of the chain and the AdminVendorID
         *      field.
         *
         *   3. The operational key pair associated with the incoming NOC from the NOCValue, and generated by the prior
         *      CSRRequest command, shall be recorded for subsequent use during CASE within the fail-safe timer period
         *      (see Section 5.5, “Commissioning Flows”).
         *
         *   4. The incoming NOCValue and ICACValue (if present) shall be stored under the FabricIndex associated with
         *      the new Fabric Scope, along with the RootCACertificate provided with the prior successful
         *      AddTrustedRootCertificate command invoked in the same fail-safe period.
         *
         *     a. Implementation of certificate chain storage may separate or otherwise encode the components of the
         *        array in implementation-specific ways, as long as they follow the correct format when being read from
         *        the NOCs list or used within other protocols such as CASE.
         *
         *   5. The NOCs list shall reflect the incoming NOC from the NOCValue field and ICAC from the ICACValue field
         *      (if present).
         *
         *   6. The operational discovery service record shall immediately reflect the new Operational Identifier, such
         *      that the Node immediately begins to exist within the Fabric and becomes reachable over CASE under the
         *      new operational identity.
         *
         *   7. The receiver shall create and add a new Access Control Entry using the CaseAdminSubject field to grant
         *      subsequent Administer access to an Administrator member of the new Fabric. It is recommended that the
         *      Administrator presented in CaseAdminSubject exist within the same entity that is currently invoking the
         *      AddNOC command, within another of the Fabrics of which it is a member.
         *
         *     a. If the Managed Device Feature is implemented by the ACL cluster, then one or more ARL entries with the
         *        new FabricIndex may be added to the ARL attribute.
         *
         *   8. The incoming IPKValue shall be stored in the Fabric-scoped slot within the Group Key Management cluster
         *      (see KeySetWrite), for subsequent use during CASE.
         *
         *   9. The Fabric Index associated with the armed fail-safe context (see ArmFailSafe) shall be updated to match
         *      the Fabric Index just allocated.
         *
         *   10. If the current secure session was established with PASE, the receiver shall:
         *
         *     a. Augment the secure session context with the FabricIndex generated above, such that subsequent
         *        interactions have the proper accessing fabric.
         *
         *   11. If the current secure session was established with CASE, subsequent configuration of the newly
         *       installed Fabric requires the opening of a new CASE session from the Administrator from the Fabric just
         *       installed. This Administrator is the one listed in the CaseAdminSubject argument.
         *
         * Thereafter, the Node shall respond with an NOCResponse with a StatusCode of OK and a FabricIndex field
         * matching the FabricIndex under which the new Node Operational Certificate (NOC) is scoped.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.8.3
         */
        adminVendorId: TlvField(4, TlvVendorId)
    });

    /**
     * Input to the OperationalCredentials addNoc command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.8
     */
    export interface AddNocRequest extends TypeFromSchema<typeof TlvAddNocRequest> {}

    /**
     * This enumeration is used by the NOCResponse common response command to convey detailed outcome of several of this
     * cluster’s operations.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.4.3
     */
    export enum NodeOperationalCertStatus {
        /**
         * OK, no error
         */
        Ok = 0,

        /**
         * Public Key in the NOC does not match the public key in the NOCSR
         */
        InvalidPublicKey = 1,

        /**
         * The Node Operational ID in the NOC is not formatted correctly.
         */
        InvalidNodeOpId = 2,

        /**
         * Any other validation error in NOC chain
         */
        InvalidNoc = 3,

        /**
         * No record of prior CSR for which this NOC could match
         */
        MissingCsr = 4,

        /**
         * NOCs table full, cannot add another one
         */
        TableFull = 5,

        /**
         * Invalid CaseAdminSubject field for an AddNOC command.
         */
        InvalidAdminSubject = 6,

        /**
         * Trying to AddNOC instead of UpdateNOC against an existing Fabric.
         */
        FabricConflict = 9,

        /**
         * Label already exists on another Fabric.
         */
        LabelConflict = 10,

        /**
         * FabricIndex argument is invalid.
         */
        InvalidFabricIndex = 11
    }

    /**
     * This command shall be generated in response to the following commands:
     *
     *   • AddNOC
     *
     *   • UpdateNOC
     *
     *   • UpdateFabricLabel
     *
     *   • RemoveFabric
     *
     * It provides status information about the success or failure of those commands.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.10
     */
    export const TlvNocResponse = TlvObject({
        /**
         * This field shall contain an NOCStatus value representing the status of an operation involving a NOC.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.10.1
         */
        statusCode: TlvField(0, TlvEnum<NodeOperationalCertStatus>()),

        /**
         * This field shall be present whenever StatusCode has a value of OK. If present, it shall contain the Fabric
         * Index of the Fabric last added, removed or updated.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.10.2
         */
        fabricIndex: TlvOptionalField(1, TlvFabricIndex),

        /**
         * This field may contain debugging textual information from the cluster implementation, which SHOULD NOT be
         * presented to user interfaces in any way. Its purpose is to help developers in troubleshooting errors and the
         * contents may go into logs or crash reports.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.10.3
         */
        debugText: TlvOptionalField(2, TlvString.bound({ maxLength: 128 }))
    });

    /**
     * This command shall be generated in response to the following commands:
     *
     *   • AddNOC
     *
     *   • UpdateNOC
     *
     *   • UpdateFabricLabel
     *
     *   • RemoveFabric
     *
     * It provides status information about the success or failure of those commands.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.10
     */
    export interface NocResponse extends TypeFromSchema<typeof TlvNocResponse> {}

    /**
     * Input to the OperationalCredentials updateNoc command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.9
     */
    export const TlvUpdateNocRequest = TlvObject({
        nocValue: TlvField(0, TlvByteString.bound({ maxLength: 400 })),
        icacValue: TlvOptionalField(1, TlvByteString.bound({ maxLength: 400 })),
        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * Input to the OperationalCredentials updateNoc command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.9
     */
    export interface UpdateNocRequest extends TypeFromSchema<typeof TlvUpdateNocRequest> {}

    /**
     * Input to the OperationalCredentials updateFabricLabel command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.11
     */
    export const TlvUpdateFabricLabelRequest = TlvObject({
        /**
         * This field shall contain the label to set for the fabric associated with the current secure session.
         *
         * ### Effect on Receipt
         *
         * If the Label field is identical to a Label already in use by a Fabric within the Fabrics list that is not the
         * accessing fabric, then an NOCResponse with a StatusCode of LabelConflict shall be returned for the command
         * and there shall NOT be any permanent changes to any Fabric data.
         *
         * Otherwise, the Label field for the accessing fabric shall immediately be updated to reflect the Label
         * argument provided. Following the update, an NOCResponse with a StatusCode of OK shall be returned.
         *
         * If the command was invoked within a fail-safe context after a successful UpdateNOC command, then the label
         * update shall apply to the pending update state that will be reverted if fail-safe expires prior to a
         * CommissioningComplete command. In other words, label updates apply to the state of the Fabrics Attribute as
         * currently visible, even for an existing fabric currently in process of being updated.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.11.1
         */
        label: TlvField(0, TlvString.bound({ maxLength: 32 })),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * Input to the OperationalCredentials updateFabricLabel command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.11
     */
    export interface UpdateFabricLabelRequest extends TypeFromSchema<typeof TlvUpdateFabricLabelRequest> {}

    /**
     * Input to the OperationalCredentials removeFabric command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.12
     */
    export const TlvRemoveFabricRequest = TlvObject({
        /**
         * This field shall contain the Fabric Index reference (see fabric-index) associated with the Fabric which is to
         * be removed from the device.
         *
         * ### Effect on Receipt
         *
         * If the FabricIndex field does not match the FabricIndex of any entry within the Fabrics list, then an
         * NOCResponse with a StatusCode of InvalidFabricIndex shall be returned for the command and there shall NOT be
         * any permanent changes to any device data.
         *
         * Otherwise, one of the following outcomes shall occur:
         *
         *   1. If the FabricIndex matches the last remaining entry in the Fabrics list, then the device shall delete
         *      all Matter related data on the node which was created since it was commissioned. This includes all
         *      Fabric-Scoped data, including Access Control List, Access Restriction List, bindings, scenes, group
         *      keys, operational certificates, etc. All Trusted Roots shall also be removed. If a time synchronization
         *      cluster is present on the Node, the TrustedTimeSource and DefaultNtp shall be set to null. Any Matter
         *      related data including logs, secure sessions, exchanges and interaction model constructs shall also be
         *      removed. Since this operation involves the removal of the secure session data that may underpin the
         *      current set of exchanges, the Node invoking the command SHOULD NOT expect a response before terminating
         *      its secure session with the target.
         *
         *   2. If the FabricIndex does not equal the accessing fabric index, then the device shall begin the process of
         *      irrevocably deleting all associated Fabric-Scoped data, including Access Control Entries, Access
         *      Restriction Entries, bindings, group keys, operational certificates, etc. Any remaining Trusted Roots no
         *      longer referenced by any operational certificate shall also be removed. If a time synchronization
         *      cluster is present on the Node, and the TrustedTimeSource FabricIndex matches the given FabricIndex, the
         *      TrustedTimeSource shall be set to null. All secure sessions, exchanges and interaction model constructs
         *      related to the Operational Identity under the given Fabric shall also be removed. Following the removal,
         *      an NOCResponse with a StatusCode of OK shall be returned.
         *
         *   3. If the FabricIndex equals the accessing fabric index, then the device shall begin the process of
         *      irrevocably deleting all associated Fabric-Scoped data, including Access Control Entries, Access
         *      Restriction Entries, bindings, group keys, operational certificates, etc. Any remaining Trusted Roots no
         *      longer referenced by any operational certificate shall also be removed. If a time synchronization
         *      cluster is present on the Node, and the TrustedTimeSource FabricIndex matches the given FabricIndex, the
         *      TrustedTimeSource shall be set to null. All secure sessions, exchanges and interaction model constructs
         *      related to the Operational Identity under the given Fabric shall also be removed. Since this operation
         *      involves the removal of the secure session data that may underpin the current set of exchanges, the Node
         *      invoking the command SHOULD NOT expect a response before terminating its secure session with the target.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.18.6.12.1
         */
        fabricIndex: TlvField(0, TlvFabricIndex)
    });

    /**
     * Input to the OperationalCredentials removeFabric command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.12
     */
    export interface RemoveFabricRequest extends TypeFromSchema<typeof TlvRemoveFabricRequest> {}

    /**
     * Input to the OperationalCredentials addTrustedRootCertificate command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.13
     */
    export const TlvAddTrustedRootCertificateRequest = TlvObject({
        rootCaCertificate: TlvField(0, TlvByteString.bound({ maxLength: 400 }))
    });

    /**
     * Input to the OperationalCredentials addTrustedRootCertificate command
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18.6.13
     */
    export interface AddTrustedRootCertificateRequest extends TypeFromSchema<typeof TlvAddTrustedRootCertificateRequest> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x3e,
        name: "OperationalCredentials",
        revision: 1,

        attributes: {
            /**
             * This attribute contains all NOCs applicable to this Node, encoded as a read-only list of NOCStruct.
             *
             * Operational Certificates shall be added through the AddNOC command, and shall be removed through the
             * RemoveFabric command.
             *
             * Upon Factory Data Reset, this attribute shall be set to a default value of an empty list.
             *
             * The number of entries in this list shall match the number of entries in the Fabrics attribute.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.5.1
             */
            nocs: FabricScopedAttribute(
                0x0,
                TlvArray(TlvNoc),

                {
                    persistent: true,
                    omitChanges: true,
                    default: [],
                    readAcl: AccessLevel.Administer,
                    writeAcl: AccessLevel.Administer
                }
            ),

            /**
             * This attribute describes all fabrics to which this Node is commissioned, encoded as a read-only list of
             * FabricDescriptorStruct. This information may be computed directly from the NOCs attribute.
             *
             * Upon Factory Data Reset, this attribute shall be set to a default value of an empty list.
             *
             * The number of entries in this list shall match the number of entries in the NOCs attribute.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.5.2
             */
            fabrics: FabricScopedAttribute(0x1, TlvArray(TlvFabricDescriptor), { persistent: true, default: [] }),

            /**
             * This attribute contains the number of Fabrics that are supported by the device. This value is fixed for a
             * particular device.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.5.3
             */
            supportedFabrics: FixedAttribute(0x2, TlvUInt8.bound({ min: 5, max: 254 })),

            /**
             * This attribute contains the number of Fabrics to which the device is currently commissioned. This
             * attribute shall be equal to the following:
             *
             *   • The number of entries in the NOCs attribute.
             *
             *   • The number of entries in the Fabrics attribute.
             *
             * Upon Factory Data Reset, this attribute shall be set to a default value of 0.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.5.4
             */
            commissionedFabrics: Attribute(0x3, TlvUInt8, { persistent: true }),

            /**
             * This attribute shall contain a read-only list of Trusted Root CA Certificates (RCAC) installed on the
             * Node, as octet strings containing their Matter Certificate Encoding representation.
             *
             * These certificates are installed through the AddTrustedRootCertificate command.
             *
             * Depending on the method of storage employed by the server, either shared storage for identical root
             * certificates shared by many fabrics, or individually stored root certificate per fabric, multiple
             * identical root certificates may legally appear within the list.
             *
             * To match a root with a given fabric, the root certificate’s subject and subject public key need to be
             * cross-referenced with the NOC or ICAC certificates that appear in the NOCs attribute for a given fabric.
             *
             * Upon Factory Data Reset, this attribute shall be set to a default value whereby the list is empty.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.5.5
             */
            trustedRootCertificates: Attribute(
                0x4,
                TlvArray(TlvByteString),
                { persistent: true, omitChanges: true, default: [] }
            ),

            /**
             * This attribute shall contain accessing fabric index.
             *
             * This attribute is useful to contextualize Fabric-Scoped entries obtained from response commands or
             * attribute reads, since a given Fabric may be referenced by a different Fabric Index locally on a remote
             * Node.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.5.6
             */
            currentFabricIndex: Attribute(0x5, TlvFabricIndex, { default: FabricIndex(0) })
        },

        commands: {
            /**
             * This command shall be generated to request the Attestation Information, in the form of an
             * AttestationResponse Command. If the AttestationNonce that is provided in the command is malformed, a
             * recipient shall fail the command with a Status Code of INVALID_COMMAND. The AttestationNonce field shall
             * be used in the computation of the Attestation Information.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.6.1
             */
            attestationRequest: Command(
                0x0,
                TlvAttestationRequest,
                0x1,
                TlvAttestationResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * If the CertificateType is not a valid value per CertificateChainTypeEnum then the command shall fail with
             * a Status Code of INVALID_COMMAND.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.6.3
             */
            certificateChainRequest: Command(
                0x2,
                TlvCertificateChainRequest,
                0x3,
                TlvCertificateChainResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * This command shall be generated to execute the Node Operational CSR Procedure and subsequently return the
             * NOCSR Information, in the form of a CSRResponse Command.
             *
             * The CSRNonce field shall be used in the computation of the NOCSR Information. If the CSRNonce is
             * malformed, then this command shall fail with an INVALID_COMMAND status code.
             *
             * If the IsForUpdateNOC field is present and set to true, but the command was received over a PASE session,
             * the command shall fail with an INVALID_COMMAND status code, as it would never be possible to use a
             * resulting subsequent certificate issued from the CSR with the UpdateNOC command, which is forbidden over
             * PASE sessions.
             *
             * If the IsForUpdateNOC field is present and set to true, the internal state of the CSR associated keypair
             * shall be tagged as being for a subsequent UpdateNOC, otherwise the internal state of the CSR shall be
             * tagged as being for a subsequent AddNOC. See AddNOC and UpdateNOC for details about the processing.
             *
             * If this command is received without an armed fail-safe context (see ArmFailSafe), then this command shall
             * fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
             *
             * If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
             * this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.
             *
             * If the Node Operational Key Pair generated during processing of the Node Operational CSR Procedure is
             * found to collide with an existing key pair already previously generated and installed, and that check had
             * been executed, then this command shall fail with a FAILURE status code sent back to the initiator.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.6.5
             */
            csrRequest: Command(0x4, TlvCsrRequest, 0x5, TlvCsrResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * This command shall add a new NOC chain to the device and commission a new Fabric association upon
             * successful validation of all arguments and preconditions.
             *
             * The new value shall immediately be reflected in the NOCs list attribute.
             *
             * A Commissioner or Administrator shall issue this command after issuing the CSRRequest command and
             * receiving its response.
             *
             * A Commissioner or Administrator SHOULD issue this command after performing the Attestation Procedure.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.6.8
             */
            addNoc: Command(0x6, TlvAddNocRequest, 0x8, TlvNocResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * This command shall replace the NOC and optional associated ICAC (if present) scoped under the accessing
             * fabric upon successful validation of all arguments and preconditions. The new value shall immediately be
             * reflected in the NOCs list attribute.
             *
             * A Commissioner or Administrator shall issue this command after issuing the CSRRequest Command and
             * receiving its response.
             *
             * A Commissioner or Administrator SHOULD issue this command after performing the Attestation Procedure.
             *
             * ### Effect When Received
             *
             * If this command is received without an armed fail-safe context (see ArmFailSafe), then this command shall
             * fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
             *
             * If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
             * this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.
             *
             * If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer period,
             * then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator, since the
             * only valid following logical operation is invoking the AddNOC command.
             *
             * If the prior CSRRequest state that preceded UpdateNOC had the IsForUpdateNOC field indicated as false,
             * then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.
             *
             * If any of the following conditions arise, the Node shall process an error by responding with an
             * NOCResponse with a StatusCode of InvalidNOC as described in Section 11.18.6.7.2, “Handling Errors”:
             *
             *   • The NOC provided in the NOCValue does not refer in its subject to the FabricID associated with the
             *     accessing fabric.
             *
             *   • The ICAC provided in the ICACValue (if present) has a FabricID in its subject that does not match the
             *     FabricID associated with the accessing fabric.
             *
             * Otherwise, the command is considered an update of existing credentials for a given Fabric, and the
             * following shall apply:
             *
             *   1. The Operational Certificate under the accessing fabric index in the NOCs list shall be updated to
             *      match the incoming NOCValue and ICACValue (if present), such that the Node’s Operational Identifier
             *      within the Fabric immediately changes.
             *
             *     a. The operational key pair associated with the incoming NOC from the NOCValue, and generated by the
             *        prior CSRRequest command, shall be committed to permanent storage, for subsequent use during CASE.
             *
             *     b. The operational discovery service record shall immediately reflect the new Operational Identifier.
             *
             *     c. All internal data reflecting the prior operational identifier of the Node within the Fabric shall
             *        be revoked and removed, to an outcome equivalent to the disappearance of the prior Node, except
             *        for the ongoing CASE session context, which shall temporarily remain valid until the NOCResponse
             *        has been successfully delivered or until the next transport-layer error, so that the response can
             *        be received by the Administrator invoking the command.
             *
             * Thereafter, the Node shall respond with an NOCResponse with a StatusCode of OK and a FabricIndex field
             * matching the FabricIndex under which the updated NOC is scoped.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.6.9
             */
            updateNoc: Command(0x7, TlvUpdateNocRequest, 0x8, TlvNocResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * This command shall be used by an Administrator to set the user-visible Label field for a given Fabric, as
             * reflected by entries in the Fabrics attribute. An Administrator shall use this command to set the Label
             * to a string (possibly selected by the user themselves) that the user can recognize and relate to this
             * Administrator
             *
             *   • during the commissioning process, and
             *
             *   • whenever the user chooses to update this string.
             *
             * The Label field, along with the VendorID field in the same entry of the Fabrics attribute, SHOULD be used
             * by Administrators to provide additional per-fabric context when operations such as RemoveFabric are
             * considered or used.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.6.11
             */
            updateFabricLabel: Command(
                0x9,
                TlvUpdateFabricLabelRequest,
                0x8,
                TlvNocResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * This command is used by Administrators to remove a given Fabric and delete all associated fabric-scoped
             * data.
             *
             * If the given Fabric being removed is the last one to reference a given Trusted Root CA Certificate stored
             * in the Trusted Root Certificates list, then that Trusted Root Certificate shall be removed.
             *
             * This command, if referring to an already existing Fabric not under the control of the invoking
             * Administrator, shall ONLY be invoked after obtaining some form of explicit user consent through some
             * method executed by the Administrator or Commissioner. This method of obtaining consent SHOULD employ as
             * much data as possible about the existing Fabric associations within the Fabrics list, so that likelihood
             * is as small as possible of a user removing a Fabric unwittingly. If a method exists for an Administrator
             * or Commissioner to convey Fabric Removal to an entity related to that Fabric, whether in-band or
             * out-of-band, then this method SHOULD be used to notify the other Administrative Domain’s party of the
             * removal. Otherwise, users may only observe the removal of a Fabric association as persistently failing
             * attempts to reach a Node operationally.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.6.12
             */
            removeFabric: Command(
                0xa,
                TlvRemoveFabricRequest,
                0x8,
                TlvNocResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * This command shall add a Trusted Root CA Certificate, provided as its Matter Certificate Encoding
             * representation, to the TrustedRootCertificates Attribute list and shall ensure the next AddNOC command
             * executed uses the provided certificate as its root of trust.
             *
             * If the certificate from the RootCACertificate field is already installed, based on exact byte-for-byte
             * equality, then this command shall succeed with no change to the list.
             *
             * If this command is received without an armed fail-safe context (see ArmFailSafe), then this command shall
             * fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
             *
             * If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer period,
             * which would cause the new invocation to add a second root certificate within a given fail-safe timer
             * period, then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.
             *
             * If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
             * this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.
             *
             * If the certificate from the RootCACertificate field fails any validity checks, not fulfilling all the
             * requirements for a valid Matter Certificate Encoding representation, including a truncated or oversize
             * value, then this command shall fail with an INVALID_COMMAND status code sent back to the initiator.
             *
             * Note that the only method of removing a trusted root is by removing the Fabric that uses it as its root
             * of trust using the RemoveFabric command.
             *
             * @see {@link MatterSpecification.v141.Core} § 11.18.6.13
             */
            addTrustedRootCertificate: Command(
                0xb,
                TlvAddTrustedRootCertificateRequest,
                0xb,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * This cluster is used to add or remove Node Operational credentials on a Commissionee or Node, as well as manage
     * the associated Fabrics.
     *
     * @see {@link MatterSpecification.v141.Core} § 11.18
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type OperationalCredentialsCluster = OperationalCredentials.Cluster;
export const OperationalCredentialsCluster = OperationalCredentials.Cluster;
ClusterRegistry.register(OperationalCredentials.Complete);
