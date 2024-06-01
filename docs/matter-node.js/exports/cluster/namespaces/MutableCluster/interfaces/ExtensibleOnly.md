[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [MutableCluster](../README.md) / ExtensibleOnly

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

> **id**: [`ClusterId`](../../../../datatype/README.md#clusterid)

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:55

***

### name

> **name**: `string`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:56

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

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:57
