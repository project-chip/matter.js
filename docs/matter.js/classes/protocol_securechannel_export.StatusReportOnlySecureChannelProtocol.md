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

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:83](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L83)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[getId](../interfaces/protocol_export.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:28](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L28)

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

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:47](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L47)

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

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:32](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L32)
