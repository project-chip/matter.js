[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / ValidationError

# Class: ValidationError

[exports/common](../modules/exports_common.md).ValidationError

Error thrown when Data validation fails. Please check the provided data.
We encode this as StatusResponseError because in most places we want to return a StatusResponseError anyway.

## Hierarchy

- [`StatusResponseError`](exports_interaction.StatusResponseError.md)

  ↳ **`ValidationError`**

## Table of contents

### Constructors

- [constructor](exports_common.ValidationError.md#constructor)

### Properties

- [clusterCode](exports_common.ValidationError.md#clustercode)
- [code](exports_common.ValidationError.md#code)
- [fieldName](exports_common.ValidationError.md#fieldname)

## Constructors

### constructor

• **new ValidationError**(`message`, `fieldName?`): [`ValidationError`](exports_common.ValidationError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `fieldName?` | `string` |

#### Returns

[`ValidationError`](exports_common.ValidationError.md)

#### Overrides

[StatusResponseError](exports_interaction.StatusResponseError.md).[constructor](exports_interaction.StatusResponseError.md#constructor)

#### Defined in

packages/matter.js/dist/esm/common/ValidationError.d.ts:13

## Properties

### clusterCode

• `Optional` `Readonly` **clusterCode**: `number`

#### Inherited from

[StatusResponseError](exports_interaction.StatusResponseError.md).[clusterCode](exports_interaction.StatusResponseError.md#clustercode)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/StatusCode.d.ts:40

___

### code

• `Readonly` **code**: [`StatusCode`](../enums/exports_interaction.StatusCode.md)

#### Inherited from

[StatusResponseError](exports_interaction.StatusResponseError.md).[code](exports_interaction.StatusResponseError.md#code)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/StatusCode.d.ts:39

___

### fieldName

• `Optional` **fieldName**: `string`

#### Defined in

packages/matter.js/dist/esm/common/ValidationError.d.ts:12
