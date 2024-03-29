[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ClusterRegistry

# Namespace: ClusterRegistry

[exports/cluster](exports_cluster.md).ClusterRegistry

The formal definitions of clusters in Matter.js are generated
programmatically.

This singleton acts as a registry for generated [ClusterType](exports_cluster.md#clustertype)s.

## Table of contents

### Functions

- [get](exports_cluster.ClusterRegistry.md#get)
- [register](exports_cluster.ClusterRegistry.md#register)

## Functions

### get

▸ **get**(`id`): [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) \| `undefined`

Obtain a cluster for a given ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) \| `undefined`

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterRegistry.d.ts:17

___

### register

▸ **register**(`cluster`): `void`

Register a cluster for global access.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterRegistry.d.ts:21
