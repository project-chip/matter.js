[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [session/export](../README.md) / PaseServer

# Class: PaseServer

## Implements

- [`ProtocolHandler`](../../../protocol/export/interfaces/ProtocolHandler.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\>

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

[packages/matter.js/src/session/pase/PaseServer.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L45)

## Properties

### L

> `private` `readonly` **L**: `Uint8Array`

#### Source

[packages/matter.js/src/session/pase/PaseServer.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L47)

***

### pairingErrors

> `private` **pairingErrors**: `number` = `0`

#### Source

[packages/matter.js/src/session/pase/PaseServer.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L32)

***

### pairingTimer

> `private` **pairingTimer**: `undefined` \| [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/session/pase/PaseServer.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L31)

***

### pbkdfParameters?

> `private` `optional` `readonly` **pbkdfParameters**: [`PbkdfParameters`](../../../crypto/export/interfaces/PbkdfParameters.md)

#### Source

[packages/matter.js/src/session/pase/PaseServer.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L48)

***

### w0

> `private` `readonly` **w0**: `bigint`

#### Source

[packages/matter.js/src/session/pase/PaseServer.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L46)

## Methods

### cancelPairing()

> **cancelPairing**(`messenger`, `sendError`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `messenger` | [`PaseServerMessenger`](PaseServerMessenger.md) | `undefined` |
| `sendError` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/pase/PaseServer.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L158)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../../protocol/export/interfaces/ProtocolHandler.md).[`close`](../../../protocol/export/interfaces/ProtocolHandler.md#close)

#### Source

[packages/matter.js/src/session/pase/PaseServer.ts:168](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L168)

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Implementation of

[`ProtocolHandler`](../../../protocol/export/interfaces/ProtocolHandler.md).[`getId`](../../../protocol/export/interfaces/ProtocolHandler.md#getid)

#### Source

[packages/matter.js/src/session/pase/PaseServer.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L51)

***

### handlePairingRequest()

> `private` **handlePairingRequest**(`server`, `messenger`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `server` | [`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md) |
| `messenger` | [`PaseServerMessenger`](PaseServerMessenger.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/pase/PaseServer.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L81)

***

### onNewExchange()

> **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../../protocol/export/interfaces/ProtocolHandler.md).[`onNewExchange`](../../../protocol/export/interfaces/ProtocolHandler.md#onnewexchange)

#### Source

[packages/matter.js/src/session/pase/PaseServer.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L55)

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

[packages/matter.js/src/session/pase/PaseServer.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L34)

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

[packages/matter.js/src/session/pase/PaseServer.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseServer.ts#L39)
