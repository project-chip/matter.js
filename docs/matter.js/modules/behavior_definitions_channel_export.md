[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/channel/export

# Module: behavior/definitions/channel/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_channel_export._internal_.md)

### Namespaces

- [ChannelBehavior](behavior_definitions_channel_export.ChannelBehavior.md)
- [ChannelInterface](behavior_definitions_channel_export.ChannelInterface.md)

### Classes

- [ChannelServer](../classes/behavior_definitions_channel_export.ChannelServer.md)

### Interfaces

- [ChannelBehavior](../interfaces/behavior_definitions_channel_export.ChannelBehavior-1.md)

### Type Aliases

- [ChangeChannelByNumberRequest](behavior_definitions_channel_export.md#changechannelbynumberrequest)
- [ChangeChannelRequest](behavior_definitions_channel_export.md#changechannelrequest)
- [ChangeChannelResponse](behavior_definitions_channel_export.md#changechannelresponse)
- [ChannelInterface](behavior_definitions_channel_export.md#channelinterface)
- [SkipChannelRequest](behavior_definitions_channel_export.md#skipchannelrequest)

### Variables

- [ChannelBehavior](behavior_definitions_channel_export.md#channelbehavior)

## Type Aliases

### ChangeChannelByNumberRequest

Ƭ **ChangeChannelByNumberRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvChangeChannelByNumberRequest`](cluster_export.Channel.md#tlvchangechannelbynumberrequest)\>

Change the channel to the channel with the given Number in the ChannelList attribute.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.3

#### Defined in

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L18)

___

### ChangeChannelRequest

Ƭ **ChangeChannelRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvChangeChannelRequest`](cluster_export.Channel.md#tlvchangechannelrequest)\>

Change the channel to the channel case-insensitive exact matching the value passed as an argument.

The match priority order shall be: AffiliateCallSign ("KCTS"), CallSign ("PBS"), Name ("Comedy Central"), Number
("13.1")

Upon receipt, this shall generate a ChangeChannelResponse command.

Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L44)

___

### ChangeChannelResponse

Ƭ **ChangeChannelResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvChangeChannelResponse`](cluster_export.Channel.md#tlvchangechannelresponse)\>

This command shall be generated in response to a ChangeChannel command.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.2

#### Defined in

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L51)

___

### ChannelInterface

Ƭ **ChannelInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_channel_export.ChannelInterface.Base.md)  }, \{ `flags`: \{ `channelList`: ``true``  } ; `methods`: [`ChannelListOrLineupInfo`](../interfaces/behavior_definitions_channel_export.ChannelInterface.ChannelListOrLineupInfo.md)  }, \{ `flags`: \{ `lineupInfo`: ``true``  } ; `methods`: [`ChannelListOrLineupInfo`](../interfaces/behavior_definitions_channel_export.ChannelInterface.ChannelListOrLineupInfo.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L53)

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L93)

___

### SkipChannelRequest

Ƭ **SkipChannelRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSkipChannelRequest`](cluster_export.Channel.md#tlvskipchannelrequest)\>

This command provides channel up and channel down functionality, but allows channel index jumps of size Count.

When the value of the increase or decrease is larger than the number of channels remaining in the given direction,
then the behavior shall be to return to the beginning (or end) of the channel list and continue. For example, if the
current channel is at index 0 and count value of -1 is given, then the current channel should change to the last
channel.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.4

#### Defined in

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L30)

## Variables

### ChannelBehavior

• `Const` **ChannelBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Channel.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ChannelInterface`](behavior_definitions_channel_export.md#channelinterface)\>, [`ChannelInterface`](behavior_definitions_channel_export.md#channelinterface)\>

ChannelBehavior is the base class for objects that support interaction with [Channel.Cluster](cluster_export.Channel.md#cluster).

This class does not have optional features of Channel.Cluster enabled. You can enable additional features using
ChannelBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/channel/ChannelBehavior.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelBehavior.ts#L19)

[packages/matter.js/src/behavior/definitions/channel/ChannelBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelBehavior.ts#L24)

[packages/matter.js/src/behavior/definitions/channel/ChannelBehavior.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelBehavior.ts#L26)
