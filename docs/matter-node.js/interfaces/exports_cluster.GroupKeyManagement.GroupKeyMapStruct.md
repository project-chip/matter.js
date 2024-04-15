[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md) / GroupKeyMapStruct

# Interface: GroupKeyMapStruct

[exports/cluster](../modules/exports_cluster.md).[GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md).GroupKeyMapStruct

**`See`**

MatterSpecification.v11.Core § 11.2.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGroupKeyMapStruct`](../modules/exports_cluster.GroupKeyManagement.md#tlvgroupkeymapstruct)\>

  ↳ **`GroupKeyMapStruct`**

## Table of contents

### Properties

- [fabricIndex](exports_cluster.GroupKeyManagement.GroupKeyMapStruct.md#fabricindex)
- [groupId](exports_cluster.GroupKeyManagement.GroupKeyMapStruct.md#groupid)
- [groupKeySetId](exports_cluster.GroupKeyManagement.GroupKeyMapStruct.md#groupkeysetid)

## Properties

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:33

___

### groupId

• **groupId**: [`GroupId`](../modules/exports_datatype.md#groupid)

This field uniquely identifies the group within the scope of the given Fabric.

**`See`**

MatterSpecification.v11.Core § 11.2.6.3.1

#### Inherited from

TypeFromSchema.groupId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:22

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

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:32
