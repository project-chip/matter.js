[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [TimeSync](../README.md) / TimeZoneStruct

# Interface: TimeZoneStruct

## See

MatterSpecification.v11.Core § 11.16.6.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvTimeZoneStruct`](../README.md#tlvtimezonestruct)\>

## Properties

### name?

> `optional` **name**: `string`

The time zone name SHOULD provide a human-readable time zone name and it SHOULD use the country/city format
specified by the IANA time zone database [https://www.iana.org/time-zones].

#### See

MatterSpecification.v11.Core § 11.16.6.3.3

#### Inherited from

`TypeFromSchema.name`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:35

***

### offset

> **offset**: `number`

The time zone offset from UTC in seconds.

#### See

MatterSpecification.v11.Core § 11.16.6.3.1

#### Inherited from

`TypeFromSchema.offset`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:22

***

### validAt

> **validAt**: `number` \| `bigint`

The UTC time when the offset shall be applied.

#### See

MatterSpecification.v11.Core § 11.16.6.3.2

#### Inherited from

`TypeFromSchema.validAt`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:28
