[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md) / [WindowCoveringInterface](../modules/behavior_definitions_window_covering_export.WindowCoveringInterface.md) / Tilt

# Interface: Tilt

[behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md).[WindowCoveringInterface](../modules/behavior_definitions_window_covering_export.WindowCoveringInterface.md).Tilt

## Table of contents

### Methods

- [goToTiltPercentage](behavior_definitions_window_covering_export.WindowCoveringInterface.Tilt.md#gototiltpercentage)

## Methods

### goToTiltPercentage

▸ **goToTiltPercentage**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt of this command, the server will adjust the window covering to the tilt percentage specified in
the payload of this command.

If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute

shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be set
to TiltPercentageValue * 100.

If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to to
TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not
TiltPercent100thsValue) has a value to set the target position.

If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only
a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be
returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.7

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L201)
