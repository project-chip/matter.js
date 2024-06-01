[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [node/export](../../../../README.md) / [\<internal\>](../../../README.md) / [ProductDescriptionServer](../README.md) / State

# Class: State

## Implements

- [`ProductDescription`](../../../../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md)

## Constructors

### new State()

> **new State**(): [`State`](State.md)

#### Returns

[`State`](State.md)

## Properties

### deviceType

> **deviceType**: [`DeviceTypeId`](../../../../../../datatype/export/README.md#devicetypeid) = `UNKNOWN_DEVICE_TYPE`

The device type for commissioning announcements.

#### Implementation of

[`ProductDescription`](../../../../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md).[`deviceType`](../../../../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md#devicetype)

#### Source

[packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts#L82)

***

### name

> **name**: `string` = `""`

The device name for commissioning announcements.

#### Implementation of

[`ProductDescription`](../../../../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md).[`name`](../../../../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md#name)

#### Source

[packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts#L77)

***

### productId

> **productId**: `number` = `-1`

The product ID for commissioning announcements.

#### Implementation of

[`ProductDescription`](../../../../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md).[`productId`](../../../../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md#productid)

#### Source

[packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts#L92)

***

### vendorId

> **vendorId**: [`VendorId`](../../../../../../datatype/export/README.md#vendorid)

The vendor ID for commissioning announcements.

#### Implementation of

[`ProductDescription`](../../../../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md).[`vendorId`](../../../../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md#vendorid)

#### Source

[packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/product-description/ProductDescriptionServer.ts#L87)
