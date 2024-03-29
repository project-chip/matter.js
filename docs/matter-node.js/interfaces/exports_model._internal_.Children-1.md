[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / [\<internal\>](../modules/exports_model._internal_.md) / Children

# Interface: Children\<M, E\>

[exports/model](../modules/exports_model.md).[\<internal\>](../modules/exports_model._internal_.md).Children

Children of a model.  This is a [Model](../classes/exports_model.Model-1.md) array with some specialization for model-specific operations.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `M` | extends [`Model`](../classes/exports_model.Model-1.md) = [`Model`](../classes/exports_model.Model-1.md) | Model types accepted as children |
| `E` | extends [`AnyElement`](../modules/exports_model.md#anyelement) = [`AnyElement`](../modules/exports_model.md#anyelement) | Element types accepted as children |

## Hierarchy

- `Array`\<`M`\>

  ↳ **`Children`**

## Table of contents

### Constructors

- [constructor](exports_model._internal_.Children-1.md#constructor)

### Methods

- [get](exports_model._internal_.Children-1.md#get)
- [push](exports_model._internal_.Children-1.md#push)
- [select](exports_model._internal_.Children-1.md#select)
- [splice](exports_model._internal_.Children-1.md#splice)
- [updateId](exports_model._internal_.Children-1.md#updateid)
- [updateName](exports_model._internal_.Children-1.md#updatename)

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
| `T` | extends [`Model`](../classes/exports_model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../modules/exports_model.Model.md#type)\<`T`\> |
| `idOrName` | `string` \| `number` |

#### Returns

`undefined` \| `T`

#### Defined in

packages/matter.js/dist/esm/model/models/Children.d.ts:30

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

packages/matter.js/dist/esm/model/models/Children.d.ts:20

___

### select

▸ **select**(`selector`, `allowedTags`, `except?`): `undefined` \| [`Model`](../classes/exports_model.Model-1.md)

Access a model using a [Children.Selector](../modules/exports_model._internal_.Children.md#selector).  This is an optimized primitive used by various tree traversal
algorithms.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Selector`](../modules/exports_model._internal_.Children.md#selector) |
| `allowedTags` | [`ElementTag`](../enums/exports_model.ElementTag.md)[] |
| `except?` | `Set`\<[`Model`](../classes/exports_model.Model-1.md)\> |

#### Returns

`undefined` \| [`Model`](../classes/exports_model.Model-1.md)

#### Defined in

packages/matter.js/dist/esm/model/models/Children.d.ts:35

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

packages/matter.js/dist/esm/model/models/Children.d.ts:26

___

### updateId

▸ **updateId**(`child`, `oldId`): `void`

Models invoke this when their ID changes so we can update internal bookkeeping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Model`](../classes/exports_model.Model-1.md) |
| `oldId` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/model/models/Children.d.ts:39

___

### updateName

▸ **updateName**(`child`, `oldName`): `void`

Models invoke this when their name changes so we can update internal bookkeeping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Model`](../classes/exports_model.Model-1.md) |
| `oldName` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/model/models/Children.d.ts:43
