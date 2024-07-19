[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / [CommissioningBehavior](../modules/node_export._internal_.CommissioningBehavior.md) / State

# Class: State

[\<internal\>](../modules/node_export._internal_.md).[CommissioningBehavior](../modules/node_export._internal_.CommissioningBehavior.md).State

Configuration for initial node commissioning.

## Implements

- [`CommissioningOptions`](../interfaces/node_export._internal_.CommissioningOptions-1.md)

## Table of contents

### Constructors

- [constructor](node_export._internal_.CommissioningBehavior.State.md#constructor)

### Properties

- [additionalBleAdvertisementData](node_export._internal_.CommissioningBehavior.State.md#additionalbleadvertisementdata)
- [commissioned](node_export._internal_.CommissioningBehavior.State.md#commissioned)
- [discriminator](node_export._internal_.CommissioningBehavior.State.md#discriminator)
- [fabrics](node_export._internal_.CommissioningBehavior.State.md#fabrics)
- [flowType](node_export._internal_.CommissioningBehavior.State.md#flowtype)
- [pairingCodes](node_export._internal_.CommissioningBehavior.State.md#pairingcodes)
- [passcode](node_export._internal_.CommissioningBehavior.State.md#passcode)

### Methods

- [[properties]](node_export._internal_.CommissioningBehavior.State.md#[properties])

## Constructors

### constructor

• **new State**(): [`State`](node_export._internal_.CommissioningBehavior.State.md)

#### Returns

[`State`](node_export._internal_.CommissioningBehavior.State.md)

## Properties

### additionalBleAdvertisementData

• `Optional` **additionalBleAdvertisementData**: `Uint8Array` = `undefined`

Vendor-specific BLE advertisement data.

#### Implementation of

[CommissioningOptions](../interfaces/node_export._internal_.CommissioningOptions-1.md).[additionalBleAdvertisementData](../interfaces/node_export._internal_.CommissioningOptions-1.md#additionalbleadvertisementdata)

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:289](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L289)

___

### commissioned

• **commissioned**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:284](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L284)

___

### discriminator

• **discriminator**: `number` = `-1`

The discriminator used during initial commissioning.

#### Implementation of

[CommissioningOptions](../interfaces/node_export._internal_.CommissioningOptions-1.md).[discriminator](../interfaces/node_export._internal_.CommissioningOptions-1.md#discriminator)

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:287](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L287)

___

### fabrics

• **fabrics**: `Record`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex), [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation)\> = `{}`

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:285](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L285)

___

### flowType

• **flowType**: [`CommissioningFlowType`](../enums/schema_export.CommissioningFlowType.md) = `CommissioningFlowType.Standard`

The Flow type of commissioning used in announcements.

#### Implementation of

[CommissioningOptions](../interfaces/node_export._internal_.CommissioningOptions-1.md).[flowType](../interfaces/node_export._internal_.CommissioningOptions-1.md#flowtype)

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:288](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L288)

___

### pairingCodes

• **pairingCodes**: [`PairingCodes`](../interfaces/node_export._internal_.CommissioningBehavior.PairingCodes.md)

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:290](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L290)

___

### passcode

• **passcode**: `number` = `-1`

The commissioning passcode/pin.

#### Implementation of

[CommissioningOptions](../interfaces/node_export._internal_.CommissioningOptions-1.md).[passcode](../interfaces/node_export._internal_.CommissioningOptions-1.md#passcode)

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:286](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L286)

## Methods

### [properties]

▸ **[properties]**(`endpoint`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `get pairingCodes()` | \{ `manualPairingCode`: `string` ; `qrPairingCode`: `string`  } |

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:292](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L292)
