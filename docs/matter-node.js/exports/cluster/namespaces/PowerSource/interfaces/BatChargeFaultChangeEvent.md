[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [PowerSource](../README.md) / BatChargeFaultChangeEvent

# Interface: BatChargeFaultChangeEvent

Body of the PowerSource batChargeFaultChange event

## See

MatterSpecification.v11.Core § 11.7.7.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvBatChargeFaultChangeEvent`](../README.md#tlvbatchargefaultchangeevent)\>

## Properties

### current

> **current**: [`BatChargeFault`](../enumerations/BatChargeFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.7.6.31,
“ActiveBatChargeFaults Attribute”.

#### See

MatterSpecification.v11.Core § 11.7.7.3.1

#### Inherited from

`TypeFromSchema.current`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:702

***

### previous

> **previous**: [`BatChargeFault`](../enumerations/BatChargeFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.31,
“ActiveBatChargeFaults Attribute”.

#### See

MatterSpecification.v11.Core § 11.7.7.3.2

#### Inherited from

`TypeFromSchema.previous`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:709
