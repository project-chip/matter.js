[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [PumpConfigurationAndControl](../README.md) / Cluster

# Interface: Cluster

Pump Configuration and Control

The Pump Configuration and Control cluster provides an interface for the setup and control of pump devices, and
the automatic reporting of pump status information. Note that control of pump speed is not included – speed is
controlled by the On/Off and Level Control clusters.

Per the Matter specification you cannot use [PumpConfigurationAndControlCluster](../../../README.md#pumpconfigurationandcontrolcluster-1) without enabling certain
feature combinations. You must use the PumpConfigurationAndControlCluster.with() factory method to obtain a
working cluster.

## See

MatterSpecification.v11.Cluster § 4.2

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### id

> **id**: [`ClusterId`](../../../../../datatype/export/README.md#clusterid)

#### Inherited from

`Identity.id`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L100)

***

### name

> **name**: `string`

#### Inherited from

`Identity.name`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L101)

***

### with()

> **with**: \<`SelectionT`\>(...`selection`) => [`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L103)
