[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / ProtocolHandler

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

[packages/matter.js/src/protocol/ProtocolHandler.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ProtocolHandler.ts#L13)

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/protocol/ProtocolHandler.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ProtocolHandler.ts#L11)

***

### onNewExchange()

> **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/MessageExchange.md)\<`ContextT`\> |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ProtocolHandler.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ProtocolHandler.ts#L12)
