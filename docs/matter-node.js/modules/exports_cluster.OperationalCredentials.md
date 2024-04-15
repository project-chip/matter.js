[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / OperationalCredentials

# Namespace: OperationalCredentials

[exports/cluster](exports_cluster.md).OperationalCredentials

## Table of contents

### Enumerations

- [CertificateChainType](../enums/exports_cluster.OperationalCredentials.CertificateChainType.md)
- [NodeOperationalCertStatus](../enums/exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md)

### Interfaces

- [AddNocRequest](../interfaces/exports_cluster.OperationalCredentials.AddNocRequest.md)
- [AddTrustedRootCertificateRequest](../interfaces/exports_cluster.OperationalCredentials.AddTrustedRootCertificateRequest.md)
- [AttestationRequest](../interfaces/exports_cluster.OperationalCredentials.AttestationRequest.md)
- [AttestationResponse](../interfaces/exports_cluster.OperationalCredentials.AttestationResponse.md)
- [CertificateChainRequest](../interfaces/exports_cluster.OperationalCredentials.CertificateChainRequest.md)
- [CertificateChainResponse](../interfaces/exports_cluster.OperationalCredentials.CertificateChainResponse.md)
- [Cluster](../interfaces/exports_cluster.OperationalCredentials.Cluster.md)
- [CsrRequest](../interfaces/exports_cluster.OperationalCredentials.CsrRequest.md)
- [CsrResponse](../interfaces/exports_cluster.OperationalCredentials.CsrResponse.md)
- [FabricDescriptorStruct](../interfaces/exports_cluster.OperationalCredentials.FabricDescriptorStruct.md)
- [NOCStruct](../interfaces/exports_cluster.OperationalCredentials.NOCStruct.md)
- [NocResponse](../interfaces/exports_cluster.OperationalCredentials.NocResponse.md)
- [RemoveFabricRequest](../interfaces/exports_cluster.OperationalCredentials.RemoveFabricRequest.md)
- [UpdateFabricLabelRequest](../interfaces/exports_cluster.OperationalCredentials.UpdateFabricLabelRequest.md)
- [UpdateNocRequest](../interfaces/exports_cluster.OperationalCredentials.UpdateNocRequest.md)

### Variables

- [Cluster](exports_cluster.OperationalCredentials.md#cluster)
- [ClusterInstance](exports_cluster.OperationalCredentials.md#clusterinstance)
- [Complete](exports_cluster.OperationalCredentials.md#complete)
- [TlvAddNocRequest](exports_cluster.OperationalCredentials.md#tlvaddnocrequest)
- [TlvAddTrustedRootCertificateRequest](exports_cluster.OperationalCredentials.md#tlvaddtrustedrootcertificaterequest)
- [TlvAttestationRequest](exports_cluster.OperationalCredentials.md#tlvattestationrequest)
- [TlvAttestationResponse](exports_cluster.OperationalCredentials.md#tlvattestationresponse)
- [TlvCertificateChainRequest](exports_cluster.OperationalCredentials.md#tlvcertificatechainrequest)
- [TlvCertificateChainResponse](exports_cluster.OperationalCredentials.md#tlvcertificatechainresponse)
- [TlvCsrRequest](exports_cluster.OperationalCredentials.md#tlvcsrrequest)
- [TlvCsrResponse](exports_cluster.OperationalCredentials.md#tlvcsrresponse)
- [TlvFabricDescriptorStruct](exports_cluster.OperationalCredentials.md#tlvfabricdescriptorstruct)
- [TlvNOCStruct](exports_cluster.OperationalCredentials.md#tlvnocstruct)
- [TlvNocResponse](exports_cluster.OperationalCredentials.md#tlvnocresponse)
- [TlvRemoveFabricRequest](exports_cluster.OperationalCredentials.md#tlvremovefabricrequest)
- [TlvUpdateFabricLabelRequest](exports_cluster.OperationalCredentials.md#tlvupdatefabriclabelrequest)
- [TlvUpdateNocRequest](exports_cluster.OperationalCredentials.md#tlvupdatenocrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.OperationalCredentials.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:1228

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:1230

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `commissionedFabrics`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `currentFabricIndex`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`FabricIndex`](exports_datatype.md#fabricindex), `any`\> ; `fabrics`: [`FabricScopedAttribute`](../interfaces/exports_cluster.FabricScopedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `nocs`: [`FabricScopedAttribute`](../interfaces/exports_cluster.FabricScopedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `supportedFabrics`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `trustedRootCertificates`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array`[], `any`\>  } ; `commands`: \{ `addNoc`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `addTrustedRootCertificate`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `attestationRequest`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `certificateChainRequest`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `csrRequest`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeFabric`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `updateFabricLabel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `updateNoc`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``62`` ; `name`: ``"OperationalCredentials"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.OperationalCredentials.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:574

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.OperationalCredentials.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:1231

___

### TlvAddNocRequest

• `Const` **TlvAddNocRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OperationalCredentials addNoc command

**`See`**

MatterSpecification.v11.Core § 11.17.6.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:265

___

### TlvAddTrustedRootCertificateRequest

• `Const` **TlvAddTrustedRootCertificateRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OperationalCredentials addTrustedRootCertificate command

**`See`**

MatterSpecification.v11.Core § 11.17.6.13

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:561

___

### TlvAttestationRequest

• `Const` **TlvAttestationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OperationalCredentials attestationRequest command

**`See`**

MatterSpecification.v11.Core § 11.17.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:111

___

### TlvAttestationResponse

• `Const` **TlvAttestationResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to an Attestation Request command.

See Section 11.17.4.7, “Attestation Information” for details about the generation of the fields within this
response command.

See Section F.2, “Device Attestation Response test vector” for an example computation of an AttestationResponse.

**`See`**

MatterSpecification.v11.Core § 11.17.6.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:131

___

### TlvCertificateChainRequest

• `Const` **TlvCertificateChainRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OperationalCredentials certificateChainRequest command

**`See`**

MatterSpecification.v11.Core § 11.17.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:179

___

### TlvCertificateChainResponse

• `Const` **TlvCertificateChainResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to a CertificateChainRequest command.

**`See`**

MatterSpecification.v11.Core § 11.17.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:194

___

### TlvCsrRequest

• `Const` **TlvCsrRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OperationalCredentials csrRequest command

**`See`**

MatterSpecification.v11.Core § 11.17.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:215

___

### TlvCsrResponse

• `Const` **TlvCsrResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to a CSRRequest Command.

See Section 11.17.4.9, “NOCSR Information” for details about the generation of the fields within this response
command.

See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.

**`See`**

MatterSpecification.v11.Core § 11.17.6.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:236

___

### TlvFabricDescriptorStruct

• `Const` **TlvFabricDescriptorStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.

**`See`**

MatterSpecification.v11.Core § 11.17.4.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:53

___

### TlvNOCStruct

• `Const` **TlvNOCStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.

Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
TrustedRootCertificates attribute of the Node Operational Credentials cluster.

**`See`**

MatterSpecification.v11.Core § 11.17.4.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:21

___

### TlvNocResponse

• `Const` **TlvNocResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to the following commands:

  • AddNOC

  • UpdateNOC

  • UpdateFabricLabel

  • RemoveFabric

It provides status information about the success or failure of those commands.

**`See`**

MatterSpecification.v11.Core § 11.17.6.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:468

___

### TlvRemoveFabricRequest

• `Const` **TlvRemoveFabricRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OperationalCredentials removeFabric command

**`See`**

MatterSpecification.v11.Core § 11.17.6.12

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:546

___

### TlvUpdateFabricLabelRequest

• `Const` **TlvUpdateFabricLabelRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OperationalCredentials updateFabricLabel command

**`See`**

MatterSpecification.v11.Core § 11.17.6.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:530

___

### TlvUpdateNocRequest

• `Const` **TlvUpdateNocRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OperationalCredentials updateNoc command

**`See`**

MatterSpecification.v11.Core § 11.17.6.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:513
