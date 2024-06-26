[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Groups](../modules/cluster_export.Groups.md) / AddGroupResponse

# Interface: AddGroupResponse

[cluster/export](../modules/cluster_export.md).[Groups](../modules/cluster_export.Groups.md).AddGroupResponse

The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.7

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAddGroupResponse`](../modules/cluster_export.Groups.md#tlvaddgroupresponse)\>

  ↳ **`AddGroupResponse`**

## Table of contents

### Properties

- [groupId](cluster_export.Groups.AddGroupResponse.md#groupid)
- [status](cluster_export.Groups.AddGroupResponse.md#status)

## Properties

### groupId

• **groupId**: [`GroupId`](../modules/datatype_export.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:61](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L61)

___

### status

• **status**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:60](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L60)
