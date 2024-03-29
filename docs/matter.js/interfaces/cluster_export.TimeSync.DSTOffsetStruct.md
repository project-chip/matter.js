[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TimeSync](../modules/cluster_export.TimeSync.md) / DSTOffsetStruct

# Interface: DSTOffsetStruct

[cluster/export](../modules/cluster_export.md).[TimeSync](../modules/cluster_export.TimeSync.md).DSTOffsetStruct

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with these
assumptions.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.4

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

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:76](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L76)

___

### validStarting

• **validStarting**: `number` \| `bigint`

The UTC time when the offset shall be applied.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.4.1

#### Inherited from

TypeFromSchema.validStarting

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:83](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L83)

___

### validUntil

• **validUntil**: `number` \| `bigint`

The UTC time when the offset shall stop being applied. This value shall be larger than the ValidStarting
time.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.4.2

#### Inherited from

TypeFromSchema.validUntil

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:91](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L91)
