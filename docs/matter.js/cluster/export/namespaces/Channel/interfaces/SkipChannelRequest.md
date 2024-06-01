[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Channel](../README.md) / SkipChannelRequest

# Interface: SkipChannelRequest

Input to the Channel skipChannel command

## See

MatterSpecification.v11.Cluster § 6.6.4.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSkipChannelRequest`](../README.md#tlvskipchannelrequest)\>

## Properties

### count

> **count**: `number`

This shall indicate the number of steps to increase (Count is positive) or decrease (Count is negative) the
current channel.

#### See

MatterSpecification.v11.Cluster § 6.6.4.4.1

#### Inherited from

`TypeFromSchema.count`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L234)
