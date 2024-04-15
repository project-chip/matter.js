[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Thermostat

# Namespace: Thermostat

[exports/cluster](exports_cluster.md).Thermostat

## Table of contents

### Enumerations

- [AcCapacityFormat](../enums/exports_cluster.Thermostat.AcCapacityFormat.md)
- [AcCompressorType](../enums/exports_cluster.Thermostat.AcCompressorType.md)
- [AcLouverPosition](../enums/exports_cluster.Thermostat.AcLouverPosition.md)
- [AcRefrigerantType](../enums/exports_cluster.Thermostat.AcRefrigerantType.md)
- [AcType](../enums/exports_cluster.Thermostat.AcType.md)
- [ControlSequenceOfOperation](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md)
- [Feature](../enums/exports_cluster.Thermostat.Feature.md)
- [SetpointAdjustMode](../enums/exports_cluster.Thermostat.SetpointAdjustMode.md)
- [SetpointChangeSource](../enums/exports_cluster.Thermostat.SetpointChangeSource.md)
- [StartOfWeek](../enums/exports_cluster.Thermostat.StartOfWeek.md)
- [SystemMode](../enums/exports_cluster.Thermostat.SystemMode.md)
- [TemperatureSetpointHold](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md)
- [ThermostatRunningMode](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.Thermostat.Cluster.md)
- [Complete](../interfaces/exports_cluster.Thermostat.Complete.md)
- [GetWeeklyScheduleRequest](../interfaces/exports_cluster.Thermostat.GetWeeklyScheduleRequest.md)
- [GetWeeklyScheduleResponse](../interfaces/exports_cluster.Thermostat.GetWeeklyScheduleResponse.md)
- [SetWeeklyScheduleRequest](../interfaces/exports_cluster.Thermostat.SetWeeklyScheduleRequest.md)
- [SetpointRaiseLowerRequest](../interfaces/exports_cluster.Thermostat.SetpointRaiseLowerRequest.md)
- [ThermostatScheduleTransition](../interfaces/exports_cluster.Thermostat.ThermostatScheduleTransition.md)

### Variables

- [AcErrorCode](exports_cluster.Thermostat.md#acerrorcode)
- [AlarmMask](exports_cluster.Thermostat.md#alarmmask)
- [AutoModeComponent](exports_cluster.Thermostat.md#automodecomponent)
- [Base](exports_cluster.Thermostat.md#base)
- [Cluster](exports_cluster.Thermostat.md#cluster)
- [ClusterInstance](exports_cluster.Thermostat.md#clusterinstance)
- [Complete](exports_cluster.Thermostat.md#complete)
- [CompleteInstance](exports_cluster.Thermostat.md#completeinstance)
- [CoolingAndOccupancyComponent](exports_cluster.Thermostat.md#coolingandoccupancycomponent)
- [CoolingComponent](exports_cluster.Thermostat.md#coolingcomponent)
- [DayOfWeek](exports_cluster.Thermostat.md#dayofweek)
- [HeatingAndOccupancyComponent](exports_cluster.Thermostat.md#heatingandoccupancycomponent)
- [HeatingComponent](exports_cluster.Thermostat.md#heatingcomponent)
- [ModeForSequence](exports_cluster.Thermostat.md#modeforsequence)
- [NotLocalTemperatureNotExposedComponent](exports_cluster.Thermostat.md#notlocaltemperaturenotexposedcomponent)
- [Occupancy](exports_cluster.Thermostat.md#occupancy)
- [OccupancyComponent](exports_cluster.Thermostat.md#occupancycomponent)
- [RemoteSensing](exports_cluster.Thermostat.md#remotesensing)
- [ScheduleConfigurationComponent](exports_cluster.Thermostat.md#scheduleconfigurationcomponent)
- [SetbackAndOccupancyComponent](exports_cluster.Thermostat.md#setbackandoccupancycomponent)
- [SetbackComponent](exports_cluster.Thermostat.md#setbackcomponent)
- [ThermostatProgrammingOperationMode](exports_cluster.Thermostat.md#thermostatprogrammingoperationmode)
- [ThermostatRunningState](exports_cluster.Thermostat.md#thermostatrunningstate)
- [TlvGetWeeklyScheduleRequest](exports_cluster.Thermostat.md#tlvgetweeklyschedulerequest)
- [TlvGetWeeklyScheduleResponse](exports_cluster.Thermostat.md#tlvgetweeklyscheduleresponse)
- [TlvSetWeeklyScheduleRequest](exports_cluster.Thermostat.md#tlvsetweeklyschedulerequest)
- [TlvSetpointRaiseLowerRequest](exports_cluster.Thermostat.md#tlvsetpointraiselowerrequest)
- [TlvThermostatScheduleTransition](exports_cluster.Thermostat.md#tlvthermostatscheduletransition)

## Variables

### AcErrorCode

• `Const` **AcErrorCode**: `Object`

The value of the Thermostat acErrorCode attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.48

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `coilSensorFail` | [`BitFlag`](exports_schema.md#bitflag) | Indoor Coil Temperature Sensor Failure |
| `compressorFail` | [`BitFlag`](exports_schema.md#bitflag) | Compressor Failure or Refrigerant Leakage |
| `fanFail` | [`BitFlag`](exports_schema.md#bitflag) | Fan Failure |
| `outdoorSensorFail` | [`BitFlag`](exports_schema.md#bitflag) | Outdoor Temperature Sensor Failure |
| `roomSensorFail` | [`BitFlag`](exports_schema.md#bitflag) | Room Temperature Sensor Failure |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:449

___

### AlarmMask

• `Const` **AlarmMask**: `Object`

The value of the Thermostat alarmMask attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.25

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hardwareFailure` | [`BitFlag`](exports_schema.md#bitflag) |
| `initializationFailure` | [`BitFlag`](exports_schema.md#bitflag) |
| `selfCalibrationFailure` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:278

___

### AutoModeComponent

• `Const` **AutoModeComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature AutoMode.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md), `any`\>  } |
| `attributes.minSetpointDeadBand` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> |
| `attributes.thermostatRunningMode` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:754

___

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Thermostat clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCapacityFormat`](../enums/exports_cluster.Thermostat.AcCapacityFormat.md), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/exports_cluster.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/exports_cluster.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/exports_cluster.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcType`](../enums/exports_cluster.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/exports_cluster.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`SystemMode`](../enums/exports_cluster.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } | - |
| `attributes.acCapacity` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | This attribute indicates capacity of Mini Split AC in terms of the format defined by the ACCapacityFormat attribute **`See`** MatterSpecification.v11.Cluster § 4.3.7.45 |
| `attributes.acCapacityFormat` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCapacityFormat`](../enums/exports_cluster.Thermostat.AcCapacityFormat.md), `any`\> | This attribute specifies the format for the ACCapacity attribute. Table 87. ACCapacity Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.51 |
| `attributes.acCoilTemperature` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> | This attribute represents the temperature of the AC coil, as measured locally or remotely (over the network). **`See`** MatterSpecification.v11.Cluster § 4.3.7.50 |
| `attributes.acCompressorType` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/exports_cluster.Thermostat.AcCompressorType.md), `any`\> | This attribute indicates type of Compressor used within the Mini Split AC. Table 84. ACCompressorType Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.47 |
| `attributes.acErrorCode` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | This attribute indicates the type of errors encountered within the Mini Split AC. Error values are reported with four bytes values. Each bit within the four bytes indicates the unique error. Table 85. ACErrorCode Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.48 |
| `attributes.acLouverPosition` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/exports_cluster.Thermostat.AcLouverPosition.md), `any`\> | This attribute indicates the position of Louver on the AC. Table 86. ACLouverPosition Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.49 |
| `attributes.acRefrigerantType` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/exports_cluster.Thermostat.AcRefrigerantType.md), `any`\> | This attribute indicates type of refrigerant used within the Mini Split AC. Table 83. ACRefrigerantType Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.46 |
| `attributes.acType` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcType`](../enums/exports_cluster.Thermostat.AcType.md), `any`\> | This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how Cooling and Heating condition is achieved by Mini Split AC. Table 82. ACType Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.44 |
| `attributes.alarmMask` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | This attribute specifies whether each of the alarms listed below is enabled. When the bit number corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not corresponding to a code in the table are reserved. When the Alarms cluster is implemented on a device, and one of the alarm conditions included in this table occurs, an alarm notification is generated, with the alarm code field set as listed in the table. Table 76. Alarm Codes **`See`** MatterSpecification.v11.Cluster § 4.3.7.25 |
| `attributes.controlSequenceOfOperation` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md), `any`\> | This attribute specifies the overall operating environment of the thermostat, and thus the possible system modes that the thermostat can operate in. It shall be set to one of the following values. Table 73. ControlSequenceOfOperation Values NOTE CoolingAndHeating A thermostat indicating it supports CoolingAndHeating (or CoolingAndHeatingWithReheat) SHOULD be able to request heating or cooling on demand and will usually support the Auto SystemMode. Systems which support cooling or heating, requiring external intervention to change modes or where the whole building must be in the same mode, SHOULD report CoolingOnly or HeatingOnly based on the current capability. **`See`** MatterSpecification.v11.Cluster § 4.3.7.23 |
| `attributes.emergencyHeatDelta` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | This attribute specifies the delta between the LocalTemperature Value and the OccupiedHeatingSetpoint or UnoccupiedHeatingSetpoint attributes at which the Thermostat server will operate in emergency heat mode. If the difference between LocalTemperature Value and Un/OccupiedHeatingSetpoint is greater than or equal to the EmergencyHeatDelta and the Thermostat server’s SystemMode attribute is in a heating-related mode, then the Thermostat server shall immediately switch to the SystemMode attribute value that provides the highest stage of heating (e.g., emergency heat) and continue operating in that running state until the OccupiedHeatingSetpoint value is reached. For example: • LocalTemperature = 10.0°C • OccupiedHeatingSetpoint = 16.0°C • EmergencyHeatDelta = 2.0°C ⇒ OccupiedHeatingSetpoint - LocalTemperature ≥? EmergencyHeatDelta ⇒ 16°C - 10°C ≥? 2°C ⇒ TRUE >>> Thermostat server changes its SystemMode to operate in 2nd stage or emergency heat mode The purpose of this attribute is to provide Thermostat clients the ability to configure rapid heating when a setpoint is of a specified amount greater than the measured temperature. This allows the heated space to be quickly heated to the desired level set by the user. **`See`** MatterSpecification.v11.Cluster § 4.3.7.43 |
| `attributes.localTemperature` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> | This attribute indicates the current LocalTemperature value, when available. The value may be local, or remote, depending on the value of the RemoteSensing attribute when supported. • If the LTNE feature is not supported: ◦ If the temperature measurement is invalid or currently unavailable, the attribute shall report null. ◦ If the temperature measurement is valid, the attribute shall report that value. • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the LocalTemperature value. In that case, the LocalTemperature attribute shall always report null. **`See`** MatterSpecification.v11.Cluster § 4.3.7.2 |
| `attributes.outdoorTemperature` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> | This attribute represents the outdoor temperature, as measured locally or remotely (over the network). **`See`** MatterSpecification.v11.Cluster § 4.3.7.3 |
| `attributes.remoteSensing` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | This attribute indicates when the local temperature, outdoor temperature and occupancy are being sensed by remote networked sensors, rather than internal sensors. A bit set to 1 indicates remote sensing of the relevant value. Table 72. RemoteSensing Attribute Bit Values If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall always report a value of 0. If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is present, the write shall fail and the server shall report a CONSTRAINT_ERROR. **`See`** MatterSpecification.v11.Cluster § 4.3.7.22 |
| `attributes.setpointChangeAmount` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> | This attribute specifies the delta between the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement SetpointChangeSource. The null value indicates that the previous setpoint was unknown. **`See`** MatterSpecification.v11.Cluster § 4.3.7.35 |
| `attributes.setpointChangeSource` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/exports_cluster.Thermostat.SetpointChangeSource.md), `any`\> | This attribute specifies the source of the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint). This attribute enables service providers to determine whether changes to setpoints were initiated due to occupant comfort, scheduled programming or some other source (e.g., electric utility or other service provider). Because automation services may initiate frequent setpoint changes, this attribute clearly differentiates the source of setpoint changes made at the thermostat. Table 81. SetpointChangeSource Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.34 |
| `attributes.setpointChangeSourceTimestamp` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> | This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was recorded. **`See`** MatterSpecification.v11.Cluster § 4.3.7.36 |
| `attributes.systemMode` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`SystemMode`](../enums/exports_cluster.Thermostat.SystemMode.md), `any`\> | This attribute specifies the current operating mode of the thermostat, It shall be set to one of the following values, as limited by the ControlSequenceOfOperation Attribute. NOTE It is not mandatory to support all values. Table 75. Interpretation of Heat, Cool and Auto SystemMode Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.24 |
| `attributes.temperatureSetpointHold` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md), `any`\> | This attribute specifies the temperature hold status on the thermostat. If hold status is on, the thermostat SHOULD maintain the temperature set point for the current mode until a system mode change. If hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also implement the TemperatureSetpointHoldDuration attribute. Table 78. TemperatureSetpointHold Values **`See`** MatterSpecification.v11.Cluster § 4.3.7.30 |
| `attributes.temperatureSetpointHoldDuration` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> | This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support hold for a specified duration SHOULD implement this attribute. The null value indicates the field is unused. All other values are reserved. **`See`** MatterSpecification.v11.Cluster § 4.3.7.31 |
| `attributes.thermostatProgrammingOperationMode` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | This attribute determines the operational state of the thermostat’s programming. The thermostat shall modify its programming operation when this attribute is modified by a client and update this attribute when its programming operation is modified locally by a user. The thermostat may support more than one active ThermostatProgrammingOperationMode. For example, the thermostat may operate simultaneously in Schedule Programming Mode and Recovery Mode. Thermostats which contain a schedule may use this attribute to control how that schedule is used, even if they do not support the Schedule Configuration feature. Table 79. ThermostatProgrammingOperationMode Attribute Values When ScheduleActive is not set, the setpoint is altered only by manual up/down changes at the thermostat or remotely, not by internal schedule programming. NOTE Modifying the ScheduleActive bit does not clear or delete previous weekly schedule programming configurations. **`See`** MatterSpecification.v11.Cluster § 4.3.7.32 |
| `attributes.thermostatRunningState` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | This attribute represents the current relay state of the heat, cool, and fan relays. Table 80. HVAC Relay State Values Unimplemented outputs shall be treated as if they were Off. **`See`** MatterSpecification.v11.Cluster § 4.3.7.33 |
| `commands` | \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } | - |
| `commands.getRelayStatusLog` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.3.8 |
| `commands.setpointRaiseLower` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.3.8 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `occupancy`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `heating`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `cooling`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `localTemperatureNotExposed`: ``false``  }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `cooling`: ``true`` ; `occupancy`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `heating`: ``true`` ; `occupancy`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md), `any`\>  }  } ; `flags`: \{ `autoMode`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`StartOfWeek`](../enums/exports_cluster.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `scheduleConfiguration`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `setback`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `occupancy`: ``true`` ; `setback`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `autoMode`: ``true`` ; `heating`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `autoMode`: ``true`` ; `cooling`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `cooling`: ``false`` ; `heating`: ``false``  }  }] | This metadata controls which ThermostatCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag) ; `heating`: [`BitFlag`](exports_schema.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag) ; `setback`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.autoMode` | [`BitFlag`](exports_schema.md#bitflag) | AutoMode Supports a System Mode of Auto |
| `features.cooling` | [`BitFlag`](exports_schema.md#bitflag) | Cooling Thermostat is capable of managing a cooling device |
| `features.heating` | [`BitFlag`](exports_schema.md#bitflag) | Heating Thermostat is capable of managing a heating device |
| `features.localTemperatureNotExposed` | [`BitFlag`](exports_schema.md#bitflag) | LocalTemperatureNotExposed Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute |
| `features.occupancy` | [`BitFlag`](exports_schema.md#bitflag) | Occupancy Supports Occupied and Unoccupied setpoints |
| `features.scheduleConfiguration` | [`BitFlag`](exports_schema.md#bitflag) | ScheduleConfiguration Supports remote configuration of a weekly schedule of setpoint transitions |
| `features.setback` | [`BitFlag`](exports_schema.md#bitflag) | Setback Supports configurable setback (or span) |
| `id` | ``513`` | - |
| `name` | ``"Thermostat"`` | - |
| `revision` | ``6`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1043

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.Thermostat.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:2858

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:2860

___

### ClusterInstance

• `Const` **ClusterInstance**: [`ExtensibleOnly`](../interfaces/exports_cluster.MutableCluster.ExtensibleOnly.md)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCapacityFormat`](../enums/exports_cluster.Thermostat.AcCapacityFormat.md), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/exports_cluster.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/exports_cluster.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/exports_cluster.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcType`](../enums/exports_cluster.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/exports_cluster.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`SystemMode`](../enums/exports_cluster.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `occupancy`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `heating`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `cooling`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `localTemperatureNotExposed`: ``false``  }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `cooling`: ``true`` ; `occupancy`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `heating`: ``true`` ; `occupancy`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md), `any`\>  }  } ; `flags`: \{ `autoMode`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`StartOfWeek`](../enums/exports_cluster.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `scheduleConfiguration`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `setback`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `occupancy`: ``true`` ; `setback`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `autoMode`: ``true`` ; `heating`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `autoMode`: ``true`` ; `cooling`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `cooling`: ``false`` ; `heating`: ``false``  }  }] ; `features`: \{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag) ; `heating`: [`BitFlag`](exports_schema.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag) ; `setback`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``513`` ; `name`: ``"Thermostat"`` ; `revision`: ``6``  }\>

**`See`**

[Cluster](exports_cluster.Thermostat.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1947

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.Thermostat.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:3590

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:3592

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `acCapacity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCapacityFormat`](../enums/exports_cluster.Thermostat.AcCapacityFormat.md), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/exports_cluster.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/exports_cluster.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/exports_cluster.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcType`](../enums/exports_cluster.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: []  } ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `autoMode`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupancy`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `cooling`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `heating`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/exports_cluster.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`StartOfWeek`](../enums/exports_cluster.Thermostat.StartOfWeek.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `systemMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`SystemMode`](../enums/exports_cluster.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `autoMode`: `boolean`  }]  } ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `cooling`: `boolean` ; `occupancy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `heating`: `boolean` ; `occupancy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` ; `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` ; `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` ; `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getRelayStatusLog`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setpointRaiseLower`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag) ; `heating`: [`BitFlag`](exports_schema.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag) ; `setback`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``513`` ; `name`: ``"Thermostat"`` ; `revision`: ``6``  }\>

**`See`**

[Complete](exports_cluster.Thermostat.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:2864

___

### CoolingAndOccupancyComponent

• `Const` **CoolingAndOccupancyComponent**: `Object`

A ThermostatCluster supports these elements if it supports features Cooling and Occupancy.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } |
| `attributes.unoccupiedCoolingSetpoint` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:718

___

### CoolingComponent

• `Const` **CoolingComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature Cooling.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } |
| `attributes.absMaxCoolSetpointLimit` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.absMinCoolSetpointLimit` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.maxCoolSetpointLimit` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.minCoolSetpointLimit` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.occupiedCoolingSetpoint` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> |
| `attributes.piCoolingDemand` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:624

___

### DayOfWeek

• `Const` **DayOfWeek**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `away` | [`BitFlag`](exports_schema.md#bitflag) |
| `friday` | [`BitFlag`](exports_schema.md#bitflag) |
| `monday` | [`BitFlag`](exports_schema.md#bitflag) |
| `saturday` | [`BitFlag`](exports_schema.md#bitflag) |
| `sunday` | [`BitFlag`](exports_schema.md#bitflag) |
| `thursday` | [`BitFlag`](exports_schema.md#bitflag) |
| `tuesday` | [`BitFlag`](exports_schema.md#bitflag) |
| `wednesday` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:45

___

### HeatingAndOccupancyComponent

• `Const` **HeatingAndOccupancyComponent**: `Object`

A ThermostatCluster supports these elements if it supports features Heating and Occupancy.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } |
| `attributes.unoccupiedHeatingSetpoint` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:736

___

### HeatingComponent

• `Const` **HeatingComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature Heating.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } |
| `attributes.absMaxHeatSetpointLimit` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.absMinHeatSetpointLimit` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.maxHeatSetpointLimit` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.minHeatSetpointLimit` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> |
| `attributes.occupiedHeatingSetpoint` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> |
| `attributes.piHeatingDemand` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:550

___

### ModeForSequence

• `Const` **ModeForSequence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coolSetpointPresent` | [`BitFlag`](exports_schema.md#bitflag) |
| `heatSetpointPresent` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:55

___

### NotLocalTemperatureNotExposedComponent

• `Const` **NotLocalTemperatureNotExposedComponent**: `Object`

A ThermostatCluster supports these elements if doesn't support feature LTNE.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } |
| `attributes.localTemperatureCalibration` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:696

___

### Occupancy

• `Const` **Occupancy**: `Object`

The value of the Thermostat occupancy attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.4

#### Type declaration

| Name | Type |
| :------ | :------ |
| `occupied` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:18

___

### OccupancyComponent

• `Const` **OccupancyComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature Occupancy.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `occupancy`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } |
| `attributes.occupancy` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:533

___

### RemoteSensing

• `Const` **RemoteSensing**: `Object`

The value of the Thermostat remoteSensing attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.22

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `localTemperature` | [`BitFlag`](exports_schema.md#bitflag) | When set, LocalTemperature Value is derived from a remote node |
| `occupancy` | [`BitFlag`](exports_schema.md#bitflag) | When set, Occupancy is derived from a remote node |
| `outdoorTemperature` | [`BitFlag`](exports_schema.md#bitflag) | When set, OutdoorTemperature is derived from a remote node |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:194

___

### ScheduleConfigurationComponent

• `Const` **ScheduleConfigurationComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature ScheduleConfiguration.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`StartOfWeek`](../enums/exports_cluster.Thermostat.StartOfWeek.md), `any`\>  } |
| `attributes.numberOfDailyTransitions` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.numberOfWeeklyTransitions` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.startOfWeek` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`StartOfWeek`](../enums/exports_cluster.Thermostat.StartOfWeek.md), `any`\> |
| `commands` | \{ `clearWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.clearWeeklySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |
| `commands.getWeeklySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `commands.setWeeklySchedule` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:778

___

### SetbackAndOccupancyComponent

• `Const` **SetbackAndOccupancyComponent**: `Object`

A ThermostatCluster supports these elements if it supports features Setback and Occupancy.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.unoccupiedSetback` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.unoccupiedSetbackMax` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.unoccupiedSetbackMin` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:944

___

### SetbackComponent

• `Const` **SetbackComponent**: `Object`

A ThermostatCluster supports these elements if it supports feature Setback.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.occupiedSetback` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.occupiedSetbackMax` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.occupiedSetbackMin` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:894

___

### ThermostatProgrammingOperationMode

• `Const` **ThermostatProgrammingOperationMode**: `Object`

The value of the Thermostat thermostatProgrammingOperationMode attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.32

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoRecovery` | [`BitFlag`](exports_schema.md#bitflag) | Auto/recovery mode |
| `economy` | [`BitFlag`](exports_schema.md#bitflag) | Economy/EnergyStar mode |
| `scheduleActive` | [`BitFlag`](exports_schema.md#bitflag) | Schedule programming mode. This enables any programmed weekly schedule configurations. |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:303

___

### ThermostatRunningState

• `Const` **ThermostatRunningState**: `Object`

The value of the Thermostat thermostatRunningState attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.33

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cool` | [`BitFlag`](exports_schema.md#bitflag) | Cool State On |
| `coolStage2` | [`BitFlag`](exports_schema.md#bitflag) | Cool 2nd Stage State On |
| `fan` | [`BitFlag`](exports_schema.md#bitflag) | Fan State On |
| `fanStage2` | [`BitFlag`](exports_schema.md#bitflag) | Fan 2nd Stage State On |
| `fanStage3` | [`BitFlag`](exports_schema.md#bitflag) | Fan 3rd Stage Stage On |
| `heat` | [`BitFlag`](exports_schema.md#bitflag) | Heat State On |
| `heatStage2` | [`BitFlag`](exports_schema.md#bitflag) | Heat 2nd Stage State On |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:322

___

### TlvGetWeeklyScheduleRequest

• `Const` **TlvGetWeeklyScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Thermostat getWeeklySchedule command

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:129

___

### TlvGetWeeklyScheduleResponse

• `Const` **TlvGetWeeklyScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:155

___

### TlvSetWeeklyScheduleRequest

• `Const` **TlvSetWeeklyScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Thermostat setWeeklySchedule command

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:88

___

### TlvSetpointRaiseLowerRequest

• `Const` **TlvSetpointRaiseLowerRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Thermostat setpointRaiseLower command

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:519

___

### TlvThermostatScheduleTransition

• `Const` **TlvThermostatScheduleTransition**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This represents a single transition in a Thermostat schedule

**`See`**

MatterSpecification.v11.Cluster § 4.3.9.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:64
