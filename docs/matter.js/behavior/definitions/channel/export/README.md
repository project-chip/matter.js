[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/channel/export

# behavior/definitions/channel/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ChannelBehavior](namespaces/ChannelBehavior/README.md)
- [ChannelInterface](namespaces/ChannelInterface/README.md)

### Classes

- [ChannelServer](classes/ChannelServer.md)

### Interfaces

- [ChannelBehavior](interfaces/ChannelBehavior.md)

## Type Aliases

### ChangeChannelByNumberRequest

> **ChangeChannelByNumberRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvChangeChannelByNumberRequest`](../../../../cluster/export/namespaces/Channel/README.md#tlvchangechannelbynumberrequest)\>

Change the channel to the channel with the given Number in the ChannelList attribute.

#### See

MatterSpecification.v11.Cluster § 6.6.4.3

#### Source

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L18)

***

### ChangeChannelRequest

> **ChangeChannelRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvChangeChannelRequest`](../../../../cluster/export/namespaces/Channel/README.md#tlvchangechannelrequest)\>

Change the channel to the channel case-insensitive exact matching the value passed as an argument.

The match priority order shall be: AffiliateCallSign ("KCTS"), CallSign ("PBS"), Name ("Comedy Central"), Number
("13.1")

Upon receipt, this shall generate a ChangeChannelResponse command.

Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.

#### See

MatterSpecification.v11.Cluster § 6.6.4.1

#### Source

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L44)

***

### ChangeChannelResponse

> **ChangeChannelResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvChangeChannelResponse`](../../../../cluster/export/namespaces/Channel/README.md#tlvchangechannelresponse)\>

This command shall be generated in response to a ChangeChannel command.

#### See

MatterSpecification.v11.Cluster § 6.6.4.2

#### Source

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L51)

***

### ChannelInterface

> **ChannelInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L53)

***

### SkipChannelRequest

> **SkipChannelRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSkipChannelRequest`](../../../../cluster/export/namespaces/Channel/README.md#tlvskipchannelrequest)\>

This command provides channel up and channel down functionality, but allows channel index jumps of size Count.

When the value of the increase or decrease is larger than the number of channels remaining in the given direction,
then the behavior shall be to return to the beginning (or end) of the channel list and continue. For example, if the
current channel is at index 0 and count value of -1 is given, then the current channel should change to the last
channel.

#### See

MatterSpecification.v11.Cluster § 6.6.4.4

#### Source

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L30)

## Variables

### ChannelBehavior

> `const` **ChannelBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/Channel/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ChannelInterface`](README.md#channelinterface)\>, [`ChannelInterface`](README.md#channelinterface)\>

ChannelBehavior is the base class for objects that support interaction with [Channel.Cluster](../../../../cluster/export/namespaces/Channel/README.md#cluster).

This class does not have optional features of Channel.Cluster enabled. You can enable additional features using
ChannelBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/channel/ChannelBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/channel/ChannelBehavior.ts#L19)
