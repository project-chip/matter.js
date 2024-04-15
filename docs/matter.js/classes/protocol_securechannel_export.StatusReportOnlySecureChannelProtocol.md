[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/securechannel/export](../modules/protocol_securechannel_export.md) / StatusReportOnlySecureChannelProtocol

# Class: StatusReportOnlySecureChannelProtocol

[protocol/securechannel/export](../modules/protocol_securechannel_export.md).StatusReportOnlySecureChannelProtocol

## Hierarchy

- **`StatusReportOnlySecureChannelProtocol`**

  ↳ [`SecureChannelProtocol`](protocol_securechannel_export.SecureChannelProtocol.md)

## Implements

- [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<`any`\>

## Table of contents

### Constructors

- [constructor](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#constructor)

### Methods

- [close](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#close)
- [getId](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#getid)
- [handleInitialStatusReport](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#handleinitialstatusreport)
- [onNewExchange](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#onnewexchange)

## Constructors

### constructor

• **new StatusReportOnlySecureChannelProtocol**(): [`StatusReportOnlySecureChannelProtocol`](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md)

#### Returns

[`StatusReportOnlySecureChannelProtocol`](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[close](../interfaces/protocol_export.ProtocolHandler.md#close)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L81)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[getId](../interfaces/protocol_export.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L27)

___

### handleInitialStatusReport

▸ **handleInitialStatusReport**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L45)

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[onNewExchange](../interfaces/protocol_export.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L31)
