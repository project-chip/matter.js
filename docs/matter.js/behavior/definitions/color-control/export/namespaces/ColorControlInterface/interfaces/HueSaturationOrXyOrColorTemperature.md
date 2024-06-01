[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/color-control/export](../../../README.md) / [ColorControlInterface](../README.md) / HueSaturationOrXyOrColorTemperature

# Interface: HueSaturationOrXyOrColorTemperature

## Methods

### stopMoveStep()

> **stopMoveStep**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this
automatically provides symmetry to the Level Control cluster.)

Note: the StopMoveStep command has no effect on an active color loop.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 3.2.11.20

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L262)
