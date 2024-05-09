[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / OtaSoftwareUpdateProvider

# Namespace: OtaSoftwareUpdateProvider

[exports/cluster](exports_cluster.md).OtaSoftwareUpdateProvider

## Table of contents

### Enumerations

- [ApplyUpdateAction](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)
- [DownloadProtocol](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)
- [Status](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)

### Interfaces

- [ApplyUpdateRequest](../interfaces/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateRequest.md)
- [ApplyUpdateResponse](../interfaces/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateResponse.md)
- [Cluster](../interfaces/exports_cluster.OtaSoftwareUpdateProvider.Cluster.md)
- [NotifyUpdateAppliedRequest](../interfaces/exports_cluster.OtaSoftwareUpdateProvider.NotifyUpdateAppliedRequest.md)
- [QueryImageRequest](../interfaces/exports_cluster.OtaSoftwareUpdateProvider.QueryImageRequest.md)
- [QueryImageResponse](../interfaces/exports_cluster.OtaSoftwareUpdateProvider.QueryImageResponse.md)

### Variables

- [Cluster](exports_cluster.OtaSoftwareUpdateProvider.md#cluster)
- [ClusterInstance](exports_cluster.OtaSoftwareUpdateProvider.md#clusterinstance)
- [Complete](exports_cluster.OtaSoftwareUpdateProvider.md#complete)
- [TlvApplyUpdateRequest](exports_cluster.OtaSoftwareUpdateProvider.md#tlvapplyupdaterequest)
- [TlvApplyUpdateResponse](exports_cluster.OtaSoftwareUpdateProvider.md#tlvapplyupdateresponse)
- [TlvNotifyUpdateAppliedRequest](exports_cluster.OtaSoftwareUpdateProvider.md#tlvnotifyupdateappliedrequest)
- [TlvQueryImageRequest](exports_cluster.OtaSoftwareUpdateProvider.md#tlvqueryimagerequest)
- [TlvQueryImageResponse](exports_cluster.OtaSoftwareUpdateProvider.md#tlvqueryimageresponse)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.OtaSoftwareUpdateProvider.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:259

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:261

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `notifyUpdateApplied`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `queryImage`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.OtaSoftwareUpdateProvider.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:167

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.OtaSoftwareUpdateProvider.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:262

___

### TlvApplyUpdateRequest

• `Const` **TlvApplyUpdateRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateProvider applyUpdateRequest command

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.18

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:105

___

### TlvApplyUpdateResponse

• `Const` **TlvApplyUpdateResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.20

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:139

___

### TlvNotifyUpdateAppliedRequest

• `Const` **TlvNotifyUpdateAppliedRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.22

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:153

___

### TlvQueryImageRequest

• `Const` **TlvQueryImageRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateProvider queryImage command

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:42

___

### TlvQueryImageResponse

• `Const` **TlvQueryImageResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:85
