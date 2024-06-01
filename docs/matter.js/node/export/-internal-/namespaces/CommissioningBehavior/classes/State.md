[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [node/export](../../../../README.md) / [\<internal\>](../../../README.md) / [CommissioningBehavior](../README.md) / State

# Class: State

Configuration for initial node commissioning.

## Implements

- [`CommissioningOptions`](../../../interfaces/CommissioningOptions.md)

## Constructors

### new State()

> **new State**(): [`State`](State.md)

#### Returns

[`State`](State.md)

## Properties

### additionalBleAdvertisementData?

> `optional` **additionalBleAdvertisementData**: `Uint8Array` = `undefined`

Vendor-specific BLE advertisement data.

#### Implementation of

[`CommissioningOptions`](../../../interfaces/CommissioningOptions.md).[`additionalBleAdvertisementData`](../../../interfaces/CommissioningOptions.md#additionalbleadvertisementdata)

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:289](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L289)

***

### commissioned

> **commissioned**: `boolean` = `false`

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:284](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L284)

***

### discriminator

> **discriminator**: `number` = `-1`

The discriminator used during initial commissioning.

#### Implementation of

[`CommissioningOptions`](../../../interfaces/CommissioningOptions.md).[`discriminator`](../../../interfaces/CommissioningOptions.md#discriminator)

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:287](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L287)

***

### fabrics

> **fabrics**: `Record`\<[`FabricIndex`](../../../../../../datatype/export/README.md#fabricindex), [`ExposedFabricInformation`](../../../../../../fabric/export/README.md#exposedfabricinformation)\> = `{}`

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:285](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L285)

***

### flowType

> **flowType**: [`CommissioningFlowType`](../../../../../../schema/export/enumerations/CommissioningFlowType.md) = `CommissioningFlowType.Standard`

The Flow type of commissioning used in announcements.

#### Implementation of

[`CommissioningOptions`](../../../interfaces/CommissioningOptions.md).[`flowType`](../../../interfaces/CommissioningOptions.md#flowtype)

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:288](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L288)

***

### pairingCodes

> **pairingCodes**: [`PairingCodes`](../interfaces/PairingCodes.md)

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:290](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L290)

***

### passcode

> **passcode**: `number` = `-1`

The commissioning passcode/pin.

#### Implementation of

[`CommissioningOptions`](../../../interfaces/CommissioningOptions.md).[`passcode`](../../../interfaces/CommissioningOptions.md#passcode)

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L286)

## Methods

### `[properties]`()

> **\[properties\]**(`endpoint`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

`object`

##### pairingCodes

> `get` **pairingCodes**(): `object`

###### Returns

`object`

###### manualPairingCode

> **manualPairingCode**: `string`

###### qrPairingCode

> **qrPairingCode**: `string`

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:292](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L292)
