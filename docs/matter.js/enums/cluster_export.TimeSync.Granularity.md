[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TimeSync](../modules/cluster_export.TimeSync.md) / Granularity

# Enumeration: Granularity

[cluster/export](../modules/cluster_export.md).[TimeSync](../modules/cluster_export.TimeSync.md).Granularity

**`See`**

MatterSpecification.v11.Core § 11.16.6.1

## Table of contents

### Enumeration Members

- [MicrosecondsGranularity](cluster_export.TimeSync.Granularity.md#microsecondsgranularity)
- [MillisecondsGranularity](cluster_export.TimeSync.Granularity.md#millisecondsgranularity)
- [MinutesGranularity](cluster_export.TimeSync.Granularity.md#minutesgranularity)
- [NoTimeGranularity](cluster_export.TimeSync.Granularity.md#notimegranularity)
- [SecondsGranularity](cluster_export.TimeSync.Granularity.md#secondsgranularity)

## Enumeration Members

### MicrosecondsGranularity

• **MicrosecondsGranularity** = ``4``

This indicates the server is synchronized to an upstream source using a highly precise time-synchronization
protocol such as PTP, or has built-in GNSS. UTC time is accurate to ± 10 μs.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:163](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L163)

___

### MillisecondsGranularity

• **MillisecondsGranularity** = ``3``

This indicates the server is synchronized to an upstream source using high resolution time-synchronization
protocol such as NTP, or has built-in GNSS with some amount of jitter applying its GNSS timestamp. UTC Time
is accurate to ± 50ms.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:157](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L157)

___

### MinutesGranularity

• **MinutesGranularity** = ``1``

This indicates the server was synchronized to an upstream source in the past, but sufficient clock drift has
occurred such that the clock error is now > 5 seconds.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:144](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L144)

___

### NoTimeGranularity

• **NoTimeGranularity** = ``0``

This indicates that the server is not currently synchronized with a UTC Time source and its clock is based
on the Last Known Good UTC Time only.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:138](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L138)

___

### SecondsGranularity

• **SecondsGranularity** = ``2``

This indicates the server is synchronized to an upstream source using a low resolution protocol. UTC Time is
accurate to ± 5 seconds.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:150](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L150)
