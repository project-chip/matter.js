[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/channel/export](../modules/behavior_definitions_channel_export.md) / [ChannelInterface](../modules/behavior_definitions_channel_export.ChannelInterface.md) / Base

# Interface: Base

[behavior/definitions/channel/export](../modules/behavior_definitions_channel_export.md).[ChannelInterface](../modules/behavior_definitions_channel_export.ChannelInterface.md).Base

## Table of contents

### Methods

- [changeChannelByNumber](behavior_definitions_channel_export.ChannelInterface.Base.md#changechannelbynumber)
- [skipChannel](behavior_definitions_channel_export.ChannelInterface.Base.md#skipchannel)

## Methods

### changeChannelByNumber

▸ **changeChannelByNumber**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Change the channel to the channel with the given Number in the ChannelList attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.3

#### Defined in

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L60)

___

### skipChannel

▸ **skipChannel**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command provides channel up and channel down functionality, but allows channel index jumps of size
Count.

When the value of the increase or decrease is larger than the number of channels remaining in the given
direction, then the behavior shall be to return to the beginning (or end) of the channel list and continue.
For example, if the current channel is at index 0 and count value of -1 is given, then the current channel
should change to the last channel.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.4

#### Defined in

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L73)
