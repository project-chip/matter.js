[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Channel](../modules/cluster_export.Channel.md) / ChangeChannelRequest

# Interface: ChangeChannelRequest

[cluster/export](../modules/cluster_export.md).[Channel](../modules/cluster_export.Channel.md).ChangeChannelRequest

Input to the Channel changeChannel command

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvChangeChannelRequest`](../modules/cluster_export.Channel.md#tlvchangechannelrequest)\>

  ↳ **`ChangeChannelRequest`**

## Table of contents

### Properties

- [match](cluster_export.Channel.ChangeChannelRequest.md#match)

## Properties

### match

• **match**: `string`

This shall contain a user-input string to match in order to identify the target channel.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.1.1

#### Inherited from

TypeFromSchema.match

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:136](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L136)
