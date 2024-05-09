[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Groups](../modules/exports_cluster.Groups.md) / ViewGroupResponse

# Interface: ViewGroupResponse

[exports/cluster](../modules/exports_cluster.md).[Groups](../modules/exports_cluster.Groups.md).ViewGroupResponse

The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.8

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvViewGroupResponse`](../modules/exports_cluster.Groups.md#tlvviewgroupresponse)\>

  ↳ **`ViewGroupResponse`**

## Table of contents

### Properties

- [groupId](exports_cluster.Groups.ViewGroupResponse.md#groupid)
- [groupName](exports_cluster.Groups.ViewGroupResponse.md#groupname)
- [status](exports_cluster.Groups.ViewGroupResponse.md#status)

## Properties

### groupId

• **groupId**: [`GroupId`](../modules/exports_datatype.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:79

___

### groupName

• **groupName**: `string`

#### Inherited from

TypeFromSchema.groupName

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:80

___

### status

• **status**: [`StatusCode`](../enums/exports_interaction.StatusCode.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:78
