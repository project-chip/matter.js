[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Scenes](../README.md) / GetSceneMembershipResponse

# Interface: GetSceneMembershipResponse

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

## See

MatterSpecification.v11.Cluster § 1.4.9.17

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvGetSceneMembershipResponse`](../README.md#tlvgetscenemembershipresponse)\>

## Properties

### capacity

> **capacity**: `null` \| `number`

#### Inherited from

`TypeFromSchema.capacity`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:343

***

### groupId

> **groupId**: [`GroupId`](../../../../datatype/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:344

***

### sceneList?

> `optional` **sceneList**: `number`[]

#### Inherited from

`TypeFromSchema.sceneList`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:345

***

### status

> **status**: [`StatusCode`](../../../../interaction/enumerations/StatusCode.md)

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:342
