[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GroupKeyManagement](../README.md) / GroupKeyMulticastPolicy

# Enumeration: GroupKeyMulticastPolicy

## See

MatterSpecification.v11.Core § 11.2.6.2

## Enumeration Members

### AllNodes

> **AllNodes**: `1`

Indicates not filtering of multicast messages

The 16-bit Group Identifier of the Multicast Address shall be 0xFFFF.

#### See

MatterSpecification.v11.Core § 11.2.6.2.2

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L132)

***

### PerGroupId

> **PerGroupId**: `0`

Indicates filtering of multicast messages for a specific Group ID

The 16-bit Group Identifier of the Multicast Address shall be the Group ID of the group.

#### See

MatterSpecification.v11.Core § 11.2.6.2.1

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L123)
