[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/scenes/export

# behavior/definitions/scenes/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ScenesBehavior](namespaces/ScenesBehavior/README.md)
- [ScenesInterface](namespaces/ScenesInterface/README.md)

### Classes

- [ScenesServer](classes/ScenesServer.md)

### Interfaces

- [ScenesBehavior](interfaces/ScenesBehavior.md)

## Type Aliases

### AddSceneRequest

> **AddSceneRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAddSceneRequest`](../../../../cluster/export/namespaces/Scenes/README.md#tlvaddscenerequest)\>

It is not mandatory for an extension field set to be included in the command for every cluster on that endpoint that
has a defined extension field set. Extension field sets may be omitted, including the case of no extension field
sets at all.

#### See

MatterSpecification.v11.Cluster § 1.4.9.2

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L20)

***

### AddSceneResponse

> **AddSceneResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAddSceneResponse`](../../../../cluster/export/namespaces/Scenes/README.md#tlvaddsceneresponse)\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.12

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L25)

***

### CopySceneRequest

> **CopySceneRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvCopySceneRequest`](../../../../cluster/export/namespaces/Scenes/README.md#tlvcopyscenerequest)\>

The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to another
group/scene identifier pair.

#### See

MatterSpecification.v11.Cluster § 1.4.9.11

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L115)

***

### CopySceneResponse

> **CopySceneResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvCopySceneResponse`](../../../../cluster/export/namespaces/Scenes/README.md#tlvcopysceneresponse)\>

The CopySceneResponse command allows a server to respond to a CopyScene command.

#### See

MatterSpecification.v11.Cluster § 1.4.9.20

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L122)

***

### GetSceneMembershipRequest

> **GetSceneMembershipRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetSceneMembershipRequest`](../../../../cluster/export/namespaces/Scenes/README.md#tlvgetscenemembershiprequest)\>

The GetSceneMembership command can be used to find an unused scene identifier within a certain group when no
commissioning tool is in the network, or for a commissioning tool to get the used scene identifiers within a certain
group, for the endpoint that implements this cluster.

#### See

MatterSpecification.v11.Cluster § 1.4.9.8

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L79)

***

### GetSceneMembershipResponse

> **GetSceneMembershipResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetSceneMembershipResponse`](../../../../cluster/export/namespaces/Scenes/README.md#tlvgetscenemembershipresponse)\>

The fields of the get scene membership response command have the following semantics:

The Capacity field shall contain the remaining capacity of the Scene Table of the server (for all groups). The
following values apply:

  • 0 - No further scenes may be added.

  • 0 < Capacity < 0xfe - Capacity holds the number of scenes that may be added.

  • 0xfe - At least 1 further scene may be added (exact number is unknown).

  • null - It is unknown if any further scenes may be added.

The Status field shall contain SUCCESS or ILLEGAL_COMMAND (the endpoint is not a member of the group) as appropriate.

The GroupID field shall be set to the corresponding field of the received GetSceneMembership command.

If the status is not SUCCESS then the SceneList field shall be omitted, else the SceneList field shall contain the
identifiers of all the scenes in the Scene Table with the corresponding Group ID.

Zigbee: If the total number of scenes associated with this Group ID will cause the maximum payload length of a frame
to be exceeded, then the SceneList field shall contain only as many scenes as will fit.

#### See

MatterSpecification.v11.Cluster § 1.4.9.17

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:107](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L107)

***

### RecallSceneRequest

> **RecallSceneRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRecallSceneRequest`](../../../../cluster/export/namespaces/Scenes/README.md#tlvrecallscenerequest)\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.7

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L70)

***

### RemoveAllScenesRequest

> **RemoveAllScenesRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRemoveAllScenesRequest`](../../../../cluster/export/namespaces/Scenes/README.md#tlvremoveallscenesrequest)\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.5

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L50)

***

### RemoveAllScenesResponse

> **RemoveAllScenesResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRemoveAllScenesResponse`](../../../../cluster/export/namespaces/Scenes/README.md#tlvremoveallscenesresponse)\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.15

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L55)

***

### RemoveSceneRequest

> **RemoveSceneRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRemoveSceneRequest`](../../../../cluster/export/namespaces/Scenes/README.md#tlvremovescenerequest)\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.4

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L40)

***

### RemoveSceneResponse

> **RemoveSceneResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRemoveSceneResponse`](../../../../cluster/export/namespaces/Scenes/README.md#tlvremovesceneresponse)\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.14

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L45)

***

### ScenesInterface

> **ScenesInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L124)

***

### StoreSceneRequest

> **StoreSceneRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStoreSceneRequest`](../../../../cluster/export/namespaces/Scenes/README.md#tlvstorescenerequest)\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.6

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L60)

***

### StoreSceneResponse

> **StoreSceneResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStoreSceneResponse`](../../../../cluster/export/namespaces/Scenes/README.md#tlvstoresceneresponse)\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.16

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L65)

***

### ViewSceneRequest

> **ViewSceneRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvViewSceneRequest`](../../../../cluster/export/namespaces/Scenes/README.md#tlvviewscenerequest)\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.3

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L30)

***

### ViewSceneResponse

> **ViewSceneResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvViewSceneResponse`](../../../../cluster/export/namespaces/Scenes/README.md#tlvviewsceneresponse)\>

#### See

MatterSpecification.v11.Cluster § 1.4.9.13

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L35)

## Variables

### ScenesBehavior

> `const` **ScenesBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/Scenes/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ScenesInterface`](README.md#scenesinterface)\>, [`ScenesInterface`](README.md#scenesinterface)\>

ScenesBehavior is the base class for objects that support interaction with [Scenes.Cluster](../../../../cluster/export/namespaces/Scenes/README.md#cluster).

#### Source

[packages/matter.js/src/behavior/definitions/scenes/ScenesBehavior.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/scenes/ScenesBehavior.ts#L16)
