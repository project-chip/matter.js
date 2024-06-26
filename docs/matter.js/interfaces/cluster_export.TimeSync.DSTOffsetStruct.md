[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TimeSync](../modules/cluster_export.TimeSync.md) / DSTOffsetStruct

# Interface: DSTOffsetStruct

[cluster/export](../modules/cluster_export.md).[TimeSync](../modules/cluster_export.TimeSync.md).DSTOffsetStruct

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

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with
these assumptions.

**`See`**

MatterSpecification.v11.Core § 11.16.6.4.1

#### Inherited from

TypeFromSchema.offset

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:78](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L78)

___

### validStarting

• **validStarting**: `number` \| `bigint`

The UTC time when the offset shall be applied.

**`See`**

MatterSpecification.v11.Core § 11.16.6.4.2

#### Inherited from

TypeFromSchema.validStarting

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:85](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L85)

___

### validUntil

• **validUntil**: `number` \| `bigint`

The UTC time when the offset shall stop being applied. This value shall be larger than the ValidStarting
time.

**`See`**

MatterSpecification.v11.Core § 11.16.6.4.3

#### Inherited from

TypeFromSchema.validUntil

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:93](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L93)
