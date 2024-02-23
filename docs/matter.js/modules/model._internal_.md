[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### References

- [ElementSelector](model._internal_.md#elementselector)

### Namespaces

- [ModelTraversal](model._internal_.ModelTraversal.md)

### Classes

- [ModelTraversal](../classes/model._internal_.ModelTraversal-1.md)

### Interfaces

- [RecordValidationResult](../interfaces/model._internal_.RecordValidationResult.md)
- [RecordValidator](../interfaces/model._internal_.RecordValidator.md)

### Type Aliases

- [ChildMapping](model._internal_.md#childmapping)
- [ClusterState](model._internal_.md#clusterstate)
- [NameMapping](model._internal_.md#namemapping)

## References

### ElementSelector

Re-exports [ElementSelector](model._internal_.ModelTraversal.md#elementselector)

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

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:198](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L198)

___

### ClusterState

Ƭ **ClusterState**: `Object`

This type manages state that changes when we enter a cluster.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canonicalNames` | [`NameMapping`](model._internal_.md#namemapping) |

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:314](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L314)

___

### NameMapping

Ƭ **NameMapping**: `Map`\<[`Model`](../classes/model.Model-1.md), `string`\>

Map of Model -> name

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:309](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L309)
