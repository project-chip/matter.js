[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Channel](../modules/cluster_export.Channel.md) / ChannelInfoStruct

# Interface: ChannelInfoStruct

[cluster/export](../modules/cluster_export.md).[Channel](../modules/cluster_export.Channel.md).ChannelInfoStruct

This indicates a channel in a channel lineup.

While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
other formats which can map into these numeric values.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvChannelInfoStruct`](../modules/cluster_export.Channel.md#tlvchannelinfostruct)\>

  ↳ **`ChannelInfoStruct`**

## Table of contents

### Properties

- [affiliateCallSign](cluster_export.Channel.ChannelInfoStruct.md#affiliatecallsign)
- [callSign](cluster_export.Channel.ChannelInfoStruct.md#callsign)
- [majorNumber](cluster_export.Channel.ChannelInfoStruct.md#majornumber)
- [minorNumber](cluster_export.Channel.ChannelInfoStruct.md#minornumber)
- [name](cluster_export.Channel.ChannelInfoStruct.md#name)

## Properties

### affiliateCallSign

• `Optional` **affiliateCallSign**: `string`

This shall indicate the local affiliate call sign, such as "KCTS". This field is optional, but SHOULD be
provided when known.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.5.1.5

#### Inherited from

TypeFromSchema.affiliateCallSign

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:70](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L70)

___

### callSign

• `Optional` **callSign**: `string`

This shall indicate the call sign of the channel, such as "PBS". This field is optional, but SHOULD be
provided when known.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.5.1.4

#### Inherited from

TypeFromSchema.callSign

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:62](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L62)

___

### majorNumber

• **majorNumber**: `number`

This shall indicate the channel major number value (for example, using ATSC format). When the channel number
is expressed as a string, such as "13.1" or "256", the major number would be 13 or 256, respectively.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.5.1.1

#### Inherited from

TypeFromSchema.majorNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:38](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L38)

___

### minorNumber

• **minorNumber**: `number`

This shall indicate the channel minor number value (for example, using ATSC format). When the channel number
is expressed as a string, such as "13.1" or "256", the minor number would be 1 or 0, respectively.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.5.1.2

#### Inherited from

TypeFromSchema.minorNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:46](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L46)

___

### name

• `Optional` **name**: `string`

This shall indicate the marketing name for the channel, such as “The CW" or "Comedy Central". This field is
optional, but SHOULD be provided when known.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.5.1.3

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:54](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L54)
