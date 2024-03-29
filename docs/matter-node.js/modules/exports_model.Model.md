[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / Model

# Namespace: Model

[exports/model](exports_model.md).Model

## Table of contents

### Classes

- [CrossReference](../classes/exports_model.Model.CrossReference.md)

### Type Aliases

- [LookupPredicate](exports_model.Model.md#lookuppredicate)
- [PropertyValidation](exports_model.Model.md#propertyvalidation)
- [Type](exports_model.Model.md#type)

## Type Aliases

### LookupPredicate

Ƭ **LookupPredicate**\<`T`\>: [`Type`](exports_model.Model.md#type)\<`T`\> \| \{ `test`: (`model`: [`Model`](../classes/exports_model.Model-1.md)) => `boolean` ; `type`: [`Type`](exports_model.Model.md#type)\<`T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](../classes/exports_model.Model-1.md) |

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:165

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

packages/matter.js/dist/esm/model/models/Model.d.ts:169

___

### Type

Ƭ **Type**\<`T`\>: (...`args`: `any`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](../classes/exports_model.Model-1.md) = [`Model`](../classes/exports_model.Model-1.md) |

#### Type declaration

• (`...args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:164
