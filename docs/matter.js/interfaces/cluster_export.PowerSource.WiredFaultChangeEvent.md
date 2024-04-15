[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PowerSource](../modules/cluster_export.PowerSource.md) / WiredFaultChangeEvent

# Interface: WiredFaultChangeEvent

[cluster/export](../modules/cluster_export.md).[PowerSource](../modules/cluster_export.PowerSource.md).WiredFaultChangeEvent

Body of the PowerSource wiredFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvWiredFaultChangeEvent`](../modules/cluster_export.PowerSource.md#tlvwiredfaultchangeevent)\>

  ↳ **`WiredFaultChangeEvent`**

## Table of contents

### Properties

- [current](cluster_export.PowerSource.WiredFaultChangeEvent.md#current)
- [previous](cluster_export.PowerSource.WiredFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.7.6.11,
“ActiveWiredFaults Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.1.1

#### Inherited from

TypeFromSchema.current

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L77)

___

### previous

• **previous**: [`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.11,
“ActiveWiredFaults Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.1.2

#### Inherited from

TypeFromSchema.previous

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L85)
