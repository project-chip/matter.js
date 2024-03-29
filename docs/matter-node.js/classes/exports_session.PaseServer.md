[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / PaseServer

# Class: PaseServer

[exports/session](../modules/exports_session.md).PaseServer

## Implements

- [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](exports_session.PaseServer.md#constructor)

### Properties

- [L](exports_session.PaseServer.md#l)
- [handlePairingRequest](exports_session.PaseServer.md#handlepairingrequest)
- [pairingErrors](exports_session.PaseServer.md#pairingerrors)
- [pairingTimer](exports_session.PaseServer.md#pairingtimer)
- [pbkdfParameters](exports_session.PaseServer.md#pbkdfparameters)
- [w0](exports_session.PaseServer.md#w0)

### Methods

- [cancelPairing](exports_session.PaseServer.md#cancelpairing)
- [close](exports_session.PaseServer.md#close)
- [getId](exports_session.PaseServer.md#getid)
- [onNewExchange](exports_session.PaseServer.md#onnewexchange)
- [fromPin](exports_session.PaseServer.md#frompin)
- [fromVerificationValue](exports_session.PaseServer.md#fromverificationvalue)

## Constructors

### constructor

• **new PaseServer**(`w0`, `L`, `pbkdfParameters?`): [`PaseServer`](exports_session.PaseServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w0` | `bigint` |
| `L` | `Uint8Array` |
| `pbkdfParameters?` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |

#### Returns

[`PaseServer`](exports_session.PaseServer.md)

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:23

## Properties

### L

• `Private` `Readonly` **L**: `any`

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:17

___

### handlePairingRequest

• `Private` **handlePairingRequest**: `any`

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:26

___

### pairingErrors

• `Private` **pairingErrors**: `any`

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:20

___

### pairingTimer

• `Private` **pairingTimer**: `any`

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:19

___

### pbkdfParameters

• `Private` `Optional` `Readonly` **pbkdfParameters**: `any`

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:18

___

### w0

• `Private` `Readonly` **w0**: `any`

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:16

## Methods

### cancelPairing

▸ **cancelPairing**(`messenger`, `sendError?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`PaseServerMessenger`](exports_session.PaseServerMessenger.md) |
| `sendError?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:27

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[close](../interfaces/exports_protocol.ProtocolHandler.md#close)

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:28

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[getId](../interfaces/exports_protocol.ProtocolHandler.md#getid)

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:24

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[onNewExchange](../interfaces/exports_protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:25

___

### fromPin

▸ **fromPin**(`setupPinCode`, `pbkdfParameters`): `Promise`\<[`PaseServer`](exports_session.PaseServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `setupPinCode` | `number` |
| `pbkdfParameters` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |

#### Returns

`Promise`\<[`PaseServer`](exports_session.PaseServer.md)\>

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:21

___

### fromVerificationValue

▸ **fromVerificationValue**(`verificationValue`, `pbkdfParameters?`): [`PaseServer`](exports_session.PaseServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `verificationValue` | `Uint8Array` |
| `pbkdfParameters?` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |

#### Returns

[`PaseServer`](exports_session.PaseServer.md)

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:22
