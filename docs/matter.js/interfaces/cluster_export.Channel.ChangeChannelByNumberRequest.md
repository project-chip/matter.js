[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Channel](../modules/cluster_export.Channel.md) / ChangeChannelByNumberRequest

# Interface: ChangeChannelByNumberRequest

[cluster/export](../modules/cluster_export.md).[Channel](../modules/cluster_export.Channel.md).ChangeChannelByNumberRequest

Input to the Channel changeChannelByNumber command

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvChangeChannelByNumberRequest`](../modules/cluster_export.Channel.md#tlvchangechannelbynumberrequest)\>

  ↳ **`ChangeChannelByNumberRequest`**

## Table of contents

### Properties

- [majorNumber](cluster_export.Channel.ChangeChannelByNumberRequest.md#majornumber)
- [minorNumber](cluster_export.Channel.ChangeChannelByNumberRequest.md#minornumber)

## Properties

### majorNumber

• **majorNumber**: `number`

This shall indicate the channel major number value (ATSC format) to which the channel should change.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.3.1

#### Inherited from

TypeFromSchema.majorNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L205)

___

### minorNumber

• **minorNumber**: `number`

This shall indicate the channel minor number value (ATSC format) to which the channel should change.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.3.2

#### Inherited from

TypeFromSchema.minorNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L212)
