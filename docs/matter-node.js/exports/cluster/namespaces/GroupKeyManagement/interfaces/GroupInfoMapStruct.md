[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GroupKeyManagement](../README.md) / GroupInfoMapStruct

# Interface: GroupInfoMapStruct

## See

MatterSpecification.v11.Core § 11.2.6.5

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvGroupInfoMapStruct`](../README.md#tlvgroupinfomapstruct)\>

## Properties

### endpoints

> **endpoints**: [`EndpointNumber`](../../../../datatype/README.md#endpointnumber)[]

This field provides the list of Endpoint IDs on the Node to which messages to this group shall be forwarded.

#### See

MatterSpecification.v11.Core § 11.2.6.5.2

#### Inherited from

`TypeFromSchema.endpoints`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:55

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:63

***

### groupId

> **groupId**: [`GroupId`](../../../../datatype/README.md#groupid)

This field uniquely identifies the group within the scope of the given Fabric.

#### See

MatterSpecification.v11.Core § 11.2.6.5.1

#### Inherited from

`TypeFromSchema.groupId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:49

***

### groupName?

> `optional` **groupName**: `string`

This field provides a name for the group. This field shall contain the last GroupName written for a given
GroupId on any Endpoint via the Groups cluster.

#### See

MatterSpecification.v11.Core § 11.2.6.5.3

#### Inherited from

`TypeFromSchema.groupName`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:62
