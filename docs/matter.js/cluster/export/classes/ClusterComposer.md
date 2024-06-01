[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / ClusterComposer

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

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L20)

## Properties

### cluster

> **cluster**: `T`

#### Source

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L20)

## Methods

### accept()

> `private` **accept**(`definition`, `component`, `original`, `flags`): `void`

Injects a component into a cluster if the cluster supports the specified
features.  Uses matching element from "original" if present.  This
allows for component insertion without overwrite of other changes to the
named element.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`WritableDefinition`](../namespaces/ClusterComposer/README.md#writabledefinition) |
| `component` | `Partial`\<[`Elements`](../namespaces/ClusterType/interfaces/Elements.md)\> |
| `original` | `undefined` \| `Partial`\<[`ClusterType`](../interfaces/ClusterType.md)\> |
| `flags` | [`FeatureFlags`](../namespaces/ClusterComposer/README.md#featureflags) |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L96)

***

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

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L28)

***

### reject()

> `private` **reject**(`definition`, `flags`): `void`

Throws an error if a feature combination is illegal per the Matter
specification.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`ClusterType`](../interfaces/ClusterType.md) |
| `flags` | [`FeatureFlags`](../namespaces/ClusterComposer/README.md#featureflags) |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L141)

***

### validateFeatureSelection()

> `private` **validateFeatureSelection**(`features`): `void`

Validates a set of feature flags against the features supported by a
cluster.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `features` | [`FeatureSelection`](../namespaces/ClusterComposer/README.md#featureselectiont)\<`any`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L82)
