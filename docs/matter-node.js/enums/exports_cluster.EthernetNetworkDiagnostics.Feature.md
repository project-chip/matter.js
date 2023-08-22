[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [EthernetNetworkDiagnostics](../modules/exports_cluster.EthernetNetworkDiagnostics.md) / Feature

# Enumeration: Feature

[exports/cluster](../modules/exports_cluster.md).[EthernetNetworkDiagnostics](../modules/exports_cluster.EthernetNetworkDiagnostics.md).Feature

These are optional features supported by EthernetNetworkDiagnosticsCluster.

**`See`**

MatterCoreSpecificationV1_1 § 11.15.4

## Table of contents

### Enumeration Members

- [ErrorCounts](exports_cluster.EthernetNetworkDiagnostics.Feature.md#errorcounts)
- [PacketCounts](exports_cluster.EthernetNetworkDiagnostics.Feature.md#packetcounts)

## Enumeration Members

### ErrorCounts

• **ErrorCounts** = ``"ErrorCounts"``

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the ethernet interface.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:73

___

### PacketCounts

• **PacketCounts** = ``"PacketCounts"``

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the ethernet interface.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:66
