[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/channel/export](../modules/behavior_definitions_channel_export.md) / [ChannelBehavior](../modules/behavior_definitions_channel_export.ChannelBehavior.md) / State

# Interface: State

[behavior/definitions/channel/export](../modules/behavior_definitions_channel_export.md).[ChannelBehavior](../modules/behavior_definitions_channel_export.ChannelBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_channel_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [currentChannel](behavior_definitions_channel_export.ChannelBehavior.State.md#currentchannel)

## Properties

### currentChannel

• `Optional` **currentChannel**: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>

This optional field contains the current channel. When supported but a channel is not currently tuned to
(if a content application is in foreground), the value of the field shall be null.

**`See`**

MatterSpecification.v11.Cluster § 6.6.3.3

#### Inherited from

StateType.currentChannel

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:345](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L345)
