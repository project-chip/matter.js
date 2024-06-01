[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/channel/export](../../../README.md) / [ChannelInterface](../README.md) / Base

# Interface: Base

## Methods

### changeChannelByNumber()

> **changeChannelByNumber**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Change the channel to the channel with the given Number in the ChannelList attribute.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 6.6.4.3

#### Source

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L60)

***

### skipChannel()

> **skipChannel**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command provides channel up and channel down functionality, but allows channel index jumps of size
Count.

When the value of the increase or decrease is larger than the number of channels remaining in the given
direction, then the behavior shall be to return to the beginning (or end) of the channel list and continue.
For example, if the current channel is at index 0 and count value of -1 is given, then the current channel
should change to the last channel.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 6.6.4.4

#### Source

[packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/channel/ChannelInterface.ts#L73)
