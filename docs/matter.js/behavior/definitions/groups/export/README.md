[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/groups/export

# behavior/definitions/groups/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [GroupsBehavior](namespaces/GroupsBehavior/README.md)
- [GroupsInterface](namespaces/GroupsInterface/README.md)

### Classes

- [GroupsServer](classes/GroupsServer.md)

### Interfaces

- [GroupsBehavior](interfaces/GroupsBehavior.md)

## Type Aliases

### AddGroupIfIdentifyingRequest

> **AddGroupIfIdentifyingRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAddGroupIfIdentifyingRequest`](../../../../cluster/export/namespaces/Groups/README.md#tlvaddgroupifidentifyingrequest)\>

The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the server
endpoint, on condition that the endpoint is identifying itself. Identifying functionality is controlled using the
Identify cluster, (see Identify).

This command might be used to assist configuring group membership in the absence of a commissioning tool.

#### See

MatterSpecification.v11.Cluster § 1.3.7.6

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L103)

***

### AddGroupRequest

> **AddGroupRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAddGroupRequest`](../../../../cluster/export/namespaces/Groups/README.md#tlvaddgrouprequest)\>

The AddGroup command allows a client to add group membership in a particular group for the server endpoint.

#### See

MatterSpecification.v11.Cluster § 1.3.7.1

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L18)

***

### AddGroupResponse

> **AddGroupResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAddGroupResponse`](../../../../cluster/export/namespaces/Groups/README.md#tlvaddgroupresponse)\>

The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.

#### See

MatterSpecification.v11.Cluster § 1.3.7.7

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L25)

***

### GetGroupMembershipRequest

> **GetGroupMembershipRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetGroupMembershipRequest`](../../../../cluster/export/namespaces/Groups/README.md#tlvgetgroupmembershiprequest)\>

The GetGroupMembership command allows a client to inquire about the group membership of the server endpoint, in a
number of ways.

#### See

MatterSpecification.v11.Cluster § 1.3.7.3

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L48)

***

### GetGroupMembershipResponse

> **GetGroupMembershipResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetGroupMembershipResponse`](../../../../cluster/export/namespaces/Groups/README.md#tlvgetgroupmembershipresponse)\>

The GetGroupMembershipResponse command is sent by the Groups cluster server in response to a GetGroupMembership
command.

The fields of the GetGroupMembershipResponse command have the following semantics:

The Capacity field shall contain the remaining capacity of the Group Table of the node. The following values apply:

  • 0 - No further groups may be added.

  • 0 < Capacity < 0xfe - Capacity holds the number of groups that may be added.

  • 0xfe - At least 1 further group may be added (exact number is unknown).

  • null - It is unknown if any further groups may be added.

The GroupList field shall contain either the group IDs of all the groups in the Group Table for which the server
endpoint is a member of the group (in the case where the GroupList field of the received GetGroupMembership command
was empty), or the group IDs of all the groups in the Group Table for which the server endpoint is a member of the
group and for which the group ID was included in the the GroupList field of the received GetGroupMembership command
(in the case where the GroupList field of the received GetGroupMembership command was not empty).

Zigbee: If the total number of groups will cause the maximum payload length of a frame to be exceeded, then the
GroupList field shall contain only as many groups as will fit.

#### See

MatterSpecification.v11.Cluster § 1.3.7.9

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L77)

***

### GroupsInterface

> **GroupsInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L105)

***

### RemoveGroupRequest

> **RemoveGroupRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRemoveGroupRequest`](../../../../cluster/export/namespaces/Groups/README.md#tlvremovegrouprequest)\>

The RemoveGroup command allows a client to request that the server removes the membership for the server endpoint,
if any, in a particular group.

#### See

MatterSpecification.v11.Cluster § 1.3.7.4

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L85)

***

### RemoveGroupResponse

> **RemoveGroupResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRemoveGroupResponse`](../../../../cluster/export/namespaces/Groups/README.md#tlvremovegroupresponse)\>

The RemoveGroupResponse command is generated by the server in response to the receipt of a RemoveGroup command.

#### See

MatterSpecification.v11.Cluster § 1.3.7.10

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L92)

***

### ViewGroupRequest

> **ViewGroupRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvViewGroupRequest`](../../../../cluster/export/namespaces/Groups/README.md#tlvviewgrouprequest)\>

The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse command
containing the name string for a particular group.

#### See

MatterSpecification.v11.Cluster § 1.3.7.2

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L33)

***

### ViewGroupResponse

> **ViewGroupResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvViewGroupResponse`](../../../../cluster/export/namespaces/Groups/README.md#tlvviewgroupresponse)\>

The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.

#### See

MatterSpecification.v11.Cluster § 1.3.7.8

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L40)

## Variables

### GroupsBehavior

> `const` **GroupsBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/Groups/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`GroupsInterface`](README.md#groupsinterface)\>, [`GroupsInterface`](README.md#groupsinterface)\>

GroupsBehavior is the base class for objects that support interaction with [Groups.Cluster](../../../../cluster/export/namespaces/Groups/README.md#cluster).

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsBehavior.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsBehavior.ts#L16)
