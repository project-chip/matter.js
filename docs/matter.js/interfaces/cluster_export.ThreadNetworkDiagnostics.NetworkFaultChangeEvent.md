[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md) / NetworkFaultChangeEvent

# Interface: NetworkFaultChangeEvent

[cluster/export](../modules/cluster_export.md).[ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md).NetworkFaultChangeEvent

Body of the ThreadNetworkDiagnostics networkFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.13.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvNetworkFaultChangeEvent`](../modules/cluster_export.ThreadNetworkDiagnostics.md#tlvnetworkfaultchangeevent)\>

  ↳ **`NetworkFaultChangeEvent`**

## Table of contents

### Properties

- [current](cluster_export.ThreadNetworkDiagnostics.NetworkFaultChangeEvent.md#current)
- [previous](cluster_export.ThreadNetworkDiagnostics.NetworkFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`NetworkFault`](../enums/cluster_export.ThreadNetworkDiagnostics.NetworkFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.13.5.1,
“NetworkFaultEnum”.

**`See`**

MatterSpecification.v11.Core § 11.13.8.1.1

#### Inherited from

TypeFromSchema.current

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:464](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L464)

___

### previous

• **previous**: [`NetworkFault`](../enums/cluster_export.ThreadNetworkDiagnostics.NetworkFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.13.5.1,
“NetworkFaultEnum”.

**`See`**

MatterSpecification.v11.Core § 11.13.8.1.2

#### Inherited from

TypeFromSchema.previous

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:472](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L472)
