[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / StatusResponseError

# Class: StatusResponseError

[protocol/interaction/export](../modules/protocol_interaction_export.md).StatusResponseError

Error base Class for all errors related to the status response messages.

## Hierarchy

- [`MatterError`](common_export.MatterError.md)

  ↳ **`StatusResponseError`**

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.StatusResponseError.md#constructor)

### Properties

- [code](protocol_interaction_export.StatusResponseError.md#code)

## Constructors

### constructor

• **new StatusResponseError**(`message`, `code`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md) |

#### Overrides

[MatterError](common_export.MatterError.md).[constructor](common_export.MatterError.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:61](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L61)

## Properties

### code

• `Readonly` **code**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:63](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L63)
