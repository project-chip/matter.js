[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/session](../README.md) / CaseServer

# Class: CaseServer

## Implements

- [`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\>

## Constructors

### new CaseServer()

> **new CaseServer**(): [`CaseServer`](CaseServer.md)

#### Returns

[`CaseServer`](CaseServer.md)

## Properties

### handleSigma1

> `private` **handleSigma1**: `any`

#### Source

packages/matter.js/dist/esm/session/case/CaseServer.d.ts:12

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`close`](../../protocol/interfaces/ProtocolHandler.md#close)

#### Source

packages/matter.js/dist/esm/session/case/CaseServer.d.ts:13

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`getId`](../../protocol/interfaces/ProtocolHandler.md#getid)

#### Source

packages/matter.js/dist/esm/session/case/CaseServer.d.ts:11

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

packages/matter.js/dist/esm/session/case/CaseServer.d.ts:10
