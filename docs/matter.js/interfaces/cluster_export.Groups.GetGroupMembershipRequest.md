[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Groups](../modules/cluster_export.Groups.md) / GetGroupMembershipRequest

# Interface: GetGroupMembershipRequest

[cluster/export](../modules/cluster_export.md).[Groups](../modules/cluster_export.Groups.md).GetGroupMembershipRequest

Input to the Groups getGroupMembership command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGetGroupMembershipRequest`](../modules/cluster_export.Groups.md#tlvgetgroupmembershiprequest)\>

  ↳ **`GetGroupMembershipRequest`**

## Table of contents

### Properties

- [groupList](cluster_export.Groups.GetGroupMembershipRequest.md#grouplist)

## Properties

### groupList

• **groupList**: [`GroupId`](../modules/datatype_export.md#groupid)[]

#### Inherited from

TypeFromSchema.groupList

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L108)
