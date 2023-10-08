[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ClusterFactory](../modules/exports_cluster.ClusterFactory.md) / Features

# Interface: Features<F\>

[exports/cluster](../modules/exports_cluster.md).[ClusterFactory](../modules/exports_cluster.ClusterFactory.md).Features

Cluster "features" describe the features supported by a cluster.

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) = {} |

## Hierarchy

- **`Features`**

  ↳ [`Cluster`](exports_cluster.ClusterFactory.Cluster.md)

## Table of contents

### Properties

- [features](exports_cluster.ClusterFactory.Features.md#features)
- [supportedFeatures](exports_cluster.ClusterFactory.Features.md#supportedfeatures)
- [unknown](exports_cluster.ClusterFactory.Features.md#unknown)

## Properties

### features

• `Readonly` **features**: `F`

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:77

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\>

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:78

___

### unknown

• `Optional` `Readonly` **unknown**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:79
