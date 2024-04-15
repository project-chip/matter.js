[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ClusterComposer

# Class: ClusterComposer\<T\>

[cluster/export](../modules/cluster_export.md).ClusterComposer

A "cluster composer" manages cluster configuration based on feature
selection.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

## Table of contents

### Constructors

- [constructor](cluster_export.ClusterComposer-1.md#constructor)

### Properties

- [cluster](cluster_export.ClusterComposer-1.md#cluster)

### Methods

- [accept](cluster_export.ClusterComposer-1.md#accept)
- [compose](cluster_export.ClusterComposer-1.md#compose)
- [reject](cluster_export.ClusterComposer-1.md#reject)
- [validateFeatureSelection](cluster_export.ClusterComposer-1.md#validatefeatureselection)

## Constructors

### constructor

• **new ClusterComposer**\<`T`\>(`cluster`): [`ClusterComposer`](cluster_export.ClusterComposer-1.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | `T` |

#### Returns

[`ClusterComposer`](cluster_export.ClusterComposer-1.md)\<`T`\>

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L20)

## Properties

### cluster

• **cluster**: `T`

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L20)

## Methods

### accept

▸ **accept**(`definition`, `component`, `original`, `flags`): `void`

Injects a component into a cluster if the cluster supports the specified
features.  Uses matching element from "original" if present.  This
allows for component insertion without overwrite of other changes to the
named element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`WritableDefinition`](../modules/cluster_export.ClusterComposer.md#writabledefinition) |
| `component` | `Partial`\<[`Elements`](../interfaces/cluster_export.ClusterType.Elements.md)\> |
| `original` | `undefined` \| `Partial`\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md)\> |
| `flags` | [`FeatureFlags`](../modules/cluster_export.ClusterComposer.md#featureflags) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L96)

___

### compose

▸ **compose**\<`SelectionT`\>(`selection`): [`Of`](../modules/cluster_export.ClusterComposer.md#of)\<`T`, `SelectionT`\>

Build a cluster using selected feature flags.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selection` | `SelectionT` | the name(s) of optional features to support |

#### Returns

[`Of`](../modules/cluster_export.ClusterComposer.md#of)\<`T`, `SelectionT`\>

**`Throws`**

if the feature combination is disallowed by the Matter specification

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L28)

___

### reject

▸ **reject**(`definition`, `flags`): `void`

Throws an error if a feature combination is illegal per the Matter
specification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `flags` | [`FeatureFlags`](../modules/cluster_export.ClusterComposer.md#featureflags) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L141)

___

### validateFeatureSelection

▸ **validateFeatureSelection**(`features`): `void`

Validates a set of feature flags against the features supported by a
cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `features` | [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<`any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/mutation/ClusterComposer.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ClusterComposer.ts#L82)
