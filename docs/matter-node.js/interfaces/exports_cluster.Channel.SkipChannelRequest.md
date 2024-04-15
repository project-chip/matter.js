[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Channel](../modules/exports_cluster.Channel.md) / SkipChannelRequest

# Interface: SkipChannelRequest

[exports/cluster](../modules/exports_cluster.md).[Channel](../modules/exports_cluster.Channel.md).SkipChannelRequest

Input to the Channel skipChannel command

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSkipChannelRequest`](../modules/exports_cluster.Channel.md#tlvskipchannelrequest)\>

  ↳ **`SkipChannelRequest`**

## Table of contents

### Properties

- [count](exports_cluster.Channel.SkipChannelRequest.md#count)

## Properties

### count

• **count**: `number`

This shall indicate the number of steps to increase (Count is positive) or decrease (Count is negative) the
current channel.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.4.1

#### Inherited from

TypeFromSchema.count

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:208
