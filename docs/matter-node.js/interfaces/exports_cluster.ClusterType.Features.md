[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ClusterType](../modules/exports_cluster.ClusterType.md) / Features

# Interface: Features\<F\>

[exports/cluster](../modules/exports_cluster.md).[ClusterType](../modules/exports_cluster.ClusterType.md).Features

Cluster "features" describe the features supported by a cluster.

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) = {} |

## Hierarchy

- **`Features`**

  ↳ [`ClusterType`](exports_cluster.ClusterType-1.md)

## Table of contents

### Properties

- [base](exports_cluster.ClusterType.Features.md#base)
- [extensions](exports_cluster.ClusterType.Features.md#extensions)
- [features](exports_cluster.ClusterType.Features.md#features)
- [supportedFeatures](exports_cluster.ClusterType.Features.md#supportedfeatures)
- [unknown](exports_cluster.ClusterType.Features.md#unknown)

## Properties

### base

• `Optional` `Readonly` **base**: [`ClusterType`](exports_cluster.ClusterType-1.md)

If you enable features, this property tracks the shape of the cluster with no features enabled.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:110

___

### extensions

• `Optional` `Readonly` **extensions**: readonly [`Extension`](exports_cluster.ClusterType.Extension.md)\<`F`\>[]

Metadata controlling how enabled features affect cluster structure.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:106

___

### features

• `Readonly` **features**: `F`

Features the cluster may support.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:98

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\>

Features the cluster does support.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:102

___

### unknown

• `Readonly` **unknown**: `boolean`

If true, this flag indicates that the cluster is not known to matter.js.  This implies a cluster ID for which
we do not have a cluster definition.

Some functionality is available for unknown clusters but an official Matter definition is generally required
for full functionality.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:118
