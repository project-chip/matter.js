[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / [ProductDescriptionServer](../modules/node_export._internal_.ProductDescriptionServer.md) / State

# Class: State

[\<internal\>](../modules/node_export._internal_.md).[ProductDescriptionServer](../modules/node_export._internal_.ProductDescriptionServer.md).State

## Implements

- [`ProductDescription`](../interfaces/behavior_cluster_export._internal_.ProductDescription.md)

## Table of contents

### Constructors

- [constructor](node_export._internal_.ProductDescriptionServer.State.md#constructor)

### Properties

- [deviceType](node_export._internal_.ProductDescriptionServer.State.md#devicetype)
- [name](node_export._internal_.ProductDescriptionServer.State.md#name)
- [productId](node_export._internal_.ProductDescriptionServer.State.md#productid)
- [vendorId](node_export._internal_.ProductDescriptionServer.State.md#vendorid)

## Constructors

### constructor

• **new State**(): [`State`](node_export._internal_.ProductDescriptionServer.State.md)

#### Returns

[`State`](node_export._internal_.ProductDescriptionServer.State.md)

## Properties

### deviceType

• **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid) = `UNKNOWN_DEVICE_TYPE`

The device type for commissioning announcements.

#### Implementation of

[ProductDescription](../interfaces/behavior_cluster_export._internal_.ProductDescription.md).[deviceType](../interfaces/behavior_cluster_export._internal_.ProductDescription.md#devicetype)

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts#L82)

___

### name

• **name**: `string` = `""`

The device name for commissioning announcements.

#### Implementation of

[ProductDescription](../interfaces/behavior_cluster_export._internal_.ProductDescription.md).[name](../interfaces/behavior_cluster_export._internal_.ProductDescription.md#name)

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts#L77)

___

### productId

• **productId**: `number` = `-1`

The product ID for commissioning announcements.

#### Implementation of

[ProductDescription](../interfaces/behavior_cluster_export._internal_.ProductDescription.md).[productId](../interfaces/behavior_cluster_export._internal_.ProductDescription.md#productid)

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts#L92)

___

### vendorId

• **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

The vendor ID for commissioning announcements.

#### Implementation of

[ProductDescription](../interfaces/behavior_cluster_export._internal_.ProductDescription.md).[vendorId](../interfaces/behavior_cluster_export._internal_.ProductDescription.md#vendorid)

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts#L87)
