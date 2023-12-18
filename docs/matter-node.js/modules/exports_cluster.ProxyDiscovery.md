[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ProxyDiscovery

# Namespace: ProxyDiscovery

[exports/cluster](exports_cluster.md).ProxyDiscovery

## Table of contents

### Variables

- [Cluster](exports_cluster.ProxyDiscovery.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>

Proxy Discovery

This cluster contains commands needed to do proxy discovery as defined in the Section 9.15.7.3, “Step 2: Proxy
Discovery” and Section 9.15.7.4, “Step 3: Proxy Response” steps of the overall Section 9.15.7, “Proxy Discovery
& Assignment Flow”.

**`See`**

MatterCoreSpecificationV1_1 § 9.15.13

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ProxyDiscoveryCluster.d.ts:19
