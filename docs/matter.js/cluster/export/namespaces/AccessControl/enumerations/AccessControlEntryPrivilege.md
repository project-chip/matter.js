[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [AccessControl](../README.md) / AccessControlEntryPrivilege

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

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L77)

***

### Manage

> **Manage**: `4`

Operate privileges, and can modify persistent configuration of this Node (except Access Control Cluster)

This value implicitly grants Operate & View privileges

#### See

MatterSpecification.v11.Core § 9.10.4.2.2

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L68)

***

### Operate

> **Operate**: `3`

View privileges, and can perform the primary function of this Node (except Access Control Cluster)

This value implicitly grants View privileges

#### See

MatterSpecification.v11.Core § 9.10.4.2.1

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L59)

***

### ProxyView

> **ProxyView**: `2`

Can read and observe all (as seen by a Proxy)

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L50)

***

### View

> **View**: `1`

Can read and observe all (except Access Control Cluster and as seen by a non-Proxy)

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L45)
