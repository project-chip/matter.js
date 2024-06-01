[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/time-sync/export](../../../README.md) / [TimeSyncInterface](../README.md) / Base

# Interface: Base

## Methods

### setUtcTime()

> **setUtcTime**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

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

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 11.16.9.1

#### Source

[packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts#L54)
