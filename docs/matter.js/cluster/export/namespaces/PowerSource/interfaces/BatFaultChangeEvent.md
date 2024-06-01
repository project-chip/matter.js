[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [PowerSource](../README.md) / BatFaultChangeEvent

# Interface: BatFaultChangeEvent

Body of the PowerSource batFaultChange event

## See

MatterSpecification.v11.Core § 11.7.7.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvBatFaultChangeEvent`](../README.md#tlvbatfaultchangeevent)\>

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

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:172](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L172)

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

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:180](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L180)
