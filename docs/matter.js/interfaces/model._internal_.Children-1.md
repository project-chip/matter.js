[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / [\<internal\>](../modules/model._internal_.md) / Children

# Interface: Children\<M, E\>

[model](../modules/model.md).[\<internal\>](../modules/model._internal_.md).Children

Children of a model.  This is a [Model](../classes/model.Model-1.md) array with some specialization for model-specific operations.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `M` | extends [`Model`](../classes/model.Model-1.md) = [`Model`](../classes/model.Model-1.md) | Model types accepted as children |
| `E` | extends [`AnyElement`](../modules/model.md#anyelement) = [`AnyElement`](../modules/model.md#anyelement) | Element types accepted as children |

## Hierarchy

- `Array`\<`M`\>

  ↳ **`Children`**

## Table of contents

### Constructors

- [constructor](model._internal_.Children-1.md#constructor)

### Methods

- [get](model._internal_.Children-1.md#get)
- [push](model._internal_.Children-1.md#push)
- [select](model._internal_.Children-1.md#select)
- [splice](model._internal_.Children-1.md#splice)
- [updateId](model._internal_.Children-1.md#updateid)
- [updateName](model._internal_.Children-1.md#updatename)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

Array\<M\>.constructor

## Methods

### get

▸ **get**\<`T`\>(`type`, `idOrName`): `undefined` \| `T`

Access a model of specific type by ID or name.  This is an optimized operation that uses internal index lookup.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](../classes/model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../modules/model.Model.md#type)\<`T`\> |
| `idOrName` | `string` \| `number` |

#### Returns

`undefined` \| `T`

#### Defined in

[packages/matter.js/src/model/models/Children.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Children.ts#L35)

___

### push

▸ **push**(`...children`): `number`

Add a child.

Operates like a standard array push but we adjust the type to allow insertion of elements as well as models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...children` | (`M` \| `E`)[] |

#### Returns

`number`

#### Overrides

Array.push

#### Defined in

[packages/matter.js/src/model/models/Children.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Children.ts#L23)

___

### select

▸ **select**(`selector`, `allowedTags`, `except?`): `undefined` \| [`Model`](../classes/model.Model-1.md)

Access a model using a [Children.Selector](../modules/model._internal_.Children.md#selector).  This is an optimized primitive used by various tree traversal
algorithms.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Selector`](../modules/model._internal_.Children.md#selector) |
| `allowedTags` | [`ElementTag`](../enums/model.ElementTag.md)[] |
| `except?` | `Set`\<[`Model`](../classes/model.Model-1.md)\> |

#### Returns

`undefined` \| [`Model`](../classes/model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/models/Children.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Children.ts#L41)

___

### splice

▸ **splice**(`index`, `deleteCount?`, `...toAdd`): `M`[]

Array splice.

Allows splicing in elements or models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `deleteCount?` | `number` |
| `...toAdd` | (`M` \| `E`)[] |

#### Returns

`M`[]

#### Overrides

Array.splice

#### Defined in

[packages/matter.js/src/model/models/Children.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Children.ts#L30)

___

### updateId

▸ **updateId**(`child`, `oldId`): `void`

Models invoke this when their ID changes so we can update internal bookkeeping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Model`](../classes/model.Model-1.md) |
| `oldId` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/models/Children.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Children.ts#L46)

___

### updateName

▸ **updateName**(`child`, `oldName`): `void`

Models invoke this when their name changes so we can update internal bookkeeping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Model`](../classes/model.Model-1.md) |
| `oldName` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/models/Children.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Children.ts#L51)
