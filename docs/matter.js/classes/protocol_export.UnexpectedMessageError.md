[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / UnexpectedMessageError

# Class: UnexpectedMessageError

[protocol/export](../modules/protocol_export.md).UnexpectedMessageError

Error base class for all errors thrown by this library.

## Hierarchy

- [`MatterError`](common_export.MatterError.md)

  ↳ **`UnexpectedMessageError`**

## Table of contents

### Constructors

- [constructor](protocol_export.UnexpectedMessageError.md#constructor)

### Properties

- [receivedMessage](protocol_export.UnexpectedMessageError.md#receivedmessage)

## Constructors

### constructor

• **new UnexpectedMessageError**(`message`, `receivedMessage`): [`UnexpectedMessageError`](protocol_export.UnexpectedMessageError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `receivedMessage` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

[`UnexpectedMessageError`](protocol_export.UnexpectedMessageError.md)

#### Overrides

[MatterError](common_export.MatterError.md).[constructor](common_export.MatterError.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:34](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/MessageExchange.ts#L34)

## Properties

### receivedMessage

• `Readonly` **receivedMessage**: [`Message`](../interfaces/codec_export.Message.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:36](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/MessageExchange.ts#L36)
