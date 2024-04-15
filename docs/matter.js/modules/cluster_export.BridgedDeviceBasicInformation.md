[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BridgedDeviceBasicInformation

# Namespace: BridgedDeviceBasicInformation

[cluster/export](cluster_export.md).BridgedDeviceBasicInformation

## Table of contents

### Enumerations

- [Color](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)
- [ProductFinish](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.BridgedDeviceBasicInformation.Cluster.md)
- [ProductAppearanceStruct](../interfaces/cluster_export.BridgedDeviceBasicInformation.ProductAppearanceStruct.md)
- [ReachableChangedEvent](../interfaces/cluster_export.BridgedDeviceBasicInformation.ReachableChangedEvent.md)
- [StartUpEvent](../interfaces/cluster_export.BridgedDeviceBasicInformation.StartUpEvent.md)

### Variables

- [Cluster](cluster_export.BridgedDeviceBasicInformation.md#cluster)
- [ClusterInstance](cluster_export.BridgedDeviceBasicInformation.md#clusterinstance)
- [Complete](cluster_export.BridgedDeviceBasicInformation.md#complete)
- [TlvProductAppearanceStruct](cluster_export.BridgedDeviceBasicInformation.md#tlvproductappearancestruct)
- [TlvReachableChangedEvent](cluster_export.BridgedDeviceBasicInformation.md#tlvreachablechangedevent)
- [TlvStartUpEvent](cluster_export.BridgedDeviceBasicInformation.md#tlvstartupevent)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.BridgedDeviceBasicInformation.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:246](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L246)

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:248](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L248)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>

**`See`**

[Cluster](cluster_export.BridgedDeviceBasicInformation.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L101)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.BridgedDeviceBasicInformation.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:249](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L249)

___

### TlvProductAppearanceStruct

• `Const` **TlvProductAppearanceStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L64)

___

### TlvReachableChangedEvent

• `Const` **TlvReachableChangedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>

Body of the BridgedDeviceBasicInformation reachableChanged event

**`See`**

MatterSpecification.v11.Core § 9.13.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L89)

___

### TlvStartUpEvent

• `Const` **TlvStartUpEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the BridgedDeviceBasicInformation startUp event

**`See`**

MatterSpecification.v11.Core § 9.13.5

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L75)
