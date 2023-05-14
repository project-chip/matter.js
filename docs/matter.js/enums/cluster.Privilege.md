[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / Privilege

# Enumeration: Privilege

[cluster](../modules/cluster.md).Privilege

List of privileges that can be granted to a subject.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.10.5.3

## Table of contents

### Enumeration Members

- [Administer](cluster.Privilege.md#administer)
- [Manage](cluster.Privilege.md#manage)
- [Operate](cluster.Privilege.md#operate)
- [ProxyView](cluster.Privilege.md#proxyview)
- [View](cluster.Privilege.md#view)

## Enumeration Members

### Administer

• **Administer** = ``5``

Manage privileges, and can observe and modify the Access Control Cluster.

#### Defined in

[packages/matter.js/src/cluster/AccessControlCluster.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/AccessControlCluster.ts#L40)

___

### Manage

• **Manage** = ``4``

Operate privileges, and can modify persistent configuration of this Node (except Access Control Cluster).

#### Defined in

[packages/matter.js/src/cluster/AccessControlCluster.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/AccessControlCluster.ts#L37)

___

### Operate

• **Operate** = ``3``

View privileges, and can perform the primary function of this Node (except Access Control Cluster).

#### Defined in

[packages/matter.js/src/cluster/AccessControlCluster.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/AccessControlCluster.ts#L34)

___

### ProxyView

• **ProxyView** = ``2``

An read and observe all (as seen by a Proxy).

#### Defined in

[packages/matter.js/src/cluster/AccessControlCluster.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/AccessControlCluster.ts#L31)

___

### View

• **View** = ``1``

Can read and observe all (except Access Control Cluster and as seen by a non-Proxy).

#### Defined in

[packages/matter.js/src/cluster/AccessControlCluster.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/AccessControlCluster.ts#L28)
