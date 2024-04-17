[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### References

- [Selector](model._internal_.md#selector)

### Namespaces

- [Children](model._internal_.Children.md)

### Classes

- [ModelTraversal](../classes/model._internal_.ModelTraversal.md)

### Interfaces

- [Children](../interfaces/model._internal_.Children-1.md)

### Type Aliases

- [ChildMapping](model._internal_.md#childmapping)
- [ClusterState](model._internal_.md#clusterstate)
- [NameMapping](model._internal_.md#namemapping)

### Functions

- [Children](model._internal_.md#children)

## References

### Selector

Re-exports [Selector](model._internal_.Children.md#selector)

## Type Aliases

### ChildMapping

Ƭ **ChildMapping**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `idToSlot` | \{ `[id: string]`: `number`;  } |
| `nameToSlot` | \{ `[name: string]`: `number`;  } |
| `slots` | [`VariantMap`](model.md#variantmap)[] |

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L193)

___

### ClusterState

Ƭ **ClusterState**: `Object`

This type manages state that changes when we enter a cluster.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canonicalNames` | [`NameMapping`](model._internal_.md#namemapping) |

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:313](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L313)

___

### NameMapping

Ƭ **NameMapping**: `Map`\<[`Model`](../classes/model.Model-1.md), `string`\>

Map of Model -> name

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:308](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L308)

## Functions

### Children

▸ **Children**\<`M`, `E`\>(`initial`, `adopt`, `disown`): [`Children`](../interfaces/model._internal_.Children-1.md)\<`M`, [`AnyElement`](model.md#anyelement)\>

Invoked by [Model](../classes/model.Model-1.md) to instantiate a new child array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`Model`](../classes/model.Model-1.md) = [`Model`](../classes/model.Model-1.md) |
| `E` | extends [`AnyElement`](model.md#anyelement) = [`AnyElement`](model.md#anyelement) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initial` | `Iterable`\<[`AnyElement`](model.md#anyelement) \| `M`\> |
| `adopt` | (`child`: [`Model`](../classes/model.Model-1.md)) => `void` |
| `disown` | (`child`: [`Model`](../classes/model.Model-1.md)) => `boolean` |

#### Returns

[`Children`](../interfaces/model._internal_.Children-1.md)\<`M`, [`AnyElement`](model.md#anyelement)\>

#### Defined in

[packages/matter.js/src/model/models/Children.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Children.ts#L59)
