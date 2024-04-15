[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / StatusResponseError

# Class: StatusResponseError

[protocol/interaction/export](../modules/protocol_interaction_export.md).StatusResponseError

Error base Class for all errors related to the status response messages.

## Hierarchy

- [`MatterError`](common_export.MatterError.md)

  ↳ **`StatusResponseError`**

  ↳↳ [`ValidationError`](common_export.ValidationError.md)

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.StatusResponseError.md#constructor)

### Properties

- [clusterCode](protocol_interaction_export.StatusResponseError.md#clustercode)
- [code](protocol_interaction_export.StatusResponseError.md#code)

## Constructors

### constructor

• **new StatusResponseError**(`message`, `code`, `clusterCode?`): [`StatusResponseError`](protocol_interaction_export.StatusResponseError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md) |
| `clusterCode?` | `number` |

#### Returns

[`StatusResponseError`](protocol_interaction_export.StatusResponseError.md)

#### Overrides

[MatterError](common_export.MatterError.md).[constructor](common_export.MatterError.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/interaction/StatusCode.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/StatusCode.ts#L42)

## Properties

### clusterCode

• `Optional` `Readonly` **clusterCode**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/StatusCode.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/StatusCode.ts#L45)

___

### code

• `Readonly` **code**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/StatusCode.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/StatusCode.ts#L44)
