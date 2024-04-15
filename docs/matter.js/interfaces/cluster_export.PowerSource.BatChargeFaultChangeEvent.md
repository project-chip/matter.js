[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PowerSource](../modules/cluster_export.PowerSource.md) / BatChargeFaultChangeEvent

# Interface: BatChargeFaultChangeEvent

[cluster/export](../modules/cluster_export.md).[PowerSource](../modules/cluster_export.PowerSource.md).BatChargeFaultChangeEvent

Body of the PowerSource batChargeFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvBatChargeFaultChangeEvent`](../modules/cluster_export.PowerSource.md#tlvbatchargefaultchangeevent)\>

  ↳ **`BatChargeFaultChangeEvent`**

## Table of contents

### Properties

- [current](cluster_export.PowerSource.BatChargeFaultChangeEvent.md#current)
- [previous](cluster_export.PowerSource.BatChargeFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]

#### Inherited from

TypeFromSchema.current

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:848](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L848)

___

### previous

• **previous**: [`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]

#### Inherited from

TypeFromSchema.previous

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:849](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L849)
