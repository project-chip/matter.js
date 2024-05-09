[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/media-input/export](../modules/behavior_definitions_media_input_export.md) / [MediaInputInterface](../modules/behavior_definitions_media_input_export.MediaInputInterface.md) / Base

# Interface: Base

[behavior/definitions/media-input/export](../modules/behavior_definitions_media_input_export.md).[MediaInputInterface](../modules/behavior_definitions_media_input_export.MediaInputInterface.md).Base

## Table of contents

### Methods

- [hideInputStatus](behavior_definitions_media_input_export.MediaInputInterface.Base.md#hideinputstatus)
- [selectInput](behavior_definitions_media_input_export.MediaInputInterface.Base.md#selectinput)
- [showInputStatus](behavior_definitions_media_input_export.MediaInputInterface.Base.md#showinputstatus)

## Methods

### hideInputStatus

▸ **hideInputStatus**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt, this shall hide the input list from the screen.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 6.9.4.3

#### Defined in

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L50)

___

### selectInput

▸ **selectInput**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt, this shall change the media input on the device to the input at a specific index in the Input
List.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 6.9.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L36)

___

### showInputStatus

▸ **showInputStatus**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt, this shall display the active status of the input list on screen.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 6.9.4.2

#### Defined in

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L43)
