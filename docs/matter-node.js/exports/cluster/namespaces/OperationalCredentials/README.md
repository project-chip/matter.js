[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / OperationalCredentials

# Namespace: OperationalCredentials

## Index

### Enumerations

- [CertificateChainType](enumerations/CertificateChainType.md)
- [NodeOperationalCertStatus](enumerations/NodeOperationalCertStatus.md)

### Interfaces

- [AddNocRequest](interfaces/AddNocRequest.md)
- [AddTrustedRootCertificateRequest](interfaces/AddTrustedRootCertificateRequest.md)
- [AttestationRequest](interfaces/AttestationRequest.md)
- [AttestationResponse](interfaces/AttestationResponse.md)
- [CertificateChainRequest](interfaces/CertificateChainRequest.md)
- [CertificateChainResponse](interfaces/CertificateChainResponse.md)
- [Cluster](interfaces/Cluster.md)
- [CsrRequest](interfaces/CsrRequest.md)
- [CsrResponse](interfaces/CsrResponse.md)
- [FabricDescriptorStruct](interfaces/FabricDescriptorStruct.md)
- [NOCStruct](interfaces/NOCStruct.md)
- [NocResponse](interfaces/NocResponse.md)
- [RemoveFabricRequest](interfaces/RemoveFabricRequest.md)
- [UpdateFabricLabelRequest](interfaces/UpdateFabricLabelRequest.md)
- [UpdateNocRequest](interfaces/UpdateNocRequest.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:1298

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.commissionedFabrics

> `readonly` **commissionedFabrics**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute contains the number of Fabrics to which the device is currently commissioned. This
attribute shall be equal to the following:

  • The number of entries in the NOCs attribute.

  • The number of entries in the Fabrics attribute.

Upon Factory Data Reset, this attribute shall be set to a default value of 0.

###### See

MatterSpecification.v11.Core § 11.17.5.4

##### attributes.currentFabricIndex

> `readonly` **currentFabricIndex**: [`Attribute`](../../interfaces/Attribute.md)\<[`FabricIndex`](../../../datatype/README.md#fabricindex), `any`\>

This attribute shall contain accessing fabric index.

This attribute is useful to contextualize Fabric-Scoped entries obtained from response commands or
attribute reads, since a given Fabric may be referenced by a different Fabric Index locally on a remote
Node.

###### See

MatterSpecification.v11.Core § 11.17.5.6

##### attributes.fabrics

> `readonly` **fabrics**: [`FabricScopedAttribute`](../../interfaces/FabricScopedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This attribute describes all fabrics to which this Node is commissioned, encoded as a read-only list of
FabricDescriptorStruct. This information may be computed directly from the NOCs attribute.

Upon Factory Data Reset, this attribute shall be set to a default value of an empty list.

The number of entries in this list shall match the number of entries in the NOCs attribute.

###### See

MatterSpecification.v11.Core § 11.17.5.2

##### attributes.nocs

> `readonly` **nocs**: [`FabricScopedAttribute`](../../interfaces/FabricScopedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This attribute contains all NOCs applicable to this Node, encoded as a read-only list of NOCStruct.

Operational Certificates shall be added through the AddNOC command, and shall be removed through the
RemoveFabric command.

Upon Factory Data Reset, this attribute shall be set to a default value of an empty list.

The number of entries in this list shall match the number of entries in the Fabrics attribute.

###### See

MatterSpecification.v11.Core § 11.17.5.1

##### attributes.supportedFabrics

> `readonly` **supportedFabrics**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute contains the number of Fabrics that are supported by the device. This value is fixed for
a particular device.

###### See

MatterSpecification.v11.Core § 11.17.5.3

##### attributes.trustedRootCertificates

> `readonly` **trustedRootCertificates**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array`[], `any`\>

This attribute shall contain a read-only list of Trusted Root CA Certificates installed on the Node, as
octet strings containing their Matter Certificate Encoding representation.

These certificates are installed through the AddTrustedRootCertificate command.

Depending on the method of storage employed by the server, either shared storage for identical root
certificates shared by many fabrics, or individually stored root certificate per fabric, multiple

identical root certificates may legally appear within the list.

To match a root with a given fabric, the root certificate’s subject and subject public key need to be
cross-referenced with the NOC or ICAC certificates that appear in the NOCs attribute for a given fabric.

Upon Factory Data Reset, this attribute shall be set to a default value whereby the list is empty.

###### See

MatterSpecification.v11.Core § 11.17.5.5

##### commands

> `readonly` **commands**: `object`

##### commands.addNoc

> `readonly` **addNoc**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command shall add a new NOC chain to the device and commission a new Fabric association upon
successful validation of all arguments and preconditions.

The new value shall immediately be reflected in the NOCs list attribute.

A Commissioner or Administrator shall issue this command after issuing the CSRRequest command and
receiving its response.

A Commissioner or Administrator SHOULD issue this command after performing the Attestation Procedure.

###### See

MatterSpecification.v11.Core § 11.17.6.8

##### commands.addTrustedRootCertificate

> `readonly` **addTrustedRootCertificate**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command shall add a Trusted Root CA Certificate, provided as its Matter Certificate Encoding
representation, to the TrustedRootCertificates Attribute list and shall ensure the next AddNOC command
executed uses the provided certificate as its root of trust.

If the certificate from the RootCACertificate field is already installed, based on exact byte-for-byte
equality, then this command shall succeed with no change to the list.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer period,
which would cause the new invocation to add a second root certificate within a given fail- safe timer
period, then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If the certificate from the RootCACertificate field fails any validity checks, not fulfilling all the
requirements for a valid Matter Certificate Encoding representation, including a truncated or oversize
value, then this command shall fail with an INVALID_COMMAND status code sent back to the initiator.

Note that the only method of removing a trusted root is by removing the Fabric that uses it as its root
of trust using the RemoveFabric command.

###### See

MatterSpecification.v11.Core § 11.17.6.13

##### commands.attestationRequest

> `readonly` **attestationRequest**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command shall be generated to request the Attestation Information, in the form of an
AttestationResponse Command. If the AttestationNonce that is provided in the command is malformed, a

recipient shall fail the command with a Status Code of INVALID_COMMAND. The AttestationNonce field shall
be used in the computation of the Attestation Information.

###### See

MatterSpecification.v11.Core § 11.17.6.1

##### commands.certificateChainRequest

> `readonly` **certificateChainRequest**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

If the CertificateType is not a valid value per CertificateChainTypeEnum then the command shall fail
with a Status Code of INVALID_COMMAND.

###### See

MatterSpecification.v11.Core § 11.17.6.3

##### commands.csrRequest

> `readonly` **csrRequest**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command shall be generated to execute the Node Operational CSR Procedure and subsequently return
the NOCSR Information, in the form of a CSRResponse Command.

The CSRNonce field shall be used in the computation of the NOCSR Information. If the CSRNonce is
malformed, then this command shall fail with an INVALID_COMMAND status code.

If the IsForUpdateNOC field is present and set to true, but the command was received over a PASE
session, the command shall fail with an INVALID_COMMAND status code, as it would never be possible to
use a resulting subsequent certificate issued from the CSR with the UpdateNOC command, which is
forbidden over PASE sessions.

If the IsForUpdateNOC field is present and set to true, the internal state of the CSR associated keypair
shall be tagged as being for a subsequent UpdateNOC, otherwise the internal state of the CSR shall be
tagged as being for a subsequent AddNOC. See Section 11.17.6.8, “AddNOC Command” and Section 11.17.6.9,
“UpdateNOC Command” for details about the processing.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If the Node Operational Key Pair generated during processing of the Node Operational CSR Procedure is
found to collide with an existing key pair already previously generated and installed, and that check
had been executed, then this command shall fail with a FAILURE status code sent back to the initiator.

###### See

MatterSpecification.v11.Core § 11.17.6.5

##### commands.removeFabric

> `readonly` **removeFabric**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command is used by Administrators to remove a given Fabric and delete all associated fabric-scoped
data.

If the given Fabric being removed is the last one to reference a given Trusted Root CA Certificate
stored in the Trusted Root Certificates list, then that Trusted Root Certificate shall be removed.

WARNING

This command, if referring to an already existing Fabric not under the control of the invoking
Administrator, shall ONLY be invoked after obtaining some form of explicit user consent through some
method executed by the Administrator or Commissioner. This method of obtaining consent SHOULD employ as
much data as possible about the existing Fabric associations within the Fabrics list, so that likelihood
is as small as possible of a user removing a Fabric unwittingly. If a method exists for an Administrator
or Commissioner to convey Fabric Removal to an entity related to that Fabric, whether in-band or
out-of-band, then this method SHOULD be used to notify the other Administrative Domain’s party of the
removal. Otherwise, users may only observe the removal of a Fabric association as persistently failing
attempts to reach a Node operationally.

###### See

MatterSpecification.v11.Core § 11.17.6.12

##### commands.updateFabricLabel

> `readonly` **updateFabricLabel**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command shall be used by an Administrator to set the user-visible Label field for a given Fabric,
as reflected by entries in the Fabrics attribute.

The Label SHOULD be used by Administrators to provide additional per-fabric context when operations such
as RemoveFabric are used.

###### See

MatterSpecification.v11.Core § 11.17.6.11

##### commands.updateNoc

> `readonly` **updateNoc**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command shall replace the NOC and optional associated ICAC (if present) scoped under the accessing
fabric upon successful validation of all arguments and preconditions. The new value shall immediately be
reflected in the NOCs list attribute.

A Commissioner or Administrator shall issue this command after issuing the CSRRequest Command and
receiving its response.

A Commissioner or Administrator SHOULD issue this command after performing the Attestation Procedure.

Effect When Received

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer period,
then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator, since the
only valid following logical operation is invoking the AddNOC command.

If the prior CSRRequest state that preceded UpdateNOC had the IsForUpdateNOC field indicated as false,
then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If any of the following conditions arise, the Node shall process an error by responding with an
NOCResponse with a StatusCode of InvalidNOC as described in Section 11.17.6.7.2, “Handling Errors”:

  • The NOC provided in the NOCValue does not refer in its subject to the FabricID associated with the
    accessing fabric.

  • The ICAC provided in the ICACValue (if present) has a FabricID in its subject that does not match
    the FabricID associated with the accessing fabric.

Otherwise, the command is considered an update of existing credentials for a given Fabric, and the
following shall apply:

  1. The Operational Certificate under the accessing fabric index in the NOCs list shall be updated to
     match the incoming NOCValue and ICACValue (if present), such that the Node’s Operational Identifier
     within the Fabric immediately changes.

    a. The operational key pair associated with the incoming NOC from the NOCValue, and generated by the
       prior CSRRequest command, shall be committed to permanent storage, for subsequent use during CASE.

    b. The operational discovery service record shall immediately reflect the new Operational Identifier.

    c. All internal data reflecting the prior operational identifier of the Node within the Fabric shall
       be revoked and removed, to an outcome equivalent to the disappearance of the prior Node, except
       for the ongoing CASE session context, which shall temporarily remain valid until the NOCResponse
       has been successfully delivered or until the next transport-layer error, so that the response can
       be received by the Administrator invoking the command.

Thereafter, the Node shall respond with an NOCResponse with a StatusCode of OK and a FabricIndex field
matching the FabricIndex under which the updated NOC is scoped.

###### See

MatterSpecification.v11.Core § 11.17.6.9

##### id

> `readonly` **id**: `62`

##### name

> `readonly` **name**: `"OperationalCredentials"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:636

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:1301

***

### TlvAddNocRequest

> `const` **TlvAddNocRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OperationalCredentials addNoc command

#### See

MatterSpecification.v11.Core § 11.17.6.8

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:268

***

### TlvAddTrustedRootCertificateRequest

> `const` **TlvAddTrustedRootCertificateRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OperationalCredentials addTrustedRootCertificate command

#### See

MatterSpecification.v11.Core § 11.17.6.13

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:623

***

### TlvAttestationRequest

> `const` **TlvAttestationRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OperationalCredentials attestationRequest command

#### See

MatterSpecification.v11.Core § 11.17.6.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:111

***

### TlvAttestationResponse

> `const` **TlvAttestationResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command shall be generated in response to an Attestation Request command.

See Section 11.17.4.7, “Attestation Information” for details about the generation of the fields within this
response command.

See Section F.2, “Device Attestation Response test vector” for an example computation of an AttestationResponse.

#### See

MatterSpecification.v11.Core § 11.17.6.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:131

***

### TlvCertificateChainRequest

> `const` **TlvCertificateChainRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OperationalCredentials certificateChainRequest command

#### See

MatterSpecification.v11.Core § 11.17.6.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:179

***

### TlvCertificateChainResponse

> `const` **TlvCertificateChainResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command shall be generated in response to a CertificateChainRequest command.

#### See

MatterSpecification.v11.Core § 11.17.6.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:194

***

### TlvCsrRequest

> `const` **TlvCsrRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OperationalCredentials csrRequest command

#### See

MatterSpecification.v11.Core § 11.17.6.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:215

***

### TlvCsrResponse

> `const` **TlvCsrResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command shall be generated in response to a CSRRequest Command.

See Section 11.17.4.9, “NOCSR Information” for details about the generation of the fields within this response
command.

See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.

#### See

MatterSpecification.v11.Core § 11.17.6.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:236

***

### TlvFabricDescriptorStruct

> `const` **TlvFabricDescriptorStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This structure encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.

#### See

MatterSpecification.v11.Core § 11.17.4.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:53

***

### TlvNOCStruct

> `const` **TlvNOCStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.

Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
TrustedRootCertificates attribute of the Node Operational Credentials cluster.

#### See

MatterSpecification.v11.Core § 11.17.4.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:21

***

### TlvNocResponse

> `const` **TlvNocResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command shall be generated in response to the following commands:

  • AddNOC

  • UpdateNOC

  • UpdateFabricLabel

  • RemoveFabric

It provides status information about the success or failure of those commands.

#### See

MatterSpecification.v11.Core § 11.17.6.10

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:471

***

### TlvRemoveFabricRequest

> `const` **TlvRemoveFabricRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OperationalCredentials removeFabric command

#### See

MatterSpecification.v11.Core § 11.17.6.12

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:569

***

### TlvUpdateFabricLabelRequest

> `const` **TlvUpdateFabricLabelRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OperationalCredentials updateFabricLabel command

#### See

MatterSpecification.v11.Core § 11.17.6.11

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:533

***

### TlvUpdateNocRequest

> `const` **TlvUpdateNocRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OperationalCredentials updateNoc command

#### See

MatterSpecification.v11.Core § 11.17.6.9

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:516
