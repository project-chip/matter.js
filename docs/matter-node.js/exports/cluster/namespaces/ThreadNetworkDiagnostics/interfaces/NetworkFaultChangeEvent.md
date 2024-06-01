[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / NetworkFaultChangeEvent

# Interface: NetworkFaultChangeEvent

Body of the ThreadNetworkDiagnostics networkFaultChange event

## See

MatterSpecification.v11.Core § 11.13.8.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvNetworkFaultChangeEvent`](../README.md#tlvnetworkfaultchangeevent)\>

## Properties

### current

> **current**: [`NetworkFault`](../enumerations/NetworkFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.13.5.1,
“NetworkFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.13.8.1.1

#### Inherited from

`TypeFromSchema.current`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:400

***

### previous

> **previous**: [`NetworkFault`](../enumerations/NetworkFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.13.5.1,
“NetworkFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.13.8.1.2

#### Inherited from

`TypeFromSchema.previous`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:407
