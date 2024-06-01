[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / OtaSoftwareUpdateProvider

# Namespace: OtaSoftwareUpdateProvider

## Index

### Enumerations

- [ApplyUpdateAction](enumerations/ApplyUpdateAction.md)
- [DownloadProtocol](enumerations/DownloadProtocol.md)
- [Status](enumerations/Status.md)

### Interfaces

- [ApplyUpdateRequest](interfaces/ApplyUpdateRequest.md)
- [ApplyUpdateResponse](interfaces/ApplyUpdateResponse.md)
- [Cluster](interfaces/Cluster.md)
- [NotifyUpdateAppliedRequest](interfaces/NotifyUpdateAppliedRequest.md)
- [QueryImageRequest](interfaces/QueryImageRequest.md)
- [QueryImageResponse](interfaces/QueryImageResponse.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:223

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.applyUpdateRequest

> `readonly` **applyUpdateRequest**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

###### See

MatterSpecification.v11.Core § 11.19.6.5.19

##### commands.notifyUpdateApplied

> `readonly` **notifyUpdateApplied**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Core § 11.19.6.5.25

##### commands.queryImage

> `readonly` **queryImage**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA
Provider to match the OTA Requestor’s constraints provided in the payload fields.

###### See

MatterSpecification.v11.Core § 11.19.6.5.1

##### id

> `readonly` **id**: `41`

##### name

> `readonly` **name**: `"OtaSoftwareUpdateProvider"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:167

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:226

***

### TlvApplyUpdateRequest

> `const` **TlvApplyUpdateRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OtaSoftwareUpdateProvider applyUpdateRequest command

#### See

MatterSpecification.v11.Core § 11.19.6.5.19

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:105

***

### TlvApplyUpdateResponse

> `const` **TlvApplyUpdateResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 11.19.6.5.22

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:139

***

### TlvNotifyUpdateAppliedRequest

> `const` **TlvNotifyUpdateAppliedRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command

#### See

MatterSpecification.v11.Core § 11.19.6.5.25

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:153

***

### TlvQueryImageRequest

> `const` **TlvQueryImageRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OtaSoftwareUpdateProvider queryImage command

#### See

MatterSpecification.v11.Core § 11.19.6.5.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:42

***

### TlvQueryImageResponse

> `const` **TlvQueryImageResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 11.19.6.5.10

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:85
