[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / ProtocolHandler

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

matter.js/dist/esm/protocol/ProtocolHandler.d.ts:11

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Source

matter.js/dist/esm/protocol/ProtocolHandler.d.ts:9

***

### onNewExchange()

> **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/MessageExchange.md)\<`ContextT`\> |
| `message` | [`Message`](Message.md) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/protocol/ProtocolHandler.d.ts:10
