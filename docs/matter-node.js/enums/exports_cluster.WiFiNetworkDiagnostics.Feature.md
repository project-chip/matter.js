[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [WiFiNetworkDiagnostics](../modules/exports_cluster.WiFiNetworkDiagnostics.md) / Feature

# Enumeration: Feature

[exports/cluster](../modules/exports_cluster.md).[WiFiNetworkDiagnostics](../modules/exports_cluster.WiFiNetworkDiagnostics.md).Feature

These are optional features supported by WiFiNetworkDiagnosticsCluster.

**`See`**

MatterCoreSpecificationV1_1 § 11.14.4

## Table of contents

### Enumeration Members

- [ErrorCounts](exports_cluster.WiFiNetworkDiagnostics.Feature.md#errorcounts)
- [PacketCounts](exports_cluster.WiFiNetworkDiagnostics.Feature.md#packetcounts)

## Enumeration Members

### ErrorCounts

• **ErrorCounts** = ``"ErrorCounts"``

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the Wi-Fi interface.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:171

___

### PacketCounts

• **PacketCounts** = ``"PacketCounts"``

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the Wi-Fi interface.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:164
