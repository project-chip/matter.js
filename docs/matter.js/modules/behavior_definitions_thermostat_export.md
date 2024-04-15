[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/thermostat/export

# Module: behavior/definitions/thermostat/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_thermostat_export._internal_.md)

### Namespaces

- [ThermostatBehavior](behavior_definitions_thermostat_export.ThermostatBehavior.md)
- [ThermostatInterface](behavior_definitions_thermostat_export.ThermostatInterface.md)

### Classes

- [ThermostatServer](../classes/behavior_definitions_thermostat_export.ThermostatServer.md)

### Interfaces

- [ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md)

### Type Aliases

- [GetWeeklyScheduleRequest](behavior_definitions_thermostat_export.md#getweeklyschedulerequest)
- [GetWeeklyScheduleResponse](behavior_definitions_thermostat_export.md#getweeklyscheduleresponse)
- [SetWeeklyScheduleRequest](behavior_definitions_thermostat_export.md#setweeklyschedulerequest)
- [SetpointRaiseLowerRequest](behavior_definitions_thermostat_export.md#setpointraiselowerrequest)
- [ThermostatInterface](behavior_definitions_thermostat_export.md#thermostatinterface)

### Variables

- [ThermostatBehavior](behavior_definitions_thermostat_export.md#thermostatbehavior)

## Type Aliases

### GetWeeklyScheduleRequest

Ƭ **GetWeeklyScheduleRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGetWeeklyScheduleRequest`](cluster_export.Thermostat.md#tlvgetweeklyschedulerequest)\>

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L26)

___

### GetWeeklyScheduleResponse

Ƭ **GetWeeklyScheduleResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGetWeeklyScheduleResponse`](cluster_export.Thermostat.md#tlvgetweeklyscheduleresponse)\>

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L31)

___

### SetWeeklyScheduleRequest

Ƭ **SetWeeklyScheduleRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSetWeeklyScheduleRequest`](cluster_export.Thermostat.md#tlvsetweeklyschedulerequest)\>

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L21)

___

### SetpointRaiseLowerRequest

Ƭ **SetpointRaiseLowerRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSetpointRaiseLowerRequest`](cluster_export.Thermostat.md#tlvsetpointraiselowerrequest)\>

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L16)

___

### ThermostatInterface

Ƭ **ThermostatInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_thermostat_export.ThermostatInterface.Base.md)  }, \{ `flags`: \{ `scheduleConfiguration`: ``true``  } ; `methods`: [`ScheduleConfiguration`](../interfaces/behavior_definitions_thermostat_export.ThermostatInterface.ScheduleConfiguration.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L33)

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L64)

## Variables

### ThermostatBehavior

• `Const` **ThermostatBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag) ; `economy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fan`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag) ; `heat`: [`BitFlag`](schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = OccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = HeatingComponent; `flags`: \{ `heating`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = CoolingComponent; `flags`: \{ `cooling`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  }  } = NotLocalTemperatureNotExposedComponent; `flags`: \{ `localTemperatureNotExposed`: ``false`` = false }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = CoolingAndOccupancyComponent; `flags`: \{ `cooling`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = HeatingAndOccupancyComponent; `flags`: \{ `heating`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  }  } = AutoModeComponent; `flags`: \{ `autoMode`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = ScheduleConfigurationComponent; `flags`: \{ `scheduleConfiguration`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackComponent; `flags`: \{ `setback`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackAndOccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true; `setback`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `heating`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `cooling`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `cooling`: ``false`` = false; `heating`: ``false`` = false }  }] ; `features`: \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ThermostatInterface`](behavior_definitions_thermostat_export.md#thermostatinterface)\>, [`ThermostatInterface`](behavior_definitions_thermostat_export.md#thermostatinterface)\>

ThermostatBehavior is the base class for objects that support interaction with [Thermostat.Cluster](cluster_export.Thermostat.md#cluster).

Thermostat.Cluster requires you to enable one or more optional features. You can do so using ThermostatBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatBehavior.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatBehavior.ts#L20)

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatBehavior.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatBehavior.ts#L25)

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatBehavior.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatBehavior.ts#L27)
