[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Groups](../modules/exports_cluster.Groups.md) / GetGroupMembershipResponse

# Interface: GetGroupMembershipResponse

[exports/cluster](../modules/exports_cluster.md).[Groups](../modules/exports_cluster.Groups.md).GetGroupMembershipResponse

The GetGroupMembershipResponse command is sent by the Groups cluster server in response to a GetGroupMembership
command.

The fields of the GetGroupMembershipResponse command have the following semantics:

The Capacity field shall contain the remaining capacity of the Group Table of the node. The following values
apply:

  • 0 - No further groups may be added.

  • 0 < Capacity < 0xfe - Capacity holds the number of groups that may be added.

  • 0xfe - At least 1 further group may be added (exact number is unknown).

  • null - It is unknown if any further groups may be added.

The GroupList field shall contain either the group IDs of all the groups in the Group Table for which the server
endpoint is a member of the group (in the case where the GroupList field of the received GetGroupMembership
command was empty), or the group IDs of all the groups in the Group Table for which the server endpoint is a
member of the group and for which the group ID was included in the the GroupList field of the received
GetGroupMembership command (in the case where the GroupList field of the received GetGroupMembership command was
not empty).

Zigbee: If the total number of groups will cause the maximum payload length of a frame to be exceeded, then the
GroupList field shall contain only as many groups as will fit.

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.9

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGetGroupMembershipResponse`](../modules/exports_cluster.Groups.md#tlvgetgroupmembershipresponse)\>

  ↳ **`GetGroupMembershipResponse`**

## Table of contents

### Properties

- [capacity](exports_cluster.Groups.GetGroupMembershipResponse.md#capacity)
- [groupList](exports_cluster.Groups.GetGroupMembershipResponse.md#grouplist)

## Properties

### capacity

• **capacity**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.capacity

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:134

___

### groupList

• **groupList**: [`GroupId`](../modules/exports_datatype.md#groupid)[]

#### Inherited from

TypeFromSchema.groupList

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:135
