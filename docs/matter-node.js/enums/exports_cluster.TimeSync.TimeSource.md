[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [TimeSync](../modules/exports_cluster.TimeSync.md) / TimeSource

# Enumeration: TimeSource

[exports/cluster](../modules/exports_cluster.md).[TimeSync](../modules/exports_cluster.TimeSync.md).TimeSource

**`See`**

MatterCoreSpecificationV1_1 § 11.16.6.2

## Table of contents

### Enumeration Members

- [Admin](exports_cluster.TimeSync.TimeSource.md#admin)
- [CloudSource](exports_cluster.TimeSync.TimeSource.md#cloudsource)
- [FabricNtp](exports_cluster.TimeSync.TimeSource.md#fabricntp)
- [FabricNtpNts](exports_cluster.TimeSync.TimeSource.md#fabricntpnts)
- [FabricSntp](exports_cluster.TimeSync.TimeSource.md#fabricsntp)
- [FabricSntpNts](exports_cluster.TimeSync.TimeSource.md#fabricsntpnts)
- [Gnss](exports_cluster.TimeSync.TimeSource.md#gnss)
- [MixedNtp](exports_cluster.TimeSync.TimeSource.md#mixedntp)
- [MixedNtpNts](exports_cluster.TimeSync.TimeSource.md#mixedntpnts)
- [NodeTimeCluster](exports_cluster.TimeSync.TimeSource.md#nodetimecluster)
- [NonFabricNtp](exports_cluster.TimeSync.TimeSource.md#nonfabricntp)
- [NonFabricNtpNts](exports_cluster.TimeSync.TimeSource.md#nonfabricntpnts)
- [NonFabricSntp](exports_cluster.TimeSync.TimeSource.md#nonfabricsntp)
- [NonFabricSntpNts](exports_cluster.TimeSync.TimeSource.md#nonfabricsntpnts)
- [None](exports_cluster.TimeSync.TimeSource.md#none)
- [Ptp](exports_cluster.TimeSync.TimeSource.md#ptp)
- [Unknown](exports_cluster.TimeSync.TimeSource.md#unknown)

## Enumeration Members

### Admin

• **Admin** = ``2``

Server received time from the Section 11.16.9.1, “SetUtcTime Command”.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:57

___

### CloudSource

• **CloudSource** = ``14``

Time synchronization comes from a vendor cloud-based source (e.g. "Date" header in authenticated HTTPS
connection).

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:106

___

### FabricNtp

• **FabricNtp** = ``7``

NTP from a servers within the Fabric. None of the servers used NTS.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:77

___

### FabricNtpNts

• **FabricNtpNts** = ``12``

NTP from a server within the Fabric. NTS is used on at least one server.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:97

___

### FabricSntp

• **FabricSntp** = ``6``

SNTP from a server within the Fabric. NTS is not used.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:73

___

### FabricSntpNts

• **FabricSntpNts** = ``11``

SNTP from a server within the Fabric. NTS is used.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:93

___

### Gnss

• **Gnss** = ``16``

Time synchronization comes from a GNSS source.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:114

___

### MixedNtp

• **MixedNtp** = ``8``

NTP from multiple servers on Fabric and external. None of the servers used NTS.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:81

___

### MixedNtpNts

• **MixedNtpNts** = ``13``

NTP from multiple servers on the Fabric and external. NTS is used on at least one server.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:101

___

### NodeTimeCluster

• **NodeTimeCluster** = ``3``

Synchronized time by querying the Time Cluster of another Node.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:61

___

### NonFabricNtp

• **NonFabricNtp** = ``5``

NTP from servers not in the Fabric. None of the servers used NTS.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:69

___

### NonFabricNtpNts

• **NonFabricNtpNts** = ``10``

NTP from servers not in the Fabric. NTS is used on at least one server.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:89

___

### NonFabricSntp

• **NonFabricSntp** = ``4``

SNTP from a server not in the Fabric. NTS is not used.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:65

___

### NonFabricSntpNts

• **NonFabricSntpNts** = ``9``

SNTP from a server not in the Fabric. NTS is used.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:85

___

### None

• **None** = ``0``

Server is not currently synchronized with a UTC Time source.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:49

___

### Ptp

• **Ptp** = ``15``

Time synchronization comes from PTP.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:110

___

### Unknown

• **Unknown** = ``1``

Server uses an unlisted time source.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:53
