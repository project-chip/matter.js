[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/level-control/export](../../../README.md) / [LevelControlInterface](../README.md) / Base

# Interface: Base

## Methods

### move()

> **move**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.6.6.2

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L76)

***

### moveToLevel()

> **moveToLevel**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.6.6.1

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L71)

***

### moveToLevelWithOnOff()

> **moveToLevelWithOnOff**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.6.6

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L100)

***

### moveWithOnOff()

> **moveWithOnOff**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.6.6

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L105)

***

### step()

> **step**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second.
A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this
as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is
able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.6.6.3

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L90)

***

### stepWithOnOff()

> **stepWithOnOff**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.6.6

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L110)

***

### stop()

> **stop**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.6.6.4

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L95)

***

### stopWithOnOff()

> **stopWithOnOff**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.6.6

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L115)
