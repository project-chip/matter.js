[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/groups/export

# Module: behavior/definitions/groups/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_groups_export._internal_.md)

### Namespaces

- [GroupsBehavior](behavior_definitions_groups_export.GroupsBehavior.md)
- [GroupsInterface](behavior_definitions_groups_export.GroupsInterface.md)

### Classes

- [GroupsServer](../classes/behavior_definitions_groups_export.GroupsServer.md)

### Interfaces

- [GroupsBehavior](../interfaces/behavior_definitions_groups_export.GroupsBehavior-1.md)

### Type Aliases

- [AddGroupIfIdentifyingRequest](behavior_definitions_groups_export.md#addgroupifidentifyingrequest)
- [AddGroupRequest](behavior_definitions_groups_export.md#addgrouprequest)
- [AddGroupResponse](behavior_definitions_groups_export.md#addgroupresponse)
- [GetGroupMembershipRequest](behavior_definitions_groups_export.md#getgroupmembershiprequest)
- [GetGroupMembershipResponse](behavior_definitions_groups_export.md#getgroupmembershipresponse)
- [GroupsInterface](behavior_definitions_groups_export.md#groupsinterface)
- [RemoveGroupRequest](behavior_definitions_groups_export.md#removegrouprequest)
- [RemoveGroupResponse](behavior_definitions_groups_export.md#removegroupresponse)
- [ViewGroupRequest](behavior_definitions_groups_export.md#viewgrouprequest)
- [ViewGroupResponse](behavior_definitions_groups_export.md#viewgroupresponse)

### Variables

- [GroupsBehavior](behavior_definitions_groups_export.md#groupsbehavior)

## Type Aliases

### AddGroupIfIdentifyingRequest

Ƭ **AddGroupIfIdentifyingRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAddGroupIfIdentifyingRequest`](cluster_export.Groups.md#tlvaddgroupifidentifyingrequest)\>

The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the server
endpoint, on condition that the endpoint is identifying itself. Identifying functionality is controlled using the
Identify cluster, (see Identify).

This command might be used to assist configuring group membership in the absence of a commissioning tool.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.6

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:104](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L104)

___

### AddGroupRequest

Ƭ **AddGroupRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAddGroupRequest`](cluster_export.Groups.md#tlvaddgrouprequest)\>

The AddGroup command allows a client to add group membership in a particular group for the server endpoint.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.1

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:19](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L19)

___

### AddGroupResponse

Ƭ **AddGroupResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAddGroupResponse`](cluster_export.Groups.md#tlvaddgroupresponse)\>

The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.7

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:26](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L26)

___

### GetGroupMembershipRequest

Ƭ **GetGroupMembershipRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGetGroupMembershipRequest`](cluster_export.Groups.md#tlvgetgroupmembershiprequest)\>

The GetGroupMembership command allows a client to inquire about the group membership of the server endpoint, in a
number of ways.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.3

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:49](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L49)

___

### GetGroupMembershipResponse

Ƭ **GetGroupMembershipResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGetGroupMembershipResponse`](cluster_export.Groups.md#tlvgetgroupmembershipresponse)\>

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

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.9

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:78](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L78)

___

### GroupsInterface

Ƭ **GroupsInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_groups_export.GroupsInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:106](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L106)

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:162](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L162)

___

### RemoveGroupRequest

Ƭ **RemoveGroupRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRemoveGroupRequest`](cluster_export.Groups.md#tlvremovegrouprequest)\>

The RemoveGroup command allows a client to request that the server removes the membership for the server endpoint,
if any, in a particular group.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.4

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L86)

___

### RemoveGroupResponse

Ƭ **RemoveGroupResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRemoveGroupResponse`](cluster_export.Groups.md#tlvremovegroupresponse)\>

The RemoveGroupResponse command is generated by the server in response to the receipt of a RemoveGroup command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.10

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L93)

___

### ViewGroupRequest

Ƭ **ViewGroupRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvViewGroupRequest`](cluster_export.Groups.md#tlvviewgrouprequest)\>

The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse command
containing the name string for a particular group.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.2

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:34](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L34)

___

### ViewGroupResponse

Ƭ **ViewGroupResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvViewGroupResponse`](cluster_export.Groups.md#tlvviewgroupresponse)\>

The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.8

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:41](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L41)

## Variables

### GroupsBehavior

• `Const` **GroupsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Groups.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>, [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>

GroupsBehavior is the base class for objects that support interaction with [Groups.Cluster](cluster_export.Groups.md#cluster).

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsBehavior.ts:16](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsBehavior.ts#L16)

[packages/matter.js/src/behavior/definitions/groups/GroupsBehavior.ts:21](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/groups/GroupsBehavior.ts:23](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/groups/GroupsBehavior.ts#L23)
