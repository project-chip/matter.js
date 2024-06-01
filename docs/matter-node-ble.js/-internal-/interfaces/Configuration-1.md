[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / Configuration

# Interface: Configuration

## Properties

### additionalBleAdvertisementData?

> `optional` `readonly` **additionalBleAdvertisementData**: `Uint8Array`

Vendor-specific BLE advertisement data.

#### Source

matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:36

***

### discriminator

> `readonly` **discriminator**: `number`

The discriminator used during initial commissioning.

#### Source

matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:28

***

### flowType

> `readonly` **flowType**: [`CommissioningFlowType`](../enumerations/CommissioningFlowType.md)

The Flow type of commissioning used in announcements.

#### Source

matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:32

***

### passcode

> `readonly` **passcode**: `number`

The commissioning passcode/pin.

#### Source

matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:24

***

### productDescription

> `readonly` **productDescription**: [`ProductDescription`](ProductDescription.md)

Product details included in commissioning advertisements.

#### Source

matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:20
