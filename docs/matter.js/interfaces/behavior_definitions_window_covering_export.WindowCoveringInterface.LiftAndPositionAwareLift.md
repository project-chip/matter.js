[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md) / [WindowCoveringInterface](../modules/behavior_definitions_window_covering_export.WindowCoveringInterface.md) / LiftAndPositionAwareLift

# Interface: LiftAndPositionAwareLift

[behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md).[WindowCoveringInterface](../modules/behavior_definitions_window_covering_export.WindowCoveringInterface.md).LiftAndPositionAwareLift

## Table of contents

### Methods

- [goToLiftPercentage](behavior_definitions_window_covering_export.WindowCoveringInterface.LiftAndPositionAwareLift.md#gotoliftpercentage)

## Methods

### goToLiftPercentage

▸ **goToLiftPercentage**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt of this command, the server will adjust the window covering to the lift/slide percentage
specified in the payload of this command.

If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall be set
to LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be set to
LiftPercentageValue * 100.

If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to to
LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not
LiftPercent100thsValue) has a value to set the target position.

If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only
a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be
returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.5

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:224](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L224)
