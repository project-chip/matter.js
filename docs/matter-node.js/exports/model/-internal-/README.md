[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / \<internal\>

# \<internal\>

## Index

### Namespaces

- [Children](namespaces/Children/README.md)

### Interfaces

- [Children](interfaces/Children.md)

## References

### Selector

Re-exports [Selector](namespaces/Children/README.md#selector)

## Type Aliases

### ClusterState

> **ClusterState**: `object`

This type manages state that changes when we enter a cluster.

#### Type declaration

##### canonicalNames

> **canonicalNames**: [`NameMapping`](README.md#namemapping)

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:94

***

### NameMapping

> **NameMapping**: `Map`\<[`Model`](../classes/Model.md), `string`\>

Map of Model -> name

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:90

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

packages/matter.js/dist/esm/model/models/Children.d.ts:48
