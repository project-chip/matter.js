[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [MutableCluster](../README.md) / ExtensibleOnly

# Interface: ExtensibleOnly\<T\>

ExtensibleOnly creates a factory that produces a [MutableCluster](../../../README.md#mutablecluster) when the user selects features.

We define clusters this way if the Matter specification defines a cluster with a set of features, one of which is
required, but none of which is required if others are enabled.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Options`](../../ClusterType/README.md#optionsf) |

## Constructors

## Properties

### id

> **id**: [`ClusterId`](../../../../../datatype/export/README.md#clusterid)

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L100)

***

### name

> **name**: `string`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L101)

***

### with()

> **with**: \<`SelectionT`\>(...`selection`) => [`Of`](../../ClusterComposer/README.md#ofclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`T`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`T`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../../ClusterComposer/README.md#ofclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`T`\>, `SelectionT`\>

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L103)
