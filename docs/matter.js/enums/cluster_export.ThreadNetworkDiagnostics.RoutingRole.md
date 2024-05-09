[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md) / RoutingRole

# Enumeration: RoutingRole

[cluster/export](../modules/cluster_export.md).[ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md).RoutingRole

**`See`**

MatterSpecification.v11.Core § 11.13.5.3

## Table of contents

### Enumeration Members

- [EndDevice](cluster_export.ThreadNetworkDiagnostics.RoutingRole.md#enddevice)
- [Leader](cluster_export.ThreadNetworkDiagnostics.RoutingRole.md#leader)
- [Reed](cluster_export.ThreadNetworkDiagnostics.RoutingRole.md#reed)
- [Router](cluster_export.ThreadNetworkDiagnostics.RoutingRole.md#router)
- [SleepyEndDevice](cluster_export.ThreadNetworkDiagnostics.RoutingRole.md#sleepyenddevice)
- [Unassigned](cluster_export.ThreadNetworkDiagnostics.RoutingRole.md#unassigned)
- [Unspecified](cluster_export.ThreadNetworkDiagnostics.RoutingRole.md#unspecified)

## Enumeration Members

### EndDevice

• **EndDevice** = ``3``

The Node acts as an End Device without RX- off-when-idle sleepy radio behavior.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L55)

___

### Leader

• **Leader** = ``6``

The Node acts as a Leader Device.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L70)

___

### Reed

• **Reed** = ``4``

The Node acts as an Router Eligible End Device.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L60)

___

### Router

• **Router** = ``5``

The Node acts as a Router Device.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L65)

___

### SleepyEndDevice

• **SleepyEndDevice** = ``2``

The Node acts as a Sleepy End Device with RX-off-when-idle sleepy radio behavior.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L50)

___

### Unassigned

• **Unassigned** = ``1``

The Node does not currently have a role as a result of the Thread interface not currently being configured
or operational.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L45)

___

### Unspecified

• **Unspecified** = ``0``

Unspecified routing role.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L39)
