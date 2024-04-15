[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Channel](../modules/cluster_export.Channel.md) / ChangeChannelResponse

# Interface: ChangeChannelResponse

[cluster/export](../modules/cluster_export.md).[Channel](../modules/cluster_export.Channel.md).ChangeChannelResponse

This command shall be generated in response to a ChangeChannel command.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvChangeChannelResponse`](../modules/cluster_export.Channel.md#tlvchangechannelresponse)\>

  ↳ **`ChangeChannelResponse`**

## Table of contents

### Properties

- [data](cluster_export.Channel.ChangeChannelResponse.md#data)
- [status](cluster_export.Channel.ChangeChannelResponse.md#status)

## Properties

### data

• `Optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.2.2

#### Inherited from

TypeFromSchema.data

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:184](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L184)

___

### status

• **status**: [`Status`](../enums/cluster_export.Channel.Status.md)

This shall indicate the status of the command which resulted in this response.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.2.1

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:177](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L177)
