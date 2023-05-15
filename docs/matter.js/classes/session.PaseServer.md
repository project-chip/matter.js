[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / PaseServer

# Class: PaseServer

[session](../modules/session.md).PaseServer

## Implements

- [`ProtocolHandler`](../interfaces/protocol.ProtocolHandler.md)<[`MatterDevice`](index.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](session.PaseServer.md#constructor)

### Properties

- [L](session.PaseServer.md#l)
- [pbkdfParameters](session.PaseServer.md#pbkdfparameters)
- [w0](session.PaseServer.md#w0)

### Methods

- [getId](session.PaseServer.md#getid)
- [handlePairingRequest](session.PaseServer.md#handlepairingrequest)
- [onNewExchange](session.PaseServer.md#onnewexchange)
- [fromPin](session.PaseServer.md#frompin)
- [fromVerificationValue](session.PaseServer.md#fromverificationvalue)

## Constructors

### constructor

• **new PaseServer**(`w0`, `L`, `pbkdfParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w0` | `BN` |
| `L` | `Uint8Array` |
| `pbkdfParameters?` | [`PbkdfParameters`](../interfaces/crypto.PbkdfParameters.md) |

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseServer.ts#L34)

## Properties

### L

• `Private` `Readonly` **L**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseServer.ts#L36)

___

### pbkdfParameters

• `Private` `Optional` `Readonly` **pbkdfParameters**: [`PbkdfParameters`](../interfaces/crypto.PbkdfParameters.md)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseServer.ts#L37)

___

### w0

• `Private` `Readonly` **w0**: `BN`

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseServer.ts#L35)

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol.ProtocolHandler.md).[getId](../interfaces/protocol.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseServer.ts#L40)

___

### handlePairingRequest

▸ `Private` **handlePairingRequest**(`server`, `messenger`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`MatterDevice`](index.MatterDevice.md) |
| `messenger` | [`PaseServerMessenger`](session.PaseServerMessenger.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseServer.ts#L54)

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol.ProtocolHandler.md).[onNewExchange](../interfaces/protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseServer.ts#L44)

___

### fromPin

▸ `Static` **fromPin**(`setupPinCode`, `pbkdfParameters`): `Promise`<[`PaseServer`](session.PaseServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `setupPinCode` | `number` |
| `pbkdfParameters` | [`PbkdfParameters`](../interfaces/crypto.PbkdfParameters.md) |

#### Returns

`Promise`<[`PaseServer`](session.PaseServer.md)\>

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseServer.ts#L23)

___

### fromVerificationValue

▸ `Static` **fromVerificationValue**(`verificationValue`, `pbkdfParameters?`): [`PaseServer`](session.PaseServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `verificationValue` | `Uint8Array` |
| `pbkdfParameters?` | [`PbkdfParameters`](../interfaces/crypto.PbkdfParameters.md) |

#### Returns

[`PaseServer`](session.PaseServer.md)

#### Defined in

[packages/matter.js/src/session/pase/PaseServer.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseServer.ts#L28)
