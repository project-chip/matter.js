[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Scenes](../README.md) / GetSceneMembershipResponse

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

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetSceneMembershipResponse`](../README.md#tlvgetscenemembershipresponse)\>

## Properties

### capacity

> **capacity**: `null` \| `number`

#### Inherited from

`TypeFromSchema.capacity`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:313](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L313)

***

### groupId

> **groupId**: [`GroupId`](../../../../../datatype/export/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:314](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L314)

***

### sceneList?

> `optional` **sceneList**: `number`[]

#### Inherited from

`TypeFromSchema.sceneList`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:315](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L315)

***

### status

> **status**: [`StatusCode`](../../../../../protocol/interaction/export/enumerations/StatusCode.md)

#### Inherited from

`TypeFromSchema.status`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:312](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L312)
