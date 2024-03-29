[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md) / Feature

# Enumeration: Feature

[cluster/export](../modules/cluster_export.md).[ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md).Feature

These are optional features supported by ThreadNetworkDiagnosticsCluster.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.13.4

## Table of contents

### Enumeration Members

- [ErrorCounts](cluster_export.ThreadNetworkDiagnostics.Feature.md#errorcounts)
- [MacCounts](cluster_export.ThreadNetworkDiagnostics.Feature.md#maccounts)
- [MleCounts](cluster_export.ThreadNetworkDiagnostics.Feature.md#mlecounts)
- [PacketCounts](cluster_export.ThreadNetworkDiagnostics.Feature.md#packetcounts)

## Enumeration Members

### ErrorCounts

• **ErrorCounts** = ``"ErrorCounts"``

ErrorCounts

Server supports the counts for the number of errors that have occurred during the reception and transmission
of packets on the Thread interface.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:928](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L928)

___

### MacCounts

• **MacCounts** = ``"MacCounts"``

MacCounts

Server supports the counts for various MAC layer happenings.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:942](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L942)

___

### MleCounts

• **MleCounts** = ``"MleCounts"``

MleCounts

Server supports the counts for various MLE layer happenings.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:935](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L935)

___

### PacketCounts

• **PacketCounts** = ``"PacketCounts"``

PacketCounts

Server supports the counts for the number of received and transmitted packets on the Thread interface.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:920](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L920)
