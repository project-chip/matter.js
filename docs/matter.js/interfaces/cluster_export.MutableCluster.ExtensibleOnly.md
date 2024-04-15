[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MutableCluster](../modules/cluster_export.MutableCluster.md) / ExtensibleOnly

# Interface: ExtensibleOnly\<T\>

[cluster/export](../modules/cluster_export.md).[MutableCluster](../modules/cluster_export.MutableCluster.md).ExtensibleOnly

ExtensibleOnly creates a factory that produces a [MutableCluster](../modules/cluster_export.md#mutablecluster) when the user selects features.

We define clusters this way if the Matter specification defines a cluster with a set of features, one of which is
required, but none of which is required if others are enabled.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Options`](../modules/cluster_export.ClusterType.md#options) |

## Table of contents

### Constructors

- [constructor](cluster_export.MutableCluster.ExtensibleOnly.md#constructor)

### Properties

- [id](cluster_export.MutableCluster.ExtensibleOnly.md#id)
- [name](cluster_export.MutableCluster.ExtensibleOnly.md#name)
- [with](cluster_export.MutableCluster.ExtensibleOnly.md#with)

## Constructors

### constructor

• **constructor**: `Object`

## Properties

### id

• **id**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L100)

___

### name

• **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L101)

___

### with

• **with**: \<SelectionT\>(...`selection`: `SelectionT`) => [`Of`](../modules/cluster_export.ClusterComposer.md#of)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>, `SelectionT`\>

#### Type declaration

▸ \<`SelectionT`\>(`...selection`): [`Of`](../modules/cluster_export.ClusterComposer.md#of)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

##### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

##### Returns

[`Of`](../modules/cluster_export.ClusterComposer.md#of)\<[`Of`](cluster_export.ClusterType.Of.md)\<`T`\>, `SelectionT`\>

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L103)
