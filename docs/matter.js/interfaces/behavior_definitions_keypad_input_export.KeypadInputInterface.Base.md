[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/keypad-input/export](../modules/behavior_definitions_keypad_input_export.md) / [KeypadInputInterface](../modules/behavior_definitions_keypad_input_export.KeypadInputInterface.md) / Base

# Interface: Base

[behavior/definitions/keypad-input/export](../modules/behavior_definitions_keypad_input_export.md).[KeypadInputInterface](../modules/behavior_definitions_keypad_input_export.KeypadInputInterface.md).Base

## Table of contents

### Methods

- [sendKey](behavior_definitions_keypad_input_export.KeypadInputInterface.Base.md#sendkey)

## Methods

### sendKey

▸ **sendKey**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>\>

Upon receipt, this shall process a keycode as input to the media device.

If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will
consider the first key press to be a press and hold. When such a repeat KeyCode value is not received within
200ms, then the endpoint will consider the last key press to be a release.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.8.3.1

#### Defined in

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts#L42)
