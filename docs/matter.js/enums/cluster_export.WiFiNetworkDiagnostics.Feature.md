[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [WiFiNetworkDiagnostics](../modules/cluster_export.WiFiNetworkDiagnostics.md) / Feature

# Enumeration: Feature

[cluster/export](../modules/cluster_export.md).[WiFiNetworkDiagnostics](../modules/cluster_export.WiFiNetworkDiagnostics.md).Feature

These are optional features supported by WiFiNetworkDiagnosticsCluster.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.14.4

## Table of contents

### Enumeration Members

- [ErrorCounts](cluster_export.WiFiNetworkDiagnostics.Feature.md#errorcounts)
- [PacketCounts](cluster_export.WiFiNetworkDiagnostics.Feature.md#packetcounts)

## Enumeration Members

### ErrorCounts

• **ErrorCounts** = ``"ErrorCounts"``

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the Wi-Fi interface.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:209](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L209)

___

### PacketCounts

• **PacketCounts** = ``"PacketCounts"``

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the Wi-Fi interface.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:201](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L201)
