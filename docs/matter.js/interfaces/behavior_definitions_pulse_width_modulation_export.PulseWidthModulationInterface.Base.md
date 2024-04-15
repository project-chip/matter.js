[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/pulse-width-modulation/export](../modules/behavior_definitions_pulse_width_modulation_export.md) / [PulseWidthModulationInterface](../modules/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.md) / Base

# Interface: Base

[behavior/definitions/pulse-width-modulation/export](../modules/behavior_definitions_pulse_width_modulation_export.md).[PulseWidthModulationInterface](../modules/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.md).Base

## Table of contents

### Methods

- [move](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.Base.md#move)
- [moveToLevel](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.Base.md#movetolevel)
- [moveToLevelWithOnOff](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.Base.md#movetolevelwithonoff)
- [moveWithOnOff](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.Base.md#movewithonoff)
- [step](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.Base.md#step)
- [stepWithOnOff](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.Base.md#stepwithonoff)
- [stop](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.Base.md#stop)
- [stopWithOnOff](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.Base.md#stopwithonoff)

## Methods

### move

▸ **move**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.2

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L56)

___

### moveToLevel

▸ **moveToLevel**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.1

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L51)

___

### moveToLevelWithOnOff

▸ **moveToLevelWithOnOff**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L80)

___

### moveWithOnOff

▸ **moveWithOnOff**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L85)

___

### step

▸ **step**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second.
A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this
as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is
able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `stepSize`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.3

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L70)

___

### stepWithOnOff

▸ **stepWithOnOff**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L90)

___

### stop

▸ **stop**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.4

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L75)

___

### stopWithOnOff

▸ **stopWithOnOff**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L95)
