[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / Configuration

# Interface: Configuration

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).Configuration

## Table of contents

### Properties

- [additionalBleAdvertisementData](behavior_cluster_export._internal_.Configuration.md#additionalbleadvertisementdata)
- [discriminator](behavior_cluster_export._internal_.Configuration.md#discriminator)
- [flowType](behavior_cluster_export._internal_.Configuration.md#flowtype)
- [passcode](behavior_cluster_export._internal_.Configuration.md#passcode)
- [productDescription](behavior_cluster_export._internal_.Configuration.md#productdescription)

## Properties

### additionalBleAdvertisementData

• `Optional` `Readonly` **additionalBleAdvertisementData**: `Uint8Array`

Vendor-specific BLE advertisement data.

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L45)

___

### discriminator

• `Readonly` **discriminator**: `number`

The discriminator used during initial commissioning.

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L35)

___

### flowType

• `Readonly` **flowType**: [`CommissioningFlowType`](../enums/schema_export.CommissioningFlowType.md)

The Flow type of commissioning used in announcements.

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L40)

___

### passcode

• `Readonly` **passcode**: `number`

The commissioning passcode/pin.

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L30)

___

### productDescription

• `Readonly` **productDescription**: [`ProductDescription`](behavior_cluster_export._internal_.ProductDescription.md)

Product details included in commissioning advertisements.

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L25)
