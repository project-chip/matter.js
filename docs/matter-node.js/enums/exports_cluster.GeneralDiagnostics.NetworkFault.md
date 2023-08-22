[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md) / NetworkFault

# Enumeration: NetworkFault

[exports/cluster](../modules/exports_cluster.md).[GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md).NetworkFault

**`See`**

MatterCoreSpecificationV1_1 § 11.11.4.3

## Table of contents

### Enumeration Members

- [ConnectionFailed](exports_cluster.GeneralDiagnostics.NetworkFault.md#connectionfailed)
- [HardwareFailure](exports_cluster.GeneralDiagnostics.NetworkFault.md#hardwarefailure)
- [NetworkJammed](exports_cluster.GeneralDiagnostics.NetworkFault.md#networkjammed)
- [Unspecified](exports_cluster.GeneralDiagnostics.NetworkFault.md#unspecified)

## Enumeration Members

### ConnectionFailed

• **ConnectionFailed** = ``3``

The Node has encountered a network fault as a result of a failure to establish a connection.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:234

___

### HardwareFailure

• **HardwareFailure** = ``1``

The Node has encountered a network fault as a result of a hardware failure.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:226

___

### NetworkJammed

• **NetworkJammed** = ``2``

The Node has encountered a network fault as a result of a jammed network.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:230

___

### Unspecified

• **Unspecified** = ``0``

The Node has encountered an unspecified fault.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:222
