[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Channel](../README.md) / ChannelInfoStruct

# Interface: ChannelInfoStruct

This indicates a channel in a channel lineup.

While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
other formats which can map into these numeric values.

## See

MatterSpecification.v11.Cluster § 6.6.5.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvChannelInfoStruct`](../README.md#tlvchannelinfostruct)\>

## Properties

### affiliateCallSign?

> `optional` **affiliateCallSign**: `string`

This shall indicate the local affiliate call sign, such as "KCTS". This field is optional, but SHOULD be
provided when known.

#### See

MatterSpecification.v11.Cluster § 6.6.5.1.5

#### Inherited from

`TypeFromSchema.affiliateCallSign`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L69)

***

### callSign?

> `optional` **callSign**: `string`

This shall indicate the call sign of the channel, such as "PBS". This field is optional, but SHOULD be
provided when known.

#### See

MatterSpecification.v11.Cluster § 6.6.5.1.4

#### Inherited from

`TypeFromSchema.callSign`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L61)

***

### majorNumber

> **majorNumber**: `number`

This shall indicate the channel major number value (for example, using ATSC format). When the channel number
is expressed as a string, such as "13.1" or "256", the major number would be 13 or 256, respectively.

#### See

MatterSpecification.v11.Cluster § 6.6.5.1.1

#### Inherited from

`TypeFromSchema.majorNumber`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L37)

***

### minorNumber

> **minorNumber**: `number`

This shall indicate the channel minor number value (for example, using ATSC format). When the channel number
is expressed as a string, such as "13.1" or "256", the minor number would be 1 or 0, respectively.

#### See

MatterSpecification.v11.Cluster § 6.6.5.1.2

#### Inherited from

`TypeFromSchema.minorNumber`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L45)

***

### name?

> `optional` **name**: `string`

This shall indicate the marketing name for the channel, such as “The CW" or "Comedy Central". This field is
optional, but SHOULD be provided when known.

#### See

MatterSpecification.v11.Cluster § 6.6.5.1.3

#### Inherited from

`TypeFromSchema.name`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L53)
