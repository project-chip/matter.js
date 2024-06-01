[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/color-control/export](../../../README.md) / [ColorControlInterface](../README.md) / EnhancedHue

# Interface: EnhancedHue

## Methods

### enhancedMoveHue()

> **enhancedMoveHue**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their current
hue to a target hue.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 3.2.11.16

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L224)

***

### enhancedMoveToHue()

> **enhancedMoveToHue**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their current
hue to a target hue.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 3.2.11.15

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L216)

***

### enhancedMoveToHueAndSaturation()

> **enhancedMoveToHueAndSaturation**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition from
their current hue to a target hue and from their current saturation to a target saturation.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 3.2.11.18

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L240)

***

### enhancedStepHue()

> **enhancedStepHue**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a
target hue, resulting in a linear transition through XY space.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 3.2.11.17

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:232](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L232)
