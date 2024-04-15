[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Groups](../modules/exports_cluster.Groups.md) / AddGroupResponse

# Interface: AddGroupResponse

[exports/cluster](../modules/exports_cluster.md).[Groups](../modules/exports_cluster.Groups.md).AddGroupResponse

The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.7

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAddGroupResponse`](../modules/exports_cluster.Groups.md#tlvaddgroupresponse)\>

  ↳ **`AddGroupResponse`**

## Table of contents

### Properties

- [groupId](exports_cluster.Groups.AddGroupResponse.md#groupid)
- [status](exports_cluster.Groups.AddGroupResponse.md#status)

## Properties

### groupId

• **groupId**: [`GroupId`](../modules/exports_datatype.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:48

___

### status

• **status**: [`StatusCode`](../enums/exports_interaction.StatusCode.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:47
