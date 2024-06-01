[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / Configuration

# Interface: Configuration

## Properties

### additionalBleAdvertisementData?

> `optional` `readonly` **additionalBleAdvertisementData**: `Uint8Array`

Vendor-specific BLE advertisement data.

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L45)

***

### discriminator

> `readonly` **discriminator**: `number`

The discriminator used during initial commissioning.

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L35)

***

### flowType

> `readonly` **flowType**: [`CommissioningFlowType`](../../../../../schema/export/enumerations/CommissioningFlowType.md)

The Flow type of commissioning used in announcements.

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L40)

***

### passcode

> `readonly` **passcode**: `number`

The commissioning passcode/pin.

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L30)

***

### productDescription

> `readonly` **productDescription**: [`ProductDescription`](ProductDescription.md)

Product details included in commissioning advertisements.

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L25)
