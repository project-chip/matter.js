[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / [\<internal\>](../README.md) / Children

# Interface: Children\<M, E\>

Children of a model.  This is a [Model](../../classes/Model.md) array with some specialization for model-specific operations.

## Extends

- `Array`\<`M`\>

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `M` *extends* [`Model`](../../classes/Model.md) | [`Model`](../../classes/Model.md) | Model types accepted as children |
| `E` *extends* [`AnyElement`](../../README.md#anyelement) | [`AnyElement`](../../README.md#anyelement) | Element types accepted as children |

## Constructors

## Methods

### get()

> **get**\<`T`\>(`type`, `idOrName`): `undefined` \| `T`

Access a model of specific type by ID or name.  This is an optimized operation that uses internal index lookup.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Model`](../../classes/Model.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../namespaces/Model/README.md#typet)\<`T`\> |
| `idOrName` | `string` \| `number` |

#### Returns

`undefined` \| `T`

#### Source

packages/matter.js/dist/esm/model/models/Children.d.ts:30

***

### push()

> **push**(...`children`): `number`

Add a child.

Operates like a standard array push but we adjust the type to allow insertion of elements as well as models.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`children` | (`M` \| `E`)[] |

#### Returns

`number`

#### Overrides

`Array.push`

#### Source

packages/matter.js/dist/esm/model/models/Children.d.ts:20

***

### select()

> **select**(`selector`, `allowedTags`, `except`?): `undefined` \| [`Model`](../../classes/Model.md)

Access a model using a [Children.Selector](../namespaces/Children/README.md#selector).  This is an optimized primitive used by various tree traversal
algorithms.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `selector` | [`Selector`](../namespaces/Children/README.md#selector) |
| `allowedTags` | [`ElementTag`](../../enumerations/ElementTag.md)[] |
| `except`? | `Set`\<[`Model`](../../classes/Model.md)\> |

#### Returns

`undefined` \| [`Model`](../../classes/Model.md)

#### Source

packages/matter.js/dist/esm/model/models/Children.d.ts:35

***

### splice()

> **splice**(`index`, `deleteCount`?, ...`toAdd`?): `M`[]

Array splice.

Allows splicing in elements or models.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `index` | `number` |
| `deleteCount`? | `number` |
| ...`toAdd`? | (`M` \| `E`)[] |

#### Returns

`M`[]

#### Overrides

`Array.splice`

#### Source

packages/matter.js/dist/esm/model/models/Children.d.ts:26

***

### updateId()

> **updateId**(`child`, `oldId`): `void`

Models invoke this when their ID changes so we can update internal bookkeeping.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `child` | [`Model`](../../classes/Model.md) |
| `oldId` | `undefined` \| `number` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/model/models/Children.d.ts:39

***

### updateName()

> **updateName**(`child`, `oldName`): `void`

Models invoke this when their name changes so we can update internal bookkeeping.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `child` | [`Model`](../../classes/Model.md) |
| `oldName` | `string` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/model/models/Children.d.ts:43
