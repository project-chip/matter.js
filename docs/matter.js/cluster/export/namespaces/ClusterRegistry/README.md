[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / ClusterRegistry

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

[packages/matter.js/src/cluster/ClusterRegistry.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterRegistry.ts#L21)

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

[packages/matter.js/src/cluster/ClusterRegistry.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterRegistry.ts#L28)
