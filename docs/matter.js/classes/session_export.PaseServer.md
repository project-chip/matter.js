[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / PaseServer

# Class: PaseServer

[session/export](../modules/session_export.md).PaseServer

## Implements

- [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

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
| `w0` | `bigint` |
| `L` | `Uint8Array` |
| `pbkdfParameters?` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |

#### Returns

[`PaseServer`](session_export.PaseServer.md)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L45)

## Properties

### L

• `Private` `Readonly` **L**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L47)

___

### pairingErrors

• `Private` **pairingErrors**: `number` = `0`

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L32)

___

### pairingTimer

• `Private` **pairingTimer**: `undefined` \| [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L31)

___

### pbkdfParameters

• `Private` `Optional` `Readonly` **pbkdfParameters**: [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L48)

___

### w0

• `Private` `Readonly` **w0**: `bigint`

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L46)

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

[packages/matter.js/src/session/pase/PaseServer.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L155)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[close](../interfaces/protocol_export.ProtocolHandler.md#close)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:165](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L165)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[getId](../interfaces/protocol_export.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L51)

___

### handlePairingRequest

▸ **handlePairingRequest**(`server`, `messenger`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md) |
| `messenger` | [`PaseServerMessenger`](session_export.PaseServerMessenger.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L78)

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[onNewExchange](../interfaces/protocol_export.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L55)

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

[packages/matter.js/src/session/pase/PaseServer.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L34)

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

[packages/matter.js/src/session/pase/PaseServer.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/pase/PaseServer.ts#L39)
