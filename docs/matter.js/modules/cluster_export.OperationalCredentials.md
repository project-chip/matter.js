[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OperationalCredentials

# Namespace: OperationalCredentials

[cluster/export](cluster_export.md).OperationalCredentials

## Table of contents

### Enumerations

- [CertificateChainType](../enums/cluster_export.OperationalCredentials.CertificateChainType.md)
- [NodeOperationalCertStatus](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)

### Variables

- [Cluster](cluster_export.OperationalCredentials.md#cluster)
- [TlvAddNocRequest](cluster_export.OperationalCredentials.md#tlvaddnocrequest)
- [TlvAddTrustedRootCertificateRequest](cluster_export.OperationalCredentials.md#tlvaddtrustedrootcertificaterequest)
- [TlvAttestationRequestRequest](cluster_export.OperationalCredentials.md#tlvattestationrequestrequest)
- [TlvAttestationResponse](cluster_export.OperationalCredentials.md#tlvattestationresponse)
- [TlvCertificateChainRequestRequest](cluster_export.OperationalCredentials.md#tlvcertificatechainrequestrequest)
- [TlvCertificateChainResponse](cluster_export.OperationalCredentials.md#tlvcertificatechainresponse)
- [TlvCsrRequestRequest](cluster_export.OperationalCredentials.md#tlvcsrrequestrequest)
- [TlvCsrResponse](cluster_export.OperationalCredentials.md#tlvcsrresponse)
- [TlvFabricDescriptorStruct](cluster_export.OperationalCredentials.md#tlvfabricdescriptorstruct)
- [TlvNOCStruct](cluster_export.OperationalCredentials.md#tlvnocstruct)
- [TlvNocResponse](cluster_export.OperationalCredentials.md#tlvnocresponse)
- [TlvRemoveFabricRequest](cluster_export.OperationalCredentials.md#tlvremovefabricrequest)
- [TlvUpdateFabricLabelRequest](cluster_export.OperationalCredentials.md#tlvupdatefabriclabelrequest)
- [TlvUpdateNocRequest](cluster_export.OperationalCredentials.md#tlvupdatenocrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `commissionedFabrics`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `currentFabricIndex`: [`Attribute`](cluster_export.md#attribute)<[`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `fabrics`: [`FabricScopedAttribute`](cluster_export.md#fabricscopedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricId`](datatype_export.md#fabricid)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `rootPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`VendorId`](datatype_export.md#vendorid)\>  }\>[], `any`\> ; `nocs`: [`FabricScopedAttribute`](cluster_export.md#fabricscopedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `icac`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>[], `any`\> ; `supportedFabrics`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `trustedRootCertificates`: [`Attribute`](cluster_export.md#attribute)<`Uint8Array`[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `addNoc`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `adminVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`VendorId`](datatype_export.md#vendorid)\> ; `caseAdminSubject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `icacValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `ipkValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `nocValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>, `any`\> ; `addTrustedRootCertificate`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `rootCaCertificate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `attestationRequest`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attestationNonce`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `attestationElements`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `attestationSignature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, `any`\> ; `certificateChainRequest`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `certificateType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CertificateChainType`](../enums/cluster_export.OperationalCredentials.CertificateChainType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `certificate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, `any`\> ; `csrRequest`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `csrNonce`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `isForUpdateNoc`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `attestationSignature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `nocsrElements`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, `any`\> ; `removeFabric`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>, `any`\> ; `updateFabricLabel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>, `any`\> ; `updateNoc`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `icacValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `nocValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>, `any`\>  }, {}\>

Operational Credentials

This cluster is used to add or remove Node Operational credentials on a Commissionee or Node, as well as manage
the associated Fabrics.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:515](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L515)

___

### TlvAddNocRequest

• `Const` **TlvAddNocRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `adminVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`VendorId`](datatype_export.md#vendorid)\> ; `caseAdminSubject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `icacValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `ipkValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `nocValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

Input to the OperationalCredentials addNoc command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.8

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:234](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L234)

___

### TlvAddTrustedRootCertificateRequest

• `Const` **TlvAddTrustedRootCertificateRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `rootCaCertificate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

Input to the OperationalCredentials addTrustedRootCertificate command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.13

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:503](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L503)

___

### TlvAttestationRequestRequest

• `Const` **TlvAttestationRequestRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `attestationNonce`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

Input to the OperationalCredentials attestationRequest command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:122](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L122)

___

### TlvAttestationResponse

• `Const` **TlvAttestationResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `attestationElements`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `attestationSignature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

This command shall be generated in response to an Attestation Request command.

See Section 11.17.4.7, “Attestation Information” for details about the generation of the fields within this
response command.

See Section F.2, “Device Attestation Response test vector” for an example computation of an AttestationResponse.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:136](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L136)

___

### TlvCertificateChainRequestRequest

• `Const` **TlvCertificateChainRequestRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `certificateType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CertificateChainType`](../enums/cluster_export.OperationalCredentials.CertificateChainType.md)\>  }\>

Input to the OperationalCredentials certificateChainRequest command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:176](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L176)

___

### TlvCertificateChainResponse

• `Const` **TlvCertificateChainResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `certificate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

This command shall be generated in response to a CertificateChainRequest command.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:185](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L185)

___

### TlvCsrRequestRequest

• `Const` **TlvCsrRequestRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `csrNonce`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `isForUpdateNoc`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\>  }\>

Input to the OperationalCredentials csrRequest command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:200](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L200)

___

### TlvCsrResponse

• `Const` **TlvCsrResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `attestationSignature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `nocsrElements`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

This command shall be generated in response to a CSRRequest Command.

See Section 11.17.4.9, “NOCSR Information” for details about the generation of the fields within this response
command.

See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:215](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L215)

___

### TlvFabricDescriptorStruct

• `Const` **TlvFabricDescriptorStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricId`](datatype_export.md#fabricid)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `rootPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`VendorId`](datatype_export.md#vendorid)\>  }\>

This structure encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.4.5

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L65)

___

### TlvNOCStruct

• `Const` **TlvNOCStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `icac`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.

Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
TrustedRootCertificates attribute of the Node Operational Credentials cluster.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L40)

___

### TlvNocResponse

• `Const` **TlvNocResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>

This command shall be generated in response to the following commands:

  • AddNOC

  • UpdateNOC

  • UpdateFabricLabel

  • RemoveFabric

It provides status information about the success or failure of those commands.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.10

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:444](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L444)

___

### TlvRemoveFabricRequest

• `Const` **TlvRemoveFabricRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>

Input to the OperationalCredentials removeFabric command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.12

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:496](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L496)

___

### TlvUpdateFabricLabelRequest

• `Const` **TlvUpdateFabricLabelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

Input to the OperationalCredentials updateFabricLabel command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.11

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:486](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L486)

___

### TlvUpdateNocRequest

• `Const` **TlvUpdateNocRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `icacValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `nocValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

Input to the OperationalCredentials updateNoc command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.6.9

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:475](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L475)
