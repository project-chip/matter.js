[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [TimeSync](../README.md) / SetUtcTimeRequest

# Interface: SetUtcTimeRequest

Input to the TimeSync setUtcTime command

## See

MatterSpecification.v11.Core § 11.16.9.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSetUtcTimeRequest`](../README.md#tlvsetutctimerequest)\>

## Properties

### granularity

> **granularity**: [`Granularity`](../enumerations/Granularity.md)

This shall give the Client’s Granularity, as described in Section 11.16.8.2, “Granularity Attribute”.

#### See

MatterSpecification.v11.Core § 11.16.9.1.2

#### Inherited from

`TypeFromSchema.granularity`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:222

***

### timeSource?

> `optional` **timeSource**: [`TimeSource`](../enumerations/TimeSource.md)

This shall give the Client’s TimeSource, as described in Section 11.16.8.3, “TimeSource Attribute”.

#### See

MatterSpecification.v11.Core § 11.16.9.1.3

#### Inherited from

`TypeFromSchema.timeSource`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:228

***

### utcTime

> **utcTime**: `number` \| `bigint`

This shall give the Client’s UTC Time.

#### See

MatterSpecification.v11.Core § 11.16.9.1.1

#### Inherited from

`TypeFromSchema.utcTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:216
