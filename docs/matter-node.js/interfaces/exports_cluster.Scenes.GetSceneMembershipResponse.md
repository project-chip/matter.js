[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Scenes](../modules/exports_cluster.Scenes.md) / GetSceneMembershipResponse

# Interface: GetSceneMembershipResponse

[exports/cluster](../modules/exports_cluster.md).[Scenes](../modules/exports_cluster.Scenes.md).GetSceneMembershipResponse

The fields of the get scene membership response command have the following semantics:

The Capacity field shall contain the remaining capacity of the Scene Table of the server (for all groups). The
following values apply:

  • 0 - No further scenes may be added.

  • 0 < Capacity < 0xfe - Capacity holds the number of scenes that may be added.

  • 0xfe - At least 1 further scene may be added (exact number is unknown).

  • null - It is unknown if any further scenes may be added.

The Status field shall contain SUCCESS or ILLEGAL_COMMAND (the endpoint is not a member of the group) as
appropriate.

The GroupID field shall be set to the corresponding field of the received GetSceneMembership command.

If the status is not SUCCESS then the SceneList field shall be omitted, else the SceneList field shall contain
the identifiers of all the scenes in the Scene Table with the corresponding Group ID.

Zigbee: If the total number of scenes associated with this Group ID will cause the maximum payload length of a
frame to be exceeded, then the SceneList field shall contain only as many scenes as will fit.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.17

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGetSceneMembershipResponse`](../modules/exports_cluster.Scenes.md#tlvgetscenemembershipresponse)\>

  ↳ **`GetSceneMembershipResponse`**

## Table of contents

### Properties

- [capacity](exports_cluster.Scenes.GetSceneMembershipResponse.md#capacity)
- [groupId](exports_cluster.Scenes.GetSceneMembershipResponse.md#groupid)
- [sceneList](exports_cluster.Scenes.GetSceneMembershipResponse.md#scenelist)
- [status](exports_cluster.Scenes.GetSceneMembershipResponse.md#status)

## Properties

### capacity

• **capacity**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.capacity

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:343

___

### groupId

• **groupId**: [`GroupId`](../modules/exports_datatype.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:344

___

### sceneList

• `Optional` **sceneList**: `number`[]

#### Inherited from

TypeFromSchema.sceneList

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:345

___

### status

• **status**: [`StatusCode`](../enums/exports_interaction.StatusCode.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:342
