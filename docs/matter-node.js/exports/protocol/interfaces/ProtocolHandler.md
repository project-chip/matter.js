[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / ProtocolHandler

# Interface: ProtocolHandler\<ContextT\>

## Type parameters

| Type parameter |
| :------ |
| `ContextT` |

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/ProtocolHandler.d.ts:11

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/protocol/ProtocolHandler.d.ts:9

***

### onNewExchange()

> **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/MessageExchange.md)\<`ContextT`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/ProtocolHandler.d.ts:10
