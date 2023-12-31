[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / ValidationError

# Class: ValidationError

[common/export](../modules/common_export.md).ValidationError

Error thrown when Data validation fails. Please check the provided data.
We encode this as StatusResponseError because in most places we want to return a StatusResponseError anyway.

## Hierarchy

- [`StatusResponseError`](protocol_interaction_export.StatusResponseError.md)

  ↳ **`ValidationError`**

## Table of contents

### Constructors

- [constructor](common_export.ValidationError.md#constructor)

### Properties

- [clusterCode](common_export.ValidationError.md#clustercode)
- [code](common_export.ValidationError.md#code)

## Constructors

### constructor

• **new ValidationError**(`message`): [`ValidationError`](common_export.ValidationError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`ValidationError`](common_export.ValidationError.md)

#### Overrides

[StatusResponseError](protocol_interaction_export.StatusResponseError.md).[constructor](protocol_interaction_export.StatusResponseError.md#constructor)

#### Defined in

[packages/matter.js/src/common/ValidationError.ts:14](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/common/ValidationError.ts#L14)

## Properties

### clusterCode

• `Optional` `Readonly` **clusterCode**: `number`

#### Inherited from

[StatusResponseError](protocol_interaction_export.StatusResponseError.md).[clusterCode](protocol_interaction_export.StatusResponseError.md#clustercode)

#### Defined in

[packages/matter.js/src/protocol/interaction/StatusCode.ts:45](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/StatusCode.ts#L45)

___

### code

• `Readonly` **code**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

#### Inherited from

[StatusResponseError](protocol_interaction_export.StatusResponseError.md).[code](protocol_interaction_export.StatusResponseError.md#code)

#### Defined in

[packages/matter.js/src/protocol/interaction/StatusCode.ts:44](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/interaction/StatusCode.ts#L44)
