[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md) / GroupKeyMulticastPolicy

# Enumeration: GroupKeyMulticastPolicy

[cluster/export](../modules/cluster_export.md).[GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md).GroupKeyMulticastPolicy

**`See`**

MatterSpecification.v11.Core § 11.2.6.2

## Table of contents

### Enumeration Members

- [AllNodes](cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md#allnodes)
- [PerGroupId](cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md#pergroupid)

## Enumeration Members

### AllNodes

• **AllNodes** = ``1``

Indicates not filtering of multicast messages

The 16-bit Group Identifier of the Multicast Address shall be 0xFFFF.

**`See`**

MatterSpecification.v11.Core § 11.2.6.2.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:132](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L132)

___

### PerGroupId

• **PerGroupId** = ``0``

Indicates filtering of multicast messages for a specific Group ID

The 16-bit Group Identifier of the Multicast Address shall be the Group ID of the group.

**`See`**

MatterSpecification.v11.Core § 11.2.6.2.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:123](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L123)
