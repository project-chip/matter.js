[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/audio-output/export](../modules/behavior_definitions_audio_output_export.md) / [AudioOutputInterface](../modules/behavior_definitions_audio_output_export.AudioOutputInterface.md) / Base

# Interface: Base

[behavior/definitions/audio-output/export](../modules/behavior_definitions_audio_output_export.md).[AudioOutputInterface](../modules/behavior_definitions_audio_output_export.AudioOutputInterface.md).Base

## Table of contents

### Methods

- [selectOutput](behavior_definitions_audio_output_export.AudioOutputInterface.Base.md#selectoutput)

## Methods

### selectOutput

▸ **selectOutput**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.4

#### Defined in

[packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts:34](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/audio-output/AudioOutputInterface.ts#L34)
