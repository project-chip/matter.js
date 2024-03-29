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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.12

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:180](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L180)

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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.11

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:175](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L175)

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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.13

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:185](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L185)
