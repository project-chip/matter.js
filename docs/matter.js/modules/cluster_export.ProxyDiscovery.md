[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ProxyDiscovery

# Namespace: ProxyDiscovery

[cluster/export](cluster_export.md).ProxyDiscovery

## Table of contents

### Variables

- [Cluster](cluster_export.ProxyDiscovery.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `commands`: { `proxyDiscoverRequest`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  } ; `id`: ``67`` = 0x43; `name`: ``"ProxyDiscovery"`` = "ProxyDiscovery"; `revision`: ``1`` = 1 }\>

Proxy Discovery

This cluster contains commands needed to do proxy discovery as defined in the Section 9.15.7.3, “Step 2: Proxy
Discovery” and Section 9.15.7.4, “Step 3: Proxy Response” steps of the overall Section 9.15.7, “Proxy Discovery
& Assignment Flow”.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.15.13

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyDiscoveryCluster.ts:24](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ProxyDiscoveryCluster.ts#L24)
