[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/media-input/export](../../../README.md) / [MediaInputInterface](../README.md) / NameUpdates

# Interface: NameUpdates

## Methods

### renameInput()

> **renameInput**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Upon receipt, this shall rename the input at a specific index in the Input List. Updates to the input name
shall appear in the device’s settings menus.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 6.9.4.4

#### Source

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L60)
