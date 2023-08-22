[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [TimeSync](../modules/exports_cluster.TimeSync.md) / Granularity

# Enumeration: Granularity

[exports/cluster](../modules/exports_cluster.md).[TimeSync](../modules/exports_cluster.TimeSync.md).Granularity

**`See`**

MatterCoreSpecificationV1_1 § 11.16.6.1

## Table of contents

### Enumeration Members

- [MicrosecondsGranularity](exports_cluster.TimeSync.Granularity.md#microsecondsgranularity)
- [MillisecondsGranularity](exports_cluster.TimeSync.Granularity.md#millisecondsgranularity)
- [MinutesGranularity](exports_cluster.TimeSync.Granularity.md#minutesgranularity)
- [NoTimeGranularity](exports_cluster.TimeSync.Granularity.md#notimegranularity)
- [SecondsGranularity](exports_cluster.TimeSync.Granularity.md#secondsgranularity)

## Enumeration Members

### MicrosecondsGranularity

• **MicrosecondsGranularity** = ``4``

This indicates the server is synchronized to an upstream source using a highly precise time-synchronization
protocol such as PTP, or has built-in GNSS. UTC time is accurate to ± 10 μs.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:39

___

### MillisecondsGranularity

• **MillisecondsGranularity** = ``3``

This indicates the server is synchronized to an upstream source using high resolution time-synchronization
protocol such as NTP, or has built-in GNSS with some amount of jitter applying its GNSS timestamp. UTC Time
is accurate to ± 50ms.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:34

___

### MinutesGranularity

• **MinutesGranularity** = ``1``

This indicates the server was synchronized to an upstream source in the past, but sufficient clock drift has
occurred such that the clock error is now > 5 seconds.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:23

___

### NoTimeGranularity

• **NoTimeGranularity** = ``0``

This indicates that the server is not currently synchronized with a UTC Time source and its clock is based
on the Last Known Good UTC Time only.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:18

___

### SecondsGranularity

• **SecondsGranularity** = ``2``

This indicates the server is synchronized to an upstream source using a low resolution protocol. UTC Time is
accurate to ± 5 seconds.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:28
