[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [NetworkCommissioning](../README.md) / Cluster

# Interface: Cluster

Network Commissioning

Network commissioning is part of the overall Node commissioning. The main goal of Network Commissioning Cluster
is to associate a Node with or manage a Node’s one or more network interfaces. These network interfaces can
include the following types.

  • Wi-Fi (IEEE 802.11-2020)

  • Ethernet (802.3)

  • Thread (802.15.4)

An instance of the Network Commissioning Cluster only applies to a single network interface instance present. An
interface, in this context, is a unique entity that can have an IPv6 address assigned to it and ingress and
egress IP packets.

Per the Matter specification you cannot use [NetworkCommissioningCluster](../../../README.md#networkcommissioningcluster-1) without enabling certain feature
combinations. You must use the NetworkCommissioningCluster.with() factory method to obtain a working cluster.

## See

MatterSpecification.v11.Core § 11.8

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
