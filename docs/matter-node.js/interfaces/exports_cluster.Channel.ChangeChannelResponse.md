[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Channel](../modules/exports_cluster.Channel.md) / ChangeChannelResponse

# Interface: ChangeChannelResponse

[exports/cluster](../modules/exports_cluster.md).[Channel](../modules/exports_cluster.Channel.md).ChangeChannelResponse

This command shall be generated in response to a ChangeChannel command.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvChangeChannelResponse`](../modules/exports_cluster.Channel.md#tlvchangechannelresponse)\>

  ↳ **`ChangeChannelResponse`**

## Table of contents

### Properties

- [data](exports_cluster.Channel.ChangeChannelResponse.md#data)
- [status](exports_cluster.Channel.ChangeChannelResponse.md#status)

## Properties

### data

• `Optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.2.2

#### Inherited from

TypeFromSchema.data

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:161

___

### status

• **status**: [`Status`](../enums/exports_cluster.Channel.Status.md)

This shall indicate the status of the command which resulted in this response.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.2.1

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:155
