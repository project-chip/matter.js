[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### References

- [Selector](exports_model._internal_.md#selector)

### Namespaces

- [Children](exports_model._internal_.Children.md)

### Interfaces

- [Children](../interfaces/exports_model._internal_.Children-1.md)

### Type Aliases

- [ClusterState](exports_model._internal_.md#clusterstate)
- [NameMapping](exports_model._internal_.md#namemapping)

### Functions

- [Children](exports_model._internal_.md#children)

## References

### Selector

Re-exports [Selector](exports_model._internal_.Children.md#selector)

## Type Aliases

### ClusterState

Ƭ **ClusterState**: `Object`

This type manages state that changes when we enter a cluster.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canonicalNames` | [`NameMapping`](exports_model._internal_.md#namemapping) |

#### Defined in

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:94

___

### NameMapping

Ƭ **NameMapping**: `Map`\<[`Model`](../classes/exports_model.Model-1.md), `string`\>

Map of Model -> name

#### Defined in

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:90

## Functions

### Children

▸ **Children**\<`M`, `E`\>(`initial`, `adopt`, `disown`): [`Children`](../interfaces/exports_model._internal_.Children-1.md)\<`M`, [`AnyElement`](exports_model.md#anyelement)\>

Invoked by [Model](../classes/exports_model.Model-1.md) to instantiate a new child array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`Model`](../classes/exports_model.Model-1.md) = [`Model`](../classes/exports_model.Model-1.md) |
| `E` | extends [`AnyElement`](exports_model.md#anyelement) = [`AnyElement`](exports_model.md#anyelement) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initial` | `Iterable`\<[`AnyElement`](exports_model.md#anyelement) \| `M`\> |
| `adopt` | (`child`: [`Model`](../classes/exports_model.Model-1.md)) => `void` |
| `disown` | (`child`: [`Model`](../classes/exports_model.Model-1.md)) => `boolean` |

#### Returns

[`Children`](../interfaces/exports_model._internal_.Children-1.md)\<`M`, [`AnyElement`](exports_model.md#anyelement)\>

#### Defined in

packages/matter.js/dist/esm/model/models/Children.d.ts:48
