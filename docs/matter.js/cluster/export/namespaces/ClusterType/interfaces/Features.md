[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ClusterType](../README.md) / Features

# Interface: Features\<F\>

Cluster "features" describe the features supported by a cluster.

## Extended by

- [`ClusterType`](../../../interfaces/ClusterType.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `F` *extends* [`BitSchema`](../../../../../schema/export/README.md#bitschema) | `object` |

## Properties

### base?

> `optional` `readonly` **base**: [`ClusterType`](../../../interfaces/ClusterType.md)

If you enable features, this property tracks the shape of the cluster with no features enabled.

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:163](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L163)

***

### extensions?

> `optional` `readonly` **extensions**: readonly [`Extension`](Extension.md)\<`F`\>[]

Metadata controlling how enabled features affect cluster structure.

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L158)

***

### features

> `readonly` **features**: `F`

Features the cluster may support.

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L148)

***

### supportedFeatures

> `readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\>

Features the cluster does support.

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L153)

***

### unknown

> `readonly` **unknown**: `boolean`

If true, this flag indicates that the cluster is not known to matter.js.  This implies a cluster ID for which
we do not have a cluster definition.

Some functionality is available for unknown clusters but an official Matter definition is generally required
for full functionality.

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:172](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L172)
