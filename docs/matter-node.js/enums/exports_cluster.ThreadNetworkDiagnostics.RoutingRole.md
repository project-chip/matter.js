[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md) / RoutingRole

# Enumeration: RoutingRole

[exports/cluster](../modules/exports_cluster.md).[ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md).RoutingRole

**`See`**

MatterCoreSpecificationV1_1 § 11.13.5.3

## Table of contents

### Enumeration Members

- [EndDevice](exports_cluster.ThreadNetworkDiagnostics.RoutingRole.md#enddevice)
- [Leader](exports_cluster.ThreadNetworkDiagnostics.RoutingRole.md#leader)
- [Reed](exports_cluster.ThreadNetworkDiagnostics.RoutingRole.md#reed)
- [Router](exports_cluster.ThreadNetworkDiagnostics.RoutingRole.md#router)
- [SleepyEndDevice](exports_cluster.ThreadNetworkDiagnostics.RoutingRole.md#sleepyenddevice)
- [Unassigned](exports_cluster.ThreadNetworkDiagnostics.RoutingRole.md#unassigned)
- [Unspecified](exports_cluster.ThreadNetworkDiagnostics.RoutingRole.md#unspecified)

## Enumeration Members

### EndDevice

• **EndDevice** = ``3``

The Node acts as an End Device without RX- off-when-idle sleepy radio behavior.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:30

___

### Leader

• **Leader** = ``6``

The Node acts as a Leader Device.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:42

___

### Reed

• **Reed** = ``4``

The Node acts as an Router Eligible End Device.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:34

___

### Router

• **Router** = ``5``

The Node acts as a Router Device.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:38

___

### SleepyEndDevice

• **SleepyEndDevice** = ``2``

The Node acts as a Sleepy End Device with RX-off-when-idle sleepy radio behavior.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:26

___

### Unassigned

• **Unassigned** = ``1``

The Node does not currently have a role as a result of the Thread interface not currently being configured
or operational.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:22

___

### Unspecified

• **Unspecified** = ``0``

Unspecified routing role.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:17
