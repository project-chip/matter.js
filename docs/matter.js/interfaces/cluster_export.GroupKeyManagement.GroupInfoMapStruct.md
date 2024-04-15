[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md) / GroupInfoMapStruct

# Interface: GroupInfoMapStruct

[cluster/export](../modules/cluster_export.md).[GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md).GroupInfoMapStruct

This field uniquely identifies the group within the scope of the given Fabric.

**`See`**

MatterSpecification.v11.Core § 11.2.6.5

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGroupInfoMapStruct`](../modules/cluster_export.GroupKeyManagement.md#tlvgroupinfomapstruct)\>

  ↳ **`GroupInfoMapStruct`**

## Table of contents

### Properties

- [endpoints](cluster_export.GroupKeyManagement.GroupInfoMapStruct.md#endpoints)
- [fabricIndex](cluster_export.GroupKeyManagement.GroupInfoMapStruct.md#fabricindex)
- [groupId](cluster_export.GroupKeyManagement.GroupInfoMapStruct.md#groupid)
- [groupName](cluster_export.GroupKeyManagement.GroupInfoMapStruct.md#groupname)

## Properties

### endpoints

• **endpoints**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

This field provides the list of Endpoint IDs on the Node to which messages to this group shall be forwarded.

**`See`**

MatterSpecification.v11.Core § 11.2.6.5.1

#### Inherited from

TypeFromSchema.endpoints

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L76)

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L86)

___

### groupId

• **groupId**: [`GroupId`](../modules/datatype_export.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L69)

___

### groupName

• `Optional` **groupName**: `string`

This field provides a name for the group. This field shall contain the last GroupName written for a given
GroupId on any Endpoint via the Groups cluster.

**`See`**

MatterSpecification.v11.Core § 11.2.6.5.2

#### Inherited from

TypeFromSchema.groupName

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L84)
