[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Channel](../modules/exports_cluster.Channel.md) / ChangeChannelByNumberRequest

# Interface: ChangeChannelByNumberRequest

[exports/cluster](../modules/exports_cluster.md).[Channel](../modules/exports_cluster.Channel.md).ChangeChannelByNumberRequest

Input to the Channel changeChannelByNumber command

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvChangeChannelByNumberRequest`](../modules/exports_cluster.Channel.md#tlvchangechannelbynumberrequest)\>

  ↳ **`ChangeChannelByNumberRequest`**

## Table of contents

### Properties

- [majorNumber](exports_cluster.Channel.ChangeChannelByNumberRequest.md#majornumber)
- [minorNumber](exports_cluster.Channel.ChangeChannelByNumberRequest.md#minornumber)

## Properties

### majorNumber

• **majorNumber**: `number`

This shall indicate the channel major number value (ATSC format) to which the channel should change.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.3.1

#### Inherited from

TypeFromSchema.majorNumber

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:181

___

### minorNumber

• **minorNumber**: `number`

This shall indicate the channel minor number value (ATSC format) to which the channel should change.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.3.2

#### Inherited from

TypeFromSchema.minorNumber

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:187
