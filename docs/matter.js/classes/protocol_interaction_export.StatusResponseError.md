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

- [clusterCode](protocol_interaction_export.StatusResponseError.md#clustercode)
- [code](protocol_interaction_export.StatusResponseError.md#code)

## Constructors

### constructor

• **new StatusResponseError**(`message`, `code`, `clusterCode?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md) |
| `clusterCode?` | `number` |

#### Overrides

[MatterError](common_export.MatterError.md).[constructor](common_export.MatterError.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:79](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L79)

## Properties

### clusterCode

• `Optional` `Readonly` **clusterCode**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:82](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L82)

___

### code

• `Readonly` **code**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:81](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L81)
