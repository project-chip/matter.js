[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / [\<internal\>](../README.md) / Children

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

[packages/matter.js/src/model/models/Children.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Children.ts#L35)

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

[packages/matter.js/src/model/models/Children.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Children.ts#L23)

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

[packages/matter.js/src/model/models/Children.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Children.ts#L41)

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

[packages/matter.js/src/model/models/Children.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Children.ts#L30)

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

[packages/matter.js/src/model/models/Children.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Children.ts#L46)

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

[packages/matter.js/src/model/models/Children.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Children.ts#L51)
