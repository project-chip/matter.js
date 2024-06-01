[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Channel](../README.md) / ChangeChannelResponse

# Interface: ChangeChannelResponse

This command shall be generated in response to a ChangeChannel command.

## See

MatterSpecification.v11.Cluster § 6.6.4.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvChangeChannelResponse`](../README.md#tlvchangechannelresponse)\>

## Properties

### data?

> `optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

#### See

MatterSpecification.v11.Cluster § 6.6.4.2.2

#### Inherited from

`TypeFromSchema.data`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:161

***

### status

> **status**: [`Status`](../enumerations/Status.md)

This shall indicate the status of the command which resulted in this response.

#### See

MatterSpecification.v11.Cluster § 6.6.4.2.1

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:155
