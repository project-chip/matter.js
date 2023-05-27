[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / Privilege

# Enumeration: Privilege

[exports/cluster](../modules/exports_cluster.md).Privilege

List of privileges that can be granted to a subject.

**`See`**

MatterCoreSpecificationV1_0 § 9.10.5.3

## Table of contents

### Enumeration Members

- [Administer](exports_cluster.Privilege.md#administer)
- [Manage](exports_cluster.Privilege.md#manage)
- [Operate](exports_cluster.Privilege.md#operate)
- [ProxyView](exports_cluster.Privilege.md#proxyview)
- [View](exports_cluster.Privilege.md#view)

## Enumeration Members

### Administer

• **Administer** = ``5``

Manage privileges, and can observe and modify the Access Control Cluster.

#### Defined in

packages/matter.js/dist/cjs/cluster/AccessControlCluster.d.ts:22

___

### Manage

• **Manage** = ``4``

Operate privileges, and can modify persistent configuration of this Node (except Access Control Cluster).

#### Defined in

packages/matter.js/dist/cjs/cluster/AccessControlCluster.d.ts:20

___

### Operate

• **Operate** = ``3``

View privileges, and can perform the primary function of this Node (except Access Control Cluster).

#### Defined in

packages/matter.js/dist/cjs/cluster/AccessControlCluster.d.ts:18

___

### ProxyView

• **ProxyView** = ``2``

An read and observe all (as seen by a Proxy).

#### Defined in

packages/matter.js/dist/cjs/cluster/AccessControlCluster.d.ts:16

___

### View

• **View** = ``1``

Can read and observe all (except Access Control Cluster and as seen by a non-Proxy).

#### Defined in

packages/matter.js/dist/cjs/cluster/AccessControlCluster.d.ts:14
