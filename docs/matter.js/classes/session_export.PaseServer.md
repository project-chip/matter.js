[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / PaseServer

# Class: PaseServer

[session/export](../modules/session_export.md).PaseServer

## Implements

- [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<[`MatterDevice`](export._internal_.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](session_export.PaseServer.md#constructor)

### Properties

- [L](session_export.PaseServer.md#l)
- [pairingErrors](session_export.PaseServer.md#pairingerrors)
- [pairingTimer](session_export.PaseServer.md#pairingtimer)
- [pbkdfParameters](session_export.PaseServer.md#pbkdfparameters)
- [w0](session_export.PaseServer.md#w0)

### Methods

- [cancelPairing](session_export.PaseServer.md#cancelpairing)
- [close](session_export.PaseServer.md#close)
- [getId](session_export.PaseServer.md#getid)
- [handlePairingRequest](session_export.PaseServer.md#handlepairingrequest)
- [onNewExchange](session_export.PaseServer.md#onnewexchange)
- [fromPin](session_export.PaseServer.md#frompin)
- [fromVerificationValue](session_export.PaseServer.md#fromverificationvalue)

## Constructors

### constructor

• **new PaseServer**(`w0`, `L`, `pbkdfParameters?`): [`PaseServer`](session_export.PaseServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w0` | `BN` |
| `L` | `Uint8Array` |
| `pbkdfParameters?` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |

#### Returns

[`PaseServer`](session_export.PaseServer.md)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:44](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L44)

## Properties

### L

• `Private` `Readonly` **L**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:46](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L46)

___

### pairingErrors

• `Private` **pairingErrors**: `number` = `0`

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:31](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L31)

___

### pairingTimer

• `Private` **pairingTimer**: `undefined` \| [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:30](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L30)

___

### pbkdfParameters

• `Private` `Optional` `Readonly` **pbkdfParameters**: [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:47](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L47)

___

### w0

• `Private` `Readonly` **w0**: `BN`

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:45](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L45)

## Methods

### cancelPairing

▸ **cancelPairing**(`messenger`, `sendError?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `messenger` | [`PaseServerMessenger`](session_export.PaseServerMessenger.md) | `undefined` |
| `sendError` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:153](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L153)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[close](../interfaces/protocol_export.ProtocolHandler.md#close)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:163](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L163)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[getId](../interfaces/protocol_export.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:50](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L50)

___

### handlePairingRequest

▸ **handlePairingRequest**(`server`, `messenger`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`MatterDevice`](export._internal_.MatterDevice.md) |
| `messenger` | [`PaseServerMessenger`](session_export.PaseServerMessenger.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:77](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L77)

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[onNewExchange](../interfaces/protocol_export.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:54](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L54)

___

### fromPin

▸ **fromPin**(`setupPinCode`, `pbkdfParameters`): `Promise`\<[`PaseServer`](session_export.PaseServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `setupPinCode` | `number` |
| `pbkdfParameters` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |

#### Returns

`Promise`\<[`PaseServer`](session_export.PaseServer.md)\>

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:33](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L33)

___

### fromVerificationValue

▸ **fromVerificationValue**(`verificationValue`, `pbkdfParameters?`): [`PaseServer`](session_export.PaseServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `verificationValue` | `Uint8Array` |
| `pbkdfParameters?` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |

#### Returns

[`PaseServer`](session_export.PaseServer.md)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:38](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/pase/PaseServer.ts#L38)
