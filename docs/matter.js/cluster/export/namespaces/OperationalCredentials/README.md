[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / OperationalCredentials

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

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:1023](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L1023)

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

> `readonly` **currentFabricIndex**: [`Attribute`](../../interfaces/Attribute.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex), `any`\>

This attribute shall contain accessing fabric index.

This attribute is useful to contextualize Fabric-Scoped entries obtained from response commands or
attribute reads, since a given Fabric may be referenced by a different Fabric Index locally on a remote
Node.

###### See

MatterSpecification.v11.Core § 11.17.5.6

##### attributes.fabrics

> `readonly` **fabrics**: [`FabricScopedAttribute`](../../interfaces/FabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute describes all fabrics to which this Node is commissioned, encoded as a read-only list of
FabricDescriptorStruct. This information may be computed directly from the NOCs attribute.

Upon Factory Data Reset, this attribute shall be set to a default value of an empty list.

The number of entries in this list shall match the number of entries in the NOCs attribute.

###### See

MatterSpecification.v11.Core § 11.17.5.2

##### attributes.nocs

> `readonly` **nocs**: [`FabricScopedAttribute`](../../interfaces/FabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

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

> `readonly` **addNoc**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This command shall add a new NOC chain to the device and commission a new Fabric association upon
successful validation of all arguments and preconditions.

The new value shall immediately be reflected in the NOCs list attribute.

A Commissioner or Administrator shall issue this command after issuing the CSRRequest command and
receiving its response.

A Commissioner or Administrator SHOULD issue this command after performing the Attestation Procedure.

###### See

MatterSpecification.v11.Core § 11.17.6.8

##### commands.addTrustedRootCertificate

> `readonly` **addTrustedRootCertificate**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

> `readonly` **attestationRequest**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This command shall be generated to request the Attestation Information, in the form of an
AttestationResponse Command. If the AttestationNonce that is provided in the command is malformed, a

recipient shall fail the command with a Status Code of INVALID_COMMAND. The AttestationNonce field shall
be used in the computation of the Attestation Information.

###### See

MatterSpecification.v11.Core § 11.17.6.1

##### commands.certificateChainRequest

> `readonly` **certificateChainRequest**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

If the CertificateType is not a valid value per CertificateChainTypeEnum then the command shall fail
with a Status Code of INVALID_COMMAND.

###### See

MatterSpecification.v11.Core § 11.17.6.3

##### commands.csrRequest

> `readonly` **csrRequest**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **removeFabric**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **updateFabricLabel**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This command shall be used by an Administrator to set the user-visible Label field for a given Fabric,
as reflected by entries in the Fabrics attribute.

The Label SHOULD be used by Administrators to provide additional per-fabric context when operations such
as RemoveFabric are used.

###### See

MatterSpecification.v11.Core § 11.17.6.11

##### commands.updateNoc

> `readonly` **updateNoc**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **id**: `62` = `0x3e`

##### name

> `readonly` **name**: `"OperationalCredentials"` = `"OperationalCredentials"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:694](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L694)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:1026](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L1026)

***

### TlvAddNocRequest

> `const` **TlvAddNocRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OperationalCredentials addNoc command

#### See

MatterSpecification.v11.Core § 11.17.6.8

#### Type declaration

##### adminVendorId

> **adminVendorId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`VendorId`](../../../../datatype/export/README.md#vendorid)\>

This field shall be set to the Vendor ID of the entity issuing the AddNOC command. This value shall NOT be
one of the reserved Vendor ID values defined in Table 1, “Vendor ID Allocations”.

### Effect When Received

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If the prior CSRRequest state that preceded AddNOC had the IsForUpdateNOC field indicated as true, then this
command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If no prior AddTrustedRootCertificate command was successfully executed within the fail-safe timer period,
then this command shall process an error by responding with a NOCResponse with a StatusCode of InvalidNOC as
described in Section 11.17.6.7.2, “Handling Errors”. In other words,

AddNOC always requires that the client provides the root of trust certificate within the same Fail- Safe
context as the rest of the new fabric’s operational credentials, even if some other fabric already uses the
exact same root of trust certificate.

If the NOC provided in the NOCValue encodes an Operational Identifier for a <Root Public Key, FabricID> pair
already present on the device, then the device shall process the error by responding with a StatusCode of
FabricConflict as described in Section 11.17.6.7.2, “Handling Errors”.

If the device already has the CommissionedFabrics attribute equal to the SupportedFabrics attribute, then
the device’s operational credentials table is considered full and the device shall process the error by
responding with a StatusCode of TableFull as described in Section 11.17.6.7.2, “Handling Errors”.

If the CaseAdminSubject field is not a valid ACL subject in the context of AuthMode set to CASE, such as not
being in either the Operational or CASE Authenticated Tag range, then the device shall process the error by
responding with a StatusCode of InvalidAdminSubject as described in Section 11.17.6.7.2, “Handling Errors”.

Otherwise, the command is considered an addition of credentials, also known as "joining a fabric", and the
following shall apply:

  1. A new FabricIndex shall be allocated, taking the next valid fabric-index value in monotonically
      incrementing order, wrapping around from 254 (0xFE) to 1, since value 0 is reserved and using 255
      (0xFF) would prevent cluster specifications from using nullable fabric-idx fields.

  2. An entry within the Fabrics attribute table shall be added, reflecting the matter-fabric-id RDN within
      the NOC’s subject, along with the public key of the trusted root of the chain and the AdminVendorID
      field.

  3. The operational key pair associated with the incoming NOC from the NOCValue, and generated by the prior
      CSRRequest command, shall be recorded for subsequent use during CASE within the fail-safe timer period
      (see Section 5.5, “Commissioning Flows”).

  4. The incoming NOCValue and ICACValue (if present) shall be stored under the FabricIndex associated with
      the new Fabric Scope, along with the RootCACertificate provided with the prior successful
      AddTrustedRootCertificate command invoked in the same fail-safe period.

    a. Implementation of certificate chain storage may separate or otherwise encode the components of the
       array in implementation-specific ways, as long as they follow the correct format when being read from
       the NOCs list or used within other protocols such as CASE.

  5. The NOCs list shall reflect the incoming NOC from the NOCValue field and ICAC from the ICACValue field
      (if present).

  6. The operational discovery service record shall immediately reflect the new Operational Identifier, such
      that the Node immediately begins to exist within the Fabric and becomes reachable over CASE under the
      new operational identity.

  7. The receiver shall create and add a new Access Control Entry using the CaseAdminSubject field to grant
      subsequent Administer access to an Administrator member of the new Fabric. It is RECOMMENDED that the
      Administrator presented in CaseAdminSubject exist within the same entity that is currently invoking
      the AddNOC command, within another of the Fabrics of which it is a member.

  8. The incoming IPKValue shall be stored in the Fabric-scoped slot within the Group Key Management cluster
      (see KeySetWrite), for subsequent use during CASE.

  9. The Fabric Index associated with the armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
      Command”) shall be updated to match the Fabric Index just allocated.

  10. If the current secure session was established with PASE, the receiver shall:

    a. Augment the secure session context with the FabricIndex generated above, such that subsequent
       interactions have the proper accessing fabric.

  11. If the current secure session was established with CASE, subsequent configuration of the newly
      installed Fabric requires the opening of a new CASE session from the Administrator from the Fabric
      just installed. This Administrator is the one listed in the CaseAdminSubject argument.

Thereafter, the Node shall respond with an NOCResponse with a StatusCode of OK and a FabricIndex field
matching the FabricIndex under which the new Node Operational Certificate (NOC) is scoped.

###### See

MatterSpecification.v11.Core § 11.17.6.8.3

##### caseAdminSubject

> **caseAdminSubject**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NodeId`](../../../../datatype/export/README.md#nodeid)\>

If the AddNOC command succeeds according to the semantics of the following subsections, then the

Access Control SubjectID shall be used to atomically add an Access Control Entry enabling that Subject to
subsequently administer the Node whose operational identity is being added by this command.

The format of the new Access Control Entry, created from this, shall be:

NOTE

Unless such an Access Control Entry is added atomically as described here, there would be no way for the
caller on its given Fabric to eventually add another Access Control Entry for CASE authentication mode, to
enable the new Administrator to administer the device, since the Fabric Scoping of the Access Control List
prevents the current Node from being able to write new entries scoped to that Fabric, if the session is
established from CASE. While a session established from PASE does gain Fabric Scope of a newly-joined
Fabric, this argument is made mandatory to provide symmetry between both types of session establishment,
both of which need to eventually add an "Administer Node over CASE" Access Control Entry to finalize new
Fabric configuration and subsequently be able to call the CommissioningComplete command.

###### See

MatterSpecification.v11.Core § 11.17.6.8.2

##### icacValue

> **icacValue**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### ipkValue

> **ipkValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall contain the value of the Epoch Key for the Identity Protection Key (IPK) to set for the
Fabric which is to be added. This is needed to bootstrap a necessary configuration value for subsequent CASE
to succeed. See Section 4.13.2.6.1, “Identity Protection Key (IPK)” for details.

The IPK shall be provided as an octet string of length CRYPTO_SYMMETRIC_KEY_LENGTH_BYTES.

On successful execution of the AddNOC command, the side-effect of having provided this field shall be
equivalent to having done a GroupKeyManagement cluster KeySetWrite command invocation using the newly joined
fabric as the accessing fabric and with the following argument fields (assuming KeySetWrite allowed a
GroupKeySetID set to 0):

###### See

MatterSpecification.v11.Core § 11.17.6.8.1

##### nocValue

> **nocValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:304](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L304)

***

### TlvAddTrustedRootCertificateRequest

> `const` **TlvAddTrustedRootCertificateRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OperationalCredentials addTrustedRootCertificate command

#### See

MatterSpecification.v11.Core § 11.17.6.13

#### Type declaration

##### rootCaCertificate

> **rootCaCertificate**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:680](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L680)

***

### TlvAttestationRequest

> `const` **TlvAttestationRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OperationalCredentials attestationRequest command

#### See

MatterSpecification.v11.Core § 11.17.6.1

#### Type declaration

##### attestationNonce

> **attestationNonce**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L141)

***

### TlvAttestationResponse

> `const` **TlvAttestationResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to an Attestation Request command.

See Section 11.17.4.7, “Attestation Information” for details about the generation of the fields within this
response command.

See Section F.2, “Device Attestation Response test vector” for an example computation of an AttestationResponse.

#### See

MatterSpecification.v11.Core § 11.17.6.2

#### Type declaration

##### attestationElements

> **attestationElements**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall contain the octet string of the serialized attestation_elements_message.

###### See

MatterSpecification.v11.Core § 11.17.6.2.1

##### attestationSignature

> **attestationSignature**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall contain the octet string of the necessary attestation_signature as described in Section
11.17.4.7, “Attestation Information”.

###### See

MatterSpecification.v11.Core § 11.17.6.2.2

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:160](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L160)

***

### TlvCertificateChainRequest

> `const` **TlvCertificateChainRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OperationalCredentials certificateChainRequest command

#### See

MatterSpecification.v11.Core § 11.17.6.3

#### Type declaration

##### certificateType

> **certificateType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`CertificateChainType`](enumerations/CertificateChainType.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L212)

***

### TlvCertificateChainResponse

> `const` **TlvCertificateChainResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to a CertificateChainRequest command.

#### See

MatterSpecification.v11.Core § 11.17.6.4

#### Type declaration

##### certificate

> **certificate**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall be the DER encoded certificate corresponding to the CertificateType field in the
CertificateChainRequest command.

###### See

MatterSpecification.v11.Core § 11.17.6.4.1

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L226)

***

### TlvCsrRequest

> `const` **TlvCsrRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OperationalCredentials csrRequest command

#### See

MatterSpecification.v11.Core § 11.17.6.5

#### Type declaration

##### csrNonce

> **csrNonce**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### isForUpdateNoc

> **isForUpdateNoc**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:248](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L248)

***

### TlvCsrResponse

> `const` **TlvCsrResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to a CSRRequest Command.

See Section 11.17.4.9, “NOCSR Information” for details about the generation of the fields within this response
command.

See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.

#### See

MatterSpecification.v11.Core § 11.17.6.6

#### Type declaration

##### attestationSignature

> **attestationSignature**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall contain the octet string of the necessary attestation_signature as described in Section
11.17.4.9, “NOCSR Information”.

###### See

MatterSpecification.v11.Core § 11.17.6.6.2

##### nocsrElements

> **nocsrElements**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall contain the octet string of the serialized nocsr_elements_message.

###### See

MatterSpecification.v11.Core § 11.17.6.6.1

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:270](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L270)

***

### TlvFabricDescriptorStruct

> `const` **TlvFabricDescriptorStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This structure encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.

#### See

MatterSpecification.v11.Core § 11.17.4.5

#### Type declaration

##### fabricId

> **fabricId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricId`](../../../../datatype/export/README.md#fabricid)\>

This field shall contain the FabricID allocated to the fabric referenced by FabricIndex. This field shall
match the value found in the matter-fabric-id field from the operational certificate providing the
operational identity under this Fabric.

###### See

MatterSpecification.v11.Core § 11.17.4.5.3

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### label

> **label**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This field shall contain a commissioner-set label for the fabric referenced by FabricIndex. This label is
set by the UpdateFabricLabel command.

###### See

MatterSpecification.v11.Core § 11.17.4.5.5

##### nodeId

> **nodeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NodeId`](../../../../datatype/export/README.md#nodeid)\>

This field shall contain the NodeID in use within the fabric referenced by FabricIndex. This field shall
match the value found in the matter-node-id field from the operational certificate providing this
operational identity.

###### See

MatterSpecification.v11.Core § 11.17.4.5.4

##### rootPublicKey

> **rootPublicKey**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall contain the public key for the trusted root that scopes the fabric referenced by
FabricIndex and its associated operational credential (see Section 6.4.5.3, “Trusted Root CA Certificates”).
The format for the key shall be the same as that used in the ec-pub-key field of the Matter Certificate
Encoding for the root in the operational certificate chain.

###### See

MatterSpecification.v11.Core § 11.17.4.5.1

##### vendorId

> **vendorId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`VendorId`](../../../../datatype/export/README.md#vendorid)\>

This field shall contain the value of AdminVendorID provided in the AddNOC command that led to the creation
of this FabricDescriptorStruct. The set of allowed values is defined in Section 11.17.6.8.3, “AdminVendorID
Field”.

The intent is to provide some measure of user transparency about which entities have Administer privileges
on the Node.

###### See

MatterSpecification.v11.Core § 11.17.4.5.2

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L77)

***

### TlvNOCStruct

> `const` **TlvNOCStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.

Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
TrustedRootCertificates attribute of the Node Operational Credentials cluster.

#### See

MatterSpecification.v11.Core § 11.17.4.4

#### Type declaration

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### icac

> **icac**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `Uint8Array`\>

This field shall contain the ICAC or the struct’s associated fabric, encoded using Matter Certificate
Encoding. If no ICAC is present in the chain, this field shall be set to null.

###### See

MatterSpecification.v11.Core § 11.17.4.4.2

##### noc

> **noc**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall contain the NOC for the struct’s associated fabric, encoded using Matter Certificate
Encoding.

###### See

MatterSpecification.v11.Core § 11.17.4.4.1

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L42)

***

### TlvNocResponse

> `const` **TlvNocResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to the following commands:

  • AddNOC

  • UpdateNOC

  • UpdateFabricLabel

  • RemoveFabric

It provides status information about the success or failure of those commands.

#### See

MatterSpecification.v11.Core § 11.17.6.10

#### Type declaration

##### debugText

> **debugText**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This field may contain debugging textual information from the cluster implementation, which SHOULD NOT be
presented to user interfaces in any way. Its purpose is to help developers in troubleshooting errors and the
contents may go into logs or crash reports.

###### See

MatterSpecification.v11.Core § 11.17.6.10.3

##### fabricIndex

> **fabricIndex**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

This field shall be present whenever StatusCode has a value of OK. If present, it shall contain the Fabric
Index of the Fabric last added, removed or updated.

###### See

MatterSpecification.v11.Core § 11.17.6.10.2

##### statusCode

> **statusCode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NodeOperationalCertStatus`](enumerations/NodeOperationalCertStatus.md)\>

This field shall contain an NOCStatus value representing the status of an operation involving a NOC.

###### See

MatterSpecification.v11.Core § 11.17.6.10.1

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:521](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L521)

***

### TlvRemoveFabricRequest

> `const` **TlvRemoveFabricRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OperationalCredentials removeFabric command

#### See

MatterSpecification.v11.Core § 11.17.6.12

#### Type declaration

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

This field shall contain the Fabric Index reference (see fabric-index) associated with the Fabric which is
to be removed from the device.

Effect on Receipt

If the FabricIndex field does not match the FabricIndex of any entry within the Fabrics list, then an
NOCResponse with a StatusCode of InvalidFabricIndex shall be returned for the command and there shall NOT be
any permanent changes to any device data.

Otherwise, one of the following outcomes shall occur:

  1. If the FabricIndex matches the last remaining entry in the Fabrics list, then the device shall delete
     all Matter related data on the node which was created since it was commissioned. This includes all
     Fabric-Scoped data, including Access Control List, bindings, scenes, group keys,

operational certificates, etc. All Trusted Roots shall also be removed. Any Matter related data including
logs, secure sessions, exchanges and interaction model constructs shall also be removed. Since this
operation involves the removal of the secure session data that may underpin the current set of exchanges,
the Node invoking the command SHOULD NOT expect a response before terminating its secure session with the
target.

2. If the FabricIndex does not equal the accessing fabric index, then the device shall begin the process of
irrevocably deleting all associated Fabric-Scoped data, including Access Control List, bindings, group keys,
operational certificates, etc. Any remaining Trusted Roots no longer referenced by any operational
certificate shall also be removed. All secure sessions, exchanges and interaction model constructs related
to the Operational Identity under the given Fabric shall also be removed. Following the removal, an
NOCResponse with a StatusCode of OK shall be returned.

3. If the FabricIndex equals the accessing fabric index, then the device shall begin the process of
irrevocably deleting all associated Fabric-Scoped data, including Access Control Entries, bindings, group
keys, operational certificates, etc. Any remaining Trusted Roots no longer referenced by any operational
certificate shall also be removed. All secure sessions, exchanges and interaction model constructs related
to the Operational Identity under the given Fabric shall also be removed. Since this operation involves the
removal of the secure session data that may underpin the current set of exchanges, the Node invoking the
command SHOULD NOT expect a response before terminating its secure session with the target.

###### See

MatterSpecification.v11.Core § 11.17.6.12.1

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:625](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L625)

***

### TlvUpdateFabricLabelRequest

> `const` **TlvUpdateFabricLabelRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OperationalCredentials updateFabricLabel command

#### See

MatterSpecification.v11.Core § 11.17.6.11

#### Type declaration

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### label

> **label**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This field shall contain the label to set for the fabric associated with the current secure session.

Effect on Receipt

If the Label field is identical to a Label already in use by a Fabric within the Fabrics list that is not
the accessing fabric, then an NOCResponse with a StatusCode of LabelConflict shall be returned for the
command and there shall NOT be any permanent changes to any Fabric data.

Otherwise, the Label field for the accesing fabric shall immediately be updated to reflect the

Label argument provided. Following the update, an NOCResponse with a StatusCode of OK shall be returned.

If the command was invoked within a fail-safe context after a successful UpdateNOC command, then the label
update shall apply to the pending update state that will be reverted if fail-safe expires prior to a
CommissioningComplete command. In other words, label updates apply to the state of the Fabrics Attribute as
currently visible, even for an existing fabric currently in process of being updated.

###### See

MatterSpecification.v11.Core § 11.17.6.11.1

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:587](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L587)

***

### TlvUpdateNocRequest

> `const` **TlvUpdateNocRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OperationalCredentials updateNoc command

#### See

MatterSpecification.v11.Core § 11.17.6.9

#### Type declaration

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### icacValue

> **icacValue**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### nocValue

> **nocValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:569](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L569)
