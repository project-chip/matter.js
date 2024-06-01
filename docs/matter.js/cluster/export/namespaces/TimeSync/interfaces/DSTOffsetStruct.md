[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [TimeSync](../README.md) / DSTOffsetStruct

# Interface: DSTOffsetStruct

## See

MatterSpecification.v11.Core § 11.16.6.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvDSTOffsetStruct`](../README.md#tlvdstoffsetstruct)\>

## Properties

### offset

> **offset**: `number`

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with
these assumptions.

#### See

MatterSpecification.v11.Core § 11.16.6.4.1

#### Inherited from

`TypeFromSchema.offset`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L78)

***

### validStarting

> **validStarting**: `number` \| `bigint`

The UTC time when the offset shall be applied.

#### See

MatterSpecification.v11.Core § 11.16.6.4.2

#### Inherited from

`TypeFromSchema.validStarting`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L85)

***

### validUntil

> **validUntil**: `number` \| `bigint`

The UTC time when the offset shall stop being applied. This value shall be larger than the ValidStarting
time.

#### See

MatterSpecification.v11.Core § 11.16.6.4.3

#### Inherited from

`TypeFromSchema.validUntil`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L93)
