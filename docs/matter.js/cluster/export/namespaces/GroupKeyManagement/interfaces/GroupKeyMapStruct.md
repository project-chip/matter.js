[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GroupKeyManagement](../README.md) / GroupKeyMapStruct

# Interface: GroupKeyMapStruct

## See

MatterSpecification.v11.Core § 11.2.6.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGroupKeyMapStruct`](../README.md#tlvgroupkeymapstruct)\>

## Properties

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L55)

***

### groupId

> **groupId**: [`GroupId`](../../../../../datatype/export/README.md#groupid)

This field uniquely identifies the group within the scope of the given Fabric.

#### See

MatterSpecification.v11.Core § 11.2.6.3.1

#### Inherited from

`TypeFromSchema.groupId`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L42)

***

### groupKeySetId

> **groupKeySetId**: `number`

This field references the set of group keys that generate operational group keys for use with this

group, as specified in Section 4.15.3.5.1, “Group Key Set ID”.

A GroupKeyMapStruct shall NOT accept GroupKeySetID of 0, which is reserved for the IPK.

#### See

MatterSpecification.v11.Core § 11.2.6.3.2

#### Inherited from

`TypeFromSchema.groupKeySetId`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L53)
