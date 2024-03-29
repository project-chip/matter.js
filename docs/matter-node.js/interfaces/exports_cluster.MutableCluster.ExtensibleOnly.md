[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [MutableCluster](../modules/exports_cluster.MutableCluster.md) / ExtensibleOnly

# Interface: ExtensibleOnly\<T\>

[exports/cluster](../modules/exports_cluster.md).[MutableCluster](../modules/exports_cluster.MutableCluster.md).ExtensibleOnly

ExtensibleOnly creates a factory that produces a [MutableCluster](../modules/exports_cluster.md#mutablecluster) when the user selects features.

We define clusters this way if the Matter specification defines a cluster with a set of features, one of which is
required, but none of which is required if others are enabled.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Options`](../modules/exports_cluster.ClusterType.md#options) |

## Table of contents

### Constructors

- [constructor](exports_cluster.MutableCluster.ExtensibleOnly.md#constructor)

### Properties

- [id](exports_cluster.MutableCluster.ExtensibleOnly.md#id)
- [name](exports_cluster.MutableCluster.ExtensibleOnly.md#name)
- [with](exports_cluster.MutableCluster.ExtensibleOnly.md#with)

## Constructors

### constructor

• **constructor**: `Object`

## Properties

### id

• **id**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:55

___

### name

• **name**: `string`

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:56

___

### with

• **with**: \<SelectionT\>(...`selection`: `SelectionT`) => [`Of`](../modules/exports_cluster.ClusterComposer.md#of)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>, `SelectionT`\>

#### Type declaration

▸ \<`SelectionT`\>(`...selection`): [`Of`](../modules/exports_cluster.ClusterComposer.md#of)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

##### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

##### Returns

[`Of`](../modules/exports_cluster.ClusterComposer.md#of)\<[`Of`](exports_cluster.ClusterType.Of.md)\<`T`\>, `SelectionT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:57
