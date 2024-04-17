[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Groups](../modules/cluster_export.Groups.md) / AddGroupRequest

# Interface: AddGroupRequest

[cluster/export](../modules/cluster_export.md).[Groups](../modules/cluster_export.Groups.md).AddGroupRequest

Input to the Groups addGroup command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAddGroupRequest`](../modules/cluster_export.Groups.md#tlvaddgrouprequest)\>

  ↳ **`AddGroupRequest`**

## Table of contents

### Properties

- [groupId](cluster_export.Groups.AddGroupRequest.md#groupid)
- [groupName](cluster_export.Groups.AddGroupRequest.md#groupname)

## Properties

### groupId

• **groupId**: [`GroupId`](../modules/datatype_export.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L43)

___

### groupName

• **groupName**: `string`

#### Inherited from

TypeFromSchema.groupName

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L44)
