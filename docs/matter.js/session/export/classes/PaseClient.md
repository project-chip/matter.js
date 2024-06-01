[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [session/export](../README.md) / PaseClient

# Class: PaseClient

## Constructors

### new PaseClient()

> **new PaseClient**(): [`PaseClient`](PaseClient.md)

#### Returns

[`PaseClient`](PaseClient.md)

## Methods

### pair()

> **pair**(`client`, `exchange`, `setupPin`): `Promise`\<[`SecureSession`](SecureSession.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`MatterController`](../../../export/-internal-/classes/MatterController.md) |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\> |
| `setupPin` | `number` |

#### Returns

`Promise`\<[`SecureSession`](SecureSession.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>\>

#### Source

[packages/matter.js/src/session/pase/PaseClient.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseClient.ts#L41)

***

### generatePakePasscodeVerifier()

> `static` **generatePakePasscodeVerifier**(`setupPinCode`, `pbkdfParameters`): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `setupPinCode` | `number` |
| `pbkdfParameters` | [`PbkdfParameters`](../../../crypto/export/interfaces/PbkdfParameters.md) |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

[packages/matter.js/src/session/pase/PaseClient.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseClient.ts#L23)

***

### generateRandomDiscriminator()

> `static` **generateRandomDiscriminator**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/session/pase/PaseClient.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseClient.ts#L37)

***

### generateRandomPasscode()

> `static` **generateRandomPasscode**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/session/pase/PaseClient.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseClient.ts#L28)
