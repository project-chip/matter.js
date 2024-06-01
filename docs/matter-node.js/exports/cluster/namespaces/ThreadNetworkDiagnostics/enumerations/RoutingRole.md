[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / RoutingRole

# Enumeration: RoutingRole

## See

MatterSpecification.v11.Core § 11.13.5.3

## Enumeration Members

### EndDevice

> **EndDevice**: `3`

The Node acts as an End Device without RX- off-when-idle sleepy radio behavior.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:33

***

### Leader

> **Leader**: `6`

The Node acts as a Leader Device.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:45

***

### Reed

> **Reed**: `4`

The Node acts as an Router Eligible End Device.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:37

***

### Router

> **Router**: `5`

The Node acts as a Router Device.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:41

***

### SleepyEndDevice

> **SleepyEndDevice**: `2`

The Node acts as a Sleepy End Device with RX-off-when-idle sleepy radio behavior.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:29

***

### Unassigned

> **Unassigned**: `1`

The Node does not currently have a role as a result of the Thread interface not currently being configured
or operational.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:25

***

### Unspecified

> **Unspecified**: `0`

Unspecified routing role.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:20
