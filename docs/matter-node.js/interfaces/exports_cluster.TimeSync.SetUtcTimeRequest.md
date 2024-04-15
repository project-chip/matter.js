[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [TimeSync](../modules/exports_cluster.TimeSync.md) / SetUtcTimeRequest

# Interface: SetUtcTimeRequest

[exports/cluster](../modules/exports_cluster.md).[TimeSync](../modules/exports_cluster.TimeSync.md).SetUtcTimeRequest

Input to the TimeSync setUtcTime command

**`See`**

MatterSpecification.v11.Core § 11.16.9.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSetUtcTimeRequest`](../modules/exports_cluster.TimeSync.md#tlvsetutctimerequest)\>

  ↳ **`SetUtcTimeRequest`**

## Table of contents

### Properties

- [granularity](exports_cluster.TimeSync.SetUtcTimeRequest.md#granularity)
- [timeSource](exports_cluster.TimeSync.SetUtcTimeRequest.md#timesource)
- [utcTime](exports_cluster.TimeSync.SetUtcTimeRequest.md#utctime)

## Properties

### granularity

• **granularity**: [`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)

This shall give the Client’s Granularity, as described in Section 11.16.8.2, “Granularity Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.16.9.1.2

#### Inherited from

TypeFromSchema.granularity

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:212

___

### timeSource

• `Optional` **timeSource**: [`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)

This shall give the Client’s TimeSource, as described in Section 11.16.8.3, “TimeSource Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.16.9.1.3

#### Inherited from

TypeFromSchema.timeSource

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:218

___

### utcTime

• **utcTime**: `number` \| `bigint`

This shall give the Client’s UTC Time.

**`See`**

MatterSpecification.v11.Core § 11.16.9.1.1

#### Inherited from

TypeFromSchema.utcTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:206
