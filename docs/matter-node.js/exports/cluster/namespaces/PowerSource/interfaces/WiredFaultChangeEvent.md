[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [PowerSource](../README.md) / WiredFaultChangeEvent

# Interface: WiredFaultChangeEvent

Body of the PowerSource wiredFaultChange event

## See

MatterSpecification.v11.Core § 11.7.7.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvWiredFaultChangeEvent`](../README.md#tlvwiredfaultchangeevent)\>

## Properties

### current

> **current**: [`WiredFault`](../enumerations/WiredFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.7.6.11,
“ActiveWiredFaults Attribute”.

#### See

MatterSpecification.v11.Core § 11.7.7.1.1

#### Inherited from

`TypeFromSchema.current`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:55

***

### previous

> **previous**: [`WiredFault`](../enumerations/WiredFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.11,
“ActiveWiredFaults Attribute”.

#### See

MatterSpecification.v11.Core § 11.7.7.1.2

#### Inherited from

`TypeFromSchema.previous`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:62
