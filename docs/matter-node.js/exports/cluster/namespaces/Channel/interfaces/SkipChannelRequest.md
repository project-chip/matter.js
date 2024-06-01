[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Channel](../README.md) / SkipChannelRequest

# Interface: SkipChannelRequest

Input to the Channel skipChannel command

## See

MatterSpecification.v11.Cluster § 6.6.4.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSkipChannelRequest`](../README.md#tlvskipchannelrequest)\>

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

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:208
