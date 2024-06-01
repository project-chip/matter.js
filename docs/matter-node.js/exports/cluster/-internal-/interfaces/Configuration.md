[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / [\<internal\>](../README.md) / Configuration

# Interface: Configuration

## Properties

### additionalBleAdvertisementData?

> `optional` `readonly` **additionalBleAdvertisementData**: `Uint8Array`

Vendor-specific BLE advertisement data.

#### Source

packages/matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:36

***

### discriminator

> `readonly` **discriminator**: `number`

The discriminator used during initial commissioning.

#### Source

packages/matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:28

***

### flowType

> `readonly` **flowType**: [`CommissioningFlowType`](../../../schema/enumerations/CommissioningFlowType.md)

The Flow type of commissioning used in announcements.

#### Source

packages/matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:32

***

### passcode

> `readonly` **passcode**: `number`

The commissioning passcode/pin.

#### Source

packages/matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:24

***

### productDescription

> `readonly` **productDescription**: [`ProductDescription`](ProductDescription.md)

Product details included in commissioning advertisements.

#### Source

packages/matter.js/dist/esm/behavior/system/commissioning/CommissioningOptions.d.ts:20
