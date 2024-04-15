[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ClusterRegistry

# Namespace: ClusterRegistry

[cluster/export](cluster_export.md).ClusterRegistry

The formal definitions of clusters in Matter.js are generated
programmatically.

This singleton acts as a registry for generated [ClusterType](cluster_export.md#clustertype)s.

## Table of contents

### Functions

- [get](cluster_export.ClusterRegistry.md#get)
- [register](cluster_export.ClusterRegistry.md#register)

## Functions

### get

▸ **get**(`id`): [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) \| `undefined`

Obtain a cluster for a given ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) \| `undefined`

#### Defined in

[packages/matter.js/src/cluster/ClusterRegistry.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterRegistry.ts#L21)

___

### register

▸ **register**(`cluster`): `void`

Register a cluster for global access.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/ClusterRegistry.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterRegistry.ts#L28)
