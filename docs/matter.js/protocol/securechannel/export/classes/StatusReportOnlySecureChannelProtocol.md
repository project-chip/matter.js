[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/securechannel/export](../README.md) / StatusReportOnlySecureChannelProtocol

# Class: StatusReportOnlySecureChannelProtocol

## Extended by

- [`SecureChannelProtocol`](SecureChannelProtocol.md)

## Implements

- [`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md)\<`any`\>

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

[`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md).[`close`](../../../export/interfaces/ProtocolHandler.md#close)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L81)

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Implementation of

[`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md).[`getId`](../../../export/interfaces/ProtocolHandler.md#getid)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L27)

***

### handleInitialStatusReport()

> **handleInitialStatusReport**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L45)

***

### onNewExchange()

> **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md).[`onNewExchange`](../../../export/interfaces/ProtocolHandler.md#onnewexchange)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L31)
