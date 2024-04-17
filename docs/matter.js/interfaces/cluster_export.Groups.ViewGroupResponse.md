[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Groups](../modules/cluster_export.Groups.md) / ViewGroupResponse

# Interface: ViewGroupResponse

[cluster/export](../modules/cluster_export.md).[Groups](../modules/cluster_export.Groups.md).ViewGroupResponse

The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.8

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvViewGroupResponse`](../modules/cluster_export.Groups.md#tlvviewgroupresponse)\>

  ↳ **`ViewGroupResponse`**

## Table of contents

### Properties

- [groupId](cluster_export.Groups.ViewGroupResponse.md#groupid)
- [groupName](cluster_export.Groups.ViewGroupResponse.md#groupname)
- [status](cluster_export.Groups.ViewGroupResponse.md#status)

## Properties

### groupId

• **groupId**: [`GroupId`](../modules/datatype_export.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L92)

___

### groupName

• **groupName**: `string`

#### Inherited from

TypeFromSchema.groupName

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L93)

___

### status

• **status**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L91)
