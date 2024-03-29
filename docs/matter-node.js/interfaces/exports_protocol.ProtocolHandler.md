[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / ProtocolHandler

# Interface: ProtocolHandler\<ContextT\>

[exports/protocol](../modules/exports_protocol.md).ProtocolHandler

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Implemented by

- [`CaseServer`](../classes/exports_session.CaseServer.md)
- [`InteractionServer`](../classes/exports_interaction.InteractionServer-1.md)
- [`PaseServer`](../classes/exports_session.PaseServer.md)
- [`StatusReportOnlySecureChannelProtocol`](../classes/exports_securechannel.StatusReportOnlySecureChannelProtocol.md)
- [`SubscriptionClient`](../classes/exports_interaction.SubscriptionClient.md)

## Table of contents

### Methods

- [close](exports_protocol.ProtocolHandler.md#close)
- [getId](exports_protocol.ProtocolHandler.md#getid)
- [onNewExchange](exports_protocol.ProtocolHandler.md#onnewexchange)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ProtocolHandler.d.ts:11

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/protocol/ProtocolHandler.d.ts:9

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/exports_protocol.MessageExchange.md)\<`ContextT`\> |
| `message` | [`Message`](exports_codec.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ProtocolHandler.d.ts:10
