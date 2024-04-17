[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [TimeSync](../modules/exports_cluster.TimeSync.md) / DSTOffsetStruct

# Interface: DSTOffsetStruct

[exports/cluster](../modules/exports_cluster.md).[TimeSync](../modules/exports_cluster.TimeSync.md).DSTOffsetStruct

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with these
assumptions.

**`See`**

MatterSpecification.v11.Core § 11.16.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvDSTOffsetStruct`](../modules/exports_cluster.TimeSync.md#tlvdstoffsetstruct)\>

  ↳ **`DSTOffsetStruct`**

## Table of contents

### Properties

- [offset](exports_cluster.TimeSync.DSTOffsetStruct.md#offset)
- [validStarting](exports_cluster.TimeSync.DSTOffsetStruct.md#validstarting)
- [validUntil](exports_cluster.TimeSync.DSTOffsetStruct.md#validuntil)

## Properties

### offset

• **offset**: `number`

#### Inherited from

TypeFromSchema.offset

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:50

___

### validStarting

• **validStarting**: `number` \| `bigint`

The UTC time when the offset shall be applied.

**`See`**

MatterSpecification.v11.Core § 11.16.6.4.1

#### Inherited from

TypeFromSchema.validStarting

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:56

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

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:63
