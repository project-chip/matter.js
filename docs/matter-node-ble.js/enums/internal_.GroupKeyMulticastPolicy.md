[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / GroupKeyMulticastPolicy

# Enumeration: GroupKeyMulticastPolicy

[\<internal\>](../modules/internal_.md).GroupKeyMulticastPolicy

**`See`**

MatterSpecification.v11.Core § 11.2.6.2

## Table of contents

### Enumeration Members

- [AllNodes](internal_.GroupKeyMulticastPolicy.md#allnodes)
- [PerGroupId](internal_.GroupKeyMulticastPolicy.md#pergroupid)

## Enumeration Members

### AllNodes

• **AllNodes** = ``1``

Indicates not filtering of multicast messages

The 16-bit Group Identifier of the Multicast Address shall be 0xFFFF.

**`See`**

MatterSpecification.v11.Core § 11.2.6.2.2

#### Defined in

matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:102

___

### PerGroupId

• **PerGroupId** = ``0``

Indicates filtering of multicast messages for a specific Group ID

The 16-bit Group Identifier of the Multicast Address shall be the Group ID of the group.

**`See`**

MatterSpecification.v11.Core § 11.2.6.2.1

#### Defined in

matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:94
