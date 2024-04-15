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

### Interfaces

- [Cluster](../interfaces/cluster_export.Thermostat.Cluster.md)
- [Complete](../interfaces/cluster_export.Thermostat.Complete.md)
- [GetWeeklyScheduleRequest](../interfaces/cluster_export.Thermostat.GetWeeklyScheduleRequest.md)
- [GetWeeklyScheduleResponse](../interfaces/cluster_export.Thermostat.GetWeeklyScheduleResponse.md)
- [SetWeeklyScheduleRequest](../interfaces/cluster_export.Thermostat.SetWeeklyScheduleRequest.md)
- [SetpointRaiseLowerRequest](../interfaces/cluster_export.Thermostat.SetpointRaiseLowerRequest.md)
- [ThermostatScheduleTransition](../interfaces/cluster_export.Thermostat.ThermostatScheduleTransition.md)

### Variables

- [AcErrorCode](cluster_export.Thermostat.md#acerrorcode)
- [AlarmMask](cluster_export.Thermostat.md#alarmmask)
- [AutoModeComponent](cluster_export.Thermostat.md#automodecomponent)
- [Base](cluster_export.Thermostat.md#base)
- [Cluster](cluster_export.Thermostat.md#cluster)
- [ClusterInstance](cluster_export.Thermostat.md#clusterinstance)
- [Complete](cluster_export.Thermostat.md#complete)
- [CompleteInstance](cluster_export.Thermostat.md#completeinstance)
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

## Variables

### AcErrorCode

• `Const` **AcErrorCode**: `Object`

The value of the Thermostat acErrorCode attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.48

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `coilSensorFail` | [`BitFlag`](schema_export.md#bitflag) | Indoor Coil Temperature Sensor Failure |
| `compressorFail` | [`BitFlag`](schema_export.md#bitflag) | Compressor Failure or Refrigerant Leakage |
| `fanFail` | [`BitFlag`](schema_export.md#bitflag) | Fan Failure |
| `outdoorSensorFail` | [`BitFlag`](schema_export.md#bitflag) | Outdoor Temperature Sensor Failure |
| `roomSensorFail` | [`BitFlag`](schema_export.md#bitflag) | Room Temperature Sensor Failure |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:461](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L461)

___

### AlarmMask

• `Const` **AlarmMask**: `Object`

The value of the Thermostat alarmMask attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.25

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hardwareFailure` | [`BitFlag`](schema_export.md#bitflag) |
| `initializationFailure` | [`BitFlag`](schema_export.md#bitflag) |
| `selfCalibrationFailure` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:261](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L261)

___

### AutoModeComponent

• `Const` **AutoModeComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature AutoMode.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  } |
| `attributes.minSetpointDeadBand` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> |
| `attributes.thermostatRunningMode` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:833](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L833)

___

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Thermostat clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag) ; `economy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fan`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag) ; `heat`: [`BitFlag`](schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } | - |
| `attributes.acCapacity` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> | This attribute indicates capacity of Mini Split AC in terms of the format defined by the ACCapacityFormat attribute **`See`** MatterSpecification.v11.Cluster § 4.3.7.45 |
| `attributes.acCapacityFormat` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> | This attribute specifies the format for the ACCapacity attribute. Table 87. ACCapacity Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.51 |
| `attributes.acCoilTemperature` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> | This attribute represents the temperature of the AC coil, as measured locally or remotely (over the network). **`See`** MatterSpecification.v11.Cluster § 4.3.7.50 |
| `attributes.acCompressorType` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> | This attribute indicates type of Compressor used within the Mini Split AC. Table 84. ACCompressorType Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.47 |
| `attributes.acErrorCode` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | This attribute indicates the type of errors encountered within the Mini Split AC. Error values are reported with four bytes values. Each bit within the four bytes indicates the unique error. Table 85. ACErrorCode Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.48 |
| `attributes.acLouverPosition` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> | This attribute indicates the position of Louver on the AC. Table 86. ACLouverPosition Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.49 |
| `attributes.acRefrigerantType` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> | This attribute indicates type of refrigerant used within the Mini Split AC. Table 83. ACRefrigerantType Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.46 |
| `attributes.acType` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> | This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how Cooling and Heating condition is achieved by Mini Split AC. Table 82. ACType Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.44 |
| `attributes.alarmMask` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | This attribute specifies whether each of the alarms listed below is enabled. When the bit number corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not corresponding to a code in the table are reserved. When the Alarms cluster is implemented on a device, and one of the alarm conditions included in this table occurs, an alarm notification is generated, with the alarm code field set as listed in the table. Table 76. Alarm Codes **`See`** MatterSpecification.v11.Cluster § 4.3.7.25 |
| `attributes.controlSequenceOfOperation` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> | This attribute specifies the overall operating environment of the thermostat, and thus the possible system modes that the thermostat can operate in. It shall be set to one of the following values. Table 73. ControlSequenceOfOperation Values NOTE CoolingAndHeating A thermostat indicating it supports CoolingAndHeating (or CoolingAndHeatingWithReheat) SHOULD be able to request heating or cooling on demand and will usually support the Auto SystemMode. Systems which support cooling or heating, requiring external intervention to change modes or where the whole building must be in the same mode, SHOULD report CoolingOnly or HeatingOnly based on the current capability. **`See`** MatterSpecification.v11.Cluster § 4.3.7.23 |
| `attributes.emergencyHeatDelta` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> | This attribute specifies the delta between the LocalTemperature Value and the OccupiedHeatingSetpoint or UnoccupiedHeatingSetpoint attributes at which the Thermostat server will operate in emergency heat mode. If the difference between LocalTemperature Value and Un/OccupiedHeatingSetpoint is greater than or equal to the EmergencyHeatDelta and the Thermostat server’s SystemMode attribute is in a heating-related mode, then the Thermostat server shall immediately switch to the SystemMode attribute value that provides the highest stage of heating (e.g., emergency heat) and continue operating in that running state until the OccupiedHeatingSetpoint value is reached. For example: • LocalTemperature = 10.0°C • OccupiedHeatingSetpoint = 16.0°C • EmergencyHeatDelta = 2.0°C ⇒ OccupiedHeatingSetpoint - LocalTemperature ≥? EmergencyHeatDelta ⇒ 16°C - 10°C ≥? 2°C ⇒ TRUE >>> Thermostat server changes its SystemMode to operate in 2nd stage or emergency heat mode The purpose of this attribute is to provide Thermostat clients the ability to configure rapid heating when a setpoint is of a specified amount greater than the measured temperature. This allows the heated space to be quickly heated to the desired level set by the user. **`See`** MatterSpecification.v11.Cluster § 4.3.7.43 |
| `attributes.localTemperature` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> | This attribute indicates the current LocalTemperature value, when available. The value may be local, or remote, depending on the value of the RemoteSensing attribute when supported. • If the LTNE feature is not supported: ◦ If the temperature measurement is invalid or currently unavailable, the attribute shall report null. ◦ If the temperature measurement is valid, the attribute shall report that value. • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the LocalTemperature value. In that case, the LocalTemperature attribute shall always report null. **`See`** MatterSpecification.v11.Cluster § 4.3.7.2 |
| `attributes.outdoorTemperature` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> | This attribute represents the outdoor temperature, as measured locally or remotely (over the network). **`See`** MatterSpecification.v11.Cluster § 4.3.7.3 |
| `attributes.remoteSensing` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | This attribute indicates when the local temperature, outdoor temperature and occupancy are being sensed by remote networked sensors, rather than internal sensors. A bit set to 1 indicates remote sensing of the relevant value. Table 72. RemoteSensing Attribute Bit Values If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall always report a value of 0. If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is present, the write shall fail and the server shall report a CONSTRAINT_ERROR. **`See`** MatterSpecification.v11.Cluster § 4.3.7.22 |
| `attributes.setpointChangeAmount` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> | This attribute specifies the delta between the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement SetpointChangeSource. The null value indicates that the previous setpoint was unknown. **`See`** MatterSpecification.v11.Cluster § 4.3.7.35 |
| `attributes.setpointChangeSource` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> | This attribute specifies the source of the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint). This attribute enables service providers to determine whether changes to setpoints were initiated due to occupant comfort, scheduled programming or some other source (e.g., electric utility or other service provider). Because automation services may initiate frequent setpoint changes, this attribute clearly differentiates the source of setpoint changes made at the thermostat. Table 81. SetpointChangeSource Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.34 |
| `attributes.setpointChangeSourceTimestamp` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> | This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was recorded. **`See`** MatterSpecification.v11.Cluster § 4.3.7.36 |
| `attributes.systemMode` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> | This attribute specifies the current operating mode of the thermostat, It shall be set to one of the following values, as limited by the ControlSequenceOfOperation Attribute. NOTE It is not mandatory to support all values. Table 75. Interpretation of Heat, Cool and Auto SystemMode Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.24 |
| `attributes.temperatureSetpointHold` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> | This attribute specifies the temperature hold status on the thermostat. If hold status is on, the thermostat SHOULD maintain the temperature set point for the current mode until a system mode change. If hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also implement the TemperatureSetpointHoldDuration attribute. Table 78. TemperatureSetpointHold Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.30 |
| `attributes.temperatureSetpointHoldDuration` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> | This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support hold for a specified duration SHOULD implement this attribute. The null value indicates the field is unused. All other values are reserved. **`See`** MatterSpecification.v11.Cluster § 4.3.7.31 |
| `attributes.thermostatProgrammingOperationMode` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag) ; `economy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | This attribute determines the operational state of the thermostat’s programming. The thermostat shall modify its programming operation when this attribute is modified by a client and update this attribute when its programming operation is modified locally by a user. The thermostat may support more than one active ThermostatProgrammingOperationMode. For example, the thermostat may operate simultaneously in Schedule Programming Mode and Recovery Mode. Thermostats which contain a schedule may use this attribute to control how that schedule is used, even if they do not support the Schedule Configuration feature. Table 79. ThermostatProgrammingOperationMode Attribute Values When ScheduleActive is not set, the setpoint is altered only by manual up/down changes at the thermostat or remotely, not by internal schedule programming. NOTE Modifying the ScheduleActive bit does not clear or delete previous weekly schedule programming configurations. **`See`** MatterSpecification.v11.Cluster § 4.3.7.32 |
| `attributes.thermostatRunningState` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fan`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag) ; `heat`: [`BitFlag`](schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | This attribute represents the current relay state of the heat, cool, and fan relays. Table 80. HVAC Relay State Values Unimplemented outputs shall be treated as if they were Off. **`See`** MatterSpecification.v11.Cluster § 4.3.7.33 |
| `commands` | \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } | - |
| `commands.getRelayStatusLog` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.3.8 |
| `commands.setpointRaiseLower` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.3.8 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = OccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = HeatingComponent; `flags`: \{ `heating`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = CoolingComponent; `flags`: \{ `cooling`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  }  } = NotLocalTemperatureNotExposedComponent; `flags`: \{ `localTemperatureNotExposed`: ``false`` = false }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = CoolingAndOccupancyComponent; `flags`: \{ `cooling`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = HeatingAndOccupancyComponent; `flags`: \{ `heating`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  }  } = AutoModeComponent; `flags`: \{ `autoMode`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: ... ; `friday`: ... ; `monday`: ... ; `saturday`: ... ; `sunday`: ... ; `thursday`: ... ; `tuesday`: ... ; `wednesday`: ...  }\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: ... ; `heatSetpointPresent`: ...  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: ... ; `friday`: ... ; `monday`: ... ; `saturday`: ... ; `sunday`: ... ; `thursday`: ... ; `tuesday`: ... ; `wednesday`: ...  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: ... ; `heatSetpointPresent`: ...  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>[]\>  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: ... ; `friday`: ... ; `monday`: ... ; `saturday`: ... ; `sunday`: ... ; `thursday`: ... ; `tuesday`: ... ; `wednesday`: ...  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: ... ; `heatSetpointPresent`: ...  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>[]\>  }\>, `void`, `any`\>  }  } = ScheduleConfigurationComponent; `flags`: \{ `scheduleConfiguration`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackComponent; `flags`: \{ `setback`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackAndOccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true; `setback`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `heating`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `cooling`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `cooling`: ``false`` = false; `heating`: ``false`` = false }  }] | This metadata controls which ThermostatCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.autoMode` | [`BitFlag`](schema_export.md#bitflag) | AutoMode Supports a System Mode of Auto |
| `features.cooling` | [`BitFlag`](schema_export.md#bitflag) | Cooling Thermostat is capable of managing a cooling device |
| `features.heating` | [`BitFlag`](schema_export.md#bitflag) | Heating Thermostat is capable of managing a heating device |
| `features.localTemperatureNotExposed` | [`BitFlag`](schema_export.md#bitflag) | LocalTemperatureNotExposed Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute |
| `features.occupancy` | [`BitFlag`](schema_export.md#bitflag) | Occupancy Supports Occupied and Unoccupied setpoints |
| `features.scheduleConfiguration` | [`BitFlag`](schema_export.md#bitflag) | ScheduleConfiguration Supports remote configuration of a weekly schedule of setpoint transitions |
| `features.setback` | [`BitFlag`](schema_export.md#bitflag) | Setback Supports configurable setback (or span) |
| `id` | ``513`` | - |
| `name` | ``"Thermostat"`` | - |
| `revision` | ``6`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1094](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1094)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.Thermostat.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1546](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1546)

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1548](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1548)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`ExtensibleOnly`](../interfaces/cluster_export.MutableCluster.ExtensibleOnly.md)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag) ; `economy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fan`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag) ; `heat`: [`BitFlag`](schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = OccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = HeatingComponent; `flags`: \{ `heating`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = CoolingComponent; `flags`: \{ `cooling`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  }  } = NotLocalTemperatureNotExposedComponent; `flags`: \{ `localTemperatureNotExposed`: ``false`` = false }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = CoolingAndOccupancyComponent; `flags`: \{ `cooling`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = HeatingAndOccupancyComponent; `flags`: \{ `heating`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  }  } = AutoModeComponent; `flags`: \{ `autoMode`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<...\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<...\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<...\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<...\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\>  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<...\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<...\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\>  }\>, `void`, `any`\>  }  } = ScheduleConfigurationComponent; `flags`: \{ `scheduleConfiguration`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackComponent; `flags`: \{ `setback`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackAndOccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true; `setback`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `heating`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `cooling`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `cooling`: ``false`` = false; `heating`: ``false`` = false }  }] ; `features`: \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>

**`See`**

[Cluster](cluster_export.Thermostat.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1534](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1534)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.Thermostat.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1700](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1700)

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1702](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1702)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: []  } ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `autoMode`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `cooling`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `heating`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `cooling`: `boolean` = true }]  } ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `heating`: `boolean` = true }]  } ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](schema_export.md#bitflag) ; `economy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `autoMode`: `boolean` = true }]  } ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fan`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](schema_export.md#bitflag) ; `heat`: [`BitFlag`](schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `cooling`: `boolean` = true; `occupancy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `heating`: `boolean` = true; `occupancy`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true; `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true; `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` = true; `setback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: ... ; `heatSetpoint`: ... ; `transitionTime`: ...  }\>[]\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: ... ; `heatSetpoint`: ... ; `transitionTime`: ...  }\>[]\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](schema_export.md#bitflag) ; `cooling`: [`BitFlag`](schema_export.md#bitflag) ; `heating`: [`BitFlag`](schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](schema_export.md#bitflag) ; `setback`: [`BitFlag`](schema_export.md#bitflag)  } = Base.features; `id`: ``513`` = Base.id; `name`: ``"Thermostat"`` = Base.name; `revision`: ``6`` = Base.revision }\>

**`See`**

[Complete](cluster_export.Thermostat.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1562](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1562)

___

### CoolingAndOccupancyComponent

• `Const` **CoolingAndOccupancyComponent**: `Object`

A ThermostatCluster supports these elements if it supports features Cooling and Occupancy.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  } |
| `attributes.unoccupiedCoolingSetpoint` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:787](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L787)

___

### CoolingComponent

• `Const` **CoolingComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature Cooling.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } |
| `attributes.absMaxCoolSetpointLimit` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.absMinCoolSetpointLimit` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.maxCoolSetpointLimit` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.minCoolSetpointLimit` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.occupiedCoolingSetpoint` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> |
| `attributes.piCoolingDemand` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:670](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L670)

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

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L66)

___

### HeatingAndOccupancyComponent

• `Const` **HeatingAndOccupancyComponent**: `Object`

A ThermostatCluster supports these elements if it supports features Heating and Occupancy.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  } |
| `attributes.unoccupiedHeatingSetpoint` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:810](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L810)

___

### HeatingComponent

• `Const` **HeatingComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature Heating.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } |
| `attributes.absMaxHeatSetpointLimit` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.absMinHeatSetpointLimit` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.maxHeatSetpointLimit` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.minHeatSetpointLimit` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.occupiedHeatingSetpoint` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> |
| `attributes.piHeatingDemand` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:578](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L578)

___

### ModeForSequence

• `Const` **ModeForSequence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coolSetpointPresent` | [`BitFlag`](schema_export.md#bitflag) |
| `heatSetpointPresent` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L77)

___

### NotLocalTemperatureNotExposedComponent

• `Const` **NotLocalTemperatureNotExposedComponent**: `Object`

A ThermostatCluster supports these elements if doesn't support feature LTNE.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } |
| `attributes.localTemperatureCalibration` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:760](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L760)

___

### Occupancy

• `Const` **Occupancy**: `Object`

The value of the Thermostat occupancy attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.4

#### Type declaration

| Name | Type |
| :------ | :------ |
| `occupied` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L38)

___

### OccupancyComponent

• `Const` **OccupancyComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature Occupancy.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } |
| `attributes.occupancy` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:558](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L558)

___

### RemoteSensing

• `Const` **RemoteSensing**: `Object`

The value of the Thermostat remoteSensing attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.22

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `localTemperature` | [`BitFlag`](schema_export.md#bitflag) | When set, LocalTemperature Value is derived from a remote node |
| `occupancy` | [`BitFlag`](schema_export.md#bitflag) | When set, Occupancy is derived from a remote node |
| `outdoorTemperature` | [`BitFlag`](schema_export.md#bitflag) | When set, OutdoorTemperature is derived from a remote node |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:161](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L161)

___

### ScheduleConfigurationComponent

• `Const` **ScheduleConfigurationComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature ScheduleConfiguration.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } |
| `attributes.numberOfDailyTransitions` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.numberOfWeeklyTransitions` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.startOfWeek` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\> |
| `commands` | \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `void`, `any`\>  } |
| `commands.clearWeeklySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |
| `commands.getWeeklySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `any`\> |
| `commands.setWeeklySchedule` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:867](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L867)

___

### SetbackAndOccupancyComponent

• `Const` **SetbackAndOccupancyComponent**: `Object`

A ThermostatCluster supports these elements if it supports features Setback and Occupancy.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.unoccupiedSetback` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.unoccupiedSetbackMax` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.unoccupiedSetbackMin` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:981](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L981)

___

### SetbackComponent

• `Const` **SetbackComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature Setback.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.occupiedSetback` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.occupiedSetbackMax` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.occupiedSetbackMin` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:924](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L924)

___

### ThermostatProgrammingOperationMode

• `Const` **ThermostatProgrammingOperationMode**: `Object`

The value of the Thermostat thermostatProgrammingOperationMode attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.32

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoRecovery` | [`BitFlag`](schema_export.md#bitflag) | Auto/recovery mode |
| `economy` | [`BitFlag`](schema_export.md#bitflag) | Economy/EnergyStar mode |
| `scheduleActive` | [`BitFlag`](schema_export.md#bitflag) | Schedule programming mode. This enables any programmed weekly schedule configurations. |

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:289](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L289)

___

### ThermostatRunningState

• `Const` **ThermostatRunningState**: `Object`

The value of the Thermostat thermostatRunningState attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.33

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

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:311](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L311)

___

### TlvGetWeeklyScheduleRequest

• `Const` **TlvGetWeeklyScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>

Input to the Thermostat getWeeklySchedule command

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L129)

___

### TlvGetWeeklyScheduleResponse

• `Const` **TlvGetWeeklyScheduleResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L144)

___

### TlvSetWeeklyScheduleRequest

• `Const` **TlvSetWeeklyScheduleRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `away`: [`BitFlag`](schema_export.md#bitflag) ; `friday`: [`BitFlag`](schema_export.md#bitflag) ; `monday`: [`BitFlag`](schema_export.md#bitflag) ; `saturday`: [`BitFlag`](schema_export.md#bitflag) ; `sunday`: [`BitFlag`](schema_export.md#bitflag) ; `thursday`: [`BitFlag`](schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coolSetpointPresent`: [`BitFlag`](schema_export.md#bitflag) ; `heatSetpointPresent`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>

Input to the Thermostat setWeeklySchedule command

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L110)

___

### TlvSetpointRaiseLowerRequest

• `Const` **TlvSetpointRaiseLowerRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>

Input to the Thermostat setpointRaiseLower command

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:543](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L543)

___

### TlvThermostatScheduleTransition

• `Const` **TlvThermostatScheduleTransition**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `coolSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `heatSetpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

This represents a single transition in a Thermostat schedule

**`See`**

MatterSpecification.v11.Cluster § 4.3.9.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L84)
