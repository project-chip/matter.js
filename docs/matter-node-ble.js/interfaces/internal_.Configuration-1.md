[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Configuration

# Interface: Configuration

[\<internal\>](../modules/internal_.md).Configuration

## Table of contents

### Properties

- [additionalBleAdvertisementData](internal_.Configuration-1.md#additionalbleadvertisementdata)
- [discriminator](internal_.Configuration-1.md#discriminator)
- [flowType](internal_.Configuration-1.md#flowtype)
- [passcode](internal_.Configuration-1.md#passcode)
- [productDescription](internal_.Configuration-1.md#productdescription)

## Properties

### additionalBleAdvertisementData

• `Optional` `Readonly` **additionalBleAdvertisementData**: `Uint8Array`

Vendor-specific BLE advertisement data.

#### Defined in

matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:36

___

### discriminator

• `Readonly` **discriminator**: `number`

The discriminator used during initial commissioning.

#### Defined in

matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:28

___

### flowType

• `Readonly` **flowType**: [`CommissioningFlowType`](../enums/internal_.CommissioningFlowType.md)

The Flow type of commissioning used in announcements.

#### Defined in

matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:32

___

### passcode

• `Readonly` **passcode**: `number`

The commissioning passcode/pin.

#### Defined in

matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:24

___

### productDescription

• `Readonly` **productDescription**: [`ProductDescription`](internal_.ProductDescription.md)

Product details included in commissioning advertisements.

#### Defined in

matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:20
