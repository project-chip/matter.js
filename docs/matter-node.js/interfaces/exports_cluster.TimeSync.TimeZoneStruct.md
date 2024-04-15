[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [TimeSync](../modules/exports_cluster.TimeSync.md) / TimeZoneStruct

# Interface: TimeZoneStruct

[exports/cluster](../modules/exports_cluster.md).[TimeSync](../modules/exports_cluster.TimeSync.md).TimeZoneStruct

**`See`**

MatterSpecification.v11.Core § 11.16.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvTimeZoneStruct`](../modules/exports_cluster.TimeSync.md#tlvtimezonestruct)\>

  ↳ **`TimeZoneStruct`**

## Table of contents

### Properties

- [name](exports_cluster.TimeSync.TimeZoneStruct.md#name)
- [offset](exports_cluster.TimeSync.TimeZoneStruct.md#offset)
- [validAt](exports_cluster.TimeSync.TimeZoneStruct.md#validat)

## Properties

### name

• `Optional` **name**: `string`

The time zone name SHOULD provide a human-readable time zone name and it SHOULD use the country/city format
specified by the IANA time zone database [https://www.iana.org/time-zones].

**`See`**

MatterSpecification.v11.Core § 11.16.6.3.3

#### Inherited from

TypeFromSchema.name

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:35

___

### offset

• **offset**: `number`

The time zone offset from UTC in seconds.

**`See`**

MatterSpecification.v11.Core § 11.16.6.3.1

#### Inherited from

TypeFromSchema.offset

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:22

___

### validAt

• **validAt**: `number` \| `bigint`

The UTC time when the offset shall be applied.

**`See`**

MatterSpecification.v11.Core § 11.16.6.3.2

#### Inherited from

TypeFromSchema.validAt

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:28
