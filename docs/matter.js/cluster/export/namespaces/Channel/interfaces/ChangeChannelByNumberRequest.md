[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Channel](../README.md) / ChangeChannelByNumberRequest

# Interface: ChangeChannelByNumberRequest

Input to the Channel changeChannelByNumber command

## See

MatterSpecification.v11.Cluster § 6.6.4.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvChangeChannelByNumberRequest`](../README.md#tlvchangechannelbynumberrequest)\>

## Properties

### majorNumber

> **majorNumber**: `number`

This shall indicate the channel major number value (ATSC format) to which the channel should change.

#### See

MatterSpecification.v11.Cluster § 6.6.4.3.1

#### Inherited from

`TypeFromSchema.majorNumber`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:205](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L205)

***

### minorNumber

> **minorNumber**: `number`

This shall indicate the channel minor number value (ATSC format) to which the channel should change.

#### See

MatterSpecification.v11.Cluster § 6.6.4.3.2

#### Inherited from

`TypeFromSchema.minorNumber`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L212)
