[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / ProtocolHandler

# Interface: ProtocolHandler<ContextT\>

[protocol/export](../modules/protocol_export.md).ProtocolHandler

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Implemented by

- [`CaseServer`](../classes/session_export.CaseServer.md)
- [`InteractionServer`](../classes/protocol_interaction_export.InteractionServer.md)
- [`PaseServer`](../classes/session_export.PaseServer.md)
- [`SecureChannelProtocol`](../classes/protocol_securechannel_export.SecureChannelProtocol.md)
- [`SubscriptionClient`](../classes/protocol_interaction_export.SubscriptionClient.md)

## Table of contents

### Methods

- [getId](protocol_export.ProtocolHandler.md#getid)
- [onNewExchange](protocol_export.ProtocolHandler.md#onnewexchange)

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/protocol/ProtocolHandler.ts:11](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ProtocolHandler.ts#L11)

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/protocol_export.MessageExchange.md)<`ContextT`\> |
| `message` | [`Message`](codec_export.Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ProtocolHandler.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ProtocolHandler.ts#L12)
