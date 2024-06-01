[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Groups](../README.md) / ViewGroupResponse

# Interface: ViewGroupResponse

The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.

## See

MatterSpecification.v11.Cluster § 1.3.7.8

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvViewGroupResponse`](../README.md#tlvviewgroupresponse)\>

## Properties

### groupId

> **groupId**: [`GroupId`](../../../../datatype/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:79

***

### groupName

> **groupName**: `string`

#### Inherited from

`TypeFromSchema.groupName`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:80

***

### status

> **status**: [`StatusCode`](../../../../interaction/enumerations/StatusCode.md)

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:78
