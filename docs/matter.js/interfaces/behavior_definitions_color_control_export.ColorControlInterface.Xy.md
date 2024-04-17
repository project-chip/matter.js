[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md) / [ColorControlInterface](../modules/behavior_definitions_color_control_export.ColorControlInterface.md) / Xy

# Interface: Xy

[behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md).[ColorControlInterface](../modules/behavior_definitions_color_control_export.ColorControlInterface.md).Xy

## Table of contents

### Methods

- [moveColor](behavior_definitions_color_control_export.ColorControlInterface.Xy.md#movecolor)
- [moveToColor](behavior_definitions_color_control_export.ColorControlInterface.Xy.md#movetocolor)
- [stepColor](behavior_definitions_color_control_export.ColorControlInterface.Xy.md#stepcolor)

## Methods

### moveColor

▸ **moveColor**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rateX`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rateY`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.12

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L179)

___

### moveToColor

▸ **moveToColor**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorX`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `colorY`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.11

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L174)

___

### stepColor

▸ **stepColor**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepX`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `stepY`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.13

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:184](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L184)
