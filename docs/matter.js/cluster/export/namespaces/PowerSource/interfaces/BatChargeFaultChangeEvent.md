[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [PowerSource](../README.md) / BatChargeFaultChangeEvent

# Interface: BatChargeFaultChangeEvent

Body of the PowerSource batChargeFaultChange event

## See

MatterSpecification.v11.Core § 11.7.7.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvBatChargeFaultChangeEvent`](../README.md#tlvbatchargefaultchangeevent)\>

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

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:867](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L867)

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

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:875](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L875)
