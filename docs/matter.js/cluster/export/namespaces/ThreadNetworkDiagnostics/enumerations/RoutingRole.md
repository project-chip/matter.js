[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / RoutingRole

# Enumeration: RoutingRole

## See

MatterSpecification.v11.Core § 11.13.5.3

## Enumeration Members

### EndDevice

> **EndDevice**: `3`

The Node acts as an End Device without RX- off-when-idle sleepy radio behavior.

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L55)

***

### Leader

> **Leader**: `6`

The Node acts as a Leader Device.

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L70)

***

### Reed

> **Reed**: `4`

The Node acts as an Router Eligible End Device.

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L60)

***

### Router

> **Router**: `5`

The Node acts as a Router Device.

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L65)

***

### SleepyEndDevice

> **SleepyEndDevice**: `2`

The Node acts as a Sleepy End Device with RX-off-when-idle sleepy radio behavior.

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L50)

***

### Unassigned

> **Unassigned**: `1`

The Node does not currently have a role as a result of the Thread interface not currently being configured
or operational.

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L45)

***

### Unspecified

> **Unspecified**: `0`

Unspecified routing role.

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L39)
