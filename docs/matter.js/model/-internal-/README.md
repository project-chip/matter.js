[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / \<internal\>

# \<internal\>

## Index

### Namespaces

- [Children](namespaces/Children/README.md)

### Classes

- [ModelTraversal](classes/ModelTraversal.md)

### Interfaces

- [Children](interfaces/Children.md)

## References

### Selector

Re-exports [Selector](namespaces/Children/README.md#selector)

## Type Aliases

### ChildMapping

> **ChildMapping**: `object`

#### Type declaration

##### idToSlot

> **idToSlot**: `object`

###### Index signature

 \[`id`: `string`\]: `number`

##### nameToSlot

> **nameToSlot**: `object`

###### Index signature

 \[`name`: `string`\]: `number`

##### slots

> **slots**: [`VariantMap`](../README.md#variantmap)[]

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:193](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L193)

***

### ClusterState

> **ClusterState**: `object`

This type manages state that changes when we enter a cluster.

#### Type declaration

##### canonicalNames

> **canonicalNames**: [`NameMapping`](README.md#namemapping)

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:313](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L313)

***

### NameMapping

> **NameMapping**: `Map`\<[`Model`](../classes/Model.md), `string`\>

Map of Model -> name

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:308](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L308)

## Functions

### Children()

> **Children**\<`M`, `E`\>(`initial`, `adopt`, `disown`): [`Children`](interfaces/Children.md)\<`M`, [`AnyElement`](../README.md#anyelement)\>

Invoked by [Model](../classes/Model.md) to instantiate a new child array.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `M` *extends* [`Model`](../classes/Model.md) | [`Model`](../classes/Model.md) |
| `E` *extends* [`AnyElement`](../README.md#anyelement) | [`AnyElement`](../README.md#anyelement) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `initial` | `Iterable`\<[`AnyElement`](../README.md#anyelement) \| `M`\> |
| `adopt` | (`child`) => `void` |
| `disown` | (`child`) => `boolean` |

#### Returns

[`Children`](interfaces/Children.md)\<`M`, [`AnyElement`](../README.md#anyelement)\>

#### Source

[packages/matter.js/src/model/models/Children.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Children.ts#L59)
