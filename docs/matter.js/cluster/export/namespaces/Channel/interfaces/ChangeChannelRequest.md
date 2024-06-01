[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Channel](../README.md) / ChangeChannelRequest

# Interface: ChangeChannelRequest

Input to the Channel changeChannel command

## See

MatterSpecification.v11.Cluster § 6.6.4.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvChangeChannelRequest`](../README.md#tlvchangechannelrequest)\>

## Properties

### match

> **match**: `string`

This shall contain a user-input string to match in order to identify the target channel.

#### See

MatterSpecification.v11.Cluster § 6.6.4.1.1

#### Inherited from

`TypeFromSchema.match`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L136)
