[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md) / GroupKeyMulticastPolicy

# Enumeration: GroupKeyMulticastPolicy

[exports/cluster](../modules/exports_cluster.md).[GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md).GroupKeyMulticastPolicy

**`See`**

MatterCoreSpecificationV1_1 § 11.2.6.2

## Table of contents

### Enumeration Members

- [AllNodes](exports_cluster.GroupKeyManagement.GroupKeyMulticastPolicy.md#allnodes)
- [PerGroupId](exports_cluster.GroupKeyManagement.GroupKeyMulticastPolicy.md#pergroupid)

## Enumeration Members

### AllNodes

• **AllNodes** = ``1``

Indicates not filtering of multicast messages

The 16-bit Group Identifier of the Multicast Address shall be 0xFFFF.

**`See`**

MatterCoreSpecificationV1_1 § 11.2.6.2.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GroupKeyManagementCluster.d.ts:86

___

### PerGroupId

• **PerGroupId** = ``0``

Indicates filtering of multicast messages for a specific Group ID

The 16-bit Group Identifier of the Multicast Address shall be the Group ID of the group.

**`See`**

MatterCoreSpecificationV1_1 § 11.2.6.2.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GroupKeyManagementCluster.d.ts:78
