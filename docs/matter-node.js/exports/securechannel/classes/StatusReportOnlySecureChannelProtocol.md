[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/securechannel](../README.md) / StatusReportOnlySecureChannelProtocol

# Class: StatusReportOnlySecureChannelProtocol

## Extended by

- [`SecureChannelProtocol`](SecureChannelProtocol.md)

## Implements

- [`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md)\<`any`\>

## Constructors

### new StatusReportOnlySecureChannelProtocol()

> **new StatusReportOnlySecureChannelProtocol**(): [`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md)

#### Returns

[`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`close`](../../protocol/interfaces/ProtocolHandler.md#close)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:14

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`getId`](../../protocol/interfaces/ProtocolHandler.md#getid)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:11

***

### handleInitialStatusReport()

> **handleInitialStatusReport**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:13

***

### onNewExchange()

> **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`onNewExchange`](../../protocol/interfaces/ProtocolHandler.md#onnewexchange)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:12
