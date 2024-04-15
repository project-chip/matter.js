[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BridgedDeviceBasicInformation

# Namespace: BridgedDeviceBasicInformation

[exports/cluster](exports_cluster.md).BridgedDeviceBasicInformation

## Table of contents

### Enumerations

- [Color](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)
- [ProductFinish](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.BridgedDeviceBasicInformation.Cluster.md)
- [ProductAppearanceStruct](../interfaces/exports_cluster.BridgedDeviceBasicInformation.ProductAppearanceStruct.md)
- [ReachableChangedEvent](../interfaces/exports_cluster.BridgedDeviceBasicInformation.ReachableChangedEvent.md)
- [StartUpEvent](../interfaces/exports_cluster.BridgedDeviceBasicInformation.StartUpEvent.md)

### Variables

- [Cluster](exports_cluster.BridgedDeviceBasicInformation.md#cluster)
- [ClusterInstance](exports_cluster.BridgedDeviceBasicInformation.md#clusterinstance)
- [Complete](exports_cluster.BridgedDeviceBasicInformation.md#complete)
- [TlvProductAppearanceStruct](exports_cluster.BridgedDeviceBasicInformation.md#tlvproductappearancestruct)
- [TlvReachableChangedEvent](exports_cluster.BridgedDeviceBasicInformation.md#tlvreachablechangedevent)
- [TlvStartUpEvent](exports_cluster.BridgedDeviceBasicInformation.md#tlvstartupevent)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.BridgedDeviceBasicInformation.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:209

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:211

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_VendorId_.md), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `shutDown`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>

**`See`**

[Cluster](exports_cluster.BridgedDeviceBasicInformation.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:82

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.BridgedDeviceBasicInformation.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:212

___

### TlvProductAppearanceStruct

• `Const` **TlvProductAppearanceStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:43

___

### TlvReachableChangedEvent

• `Const` **TlvReachableChangedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BridgedDeviceBasicInformation reachableChanged event

**`See`**

MatterSpecification.v11.Core § 9.13.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:69

___

### TlvStartUpEvent

• `Const` **TlvStartUpEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BridgedDeviceBasicInformation startUp event

**`See`**

MatterSpecification.v11.Core § 9.13.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:54
