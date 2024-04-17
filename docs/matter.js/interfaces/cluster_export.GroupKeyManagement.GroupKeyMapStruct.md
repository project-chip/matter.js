[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md) / GroupKeyMapStruct

# Interface: GroupKeyMapStruct

[cluster/export](../modules/cluster_export.md).[GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md).GroupKeyMapStruct

**`See`**

MatterSpecification.v11.Core § 11.2.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGroupKeyMapStruct`](../modules/cluster_export.GroupKeyManagement.md#tlvgroupkeymapstruct)\>

  ↳ **`GroupKeyMapStruct`**

## Table of contents

### Properties

- [fabricIndex](cluster_export.GroupKeyManagement.GroupKeyMapStruct.md#fabricindex)
- [groupId](cluster_export.GroupKeyManagement.GroupKeyMapStruct.md#groupid)
- [groupKeySetId](cluster_export.GroupKeyManagement.GroupKeyMapStruct.md#groupkeysetid)

## Properties

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L55)

___

### groupId

• **groupId**: [`GroupId`](../modules/datatype_export.md#groupid)

This field uniquely identifies the group within the scope of the given Fabric.

**`See`**

MatterSpecification.v11.Core § 11.2.6.3.1

#### Inherited from

TypeFromSchema.groupId

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L42)

___

### groupKeySetId

• **groupKeySetId**: `number`

This field references the set of group keys that generate operational group keys for use with this

group, as specified in Section 4.15.3.5.1, “Group Key Set ID”.

A GroupKeyMapStruct shall NOT accept GroupKeySetID of 0, which is reserved for the IPK.

**`See`**

MatterSpecification.v11.Core § 11.2.6.3.2

#### Inherited from

TypeFromSchema.groupKeySetId

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L53)
