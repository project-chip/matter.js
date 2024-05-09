[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BasicInformation

# Namespace: BasicInformation

[cluster/export](cluster_export.md).BasicInformation

## Table of contents

### Enumerations

- [Color](../enums/cluster_export.BasicInformation.Color.md)
- [ProductFinish](../enums/cluster_export.BasicInformation.ProductFinish.md)

### Interfaces

- [CapabilityMinimaStruct](../interfaces/cluster_export.BasicInformation.CapabilityMinimaStruct.md)
- [Cluster](../interfaces/cluster_export.BasicInformation.Cluster.md)
- [LeaveEvent](../interfaces/cluster_export.BasicInformation.LeaveEvent.md)
- [ProductAppearanceStruct](../interfaces/cluster_export.BasicInformation.ProductAppearanceStruct.md)
- [ReachableChangedEvent](../interfaces/cluster_export.BasicInformation.ReachableChangedEvent.md)
- [StartUpEvent](../interfaces/cluster_export.BasicInformation.StartUpEvent.md)

### Variables

- [Cluster](cluster_export.BasicInformation.md#cluster)
- [ClusterInstance](cluster_export.BasicInformation.md#clusterinstance)
- [Complete](cluster_export.BasicInformation.md#complete)
- [TlvCapabilityMinimaStruct](cluster_export.BasicInformation.md#tlvcapabilityminimastruct)
- [TlvLeaveEvent](cluster_export.BasicInformation.md#tlvleaveevent)
- [TlvProductAppearanceStruct](cluster_export.BasicInformation.md#tlvproductappearancestruct)
- [TlvReachableChangedEvent](cluster_export.BasicInformation.md#tlvreachablechangedevent)
- [TlvStartUpEvent](cluster_export.BasicInformation.md#tlvstartupevent)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:469](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L469)

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:471](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L471)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`VendorId`](datatype_export.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` = 0x28; `name`: ``"BasicInformation"`` = "BasicInformation"; `revision`: ``2`` = 2 }\>

**`See`**

[Cluster](cluster_export.BasicInformation.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:177](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L177)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:472](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L472)

___

### TlvCapabilityMinimaStruct

• `Const` **TlvCapabilityMinimaStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `caseSessionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

This structure provides constant values related to overall global capabilities of this Node, that are not
cluster-specific.

**`See`**

MatterSpecification.v11.Core § 11.1.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L40)

___

### TlvLeaveEvent

• `Const` **TlvLeaveEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>

Body of the BasicInformation leave event

**`See`**

MatterSpecification.v11.Core § 11.1.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L137)

___

### TlvProductAppearanceStruct

• `Const` **TlvProductAppearanceStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\>

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L104)

___

### TlvReachableChangedEvent

• `Const` **TlvReachableChangedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>

Body of the BasicInformation reachableChanged event

**`See`**

MatterSpecification.v11.Core § 11.1.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L158)

___

### TlvStartUpEvent

• `Const` **TlvStartUpEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the BasicInformation startUp event

**`See`**

MatterSpecification.v11.Core § 11.1.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L115)
