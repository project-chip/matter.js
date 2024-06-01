[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [TimeSync](../README.md) / DSTOffsetStruct

# Interface: DSTOffsetStruct

## See

MatterSpecification.v11.Core § 11.16.6.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvDSTOffsetStruct`](../README.md#tlvdstoffsetstruct)\>

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

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:53

***

### validStarting

> **validStarting**: `number` \| `bigint`

The UTC time when the offset shall be applied.

#### See

MatterSpecification.v11.Core § 11.16.6.4.2

#### Inherited from

`TypeFromSchema.validStarting`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:59

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

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:66
