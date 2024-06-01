[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Channel](../README.md) / ChangeChannelRequest

# Interface: ChangeChannelRequest

Input to the Channel changeChannel command

## See

MatterSpecification.v11.Cluster § 6.6.4.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvChangeChannelRequest`](../README.md#tlvchangechannelrequest)\>

## Properties

### match

> **match**: `string`

This shall contain a user-input string to match in order to identify the target channel.

#### See

MatterSpecification.v11.Cluster § 6.6.4.1.1

#### Inherited from

`TypeFromSchema.match`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:118
