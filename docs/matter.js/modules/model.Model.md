[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / Model

# Namespace: Model

[model](model.md).Model

## Table of contents

### Classes

- [CrossReference](../classes/model.Model.CrossReference.md)

### Type Aliases

- [LookupPredicate](model.Model.md#lookuppredicate)
- [PropertyValidation](model.Model.md#propertyvalidation)
- [Type](model.Model.md#type)

## Type Aliases

### LookupPredicate

Ƭ **LookupPredicate**\<`T`\>: [`Type`](model.Model.md#type)\<`T`\> \| \{ `test`: (`model`: [`Model`](../classes/model.Model-1.md)) => `boolean` ; `type`: [`Type`](model.Model.md#type)\<`T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](../classes/model.Model-1.md) |

#### Defined in

[packages/matter.js/src/model/models/Model.ts:452](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L452)

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

[packages/matter.js/src/model/models/Model.ts:454](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L454)

___

### Type

Ƭ **Type**\<`T`\>: (...`args`: `any`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](../classes/model.Model-1.md) = [`Model`](../classes/model.Model-1.md) |

#### Type declaration

• (`...args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`T`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:450](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L450)
