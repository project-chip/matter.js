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

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:264](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L264)

___

### timeSource

• `Optional` **timeSource**: [`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)

This shall give the Client’s TimeSource, as described in Section 11.16.8.3, “TimeSource Attribute”.

**`See`**

MatterSpecification.v11.Core § 11.16.9.1.3

#### Inherited from

TypeFromSchema.timeSource

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:271](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L271)

___

### utcTime

• **utcTime**: `number` \| `bigint`

This shall give the Client’s UTC Time.

**`See`**

MatterSpecification.v11.Core § 11.16.9.1.1

#### Inherited from

TypeFromSchema.utcTime

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:257](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L257)
