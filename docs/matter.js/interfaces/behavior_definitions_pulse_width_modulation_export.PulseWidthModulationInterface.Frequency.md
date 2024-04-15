[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/pulse-width-modulation/export](../modules/behavior_definitions_pulse_width_modulation_export.md) / [PulseWidthModulationInterface](../modules/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.md) / Frequency

# Interface: Frequency

[behavior/definitions/pulse-width-modulation/export](../modules/behavior_definitions_pulse_width_modulation_export.md).[PulseWidthModulationInterface](../modules/behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.md).Frequency

## Table of contents

### Methods

- [moveToClosestFrequency](behavior_definitions_pulse_width_modulation_export.PulseWidthModulationInterface.Frequency.md#movetoclosestfrequency)

## Methods

### moveToClosestFrequency

▸ **moveToClosestFrequency**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `frequency`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.5

#### Defined in

[packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/pulse-width-modulation/PulseWidthModulationInterface.ts#L102)
