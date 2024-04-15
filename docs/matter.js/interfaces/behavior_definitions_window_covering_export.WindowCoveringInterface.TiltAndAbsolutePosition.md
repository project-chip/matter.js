[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md) / [WindowCoveringInterface](../modules/behavior_definitions_window_covering_export.WindowCoveringInterface.md) / TiltAndAbsolutePosition

# Interface: TiltAndAbsolutePosition

[behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md).[WindowCoveringInterface](../modules/behavior_definitions_window_covering_export.WindowCoveringInterface.md).TiltAndAbsolutePosition

## Table of contents

### Methods

- [goToTiltValue](behavior_definitions_window_covering_export.WindowCoveringInterface.TiltAndAbsolutePosition.md#gototiltvalue)

## Methods

### goToTiltValue

▸ **goToTiltValue**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt of this command, the Window Covering will adjust the window so the physical tilt is at the tilt
value specified in the payload of this command as long as that value is not larger than
InstalledOpenLimitTilt attribute and not smaller than InstalledClosedLimitTilt attribute. Once the command
is received the TargetPositionTiltPercent100ths attribute will update its value accordingly. If the tilt
value is out of bounds a response containing the status of CONSTRAINT_ERROR will be returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L274)
