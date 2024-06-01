[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Groups](../README.md) / AddGroupResponse

# Interface: AddGroupResponse

The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.

## See

MatterSpecification.v11.Cluster § 1.3.7.7

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvAddGroupResponse`](../README.md#tlvaddgroupresponse)\>

## Properties

### groupId

> **groupId**: [`GroupId`](../../../../datatype/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:48

***

### status

> **status**: [`StatusCode`](../../../../interaction/enumerations/StatusCode.md)

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:47
