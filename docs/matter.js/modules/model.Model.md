[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / Model

# Namespace: Model

[model](model.md).Model

## Table of contents

### Classes

- [CrossReference](../classes/model.Model.CrossReference.md)

### Type Aliases

- [Constructor](model.Model.md#constructor)
- [LookupPredicate](model.Model.md#lookuppredicate)
- [PropertyValidation](model.Model.md#propertyvalidation)

## Type Aliases

### Constructor

Ƭ **Constructor**\<`T`\>: (...`args`: `any`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](../classes/model.Model-1.md) |

#### Type declaration

• (`...args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`T`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:394](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/model/models/Model.ts#L394)

___

### LookupPredicate

Ƭ **LookupPredicate**\<`T`\>: [`Constructor`](model.Model.md#constructor)\<`T`\> \| \{ `test`: (`model`: [`Model`](../classes/model.Model-1.md)) => `boolean` ; `type`: [`Constructor`](model.Model.md#constructor)\<`T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](../classes/model.Model-1.md) |

#### Defined in

[packages/matter.js/src/model/models/Model.ts:396](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/model/models/Model.ts#L396)

___

### PropertyValidation

Ƭ **PropertyValidation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `nullable?` | `boolean` |
| `required?` | `boolean` |
| `type` | `string` \| (...`args`: `any`[]) => `any` \| \{ `[key: string \| number]`: `any`;  } \| `undefined` |
| `values?` | \{ `[name: string]`: `any`;  } |

#### Defined in

[packages/matter.js/src/model/models/Model.ts:400](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/model/models/Model.ts#L400)
