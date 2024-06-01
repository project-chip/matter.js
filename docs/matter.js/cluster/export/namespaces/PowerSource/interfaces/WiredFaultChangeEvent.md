[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [PowerSource](../README.md) / WiredFaultChangeEvent

# Interface: WiredFaultChangeEvent

Body of the PowerSource wiredFaultChange event

## See

MatterSpecification.v11.Core § 11.7.7.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvWiredFaultChangeEvent`](../README.md#tlvwiredfaultchangeevent)\>

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

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L77)

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

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L85)
