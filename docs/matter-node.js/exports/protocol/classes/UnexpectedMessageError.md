[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / UnexpectedMessageError

# Class: UnexpectedMessageError

Error base class for all errors thrown by this library.

## Extends

- [`MatterError`](../../common/classes/MatterError.md)

## Constructors

### new UnexpectedMessageError()

> **new UnexpectedMessageError**(`message`, `receivedMessage`): [`UnexpectedMessageError`](UnexpectedMessageError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |
| `receivedMessage` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

[`UnexpectedMessageError`](UnexpectedMessageError.md)

#### Overrides

[`MatterError`](../../common/classes/MatterError.md).[`constructor`](../../common/classes/MatterError.md#constructors)

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:16

## Properties

### receivedMessage

> `readonly` **receivedMessage**: [`Message`](../../codec/interfaces/Message.md)

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:15
