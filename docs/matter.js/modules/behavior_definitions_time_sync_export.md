[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/time-sync/export

# Module: behavior/definitions/time-sync/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_time_sync_export._internal_.md)

### Namespaces

- [TimeSyncBehavior](behavior_definitions_time_sync_export.TimeSyncBehavior.md)
- [TimeSyncInterface](behavior_definitions_time_sync_export.TimeSyncInterface.md)

### Classes

- [TimeSyncServer](../classes/behavior_definitions_time_sync_export.TimeSyncServer.md)

### Interfaces

- [TimeSyncBehavior](../interfaces/behavior_definitions_time_sync_export.TimeSyncBehavior-1.md)

### Type Aliases

- [SetUtcTimeRequest](behavior_definitions_time_sync_export.md#setutctimerequest)
- [TimeSyncInterface](behavior_definitions_time_sync_export.md#timesyncinterface)

### Variables

- [TimeSyncBehavior](behavior_definitions_time_sync_export.md#timesyncbehavior)

## Type Aliases

### SetUtcTimeRequest

Ƭ **SetUtcTimeRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSetUtcTimeRequest`](cluster_export.TimeSync.md#tlvsetutctimerequest)\>

This command may be issued by Administrator to set the time. If the Commissioner does not have a valid time source,
it may send a Granularity of NoTimeGranularity.

Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in the
command, if the stated Granularity and TimeSource are acceptable. The server shall update its UTCTime attribute if
its current Granularity is NoTimeGranularity.

If the time is updated, the server shall also update its Granularity attribute as appropriate

server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall also update
its last known good UTC time.

If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS. If it opts
to not update its time, it shall fail the command with a cluster specific Status Code of TimeNotAccepted.

**`See`**

MatterSpecification.v11.Core § 11.16.9.1

#### Defined in

[packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts#L31)

___

### TimeSyncInterface

Ƭ **TimeSyncInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_time_sync_export.TimeSyncInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts#L33)

[packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts#L58)

## Variables

### TimeSyncBehavior

• `Const` **TimeSyncBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TimeSync.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\>, [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\>

TimeSyncBehavior is the base class for objects that support interaction with [TimeSync.Cluster](cluster_export.TimeSync.md#cluster).

This class does not have optional features of TimeSync.Cluster enabled. You can enable additional features using
TimeSyncBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/time-sync/TimeSyncBehavior.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/time-sync/TimeSyncBehavior.ts#L19)

[packages/matter.js/src/behavior/definitions/time-sync/TimeSyncBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/time-sync/TimeSyncBehavior.ts#L24)

[packages/matter.js/src/behavior/definitions/time-sync/TimeSyncBehavior.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/time-sync/TimeSyncBehavior.ts#L26)
