[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/client-monitoring/export

# Module: behavior/definitions/client-monitoring/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_client_monitoring_export._internal_.md)

### Namespaces

- [ClientMonitoringBehavior](behavior_definitions_client_monitoring_export.ClientMonitoringBehavior.md)
- [ClientMonitoringInterface](behavior_definitions_client_monitoring_export.ClientMonitoringInterface.md)

### Classes

- [ClientMonitoringServer](../classes/behavior_definitions_client_monitoring_export.ClientMonitoringServer.md)

### Interfaces

- [ClientMonitoringBehavior](../interfaces/behavior_definitions_client_monitoring_export.ClientMonitoringBehavior-1.md)

### Type Aliases

- [ClientMonitoringInterface](behavior_definitions_client_monitoring_export.md#clientmonitoringinterface)
- [RegisterClientMonitoringRequest](behavior_definitions_client_monitoring_export.md#registerclientmonitoringrequest)
- [UnregisterClientMonitoringRequest](behavior_definitions_client_monitoring_export.md#unregisterclientmonitoringrequest)

### Variables

- [ClientMonitoringBehavior](behavior_definitions_client_monitoring_export.md#clientmonitoringbehavior)

## Type Aliases

### ClientMonitoringInterface

Ƭ **ClientMonitoringInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_client_monitoring_export.ClientMonitoringInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts#L16)

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts#L24)

___

### RegisterClientMonitoringRequest

Ƭ **RegisterClientMonitoringRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRegisterClientMonitoringRequest`](cluster_export.ClientMonitoring.md#tlvregisterclientmonitoringrequest)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts#L13)

___

### UnregisterClientMonitoringRequest

Ƭ **UnregisterClientMonitoringRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvUnregisterClientMonitoringRequest`](cluster_export.ClientMonitoring.md#tlvunregisterclientmonitoringrequest)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts#L14)

## Variables

### ClientMonitoringBehavior

• `Const` **ClientMonitoringBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ClientMonitoring.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ClientMonitoringInterface`](behavior_definitions_client_monitoring_export.md#clientmonitoringinterface)\>, [`ClientMonitoringInterface`](behavior_definitions_client_monitoring_export.md#clientmonitoringinterface)\>

ClientMonitoringBehavior is the base class for objects that support interaction with ClientMonitoring.Cluster.

#### Defined in

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringBehavior.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringBehavior.ts#L17)

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringBehavior.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringBehavior.ts#L22)

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringBehavior.ts#L24)
