[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/media-input/export](../modules/behavior_definitions_media_input_export.md) / [MediaInputBehavior](../modules/behavior_definitions_media_input_export.MediaInputBehavior.md) / State

# Interface: State

[behavior/definitions/media-input/export](../modules/behavior_definitions_media_input_export.md).[MediaInputBehavior](../modules/behavior_definitions_media_input_export.MediaInputBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_media_input_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [currentInput](behavior_definitions_media_input_export.MediaInputBehavior.State.md#currentinput)
- [inputList](behavior_definitions_media_input_export.MediaInputBehavior.State.md#inputlist)

## Properties

### currentInput

• **currentInput**: `number`

This field contains the value of the index field of the currently selected InputInfoStruct.

**`See`**

MatterSpecification.v11.Cluster § 6.9.3.2

#### Inherited from

StateType.currentInput

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:185](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L185)

___

### inputList

• **inputList**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[]

This list provides the media inputs supported by the device.

**`See`**

MatterSpecification.v11.Cluster § 6.9.3.1

#### Inherited from

StateType.inputList

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L178)
