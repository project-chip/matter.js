[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ClusterRegistry

# Namespace: ClusterRegistry

The formal definitions of clusters in Matter.js are generated
programmatically.

This singleton acts as a registry for generated [ClusterType](../../README.md#clustertype)s.

## Functions

### get()

> **get**(`id`): [`ClusterType`](../../interfaces/ClusterType.md) \| `undefined`

Obtain a cluster for a given ID.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`ClusterType`](../../interfaces/ClusterType.md) \| `undefined`

#### Source

packages/matter.js/dist/esm/cluster/ClusterRegistry.d.ts:17

***

### register()

> **register**(`cluster`): `void`

Register a cluster for global access.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterType`](../../interfaces/ClusterType.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/ClusterRegistry.d.ts:21
