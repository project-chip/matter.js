[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / OtaSoftwareUpdateRequestor

# Namespace: OtaSoftwareUpdateRequestor

[exports/cluster](exports_cluster.md).OtaSoftwareUpdateRequestor

## Table of contents

### Enumerations

- [AnnouncementReason](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)
- [ChangeReason](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)
- [UpdateState](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)

### Variables

- [Cluster](exports_cluster.OtaSoftwareUpdateRequestor.md#cluster)
- [TlvAnnounceOtaProviderRequest](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvannounceotaproviderrequest)
- [TlvDownloadErrorEvent](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvdownloaderrorevent)
- [TlvProviderLocationStruct](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvproviderlocationstruct)
- [TlvStateTransitionEvent](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvstatetransitionevent)
- [TlvVersionAppliedEvent](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvversionappliedevent)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.md#writablefabricscopedattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.md#attribute)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.md#attribute)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| ``null``, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.md#optionalcommand)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.md#event)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stateTransition`: [`Event`](exports_cluster.md#event)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `versionApplied`: [`Event`](exports_cluster.md#event)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>

OTA Software Update Requestor

Provides an interface for downloading and applying OTA software updates

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:158

___

### TlvAnnounceOtaProviderRequest

• `Const` **TlvAnnounceOtaProviderRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateRequestor announceOtaProvider command

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:85

___

### TlvDownloadErrorEvent

• `Const` **TlvDownloadErrorEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the OtaSoftwareUpdateRequestor downloadError event

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.7.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:145

___

### TlvProviderLocationStruct

• `Const` **TlvProviderLocationStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure encodes a fabric-scoped location of an OTA provider on a given fabric.

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.4.20

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:15

___

### TlvStateTransitionEvent

• `Const` **TlvStateTransitionEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the OtaSoftwareUpdateRequestor stateTransition event

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:125

___

### TlvVersionAppliedEvent

• `Const` **TlvVersionAppliedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the OtaSoftwareUpdateRequestor versionApplied event

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.7.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:136
