[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TimeSync](../modules/cluster_export.TimeSync.md) / TimeSource

# Enumeration: TimeSource

[cluster/export](../modules/cluster_export.md).[TimeSync](../modules/cluster_export.TimeSync.md).TimeSource

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.2

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

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:86](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L86)

___

### CloudSource

• **CloudSource** = ``14``

Time synchronization comes from a vendor cloud-based source (e.g. "Date" header in authenticated HTTPS
connection).

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:147](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L147)

___

### FabricNtp

• **FabricNtp** = ``7``

NTP from a servers within the Fabric. None of the servers used NTS.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:111](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L111)

___

### FabricNtpNts

• **FabricNtpNts** = ``12``

NTP from a server within the Fabric. NTS is used on at least one server.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:136](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L136)

___

### FabricSntp

• **FabricSntp** = ``6``

SNTP from a server within the Fabric. NTS is not used.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:106](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L106)

___

### FabricSntpNts

• **FabricSntpNts** = ``11``

SNTP from a server within the Fabric. NTS is used.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:131](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L131)

___

### Gnss

• **Gnss** = ``16``

Time synchronization comes from a GNSS source.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:157](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L157)

___

### MixedNtp

• **MixedNtp** = ``8``

NTP from multiple servers on Fabric and external. None of the servers used NTS.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:116](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L116)

___

### MixedNtpNts

• **MixedNtpNts** = ``13``

NTP from multiple servers on the Fabric and external. NTS is used on at least one server.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:141](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L141)

___

### NodeTimeCluster

• **NodeTimeCluster** = ``3``

Synchronized time by querying the Time Cluster of another Node.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:91](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L91)

___

### NonFabricNtp

• **NonFabricNtp** = ``5``

NTP from servers not in the Fabric. None of the servers used NTS.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:101](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L101)

___

### NonFabricNtpNts

• **NonFabricNtpNts** = ``10``

NTP from servers not in the Fabric. NTS is used on at least one server.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:126](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L126)

___

### NonFabricSntp

• **NonFabricSntp** = ``4``

SNTP from a server not in the Fabric. NTS is not used.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:96](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L96)

___

### NonFabricSntpNts

• **NonFabricSntpNts** = ``9``

SNTP from a server not in the Fabric. NTS is used.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:121](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L121)

___

### None

• **None** = ``0``

Server is not currently synchronized with a UTC Time source.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:76](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L76)

___

### Ptp

• **Ptp** = ``15``

Time synchronization comes from PTP.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:152](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L152)

___

### Unknown

• **Unknown** = ``1``

Server uses an unlisted time source.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:81](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L81)
