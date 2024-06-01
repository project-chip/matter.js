[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [TimeSync](../README.md) / TimeZoneStatusEvent

# Interface: TimeZoneStatusEvent

Body of the TimeSync timeZoneStatus event

## See

MatterSpecification.v11.Core § 11.16.10.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvTimeZoneStatusEvent`](../README.md#tlvtimezonestatusevent)\>

## Properties

### name?

> `optional` **name**: `string`

Current time zone name. This name SHOULD use the country/city format specified by the IANA time zone
database [https://www.iana.org/time-zones].

#### See

MatterSpecification.v11.Core § 11.16.10.3.2

#### Inherited from

`TypeFromSchema.name`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:91

***

### offset

> **offset**: `number`

Current time zone offset from UTC in seconds.

#### See

MatterSpecification.v11.Core § 11.16.10.3.1

#### Inherited from

`TypeFromSchema.offset`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:84
