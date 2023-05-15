[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol](../modules/protocol.md) / ProtocolHandler

# Interface: ProtocolHandler<ContextT\>

[protocol](../modules/protocol.md).ProtocolHandler

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Implemented by

- [`CaseServer`](../classes/session.CaseServer.md)
- [`InteractionServer`](../classes/protocol_interaction.InteractionServer.md)
- [`PaseServer`](../classes/session.PaseServer.md)
- [`SecureChannelProtocol`](../classes/protocol_securechannel.SecureChannelProtocol.md)
- [`SubscriptionClient`](../classes/protocol_interaction.SubscriptionClient.md)

## Table of contents

### Methods

- [getId](protocol.ProtocolHandler.md#getid)
- [onNewExchange](protocol.ProtocolHandler.md#onnewexchange)

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/protocol/ProtocolHandler.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ProtocolHandler.ts#L11)

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/protocol.MessageExchange.md)<`ContextT`\> |
| `message` | [`Message`](codec.Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ProtocolHandler.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ProtocolHandler.ts#L12)
