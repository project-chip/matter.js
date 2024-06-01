[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Groups](../README.md) / ViewGroupResponse

# Interface: ViewGroupResponse

The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.

## See

MatterSpecification.v11.Cluster § 1.3.7.8

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvViewGroupResponse`](../README.md#tlvviewgroupresponse)\>

## Properties

### groupId

> **groupId**: [`GroupId`](../../../../../datatype/export/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L92)

***

### groupName

> **groupName**: `string`

#### Inherited from

`TypeFromSchema.groupName`

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L93)

***

### status

> **status**: [`StatusCode`](../../../../../protocol/interaction/export/enumerations/StatusCode.md)

#### Inherited from

`TypeFromSchema.status`

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L91)
