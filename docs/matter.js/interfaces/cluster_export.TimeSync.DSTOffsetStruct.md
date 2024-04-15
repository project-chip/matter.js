[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TimeSync](../modules/cluster_export.TimeSync.md) / DSTOffsetStruct

# Interface: DSTOffsetStruct

[cluster/export](../modules/cluster_export.md).[TimeSync](../modules/cluster_export.TimeSync.md).DSTOffsetStruct

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with these
assumptions.

**`See`**

MatterSpecification.v11.Core § 11.16.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvDSTOffsetStruct`](../modules/cluster_export.TimeSync.md#tlvdstoffsetstruct)\>

  ↳ **`DSTOffsetStruct`**

## Table of contents

### Properties

- [offset](cluster_export.TimeSync.DSTOffsetStruct.md#offset)
- [validStarting](cluster_export.TimeSync.DSTOffsetStruct.md#validstarting)
- [validUntil](cluster_export.TimeSync.DSTOffsetStruct.md#validuntil)

## Properties

### offset

• **offset**: `number`

#### Inherited from

TypeFromSchema.offset

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L75)

___

### validStarting

• **validStarting**: `number` \| `bigint`

The UTC time when the offset shall be applied.

**`See`**

MatterSpecification.v11.Core § 11.16.6.4.1

#### Inherited from

TypeFromSchema.validStarting

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L82)

___

### validUntil

• **validUntil**: `number` \| `bigint`

The UTC time when the offset shall stop being applied. This value shall be larger than the ValidStarting
time.

**`See`**

MatterSpecification.v11.Core § 11.16.6.4.2

#### Inherited from

TypeFromSchema.validUntil

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L90)
