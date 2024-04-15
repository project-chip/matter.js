[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md) / [ColorControlInterface](../modules/behavior_definitions_color_control_export.ColorControlInterface.md) / HueSaturationOrXyOrColorTemperature

# Interface: HueSaturationOrXyOrColorTemperature

[behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md).[ColorControlInterface](../modules/behavior_definitions_color_control_export.ColorControlInterface.md).HueSaturationOrXyOrColorTemperature

## Table of contents

### Methods

- [stopMoveStep](behavior_definitions_color_control_export.ColorControlInterface.HueSaturationOrXyOrColorTemperature.md#stopmovestep)

## Methods

### stopMoveStep

▸ **stopMoveStep**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this
automatically provides symmetry to the Level Control cluster.)

Note: the StopMoveStep command has no effect on an active color loop.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.20

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:262](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L262)
