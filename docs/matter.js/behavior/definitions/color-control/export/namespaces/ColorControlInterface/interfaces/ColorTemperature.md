[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/color-control/export](../../../README.md) / [ColorControlInterface](../README.md) / ColorTemperature

# Interface: ColorTemperature

## Methods

### moveColorTemperature()

> **moveColorTemperature**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 3.2.11.21

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L198)

***

### moveToColorTemperature()

> **moveToColorTemperature**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 3.2.11.14

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:191](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L191)

***

### stepColorTemperature()

> **stepColorTemperature**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified step
size.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 3.2.11.22

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L206)
