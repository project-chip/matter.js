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

This field shall represent the set of faults currently detected, as per Section 11.7.6.31,
“ActiveBatChargeFaults Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.3.1

#### Inherited from

TypeFromSchema.current

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:867](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L867)

___

### previous

• **previous**: [`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.31,
“ActiveBatChargeFaults Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.7.7.3.2

#### Inherited from

TypeFromSchema.previous

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:875](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L875)
