[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / ClusterComposer

# Class: ClusterComposer\<T\>

A "cluster composer" manages cluster configuration based on feature
selection.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ClusterType`](../interfaces/ClusterType.md) |

## Constructors

### new ClusterComposer()

> **new ClusterComposer**\<`T`\>(`cluster`): [`ClusterComposer`](ClusterComposer.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | `T` |

#### Returns

[`ClusterComposer`](ClusterComposer.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:16

## Properties

### accept

> `private` **accept**: `any`

Injects a component into a cluster if the cluster supports the specified
features.  Uses matching element from "original" if present.  This
allows for component insertion without overwrite of other changes to the
named element.

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:35

***

### cluster

> **cluster**: `T`

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:15

***

### reject

> `private` **reject**: `any`

Throws an error if a feature combination is illegal per the Matter
specification.

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:40

***

### validateFeatureSelection

> `private` **validateFeatureSelection**: `any`

Validates a set of feature flags against the features supported by a
cluster.

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:28

## Methods

### compose()

> **compose**\<`SelectionT`\>(`selection`): [`Of`](../namespaces/ClusterComposer/README.md#ofclustertfeaturest)\<`T`, `SelectionT`\>

Build a cluster using selected feature flags.

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../namespaces/ClusterComposer/README.md#featureselectiont)\<`T`\> |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `selection` | `SelectionT` | the name(s) of optional features to support |

#### Returns

[`Of`](../namespaces/ClusterComposer/README.md#ofclustertfeaturest)\<`T`, `SelectionT`\>

#### Throws

if the feature combination is disallowed by the Matter specification

#### Source

packages/matter.js/dist/esm/cluster/mutation/ClusterComposer.d.ts:23
