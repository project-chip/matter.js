[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/securechannel](../modules/exports_securechannel.md) / StatusReportOnlySecureChannelProtocol

# Class: StatusReportOnlySecureChannelProtocol

[exports/securechannel](../modules/exports_securechannel.md).StatusReportOnlySecureChannelProtocol

## Hierarchy

- **`StatusReportOnlySecureChannelProtocol`**

  ↳ [`SecureChannelProtocol`](exports_securechannel.SecureChannelProtocol.md)

## Implements

- [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<`any`\>

## Table of contents

### Constructors

- [constructor](exports_securechannel.StatusReportOnlySecureChannelProtocol.md#constructor)

### Methods

- [close](exports_securechannel.StatusReportOnlySecureChannelProtocol.md#close)
- [getId](exports_securechannel.StatusReportOnlySecureChannelProtocol.md#getid)
- [handleInitialStatusReport](exports_securechannel.StatusReportOnlySecureChannelProtocol.md#handleinitialstatusreport)
- [onNewExchange](exports_securechannel.StatusReportOnlySecureChannelProtocol.md#onnewexchange)

## Constructors

### constructor

• **new StatusReportOnlySecureChannelProtocol**()

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[close](../interfaces/exports_protocol.ProtocolHandler.md#close)

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:14

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[getId](../interfaces/exports_protocol.ProtocolHandler.md#getid)

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:11

___

### handleInitialStatusReport

▸ **handleInitialStatusReport**(`exchange`, `message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<`any`\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:13

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<`any`\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[onNewExchange](../interfaces/exports_protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:12
