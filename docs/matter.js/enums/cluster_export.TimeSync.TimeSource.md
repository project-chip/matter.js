[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TimeSync](../modules/cluster_export.TimeSync.md) / TimeSource

# Enumeration: TimeSource

[cluster/export](../modules/cluster_export.md).[TimeSync](../modules/cluster_export.TimeSync.md).TimeSource

**`See`**

MatterSpecification.v11.Core § 11.16.6.2

## Table of contents

### Enumeration Members

- [Admin](cluster_export.TimeSync.TimeSource.md#admin)
- [CloudSource](cluster_export.TimeSync.TimeSource.md#cloudsource)
- [FabricNtp](cluster_export.TimeSync.TimeSource.md#fabricntp)
- [FabricNtpNts](cluster_export.TimeSync.TimeSource.md#fabricntpnts)
- [FabricSntp](cluster_export.TimeSync.TimeSource.md#fabricsntp)
- [FabricSntpNts](cluster_export.TimeSync.TimeSource.md#fabricsntpnts)
- [Gnss](cluster_export.TimeSync.TimeSource.md#gnss)
- [MixedNtp](cluster_export.TimeSync.TimeSource.md#mixedntp)
- [MixedNtpNts](cluster_export.TimeSync.TimeSource.md#mixedntpnts)
- [NodeTimeCluster](cluster_export.TimeSync.TimeSource.md#nodetimecluster)
- [NonFabricNtp](cluster_export.TimeSync.TimeSource.md#nonfabricntp)
- [NonFabricNtpNts](cluster_export.TimeSync.TimeSource.md#nonfabricntpnts)
- [NonFabricSntp](cluster_export.TimeSync.TimeSource.md#nonfabricsntp)
- [NonFabricSntpNts](cluster_export.TimeSync.TimeSource.md#nonfabricsntpnts)
- [None](cluster_export.TimeSync.TimeSource.md#none)
- [Ptp](cluster_export.TimeSync.TimeSource.md#ptp)
- [Unknown](cluster_export.TimeSync.TimeSource.md#unknown)

## Enumeration Members

### Admin

• **Admin** = ``2``

Server received time from the Section 11.16.9.1, “SetUtcTime Command”.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L172)

___

### CloudSource

• **CloudSource** = ``14``

Time synchronization comes from a vendor cloud-based source (e.g. "Date" header in authenticated HTTPS
connection).

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:233](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L233)

___

### FabricNtp

• **FabricNtp** = ``7``

NTP from a servers within the Fabric. None of the servers used NTS.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L197)

___

### FabricNtpNts

• **FabricNtpNts** = ``12``

NTP from a server within the Fabric. NTS is used on at least one server.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:222](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L222)

___

### FabricSntp

• **FabricSntp** = ``6``

SNTP from a server within the Fabric. NTS is not used.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L192)

___

### FabricSntpNts

• **FabricSntpNts** = ``11``

SNTP from a server within the Fabric. NTS is used.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L217)

___

### Gnss

• **Gnss** = ``16``

Time synchronization comes from a GNSS source.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:243](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L243)

___

### MixedNtp

• **MixedNtp** = ``8``

NTP from multiple servers on Fabric and external. None of the servers used NTS.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L202)

___

### MixedNtpNts

• **MixedNtpNts** = ``13``

NTP from multiple servers on the Fabric and external. NTS is used on at least one server.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L227)

___

### NodeTimeCluster

• **NodeTimeCluster** = ``3``

Synchronized time by querying the Time Cluster of another Node.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:177](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L177)

___

### NonFabricNtp

• **NonFabricNtp** = ``5``

NTP from servers not in the Fabric. None of the servers used NTS.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:187](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L187)

___

### NonFabricNtpNts

• **NonFabricNtpNts** = ``10``

NTP from servers not in the Fabric. NTS is used on at least one server.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L212)

___

### NonFabricSntp

• **NonFabricSntp** = ``4``

SNTP from a server not in the Fabric. NTS is not used.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:182](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L182)

___

### NonFabricSntpNts

• **NonFabricSntpNts** = ``9``

SNTP from a server not in the Fabric. NTS is used.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L207)

___

### None

• **None** = ``0``

Server is not currently synchronized with a UTC Time source.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:162](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L162)

___

### Ptp

• **Ptp** = ``15``

Time synchronization comes from PTP.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:238](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L238)

___

### Unknown

• **Unknown** = ``1``

Server uses an unlisted time source.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L167)
