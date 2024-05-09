[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/time-sync/export](../modules/behavior_definitions_time_sync_export.md) / [TimeSyncInterface](../modules/behavior_definitions_time_sync_export.TimeSyncInterface.md) / Base

# Interface: Base

[behavior/definitions/time-sync/export](../modules/behavior_definitions_time_sync_export.md).[TimeSyncInterface](../modules/behavior_definitions_time_sync_export.TimeSyncInterface.md).Base

## Table of contents

### Methods

- [setUtcTime](behavior_definitions_time_sync_export.TimeSyncInterface.Base.md#setutctime)

## Methods

### setUtcTime

▸ **setUtcTime**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command may be issued by Administrator to set the time. If the Commissioner does not have a valid time
source, it may send a Granularity of NoTimeGranularity.

Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in the
command, if the stated Granularity and TimeSource are acceptable. The server shall update its UTCTime
attribute if its current Granularity is NoTimeGranularity.

If the time is updated, the server shall also update its Granularity attribute as appropriate

server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall
also update its last known good UTC time.

If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS. If
it opts to not update its time, it shall fail the command with a cluster specific Status Code of
TimeNotAccepted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.16.9.1

#### Defined in

[packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts#L54)
