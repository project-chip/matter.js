[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / GroupKeyMulticastPolicy

# Enumeration: GroupKeyMulticastPolicy

[cluster](../modules/cluster.md).GroupKeyMulticastPolicy

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.2.6 table 88

## Table of contents

### Enumeration Members

- [AllNodes](cluster.GroupKeyMulticastPolicy.md#allnodes)
- [PerGroupID](cluster.GroupKeyMulticastPolicy.md#pergroupid)

## Enumeration Members

### AllNodes

• **AllNodes** = ``1``

The 16-bit Group Identifier of the Multicast Address SHALL be 0xFFFF

#### Defined in

[packages/matter.js/src/cluster/GroupKeyManagementCluster.ts:56](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GroupKeyManagementCluster.ts#L56)

___

### PerGroupID

• **PerGroupID** = ``0``

The 16-bit Group Identifier of the MulticastAddress SHALL be the Group ID of the group.

#### Defined in

[packages/matter.js/src/cluster/GroupKeyManagementCluster.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GroupKeyManagementCluster.ts#L53)
