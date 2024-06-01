[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [TimeSync](../README.md) / Granularity

# Enumeration: Granularity

## See

MatterSpecification.v11.Core § 11.16.6.1

## Enumeration Members

### MicrosecondsGranularity

> **MicrosecondsGranularity**: `4`

This indicates the server is synchronized to an upstream source using a highly precise time-synchronization
protocol such as PTP, or has built-in GNSS. UTC time is accurate to ± 10 μs.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:163](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L163)

***

### MillisecondsGranularity

> **MillisecondsGranularity**: `3`

This indicates the server is synchronized to an upstream source using high resolution time-synchronization
protocol such as NTP, or has built-in GNSS with some amount of jitter applying its GNSS timestamp. UTC Time
is accurate to ± 50ms.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L157)

***

### MinutesGranularity

> **MinutesGranularity**: `1`

This indicates the server was synchronized to an upstream source in the past, but sufficient clock drift has
occurred such that the clock error is now > 5 seconds.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L144)

***

### NoTimeGranularity

> **NoTimeGranularity**: `0`

This indicates that the server is not currently synchronized with a UTC Time source and its clock is based
on the Last Known Good UTC Time only.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L138)

***

### SecondsGranularity

> **SecondsGranularity**: `2`

This indicates the server is synchronized to an upstream source using a low resolution protocol. UTC Time is
accurate to ± 5 seconds.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L150)
