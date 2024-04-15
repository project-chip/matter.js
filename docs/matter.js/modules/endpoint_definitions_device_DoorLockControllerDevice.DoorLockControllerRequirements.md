[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/DoorLockControllerDevice](endpoint_definitions_device_DoorLockControllerDevice.md) / DoorLockControllerRequirements

# Namespace: DoorLockControllerRequirements

[endpoint/definitions/device/DoorLockControllerDevice](endpoint_definitions_device_DoorLockControllerDevice.md).DoorLockControllerRequirements

## Table of contents

### Variables

- [DoorLockBehavior](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#doorlockbehavior)
- [GroupsBehavior](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#groupsbehavior)
- [IdentifyBehavior](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#identifybehavior)
- [IdentifyServer](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#identifyserver)
- [ScenesBehavior](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#scenesbehavior)
- [TimeSyncServer](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#timesyncserver)
- [client](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#client)
- [server](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#server)

## Variables

### DoorLockBehavior

• `Const` **DoorLockBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.DoorLock.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`DoorLockInterface`](behavior_definitions_door_lock_export.md#doorlockinterface)\>, [`DoorLockInterface`](behavior_definitions_door_lock_export.md#doorlockinterface)\> = `BaseDoorLockBehavior`

The DoorLock cluster is required by the Matter specification

We provide this alias to the default implementation [DoorLockBehavior](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#doorlockbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts#L46)

___

### GroupsBehavior

• `Const` **GroupsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Groups.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>, [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\> = `BaseGroupsBehavior`

The Groups cluster is optional per the Matter specification

We provide this alias to the default implementation [GroupsBehavior](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#groupsbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts#L60)

___

### IdentifyBehavior

• `Const` **IdentifyBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>, [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> = `BaseIdentifyBehavior`

The Identify cluster is optional per the Matter specification

We provide this alias to the default implementation [IdentifyBehavior](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#identifybehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts#L53)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is optional per the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts#L32)

___

### ScenesBehavior

• `Const` **ScenesBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>, [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> = `BaseScenesBehavior`

The Scenes cluster is optional per the Matter specification

We provide this alias to the default implementation [ScenesBehavior](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#scenesbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts#L67)

___

### TimeSyncServer

• `Const` **TimeSyncServer**: typeof [`TimeSyncServer`](../classes/behavior_definitions_time_sync_export.TimeSyncServer.md) = `BaseTimeSyncServer`

The TimeSync cluster is optional per the Matter specification

We provide this alias to the default implementation [TimeSyncServer](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md#timesyncserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts#L39)

___

### client

• `Const` **client**: `Object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `DoorLock`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.DoorLock.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`DoorLockInterface`](behavior_definitions_door_lock_export.md#doorlockinterface)\>, [`DoorLockInterface`](behavior_definitions_door_lock_export.md#doorlockinterface)\> = DoorLockBehavior } |
| `mandatory.DoorLock` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.DoorLock.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`DoorLockInterface`](behavior_definitions_door_lock_export.md#doorlockinterface)\>, [`DoorLockInterface`](behavior_definitions_door_lock_export.md#doorlockinterface)\> |
| `optional` | \{ `Groups`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Groups.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>, [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\> = GroupsBehavior; `Identify`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>, [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> = IdentifyBehavior; `Scenes`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>, [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> = ScenesBehavior } |
| `optional.Groups` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Groups.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>, [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\> |
| `optional.Identify` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>, [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> |
| `optional.Scenes` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>, [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts#L77)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | {} |
| `optional` | \{ `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer; `TimeSync`: typeof [`TimeSyncServer`](../classes/behavior_definitions_time_sync_export.TimeSyncServer.md) = TimeSyncServer } |
| `optional.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |
| `optional.TimeSync` | typeof [`TimeSyncServer`](../classes/behavior_definitions_time_sync_export.TimeSyncServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockControllerDevice.ts#L72)
