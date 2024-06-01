[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [TimeSync](../README.md) / TimeSource

# Enumeration: TimeSource

## See

MatterSpecification.v11.Core § 11.16.6.2

## Enumeration Members

### Admin

> **Admin**: `2`

Server received time from the Section 11.16.9.1, “SetUtcTime Command”.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L183)

***

### CloudSource

> **CloudSource**: `14`

Time synchronization comes from a vendor cloud-based source (e.g. "Date" header in authenticated HTTPS
connection).

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L244)

***

### FabricNtp

> **FabricNtp**: `7`

NTP from a servers within the Fabric. None of the servers used NTS.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L208)

***

### FabricNtpNts

> **FabricNtpNts**: `12`

NTP from a server within the Fabric. NTS is used on at least one server.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:233](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L233)

***

### FabricSntp

> **FabricSntp**: `6`

SNTP from a server within the Fabric. NTS is not used.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L203)

***

### FabricSntpNts

> **FabricSntpNts**: `11`

SNTP from a server within the Fabric. NTS is used.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:228](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L228)

***

### Gnss

> **Gnss**: `16`

Time synchronization comes from a GNSS source.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:254](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L254)

***

### MixedNtp

> **MixedNtp**: `8`

NTP from multiple servers on Fabric and external. None of the servers used NTS.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L213)

***

### MixedNtpNts

> **MixedNtpNts**: `13`

NTP from multiple servers on the Fabric and external. NTS is used on at least one server.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:238](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L238)

***

### NodeTimeCluster

> **NodeTimeCluster**: `3`

Synchronized time by querying the Time Cluster of another Node.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L188)

***

### NonFabricNtp

> **NonFabricNtp**: `5`

NTP from servers not in the Fabric. None of the servers used NTS.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L198)

***

### NonFabricNtpNts

> **NonFabricNtpNts**: `10`

NTP from servers not in the Fabric. NTS is used on at least one server.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L223)

***

### NonFabricSntp

> **NonFabricSntp**: `4`

SNTP from a server not in the Fabric. NTS is not used.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:193](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L193)

***

### NonFabricSntpNts

> **NonFabricSntpNts**: `9`

SNTP from a server not in the Fabric. NTS is used.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L218)

***

### None

> **None**: `0`

Server is not currently synchronized with a UTC Time source.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L173)

***

### Ptp

> **Ptp**: `15`

Time synchronization comes from PTP.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L249)

***

### Unknown

> **Unknown**: `1`

Server uses an unlisted time source.

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L178)
