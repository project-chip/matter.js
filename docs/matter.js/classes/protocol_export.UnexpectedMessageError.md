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

• **new UnexpectedMessageError**(`message`, `receivedMessage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `receivedMessage` | [`Message`](../interfaces/codec_export.Message.md) |

#### Overrides

[MatterError](common_export.MatterError.md).[constructor](common_export.MatterError.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L26)

## Properties

### receivedMessage

• `Readonly` **receivedMessage**: [`Message`](../interfaces/codec_export.Message.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L28)
