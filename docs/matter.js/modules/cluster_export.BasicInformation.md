[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BasicInformation

# Namespace: BasicInformation

[cluster/export](cluster_export.md).BasicInformation

## Table of contents

### Enumerations

- [Color](../enums/cluster_export.BasicInformation.Color.md)
- [ProductFinish](../enums/cluster_export.BasicInformation.ProductFinish.md)

### Variables

- [Cluster](cluster_export.BasicInformation.md#cluster)
- [TlvCapabilityMinimaStruct](cluster_export.BasicInformation.md#tlvcapabilityminimastruct)
- [TlvLeaveEvent](cluster_export.BasicInformation.md#tlvleaveevent)
- [TlvProductAppearanceStruct](cluster_export.BasicInformation.md#tlvproductappearancestruct)
- [TlvReachableChangedEvent](cluster_export.BasicInformation.md#tlvreachablechangedevent)
- [TlvStartUpEvent](cluster_export.BasicInformation.md#tlvstartupevent)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `capabilityMinima`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `caseSessionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`boolean`, `any`\> ; `location`: [`WritableAttribute`](cluster_export.md#writableattribute)<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](cluster_export.md#writableattribute)<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `productAppearance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `productName`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`VendorId`](datatype_export.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, { `leave`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.md#optionalevent)<`void`, `any`\> ; `startUp`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }\>

Basic Information

This cluster provides attributes and events for determining basic information about Nodes, which supports both
Commissioning and operational determination of Node characteristics, such as Vendor ID, Product ID and serial
number, which apply to the whole Node.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:151](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L151)

___

### TlvCapabilityMinimaStruct

• `Const` **TlvCapabilityMinimaStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `caseSessionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

This structure provides constant values related to overall global capabilities of this Node, that are not
cluster-specific.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.1.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L38)

___

### TlvLeaveEvent

• `Const` **TlvLeaveEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\>  }\>

Body of the BasicInformation leave event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.1.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L119)

___

### TlvProductAppearanceStruct

• `Const` **TlvProductAppearanceStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\>

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:94](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L94)

___

### TlvReachableChangedEvent

• `Const` **TlvReachableChangedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>

Body of the BasicInformation reachableChanged event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.1.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:133](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L133)

___

### TlvStartUpEvent

• `Const` **TlvStartUpEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the BasicInformation startUp event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.1.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:104](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L104)
