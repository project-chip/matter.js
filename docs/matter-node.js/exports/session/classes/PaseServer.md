[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/session](../README.md) / PaseServer

# Class: PaseServer

## Implements

- [`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\>

## Constructors

### new PaseServer()

> **new PaseServer**(`w0`, `L`, `pbkdfParameters`?): [`PaseServer`](PaseServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `w0` | `bigint` |
| `L` | `Uint8Array` |
| `pbkdfParameters`? | [`PbkdfParameters`](../../../crypto/export/interfaces/PbkdfParameters.md) |

#### Returns

[`PaseServer`](PaseServer.md)

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:23

## Properties

### L

> `private` `readonly` **L**: `any`

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:17

***

### handlePairingRequest

> `private` **handlePairingRequest**: `any`

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:26

***

### pairingErrors

> `private` **pairingErrors**: `any`

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:20

***

### pairingTimer

> `private` **pairingTimer**: `any`

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:19

***

### pbkdfParameters?

> `private` `optional` `readonly` **pbkdfParameters**: `any`

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:18

***

### w0

> `private` `readonly` **w0**: `any`

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:16

## Methods

### cancelPairing()

> **cancelPairing**(`messenger`, `sendError`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messenger` | [`PaseServerMessenger`](PaseServerMessenger.md) |
| `sendError`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:27

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`close`](../../protocol/interfaces/ProtocolHandler.md#close)

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:28

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`getId`](../../protocol/interfaces/ProtocolHandler.md#getid)

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:24

***

### onNewExchange()

> **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`onNewExchange`](../../protocol/interfaces/ProtocolHandler.md#onnewexchange)

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:25

***

### fromPin()

> `static` **fromPin**(`setupPinCode`, `pbkdfParameters`): `Promise`\<[`PaseServer`](PaseServer.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `setupPinCode` | `number` |
| `pbkdfParameters` | [`PbkdfParameters`](../../../crypto/export/interfaces/PbkdfParameters.md) |

#### Returns

`Promise`\<[`PaseServer`](PaseServer.md)\>

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:21

***

### fromVerificationValue()

> `static` **fromVerificationValue**(`verificationValue`, `pbkdfParameters`?): [`PaseServer`](PaseServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `verificationValue` | `Uint8Array` |
| `pbkdfParameters`? | [`PbkdfParameters`](../../../crypto/export/interfaces/PbkdfParameters.md) |

#### Returns

[`PaseServer`](PaseServer.md)

#### Source

packages/matter.js/dist/esm/session/pase/PaseServer.d.ts:22
