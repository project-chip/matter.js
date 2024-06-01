[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [node/export](../../README.md) / [\<internal\>](../README.md) / CommissioningOptions

# Interface: CommissioningOptions

Configuration for initial node commissioning.

## Extends

- `Partial`\<[`Configuration`](../../../../behavior/cluster/export/-internal-/interfaces/Configuration.md)\>

## Properties

### additionalBleAdvertisementData?

> `optional` `readonly` **additionalBleAdvertisementData**: `Uint8Array`

Vendor-specific BLE advertisement data.

#### Inherited from

`Partial.additionalBleAdvertisementData`

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L45)

***

### discriminator?

> `optional` `readonly` **discriminator**: `number`

The discriminator used during initial commissioning.

#### Inherited from

`Partial.discriminator`

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L35)

***

### flowType?

> `optional` `readonly` **flowType**: [`CommissioningFlowType`](../../../../schema/export/enumerations/CommissioningFlowType.md)

The Flow type of commissioning used in announcements.

#### Inherited from

`Partial.flowType`

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L40)

***

### passcode?

> `optional` `readonly` **passcode**: `number`

The commissioning passcode/pin.

#### Inherited from

`Partial.passcode`

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L30)

***

### productDescription?

> `optional` `readonly` **productDescription**: [`ProductDescription`](../../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md)

Product details included in commissioning advertisements.

#### Inherited from

`Partial.productDescription`

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningOptions.ts#L25)
