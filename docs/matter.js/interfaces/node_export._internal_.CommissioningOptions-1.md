[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / CommissioningOptions

# Interface: CommissioningOptions

[node/export](../modules/node_export.md).[\<internal\>](../modules/node_export._internal_.md).CommissioningOptions

Configuration for initial node commissioning.

## Hierarchy

- `Partial`\<[`Configuration`](behavior_cluster_export._internal_.Configuration.md)\>

  ↳ **`CommissioningOptions`**

## Implemented by

- [`State`](../classes/node_export._internal_.CommissioningBehavior.State.md)

## Table of contents

### Properties

- [additionalBleAdvertisementData](node_export._internal_.CommissioningOptions-1.md#additionalbleadvertisementdata)
- [discriminator](node_export._internal_.CommissioningOptions-1.md#discriminator)
- [flowType](node_export._internal_.CommissioningOptions-1.md#flowtype)
- [passcode](node_export._internal_.CommissioningOptions-1.md#passcode)
- [productDescription](node_export._internal_.CommissioningOptions-1.md#productdescription)

## Properties

### additionalBleAdvertisementData

• `Optional` `Readonly` **additionalBleAdvertisementData**: `Uint8Array`

Vendor-specific BLE advertisement data.

#### Inherited from

Partial.additionalBleAdvertisementData

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L45)

___

### discriminator

• `Optional` `Readonly` **discriminator**: `number`

The discriminator used during initial commissioning.

#### Inherited from

Partial.discriminator

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L35)

___

### flowType

• `Optional` `Readonly` **flowType**: [`CommissioningFlowType`](../enums/schema_export.CommissioningFlowType.md)

The Flow type of commissioning used in announcements.

#### Inherited from

Partial.flowType

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L40)

___

### passcode

• `Optional` `Readonly` **passcode**: `number`

The commissioning passcode/pin.

#### Inherited from

Partial.passcode

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L30)

___

### productDescription

• `Optional` `Readonly` **productDescription**: [`ProductDescription`](behavior_cluster_export._internal_.ProductDescription.md)

Product details included in commissioning advertisements.

#### Inherited from

Partial.productDescription

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L25)
