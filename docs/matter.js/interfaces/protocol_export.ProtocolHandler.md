[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / ProtocolHandler

# Interface: ProtocolHandler\<ContextT\>

[protocol/export](../modules/protocol_export.md).ProtocolHandler

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Implemented by

- [`CaseServer`](../classes/session_export.CaseServer.md)
- [`InteractionServer`](../classes/protocol_interaction_export.InteractionServer-1.md)
- [`PaseServer`](../classes/session_export.PaseServer.md)
- [`StatusReportOnlySecureChannelProtocol`](../classes/protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md)
- [`SubscriptionClient`](../classes/protocol_interaction_export.SubscriptionClient.md)

## Table of contents

### Methods

- [close](protocol_export.ProtocolHandler.md#close)
- [getId](protocol_export.ProtocolHandler.md#getid)
- [onNewExchange](protocol_export.ProtocolHandler.md#onnewexchange)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ProtocolHandler.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ProtocolHandler.ts#L13)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/protocol/ProtocolHandler.ts:11](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ProtocolHandler.ts#L11)

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/protocol_export.MessageExchange.md)\<`ContextT`\> |
| `message` | [`Message`](codec_export.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ProtocolHandler.ts:12](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ProtocolHandler.ts#L12)
