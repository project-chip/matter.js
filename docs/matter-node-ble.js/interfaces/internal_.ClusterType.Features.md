[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / [ClusterType](../modules/internal_.ClusterType.md) / Features

# Interface: Features\<F\>

[\<internal\>](../modules/internal_.md).[ClusterType](../modules/internal_.ClusterType.md).Features

Cluster "features" describe the features supported by a cluster.

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) = {} |

## Hierarchy

- **`Features`**

  ↳ [`ClusterType`](internal_.ClusterType-1.md)

## Table of contents

### Properties

- [base](internal_.ClusterType.Features.md#base)
- [extensions](internal_.ClusterType.Features.md#extensions)
- [features](internal_.ClusterType.Features.md#features)
- [supportedFeatures](internal_.ClusterType.Features.md#supportedfeatures)
- [unknown](internal_.ClusterType.Features.md#unknown)

## Properties

### base

• `Optional` `Readonly` **base**: [`ClusterType`](internal_.ClusterType-1.md)

If you enable features, this property tracks the shape of the cluster with no features enabled.

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:110

___

### extensions

• `Optional` `Readonly` **extensions**: readonly [`Extension`](internal_.ClusterType.Extension.md)\<`F`\>[]

Metadata controlling how enabled features affect cluster structure.

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:106

___

### features

• `Readonly` **features**: `F`

Features the cluster may support.

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:98

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)\<`F`\>

Features the cluster does support.

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:102

___

### unknown

• `Readonly` **unknown**: `boolean`

If true, this flag indicates that the cluster is not known to matter.js.  This implies a cluster ID for which
we do not have a cluster definition.

Some functionality is available for unknown clusters but an official Matter definition is generally required
for full functionality.

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:118
