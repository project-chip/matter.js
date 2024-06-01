[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [TimeSync](../README.md) / TimeSource

# Enumeration: TimeSource

## See

MatterSpecification.v11.Core § 11.16.6.2

## Enumeration Members

### Admin

> **Admin**: `2`

Server received time from the Section 11.16.9.1, “SetUtcTime Command”.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:146

***

### CloudSource

> **CloudSource**: `14`

Time synchronization comes from a vendor cloud-based source (e.g. "Date" header in authenticated HTTPS
connection).

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:195

***

### FabricNtp

> **FabricNtp**: `7`

NTP from a servers within the Fabric. None of the servers used NTS.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:166

***

### FabricNtpNts

> **FabricNtpNts**: `12`

NTP from a server within the Fabric. NTS is used on at least one server.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:186

***

### FabricSntp

> **FabricSntp**: `6`

SNTP from a server within the Fabric. NTS is not used.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:162

***

### FabricSntpNts

> **FabricSntpNts**: `11`

SNTP from a server within the Fabric. NTS is used.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:182

***

### Gnss

> **Gnss**: `16`

Time synchronization comes from a GNSS source.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:203

***

### MixedNtp

> **MixedNtp**: `8`

NTP from multiple servers on Fabric and external. None of the servers used NTS.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:170

***

### MixedNtpNts

> **MixedNtpNts**: `13`

NTP from multiple servers on the Fabric and external. NTS is used on at least one server.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:190

***

### NodeTimeCluster

> **NodeTimeCluster**: `3`

Synchronized time by querying the Time Cluster of another Node.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:150

***

### NonFabricNtp

> **NonFabricNtp**: `5`

NTP from servers not in the Fabric. None of the servers used NTS.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:158

***

### NonFabricNtpNts

> **NonFabricNtpNts**: `10`

NTP from servers not in the Fabric. NTS is used on at least one server.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:178

***

### NonFabricSntp

> **NonFabricSntp**: `4`

SNTP from a server not in the Fabric. NTS is not used.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:154

***

### NonFabricSntpNts

> **NonFabricSntpNts**: `9`

SNTP from a server not in the Fabric. NTS is used.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:174

***

### None

> **None**: `0`

Server is not currently synchronized with a UTC Time source.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:138

***

### Ptp

> **Ptp**: `15`

Time synchronization comes from PTP.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:199

***

### Unknown

> **Unknown**: `1`

Server uses an unlisted time source.

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:142
