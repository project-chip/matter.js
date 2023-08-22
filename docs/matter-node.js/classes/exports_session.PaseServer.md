[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / PaseServer

# Class: PaseServer

[exports/session](../modules/exports_session.md).PaseServer

## Implements

- [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](exports_session.PaseServer.md#constructor)

### Properties

- [L](exports_session.PaseServer.md#l)
- [handlePairingRequest](exports_session.PaseServer.md#handlepairingrequest)
- [pbkdfParameters](exports_session.PaseServer.md#pbkdfparameters)
- [w0](exports_session.PaseServer.md#w0)

### Methods

- [getId](exports_session.PaseServer.md#getid)
- [onNewExchange](exports_session.PaseServer.md#onnewexchange)
- [fromPin](exports_session.PaseServer.md#frompin)
- [fromVerificationValue](exports_session.PaseServer.md#fromverificationvalue)

## Constructors

### constructor

• **new PaseServer**(`w0`, `L`, `pbkdfParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w0` | `BN` |
| `L` | `Uint8Array` |
| `pbkdfParameters?` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseServer.d.ts:18

## Properties

### L

• `Private` `Readonly` **L**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseServer.d.ts:14

___

### handlePairingRequest

• `Private` **handlePairingRequest**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseServer.d.ts:21

___

### pbkdfParameters

• `Private` `Optional` `Readonly` **pbkdfParameters**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseServer.d.ts:15

___

### w0

• `Private` `Readonly` **w0**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseServer.d.ts:13

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[getId](../interfaces/exports_protocol.ProtocolHandler.md#getid)

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseServer.d.ts:19

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[onNewExchange](../interfaces/exports_protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseServer.d.ts:20

___

### fromPin

▸ `Static` **fromPin**(`setupPinCode`, `pbkdfParameters`): `Promise`<[`PaseServer`](exports_session.PaseServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `setupPinCode` | `number` |
| `pbkdfParameters` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |

#### Returns

`Promise`<[`PaseServer`](exports_session.PaseServer.md)\>

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseServer.d.ts:16

___

### fromVerificationValue

▸ `Static` **fromVerificationValue**(`verificationValue`, `pbkdfParameters?`): [`PaseServer`](exports_session.PaseServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `verificationValue` | `Uint8Array` |
| `pbkdfParameters?` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |

#### Returns

[`PaseServer`](exports_session.PaseServer.md)

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseServer.d.ts:17
