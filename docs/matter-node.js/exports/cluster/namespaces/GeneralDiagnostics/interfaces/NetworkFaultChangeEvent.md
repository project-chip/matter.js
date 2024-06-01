[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GeneralDiagnostics](../README.md) / NetworkFaultChangeEvent

# Interface: NetworkFaultChangeEvent

Body of the GeneralDiagnostics networkFaultChange event

## See

MatterSpecification.v11.Core § 11.11.8.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvNetworkFaultChangeEvent`](../README.md#tlvnetworkfaultchangeevent)\>

## Properties

### current

> **current**: [`NetworkFault`](../enumerations/NetworkFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.11.4.3,
“NetworkFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.3.1

#### Inherited from

`TypeFromSchema.current`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:373

***

### previous

> **previous**: [`NetworkFault`](../enumerations/NetworkFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.11.4.3,
“NetworkFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.3.2

#### Inherited from

`TypeFromSchema.previous`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:380
