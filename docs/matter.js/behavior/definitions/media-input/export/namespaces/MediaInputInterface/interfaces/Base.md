[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/media-input/export](../../../README.md) / [MediaInputInterface](../README.md) / Base

# Interface: Base

## Methods

### hideInputStatus()

> **hideInputStatus**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Upon receipt, this shall hide the input list from the screen.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 6.9.4.3

#### Source

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L50)

***

### selectInput()

> **selectInput**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Upon receipt, this shall change the media input on the device to the input at a specific index in the Input
List.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 6.9.4.1

#### Source

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L36)

***

### showInputStatus()

> **showInputStatus**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Upon receipt, this shall display the active status of the input list on screen.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 6.9.4.2

#### Source

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L43)
