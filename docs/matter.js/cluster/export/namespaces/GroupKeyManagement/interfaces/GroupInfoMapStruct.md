[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GroupKeyManagement](../README.md) / GroupInfoMapStruct

# Interface: GroupInfoMapStruct

## See

MatterSpecification.v11.Core § 11.2.6.5

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGroupInfoMapStruct`](../README.md#tlvgroupinfomapstruct)\>

## Properties

### endpoints

> **endpoints**: [`EndpointNumber`](../../../../../datatype/export/README.md#endpointnumber)[]

This field provides the list of Endpoint IDs on the Node to which messages to this group shall be forwarded.

#### See

MatterSpecification.v11.Core § 11.2.6.5.2

#### Inherited from

`TypeFromSchema.endpoints`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L79)

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L89)

***

### groupId

> **groupId**: [`GroupId`](../../../../../datatype/export/README.md#groupid)

This field uniquely identifies the group within the scope of the given Fabric.

#### See

MatterSpecification.v11.Core § 11.2.6.5.1

#### Inherited from

`TypeFromSchema.groupId`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L72)

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

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L87)
