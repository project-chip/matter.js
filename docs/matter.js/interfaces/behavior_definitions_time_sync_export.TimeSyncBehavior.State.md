[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/time-sync/export](../modules/behavior_definitions_time_sync_export.md) / [TimeSyncBehavior](../modules/behavior_definitions_time_sync_export.TimeSyncBehavior.md) / State

# Interface: State

[behavior/definitions/time-sync/export](../modules/behavior_definitions_time_sync_export.md).[TimeSyncBehavior](../modules/behavior_definitions_time_sync_export.TimeSyncBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_time_sync_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [granularity](behavior_definitions_time_sync_export.TimeSyncBehavior.State.md#granularity)
- [timeSource](behavior_definitions_time_sync_export.TimeSyncBehavior.State.md#timesource)
- [trustedTimeNodeId](behavior_definitions_time_sync_export.TimeSyncBehavior.State.md#trustedtimenodeid)
- [utcTime](behavior_definitions_time_sync_export.TimeSyncBehavior.State.md#utctime)

## Properties

### granularity

• **granularity**: [`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)

The granularity of the error that the server is willing to guarantee on the time synchronization. It is
of type GranularityEnum.

**`See`**

MatterSpecification.v11.Core § 11.16.8.2

#### Inherited from

StateType.granularity

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:535](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L535)

___

### timeSource

• `Optional` **timeSource**: [`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)

The server’s time source. This attribute indicates what method the server is using to sync, whether the
source uses NTS or not and whether the source is internal or external to the Fabric. This attribute may
be used by a client to determine its level of trust in the UTCTime. It is of type TimeSourceEnum.

If a server is unsure if the selected NTP server is within the Fabric, it SHOULD indicate the server is
NonFabric.

**`See`**

MatterSpecification.v11.Core § 11.16.8.3

#### Inherited from

StateType.timeSource

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:547](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L547)

___

### trustedTimeNodeId

• **trustedTimeNodeId**: ``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)

The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time
sync sources and may be used as the primary time source if other time sources are unavailable. See
Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It
SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is
available, the commissioner may set this value to null.

**`See`**

MatterSpecification.v11.Core § 11.16.8.5

#### Inherited from

StateType.trustedTimeNodeId

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:558](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L558)

___

### utcTime

• **utcTime**: ``null`` \| `number` \| `bigint`

If the server has achieved time synchronization, this shall indicate the current time as a UTC epoch-us
(Epoch Time in Microseconds).

If the server has not achieved time synchronization, this shall be null. This attribute may be set when
a Section 11.16.9.1, “SetUtcTime Command” is received.

**`See`**

MatterSpecification.v11.Core § 11.16.8.1

#### Inherited from

StateType.utcTime

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:527](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L527)
