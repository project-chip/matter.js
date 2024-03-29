[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ClusterComposer

# Class: ClusterComposer\<T\>

[exports/cluster](../modules/exports_cluster.md).ClusterComposer

A "cluster composer" manages cluster configuration based on feature
selection.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |

## Table of contents

### Constructors

- [constructor](exports_cluster.ClusterComposer-1.md#constructor)

### Properties

- [accept](exports_cluster.ClusterComposer-1.md#accept)
- [cluster](exports_cluster.ClusterComposer-1.md#cluster)
- [reject](exports_cluster.ClusterComposer-1.md#reject)
- [validateFeatureSelection](exports_cluster.ClusterComposer-1.md#validatefeatureselection)

### Methods

- [compose](exports_cluster.ClusterComposer-1.md#compose)

## Constructors

### constructor

• **new ClusterComposer**\<`T`\>(`cluster`): [`ClusterComposer`](exports_cluster.ClusterComposer-1.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | `T` |

#### Returns

[`ClusterComposer`](exports_cluster.ClusterComposer-1.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:16

## Properties

### accept

• `Private` **accept**: `any`

Injects a component into a cluster if the cluster supports the specified
features.  Uses matching element from "original" if present.  This
allows for component insertion without overwrite of other changes to the
named element.

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:35

___

### cluster

• **cluster**: `T`

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:15

___

### reject

• `Private` **reject**: `any`

Throws an error if a feature combination is illegal per the Matter
specification.

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:40

___

### validateFeatureSelection

• `Private` **validateFeatureSelection**: `any`

Validates a set of feature flags against the features supported by a
cluster.

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:28

## Methods

### compose

▸ **compose**\<`SelectionT`\>(`selection`): [`Of`](../modules/exports_cluster.ClusterComposer.md#of)\<`T`, `SelectionT`\>

Build a cluster using selected feature flags.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selection` | `SelectionT` | the name(s) of optional features to support |

#### Returns

[`Of`](../modules/exports_cluster.ClusterComposer.md#of)\<`T`, `SelectionT`\>

**`Throws`**

if the feature combination is disallowed by the Matter specification

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:23
