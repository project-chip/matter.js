[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [TimeSync](../README.md) / SetUtcTimeRequest

# Interface: SetUtcTimeRequest

Input to the TimeSync setUtcTime command

## See

MatterSpecification.v11.Core § 11.16.9.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSetUtcTimeRequest`](../README.md#tlvsetutctimerequest)\>

## Properties

### granularity

> **granularity**: [`Granularity`](../enumerations/Granularity.md)

This shall give the Client’s Granularity, as described in Section 11.16.8.2, “Granularity Attribute”.

#### See

MatterSpecification.v11.Core § 11.16.9.1.2

#### Inherited from

`TypeFromSchema.granularity`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:275](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L275)

***

### timeSource?

> `optional` **timeSource**: [`TimeSource`](../enumerations/TimeSource.md)

This shall give the Client’s TimeSource, as described in Section 11.16.8.3, “TimeSource Attribute”.

#### See

MatterSpecification.v11.Core § 11.16.9.1.3

#### Inherited from

`TypeFromSchema.timeSource`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:282](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L282)

***

### utcTime

> **utcTime**: `number` \| `bigint`

This shall give the Client’s UTC Time.

#### See

MatterSpecification.v11.Core § 11.16.9.1.1

#### Inherited from

`TypeFromSchema.utcTime`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:268](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L268)
