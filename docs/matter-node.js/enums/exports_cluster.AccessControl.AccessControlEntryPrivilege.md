[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AccessControl](../modules/exports_cluster.AccessControl.md) / AccessControlEntryPrivilege

# Enumeration: AccessControlEntryPrivilege

[exports/cluster](../modules/exports_cluster.md).[AccessControl](../modules/exports_cluster.AccessControl.md).AccessControlEntryPrivilege

Proxy View Value

This value implicitly grants View privileges

**`See`**

MatterSpecification.v11.Core § 9.10.4.2

## Table of contents

### Enumeration Members

- [Administer](exports_cluster.AccessControl.AccessControlEntryPrivilege.md#administer)
- [Manage](exports_cluster.AccessControl.AccessControlEntryPrivilege.md#manage)
- [Operate](exports_cluster.AccessControl.AccessControlEntryPrivilege.md#operate)
- [ProxyView](exports_cluster.AccessControl.AccessControlEntryPrivilege.md#proxyview)
- [View](exports_cluster.AccessControl.AccessControlEntryPrivilege.md#view)

## Enumeration Members

### Administer

• **Administer** = ``5``

Manage privileges, and can observe and modify the Access Control Cluster

This value implicitly grants Manage, Operate, Proxy View & View privileges

**`See`**

MatterSpecification.v11.Core § 9.10.4.2.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:51

___

### Manage

• **Manage** = ``4``

Operate privileges, and can modify persistent configuration of this Node (except Access Control Cluster)

This value implicitly grants Operate & View privileges

**`See`**

MatterSpecification.v11.Core § 9.10.4.2.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:43

___

### Operate

• **Operate** = ``3``

View privileges, and can perform the primary function of this Node (except Access Control Cluster)

This value implicitly grants View privileges

**`See`**

MatterSpecification.v11.Core § 9.10.4.2.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:35

___

### ProxyView

• **ProxyView** = ``2``

Can read and observe all (as seen by a Proxy)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:27

___

### View

• **View** = ``1``

Can read and observe all (except Access Control Cluster and as seen by a non-Proxy)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:23
