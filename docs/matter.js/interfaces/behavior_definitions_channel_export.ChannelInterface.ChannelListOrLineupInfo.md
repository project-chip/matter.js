[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/channel/export](../modules/behavior_definitions_channel_export.md) / [ChannelInterface](../modules/behavior_definitions_channel_export.ChannelInterface.md) / ChannelListOrLineupInfo

# Interface: ChannelListOrLineupInfo

[behavior/definitions/channel/export](../modules/behavior_definitions_channel_export.md).[ChannelInterface](../modules/behavior_definitions_channel_export.ChannelInterface.md).ChannelListOrLineupInfo

## Table of contents

### Methods

- [changeChannel](behavior_definitions_channel_export.ChannelInterface.ChannelListOrLineupInfo.md#changechannel)

## Methods

### changeChannel

▸ **changeChannel**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>\>

Change the channel to the channel case-insensitive exact matching the value passed as an argument.

The match priority order shall be: AffiliateCallSign ("KCTS"), CallSign ("PBS"), Name ("Comedy Central"),
Number ("13.1")

Upon receipt, this shall generate a ChangeChannelResponse command.

Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L89)
