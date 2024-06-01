[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / GroupKeyMulticastPolicy

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

matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:102

***

### PerGroupId

> **PerGroupId**: `0`

Indicates filtering of multicast messages for a specific Group ID

The 16-bit Group Identifier of the Multicast Address shall be the Group ID of the group.

#### See

MatterSpecification.v11.Core § 11.2.6.2.1

#### Source

matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:94
