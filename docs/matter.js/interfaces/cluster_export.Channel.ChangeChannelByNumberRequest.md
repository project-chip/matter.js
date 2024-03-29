[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Channel](../modules/cluster_export.Channel.md) / ChangeChannelByNumberRequest

# Interface: ChangeChannelByNumberRequest

[cluster/export](../modules/cluster_export.md).[Channel](../modules/cluster_export.Channel.md).ChangeChannelByNumberRequest

Input to the Channel changeChannelByNumber command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.3

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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.3.1

#### Inherited from

TypeFromSchema.majorNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:206](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L206)

___

### minorNumber

• **minorNumber**: `number`

This shall indicate the channel minor number value (ATSC format) to which the channel should change.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.3.2

#### Inherited from

TypeFromSchema.minorNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:213](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L213)
