[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / UnexpectedMessageError

# Class: UnexpectedMessageError

[exports/protocol](../modules/exports_protocol.md).UnexpectedMessageError

Error base class for all errors thrown by this library.

## Hierarchy

- [`MatterError`](exports_common.MatterError.md)

  ↳ **`UnexpectedMessageError`**

## Table of contents

### Constructors

- [constructor](exports_protocol.UnexpectedMessageError.md#constructor)

### Properties

- [receivedMessage](exports_protocol.UnexpectedMessageError.md#receivedmessage)

## Constructors

### constructor

• **new UnexpectedMessageError**(`message`, `receivedMessage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `receivedMessage` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Overrides

[MatterError](exports_common.MatterError.md).[constructor](exports_common.MatterError.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:16

## Properties

### receivedMessage

• `Readonly` **receivedMessage**: [`Message`](../interfaces/exports_codec.Message.md)

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:15
