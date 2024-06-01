[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Channel](../README.md) / ChangeChannelByNumberRequest

# Interface: ChangeChannelByNumberRequest

Input to the Channel changeChannelByNumber command

## See

MatterSpecification.v11.Cluster § 6.6.4.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvChangeChannelByNumberRequest`](../README.md#tlvchangechannelbynumberrequest)\>

## Properties

### majorNumber

> **majorNumber**: `number`

This shall indicate the channel major number value (ATSC format) to which the channel should change.

#### See

MatterSpecification.v11.Cluster § 6.6.4.3.1

#### Inherited from

`TypeFromSchema.majorNumber`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:181

***

### minorNumber

> **minorNumber**: `number`

This shall indicate the channel minor number value (ATSC format) to which the channel should change.

#### See

MatterSpecification.v11.Cluster § 6.6.4.3.2

#### Inherited from

`TypeFromSchema.minorNumber`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:187
