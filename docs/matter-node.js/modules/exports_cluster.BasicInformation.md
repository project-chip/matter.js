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

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_VendorId_.md), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.md#optionalevent)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.md#optionalevent)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.md#optionalevent)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.md#event)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>

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

• `Const` **TlvCapabilityMinimaStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure provides constant values related to overall global capabilities of this Node, that are not
cluster-specific.

**`See`**

MatterCoreSpecificationV1_1 § 11.1.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:16

___

### TlvLeaveEvent

• `Const` **TlvLeaveEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BasicInformation leave event

**`See`**

MatterCoreSpecificationV1_1 § 11.1.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:91

___

### TlvProductAppearanceStruct

• `Const` **TlvProductAppearanceStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:68

___

### TlvReachableChangedEvent

• `Const` **TlvReachableChangedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BasicInformation reachableChanged event

**`See`**

MatterCoreSpecificationV1_1 § 11.1.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:104

___

### TlvStartUpEvent

• `Const` **TlvStartUpEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BasicInformation startUp event

**`See`**

MatterCoreSpecificationV1_1 § 11.1.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:77
