[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md) / NetworkFaultChangeEvent

# Interface: NetworkFaultChangeEvent

[exports/cluster](../modules/exports_cluster.md).[ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md).NetworkFaultChangeEvent

Body of the ThreadNetworkDiagnostics networkFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.13.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvNetworkFaultChangeEvent`](../modules/exports_cluster.ThreadNetworkDiagnostics.md#tlvnetworkfaultchangeevent)\>

  ↳ **`NetworkFaultChangeEvent`**

## Table of contents

### Properties

- [current](exports_cluster.ThreadNetworkDiagnostics.NetworkFaultChangeEvent.md#current)
- [previous](exports_cluster.ThreadNetworkDiagnostics.NetworkFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`NetworkFault`](../enums/exports_cluster.ThreadNetworkDiagnostics.NetworkFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.13.5.1,
“NetworkFaultEnum”.

**`See`**

MatterSpecification.v11.Core § 11.13.8.1.1

#### Inherited from

TypeFromSchema.current

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:396

___

### previous

• **previous**: [`NetworkFault`](../enums/exports_cluster.ThreadNetworkDiagnostics.NetworkFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.13.5.1,
“NetworkFaultEnum”.

**`See`**

MatterSpecification.v11.Core § 11.13.8.1.2

#### Inherited from

TypeFromSchema.previous

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:403
