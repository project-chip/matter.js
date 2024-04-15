[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / ProductDescription

# Interface: ProductDescription

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).ProductDescription

## Hierarchy

- **`ProductDescription`**

  ↳ [`CommissioningModeInstanceData`](common_export.CommissioningModeInstanceData.md)

## Implemented by

- [`State`](../classes/node_export._internal_.ProductDescriptionServer.State.md)

## Table of contents

### Properties

- [deviceType](behavior_cluster_export._internal_.ProductDescription.md#devicetype)
- [name](behavior_cluster_export._internal_.ProductDescription.md#name)
- [productId](behavior_cluster_export._internal_.ProductDescription.md#productid)
- [vendorId](behavior_cluster_export._internal_.ProductDescription.md#vendorid)

## Properties

### deviceType

• `Readonly` **deviceType**: `number`

The device type for commissioning announcements.

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L18)

___

### name

• `Readonly` **name**: `string`

The device name for commissioning announcements.

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L13)

___

### productId

• `Readonly` **productId**: `number`

The product ID for commissioning announcements.

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L28)

___

### vendorId

• `Readonly` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

The vendor ID for commissioning announcements.

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L23)
