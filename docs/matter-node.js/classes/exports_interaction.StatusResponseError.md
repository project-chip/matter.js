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

- [clusterCode](exports_interaction.StatusResponseError.md#clustercode)
- [code](exports_interaction.StatusResponseError.md#code)

## Constructors

### constructor

• **new StatusResponseError**(`message`, `code`, `clusterCode?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`StatusCode`](../enums/exports_interaction.StatusCode.md) |
| `clusterCode?` | `number` |

#### Overrides

[MatterError](exports_common.MatterError.md).[constructor](exports_common.MatterError.md#constructor)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:41

## Properties

### clusterCode

• `Optional` `Readonly` **clusterCode**: `number`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:40

___

### code

• `Readonly` **code**: [`StatusCode`](../enums/exports_interaction.StatusCode.md)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:39
