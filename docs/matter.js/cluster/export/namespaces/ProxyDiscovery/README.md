[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / ProxyDiscovery

# Namespace: ProxyDiscovery

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ProxyDiscoveryCluster.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ProxyDiscoveryCluster.ts#L41)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.proxyDiscoverRequest

> `readonly` **proxyDiscoverRequest**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Core § 9.15.13.5

##### id

> `readonly` **id**: `67` = `0x43`

##### name

> `readonly` **name**: `"ProxyDiscovery"` = `"ProxyDiscovery"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ProxyDiscoveryCluster.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ProxyDiscoveryCluster.ts#L19)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/ProxyDiscoveryCluster.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ProxyDiscoveryCluster.ts#L45)
