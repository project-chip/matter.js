[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / PaseClient

# Class: PaseClient

[exports/session](../modules/exports_session.md).PaseClient

## Table of contents

### Constructors

- [constructor](exports_session.PaseClient.md#constructor)

### Methods

- [pair](exports_session.PaseClient.md#pair)
- [generatePakePasscodeVerifier](exports_session.PaseClient.md#generatepakepasscodeverifier)
- [generateRandomDiscriminator](exports_session.PaseClient.md#generaterandomdiscriminator)
- [generateRandomPasscode](exports_session.PaseClient.md#generaterandompasscode)

## Constructors

### constructor

• **new PaseClient**()

## Methods

### pair

▸ **pair**(`client`, `exchange`, `setupPin`): `Promise`<[`SecureSession`](exports_session.SecureSession.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`MatterController`](export._internal_.MatterController.md) |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\> |
| `setupPin` | `number` |

#### Returns

`Promise`<[`SecureSession`](exports_session.SecureSession.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseClient.d.ts:13

___

### generatePakePasscodeVerifier

▸ `Static` **generatePakePasscodeVerifier**(`setupPinCode`, `pbkdfParameters`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `setupPinCode` | `number` |
| `pbkdfParameters` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseClient.d.ts:10

___

### generateRandomDiscriminator

▸ `Static` **generateRandomDiscriminator**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseClient.d.ts:12

___

### generateRandomPasscode

▸ `Static` **generateRandomPasscode**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseClient.d.ts:11
