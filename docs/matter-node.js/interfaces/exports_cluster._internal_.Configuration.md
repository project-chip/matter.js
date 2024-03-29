[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [\<internal\>](../modules/exports_cluster._internal_.md) / Configuration

# Interface: Configuration

[exports/cluster](../modules/exports_cluster.md).[\<internal\>](../modules/exports_cluster._internal_.md).Configuration

## Table of contents

### Properties

- [additionalBleAdvertisementData](exports_cluster._internal_.Configuration.md#additionalbleadvertisementdata)
- [discriminator](exports_cluster._internal_.Configuration.md#discriminator)
- [flowType](exports_cluster._internal_.Configuration.md#flowtype)
- [passcode](exports_cluster._internal_.Configuration.md#passcode)
- [productDescription](exports_cluster._internal_.Configuration.md#productdescription)

## Properties

### additionalBleAdvertisementData

• `Optional` `Readonly` **additionalBleAdvertisementData**: `Uint8Array`

Vendor-specific BLE advertisement data.

#### Defined in

packages/matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:36

___

### discriminator

• `Readonly` **discriminator**: `number`

The discriminator used during initial commissioning.

#### Defined in

packages/matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:28

___

### flowType

• `Readonly` **flowType**: [`CommissioningFlowType`](../enums/exports_schema.CommissioningFlowType.md)

The Flow type of commissioning used in announcements.

#### Defined in

packages/matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:32

___

### passcode

• `Readonly` **passcode**: `number`

The commissioning passcode/pin.

#### Defined in

packages/matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:24

___

### productDescription

• `Readonly` **productDescription**: [`ProductDescription`](exports_cluster._internal_.ProductDescription.md)

Product details included in commissioning advertisements.

#### Defined in

packages/matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:20
