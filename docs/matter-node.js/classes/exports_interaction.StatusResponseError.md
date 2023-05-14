[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / StatusResponseError

# Class: StatusResponseError

[exports/interaction](../modules/exports_interaction.md).StatusResponseError

Error base Class for all errors related to the status response messages.

## Hierarchy

- [`MatterError`](exports_common.MatterError.md)

  ↳ **`StatusResponseError`**

## Table of contents

### Constructors

- [constructor](exports_interaction.StatusResponseError.md#constructor)

### Properties

- [code](exports_interaction.StatusResponseError.md#code)

## Constructors

### constructor

• **new StatusResponseError**(`message`, `code`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`StatusCode`](../enums/exports_interaction.StatusCode.md) |

#### Overrides

[MatterError](exports_common.MatterError.md).[constructor](exports_common.MatterError.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:39

## Properties

### code

• `Readonly` **code**: [`StatusCode`](../enums/exports_interaction.StatusCode.md)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:38
