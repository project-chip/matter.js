[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PowerSource](../modules/exports_cluster.PowerSource.md) / WiredFaultChangeEvent

# Interface: WiredFaultChangeEvent

[exports/cluster](../modules/exports_cluster.md).[PowerSource](../modules/exports_cluster.PowerSource.md).WiredFaultChangeEvent

Body of the PowerSource wiredFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvWiredFaultChangeEvent`](../modules/exports_cluster.PowerSource.md#tlvwiredfaultchangeevent)\>

  ↳ **`WiredFaultChangeEvent`**

## Table of contents

### Properties

- [current](exports_cluster.PowerSource.WiredFaultChangeEvent.md#current)
- [previous](exports_cluster.PowerSource.WiredFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`WiredFault`](../enums/exports_cluster.PowerSource.WiredFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.7.6.11,
“ActiveWiredFaults Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.1.1

#### Inherited from

TypeFromSchema.current

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:55

___

### previous

• **previous**: [`WiredFault`](../enums/exports_cluster.PowerSource.WiredFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.11,
“ActiveWiredFaults Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.1.2

#### Inherited from

TypeFromSchema.previous

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:62
