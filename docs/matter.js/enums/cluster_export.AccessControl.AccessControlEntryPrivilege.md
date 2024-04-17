[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AccessControl](../modules/cluster_export.AccessControl.md) / AccessControlEntryPrivilege

# Enumeration: AccessControlEntryPrivilege

[cluster/export](../modules/cluster_export.md).[AccessControl](../modules/cluster_export.AccessControl.md).AccessControlEntryPrivilege

Proxy View Value

This value implicitly grants View privileges

**`See`**

MatterSpecification.v11.Core § 9.10.4.2

## Table of contents

### Enumeration Members

- [Administer](cluster_export.AccessControl.AccessControlEntryPrivilege.md#administer)
- [Manage](cluster_export.AccessControl.AccessControlEntryPrivilege.md#manage)
- [Operate](cluster_export.AccessControl.AccessControlEntryPrivilege.md#operate)
- [ProxyView](cluster_export.AccessControl.AccessControlEntryPrivilege.md#proxyview)
- [View](cluster_export.AccessControl.AccessControlEntryPrivilege.md#view)

## Enumeration Members

### Administer

• **Administer** = ``5``

Manage privileges, and can observe and modify the Access Control Cluster

This value implicitly grants Manage, Operate, Proxy View & View privileges

**`See`**

MatterSpecification.v11.Core § 9.10.4.2.3

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L77)

___

### Manage

• **Manage** = ``4``

Operate privileges, and can modify persistent configuration of this Node (except Access Control Cluster)

This value implicitly grants Operate & View privileges

**`See`**

MatterSpecification.v11.Core § 9.10.4.2.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L68)

___

### Operate

• **Operate** = ``3``

View privileges, and can perform the primary function of this Node (except Access Control Cluster)

This value implicitly grants View privileges

**`See`**

MatterSpecification.v11.Core § 9.10.4.2.1

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L59)

___

### ProxyView

• **ProxyView** = ``2``

Can read and observe all (as seen by a Proxy)

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L50)

___

### View

• **View** = ``1``

Can read and observe all (except Access Control Cluster and as seen by a non-Proxy)

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L45)
