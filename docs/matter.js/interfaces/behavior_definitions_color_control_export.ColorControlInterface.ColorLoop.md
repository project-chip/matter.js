[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md) / [ColorControlInterface](../modules/behavior_definitions_color_control_export.ColorControlInterface.md) / ColorLoop

# Interface: ColorLoop

[behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md).[ColorControlInterface](../modules/behavior_definitions_color_control_export.ColorControlInterface.md).ColorLoop

## Table of contents

### Methods

- [colorLoopSet](behavior_definitions_color_control_export.ColorControlInterface.ColorLoop.md#colorloopset)

## Methods

### colorLoopSet

▸ **colorLoopSet**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through its
range of hues.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](tlv_export.FieldType.md)\<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `startHue`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `time`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateFlags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `reserved`: [`BitField`](../modules/schema_export.md#bitfield) ; `updateAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `updateDirection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `updateStartHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `updateTime`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.19

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:250](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L250)
