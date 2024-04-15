[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [EthernetNetworkDiagnostics](../modules/cluster_export.EthernetNetworkDiagnostics.md) / Feature

# Enumeration: Feature

[cluster/export](../modules/cluster_export.md).[EthernetNetworkDiagnostics](../modules/cluster_export.EthernetNetworkDiagnostics.md).Feature

These are optional features supported by EthernetNetworkDiagnosticsCluster.

**`See`**

MatterSpecification.v11.Core § 11.15.4

## Table of contents

### Enumeration Members

- [ErrorCounts](cluster_export.EthernetNetworkDiagnostics.Feature.md#errorcounts)
- [PacketCounts](cluster_export.EthernetNetworkDiagnostics.Feature.md#packetcounts)

## Enumeration Members

### ErrorCounts

• **ErrorCounts** = ``"ErrorCounts"``

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the ethernet interface.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:177](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L177)

___

### PacketCounts

• **PacketCounts** = ``"PacketCounts"``

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the ethernet interface.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:169](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L169)
