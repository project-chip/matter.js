[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [TimeSync](../README.md) / TimeZoneStatusEvent

# Interface: TimeZoneStatusEvent

Body of the TimeSync timeZoneStatus event

## See

MatterSpecification.v11.Core § 11.16.10.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvTimeZoneStatusEvent`](../README.md#tlvtimezonestatusevent)\>

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

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L120)

***

### offset

> **offset**: `number`

Current time zone offset from UTC in seconds.

#### See

MatterSpecification.v11.Core § 11.16.10.3.1

#### Inherited from

`TypeFromSchema.offset`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L112)
