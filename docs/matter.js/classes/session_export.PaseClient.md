[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / PaseClient

# Class: PaseClient

[session/export](../modules/session_export.md).PaseClient

## Table of contents

### Constructors

- [constructor](session_export.PaseClient.md#constructor)

### Methods

- [pair](session_export.PaseClient.md#pair)
- [generatePakePasscodeVerifier](session_export.PaseClient.md#generatepakepasscodeverifier)
- [generateRandomDiscriminator](session_export.PaseClient.md#generaterandomdiscriminator)
- [generateRandomPasscode](session_export.PaseClient.md#generaterandompasscode)

## Constructors

### constructor

• **new PaseClient**()

## Methods

### pair

▸ **pair**(`client`, `exchange`, `setupPin`): `Promise`<[`SecureSession`](session_export.SecureSession.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`MatterController`](export._internal_.MatterController.md) |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\> |
| `setupPin` | `number` |

#### Returns

`Promise`<[`SecureSession`](session_export.SecureSession.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/session/pase/PaseClient.ts:39](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/session/pase/PaseClient.ts#L39)

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

[packages/matter.js/src/session/pase/PaseClient.ts:21](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/session/pase/PaseClient.ts#L21)

___

### generateRandomDiscriminator

▸ `Static` **generateRandomDiscriminator**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/pase/PaseClient.ts:35](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/session/pase/PaseClient.ts#L35)

___

### generateRandomPasscode

▸ `Static` **generateRandomPasscode**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/pase/PaseClient.ts:26](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/session/pase/PaseClient.ts#L26)
