/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "OperationalCredentials", classification: "node", pics: "OPCREDS",
    xref: "core§11.18",
    details: "This cluster is used to add or remove Node Operational credentials on a Commissionee or Node, as " +
        "well as manage the associated Fabrics.",

    children: [
        {
            tag: "attribute", name: "Nocs", xref: "core§11.18.5.1",

            details: "This attribute contains all NOCs applicable to this Node, encoded as a read-only list of NOCStruct." +
                "\n" +
                "Operational Certificates shall be added through the AddNOC command, and shall be removed through the " +
                "RemoveFabric command." +
                "\n" +
                "Upon Factory Data Reset, this attribute shall be set to a default value of an empty list." +
                "\n" +
                "The number of entries in this list shall match the number of entries in the Fabrics attribute."
        },

        {
            tag: "attribute", name: "Fabrics", xref: "core§11.18.5.2",

            details: "This attribute describes all fabrics to which this Node is commissioned, encoded as a read-only list " +
                "of FabricDescriptorStruct. This information may be computed directly from the NOCs attribute." +
                "\n" +
                "Upon Factory Data Reset, this attribute shall be set to a default value of an empty list." +
                "\n" +
                "The number of entries in this list shall match the number of entries in the NOCs attribute."
        },

        {
            tag: "attribute", name: "SupportedFabrics", xref: "core§11.18.5.3",
            details: "This attribute contains the number of Fabrics that are supported by the device. This value is fixed " +
                "for a particular device."
        },

        {
            tag: "attribute", name: "CommissionedFabrics", xref: "core§11.18.5.4",

            details: "This attribute contains the number of Fabrics to which the device is currently commissioned. This " +
                "attribute shall be equal to the following:" +
                "\n" +
                "  • The number of entries in the NOCs attribute." +
                "\n" +
                "  • The number of entries in the Fabrics attribute." +
                "\n" +
                "Upon Factory Data Reset, this attribute shall be set to a default value of 0."
        },

        {
            tag: "attribute", name: "TrustedRootCertificates", xref: "core§11.18.5.5",

            details: "This attribute shall contain a read-only list of Trusted Root CA Certificates (RCAC) installed on " +
                "the Node, as octet strings containing their Matter Certificate Encoding representation." +
                "\n" +
                "These certificates are installed through the AddTrustedRootCertificate command." +
                "\n" +
                "Depending on the method of storage employed by the server, either shared storage for identical root " +
                "certificates shared by many fabrics, or individually stored root certificate per fabric, multiple " +
                "identical root certificates may legally appear within the list." +
                "\n" +
                "To match a root with a given fabric, the root certificate’s subject and subject public key need to " +
                "be cross-referenced with the NOC or ICAC certificates that appear in the NOCs attribute for a given " +
                "fabric." +
                "\n" +
                "Upon Factory Data Reset, this attribute shall be set to a default value whereby the list is empty."
        },

        {
            tag: "attribute", name: "CurrentFabricIndex", xref: "core§11.18.5.6",
            details: "This attribute shall contain accessing fabric index." +
                "\n" +
                "This attribute is useful to contextualize Fabric-Scoped entries obtained from response commands or " +
                "attribute reads, since a given Fabric may be referenced by a different Fabric Index locally on a " +
                "remote Node."
        },

        {
            tag: "command", name: "AttestationRequest", xref: "core§11.18.6.1",
            details: "This command shall be generated to request the Attestation Information, in the form of an " +
                "AttestationResponse Command. If the AttestationNonce that is provided in the command is malformed, a " +
                "recipient shall fail the command with a Status Code of INVALID_COMMAND. The AttestationNonce field " +
                "shall be used in the computation of the Attestation Information."
        },

        {
            tag: "command", name: "AttestationResponse", xref: "core§11.18.6.2",

            details: "This command shall be generated in response to an Attestation Request command." +
                "\n" +
                "See Section 11.18.4.7, “Attestation Information” for details about the generation of the fields " +
                "within this response command." +
                "\n" +
                "See Section F.2, “Device Attestation Response test vector” for an example computation of an " +
                "AttestationResponse.",

            children: [
                {
                    tag: "field", name: "AttestationElements", xref: "core§11.18.6.2.1",
                    details: "This field shall contain the octet string of the serialized attestation_elements_message."
                },
                {
                    tag: "field", name: "AttestationSignature", xref: "core§11.18.6.2.2",
                    details: "This field shall contain the octet string of the necessary attestation_signature as described in " +
                        "Section 11.18.4.7, “Attestation Information”."
                }
            ]
        },

        {
            tag: "command", name: "CertificateChainRequest", xref: "core§11.18.6.3",
            details: "If the CertificateType is not a valid value per CertificateChainTypeEnum then the command shall fail " +
                "with a Status Code of INVALID_COMMAND."
        },

        {
            tag: "command", name: "CertificateChainResponse", xref: "core§11.18.6.4",
            details: "This command shall be generated in response to a CertificateChainRequest command.",
            children: [{
                tag: "field", name: "Certificate", xref: "core§11.18.6.4.1",
                details: "This field shall be the DER encoded certificate corresponding to the CertificateType field in the " +
                    "CertificateChainRequest command."
            }]
        },

        {
            tag: "command", name: "CsrRequest", xref: "core§11.18.6.5",

            details: "This command shall be generated to execute the Node Operational CSR Procedure and subsequently " +
                "return the NOCSR Information, in the form of a CSRResponse Command." +
                "\n" +
                "The CSRNonce field shall be used in the computation of the NOCSR Information. If the CSRNonce is " +
                "malformed, then this command shall fail with an INVALID_COMMAND status code." +
                "\n" +
                "If the IsForUpdateNOC field is present and set to true, but the command was received over a PASE " +
                "session, the command shall fail with an INVALID_COMMAND status code, as it would never be possible " +
                "to use a resulting subsequent certificate issued from the CSR with the UpdateNOC command, which is " +
                "forbidden over PASE sessions." +
                "\n" +
                "If the IsForUpdateNOC field is present and set to true, the internal state of the CSR associated " +
                "keypair shall be tagged as being for a subsequent UpdateNOC, otherwise the internal state of the CSR " +
                "shall be tagged as being for a subsequent AddNOC. See AddNOC and UpdateNOC for details about the " +
                "processing." +
                "\n" +
                "If this command is received without an armed fail-safe context (see ArmFailSafe), then this command " +
                "shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator." +
                "\n" +
                "If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, " +
                "then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator." +
                "\n" +
                "If the Node Operational Key Pair generated during processing of the Node Operational CSR Procedure " +
                "is found to collide with an existing key pair already previously generated and installed, and that " +
                "check had been executed, then this command shall fail with a FAILURE status code sent back to the " +
                "initiator."
        },

        {
            tag: "command", name: "CsrResponse", xref: "core§11.18.6.6",

            details: "This command shall be generated in response to a CSRRequest Command." +
                "\n" +
                "See Section 11.18.4.9, “NOCSR Information” for details about the generation of the fields within " +
                "this response command." +
                "\n" +
                "See Section F.3, “Node Operational CSR Response test vector” for an example computation of a " +
                "CSRResponse.",

            children: [
                {
                    tag: "field", name: "NocsrElements", xref: "core§11.18.6.6.1",
                    details: "This field shall contain the octet string of the serialized nocsr_elements_message."
                },
                {
                    tag: "field", name: "AttestationSignature", xref: "core§11.18.6.6.2",
                    details: "This field shall contain the octet string of the necessary attestation_signature as described in " +
                        "Section 11.18.4.9, “NOCSR Information”."
                }
            ]
        },

        {
            tag: "command", name: "AddNoc", xref: "core§11.18.6.8",

            details: "This command shall add a new NOC chain to the device and commission a new Fabric association upon " +
                "successful validation of all arguments and preconditions." +
                "\n" +
                "The new value shall immediately be reflected in the NOCs list attribute." +
                "\n" +
                "A Commissioner or Administrator shall issue this command after issuing the CSRRequest command and " +
                "receiving its response." +
                "\n" +
                "A Commissioner or Administrator SHOULD issue this command after performing the Attestation " +
                "Procedure.",

            children: [
                {
                    tag: "field", name: "IpkValue", xref: "core§11.18.6.8.1",

                    details: "This field shall contain the value of the Epoch Key for the Identity Protection Key (IPK) to set for " +
                        "the Fabric which is to be added. This is needed to bootstrap a necessary configuration value for " +
                        "subsequent CASE to succeed. See Section 4.14.2.6.1, “Identity Protection Key (IPK)” for details." +
                        "\n" +
                        "The IPK shall be provided as an octet string of length CRYPTO_SYMMETRIC_KEY_LENGTH_BYTES." +
                        "\n" +
                        "On successful execution of the AddNOC command, the side-effect of having provided this field shall " +
                        "be equivalent to having done a GroupKeyManagement cluster KeySetWrite command invocation using the " +
                        "newly joined fabric as the accessing fabric and with the following argument fields (assuming " +
                        "KeySetWrite allowed a GroupKeySetID set to 0):"
                },

                {
                    tag: "field", name: "CaseAdminSubject", xref: "core§11.18.6.8.2",

                    details: "If the AddNOC command succeeds according to the semantics of the following subsections, then the " +
                        "Access Control SubjectID shall be used to atomically add an Access Control Entry enabling that " +
                        "Subject to subsequently administer the Node whose operational identity is being added by this " +
                        "command." +
                        "\n" +
                        "The format of the new Access Control Entry, created from this, shall be:" +
                        "\n" +
                        "> [!NOTE]" +
                        "\n" +
                        "> Unless such an Access Control Entry is added atomically as described here, there would be no way " +
                        "  for the caller on its given Fabric to eventually add another Access Control Entry for CASE " +
                        "  authentication mode, to enable the new Administrator to administer the device, since the Fabric " +
                        "  Scoping of the Access Control List prevents the current Node from being able to write new entries " +
                        "  scoped to that Fabric, if the session is established from CASE. While a session established from " +
                        "  PASE does gain Fabric Scope of a newly-joined Fabric, this argument is made mandatory to provide " +
                        "  symmetry between both types of session establishment, both of which need to eventually add an " +
                        "  \"Administer Node over CASE\" Access Control Entry to finalize new Fabric configuration and " +
                        "  subsequently be able to call the CommissioningComplete command."
                },

                {
                    tag: "field", name: "AdminVendorId", xref: "core§11.18.6.8.3",

                    details: "This field shall be set to the Vendor ID of the entity issuing the AddNOC command. This value shall " +
                        "NOT be one of the reserved Vendor ID values defined in Table 1, “Vendor ID Allocations”." +
                        "\n" +
                        "### Effect When Received" +
                        "\n" +
                        "If this command is received without an armed fail-safe context (see ArmFailSafe), then this command " +
                        "shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator." +
                        "\n" +
                        "If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, " +
                        "then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator." +
                        "\n" +
                        "If the prior CSRRequest state that preceded AddNOC had the IsForUpdateNOC field indicated as true, " +
                        "then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator." +
                        "\n" +
                        "If no prior AddTrustedRootCertificate command was successfully executed within the fail-safe timer " +
                        "period, then this command shall process an error by responding with a NOCResponse with a StatusCode " +
                        "of InvalidNOC as described in Section 11.18.6.7.2, “Handling Errors”. In other words, AddNOC always " +
                        "requires that the client provides the root of trust certificate within the same Fail- Safe context " +
                        "as the rest of the new fabric’s operational credentials, even if some other fabric already uses the " +
                        "exact same root of trust certificate." +
                        "\n" +
                        "If the NOC provided in the NOCValue encodes an Operational Identifier for a <Root Public Key, " +
                        "FabricID> pair already present on the device, then the device shall process the error by responding " +
                        "with a StatusCode of FabricConflict as described in Section 11.18.6.7.2, “Handling Errors”." +
                        "\n" +
                        "If the device already has the CommissionedFabrics attribute equal to the SupportedFabrics attribute, " +
                        "then the device’s operational credentials table is considered full and the device shall process the " +
                        "error by responding with a StatusCode of TableFull as described in Section 11.18.6.7.2, “Handling " +
                        "Errors”." +
                        "\n" +
                        "If the CaseAdminSubject field is not a valid ACL subject in the context of AuthMode set to CASE, " +
                        "such as not being in either the Operational or CASE Authenticated Tag range, then the device shall " +
                        "process the error by responding with a StatusCode of InvalidAdminSubject as described in Section " +
                        "11.18.6.7.2, “Handling Errors”." +
                        "\n" +
                        "Otherwise, the command is considered an addition of credentials, also known as \"joining a fabric\", " +
                        "and the following shall apply:" +
                        "\n" +
                        "  1. A new FabricIndex shall be allocated, taking the next valid fabric-index value in monotonically " +
                        "     incrementing order, wrapping around from 254 (0xFE) to 1, since value 0 is reserved and using " +
                        "     255 (0xFF) would prevent cluster specifications from using nullable fabric-idx fields." +
                        "\n" +
                        "  2. An entry within the Fabrics attribute table shall be added, reflecting the matter-fabric-id RDN " +
                        "     within the NOC’s subject, along with the public key of the trusted root of the chain and the " +
                        "     AdminVendorID field." +
                        "\n" +
                        "  3. The operational key pair associated with the incoming NOC from the NOCValue, and generated by " +
                        "     the prior CSRRequest command, shall be recorded for subsequent use during CASE within the " +
                        "     fail-safe timer period (see Section 5.5, “Commissioning Flows”)." +
                        "\n" +
                        "  4. The incoming NOCValue and ICACValue (if present) shall be stored under the FabricIndex " +
                        "     associated with the new Fabric Scope, along with the RootCACertificate provided with the prior " +
                        "     successful AddTrustedRootCertificate command invoked in the same fail-safe period." +
                        "\n" +
                        "    a. Implementation of certificate chain storage may separate or otherwise encode the components " +
                        "       of the array in implementation-specific ways, as long as they follow the correct format when " +
                        "       being read from the NOCs list or used within other protocols such as CASE." +
                        "\n" +
                        "  5. The NOCs list shall reflect the incoming NOC from the NOCValue field and ICAC from the " +
                        "     ICACValue field (if present)." +
                        "\n" +
                        "  6. The operational discovery service record shall immediately reflect the new Operational " +
                        "     Identifier, such that the Node immediately begins to exist within the Fabric and becomes " +
                        "     reachable over CASE under the new operational identity." +
                        "\n" +
                        "  7. The receiver shall create and add a new Access Control Entry using the CaseAdminSubject field " +
                        "     to grant subsequent Administer access to an Administrator member of the new Fabric. It is " +
                        "     recommended that the Administrator presented in CaseAdminSubject exist within the same entity " +
                        "     that is currently invoking the AddNOC command, within another of the Fabrics of which it is a " +
                        "     member." +
                        "\n" +
                        "    a. If the Managed Device Feature is implemented by the ACL cluster, then one or more ARL entries " +
                        "       with the new FabricIndex may be added to the ARL attribute." +
                        "\n" +
                        "  8. The incoming IPKValue shall be stored in the Fabric-scoped slot within the Group Key Management " +
                        "     cluster (see KeySetWrite), for subsequent use during CASE." +
                        "\n" +
                        "  9. The Fabric Index associated with the armed fail-safe context (see ArmFailSafe) shall be updated " +
                        "     to match the Fabric Index just allocated." +
                        "\n" +
                        "  10. If the current secure session was established with PASE, the receiver shall:" +
                        "\n" +
                        "    a. Augment the secure session context with the FabricIndex generated above, such that subsequent " +
                        "       interactions have the proper accessing fabric." +
                        "\n" +
                        "  11. If the current secure session was established with CASE, subsequent configuration of the newly " +
                        "      installed Fabric requires the opening of a new CASE session from the Administrator from the " +
                        "      Fabric just installed. This Administrator is the one listed in the CaseAdminSubject argument." +
                        "\n" +
                        "Thereafter, the Node shall respond with an NOCResponse with a StatusCode of OK and a FabricIndex " +
                        "field matching the FabricIndex under which the new Node Operational Certificate (NOC) is scoped."
                }
            ]
        },

        {
            tag: "command", name: "UpdateNoc", xref: "core§11.18.6.9",

            details: "This command shall replace the NOC and optional associated ICAC (if present) scoped under the " +
                "accessing fabric upon successful validation of all arguments and preconditions. The new value shall " +
                "immediately be reflected in the NOCs list attribute." +
                "\n" +
                "A Commissioner or Administrator shall issue this command after issuing the CSRRequest Command and " +
                "receiving its response." +
                "\n" +
                "A Commissioner or Administrator SHOULD issue this command after performing the Attestation " +
                "Procedure." +
                "\n" +
                "### Effect When Received" +
                "\n" +
                "If this command is received without an armed fail-safe context (see ArmFailSafe), then this command " +
                "shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator." +
                "\n" +
                "If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, " +
                "then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator." +
                "\n" +
                "If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer " +
                "period, then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator, " +
                "since the only valid following logical operation is invoking the AddNOC command." +
                "\n" +
                "If the prior CSRRequest state that preceded UpdateNOC had the IsForUpdateNOC field indicated as " +
                "false, then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator." +
                "\n" +
                "If any of the following conditions arise, the Node shall process an error by responding with an " +
                "NOCResponse with a StatusCode of InvalidNOC as described in Section 11.18.6.7.2, “Handling Errors”:" +
                "\n" +
                "  • The NOC provided in the NOCValue does not refer in its subject to the FabricID associated with " +
                "    the accessing fabric." +
                "\n" +
                "  • The ICAC provided in the ICACValue (if present) has a FabricID in its subject that does not " +
                "    match the FabricID associated with the accessing fabric." +
                "\n" +
                "Otherwise, the command is considered an update of existing credentials for a given Fabric, and the " +
                "following shall apply:" +
                "\n" +
                "  1. The Operational Certificate under the accessing fabric index in the NOCs list shall be updated " +
                "     to match the incoming NOCValue and ICACValue (if present), such that the Node’s Operational " +
                "     Identifier within the Fabric immediately changes." +
                "\n" +
                "    a. The operational key pair associated with the incoming NOC from the NOCValue, and generated by " +
                "       the prior CSRRequest command, shall be committed to permanent storage, for subsequent use " +
                "       during CASE." +
                "\n" +
                "    b. The operational discovery service record shall immediately reflect the new Operational " +
                "       Identifier." +
                "\n" +
                "    c. All internal data reflecting the prior operational identifier of the Node within the Fabric " +
                "       shall be revoked and removed, to an outcome equivalent to the disappearance of the prior " +
                "       Node, except for the ongoing CASE session context, which shall temporarily remain valid until " +
                "       the NOCResponse has been successfully delivered or until the next transport-layer error, so " +
                "       that the response can be received by the Administrator invoking the command." +
                "\n" +
                "Thereafter, the Node shall respond with an NOCResponse with a StatusCode of OK and a FabricIndex " +
                "field matching the FabricIndex under which the updated NOC is scoped."
        },

        {
            tag: "command", name: "NocResponse", xref: "core§11.18.6.10",

            details: "This command shall be generated in response to the following commands:" +
                "\n" +
                "  • AddNOC" +
                "\n" +
                "  • UpdateNOC" +
                "\n" +
                "  • UpdateFabricLabel" +
                "\n" +
                "  • RemoveFabric" +
                "\n" +
                "It provides status information about the success or failure of those commands.",

            children: [
                {
                    tag: "field", name: "StatusCode", xref: "core§11.18.6.10.1",
                    details: "This field shall contain an NOCStatus value representing the status of an operation involving a NOC."
                },
                {
                    tag: "field", name: "FabricIndex", xref: "core§11.18.6.10.2",
                    details: "This field shall be present whenever StatusCode has a value of OK. If present, it shall contain the " +
                        "Fabric Index of the Fabric last added, removed or updated."
                },

                {
                    tag: "field", name: "DebugText", xref: "core§11.18.6.10.3",
                    details: "This field may contain debugging textual information from the cluster implementation, which SHOULD " +
                        "NOT be presented to user interfaces in any way. Its purpose is to help developers in troubleshooting " +
                        "errors and the contents may go into logs or crash reports."
                }
            ]
        },

        {
            tag: "command", name: "UpdateFabricLabel", xref: "core§11.18.6.11",

            details: "This command shall be used by an Administrator to set the user-visible Label field for a given " +
                "Fabric, as reflected by entries in the Fabrics attribute. An Administrator shall use this command to " +
                "set the Label to a string (possibly selected by the user themselves) that the user can recognize and " +
                "relate to this Administrator" +
                "\n" +
                "  • during the commissioning process, and" +
                "\n" +
                "  • whenever the user chooses to update this string." +
                "\n" +
                "The Label field, along with the VendorID field in the same entry of the Fabrics attribute, SHOULD be " +
                "used by Administrators to provide additional per-fabric context when operations such as RemoveFabric " +
                "are considered or used.",

            children: [{
                tag: "field", name: "Label", xref: "core§11.18.6.11.1",

                details: "This field shall contain the label to set for the fabric associated with the current secure session." +
                    "\n" +
                    "### Effect on Receipt" +
                    "\n" +
                    "If the Label field is identical to a Label already in use by a Fabric within the Fabrics list that " +
                    "is not the accessing fabric, then an NOCResponse with a StatusCode of LabelConflict shall be " +
                    "returned for the command and there shall NOT be any permanent changes to any Fabric data." +
                    "\n" +
                    "Otherwise, the Label field for the accessing fabric shall immediately be updated to reflect the " +
                    "Label argument provided. Following the update, an NOCResponse with a StatusCode of OK shall be " +
                    "returned." +
                    "\n" +
                    "If the command was invoked within a fail-safe context after a successful UpdateNOC command, then the " +
                    "label update shall apply to the pending update state that will be reverted if fail-safe expires " +
                    "prior to a CommissioningComplete command. In other words, label updates apply to the state of the " +
                    "Fabrics Attribute as currently visible, even for an existing fabric currently in process of being " +
                    "updated."
            }]
        },

        {
            tag: "command", name: "RemoveFabric", xref: "core§11.18.6.12",

            details: "This command is used by Administrators to remove a given Fabric and delete all associated " +
                "fabric-scoped data." +
                "\n" +
                "If the given Fabric being removed is the last one to reference a given Trusted Root CA Certificate " +
                "stored in the Trusted Root Certificates list, then that Trusted Root Certificate shall be removed." +
                "\n" +
                "This command, if referring to an already existing Fabric not under the control of the invoking " +
                "Administrator, shall ONLY be invoked after obtaining some form of explicit user consent through some " +
                "method executed by the Administrator or Commissioner. This method of obtaining consent SHOULD employ " +
                "as much data as possible about the existing Fabric associations within the Fabrics list, so that " +
                "likelihood is as small as possible of a user removing a Fabric unwittingly. If a method exists for " +
                "an Administrator or Commissioner to convey Fabric Removal to an entity related to that Fabric, " +
                "whether in-band or out-of-band, then this method SHOULD be used to notify the other Administrative " +
                "Domain’s party of the removal. Otherwise, users may only observe the removal of a Fabric association " +
                "as persistently failing attempts to reach a Node operationally.",

            children: [{
                tag: "field", name: "FabricIndex", xref: "core§11.18.6.12.1",

                details: "This field shall contain the Fabric Index reference (see fabric-index) associated with the Fabric " +
                    "which is to be removed from the device." +
                    "\n" +
                    "### Effect on Receipt" +
                    "\n" +
                    "If the FabricIndex field does not match the FabricIndex of any entry within the Fabrics list, then " +
                    "an NOCResponse with a StatusCode of InvalidFabricIndex shall be returned for the command and there " +
                    "shall NOT be any permanent changes to any device data." +
                    "\n" +
                    "Otherwise, one of the following outcomes shall occur:" +
                    "\n" +
                    "  1. If the FabricIndex matches the last remaining entry in the Fabrics list, then the device shall " +
                    "     delete all Matter related data on the node which was created since it was commissioned. This " +
                    "     includes all Fabric-Scoped data, including Access Control List, Access Restriction List, " +
                    "     bindings, scenes, group keys, operational certificates, etc. All Trusted Roots shall also be " +
                    "     removed. If a time synchronization cluster is present on the Node, the TrustedTimeSource and " +
                    "     DefaultNtp shall be set to null. Any Matter related data including logs, secure sessions, " +
                    "     exchanges and interaction model constructs shall also be removed. Since this operation involves " +
                    "     the removal of the secure session data that may underpin the current set of exchanges, the Node " +
                    "     invoking the command SHOULD NOT expect a response before terminating its secure session with " +
                    "     the target." +
                    "\n" +
                    "  2. If the FabricIndex does not equal the accessing fabric index, then the device shall begin the " +
                    "     process of irrevocably deleting all associated Fabric-Scoped data, including Access Control " +
                    "     Entries, Access Restriction Entries, bindings, group keys, operational certificates, etc. Any " +
                    "     remaining Trusted Roots no longer referenced by any operational certificate shall also be " +
                    "     removed. If a time synchronization cluster is present on the Node, and the TrustedTimeSource " +
                    "     FabricIndex matches the given FabricIndex, the TrustedTimeSource shall be set to null. All " +
                    "     secure sessions, exchanges and interaction model constructs related to the Operational Identity " +
                    "     under the given Fabric shall also be removed. Following the removal, an NOCResponse with a " +
                    "     StatusCode of OK shall be returned." +
                    "\n" +
                    "  3. If the FabricIndex equals the accessing fabric index, then the device shall begin the process " +
                    "     of irrevocably deleting all associated Fabric-Scoped data, including Access Control Entries, " +
                    "     Access Restriction Entries, bindings, group keys, operational certificates, etc. Any remaining " +
                    "     Trusted Roots no longer referenced by any operational certificate shall also be removed. If a " +
                    "     time synchronization cluster is present on the Node, and the TrustedTimeSource FabricIndex " +
                    "     matches the given FabricIndex, the TrustedTimeSource shall be set to null. All secure sessions, " +
                    "     exchanges and interaction model constructs related to the Operational Identity under the given " +
                    "     Fabric shall also be removed. Since this operation involves the removal of the secure session " +
                    "     data that may underpin the current set of exchanges, the Node invoking the command SHOULD NOT " +
                    "     expect a response before terminating its secure session with the target."
            }]
        },

        {
            tag: "command", name: "AddTrustedRootCertificate", xref: "core§11.18.6.13",

            details: "This command shall add a Trusted Root CA Certificate, provided as its Matter Certificate Encoding " +
                "representation, to the TrustedRootCertificates Attribute list and shall ensure the next AddNOC " +
                "command executed uses the provided certificate as its root of trust." +
                "\n" +
                "If the certificate from the RootCACertificate field is already installed, based on exact " +
                "byte-for-byte equality, then this command shall succeed with no change to the list." +
                "\n" +
                "If this command is received without an armed fail-safe context (see ArmFailSafe), then this command " +
                "shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator." +
                "\n" +
                "If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer " +
                "period, which would cause the new invocation to add a second root certificate within a given " +
                "fail-safe timer period, then this command shall fail with a CONSTRAINT_ERROR status code sent back " +
                "to the initiator." +
                "\n" +
                "If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, " +
                "then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator." +
                "\n" +
                "If the certificate from the RootCACertificate field fails any validity checks, not fulfilling all " +
                "the requirements for a valid Matter Certificate Encoding representation, including a truncated or " +
                "oversize value, then this command shall fail with an INVALID_COMMAND status code sent back to the " +
                "initiator." +
                "\n" +
                "Note that the only method of removing a trusted root is by removing the Fabric that uses it as its " +
                "root of trust using the RemoveFabric command."
        },

        {
            tag: "datatype", name: "CertificateChainTypeEnum", xref: "core§11.18.4.2",
            details: "This enumeration is used by the CertificateChainRequest command to convey which certificate from the " +
                "device attestation certificate chain to transmit back to the client.",
            children: [
                { tag: "field", name: "DacCertificate", description: "Request the DER- encoded DAC certificate" },
                { tag: "field", name: "PaiCertificate", description: "Request the DER- encoded PAI certificate" }
            ]
        },

        {
            tag: "datatype", name: "NodeOperationalCertStatusEnum", xref: "core§11.18.4.3",
            details: "This enumeration is used by the NOCResponse common response command to convey detailed outcome of " +
                "several of this cluster’s operations.",

            children: [
                { tag: "field", name: "Ok", description: "OK, no error" },
                {
                    tag: "field", name: "InvalidPublicKey",
                    description: "Public Key in the NOC does not match the public key in the NOCSR"
                },
                {
                    tag: "field", name: "InvalidNodeOpId",
                    description: "The Node Operational ID in the NOC is not formatted correctly."
                },
                { tag: "field", name: "InvalidNoc", description: "Any other validation error in NOC chain" },
                {
                    tag: "field", name: "MissingCsr",
                    description: "No record of prior CSR for which this NOC could match"
                },
                { tag: "field", name: "TableFull", description: "NOCs table full, cannot add another one" },
                {
                    tag: "field", name: "InvalidAdminSubject",
                    description: "Invalid CaseAdminSubject field for an AddNOC command."
                },
                {
                    tag: "field", name: "FabricConflict",
                    description: "Trying to AddNOC instead of UpdateNOC against an existing Fabric."
                },
                { tag: "field", name: "LabelConflict", description: "Label already exists on another Fabric." },
                { tag: "field", name: "InvalidFabricIndex", description: "FabricIndex argument is invalid." }
            ]
        },

        {
            tag: "datatype", name: "NOCStruct", xref: "core§11.18.4.4",
            details: "This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a " +
                "given Node." +
                "\n" +
                "Note that the Trusted Root CA Certificate is not included in this structure. The roots are available " +
                "in the TrustedRootCertificates attribute of the Node Operational Credentials cluster.",

            children: [
                {
                    tag: "field", name: "Noc", xref: "core§11.18.4.4.1",
                    details: "This field shall contain the NOC for the struct’s associated fabric, encoded using Matter " +
                        "Certificate Encoding."
                },
                {
                    tag: "field", name: "Icac", xref: "core§11.18.4.4.2",
                    details: "This field shall contain the ICAC or the struct’s associated fabric, encoded using Matter " +
                        "Certificate Encoding. If no ICAC is present in the chain, this field shall be set to null."
                }
            ]
        },

        {
            tag: "datatype", name: "FabricDescriptorStruct", xref: "core§11.18.4.5",
            details: "This structure encodes a Fabric Reference for a fabric within which a given Node is currently " +
                "commissioned.",

            children: [
                {
                    tag: "field", name: "RootPublicKey", xref: "core§11.18.4.5.1",
                    details: "This field shall contain the public key for the trusted root that scopes the fabric referenced by " +
                        "FabricIndex and its associated operational credential (see Section 6.4.5.3, “Trusted Root CA " +
                        "Certificates”). The format for the key shall be the same as that used in the ec-pub-key field of the " +
                        "Matter Certificate Encoding for the root in the operational certificate chain."
                },

                {
                    tag: "field", name: "VendorId", xref: "core§11.18.4.5.2",

                    details: "This field shall contain the value of AdminVendorID provided in the AddNOC command that led to the " +
                        "creation of this FabricDescriptorStruct. The set of allowed values is defined in AdminVendorID." +
                        "\n" +
                        "The intent is to provide some measure of user transparency about which entities have Administer " +
                        "privileges on the Node." +
                        "\n" +
                        "Clients shall consider the VendorID field value to be untrustworthy until the NOC chain associated " +
                        "with the fabric has passed the Vendor ID Validation Procedure against the associated RCAC."
                },

                {
                    tag: "field", name: "FabricId", xref: "core§11.18.4.5.3",
                    details: "This field shall contain the FabricID allocated to the fabric referenced by FabricIndex. This field " +
                        "shall match the value found in the matter-fabric-id field from the operational certificate providing " +
                        "the operational identity under this Fabric."
                },

                {
                    tag: "field", name: "NodeId", xref: "core§11.18.4.5.4",
                    details: "This field shall contain the NodeID in use within the fabric referenced by FabricIndex. This field " +
                        "shall match the value found in the matter-node-id field from the operational certificate providing " +
                        "this operational identity."
                },

                {
                    tag: "field", name: "Label", xref: "core§11.18.4.5.5",
                    details: "This field shall contain a commissioner-set label for the fabric referenced by FabricIndex. This " +
                        "label is set by the UpdateFabricLabel command."
                }
            ]
        }
    ]
});
