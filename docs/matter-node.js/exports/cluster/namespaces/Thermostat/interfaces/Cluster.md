[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Thermostat](../README.md) / Cluster

# Interface: Cluster

Thermostat

This cluster provides an interface to the functionality of a thermostat.

Per the Matter specification you cannot use [ThermostatCluster](../../../README.md#thermostatcluster-1) without enabling certain feature
combinations. You must use the ThermostatCluster.with() factory method to obtain a working cluster.

## See

MatterSpecification.v11.Cluster § 4.3

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### id

> **id**: [`ClusterId`](../../../../datatype/README.md#clusterid)

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:55

***

### name

> **name**: `string`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:56

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

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:57
