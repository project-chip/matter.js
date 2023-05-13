[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction](../modules/protocol_interaction.md) / StatusResponseError

# Class: StatusResponseError

[protocol/interaction](../modules/protocol_interaction.md).StatusResponseError

Error base Class for all errors related to the status response messages.

## Hierarchy

- [`MatterError`](common.MatterError.md)

  ↳ **`StatusResponseError`**

## Table of contents

### Constructors

- [constructor](protocol_interaction.StatusResponseError.md#constructor)

### Properties

- [code](protocol_interaction.StatusResponseError.md#code)

## Constructors

### constructor

• **new StatusResponseError**(`message`, `code`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`StatusCode`](../enums/protocol_interaction.StatusCode.md) |

#### Overrides

[MatterError](common.MatterError.md).[constructor](common.MatterError.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L47)

## Properties

### code

• `Readonly` **code**: [`StatusCode`](../enums/protocol_interaction.StatusCode.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L49)
