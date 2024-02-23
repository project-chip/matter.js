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

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `notifyUpdateApplied`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `queryImage`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>

OTA Software Update Provider

Provides an interface for providing OTA software updates

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:138

___

### TlvApplyUpdateRequestRequest

• `Const` **TlvApplyUpdateRequestRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateProvider applyUpdateRequest command

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.5.18

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:91

___

### TlvApplyUpdateResponse

• `Const` **TlvApplyUpdateResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.5.20

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:118

___

### TlvNotifyUpdateAppliedRequest

• `Const` **TlvNotifyUpdateAppliedRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.5.22

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:127

___

### TlvQueryImageRequest

• `Const` **TlvQueryImageRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateProvider queryImage command

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:40

___

### TlvQueryImageResponse

• `Const` **TlvQueryImageResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.5.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:76
