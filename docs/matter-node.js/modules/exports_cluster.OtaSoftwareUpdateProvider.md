[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / OtaSoftwareUpdateProvider

# Namespace: OtaSoftwareUpdateProvider

[exports/cluster](exports_cluster.md).OtaSoftwareUpdateProvider

## Table of contents

### Enumerations

- [ApplyUpdateAction](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)
- [DownloadProtocol](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)
- [Status](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)

### Variables

- [Cluster](exports_cluster.OtaSoftwareUpdateProvider.md#cluster)
- [TlvApplyUpdateRequestRequest](exports_cluster.OtaSoftwareUpdateProvider.md#tlvapplyupdaterequestrequest)
- [TlvApplyUpdateResponse](exports_cluster.OtaSoftwareUpdateProvider.md#tlvapplyupdateresponse)
- [TlvNotifyUpdateAppliedRequest](exports_cluster.OtaSoftwareUpdateProvider.md#tlvnotifyupdateappliedrequest)
- [TlvQueryImageRequest](exports_cluster.OtaSoftwareUpdateProvider.md#tlvqueryimagerequest)
- [TlvQueryImageResponse](exports_cluster.OtaSoftwareUpdateProvider.md#tlvqueryimageresponse)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `applyUpdateRequest`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, {}\>

OTA Software Update Provider

Provides an interface for providing OTA software updates

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:137

___

### TlvApplyUpdateRequestRequest

• `Const` **TlvApplyUpdateRequestRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateProvider applyUpdateRequest command

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.5.18

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:90

___

### TlvApplyUpdateResponse

• `Const` **TlvApplyUpdateResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.5.20

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:117

___

### TlvNotifyUpdateAppliedRequest

• `Const` **TlvNotifyUpdateAppliedRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.5.22

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:126

___

### TlvQueryImageRequest

• `Const` **TlvQueryImageRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateProvider queryImage command

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.5.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:39

___

### TlvQueryImageResponse

• `Const` **TlvQueryImageResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.5.10

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:75
