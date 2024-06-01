[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/time-sync/export](../../../README.md) / [TimeSyncBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### granularity

> **granularity**: [`Granularity`](../../../../../../../cluster/export/namespaces/TimeSync/enumerations/Granularity.md)

The granularity of the error that the server is willing to guarantee on the time synchronization. It is
of type GranularityEnum.

#### See

MatterSpecification.v11.Core § 11.16.8.2

#### Inherited from

`StateType.granularity`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:541](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L541)

***

### timeSource?

> `optional` **timeSource**: [`TimeSource`](../../../../../../../cluster/export/namespaces/TimeSync/enumerations/TimeSource.md)

The server’s time source. This attribute indicates what method the server is using to sync, whether the
source uses NTS or not and whether the source is internal or external to the Fabric. This attribute may
be used by a client to determine its level of trust in the UTCTime. It is of type TimeSourceEnum.

If a server is unsure if the selected NTP server is within the Fabric, it SHOULD indicate the server is
NonFabric.

#### See

MatterSpecification.v11.Core § 11.16.8.3

#### Inherited from

`StateType.timeSource`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:553](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L553)

***

### trustedTimeNodeId

> **trustedTimeNodeId**: `null` \| [`NodeId`](../../../../../../../datatype/export/README.md#nodeid)

The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time
sync sources and may be used as the primary time source if other time sources are unavailable. See
Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It
SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is
available, the commissioner may set this value to null.

#### See

MatterSpecification.v11.Core § 11.16.8.5

#### Inherited from

`StateType.trustedTimeNodeId`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:564](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L564)

***

### utcTime

> **utcTime**: `null` \| `number` \| `bigint`

If the server has achieved time synchronization, this shall indicate the current time as a UTC epoch-us
(Epoch Time in Microseconds).

If the server has not achieved time synchronization, this shall be null. This attribute may be set when
a Section 11.16.9.1, “SetUtcTime Command” is received.

#### See

MatterSpecification.v11.Core § 11.16.8.1

#### Inherited from

`StateType.utcTime`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:533](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L533)
