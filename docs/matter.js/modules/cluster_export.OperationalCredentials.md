[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OperationalCredentials

# Namespace: OperationalCredentials

[cluster/export](cluster_export.md).OperationalCredentials

## Table of contents

### Enumerations

- [CertificateChainType](../enums/cluster_export.OperationalCredentials.CertificateChainType.md)
- [NodeOperationalCertStatus](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)

### Interfaces

- [AddNocRequest](../interfaces/cluster_export.OperationalCredentials.AddNocRequest.md)
- [AddTrustedRootCertificateRequest](../interfaces/cluster_export.OperationalCredentials.AddTrustedRootCertificateRequest.md)
- [AttestationRequest](../interfaces/cluster_export.OperationalCredentials.AttestationRequest.md)
- [AttestationResponse](../interfaces/cluster_export.OperationalCredentials.AttestationResponse.md)
- [CertificateChainRequest](../interfaces/cluster_export.OperationalCredentials.CertificateChainRequest.md)
- [CertificateChainResponse](../interfaces/cluster_export.OperationalCredentials.CertificateChainResponse.md)
- [Cluster](../interfaces/cluster_export.OperationalCredentials.Cluster.md)
- [CsrRequest](../interfaces/cluster_export.OperationalCredentials.CsrRequest.md)
- [CsrResponse](../interfaces/cluster_export.OperationalCredentials.CsrResponse.md)
- [FabricDescriptorStruct](../interfaces/cluster_export.OperationalCredentials.FabricDescriptorStruct.md)
- [NOCStruct](../interfaces/cluster_export.OperationalCredentials.NOCStruct.md)
- [NocResponse](../interfaces/cluster_export.OperationalCredentials.NocResponse.md)
- [RemoveFabricRequest](../interfaces/cluster_export.OperationalCredentials.RemoveFabricRequest.md)
- [UpdateFabricLabelRequest](../interfaces/cluster_export.OperationalCredentials.UpdateFabricLabelRequest.md)
- [UpdateNocRequest](../interfaces/cluster_export.OperationalCredentials.UpdateNocRequest.md)

### Variables

- [Cluster](cluster_export.OperationalCredentials.md#cluster)
- [ClusterInstance](cluster_export.OperationalCredentials.md#clusterinstance)
- [Complete](cluster_export.OperationalCredentials.md#complete)
- [TlvAddNocRequest](cluster_export.OperationalCredentials.md#tlvaddnocrequest)
- [TlvAddTrustedRootCertificateRequest](cluster_export.OperationalCredentials.md#tlvaddtrustedrootcertificaterequest)
- [TlvAttestationRequest](cluster_export.OperationalCredentials.md#tlvattestationrequest)
- [TlvAttestationResponse](cluster_export.OperationalCredentials.md#tlvattestationresponse)
- [TlvCertificateChainRequest](cluster_export.OperationalCredentials.md#tlvcertificatechainrequest)
- [TlvCertificateChainResponse](cluster_export.OperationalCredentials.md#tlvcertificatechainresponse)
- [TlvCsrRequest](cluster_export.OperationalCredentials.md#tlvcsrrequest)
- [TlvCsrResponse](cluster_export.OperationalCredentials.md#tlvcsrresponse)
- [TlvFabricDescriptorStruct](cluster_export.OperationalCredentials.md#tlvfabricdescriptorstruct)
- [TlvNOCStruct](cluster_export.OperationalCredentials.md#tlvnocstruct)
- [TlvNocResponse](cluster_export.OperationalCredentials.md#tlvnocresponse)
- [TlvRemoveFabricRequest](cluster_export.OperationalCredentials.md#tlvremovefabricrequest)
- [TlvUpdateFabricLabelRequest](cluster_export.OperationalCredentials.md#tlvupdatefabriclabelrequest)
- [TlvUpdateNocRequest](cluster_export.OperationalCredentials.md#tlvupdatenocrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.OperationalCredentials.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:1012](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L1012)

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:1014](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L1014)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `commissionedFabrics`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `currentFabricIndex`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `fabrics`: [`FabricScopedAttribute`](../interfaces/cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricId`](datatype_export.md#fabricid)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `rootPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](datatype_export.md#vendorid)\>  }\>[], `any`\> ; `nocs`: [`FabricScopedAttribute`](../interfaces/cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `icac`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\> ; `supportedFabrics`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `trustedRootCertificates`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`Uint8Array`[], `any`\>  } ; `commands`: \{ `addNoc`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `adminVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](datatype_export.md#vendorid)\> ; `caseAdminSubject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `icacValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `ipkValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `nocValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>, `any`\> ; `addTrustedRootCertificate`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `rootCaCertificate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `attestationRequest`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attestationNonce`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attestationElements`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `attestationSignature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `any`\> ; `certificateChainRequest`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `certificateType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CertificateChainType`](../enums/cluster_export.OperationalCredentials.CertificateChainType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `certificate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `any`\> ; `csrRequest`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `csrNonce`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `isForUpdateNoc`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attestationSignature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `nocsrElements`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `any`\> ; `removeFabric`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>, `any`\> ; `updateFabricLabel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>, `any`\> ; `updateNoc`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `icacValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `nocValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>, `any`\>  } ; `id`: ``62`` = 0x3e; `name`: ``"OperationalCredentials"`` = "OperationalCredentials"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.OperationalCredentials.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:629](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L629)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.OperationalCredentials.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:1015](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L1015)

___

### TlvAddNocRequest

• `Const` **TlvAddNocRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `adminVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](datatype_export.md#vendorid)\> ; `caseAdminSubject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `icacValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `ipkValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `nocValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the OperationalCredentials addNoc command

**`See`**

MatterSpecification.v11.Core § 11.17.6.8

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:301](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L301)

___

### TlvAddTrustedRootCertificateRequest

• `Const` **TlvAddTrustedRootCertificateRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `rootCaCertificate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the OperationalCredentials addTrustedRootCertificate command

**`See`**

MatterSpecification.v11.Core § 11.17.6.13

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:615](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L615)

___

### TlvAttestationRequest

• `Const` **TlvAttestationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attestationNonce`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the OperationalCredentials attestationRequest command

**`See`**

MatterSpecification.v11.Core § 11.17.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L141)

___

### TlvAttestationResponse

• `Const` **TlvAttestationResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attestationElements`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `attestationSignature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

This command shall be generated in response to an Attestation Request command.

See Section 11.17.4.7, “Attestation Information” for details about the generation of the fields within this
response command.

See Section F.2, “Device Attestation Response test vector” for an example computation of an AttestationResponse.

**`See`**

MatterSpecification.v11.Core § 11.17.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:160](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L160)

___

### TlvCertificateChainRequest

• `Const` **TlvCertificateChainRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `certificateType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CertificateChainType`](../enums/cluster_export.OperationalCredentials.CertificateChainType.md)\>  }\>

Input to the OperationalCredentials certificateChainRequest command

**`See`**

MatterSpecification.v11.Core § 11.17.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L212)

___

### TlvCertificateChainResponse

• `Const` **TlvCertificateChainResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `certificate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

This command shall be generated in response to a CertificateChainRequest command.

**`See`**

MatterSpecification.v11.Core § 11.17.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L226)

___

### TlvCsrRequest

• `Const` **TlvCsrRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `csrNonce`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `isForUpdateNoc`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>

Input to the OperationalCredentials csrRequest command

**`See`**

MatterSpecification.v11.Core § 11.17.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:248](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L248)

___

### TlvCsrResponse

• `Const` **TlvCsrResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attestationSignature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `nocsrElements`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

This command shall be generated in response to a CSRRequest Command.

See Section 11.17.4.9, “NOCSR Information” for details about the generation of the fields within this response
command.

See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.

**`See`**

MatterSpecification.v11.Core § 11.17.6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:270](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L270)

___

### TlvFabricDescriptorStruct

• `Const` **TlvFabricDescriptorStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricId`](datatype_export.md#fabricid)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `rootPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](datatype_export.md#vendorid)\>  }\>

This structure encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.

**`See`**

MatterSpecification.v11.Core § 11.17.4.5

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L77)

___

### TlvNOCStruct

• `Const` **TlvNOCStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `icac`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.

Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
TrustedRootCertificates attribute of the Node Operational Credentials cluster.

**`See`**

MatterSpecification.v11.Core § 11.17.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L42)

___

### TlvNocResponse

• `Const` **TlvNocResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>

This command shall be generated in response to the following commands:

  • AddNOC

  • UpdateNOC

  • UpdateFabricLabel

  • RemoveFabric

It provides status information about the success or failure of those commands.

**`See`**

MatterSpecification.v11.Core § 11.17.6.10

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:518](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L518)

___

### TlvRemoveFabricRequest

• `Const` **TlvRemoveFabricRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>

Input to the OperationalCredentials removeFabric command

**`See`**

MatterSpecification.v11.Core § 11.17.6.12

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:601](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L601)

___

### TlvUpdateFabricLabelRequest

• `Const` **TlvUpdateFabricLabelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

Input to the OperationalCredentials updateFabricLabel command

**`See`**

MatterSpecification.v11.Core § 11.17.6.11

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:584](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L584)

___

### TlvUpdateNocRequest

• `Const` **TlvUpdateNocRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `icacValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `nocValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the OperationalCredentials updateNoc command

**`See`**

MatterSpecification.v11.Core § 11.17.6.9

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:566](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L566)
