[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Channel](../modules/cluster_export.Channel.md) / SkipChannelRequest

# Interface: SkipChannelRequest

[cluster/export](../modules/cluster_export.md).[Channel](../modules/cluster_export.Channel.md).SkipChannelRequest

Input to the Channel skipChannel command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSkipChannelRequest`](../modules/cluster_export.Channel.md#tlvskipchannelrequest)\>

  ↳ **`SkipChannelRequest`**

## Table of contents

### Properties

- [count](cluster_export.Channel.SkipChannelRequest.md#count)

## Properties

### count

• **count**: `number`

This shall indicate the number of steps to increase (Count is positive) or decrease (Count is negative) the
current channel.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.4.1

#### Inherited from

TypeFromSchema.count

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:235](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L235)
