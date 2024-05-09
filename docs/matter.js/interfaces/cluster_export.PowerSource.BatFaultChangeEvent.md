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

#### Inherited from

TypeFromSchema.current

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L166)

___

### previous

• **previous**: [`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]

#### Inherited from

TypeFromSchema.previous

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L167)
