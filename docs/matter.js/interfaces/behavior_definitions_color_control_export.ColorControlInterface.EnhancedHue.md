[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md) / [ColorControlInterface](../modules/behavior_definitions_color_control_export.ColorControlInterface.md) / EnhancedHue

# Interface: EnhancedHue

[behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md).[ColorControlInterface](../modules/behavior_definitions_color_control_export.ColorControlInterface.md).EnhancedHue

## Table of contents

### Methods

- [enhancedMoveHue](behavior_definitions_color_control_export.ColorControlInterface.EnhancedHue.md#enhancedmovehue)
- [enhancedMoveToHue](behavior_definitions_color_control_export.ColorControlInterface.EnhancedHue.md#enhancedmovetohue)
- [enhancedMoveToHueAndSaturation](behavior_definitions_color_control_export.ColorControlInterface.EnhancedHue.md#enhancedmovetohueandsaturation)
- [enhancedStepHue](behavior_definitions_color_control_export.ColorControlInterface.EnhancedHue.md#enhancedstephue)

## Methods

### enhancedMoveHue

▸ **enhancedMoveHue**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their current
hue to a target hue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.16

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:224](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L224)

___

### enhancedMoveToHue

▸ **enhancedMoveToHue**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their current
hue to a target hue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](tlv_export.FieldType.md)\<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.15

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:216](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L216)

___

### enhancedMoveToHueAndSaturation

▸ **enhancedMoveToHueAndSaturation**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition from
their current hue to a target hue and from their current saturation to a target saturation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enhancedHue`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.18

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:240](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L240)

___

### enhancedStepHue

▸ **enhancedStepHue**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a
target hue, resulting in a linear transition through XY space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.17

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:232](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L232)
