[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [PowerSource](../README.md) / BatFaultChangeEvent

# Interface: BatFaultChangeEvent

Body of the PowerSource batFaultChange event

## See

MatterSpecification.v11.Core § 11.7.7.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvBatFaultChangeEvent`](../README.md#tlvbatfaultchangeevent)\>

## Properties

### current

> **current**: [`BatFault`](../enumerations/BatFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.7.6.19, “ActiveBatFaults
Attribute”.

#### See

MatterSpecification.v11.Core § 11.7.7.2.1

#### Inherited from

`TypeFromSchema.current`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:138

***

### previous

> **previous**: [`BatFault`](../enumerations/BatFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.19,
“ActiveBatFaults Attribute”.

#### See

MatterSpecification.v11.Core § 11.7.7.2.2

#### Inherited from

`TypeFromSchema.previous`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:145
