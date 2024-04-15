[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/electrical-measurement/export](../modules/behavior_definitions_electrical_measurement_export.md) / [ElectricalMeasurementInterface](../modules/behavior_definitions_electrical_measurement_export.ElectricalMeasurementInterface.md) / Base

# Interface: Base

[behavior/definitions/electrical-measurement/export](../modules/behavior_definitions_electrical_measurement_export.md).[ElectricalMeasurementInterface](../modules/behavior_definitions_electrical_measurement_export.ElectricalMeasurementInterface.md).Base

## Table of contents

### Methods

- [getMeasurementProfileCommand](behavior_definitions_electrical_measurement_export.ElectricalMeasurementInterface.Base.md#getmeasurementprofilecommand)
- [getProfileInfoCommand](behavior_definitions_electrical_measurement_export.ElectricalMeasurementInterface.Base.md#getprofileinfocommand)

## Methods

### getMeasurementProfileCommand

▸ **getMeasurementProfileCommand**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `numberOfIntervals`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `startTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts#L18)

___

### getProfileInfoCommand

▸ **getProfileInfoCommand**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts#L17)
