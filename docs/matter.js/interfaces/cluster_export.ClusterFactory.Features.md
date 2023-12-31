[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ClusterFactory](../modules/cluster_export.ClusterFactory.md) / Features

# Interface: Features\<F\>

[cluster/export](../modules/cluster_export.md).[ClusterFactory](../modules/cluster_export.ClusterFactory.md).Features

Cluster "features" describe the features supported by a cluster.

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) = {} |

## Hierarchy

- **`Features`**

  ↳ [`Cluster`](cluster_export.ClusterFactory.Cluster.md)

## Table of contents

### Properties

- [features](cluster_export.ClusterFactory.Features.md#features)
- [supportedFeatures](cluster_export.ClusterFactory.Features.md#supportedfeatures)
- [unknown](cluster_export.ClusterFactory.Features.md#unknown)

## Properties

### features

• `Readonly` **features**: `F`

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:93](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/ClusterFactory.ts#L93)

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:94](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/ClusterFactory.ts#L94)

___

### unknown

• `Optional` `Readonly` **unknown**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:95](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/ClusterFactory.ts#L95)
