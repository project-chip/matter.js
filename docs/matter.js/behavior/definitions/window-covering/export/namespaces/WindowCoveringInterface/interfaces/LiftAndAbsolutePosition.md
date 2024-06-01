[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/window-covering/export](../../../README.md) / [WindowCoveringInterface](../README.md) / LiftAndAbsolutePosition

# Interface: LiftAndAbsolutePosition

## Methods

### goToLiftValue()

> **goToLiftValue**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Upon receipt of this command, the Window Covering will adjust the window so the physical lift/slide is at
the value specified in the payload of this command as long as that value is not larger than
InstalledOpenLimitLift attribute and not smaller than InstalledClosedLimitLift attribute. Once the command
is received the TargetPositionLiftPercent100ths attribute will update its value accordingly. If the value is
out of bounds a response containing the status of CONSTRAINT_ERROR will be returned.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 5.3.6.4

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:261](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L261)
