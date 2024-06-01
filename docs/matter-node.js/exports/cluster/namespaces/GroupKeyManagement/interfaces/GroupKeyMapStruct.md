[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GroupKeyManagement](../README.md) / GroupKeyMapStruct

# Interface: GroupKeyMapStruct

## See

MatterSpecification.v11.Core § 11.2.6.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvGroupKeyMapStruct`](../README.md#tlvgroupkeymapstruct)\>

## Properties

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:33

***

### groupId

> **groupId**: [`GroupId`](../../../../datatype/README.md#groupid)

This field uniquely identifies the group within the scope of the given Fabric.

#### See

MatterSpecification.v11.Core § 11.2.6.3.1

#### Inherited from

`TypeFromSchema.groupId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:22

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

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:32
