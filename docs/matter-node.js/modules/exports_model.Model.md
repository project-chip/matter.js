[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / Model

# Namespace: Model

[exports/model](exports_model.md).Model

## Table of contents

### Classes

- [CrossReference](../classes/exports_model.Model.CrossReference.md)

### Type Aliases

- [Constructor](exports_model.Model.md#constructor)
- [LookupPredicate](exports_model.Model.md#lookuppredicate)
- [PropertyValidation](exports_model.Model.md#propertyvalidation)

## Type Aliases

### Constructor

Ƭ **Constructor**<`T`\>: (...`args`: `any`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](../classes/exports_model.Model-1.md) |

#### Type declaration

• (`...args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:166

___

### LookupPredicate

Ƭ **LookupPredicate**<`T`\>: [`Constructor`](exports_model.Model.md#constructor)<`T`\> \| { `test`: (`model`: [`Model`](../classes/exports_model.Model-1.md)) => `boolean` ; `type`: [`Constructor`](exports_model.Model.md#constructor)<`T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](../classes/exports_model.Model-1.md) |

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:167

___

### PropertyValidation

Ƭ **PropertyValidation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `nullable?` | `boolean` |
| `required?` | `boolean` |
| `type` | `string` \| (...`args`: `any`[]) => `any` \| { `[key: string \| number]`: `any`;  } \| `undefined` |
| `values?` | { `[name: string]`: `any`;  } |

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:171
