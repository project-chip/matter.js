[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/channel/export](../../../README.md) / [ChannelBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### currentChannel?

> `optional` **currentChannel**: `null` \| [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

This optional field contains the current channel. When supported but a channel is not currently tuned to
(if a content application is in foreground), the value of the field shall be null.

#### See

MatterSpecification.v11.Cluster § 6.6.3.3

#### Inherited from

`StateType.currentChannel`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:345](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L345)
