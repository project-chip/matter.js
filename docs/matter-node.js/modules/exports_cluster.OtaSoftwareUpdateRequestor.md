[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / OtaSoftwareUpdateRequestor

# Namespace: OtaSoftwareUpdateRequestor

[exports/cluster](exports_cluster.md).OtaSoftwareUpdateRequestor

## Table of contents

### Enumerations

- [AnnouncementReason](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)
- [ChangeReason](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)
- [UpdateState](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)

### Interfaces

- [AnnounceOtaProviderRequest](../interfaces/exports_cluster.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md)
- [Cluster](../interfaces/exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md)
- [DownloadErrorEvent](../interfaces/exports_cluster.OtaSoftwareUpdateRequestor.DownloadErrorEvent.md)
- [ProviderLocationStruct](../interfaces/exports_cluster.OtaSoftwareUpdateRequestor.ProviderLocationStruct.md)
- [StateTransitionEvent](../interfaces/exports_cluster.OtaSoftwareUpdateRequestor.StateTransitionEvent.md)
- [VersionAppliedEvent](../interfaces/exports_cluster.OtaSoftwareUpdateRequestor.VersionAppliedEvent.md)

### Variables

- [Cluster](exports_cluster.OtaSoftwareUpdateRequestor.md#cluster)
- [ClusterInstance](exports_cluster.OtaSoftwareUpdateRequestor.md#clusterinstance)
- [Complete](exports_cluster.OtaSoftwareUpdateRequestor.md#complete)
- [TlvAnnounceOtaProviderRequest](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvannounceotaproviderrequest)
- [TlvDownloadErrorEvent](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvdownloaderrorevent)
- [TlvProviderLocationStruct](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvproviderlocationstruct)
- [TlvStateTransitionEvent](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvstatetransitionevent)
- [TlvVersionAppliedEvent](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvversionappliedevent)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:316

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:318

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](../interfaces/exports_cluster.WritableFabricScopedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `updatePossible`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stateTransition`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `versionApplied`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.OtaSoftwareUpdateRequestor.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:191

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:319

___

### TlvAnnounceOtaProviderRequest

• `Const` **TlvAnnounceOtaProviderRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateRequestor announceOtaProvider command

**`See`**

MatterSpecification.v11.Core § 11.19.7.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:94

___

### TlvDownloadErrorEvent

• `Const` **TlvDownloadErrorEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the OtaSoftwareUpdateRequestor downloadError event

**`See`**

MatterSpecification.v11.Core § 11.19.7.7.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:175

___

### TlvProviderLocationStruct

• `Const` **TlvProviderLocationStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure encodes a fabric-scoped location of an OTA provider on a given fabric.

**`See`**

MatterSpecification.v11.Core § 11.19.7.4.20

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:17

___

### TlvStateTransitionEvent

• `Const` **TlvStateTransitionEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the OtaSoftwareUpdateRequestor stateTransition event

**`See`**

MatterSpecification.v11.Core § 11.19.7.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:141

___

### TlvVersionAppliedEvent

• `Const` **TlvVersionAppliedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the OtaSoftwareUpdateRequestor versionApplied event

**`See`**

MatterSpecification.v11.Core § 11.19.7.7.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:159
