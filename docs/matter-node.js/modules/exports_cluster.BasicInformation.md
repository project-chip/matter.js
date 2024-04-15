[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BasicInformation

# Namespace: BasicInformation

[exports/cluster](exports_cluster.md).BasicInformation

## Table of contents

### Enumerations

- [Color](../enums/exports_cluster.BasicInformation.Color.md)
- [ProductFinish](../enums/exports_cluster.BasicInformation.ProductFinish.md)

### Interfaces

- [CapabilityMinimaStruct](../interfaces/exports_cluster.BasicInformation.CapabilityMinimaStruct.md)
- [Cluster](../interfaces/exports_cluster.BasicInformation.Cluster.md)
- [LeaveEvent](../interfaces/exports_cluster.BasicInformation.LeaveEvent.md)
- [ProductAppearanceStruct](../interfaces/exports_cluster.BasicInformation.ProductAppearanceStruct.md)
- [ReachableChangedEvent](../interfaces/exports_cluster.BasicInformation.ReachableChangedEvent.md)
- [StartUpEvent](../interfaces/exports_cluster.BasicInformation.StartUpEvent.md)

### Variables

- [Cluster](exports_cluster.BasicInformation.md#cluster)
- [ClusterInstance](exports_cluster.BasicInformation.md#clusterinstance)
- [Complete](exports_cluster.BasicInformation.md#complete)
- [TlvCapabilityMinimaStruct](exports_cluster.BasicInformation.md#tlvcapabilityminimastruct)
- [TlvLeaveEvent](exports_cluster.BasicInformation.md#tlvleaveevent)
- [TlvProductAppearanceStruct](exports_cluster.BasicInformation.md#tlvproductappearancestruct)
- [TlvReachableChangedEvent](exports_cluster.BasicInformation.md#tlvreachablechangedevent)
- [TlvStartUpEvent](exports_cluster.BasicInformation.md#tlvstartupevent)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.BasicInformation.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:443

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:445

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `dataModelRevision`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `productId`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_VendorId_.md), `any`\> ; `vendorName`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `reachableChanged`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `shutDown`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>

**`See`**

[Cluster](exports_cluster.BasicInformation.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:148

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.BasicInformation.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:446

___

### TlvCapabilityMinimaStruct

• `Const` **TlvCapabilityMinimaStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure provides constant values related to overall global capabilities of this Node, that are not
cluster-specific.

**`See`**

MatterSpecification.v11.Core § 11.1.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:18

___

### TlvLeaveEvent

• `Const` **TlvLeaveEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BasicInformation leave event

**`See`**

MatterSpecification.v11.Core § 11.1.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:110

___

### TlvProductAppearanceStruct

• `Const` **TlvProductAppearanceStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:78

___

### TlvReachableChangedEvent

• `Const` **TlvReachableChangedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BasicInformation reachableChanged event

**`See`**

MatterSpecification.v11.Core § 11.1.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:130

___

### TlvStartUpEvent

• `Const` **TlvStartUpEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BasicInformation startUp event

**`See`**

MatterSpecification.v11.Core § 11.1.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:89
