[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md) / Feature

# Enumeration: Feature

[exports/cluster](../modules/exports_cluster.md).[ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md).Feature

These are optional features supported by ThreadNetworkDiagnosticsCluster.

**`See`**

MatterCoreSpecificationV1_1 § 11.13.4

## Table of contents

### Enumeration Members

- [ErrorCounts](exports_cluster.ThreadNetworkDiagnostics.Feature.md#errorcounts)
- [MacCounts](exports_cluster.ThreadNetworkDiagnostics.Feature.md#maccounts)
- [MleCounts](exports_cluster.ThreadNetworkDiagnostics.Feature.md#mlecounts)
- [PacketCounts](exports_cluster.ThreadNetworkDiagnostics.Feature.md#packetcounts)

## Enumeration Members

### ErrorCounts

• **ErrorCounts** = ``"ErrorCounts"``

ErrorCounts

Server supports the counts for the number of errors that have occurred during the reception and transmission
of packets on the Thread interface.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:388

___

### MacCounts

• **MacCounts** = ``"MacCounts"``

MacCounts

Server supports the counts for various MAC layer happenings.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:400

___

### MleCounts

• **MleCounts** = ``"MleCounts"``

MleCounts

Server supports the counts for various MLE layer happenings.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:394

___

### PacketCounts

• **PacketCounts** = ``"PacketCounts"``

PacketCounts

Server supports the counts for the number of received and transmitted packets on the Thread interface.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:381
