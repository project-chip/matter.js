[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/client-monitoring/export

# behavior/definitions/client-monitoring/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ClientMonitoringBehavior](namespaces/ClientMonitoringBehavior/README.md)
- [ClientMonitoringInterface](namespaces/ClientMonitoringInterface/README.md)

### Classes

- [ClientMonitoringServer](classes/ClientMonitoringServer.md)

### Interfaces

- [ClientMonitoringBehavior](interfaces/ClientMonitoringBehavior.md)

## Type Aliases

### ClientMonitoringInterface

> **ClientMonitoringInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts#L16)

***

### RegisterClientMonitoringRequest

> **RegisterClientMonitoringRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRegisterClientMonitoringRequest`](../../../../cluster/export/namespaces/ClientMonitoring/README.md#tlvregisterclientmonitoringrequest)\>

#### Source

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts#L13)

***

### UnregisterClientMonitoringRequest

> **UnregisterClientMonitoringRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvUnregisterClientMonitoringRequest`](../../../../cluster/export/namespaces/ClientMonitoring/README.md#tlvunregisterclientmonitoringrequest)\>

#### Source

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts#L14)

## Variables

### ClientMonitoringBehavior

> `const` **ClientMonitoringBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/ClientMonitoring/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ClientMonitoringInterface`](README.md#clientmonitoringinterface)\>, [`ClientMonitoringInterface`](README.md#clientmonitoringinterface)\>

ClientMonitoringBehavior is the base class for objects that support interaction with ClientMonitoring.Cluster.

#### Source

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringBehavior.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringBehavior.ts#L17)
