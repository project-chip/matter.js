[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/keypad-input/export](../../../README.md) / [KeypadInputInterface](../README.md) / Base

# Interface: Base

## Methods

### sendKey()

> **sendKey**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

Upon receipt, this shall process a keycode as input to the media device.

If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will
consider the first key press to be a press and hold. When such a repeat KeyCode value is not received within
200ms, then the endpoint will consider the last key press to be a release.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 6.8.3.1

#### Source

[packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/keypad-input/KeypadInputInterface.ts#L42)
