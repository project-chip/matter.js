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

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1537](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1537)

## Variables

### AcErrorCode

• `Const` **AcErrorCode**: `Object`

The value of the Thermostat acErrorCode attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.48

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `coilSensorFail` | [`BitFlag`](schema_export.md#bitflag-1) | Indoor Coil Temperature Sensor Failure |
| `compressorFail` | [`BitFlag`](schema_export.md#bitflag-1) | Compressor Failure or Refrigerant Leakage |
| `fanFail` | [`BitFlag`](schema_export.md#bitflag-1) | Fan Failure |
| `outdoorSensorFail` | [`BitFlag`](schema_export.md#bitflag-1) | Outdoor Temperature Sensor Failure |
| `roomSensorFail` | [`BitFlag`](schema_export.md#bitflag-1) | Room Temperature Sensor Failure |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:336](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L336)

___

### AlarmMask

• `Const` **AlarmMask**: `Object`

The value of the Thermostat alarmMask attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.25

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hardwareFailure` | [`BitFlag`](schema_export.md#bitflag-1) |
| `initializationFailure` | [`BitFlag`](schema_export.md#bitflag-1) |
| `selfCalibrationFailure` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:136](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L136)

___

### AutoModeComponent

• `Const` **AutoModeComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature AutoMode.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1274](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1274)

___

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag-1) ; `economy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag-1) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag-1) ; `fan`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag-1) ; `heat`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `cooling`: [`BitFlag`](schema_export.md#bitflag-1) ; `heating`: [`BitFlag`](schema_export.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag-1) ; `setback`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>

These elements and properties are present in all Thermostat clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:579](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L579)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `acCapacity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag-1) ; `economy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag-1) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag-1) ; `fan`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag-1) ; `heat`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `autoMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `cooling`: [`BitFlag`](schema_export.md#bitflag-1) ; `heating`: [`BitFlag`](schema_export.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag-1) ; `setback`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `autoMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `cooling`: [`BitFlag`](schema_export.md#bitflag-1) ; `heating`: [`BitFlag`](schema_export.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag-1) ; `setback`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `events`: {} ; `features`: \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `cooling`: [`BitFlag`](schema_export.md#bitflag-1) ; `heating`: [`BitFlag`](schema_export.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag-1) ; `setback`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)\<``513`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"Thermostat"`` ; `revision`: ``6`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag-1) ; `economy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag-1) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag-1) ; `fan`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag-1) ; `heat`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `cooling`: [`BitFlag`](schema_export.md#bitflag-1) ; `heating`: [`BitFlag`](schema_export.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag-1) ; `setback`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.Thermostat.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `autoMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `cooling`: [`BitFlag`](schema_export.md#bitflag-1) ; `heating`: [`BitFlag`](schema_export.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag-1) ; `setback`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Thermostat

This cluster provides an interface to the functionality of a thermostat.

ThermostatCluster supports optional features that you can enable with the ThermostatCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1494](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1494)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `acCapacity`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag-1) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `alarmMask`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)\<`number`, `never`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `cooling`: [`BitFlag`](schema_export.md#bitflag-1) ; `heating`: [`BitFlag`](schema_export.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag-1) ; `setback`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `localTemperature`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number`, `any`\> ; `localTemperatureCalibration`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: []  } ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `minSetpointDeadBand`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `autoMode`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfDailyTransitions`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfWeeklyTransitions`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupancy`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedCoolingSetpoint`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `cooling`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedHeatingSetpoint`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `heating`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedSetback`: [`WritableAttribute`](cluster_export.md#writableattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedSetbackMax`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedSetbackMin`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `outdoorTemperature`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `piHeatingDemand`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `remoteSensing`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `systemMode`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag-1) ; `economy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `autoMode`: `boolean` = true }]  } ; `thermostatRunningState`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag-1) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag-1) ; `fan`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag-1) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag-1) ; `heat`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `unoccupiedCoolingSetpoint`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `cooling`: `boolean` = true; `occupancy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedHeatingSetpoint`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `heating`: `boolean` = true; `occupancy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedSetback`: [`WritableAttribute`](cluster_export.md#writableattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true; `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedSetbackMax`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true; `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedSetbackMin`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true; `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](cluster_export.md#command)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getRelayStatusLog`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag-1) ; `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag-1) ; `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setWeeklySchedule`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag-1) ; `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setpointRaiseLower`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `cooling`: [`BitFlag`](schema_export.md#bitflag-1) ; `heating`: [`BitFlag`](schema_export.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag-1) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag-1) ; `setback`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``513`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"Thermostat"`` = Cluster.name; `revision`: ``6`` = Cluster.revision }\>

This cluster supports all Thermostat features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1570](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1570)

___

### CoolingAndOccupancyComponent

• `Const` **CoolingAndOccupancyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Cooling and Occupancy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1228](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1228)

___

### CoolingComponent

• `Const` **CoolingComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Cooling.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1111](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1111)

___

### DayOfWeek

• `Const` **DayOfWeek**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `away` | [`BitFlag`](schema_export.md#bitflag-1) |
| `friday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `monday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `saturday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `sunday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `thursday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `tuesday` | [`BitFlag`](schema_export.md#bitflag-1) |
| `wednesday` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:456](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L456)

___

### HeatingAndOccupancyComponent

• `Const` **HeatingAndOccupancyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Heating and Occupancy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1251](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1251)

___

### HeatingComponent

• `Const` **HeatingComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](cluster_export.md#writableattribute)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](cluster_export.md#optionalattribute)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Heating.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1019](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1019)

___

### ModeForSequence

• `Const` **ModeForSequence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coolSetpointPresent` | [`BitFlag`](schema_export.md#bitflag-1) |
| `heatSetpointPresent` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:467](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L467)

___

### NotLocalTemperatureNotExposedComponent

• `Const` **NotLocalTemperatureNotExposedComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if doesn't support feature LTNE.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1201](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1201)

___

### Occupancy

• `Const` **Occupancy**: `Object`

The value of the Thermostat occupancy attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.4

#### Type declaration

| Name | Type |
| :------ | :------ |
| `occupied` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:428](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L428)

___

### OccupancyComponent

• `Const` **OccupancyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Occupancy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:999](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L999)

___

### RemoteSensing

• `Const` **RemoteSensing**: `Object`

The value of the Thermostat remoteSensing attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.22

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `localTemperature` | [`BitFlag`](schema_export.md#bitflag-1) | When set, LocalTemperature Value is derived from a remote node |
| `occupancy` | [`BitFlag`](schema_export.md#bitflag-1) | When set, Occupancy is derived from a remote node |
| `outdoorTemperature` | [`BitFlag`](schema_export.md#bitflag-1) | When set, OutdoorTemperature is derived from a remote node |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:36](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L36)

___

### ScheduleConfigurationComponent

• `Const` **ScheduleConfigurationComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](cluster_export.md#command)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag-1) ; `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag-1) ; `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag-1) ; `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `void`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature ScheduleConfiguration.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1308](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1308)

___

### SetbackAndOccupancyComponent

• `Const` **SetbackAndOccupancyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](cluster_export.md#writableattribute)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Setback and Occupancy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1426](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1426)

___

### SetbackComponent

• `Const` **SetbackComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](cluster_export.md#writableattribute)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<``null`` \| `number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Setback.

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1365](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1365)

___

### ThermostatProgrammingOperationMode

• `Const` **ThermostatProgrammingOperationMode**: `Object`

The value of the Thermostat thermostatProgrammingOperationMode attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.32

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoRecovery` | [`BitFlag`](schema_export.md#bitflag-1) | Auto/recovery mode |
| `economy` | [`BitFlag`](schema_export.md#bitflag-1) | Economy/EnergyStar mode |
| `scheduleActive` | [`BitFlag`](schema_export.md#bitflag-1) | Schedule programming mode. This enables any programmed weekly schedule configurations. |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:164](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L164)

___

### ThermostatRunningState

• `Const` **ThermostatRunningState**: `Object`

The value of the Thermostat thermostatRunningState attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.33

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cool` | [`BitFlag`](schema_export.md#bitflag-1) | Cool State On |
| `coolStage2` | [`BitFlag`](schema_export.md#bitflag-1) | Cool 2nd Stage State On |
| `fan` | [`BitFlag`](schema_export.md#bitflag-1) | Fan State On |
| `fanStage2` | [`BitFlag`](schema_export.md#bitflag-1) | Fan 2nd Stage State On |
| `fanStage3` | [`BitFlag`](schema_export.md#bitflag-1) | Fan 3rd Stage Stage On |
| `heat` | [`BitFlag`](schema_export.md#bitflag-1) | Heat State On |
| `heatStage2` | [`BitFlag`](schema_export.md#bitflag-1) | Heat 2nd Stage State On |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:186](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L186)

___

### TlvGetWeeklyScheduleRequest

• `Const` **TlvGetWeeklyScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag-1) ; `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>

Input to the Thermostat getWeeklySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:505](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L505)

___

### TlvGetWeeklyScheduleResponse

• `Const` **TlvGetWeeklyScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag-1) ; `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:513](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L513)

___

### TlvSetWeeklyScheduleRequest

• `Const` **TlvSetWeeklyScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag-1) ; `friday`: [`BitFlag`](schema_export.md#bitflag-1) ; `monday`: [`BitFlag`](schema_export.md#bitflag-1) ; `saturday`: [`BitFlag`](schema_export.md#bitflag-1) ; `sunday`: [`BitFlag`](schema_export.md#bitflag-1) ; `thursday`: [`BitFlag`](schema_export.md#bitflag-1) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag-1) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>

Input to the Thermostat setWeeklySchedule command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:493](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L493)

___

### TlvSetpointRaiseLowerRequest

• `Const` **TlvSetpointRaiseLowerRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>

Input to the Thermostat setpointRaiseLower command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:418](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L418)

___

### TlvThermostatScheduleTransition

• `Const` **TlvThermostatScheduleTransition**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

This represents a single transition in a Thermostat schedule

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.9.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:474](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L474)
