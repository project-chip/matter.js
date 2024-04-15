[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/DoorLockDevice](endpoint_definitions_device_DoorLockDevice.md) / DoorLockRequirements

# Namespace: DoorLockRequirements

[endpoint/definitions/device/DoorLockDevice](endpoint_definitions_device_DoorLockDevice.md).DoorLockRequirements

## Table of contents

### Variables

- [DoorLockServer](endpoint_definitions_device_DoorLockDevice.DoorLockRequirements.md#doorlockserver)
- [IdentifyServer](endpoint_definitions_device_DoorLockDevice.DoorLockRequirements.md#identifyserver)
- [TimeSyncBehavior](endpoint_definitions_device_DoorLockDevice.DoorLockRequirements.md#timesyncbehavior)
- [client](endpoint_definitions_device_DoorLockDevice.DoorLockRequirements.md#client)
- [server](endpoint_definitions_device_DoorLockDevice.DoorLockRequirements.md#server)

## Variables

### DoorLockServer

• `Const` **DoorLockServer**: typeof [`DoorLockServer`](../classes/behavior_definitions_door_lock_export.DoorLockServer.md) = `BaseDoorLockServer`

The DoorLock cluster is required by the Matter specification

We provide this alias to the default implementation [DoorLockServer](endpoint_definitions_device_DoorLockDevice.DoorLockRequirements.md#doorlockserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L37)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_DoorLockDevice.DoorLockRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L30)

___

### TimeSyncBehavior

• `Const` **TimeSyncBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TimeSync.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\>, [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\> = `BaseTimeSyncBehavior`

The TimeSync cluster is optional per the Matter specification

We provide this alias to the default implementation [TimeSyncBehavior](endpoint_definitions_device_DoorLockDevice.DoorLockRequirements.md#timesyncbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L44)

___

### client

• `Const` **client**: `Object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | {} |
| `optional` | \{ `TimeSync`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TimeSync.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\>, [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\> = TimeSyncBehavior } |
| `optional.TimeSync` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TimeSync.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\>, [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L54)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `DoorLock`: typeof [`DoorLockServer`](../classes/behavior_definitions_door_lock_export.DoorLockServer.md) = DoorLockServer; `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer } |
| `mandatory.DoorLock` | typeof [`DoorLockServer`](../classes/behavior_definitions_door_lock_export.DoorLockServer.md) |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L49)
