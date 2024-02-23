[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BasicInformation

# Namespace: BasicInformation

[exports/cluster](exports_cluster.md).BasicInformation

## Table of contents

### Enumerations

- [Color](../enums/exports_cluster.BasicInformation.Color.md)
- [ProductFinish](../enums/exports_cluster.BasicInformation.ProductFinish.md)

### Variables

- [Cluster](exports_cluster.BasicInformation.md#cluster)
- [TlvCapabilityMinimaStruct](exports_cluster.BasicInformation.md#tlvcapabilityminimastruct)
- [TlvLeaveEvent](exports_cluster.BasicInformation.md#tlvleaveevent)
- [TlvProductAppearanceStruct](exports_cluster.BasicInformation.md#tlvproductappearancestruct)
- [TlvReachableChangedEvent](exports_cluster.BasicInformation.md#tlvreachablechangedevent)
- [TlvStartUpEvent](exports_cluster.BasicInformation.md#tlvstartupevent)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `dataModelRevision`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `productId`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_VendorId_.md), `any`\> ; `vendorName`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `reachableChanged`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `shutDown`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>

Basic Information

This cluster provides attributes and events for determining basic information about Nodes, which supports both
Commissioning and operational determination of Node characteristics, such as Vendor ID, Product ID and serial
number, which apply to the whole Node.

**`See`**

MatterCoreSpecificationV1_1 § 11.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:121

___

### TlvCapabilityMinimaStruct

• `Const` **TlvCapabilityMinimaStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure provides constant values related to overall global capabilities of this Node, that are not
cluster-specific.

**`See`**

MatterCoreSpecificationV1_1 § 11.1.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:16

___

### TlvLeaveEvent

• `Const` **TlvLeaveEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BasicInformation leave event

**`See`**

MatterCoreSpecificationV1_1 § 11.1.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:91

___

### TlvProductAppearanceStruct

• `Const` **TlvProductAppearanceStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:68

___

### TlvReachableChangedEvent

• `Const` **TlvReachableChangedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BasicInformation reachableChanged event

**`See`**

MatterCoreSpecificationV1_1 § 11.1.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:104

___

### TlvStartUpEvent

• `Const` **TlvStartUpEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BasicInformation startUp event

**`See`**

MatterCoreSpecificationV1_1 § 11.1.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:77
