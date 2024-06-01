[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Switch](../README.md) / Cluster

# Interface: Cluster

Switch

This cluster exposes interactions with a switch device, for the purpose of using those interactions by other
devices.

Two types of switch devices are supported: latching switch (e.g. rocker switch) and momentary switch (e.g. push
button), distinguished with their feature flags.

Interactions with the switch device are exposed as attributes (for the latching switch) and as events (for both
types of switches).

An interested client may subscribe to these attributes/events and thus be informed of the interactions, and can
perform actions based on this, for example by sending commands to perform an action such as controlling a light
or a window shade.

Per the Matter specification you cannot use [SwitchCluster](../../../README.md#switchcluster-1) without enabling certain feature combinations.
You must use the SwitchCluster.with() factory method to obtain a working cluster.

## See

MatterSpecification.v11.Cluster § 1.11

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
