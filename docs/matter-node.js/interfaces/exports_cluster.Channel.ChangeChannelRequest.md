[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Channel](../modules/exports_cluster.Channel.md) / ChangeChannelRequest

# Interface: ChangeChannelRequest

[exports/cluster](../modules/exports_cluster.md).[Channel](../modules/exports_cluster.Channel.md).ChangeChannelRequest

Input to the Channel changeChannel command

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvChangeChannelRequest`](../modules/exports_cluster.Channel.md#tlvchangechannelrequest)\>

  ↳ **`ChangeChannelRequest`**

## Table of contents

### Properties

- [match](exports_cluster.Channel.ChangeChannelRequest.md#match)

## Properties

### match

• **match**: `string`

This shall contain a user-input string to match in order to identify the target channel.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.1.1

#### Inherited from

TypeFromSchema.match

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:118
