[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PowerSource](../modules/exports_cluster.PowerSource.md) / BatFaultChangeEvent

# Interface: BatFaultChangeEvent

[exports/cluster](../modules/exports_cluster.md).[PowerSource](../modules/exports_cluster.PowerSource.md).BatFaultChangeEvent

Body of the PowerSource batFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvBatFaultChangeEvent`](../modules/exports_cluster.PowerSource.md#tlvbatfaultchangeevent)\>

  ↳ **`BatFaultChangeEvent`**

## Table of contents

### Properties

- [current](exports_cluster.PowerSource.BatFaultChangeEvent.md#current)
- [previous](exports_cluster.PowerSource.BatFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`BatFault`](../enums/exports_cluster.PowerSource.BatFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.7.6.19, “ActiveBatFaults
Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.2.1

#### Inherited from

TypeFromSchema.current

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:138

___

### previous

• **previous**: [`BatFault`](../enums/exports_cluster.PowerSource.BatFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.19,
“ActiveBatFaults Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.2.2

#### Inherited from

TypeFromSchema.previous

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:145
