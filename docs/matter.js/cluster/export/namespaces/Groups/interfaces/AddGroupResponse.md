[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Groups](../README.md) / AddGroupResponse

# Interface: AddGroupResponse

The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.

## See

MatterSpecification.v11.Cluster § 1.3.7.7

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAddGroupResponse`](../README.md#tlvaddgroupresponse)\>

## Properties

### groupId

> **groupId**: [`GroupId`](../../../../../datatype/export/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L61)

***

### status

> **status**: [`StatusCode`](../../../../../protocol/interaction/export/enumerations/StatusCode.md)

#### Inherited from

`TypeFromSchema.status`

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L60)
