[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Groups](../modules/cluster_export.Groups.md) / AddGroupIfIdentifyingRequest

# Interface: AddGroupIfIdentifyingRequest

[cluster/export](../modules/cluster_export.md).[Groups](../modules/cluster_export.Groups.md).AddGroupIfIdentifyingRequest

Input to the Groups addGroupIfIdentifying command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAddGroupIfIdentifyingRequest`](../modules/cluster_export.Groups.md#tlvaddgroupifidentifyingrequest)\>

  ↳ **`AddGroupIfIdentifyingRequest`**

## Table of contents

### Properties

- [groupId](cluster_export.Groups.AddGroupIfIdentifyingRequest.md#groupid)
- [groupName](cluster_export.Groups.AddGroupIfIdentifyingRequest.md#groupname)

## Properties

### groupId

• **groupId**: [`GroupId`](../modules/datatype_export.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L219)

___

### groupName

• **groupName**: `string`

#### Inherited from

TypeFromSchema.groupName

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L220)
