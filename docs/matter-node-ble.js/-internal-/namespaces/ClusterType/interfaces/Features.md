[**@project-chip/matter-node-ble.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../../../globals.md) / [\<internal\>](../../../README.md) / [ClusterType](../README.md) / Features

# Interface: Features\<F\>

Cluster "features" describe the features supported by a cluster.

## Extended by

- [`ClusterType`](../../../interfaces/ClusterType.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `F` *extends* [`BitSchema`](../../../README.md#bitschema) | `object` |

## Properties

### base?

> `optional` `readonly` **base**: [`ClusterType`](../../../interfaces/ClusterType.md)

If you enable features, this property tracks the shape of the cluster with no features enabled.

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:110

***

### extensions?

> `optional` `readonly` **extensions**: readonly [`Extension`](Extension.md)\<`F`\>[]

Metadata controlling how enabled features affect cluster structure.

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:106

***

### features

> `readonly` **features**: `F`

Features the cluster may support.

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:98

***

### supportedFeatures

> `readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../../../README.md#typefrompartialbitschemat)\<`F`\>

Features the cluster does support.

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:102

***

### unknown

> `readonly` **unknown**: `boolean`

If true, this flag indicates that the cluster is not known to matter.js.  This implies a cluster ID for which
we do not have a cluster definition.

Some functionality is available for unknown clusters but an official Matter definition is generally required
for full functionality.

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:118
