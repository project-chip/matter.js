[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PowerSource](../modules/cluster_export.PowerSource.md) / BatFaultChangeEvent

# Interface: BatFaultChangeEvent

[cluster/export](../modules/cluster_export.md).[PowerSource](../modules/cluster_export.PowerSource.md).BatFaultChangeEvent

Body of the PowerSource batFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvBatFaultChangeEvent`](../modules/cluster_export.PowerSource.md#tlvbatfaultchangeevent)\>

  ↳ **`BatFaultChangeEvent`**

## Table of contents

### Properties

- [current](cluster_export.PowerSource.BatFaultChangeEvent.md#current)
- [previous](cluster_export.PowerSource.BatFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.7.6.19, “ActiveBatFaults
Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.2.1

#### Inherited from

TypeFromSchema.current

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:172](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L172)

___

### previous

• **previous**: [`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.19,
“ActiveBatFaults Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.2.2

#### Inherited from

TypeFromSchema.previous

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:180](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L180)
