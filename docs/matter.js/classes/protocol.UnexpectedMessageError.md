[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol](../modules/protocol.md) / UnexpectedMessageError

# Class: UnexpectedMessageError

[protocol](../modules/protocol.md).UnexpectedMessageError

Error base class for all errors thrown by this library.

## Hierarchy

- [`MatterError`](common.MatterError.md)

  ↳ **`UnexpectedMessageError`**

## Table of contents

### Constructors

- [constructor](protocol.UnexpectedMessageError.md#constructor)

### Properties

- [receivedMessage](protocol.UnexpectedMessageError.md#receivedmessage)

## Constructors

### constructor

• **new UnexpectedMessageError**(`message`, `receivedMessage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `receivedMessage` | [`Message`](../interfaces/codec.Message.md) |

#### Overrides

[MatterError](common.MatterError.md).[constructor](common.MatterError.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L26)

## Properties

### receivedMessage

• `Readonly` **receivedMessage**: [`Message`](../interfaces/codec.Message.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L28)
