[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/media-input/export](../modules/behavior_definitions_media_input_export.md) / [MediaInputInterface](../modules/behavior_definitions_media_input_export.MediaInputInterface.md) / NameUpdates

# Interface: NameUpdates

[behavior/definitions/media-input/export](../modules/behavior_definitions_media_input_export.md).[MediaInputInterface](../modules/behavior_definitions_media_input_export.MediaInputInterface.md).NameUpdates

## Table of contents

### Methods

- [renameInput](behavior_definitions_media_input_export.MediaInputInterface.NameUpdates.md#renameinput)

## Methods

### renameInput

▸ **renameInput**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt, this shall rename the input at a specific index in the Input List. Updates to the input name
shall appear in the device’s settings menus.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 6.9.4.4

#### Defined in

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L60)
