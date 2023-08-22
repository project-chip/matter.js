[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / OperationalCredentials

# Namespace: OperationalCredentials

[exports/cluster](exports_cluster.md).OperationalCredentials

## Table of contents

### Enumerations

- [CertificateChainType](../enums/exports_cluster.OperationalCredentials.CertificateChainType.md)
- [NodeOperationalCertStatus](../enums/exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md)

### Variables

- [Cluster](exports_cluster.OperationalCredentials.md#cluster)
- [TlvAddNocRequest](exports_cluster.OperationalCredentials.md#tlvaddnocrequest)
- [TlvAddTrustedRootCertificateRequest](exports_cluster.OperationalCredentials.md#tlvaddtrustedrootcertificaterequest)
- [TlvAttestationRequestRequest](exports_cluster.OperationalCredentials.md#tlvattestationrequestrequest)
- [TlvAttestationResponse](exports_cluster.OperationalCredentials.md#tlvattestationresponse)
- [TlvCertificateChainRequestRequest](exports_cluster.OperationalCredentials.md#tlvcertificatechainrequestrequest)
- [TlvCertificateChainResponse](exports_cluster.OperationalCredentials.md#tlvcertificatechainresponse)
- [TlvCsrRequestRequest](exports_cluster.OperationalCredentials.md#tlvcsrrequestrequest)
- [TlvCsrResponse](exports_cluster.OperationalCredentials.md#tlvcsrresponse)
- [TlvFabricDescriptorStruct](exports_cluster.OperationalCredentials.md#tlvfabricdescriptorstruct)
- [TlvNOCStruct](exports_cluster.OperationalCredentials.md#tlvnocstruct)
- [TlvNocResponse](exports_cluster.OperationalCredentials.md#tlvnocresponse)
- [TlvRemoveFabricRequest](exports_cluster.OperationalCredentials.md#tlvremovefabricrequest)
- [TlvUpdateFabricLabelRequest](exports_cluster.OperationalCredentials.md#tlvupdatefabriclabelrequest)
- [TlvUpdateNocRequest](exports_cluster.OperationalCredentials.md#tlvupdatenocrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `addNoc`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `addTrustedRootCertificate`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `attestationRequest`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `certificateChainRequest`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `csrRequest`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `removeFabric`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `updateFabricLabel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `updateNoc`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, {}\>

Operational Credentials

This cluster is used to add or remove Node Operational credentials on a Commissionee or Node, as well as manage
the associated Fabrics.

**`See`**

MatterCoreSpecificationV1_1 § 11.17

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:455

___

### TlvAddNocRequest

• `Const` **TlvAddNocRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OperationalCredentials addNoc command

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:193

___

### TlvAddTrustedRootCertificateRequest

• `Const` **TlvAddTrustedRootCertificateRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OperationalCredentials addTrustedRootCertificate command

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.13

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:444

___

### TlvAttestationRequestRequest

• `Const` **TlvAttestationRequestRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OperationalCredentials attestationRequest command

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:91

___

### TlvAttestationResponse

• `Const` **TlvAttestationResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command shall be generated in response to an Attestation Request command.

See Section 11.17.4.7, “Attestation Information” for details about the generation of the fields within this
response command.

See Section F.2, “Device Attestation Response test vector” for an example computation of an AttestationResponse.

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:104

___

### TlvCertificateChainRequestRequest

• `Const` **TlvCertificateChainRequestRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OperationalCredentials certificateChainRequest command

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:140

___

### TlvCertificateChainResponse

• `Const` **TlvCertificateChainResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command shall be generated in response to a CertificateChainRequest command.

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:148

___

### TlvCsrRequestRequest

• `Const` **TlvCsrRequestRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OperationalCredentials csrRequest command

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:162

___

### TlvCsrResponse

• `Const` **TlvCsrResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command shall be generated in response to a CSRRequest Command.

See Section 11.17.4.9, “NOCSR Information” for details about the generation of the fields within this response
command.

See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:176

___

### TlvFabricDescriptorStruct

• `Const` **TlvFabricDescriptorStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This structure encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.

**`See`**

MatterCoreSpecificationV1_1 § 11.17.4.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:40

___

### TlvNOCStruct

• `Const` **TlvNOCStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.

Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
TrustedRootCertificates attribute of the Node Operational Credentials cluster.

**`See`**

MatterCoreSpecificationV1_1 § 11.17.4.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:18

___

### TlvNocResponse

• `Const` **TlvNocResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command shall be generated in response to the following commands:

  • AddNOC

  • UpdateNOC

  • UpdateFabricLabel

  • RemoveFabric

It provides status information about the success or failure of those commands.

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.10

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:389

___

### TlvRemoveFabricRequest

• `Const` **TlvRemoveFabricRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OperationalCredentials removeFabric command

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.12

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:436

___

### TlvUpdateFabricLabelRequest

• `Const` **TlvUpdateFabricLabelRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OperationalCredentials updateFabricLabel command

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.11

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:427

___

### TlvUpdateNocRequest

• `Const` **TlvUpdateNocRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OperationalCredentials updateNoc command

**`See`**

MatterCoreSpecificationV1_1 § 11.17.6.9

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:417
