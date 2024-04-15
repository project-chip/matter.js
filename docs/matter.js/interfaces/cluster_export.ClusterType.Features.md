[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ClusterType](../modules/cluster_export.ClusterType.md) / Features

# Interface: Features\<F\>

[cluster/export](../modules/cluster_export.md).[ClusterType](../modules/cluster_export.ClusterType.md).Features

Cluster "features" describe the features supported by a cluster.

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) = {} |

## Hierarchy

- **`Features`**

  ↳ [`ClusterType`](cluster_export.ClusterType-1.md)

## Table of contents

### Properties

- [base](cluster_export.ClusterType.Features.md#base)
- [extensions](cluster_export.ClusterType.Features.md#extensions)
- [features](cluster_export.ClusterType.Features.md#features)
- [supportedFeatures](cluster_export.ClusterType.Features.md#supportedfeatures)
- [unknown](cluster_export.ClusterType.Features.md#unknown)

## Properties

### base

• `Optional` `Readonly` **base**: [`ClusterType`](cluster_export.ClusterType-1.md)

If you enable features, this property tracks the shape of the cluster with no features enabled.

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L163)

___

### extensions

• `Optional` `Readonly` **extensions**: readonly [`Extension`](cluster_export.ClusterType.Extension.md)\<`F`\>[]

Metadata controlling how enabled features affect cluster structure.

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L158)

___

### features

• `Readonly` **features**: `F`

Features the cluster may support.

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L148)

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\>

Features the cluster does support.

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L153)

___

### unknown

• `Readonly` **unknown**: `boolean`

If true, this flag indicates that the cluster is not known to matter.js.  This implies a cluster ID for which
we do not have a cluster definition.

Some functionality is available for unknown clusters but an official Matter definition is generally required
for full functionality.

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L172)
