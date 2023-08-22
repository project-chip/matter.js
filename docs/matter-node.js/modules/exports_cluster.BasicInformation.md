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

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, { `leave`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

Basic Information

This cluster provides attributes and events for determining basic information about Nodes, which supports both
Commissioning and operational determination of Node characteristics, such as Vendor ID, Product ID and serial
number, which apply to the whole Node.

**`See`**

MatterCoreSpecificationV1_1 § 11.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BasicInformationCluster.d.ts:120

___

### TlvCapabilityMinimaStruct

• `Const` **TlvCapabilityMinimaStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This structure provides constant values related to overall global capabilities of this Node, that are not
cluster-specific.

**`See`**

MatterCoreSpecificationV1_1 § 11.1.4.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BasicInformationCluster.d.ts:15

___

### TlvLeaveEvent

• `Const` **TlvLeaveEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the BasicInformation leave event

**`See`**

MatterCoreSpecificationV1_1 § 11.1.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BasicInformationCluster.d.ts:90

___

### TlvProductAppearanceStruct

• `Const` **TlvProductAppearanceStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BasicInformationCluster.d.ts:67

___

### TlvReachableChangedEvent

• `Const` **TlvReachableChangedEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the BasicInformation reachableChanged event

**`See`**

MatterCoreSpecificationV1_1 § 11.1.6.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BasicInformationCluster.d.ts:103

___

### TlvStartUpEvent

• `Const` **TlvStartUpEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the BasicInformation startUp event

**`See`**

MatterCoreSpecificationV1_1 § 11.1.6.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BasicInformationCluster.d.ts:76
