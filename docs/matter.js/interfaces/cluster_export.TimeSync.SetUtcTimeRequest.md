[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TimeSync](../modules/cluster_export.TimeSync.md) / SetUtcTimeRequest

# Interface: SetUtcTimeRequest

[cluster/export](../modules/cluster_export.md).[TimeSync](../modules/cluster_export.TimeSync.md).SetUtcTimeRequest

Input to the TimeSync setUtcTime command

**`See`**

MatterSpecification.v11.Core § 11.16.9.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSetUtcTimeRequest`](../modules/cluster_export.TimeSync.md#tlvsetutctimerequest)\>

  ↳ **`SetUtcTimeRequest`**

## Table of contents

### Properties

- [granularity](cluster_export.TimeSync.SetUtcTimeRequest.md#granularity)
- [timeSource](cluster_export.TimeSync.SetUtcTimeRequest.md#timesource)
- [utcTime](cluster_export.TimeSync.SetUtcTimeRequest.md#utctime)

## Properties

### granularity

• **granularity**: [`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)

This shall give the Client’s Granularity, as described in Section 11.16.8.2, “Granularity Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.16.9.1.2

#### Inherited from

TypeFromSchema.granularity

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:275](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L275)

___

### timeSource

• `Optional` **timeSource**: [`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)

This shall give the Client’s TimeSource, as described in Section 11.16.8.3, “TimeSource Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.16.9.1.3

#### Inherited from

TypeFromSchema.timeSource

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:282](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L282)

___

### utcTime

• **utcTime**: `number` \| `bigint`

This shall give the Client’s UTC Time.

**`See`**

MatterSpecification.v11.Core § 11.16.9.1.1

#### Inherited from

TypeFromSchema.utcTime

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:268](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L268)
