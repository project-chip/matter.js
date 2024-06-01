[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/time-sync/export

# behavior/definitions/time-sync/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [TimeSyncBehavior](namespaces/TimeSyncBehavior/README.md)
- [TimeSyncInterface](namespaces/TimeSyncInterface/README.md)

### Classes

- [TimeSyncServer](classes/TimeSyncServer.md)

### Interfaces

- [TimeSyncBehavior](interfaces/TimeSyncBehavior.md)

## Type Aliases

### SetUtcTimeRequest

> **SetUtcTimeRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSetUtcTimeRequest`](../../../../cluster/export/namespaces/TimeSync/README.md#tlvsetutctimerequest)\>

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

#### See

MatterSpecification.v11.Core § 11.16.9.1

#### Source

[packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts#L31)

***

### TimeSyncInterface

> **TimeSyncInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/time-sync/TimeSyncInterface.ts#L33)

## Variables

### TimeSyncBehavior

> `const` **TimeSyncBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/TimeSync/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`TimeSyncInterface`](README.md#timesyncinterface)\>, [`TimeSyncInterface`](README.md#timesyncinterface)\>

TimeSyncBehavior is the base class for objects that support interaction with [TimeSync.Cluster](../../../../cluster/export/namespaces/TimeSync/README.md#cluster).

This class does not have optional features of TimeSync.Cluster enabled. You can enable additional features using
TimeSyncBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/time-sync/TimeSyncBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/time-sync/TimeSyncBehavior.ts#L19)
