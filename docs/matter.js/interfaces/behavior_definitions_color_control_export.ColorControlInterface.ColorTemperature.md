[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md) / [ColorControlInterface](../modules/behavior_definitions_color_control_export.ColorControlInterface.md) / ColorTemperature

# Interface: ColorTemperature

[behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md).[ColorControlInterface](../modules/behavior_definitions_color_control_export.ColorControlInterface.md).ColorTemperature

## Table of contents

### Methods

- [moveColorTemperature](behavior_definitions_color_control_export.ColorControlInterface.ColorTemperature.md#movecolortemperature)
- [moveToColorTemperature](behavior_definitions_color_control_export.ColorControlInterface.ColorTemperature.md#movetocolortemperature)
- [stepColorTemperature](behavior_definitions_color_control_export.ColorControlInterface.ColorTemperature.md#stepcolortemperature)

## Methods

### moveColorTemperature

▸ **moveColorTemperature**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `moveMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.21

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L198)

___

### moveToColorTemperature

▸ **moveToColorTemperature**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMireds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.14

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:191](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L191)

___

### stepColorTemperature

▸ **stepColorTemperature**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified step
size.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `stepSize`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.22

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:206](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L206)
