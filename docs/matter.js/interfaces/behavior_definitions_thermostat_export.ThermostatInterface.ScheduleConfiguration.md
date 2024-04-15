[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/thermostat/export](../modules/behavior_definitions_thermostat_export.md) / [ThermostatInterface](../modules/behavior_definitions_thermostat_export.ThermostatInterface.md) / ScheduleConfiguration

# Interface: ScheduleConfiguration

[behavior/definitions/thermostat/export](../modules/behavior_definitions_thermostat_export.md).[ThermostatInterface](../modules/behavior_definitions_thermostat_export.ThermostatInterface.md).ScheduleConfiguration

## Table of contents

### Methods

- [clearWeeklySchedule](behavior_definitions_thermostat_export.ThermostatInterface.ScheduleConfiguration.md#clearweeklyschedule)
- [getWeeklySchedule](behavior_definitions_thermostat_export.ThermostatInterface.ScheduleConfiguration.md#getweeklyschedule)
- [setWeeklySchedule](behavior_definitions_thermostat_export.ThermostatInterface.ScheduleConfiguration.md#setweeklyschedule)

## Methods

### clearWeeklySchedule

▸ **clearWeeklySchedule**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L60)

___

### getWeeklySchedule

▸ **getWeeklySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `friday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `monday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `saturday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sunday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thursday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `friday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `monday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `saturday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sunday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thursday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `modeToReturn`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `friday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `monday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `saturday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sunday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thursday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L55)

___

### setWeeklySchedule

▸ **setWeeklySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `friday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `monday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `saturday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sunday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thursday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L50)
