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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.4

#### Defined in

[packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts:61](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/media-input/MediaInputInterface.ts#L61)
