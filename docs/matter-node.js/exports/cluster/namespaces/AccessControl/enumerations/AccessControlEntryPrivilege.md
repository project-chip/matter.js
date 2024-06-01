[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [AccessControl](../README.md) / AccessControlEntryPrivilege

# Enumeration: AccessControlEntryPrivilege

Proxy View Value

This value implicitly grants View privileges

## See

MatterSpecification.v11.Core § 9.10.4.2

## Enumeration Members

### Administer

> **Administer**: `5`

Manage privileges, and can observe and modify the Access Control Cluster

This value implicitly grants Manage, Operate, Proxy View & View privileges

#### See

MatterSpecification.v11.Core § 9.10.4.2.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:51

***

### Manage

> **Manage**: `4`

Operate privileges, and can modify persistent configuration of this Node (except Access Control Cluster)

This value implicitly grants Operate & View privileges

#### See

MatterSpecification.v11.Core § 9.10.4.2.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:43

***

### Operate

> **Operate**: `3`

View privileges, and can perform the primary function of this Node (except Access Control Cluster)

This value implicitly grants View privileges

#### See

MatterSpecification.v11.Core § 9.10.4.2.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:35

***

### ProxyView

> **ProxyView**: `2`

Can read and observe all (as seen by a Proxy)

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:27

***

### View

> **View**: `1`

Can read and observe all (except Access Control Cluster and as seen by a non-Proxy)

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:23
