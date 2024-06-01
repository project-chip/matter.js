[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/color-control/export](../../../README.md) / [ColorControlInterface](../README.md) / ColorLoop

# Interface: ColorLoop

## Methods

### colorLoopSet()

> **colorLoopSet**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through its
range of hues.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 3.2.11.19

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:250](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L250)
