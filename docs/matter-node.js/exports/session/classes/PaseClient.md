[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/session](../README.md) / PaseClient

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
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\> |
| `setupPin` | `number` |

#### Returns

`Promise`\<[`SecureSession`](SecureSession.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>\>

#### Source

packages/matter.js/dist/esm/session/pase/PaseClient.d.ts:13

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

packages/matter.js/dist/esm/session/pase/PaseClient.d.ts:10

***

### generateRandomDiscriminator()

> `static` **generateRandomDiscriminator**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/session/pase/PaseClient.d.ts:12

***

### generateRandomPasscode()

> `static` **generateRandomPasscode**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/session/pase/PaseClient.d.ts:11
