[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TimeSync](../modules/cluster_export.TimeSync.md) / TimeZoneStruct

# Interface: TimeZoneStruct

[cluster/export](../modules/cluster_export.md).[TimeSync](../modules/cluster_export.TimeSync.md).TimeZoneStruct

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvTimeZoneStruct`](../modules/cluster_export.TimeSync.md#tlvtimezonestruct)\>

  ↳ **`TimeZoneStruct`**

## Table of contents

### Properties

- [name](cluster_export.TimeSync.TimeZoneStruct.md#name)
- [offset](cluster_export.TimeSync.TimeZoneStruct.md#offset)
- [validAt](cluster_export.TimeSync.TimeZoneStruct.md#validat)

## Properties

### name

• `Optional` **name**: `string`

The time zone name SHOULD provide a human-readable time zone name and it SHOULD use the country/city format
specified by the IANA time zone database [https://www.iana.org/time-zones].

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.3.3

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:60](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L60)

___

### offset

• **offset**: `number`

The time zone offset from UTC in seconds.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.3.1

#### Inherited from

TypeFromSchema.offset

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:45](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L45)

___

### validAt

• **validAt**: `number` \| `bigint`

The UTC time when the offset shall be applied.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.3.2

#### Inherited from

TypeFromSchema.validAt

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:52](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L52)
