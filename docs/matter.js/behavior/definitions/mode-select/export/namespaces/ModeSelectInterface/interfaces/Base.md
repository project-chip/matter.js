[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/mode-select/export](../../../README.md) / [ModeSelectInterface](../README.md) / Base

# Interface: Base

## Methods

### changeToMode()

> **changeToMode**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

On receipt of this command, if the NewMode field indicates a valid mode transition within the supported
list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the

server shall respond with an INVALID_COMMAND status response.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.8.6.1

#### Source

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts#L33)
