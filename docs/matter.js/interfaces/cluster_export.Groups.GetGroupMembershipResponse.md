[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Groups](../modules/cluster_export.Groups.md) / GetGroupMembershipResponse

# Interface: GetGroupMembershipResponse

[cluster/export](../modules/cluster_export.md).[Groups](../modules/cluster_export.Groups.md).GetGroupMembershipResponse

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

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGetGroupMembershipResponse`](../modules/cluster_export.Groups.md#tlvgetgroupmembershipresponse)\>

  ↳ **`GetGroupMembershipResponse`**

## Table of contents

### Properties

- [capacity](cluster_export.Groups.GetGroupMembershipResponse.md#capacity)
- [groupList](cluster_export.Groups.GetGroupMembershipResponse.md#grouplist)

## Properties

### capacity

• **capacity**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.capacity

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L147)

___

### groupList

• **groupList**: [`GroupId`](../modules/datatype_export.md#groupid)[]

#### Inherited from

TypeFromSchema.groupList

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L148)
