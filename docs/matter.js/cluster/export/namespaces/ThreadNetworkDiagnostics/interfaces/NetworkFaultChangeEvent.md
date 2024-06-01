[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / NetworkFaultChangeEvent

# Interface: NetworkFaultChangeEvent

Body of the ThreadNetworkDiagnostics networkFaultChange event

## See

MatterSpecification.v11.Core § 11.13.8.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvNetworkFaultChangeEvent`](../README.md#tlvnetworkfaultchangeevent)\>

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:469](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L469)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:477](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L477)
