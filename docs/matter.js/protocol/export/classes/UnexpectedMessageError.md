[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / UnexpectedMessageError

# Class: UnexpectedMessageError

Error base class for all errors thrown by this library.

## Extends

- [`MatterError`](../../../common/export/classes/MatterError.md)

## Constructors

### new UnexpectedMessageError()

> **new UnexpectedMessageError**(`message`, `receivedMessage`): [`UnexpectedMessageError`](UnexpectedMessageError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |
| `receivedMessage` | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

[`UnexpectedMessageError`](UnexpectedMessageError.md)

#### Overrides

[`MatterError`](../../../common/export/classes/MatterError.md).[`constructor`](../../../common/export/classes/MatterError.md#constructors)

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L33)

## Properties

### receivedMessage

> `readonly` **receivedMessage**: [`Message`](../../../codec/export/interfaces/Message.md)

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L35)
