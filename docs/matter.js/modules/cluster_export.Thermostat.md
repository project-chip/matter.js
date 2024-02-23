[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Thermostat

# Namespace: Thermostat

[cluster/export](cluster_export.md).Thermostat

## Table of contents

### Enumerations

- [AcCapacityFormat](../enums/cluster_export.Thermostat.AcCapacityFormat.md)
- [AcCompressorType](../enums/cluster_export.Thermostat.AcCompressorType.md)
- [AcLouverPosition](../enums/cluster_export.Thermostat.AcLouverPosition.md)
- [AcRefrigerantType](../enums/cluster_export.Thermostat.AcRefrigerantType.md)
- [AcType](../enums/cluster_export.Thermostat.AcType.md)
- [ControlSequenceOfOperation](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md)
- [Feature](../enums/cluster_export.Thermostat.Feature.md)
- [SetpointAdjustMode](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)
- [SetpointChangeSource](../enums/cluster_export.Thermostat.SetpointChangeSource.md)
- [StartOfWeek](../enums/cluster_export.Thermostat.StartOfWeek.md)
- [SystemMode](../enums/cluster_export.Thermostat.SystemMode.md)
- [TemperatureSetpointHold](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md)
- [ThermostatRunningMode](../enums/cluster_export.Thermostat.ThermostatRunningMode.md)

### Type Aliases

- [Extension](cluster_export.Thermostat.md#extension)

### Variables

- [AcErrorCode](cluster_export.Thermostat.md#acerrorcode)
- [AlarmMask](cluster_export.Thermostat.md#alarmmask)
- [AutoModeComponent](cluster_export.Thermostat.md#automodecomponent)
- [Base](cluster_export.Thermostat.md#base)
- [Cluster](cluster_export.Thermostat.md#cluster)
- [Complete](cluster_export.Thermostat.md#complete)
- [CoolingAndOccupancyComponent](cluster_export.Thermostat.md#coolingandoccupancycomponent)
- [CoolingComponent](cluster_export.Thermostat.md#coolingcomponent)
- [DayOfWeek](cluster_export.Thermostat.md#dayofweek)
- [HeatingAndOccupancyComponent](cluster_export.Thermostat.md#heatingandoccupancycomponent)
- [HeatingComponent](cluster_export.Thermostat.md#heatingcomponent)
- [ModeForSequence](cluster_export.Thermostat.md#modeforsequence)
- [NotLocalTemperatureNotExposedComponent](cluster_export.Thermostat.md#notlocaltemperaturenotexposedcomponent)
- [Occupancy](cluster_export.Thermostat.md#occupancy)
- [OccupancyComponent](cluster_export.Thermostat.md#occupancycomponent)
- [RemoteSensing](cluster_export.Thermostat.md#remotesensing)
- [ScheduleConfigurationComponent](cluster_export.Thermostat.md#scheduleconfigurationcomponent)
- [SetbackAndOccupancyComponent](cluster_export.Thermostat.md#setbackandoccupancycomponent)
- [SetbackComponent](cluster_export.Thermostat.md#setbackcomponent)
- [ThermostatProgrammingOperationMode](cluster_export.Thermostat.md#thermostatprogrammingoperationmode)
- [ThermostatRunningState](cluster_export.Thermostat.md#thermostatrunningstate)
- [TlvGetWeeklyScheduleRequest](cluster_export.Thermostat.md#tlvgetweeklyschedulerequest)
- [TlvGetWeeklyScheduleResponse](cluster_export.Thermostat.md#tlvgetweeklyscheduleresponse)
- [TlvSetWeeklyScheduleRequest](cluster_export.Thermostat.md#tlvsetweeklyschedulerequest)
- [TlvSetpointRaiseLowerRequest](cluster_export.Thermostat.md#tlvsetpointraiselowerrequest)
- [TlvThermostatScheduleTransition](cluster_export.Thermostat.md#tlvthermostatscheduletransition)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.Thermostat.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `occupancy`: ``true``  } ? typeof [`OccupancyComponent`](cluster_export.Thermostat.md#occupancycomponent) : {} & `SF` extends \{ `heating`: ``true``  } ? typeof [`HeatingComponent`](cluster_export.Thermostat.md#heatingcomponent) : {} & `SF` extends \{ `cooling`: ``true``  } ? typeof [`CoolingComponent`](cluster_export.Thermostat.md#coolingcomponent) : {} & `SF` extends \{ `localTemperatureNotExposed`: ``false``  } ? typeof [`NotLocalTemperatureNotExposedComponent`](cluster_export.Thermostat.md#notlocaltemperaturenotexposedcomponent) : {} & `SF` extends \{ `cooling`: ``true`` ; `occupancy`: ``true``  } ? typeof [`CoolingAndOccupancyComponent`](cluster_export.Thermostat.md#coolingandoccupancycomponent) : {} & `SF` extends \{ `heating`: ``true`` ; `occupancy`: ``true``  } ? typeof [`HeatingAndOccupancyComponent`](cluster_export.Thermostat.md#heatingandoccupancycomponent) : {} & `SF` extends \{ `autoMode`: ``true``  } ? typeof [`AutoModeComponent`](cluster_export.Thermostat.md#automodecomponent) : {} & `SF` extends \{ `scheduleConfiguration`: ``true``  } ? typeof [`ScheduleConfigurationComponent`](cluster_export.Thermostat.md#scheduleconfigurationcomponent) : {} & `SF` extends \{ `setback`: ``true``  } ? typeof [`SetbackComponent`](cluster_export.Thermostat.md#setbackcomponent) : {} & `SF` extends \{ `occupancy`: ``true`` ; `setback`: ``true``  } ? typeof [`SetbackAndOccupancyComponent`](cluster_export.Thermostat.md#setbackandoccupancycomponent) : {} & `SF` extends \{ `autoMode`: ``true`` ; `heating`: ``false``  } ? `never` : {} & `SF` extends \{ `autoMode`: ``true`` ; `cooling`: ``false``  } ? `never` : {} & `SF` extends \{ `cooling`: ``false`` ; `heating`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1537](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1537)

## Variables

### AcErrorCode

• `Const` **AcErrorCode**: `Object`

The value of the Thermostat acErrorCode attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.48

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `coilSensorFail` | [`BitFlag`](schema_export.md#bitflag) | Indoor Coil Temperature Sensor Failure |
| `compressorFail` | [`BitFlag`](schema_export.md#bitflag) | Compressor Failure or Refrigerant Leakage |
| `fanFail` | [`BitFlag`](schema_export.md#bitflag) | Fan Failure |
| `outdoorSensorFail` | [`BitFlag`](schema_export.md#bitflag) | Outdoor Temperature Sensor Failure |
| `roomSensorFail` | [`BitFlag`](schema_export.md#bitflag) | Room Temperature Sensor Failure |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:336](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L336)

___

### AlarmMask

• `Const` **AlarmMask**: `Object`

The value of the Thermostat alarmMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.25

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hardwareFailure` | [`BitFlag`](schema_export.md#bitflag) |
| `initializationFailure` | [`BitFlag`](schema_export.md#bitflag) |
| `selfCalibrationFailure` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:136](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L136)

___

### AutoModeComponent

• `Const` **AutoModeComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature AutoMode.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1274](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1274)

___

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag) ; `economy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fan`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag) ; `heat`: [`BitFlag`](schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>

These elements and properties are present in all Thermostat clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:579](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L579)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag) ; `economy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fan`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag) ; `heat`: [`BitFlag`](schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `events`: {} ; `features`: \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: [`Branded`](util_export.md#branded)\<``513`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"Thermostat"`` ; `revision`: ``6`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag) ; `economy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fan`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag) ; `heat`: [`BitFlag`](schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.Thermostat.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  }, `T`\>\> = extender }

Thermostat

This cluster provides an interface to the functionality of a thermostat.

ThermostatCluster supports optional features that you can enable with the ThermostatCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1494](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1494)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: []  } ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `autoMode`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `cooling`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `heating`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag) ; `economy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `autoMode`: `boolean` = true }]  } ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fan`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag) ; `heat`: [`BitFlag`](schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `cooling`: `boolean` = true; `occupancy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `heating`: `boolean` = true; `occupancy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true; `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true; `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true; `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: ``513`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"Thermostat"`` = Cluster.name; `revision`: ``6`` = Cluster.revision }\>

This cluster supports all Thermostat features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1570](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1570)

___

### CoolingAndOccupancyComponent

• `Const` **CoolingAndOccupancyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Cooling and Occupancy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1228](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1228)

___

### CoolingComponent

• `Const` **CoolingComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Cooling.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1111](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1111)

___

### DayOfWeek

• `Const` **DayOfWeek**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `away` | [`BitFlag`](schema_export.md#bitflag) |
| `friday` | [`BitFlag`](schema_export.md#bitflag) |
| `monday` | [`BitFlag`](schema_export.md#bitflag) |
| `saturday` | [`BitFlag`](schema_export.md#bitflag) |
| `sunday` | [`BitFlag`](schema_export.md#bitflag) |
| `thursday` | [`BitFlag`](schema_export.md#bitflag) |
| `tuesday` | [`BitFlag`](schema_export.md#bitflag) |
| `wednesday` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:456](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L456)

___

### HeatingAndOccupancyComponent

• `Const` **HeatingAndOccupancyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Heating and Occupancy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1251](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1251)

___

### HeatingComponent

• `Const` **HeatingComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Heating.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1019](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1019)

___

### ModeForSequence

• `Const` **ModeForSequence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coolSetpointPresent` | [`BitFlag`](schema_export.md#bitflag) |
| `heatSetpointPresent` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:467](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L467)

___

### NotLocalTemperatureNotExposedComponent

• `Const` **NotLocalTemperatureNotExposedComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if doesn't support feature LTNE.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1201](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1201)

___

### Occupancy

• `Const` **Occupancy**: `Object`

The value of the Thermostat occupancy attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.4

#### Type declaration

| Name | Type |
| :------ | :------ |
| `occupied` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:428](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L428)

___

### OccupancyComponent

• `Const` **OccupancyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Occupancy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:999](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L999)

___

### RemoteSensing

• `Const` **RemoteSensing**: `Object`

The value of the Thermostat remoteSensing attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.22

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `localTemperature` | [`BitFlag`](schema_export.md#bitflag) | When set, LocalTemperature Value is derived from a remote node |
| `occupancy` | [`BitFlag`](schema_export.md#bitflag) | When set, Occupancy is derived from a remote node |
| `outdoorTemperature` | [`BitFlag`](schema_export.md#bitflag) | When set, OutdoorTemperature is derived from a remote node |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:36](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L36)

___

### ScheduleConfigurationComponent

• `Const` **ScheduleConfigurationComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `void`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature ScheduleConfiguration.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1308](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1308)

___

### SetbackAndOccupancyComponent

• `Const` **SetbackAndOccupancyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Setback and Occupancy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1426](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1426)

___

### SetbackComponent

• `Const` **SetbackComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Setback.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1365](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1365)

___

### ThermostatProgrammingOperationMode

• `Const` **ThermostatProgrammingOperationMode**: `Object`

The value of the Thermostat thermostatProgrammingOperationMode attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.32

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoRecovery` | [`BitFlag`](schema_export.md#bitflag) | Auto/recovery mode |
| `economy` | [`BitFlag`](schema_export.md#bitflag) | Economy/EnergyStar mode |
| `scheduleActive` | [`BitFlag`](schema_export.md#bitflag) | Schedule programming mode. This enables any programmed weekly schedule configurations. |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:164](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L164)

___

### ThermostatRunningState

• `Const` **ThermostatRunningState**: `Object`

The value of the Thermostat thermostatRunningState attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.33

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cool` | [`BitFlag`](schema_export.md#bitflag) | Cool State On |
| `coolStage2` | [`BitFlag`](schema_export.md#bitflag) | Cool 2nd Stage State On |
| `fan` | [`BitFlag`](schema_export.md#bitflag) | Fan State On |
| `fanStage2` | [`BitFlag`](schema_export.md#bitflag) | Fan 2nd Stage State On |
| `fanStage3` | [`BitFlag`](schema_export.md#bitflag) | Fan 3rd Stage Stage On |
| `heat` | [`BitFlag`](schema_export.md#bitflag) | Heat State On |
| `heatStage2` | [`BitFlag`](schema_export.md#bitflag) | Heat 2nd Stage State On |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:186](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L186)

___

### TlvGetWeeklyScheduleRequest

• `Const` **TlvGetWeeklyScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>

Input to the Thermostat getWeeklySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:505](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L505)

___

### TlvGetWeeklyScheduleResponse

• `Const` **TlvGetWeeklyScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:513](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L513)

___

### TlvSetWeeklyScheduleRequest

• `Const` **TlvSetWeeklyScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>

Input to the Thermostat setWeeklySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:493](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L493)

___

### TlvSetpointRaiseLowerRequest

• `Const` **TlvSetpointRaiseLowerRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>

Input to the Thermostat setpointRaiseLower command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:418](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L418)

___

### TlvThermostatScheduleTransition

• `Const` **TlvThermostatScheduleTransition**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

This represents a single transition in a Thermostat schedule

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.9.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:474](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L474)
