[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Interfaces

- [RecordValidationResult](../interfaces/exports_model._internal_.RecordValidationResult.md)
- [RecordValidator](../interfaces/exports_model._internal_.RecordValidator.md)

### Type Aliases

- [ClusterState](exports_model._internal_.md#clusterstate)
- [ElementSelector](exports_model._internal_.md#elementselector)
- [NameMapping](exports_model._internal_.md#namemapping)

## Type Aliases

### ClusterState

Ƭ **ClusterState**: `Object`

This type manages state that changes when we enter a cluster.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canonicalNames` | [`NameMapping`](exports_model._internal_.md#namemapping) |

#### Defined in

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:99

___

### ElementSelector

Ƭ **ElementSelector**: `string` \| `number` \| (`model`: [`Model`](../classes/exports_model.Model-1.md)) => `boolean`

#### Defined in

packages/matter.js/dist/esm/model/logic/ModelTraversal.d.ts:129

___

### NameMapping

Ƭ **NameMapping**: `Map`\<[`Model`](../classes/exports_model.Model-1.md), `string`\>

Map of Model -> name

#### Defined in

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:95
