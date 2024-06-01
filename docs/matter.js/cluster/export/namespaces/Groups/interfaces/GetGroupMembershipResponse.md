[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Groups](../README.md) / GetGroupMembershipResponse

# Interface: GetGroupMembershipResponse

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

## See

MatterSpecification.v11.Cluster § 1.3.7.9

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetGroupMembershipResponse`](../README.md#tlvgetgroupmembershipresponse)\>

## Properties

### capacity

> **capacity**: `null` \| `number`

#### Inherited from

`TypeFromSchema.capacity`

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L147)

***

### groupList

> **groupList**: [`GroupId`](../../../../../datatype/export/README.md#groupid)[]

#### Inherited from

`TypeFromSchema.groupList`

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L148)
