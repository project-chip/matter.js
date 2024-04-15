[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/scenes/export

# Module: behavior/definitions/scenes/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_scenes_export._internal_.md)

### Namespaces

- [ScenesBehavior](behavior_definitions_scenes_export.ScenesBehavior.md)
- [ScenesInterface](behavior_definitions_scenes_export.ScenesInterface.md)

### Classes

- [ScenesServer](../classes/behavior_definitions_scenes_export.ScenesServer.md)

### Interfaces

- [ScenesBehavior](../interfaces/behavior_definitions_scenes_export.ScenesBehavior-1.md)

### Type Aliases

- [AddSceneRequest](behavior_definitions_scenes_export.md#addscenerequest)
- [AddSceneResponse](behavior_definitions_scenes_export.md#addsceneresponse)
- [CopySceneRequest](behavior_definitions_scenes_export.md#copyscenerequest)
- [CopySceneResponse](behavior_definitions_scenes_export.md#copysceneresponse)
- [GetSceneMembershipRequest](behavior_definitions_scenes_export.md#getscenemembershiprequest)
- [GetSceneMembershipResponse](behavior_definitions_scenes_export.md#getscenemembershipresponse)
- [RecallSceneRequest](behavior_definitions_scenes_export.md#recallscenerequest)
- [RemoveAllScenesRequest](behavior_definitions_scenes_export.md#removeallscenesrequest)
- [RemoveAllScenesResponse](behavior_definitions_scenes_export.md#removeallscenesresponse)
- [RemoveSceneRequest](behavior_definitions_scenes_export.md#removescenerequest)
- [RemoveSceneResponse](behavior_definitions_scenes_export.md#removesceneresponse)
- [ScenesInterface](behavior_definitions_scenes_export.md#scenesinterface)
- [StoreSceneRequest](behavior_definitions_scenes_export.md#storescenerequest)
- [StoreSceneResponse](behavior_definitions_scenes_export.md#storesceneresponse)
- [ViewSceneRequest](behavior_definitions_scenes_export.md#viewscenerequest)
- [ViewSceneResponse](behavior_definitions_scenes_export.md#viewsceneresponse)

### Variables

- [ScenesBehavior](behavior_definitions_scenes_export.md#scenesbehavior)

## Type Aliases

### AddSceneRequest

Ƭ **AddSceneRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAddSceneRequest`](cluster_export.Scenes.md#tlvaddscenerequest)\>

It is not mandatory for an extension field set to be included in the command for every cluster on that endpoint that
has a defined extension field set. Extension field sets may be omitted, including the case of no extension field
sets at all.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.2

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L20)

___

### AddSceneResponse

Ƭ **AddSceneResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAddSceneResponse`](cluster_export.Scenes.md#tlvaddsceneresponse)\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.12

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L25)

___

### CopySceneRequest

Ƭ **CopySceneRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvCopySceneRequest`](cluster_export.Scenes.md#tlvcopyscenerequest)\>

The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to another
group/scene identifier pair.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.11

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L115)

___

### CopySceneResponse

Ƭ **CopySceneResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvCopySceneResponse`](cluster_export.Scenes.md#tlvcopysceneresponse)\>

The CopySceneResponse command allows a server to respond to a CopyScene command.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.20

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L122)

___

### GetSceneMembershipRequest

Ƭ **GetSceneMembershipRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGetSceneMembershipRequest`](cluster_export.Scenes.md#tlvgetscenemembershiprequest)\>

The GetSceneMembership command can be used to find an unused scene identifier within a certain group when no
commissioning tool is in the network, or for a commissioning tool to get the used scene identifiers within a certain
group, for the endpoint that implements this cluster.

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.8

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L79)

___

### GetSceneMembershipResponse

Ƭ **GetSceneMembershipResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGetSceneMembershipResponse`](cluster_export.Scenes.md#tlvgetscenemembershipresponse)\>

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

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.17

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L107)

___

### RecallSceneRequest

Ƭ **RecallSceneRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRecallSceneRequest`](cluster_export.Scenes.md#tlvrecallscenerequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.7

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L70)

___

### RemoveAllScenesRequest

Ƭ **RemoveAllScenesRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRemoveAllScenesRequest`](cluster_export.Scenes.md#tlvremoveallscenesrequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.5

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L50)

___

### RemoveAllScenesResponse

Ƭ **RemoveAllScenesResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRemoveAllScenesResponse`](cluster_export.Scenes.md#tlvremoveallscenesresponse)\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.15

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L55)

___

### RemoveSceneRequest

Ƭ **RemoveSceneRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRemoveSceneRequest`](cluster_export.Scenes.md#tlvremovescenerequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.4

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L40)

___

### RemoveSceneResponse

Ƭ **RemoveSceneResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRemoveSceneResponse`](cluster_export.Scenes.md#tlvremovesceneresponse)\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.14

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L45)

___

### ScenesInterface

Ƭ **ScenesInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_scenes_export.ScenesInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L124)

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L201)

___

### StoreSceneRequest

Ƭ **StoreSceneRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStoreSceneRequest`](cluster_export.Scenes.md#tlvstorescenerequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.6

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L60)

___

### StoreSceneResponse

Ƭ **StoreSceneResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStoreSceneResponse`](cluster_export.Scenes.md#tlvstoresceneresponse)\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.16

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L65)

___

### ViewSceneRequest

Ƭ **ViewSceneRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvViewSceneRequest`](cluster_export.Scenes.md#tlvviewscenerequest)\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.3

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L30)

___

### ViewSceneResponse

Ƭ **ViewSceneResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvViewSceneResponse`](cluster_export.Scenes.md#tlvviewsceneresponse)\>

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.13

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesInterface.ts#L35)

## Variables

### ScenesBehavior

• `Const` **ScenesBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>, [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>

ScenesBehavior is the base class for objects that support interaction with [Scenes.Cluster](cluster_export.Scenes.md#cluster).

#### Defined in

[packages/matter.js/src/behavior/definitions/scenes/ScenesBehavior.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesBehavior.ts#L16)

[packages/matter.js/src/behavior/definitions/scenes/ScenesBehavior.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/scenes/ScenesBehavior.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/scenes/ScenesBehavior.ts#L23)
