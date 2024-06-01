[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PowerSource](../modules/exports_cluster.PowerSource.md) / BatChargeFaultChangeEvent

# Interface: BatChargeFaultChangeEvent

[exports/cluster](../modules/exports_cluster.md).[PowerSource](../modules/exports_cluster.PowerSource.md).BatChargeFaultChangeEvent

Body of the PowerSource batChargeFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvBatChargeFaultChangeEvent`](../modules/exports_cluster.PowerSource.md#tlvbatchargefaultchangeevent)\>

  ↳ **`BatChargeFaultChangeEvent`**

## Table of contents

### Properties

- [current](exports_cluster.PowerSource.BatChargeFaultChangeEvent.md#current)
- [previous](exports_cluster.PowerSource.BatChargeFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`BatChargeFault`](../enums/exports_cluster.PowerSource.BatChargeFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.7.6.31,
“ActiveBatChargeFaults Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.3.1

#### Inherited from

TypeFromSchema.current

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:702

___

### previous

• **previous**: [`BatChargeFault`](../enums/exports_cluster.PowerSource.BatChargeFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.31,
“ActiveBatChargeFaults Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.3.2

#### Inherited from

TypeFromSchema.previous

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:709
