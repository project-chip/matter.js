[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/channel/export](../../../README.md) / [ChannelInterface](../README.md) / ChannelListOrLineupInfo

# Interface: ChannelListOrLineupInfo

## Methods

### changeChannel()

> **changeChannel**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

Change the channel to the channel case-insensitive exact matching the value passed as an argument.

The match priority order shall be: AffiliateCallSign ("KCTS"), CallSign ("PBS"), Name ("Comedy Central"),
Number ("13.1")

Upon receipt, this shall generate a ChangeChannelResponse command.

Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 6.6.4.1

#### Source

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L89)
