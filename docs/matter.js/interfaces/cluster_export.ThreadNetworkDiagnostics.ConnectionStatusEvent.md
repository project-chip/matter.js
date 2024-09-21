[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md) / ConnectionStatusEvent

# Interface: ConnectionStatusEvent

[cluster/export](../modules/cluster_export.md).[ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md).ConnectionStatusEvent

Body of the ThreadNetworkDiagnostics connectionStatus event

**`See`**

MatterSpecification.v11.Core § 11.13.8.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvConnectionStatusEvent`](../modules/cluster_export.ThreadNetworkDiagnostics.md#tlvconnectionstatusevent)\>

  ↳ **`ConnectionStatusEvent`**

## Table of contents

### Properties

- [connectionStatus](cluster_export.ThreadNetworkDiagnostics.ConnectionStatusEvent.md#connectionstatus)

## Properties

### connectionStatus

• **connectionStatus**: [`ConnectionStatus`](../enums/cluster_export.ThreadNetworkDiagnostics.ConnectionStatus.md)

#### Inherited from

TypeFromSchema.connectionStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:448](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L448)
