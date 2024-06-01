[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / Thermostat

# Namespace: Thermostat

## Index

### Enumerations

- [AcCapacityFormat](enumerations/AcCapacityFormat.md)
- [AcCompressorType](enumerations/AcCompressorType.md)
- [AcLouverPosition](enumerations/AcLouverPosition.md)
- [AcRefrigerantType](enumerations/AcRefrigerantType.md)
- [AcType](enumerations/AcType.md)
- [ControlSequenceOfOperation](enumerations/ControlSequenceOfOperation.md)
- [Feature](enumerations/Feature.md)
- [SetpointAdjustMode](enumerations/SetpointAdjustMode.md)
- [SetpointChangeSource](enumerations/SetpointChangeSource.md)
- [StartOfWeek](enumerations/StartOfWeek.md)
- [SystemMode](enumerations/SystemMode.md)
- [TemperatureSetpointHold](enumerations/TemperatureSetpointHold.md)
- [ThermostatRunningMode](enumerations/ThermostatRunningMode.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [GetWeeklyScheduleRequest](interfaces/GetWeeklyScheduleRequest.md)
- [GetWeeklyScheduleResponse](interfaces/GetWeeklyScheduleResponse.md)
- [SetWeeklyScheduleRequest](interfaces/SetWeeklyScheduleRequest.md)
- [SetpointRaiseLowerRequest](interfaces/SetpointRaiseLowerRequest.md)
- [ThermostatScheduleTransition](interfaces/ThermostatScheduleTransition.md)

## Variables

### AcErrorCode

> `const` **AcErrorCode**: `object`

The value of the Thermostat acErrorCode attribute

#### See

MatterSpecification.v11.Cluster § 4.3.7.48

#### Type declaration

##### coilSensorFail

> **coilSensorFail**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indoor Coil Temperature Sensor Failure

##### compressorFail

> **compressorFail**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Compressor Failure or Refrigerant Leakage

##### fanFail

> **fanFail**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Fan Failure

##### outdoorSensorFail

> **outdoorSensorFail**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Outdoor Temperature Sensor Failure

##### roomSensorFail

> **roomSensorFail**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Room Temperature Sensor Failure

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:461](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L461)

***

### AlarmMask

> `const` **AlarmMask**: `object`

The value of the Thermostat alarmMask attribute

#### See

MatterSpecification.v11.Cluster § 4.3.7.25

#### Type declaration

##### hardwareFailure

> **hardwareFailure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### initializationFailure

> **initializationFailure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### selfCalibrationFailure

> **selfCalibrationFailure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:261](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L261)

***

### AutoModeComponent

> `const` **AutoModeComponent**: `object`

A ThermostatCluster supports these elements if it supports feature AutoMode.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.minSetpointDeadBand

> `readonly` **minSetpointDeadBand**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

On devices which support the AUTO feature, this attribute specifies the minimum difference between the
Heat Setpoint and the Cool Setpoint.

Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
response with the status code CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.3.7.21

##### attributes.thermostatRunningMode

> `readonly` **thermostatRunningMode**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`ThermostatRunningMode`](enumerations/ThermostatRunningMode.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.7

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:833](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L833)

***

### Base

> `const` **Base**: `object`

These elements and properties are present in all Thermostat clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acCapacity

> `readonly` **acCapacity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute indicates capacity of Mini Split AC in terms of the format defined by the
ACCapacityFormat attribute

###### See

MatterSpecification.v11.Cluster § 4.3.7.45

##### attributes.acCapacityFormat

> `readonly` **acCapacityFormat**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`BtUh`](enumerations/AcCapacityFormat.md#btuh), `any`\>

This attribute specifies the format for the ACCapacity attribute.

Table 87. ACCapacity Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.51

##### attributes.acCoilTemperature

> `readonly` **acCoilTemperature**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute represents the temperature of the AC coil, as measured locally or remotely (over the
network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.50

##### attributes.acCompressorType

> `readonly` **acCompressorType**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcCompressorType`](enumerations/AcCompressorType.md), `any`\>

This attribute indicates type of Compressor used within the Mini Split AC.

Table 84. ACCompressorType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.47

##### attributes.acErrorCode

> `readonly` **acErrorCode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute indicates the type of errors encountered within the Mini Split AC. Error values are
reported with four bytes values. Each bit within the four bytes indicates the unique error.

Table 85. ACErrorCode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.48

##### attributes.acLouverPosition

> `readonly` **acLouverPosition**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcLouverPosition`](enumerations/AcLouverPosition.md), `any`\>

This attribute indicates the position of Louver on the AC.

Table 86. ACLouverPosition Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.49

##### attributes.acRefrigerantType

> `readonly` **acRefrigerantType**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcRefrigerantType`](enumerations/AcRefrigerantType.md), `any`\>

This attribute indicates type of refrigerant used within the Mini Split AC.

Table 83. ACRefrigerantType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.46

##### attributes.acType

> `readonly` **acType**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcType`](enumerations/AcType.md), `any`\>

This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how
Cooling and Heating condition is achieved by Mini Split AC.

Table 82. ACType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.44

##### attributes.alarmMask

> `readonly` **alarmMask**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies whether each of the alarms listed below is enabled. When the bit number
corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not
corresponding to a code in the table are reserved.

When the Alarms cluster is implemented on a device, and one of the alarm conditions included in this
table occurs, an alarm notification is generated, with the alarm code field set as listed in the table.

Table 76. Alarm Codes

###### See

MatterSpecification.v11.Cluster § 4.3.7.25

##### attributes.controlSequenceOfOperation

> `readonly` **controlSequenceOfOperation**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`ControlSequenceOfOperation`](enumerations/ControlSequenceOfOperation.md), `any`\>

This attribute specifies the overall operating environment of the thermostat, and thus the possible
system modes that the thermostat can operate in. It shall be set to one of the following values.

Table 73. ControlSequenceOfOperation Values

NOTE

CoolingAndHeating

A thermostat indicating it supports CoolingAndHeating (or CoolingAndHeatingWithReheat) SHOULD be able to
request heating or cooling on demand and will usually support the Auto SystemMode.

Systems which support cooling or heating, requiring external intervention to change modes or where the
whole building must be in the same mode, SHOULD report CoolingOnly or HeatingOnly based on the current
capability.

###### See

MatterSpecification.v11.Cluster § 4.3.7.23

##### attributes.emergencyHeatDelta

> `readonly` **emergencyHeatDelta**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute specifies the delta between the LocalTemperature Value and the OccupiedHeatingSetpoint or
UnoccupiedHeatingSetpoint attributes at which the Thermostat server will operate in emergency heat mode.

If the difference between LocalTemperature Value and Un/OccupiedHeatingSetpoint is greater than or equal
to the EmergencyHeatDelta and the Thermostat server’s SystemMode attribute is in a heating-related mode,
then the Thermostat server shall immediately switch to the SystemMode attribute value that provides the
highest stage of heating (e.g., emergency heat) and continue operating in that running state until the
OccupiedHeatingSetpoint value is reached. For example:

  • LocalTemperature = 10.0°C

  • OccupiedHeatingSetpoint = 16.0°C

  • EmergencyHeatDelta = 2.0°C

⇒ OccupiedHeatingSetpoint - LocalTemperature ≥? EmergencyHeatDelta

⇒ 16°C - 10°C ≥? 2°C

⇒ TRUE >>> Thermostat server changes its SystemMode to operate in 2nd stage or emergency heat mode

The purpose of this attribute is to provide Thermostat clients the ability to configure rapid heating
when a setpoint is of a specified amount greater than the measured temperature. This allows the heated
space to be quickly heated to the desired level set by the user.

###### See

MatterSpecification.v11.Cluster § 4.3.7.43

##### attributes.localTemperature

> `readonly` **localTemperature**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute indicates the current LocalTemperature value, when available. The value may be local, or
remote, depending on the value of the RemoteSensing attribute when supported.

  • If the LTNE feature is not supported:

    ◦ If the temperature measurement is invalid or currently unavailable, the attribute shall report
      null.

    ◦ If the temperature measurement is valid, the attribute shall report that value.

  • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the
    LocalTemperature value. In that case, the LocalTemperature attribute shall always report null.

###### See

MatterSpecification.v11.Cluster § 4.3.7.2

##### attributes.outdoorTemperature

> `readonly` **outdoorTemperature**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute represents the outdoor temperature, as measured locally or remotely (over the network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.3

##### attributes.remoteSensing

> `readonly` **remoteSensing**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute indicates when the local temperature, outdoor temperature and occupancy are being sensed
by remote networked sensors, rather than internal sensors.

A bit set to 1 indicates remote sensing of the relevant value.

Table 72. RemoteSensing Attribute Bit Values

If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall always
report a value of 0.

If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is present,
the write shall fail and the server shall report a CONSTRAINT_ERROR.

###### See

MatterSpecification.v11.Cluster § 4.3.7.22

##### attributes.setpointChangeAmount

> `readonly` **setpointChangeAmount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the delta between the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the
SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement
SetpointChangeSource.

The null value indicates that the previous setpoint was unknown.

###### See

MatterSpecification.v11.Cluster § 4.3.7.35

##### attributes.setpointChangeSource

> `readonly` **setpointChangeSource**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`SetpointChangeSource`](enumerations/SetpointChangeSource.md), `any`\>

This attribute specifies the source of the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint).

This attribute enables service providers to determine whether changes to setpoints were initiated due to
occupant comfort, scheduled programming or some other source (e.g., electric utility or other service
provider). Because automation services may initiate frequent setpoint changes, this attribute clearly
differentiates the source of setpoint changes made at the thermostat.

Table 81. SetpointChangeSource Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.34

##### attributes.setpointChangeSourceTimestamp

> `readonly` **setpointChangeSourceTimestamp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was
recorded.

###### See

MatterSpecification.v11.Cluster § 4.3.7.36

##### attributes.systemMode

> `readonly` **systemMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`SystemMode`](enumerations/SystemMode.md), `any`\>

This attribute specifies the current operating mode of the thermostat, It shall be set to one of the
following values, as limited by the ControlSequenceOfOperation Attribute.

NOTE It is not mandatory to support all values.

Table 75. Interpretation of Heat, Cool and Auto SystemMode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.24

##### attributes.temperatureSetpointHold

> `readonly` **temperatureSetpointHold**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](enumerations/TemperatureSetpointHold.md), `any`\>

This attribute specifies the temperature hold status on the thermostat. If hold status is on, the
thermostat SHOULD maintain the temperature set point for the current mode until a system mode change. If
hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal
scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also
implement the TemperatureSetpointHoldDuration attribute.

Table 78. TemperatureSetpointHold Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.30

##### attributes.temperatureSetpointHoldDuration

> `readonly` **temperatureSetpointHoldDuration**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support
hold for a specified duration SHOULD implement this attribute. The null value indicates the field is
unused. All other values are reserved.

###### See

MatterSpecification.v11.Cluster § 4.3.7.31

##### attributes.thermostatProgrammingOperationMode

> `readonly` **thermostatProgrammingOperationMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute determines the operational state of the thermostat’s programming. The thermostat shall
modify its programming operation when this attribute is modified by a client and update this attribute
when its programming operation is modified locally by a user. The thermostat may support more than one
active ThermostatProgrammingOperationMode. For example, the thermostat may operate simultaneously in
Schedule Programming Mode and Recovery Mode.

Thermostats which contain a schedule may use this attribute to control how that schedule is used, even
if they do not support the Schedule Configuration feature.

Table 79. ThermostatProgrammingOperationMode Attribute Values

When ScheduleActive is not set, the setpoint is altered only by manual up/down changes at the thermostat
or remotely, not by internal schedule programming.

NOTE Modifying the ScheduleActive bit does not clear or delete previous weekly schedule programming
configurations.

###### See

MatterSpecification.v11.Cluster § 4.3.7.32

##### attributes.thermostatRunningState

> `readonly` **thermostatRunningState**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute represents the current relay state of the heat, cool, and fan relays.

Table 80. HVAC Relay State Values

Unimplemented outputs shall be treated as if they were Off.

###### See

MatterSpecification.v11.Cluster § 4.3.7.33

##### commands

> `readonly` **commands**: `object`

##### commands.getRelayStatusLog

> `readonly` **getRelayStatusLog**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.8

##### commands.setpointRaiseLower

> `readonly` **setpointRaiseLower**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.8

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which ThermostatCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.autoMode

> `readonly` **autoMode**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

AutoMode

Supports a System Mode of Auto

##### features.cooling

> `readonly` **cooling**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Cooling

Thermostat is capable of managing a cooling device

##### features.heating

> `readonly` **heating**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Heating

Thermostat is capable of managing a heating device

##### features.localTemperatureNotExposed

> `readonly` **localTemperatureNotExposed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LocalTemperatureNotExposed

Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute

##### features.occupancy

> `readonly` **occupancy**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Occupancy

Supports Occupied and Unoccupied setpoints

##### features.scheduleConfiguration

> `readonly` **scheduleConfiguration**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ScheduleConfiguration

Supports remote configuration of a weekly schedule of setpoint transitions

##### features.setback

> `readonly` **setback**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Setback

Supports configurable setback (or span)

##### id

> `readonly` **id**: `513` = `0x201`

##### name

> `readonly` **name**: `"Thermostat"` = `"Thermostat"`

##### revision

> `readonly` **revision**: `6` = `6`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1094](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1094)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1546](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1546)

***

### ClusterInstance

> `const` **ClusterInstance**: [`ExtensibleOnly`](../MutableCluster/interfaces/ExtensibleOnly.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acCapacity

> `readonly` **acCapacity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute indicates capacity of Mini Split AC in terms of the format defined by the
ACCapacityFormat attribute

###### See

MatterSpecification.v11.Cluster § 4.3.7.45

##### attributes.acCapacityFormat

> `readonly` **acCapacityFormat**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`BtUh`](enumerations/AcCapacityFormat.md#btuh), `any`\>

This attribute specifies the format for the ACCapacity attribute.

Table 87. ACCapacity Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.51

##### attributes.acCoilTemperature

> `readonly` **acCoilTemperature**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute represents the temperature of the AC coil, as measured locally or remotely (over the
network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.50

##### attributes.acCompressorType

> `readonly` **acCompressorType**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcCompressorType`](enumerations/AcCompressorType.md), `any`\>

This attribute indicates type of Compressor used within the Mini Split AC.

Table 84. ACCompressorType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.47

##### attributes.acErrorCode

> `readonly` **acErrorCode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute indicates the type of errors encountered within the Mini Split AC. Error values are
reported with four bytes values. Each bit within the four bytes indicates the unique error.

Table 85. ACErrorCode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.48

##### attributes.acLouverPosition

> `readonly` **acLouverPosition**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcLouverPosition`](enumerations/AcLouverPosition.md), `any`\>

This attribute indicates the position of Louver on the AC.

Table 86. ACLouverPosition Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.49

##### attributes.acRefrigerantType

> `readonly` **acRefrigerantType**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcRefrigerantType`](enumerations/AcRefrigerantType.md), `any`\>

This attribute indicates type of refrigerant used within the Mini Split AC.

Table 83. ACRefrigerantType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.46

##### attributes.acType

> `readonly` **acType**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcType`](enumerations/AcType.md), `any`\>

This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how
Cooling and Heating condition is achieved by Mini Split AC.

Table 82. ACType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.44

##### attributes.alarmMask

> `readonly` **alarmMask**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies whether each of the alarms listed below is enabled. When the bit number
corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not
corresponding to a code in the table are reserved.

When the Alarms cluster is implemented on a device, and one of the alarm conditions included in this
table occurs, an alarm notification is generated, with the alarm code field set as listed in the table.

Table 76. Alarm Codes

###### See

MatterSpecification.v11.Cluster § 4.3.7.25

##### attributes.controlSequenceOfOperation

> `readonly` **controlSequenceOfOperation**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`ControlSequenceOfOperation`](enumerations/ControlSequenceOfOperation.md), `any`\>

This attribute specifies the overall operating environment of the thermostat, and thus the possible
system modes that the thermostat can operate in. It shall be set to one of the following values.

Table 73. ControlSequenceOfOperation Values

NOTE

CoolingAndHeating

A thermostat indicating it supports CoolingAndHeating (or CoolingAndHeatingWithReheat) SHOULD be able to
request heating or cooling on demand and will usually support the Auto SystemMode.

Systems which support cooling or heating, requiring external intervention to change modes or where the
whole building must be in the same mode, SHOULD report CoolingOnly or HeatingOnly based on the current
capability.

###### See

MatterSpecification.v11.Cluster § 4.3.7.23

##### attributes.emergencyHeatDelta

> `readonly` **emergencyHeatDelta**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute specifies the delta between the LocalTemperature Value and the OccupiedHeatingSetpoint or
UnoccupiedHeatingSetpoint attributes at which the Thermostat server will operate in emergency heat mode.

If the difference between LocalTemperature Value and Un/OccupiedHeatingSetpoint is greater than or equal
to the EmergencyHeatDelta and the Thermostat server’s SystemMode attribute is in a heating-related mode,
then the Thermostat server shall immediately switch to the SystemMode attribute value that provides the
highest stage of heating (e.g., emergency heat) and continue operating in that running state until the
OccupiedHeatingSetpoint value is reached. For example:

  • LocalTemperature = 10.0°C

  • OccupiedHeatingSetpoint = 16.0°C

  • EmergencyHeatDelta = 2.0°C

⇒ OccupiedHeatingSetpoint - LocalTemperature ≥? EmergencyHeatDelta

⇒ 16°C - 10°C ≥? 2°C

⇒ TRUE >>> Thermostat server changes its SystemMode to operate in 2nd stage or emergency heat mode

The purpose of this attribute is to provide Thermostat clients the ability to configure rapid heating
when a setpoint is of a specified amount greater than the measured temperature. This allows the heated
space to be quickly heated to the desired level set by the user.

###### See

MatterSpecification.v11.Cluster § 4.3.7.43

##### attributes.localTemperature

> `readonly` **localTemperature**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute indicates the current LocalTemperature value, when available. The value may be local, or
remote, depending on the value of the RemoteSensing attribute when supported.

  • If the LTNE feature is not supported:

    ◦ If the temperature measurement is invalid or currently unavailable, the attribute shall report
      null.

    ◦ If the temperature measurement is valid, the attribute shall report that value.

  • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the
    LocalTemperature value. In that case, the LocalTemperature attribute shall always report null.

###### See

MatterSpecification.v11.Cluster § 4.3.7.2

##### attributes.outdoorTemperature

> `readonly` **outdoorTemperature**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute represents the outdoor temperature, as measured locally or remotely (over the network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.3

##### attributes.remoteSensing

> `readonly` **remoteSensing**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute indicates when the local temperature, outdoor temperature and occupancy are being sensed
by remote networked sensors, rather than internal sensors.

A bit set to 1 indicates remote sensing of the relevant value.

Table 72. RemoteSensing Attribute Bit Values

If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall always
report a value of 0.

If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is present,
the write shall fail and the server shall report a CONSTRAINT_ERROR.

###### See

MatterSpecification.v11.Cluster § 4.3.7.22

##### attributes.setpointChangeAmount

> `readonly` **setpointChangeAmount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the delta between the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the
SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement
SetpointChangeSource.

The null value indicates that the previous setpoint was unknown.

###### See

MatterSpecification.v11.Cluster § 4.3.7.35

##### attributes.setpointChangeSource

> `readonly` **setpointChangeSource**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`SetpointChangeSource`](enumerations/SetpointChangeSource.md), `any`\>

This attribute specifies the source of the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint).

This attribute enables service providers to determine whether changes to setpoints were initiated due to
occupant comfort, scheduled programming or some other source (e.g., electric utility or other service
provider). Because automation services may initiate frequent setpoint changes, this attribute clearly
differentiates the source of setpoint changes made at the thermostat.

Table 81. SetpointChangeSource Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.34

##### attributes.setpointChangeSourceTimestamp

> `readonly` **setpointChangeSourceTimestamp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was
recorded.

###### See

MatterSpecification.v11.Cluster § 4.3.7.36

##### attributes.systemMode

> `readonly` **systemMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`SystemMode`](enumerations/SystemMode.md), `any`\>

This attribute specifies the current operating mode of the thermostat, It shall be set to one of the
following values, as limited by the ControlSequenceOfOperation Attribute.

NOTE It is not mandatory to support all values.

Table 75. Interpretation of Heat, Cool and Auto SystemMode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.24

##### attributes.temperatureSetpointHold

> `readonly` **temperatureSetpointHold**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](enumerations/TemperatureSetpointHold.md), `any`\>

This attribute specifies the temperature hold status on the thermostat. If hold status is on, the
thermostat SHOULD maintain the temperature set point for the current mode until a system mode change. If
hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal
scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also
implement the TemperatureSetpointHoldDuration attribute.

Table 78. TemperatureSetpointHold Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.30

##### attributes.temperatureSetpointHoldDuration

> `readonly` **temperatureSetpointHoldDuration**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support
hold for a specified duration SHOULD implement this attribute. The null value indicates the field is
unused. All other values are reserved.

###### See

MatterSpecification.v11.Cluster § 4.3.7.31

##### attributes.thermostatProgrammingOperationMode

> `readonly` **thermostatProgrammingOperationMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute determines the operational state of the thermostat’s programming. The thermostat shall
modify its programming operation when this attribute is modified by a client and update this attribute
when its programming operation is modified locally by a user. The thermostat may support more than one
active ThermostatProgrammingOperationMode. For example, the thermostat may operate simultaneously in
Schedule Programming Mode and Recovery Mode.

Thermostats which contain a schedule may use this attribute to control how that schedule is used, even
if they do not support the Schedule Configuration feature.

Table 79. ThermostatProgrammingOperationMode Attribute Values

When ScheduleActive is not set, the setpoint is altered only by manual up/down changes at the thermostat
or remotely, not by internal schedule programming.

NOTE Modifying the ScheduleActive bit does not clear or delete previous weekly schedule programming
configurations.

###### See

MatterSpecification.v11.Cluster § 4.3.7.32

##### attributes.thermostatRunningState

> `readonly` **thermostatRunningState**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute represents the current relay state of the heat, cool, and fan relays.

Table 80. HVAC Relay State Values

Unimplemented outputs shall be treated as if they were Off.

###### See

MatterSpecification.v11.Cluster § 4.3.7.33

##### commands

> `readonly` **commands**: `object`

##### commands.getRelayStatusLog

> `readonly` **getRelayStatusLog**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.8

##### commands.setpointRaiseLower

> `readonly` **setpointRaiseLower**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.8

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which ThermostatCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.autoMode

> `readonly` **autoMode**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

AutoMode

Supports a System Mode of Auto

##### features.cooling

> `readonly` **cooling**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Cooling

Thermostat is capable of managing a cooling device

##### features.heating

> `readonly` **heating**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Heating

Thermostat is capable of managing a heating device

##### features.localTemperatureNotExposed

> `readonly` **localTemperatureNotExposed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LocalTemperatureNotExposed

Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute

##### features.occupancy

> `readonly` **occupancy**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Occupancy

Supports Occupied and Unoccupied setpoints

##### features.scheduleConfiguration

> `readonly` **scheduleConfiguration**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ScheduleConfiguration

Supports remote configuration of a weekly schedule of setpoint transitions

##### features.setback

> `readonly` **setback**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Setback

Supports configurable setback (or span)

##### id

> `readonly` **id**: `513` = `0x201`

##### name

> `readonly` **name**: `"Thermostat"` = `"Thermostat"`

##### revision

> `readonly` **revision**: `6` = `6`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1534](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1534)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1700](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1700)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.absMaxCoolSetpointLimit

> `readonly` **absMaxCoolSetpointLimit**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.absMaxHeatSetpointLimit

> `readonly` **absMaxHeatSetpointLimit**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.absMinCoolSetpointLimit

> `readonly` **absMinCoolSetpointLimit**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.absMinHeatSetpointLimit

> `readonly` **absMinHeatSetpointLimit**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.acCapacity

> `readonly` **acCapacity**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute indicates capacity of Mini Split AC in terms of the format defined by the
ACCapacityFormat attribute

###### See

MatterSpecification.v11.Cluster § 4.3.7.45

##### attributes.acCapacityFormat

> `readonly` **acCapacityFormat**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`BtUh`](enumerations/AcCapacityFormat.md#btuh), `any`\>

This attribute specifies the format for the ACCapacity attribute.

Table 87. ACCapacity Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.51

##### attributes.acCoilTemperature

> `readonly` **acCoilTemperature**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute represents the temperature of the AC coil, as measured locally or remotely (over the
network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.50

##### attributes.acCompressorType

> `readonly` **acCompressorType**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcCompressorType`](enumerations/AcCompressorType.md), `any`\>

This attribute indicates type of Compressor used within the Mini Split AC.

Table 84. ACCompressorType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.47

##### attributes.acErrorCode

> `readonly` **acErrorCode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute indicates the type of errors encountered within the Mini Split AC. Error values are
reported with four bytes values. Each bit within the four bytes indicates the unique error.

Table 85. ACErrorCode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.48

##### attributes.acLouverPosition

> `readonly` **acLouverPosition**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcLouverPosition`](enumerations/AcLouverPosition.md), `any`\>

This attribute indicates the position of Louver on the AC.

Table 86. ACLouverPosition Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.49

##### attributes.acRefrigerantType

> `readonly` **acRefrigerantType**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcRefrigerantType`](enumerations/AcRefrigerantType.md), `any`\>

This attribute indicates type of refrigerant used within the Mini Split AC.

Table 83. ACRefrigerantType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.46

##### attributes.acType

> `readonly` **acType**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`AcType`](enumerations/AcType.md), `any`\>

This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how
Cooling and Heating condition is achieved by Mini Split AC.

Table 82. ACType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.44

##### attributes.alarmMask

> `readonly` **alarmMask**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies whether each of the alarms listed below is enabled. When the bit number
corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not
corresponding to a code in the table are reserved.

When the Alarms cluster is implemented on a device, and one of the alarm conditions included in this
table occurs, an alarm notification is generated, with the alarm code field set as listed in the table.

Table 76. Alarm Codes

###### See

MatterSpecification.v11.Cluster § 4.3.7.25

##### attributes.controlSequenceOfOperation

> `readonly` **controlSequenceOfOperation**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`ControlSequenceOfOperation`](enumerations/ControlSequenceOfOperation.md), `any`\>

This attribute specifies the overall operating environment of the thermostat, and thus the possible
system modes that the thermostat can operate in. It shall be set to one of the following values.

Table 73. ControlSequenceOfOperation Values

NOTE

CoolingAndHeating

A thermostat indicating it supports CoolingAndHeating (or CoolingAndHeatingWithReheat) SHOULD be able to
request heating or cooling on demand and will usually support the Auto SystemMode.

Systems which support cooling or heating, requiring external intervention to change modes or where the
whole building must be in the same mode, SHOULD report CoolingOnly or HeatingOnly based on the current
capability.

###### See

MatterSpecification.v11.Cluster § 4.3.7.23

##### attributes.emergencyHeatDelta

> `readonly` **emergencyHeatDelta**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute specifies the delta between the LocalTemperature Value and the OccupiedHeatingSetpoint or
UnoccupiedHeatingSetpoint attributes at which the Thermostat server will operate in emergency heat mode.

If the difference between LocalTemperature Value and Un/OccupiedHeatingSetpoint is greater than or equal
to the EmergencyHeatDelta and the Thermostat server’s SystemMode attribute is in a heating-related mode,
then the Thermostat server shall immediately switch to the SystemMode attribute value that provides the
highest stage of heating (e.g., emergency heat) and continue operating in that running state until the
OccupiedHeatingSetpoint value is reached. For example:

  • LocalTemperature = 10.0°C

  • OccupiedHeatingSetpoint = 16.0°C

  • EmergencyHeatDelta = 2.0°C

⇒ OccupiedHeatingSetpoint - LocalTemperature ≥? EmergencyHeatDelta

⇒ 16°C - 10°C ≥? 2°C

⇒ TRUE >>> Thermostat server changes its SystemMode to operate in 2nd stage or emergency heat mode

The purpose of this attribute is to provide Thermostat clients the ability to configure rapid heating
when a setpoint is of a specified amount greater than the measured temperature. This allows the heated
space to be quickly heated to the desired level set by the user.

###### See

MatterSpecification.v11.Cluster § 4.3.7.43

##### attributes.localTemperature

> `readonly` **localTemperature**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute indicates the current LocalTemperature value, when available. The value may be local, or
remote, depending on the value of the RemoteSensing attribute when supported.

  • If the LTNE feature is not supported:

    ◦ If the temperature measurement is invalid or currently unavailable, the attribute shall report
      null.

    ◦ If the temperature measurement is valid, the attribute shall report that value.

  • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the
    LocalTemperature value. In that case, the LocalTemperature attribute shall always report null.

###### See

MatterSpecification.v11.Cluster § 4.3.7.2

##### attributes.localTemperatureCalibration

> `readonly` **localTemperatureCalibration**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: []

##### attributes.maxCoolSetpointLimit

> `readonly` **maxCoolSetpointLimit**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxHeatSetpointLimit

> `readonly` **maxHeatSetpointLimit**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minCoolSetpointLimit

> `readonly` **minCoolSetpointLimit**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minHeatSetpointLimit

> `readonly` **minHeatSetpointLimit**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minSetpointDeadBand

> `readonly` **minSetpointDeadBand**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfDailyTransitions

> `readonly` **numberOfDailyTransitions**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.numberOfWeeklyTransitions

> `readonly` **numberOfWeeklyTransitions**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.occupancy

> `readonly` **occupancy**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.occupiedCoolingSetpoint

> `readonly` **occupiedCoolingSetpoint**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.occupiedHeatingSetpoint

> `readonly` **occupiedHeatingSetpoint**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.occupiedSetback

> `readonly` **occupiedSetback**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.occupiedSetbackMax

> `readonly` **occupiedSetbackMax**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.occupiedSetbackMin

> `readonly` **occupiedSetbackMin**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.outdoorTemperature

> `readonly` **outdoorTemperature**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute represents the outdoor temperature, as measured locally or remotely (over the network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.3

##### attributes.piCoolingDemand

> `readonly` **piCoolingDemand**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.piHeatingDemand

> `readonly` **piHeatingDemand**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.remoteSensing

> `readonly` **remoteSensing**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute indicates when the local temperature, outdoor temperature and occupancy are being sensed
by remote networked sensors, rather than internal sensors.

A bit set to 1 indicates remote sensing of the relevant value.

Table 72. RemoteSensing Attribute Bit Values

If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall always
report a value of 0.

If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is present,
the write shall fail and the server shall report a CONSTRAINT_ERROR.

###### See

MatterSpecification.v11.Cluster § 4.3.7.22

##### attributes.setpointChangeAmount

> `readonly` **setpointChangeAmount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the delta between the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the
SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement
SetpointChangeSource.

The null value indicates that the previous setpoint was unknown.

###### See

MatterSpecification.v11.Cluster § 4.3.7.35

##### attributes.setpointChangeSource

> `readonly` **setpointChangeSource**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`SetpointChangeSource`](enumerations/SetpointChangeSource.md), `any`\>

This attribute specifies the source of the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint).

This attribute enables service providers to determine whether changes to setpoints were initiated due to
occupant comfort, scheduled programming or some other source (e.g., electric utility or other service
provider). Because automation services may initiate frequent setpoint changes, this attribute clearly
differentiates the source of setpoint changes made at the thermostat.

Table 81. SetpointChangeSource Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.34

##### attributes.setpointChangeSourceTimestamp

> `readonly` **setpointChangeSourceTimestamp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was
recorded.

###### See

MatterSpecification.v11.Cluster § 4.3.7.36

##### attributes.startOfWeek

> `readonly` **startOfWeek**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`StartOfWeek`](enumerations/StartOfWeek.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.systemMode

> `readonly` **systemMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`SystemMode`](enumerations/SystemMode.md), `any`\>

This attribute specifies the current operating mode of the thermostat, It shall be set to one of the
following values, as limited by the ControlSequenceOfOperation Attribute.

NOTE It is not mandatory to support all values.

Table 75. Interpretation of Heat, Cool and Auto SystemMode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.24

##### attributes.temperatureSetpointHold

> `readonly` **temperatureSetpointHold**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](enumerations/TemperatureSetpointHold.md), `any`\>

This attribute specifies the temperature hold status on the thermostat. If hold status is on, the
thermostat SHOULD maintain the temperature set point for the current mode until a system mode change. If
hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal
scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also
implement the TemperatureSetpointHoldDuration attribute.

Table 78. TemperatureSetpointHold Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.30

##### attributes.temperatureSetpointHoldDuration

> `readonly` **temperatureSetpointHoldDuration**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support
hold for a specified duration SHOULD implement this attribute. The null value indicates the field is
unused. All other values are reserved.

###### See

MatterSpecification.v11.Cluster § 4.3.7.31

##### attributes.thermostatProgrammingOperationMode

> `readonly` **thermostatProgrammingOperationMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute determines the operational state of the thermostat’s programming. The thermostat shall
modify its programming operation when this attribute is modified by a client and update this attribute
when its programming operation is modified locally by a user. The thermostat may support more than one
active ThermostatProgrammingOperationMode. For example, the thermostat may operate simultaneously in
Schedule Programming Mode and Recovery Mode.

Thermostats which contain a schedule may use this attribute to control how that schedule is used, even
if they do not support the Schedule Configuration feature.

Table 79. ThermostatProgrammingOperationMode Attribute Values

When ScheduleActive is not set, the setpoint is altered only by manual up/down changes at the thermostat
or remotely, not by internal schedule programming.

NOTE Modifying the ScheduleActive bit does not clear or delete previous weekly schedule programming
configurations.

###### See

MatterSpecification.v11.Cluster § 4.3.7.32

##### attributes.thermostatRunningMode

> `readonly` **thermostatRunningMode**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`ThermostatRunningMode`](enumerations/ThermostatRunningMode.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.thermostatRunningState

> `readonly` **thermostatRunningState**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute represents the current relay state of the heat, cool, and fan relays.

Table 80. HVAC Relay State Values

Unimplemented outputs shall be treated as if they were Off.

###### See

MatterSpecification.v11.Cluster § 4.3.7.33

##### attributes.unoccupiedCoolingSetpoint

> `readonly` **unoccupiedCoolingSetpoint**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.unoccupiedHeatingSetpoint

> `readonly` **unoccupiedHeatingSetpoint**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.unoccupiedSetback

> `readonly` **unoccupiedSetback**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.unoccupiedSetbackMax

> `readonly` **unoccupiedSetbackMax**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.unoccupiedSetbackMin

> `readonly` **unoccupiedSetbackMin**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands

> `readonly` **commands**: `object`

##### commands.clearWeeklySchedule

> `readonly` **clearWeeklySchedule**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.getRelayStatusLog

> `readonly` **getRelayStatusLog**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.8

##### commands.getWeeklySchedule

> `readonly` **getWeeklySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.setWeeklySchedule

> `readonly` **setWeeklySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.setpointRaiseLower

> `readonly` **setpointRaiseLower**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.8

##### features

> `readonly` **features**: `object` = `Base.features`

##### features.autoMode

> `readonly` **autoMode**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

AutoMode

Supports a System Mode of Auto

##### features.cooling

> `readonly` **cooling**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Cooling

Thermostat is capable of managing a cooling device

##### features.heating

> `readonly` **heating**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Heating

Thermostat is capable of managing a heating device

##### features.localTemperatureNotExposed

> `readonly` **localTemperatureNotExposed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LocalTemperatureNotExposed

Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute

##### features.occupancy

> `readonly` **occupancy**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Occupancy

Supports Occupied and Unoccupied setpoints

##### features.scheduleConfiguration

> `readonly` **scheduleConfiguration**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ScheduleConfiguration

Supports remote configuration of a weekly schedule of setpoint transitions

##### features.setback

> `readonly` **setback**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Setback

Supports configurable setback (or span)

##### id

> `readonly` **id**: `513` = `Base.id`

##### name

> `readonly` **name**: `"Thermostat"` = `Base.name`

##### revision

> `readonly` **revision**: `6` = `Base.revision`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1562](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1562)

***

### CoolingAndOccupancyComponent

> `const` **CoolingAndOccupancyComponent**: `object`

A ThermostatCluster supports these elements if it supports features Cooling and Occupancy.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.unoccupiedCoolingSetpoint

> `readonly` **unoccupiedCoolingSetpoint**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

This attribute specifies the cooling mode setpoint when the room is unoccupied.

Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.

If the occupancy status of the room is unknown, this attribute shall not be used.

###### See

MatterSpecification.v11.Cluster § 4.3.7.15

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:787](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L787)

***

### CoolingComponent

> `const` **CoolingComponent**: `object`

A ThermostatCluster supports these elements if it supports feature Cooling.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.absMaxCoolSetpointLimit

> `readonly` **absMaxCoolSetpointLimit**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

This attribute specifies the absolute maximum level that the cooling setpoint may be set to. This is a
limitation imposed by the manufacturer.

Refer to Setpoint Limits for constraints

###### See

MatterSpecification.v11.Cluster § 4.3.7.8

##### attributes.absMinCoolSetpointLimit

> `readonly` **absMinCoolSetpointLimit**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

This attribute specifies the absolute minimum level that the cooling setpoint may be set to. This is a
limitation imposed by the manufacturer.

Refer to Setpoint Limits for constraints

###### See

MatterSpecification.v11.Cluster § 4.3.7.7

##### attributes.maxCoolSetpointLimit

> `readonly` **maxCoolSetpointLimit**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute specifies the maximum level that the cooling setpoint may be set to.

Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
which is not consistent with the constraints and cannot be resolved by modifying setpoints

then a response with the status code CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.3.7.20

##### attributes.minCoolSetpointLimit

> `readonly` **minCoolSetpointLimit**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute specifies the minimum level that the cooling setpoint may be set to.

Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
response with the status code CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.3.7.19

##### attributes.occupiedCoolingSetpoint

> `readonly` **occupiedCoolingSetpoint**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

This attribute specifies the cooling mode setpoint when the room is occupied.

Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.

If the occupancy status of the room is unknown, this attribute shall be used as the cooling mode
setpoint.

###### See

MatterSpecification.v11.Cluster § 4.3.7.13

##### attributes.piCoolingDemand

> `readonly` **piCoolingDemand**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

This attribute specifies the level of cooling demanded by the PI (proportional integral) control loop in
use by the thermostat (if any), in percent. This value is 0 when the thermostat is in “off” or “heating”
mode.

This attribute is reported regularly and may be used to control a cooling device.

###### See

MatterSpecification.v11.Cluster § 4.3.7.9

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:670](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L670)

***

### DayOfWeek

> `const` **DayOfWeek**: `object`

#### Type declaration

##### away

> **away**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### friday

> **friday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### monday

> **monday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### saturday

> **saturday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### sunday

> **sunday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### thursday

> **thursday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### tuesday

> **tuesday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### wednesday

> **wednesday**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L66)

***

### HeatingAndOccupancyComponent

> `const` **HeatingAndOccupancyComponent**: `object`

A ThermostatCluster supports these elements if it supports features Heating and Occupancy.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.unoccupiedHeatingSetpoint

> `readonly` **unoccupiedHeatingSetpoint**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

This attribute specifies the heating mode setpoint when the room is unoccupied.

Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.

If the occupancy status of the room is unknown, this attribute shall not be used.

###### See

MatterSpecification.v11.Cluster § 4.3.7.16

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:810](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L810)

***

### HeatingComponent

> `const` **HeatingComponent**: `object`

A ThermostatCluster supports these elements if it supports feature Heating.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.absMaxHeatSetpointLimit

> `readonly` **absMaxHeatSetpointLimit**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

This attribute specifies the absolute maximum level that the heating setpoint may be set to. This is a
limitation imposed by the manufacturer.

Refer to Setpoint Limits for constraints

###### See

MatterSpecification.v11.Cluster § 4.3.7.6

##### attributes.absMinHeatSetpointLimit

> `readonly` **absMinHeatSetpointLimit**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

This attribute specifies the absolute minimum level that the heating setpoint may be set to. This is a
limitation imposed by the manufacturer.

Refer to Setpoint Limits for constraints

###### See

MatterSpecification.v11.Cluster § 4.3.7.5

##### attributes.maxHeatSetpointLimit

> `readonly` **maxHeatSetpointLimit**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute specifies the maximum level that the heating setpoint may be set to.

Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
response with the status code CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.3.7.18

##### attributes.minHeatSetpointLimit

> `readonly` **minHeatSetpointLimit**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute specifies the minimum level that the heating setpoint may be set to.

This attribute, and the following three attributes, allow the user to define setpoint limits more
constrictive than the manufacturer imposed ones. Limiting users (e.g., in a commercial building) to such
setpoint limits can help conserve power.

Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
response with the status code CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.3.7.17

##### attributes.occupiedHeatingSetpoint

> `readonly` **occupiedHeatingSetpoint**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

This attribute specifies the heating mode setpoint when the room is occupied.

Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.

If the occupancy status of the room is unknown, this attribute shall be used as the heating mode
setpoint.

###### See

MatterSpecification.v11.Cluster § 4.3.7.14

##### attributes.piHeatingDemand

> `readonly` **piHeatingDemand**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

This attribute specifies the level of heating demanded by the PI loop in percent. This value is 0 when
the thermostat is in “off” or “cooling” mode.

This attribute is reported regularly and may be used to control a heating device.

###### See

MatterSpecification.v11.Cluster § 4.3.7.10

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:578](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L578)

***

### ModeForSequence

> `const` **ModeForSequence**: `object`

#### Type declaration

##### coolSetpointPresent

> **coolSetpointPresent**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### heatSetpointPresent

> **heatSetpointPresent**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L77)

***

### NotLocalTemperatureNotExposedComponent

> `const` **NotLocalTemperatureNotExposedComponent**: `object`

A ThermostatCluster supports these elements if doesn't support feature LTNE.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.localTemperatureCalibration

> `readonly` **localTemperatureCalibration**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute specifies the offset the Thermostat server shall make to the measured temperature
(locally or remotely) to adjust the LocalTemperature Value prior to using, displaying or reporting it.

The purpose of this attribute is to adjust the calibration of the Thermostat server per the user’s
preferences (e.g., to match if there are multiple servers displaying different values for the same HVAC
area) or compensate for variability amongst temperature sensors.

If a Thermostat client attempts to write LocalTemperatureCalibration attribute to an unsupported value
(e.g., out of the range supported by the Thermostat server), the Thermostat server shall respond with a
status of SUCCESS and set the value of LocalTemperatureCalibration to the upper or lower limit reached.

###### See

MatterSpecification.v11.Cluster § 4.3.7.12

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:760](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L760)

***

### Occupancy

> `const` **Occupancy**: `object`

The value of the Thermostat occupancy attribute

#### See

MatterSpecification.v11.Cluster § 4.3.7.4

#### Type declaration

##### occupied

> **occupied**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L38)

***

### OccupancyComponent

> `const` **OccupancyComponent**: `object`

A ThermostatCluster supports these elements if it supports feature Occupancy.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.occupancy

> `readonly` **occupancy**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies whether the heated/cooled space is occupied or not, as measured locally or
remotely (over the network). If bit 0 = 1, the space is occupied, else it is unoccupied. All other bits
are reserved.

###### See

MatterSpecification.v11.Cluster § 4.3.7.4

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:558](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L558)

***

### RemoteSensing

> `const` **RemoteSensing**: `object`

The value of the Thermostat remoteSensing attribute

#### See

MatterSpecification.v11.Cluster § 4.3.7.22

#### Type declaration

##### localTemperature

> **localTemperature**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

When set, LocalTemperature Value is derived from a remote node

##### occupancy

> **occupancy**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

When set, Occupancy is derived from a remote node

##### outdoorTemperature

> **outdoorTemperature**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

When set, OutdoorTemperature is derived from a remote node

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:161](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L161)

***

### ScheduleConfigurationComponent

> `const` **ScheduleConfigurationComponent**: `object`

A ThermostatCluster supports these elements if it supports feature ScheduleConfiguration.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.numberOfDailyTransitions

> `readonly` **numberOfDailyTransitions**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute determines how many daily schedule transitions the thermostat is capable of handling.

###### See

MatterSpecification.v11.Cluster § 4.3.7.29

##### attributes.numberOfWeeklyTransitions

> `readonly` **numberOfWeeklyTransitions**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute determines how many weekly schedule transitions the thermostat is capable of handling.

###### See

MatterSpecification.v11.Cluster § 4.3.7.28

##### attributes.startOfWeek

> `readonly` **startOfWeek**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`StartOfWeek`](enumerations/StartOfWeek.md), `any`\>

This attribute represents the day of the week that this thermostat considers to be the start of week for
weekly set point scheduling.

Table 77. StartofWeek Values

This attribute may be able to be used as the base to determine if the device supports weekly scheduling
by reading the attribute. Successful response means that the weekly scheduling is supported.

###### See

MatterSpecification.v11.Cluster § 4.3.7.27

##### commands

> `readonly` **commands**: `object`

##### commands.clearWeeklySchedule

> `readonly` **clearWeeklySchedule**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.8

##### commands.getWeeklySchedule

> `readonly` **getWeeklySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.8

##### commands.setWeeklySchedule

> `readonly` **setWeeklySchedule**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.8

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:867](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L867)

***

### SetbackAndOccupancyComponent

> `const` **SetbackAndOccupancyComponent**: `object`

A ThermostatCluster supports these elements if it supports features Setback and Occupancy.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.unoccupiedSetback

> `readonly` **unoccupiedSetback**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the amount that the Thermostat server will allow the LocalTemperature Value to
float above the UnoccupiedCooling setpoint (i.e., UnoccupiedCooling + UnoccupiedSetback) or below the
UnoccupiedHeating setpoint (i.e., UnoccupiedHeating - UnoccupiedSetback) before initiating a state
change to bring the temperature back to the user’s desired setpoint. This attribute is sometimes also
referred to as the “span.”

The purpose of this attribute is to allow remote configuration of the span between the desired setpoint
and the measured temperature to help prevent over-cycling and reduce energy bills, though this may
result in lower comfort on the part of some users.

The null value indicates the attribute is unused.

If the Thermostat client attempts to write UnoccupiedSetback to a value greater than
UnoccupiedSetbackMax, the Thermostat server shall set its UnoccupiedSetback value to
UnoccupiedSetbackMax and shall send a Write Attribute Response command with a Status Code field
enumeration of SUCCESS response.

If the Thermostat client attempts to write UnoccupiedSetback to a value less than UnoccupiedSetbackMin,
the Thermostat server shall set its UnoccupiedSetback value to UnoccupiedSetbackMin and shall send a
Write Attribute Response command with a Status Code field enumeration of SUCCESS response.

###### See

MatterSpecification.v11.Cluster § 4.3.7.40

##### attributes.unoccupiedSetbackMax

> `readonly` **unoccupiedSetbackMax**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum value that the Thermostat server will allow the UnoccupiedSetback
attribute to be configured by a user.

The null value indicates the attribute is unused.

###### See

MatterSpecification.v11.Cluster § 4.3.7.42

##### attributes.unoccupiedSetbackMin

> `readonly` **unoccupiedSetbackMin**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum value that the Thermostat server will allow the UnoccupiedSetback
attribute to be configured by a user.

The null value indicates the attribute is unused.

###### See

MatterSpecification.v11.Cluster § 4.3.7.41

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:981](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L981)

***

### SetbackComponent

> `const` **SetbackComponent**: `object`

A ThermostatCluster supports these elements if it supports feature Setback.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.occupiedSetback

> `readonly` **occupiedSetback**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the amount that the Thermostat server will allow the LocalTemperature Value to
float above the OccupiedCooling setpoint (i.e., OccupiedCooling + OccupiedSetback) or below the
OccupiedHeating setpoint (i.e., OccupiedHeating – OccupiedSetback) before initiating a state change to
bring the temperature back to the user’s desired setpoint. This attribute is sometimes also referred to
as the “span.”

The purpose of this attribute is to allow remote configuration of the span between the desired set

point and the measured temperature to help prevent over-cycling and reduce energy bills, though this may
result in lower comfort on the part of some users.

The null value indicates the attribute is unused.

If the Thermostat client attempts to write OccupiedSetback to a value greater than OccupiedSetbackMax,
the Thermostat server shall set its OccupiedSetback value to OccupiedSetbackMax and shall send a Write
Attribute Response command with a Status Code field enumeration of SUCCESS response.

If the Thermostat client attempts to write OccupiedSetback to a value less than OccupiedSetbackMin, the
Thermostat server shall set its OccupiedSetback value to OccupiedSetbackMin and shall send a Write
Attribute Response command with a Status Code field enumeration of SUCCESS response.

###### See

MatterSpecification.v11.Cluster § 4.3.7.37

##### attributes.occupiedSetbackMax

> `readonly` **occupiedSetbackMax**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum value that the Thermostat server will allow the OccupiedSetback
attribute to be configured by a user.

The null value indicates the attribute is unused.

###### See

MatterSpecification.v11.Cluster § 4.3.7.39

##### attributes.occupiedSetbackMin

> `readonly` **occupiedSetbackMin**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum value that the Thermostat server will allow the OccupiedSetback
attribute to be configured by a user.

The null value indicates the attribute is unused.

###### See

MatterSpecification.v11.Cluster § 4.3.7.38

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:924](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L924)

***

### ThermostatProgrammingOperationMode

> `const` **ThermostatProgrammingOperationMode**: `object`

The value of the Thermostat thermostatProgrammingOperationMode attribute

#### See

MatterSpecification.v11.Cluster § 4.3.7.32

#### Type declaration

##### autoRecovery

> **autoRecovery**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Auto/recovery mode

##### economy

> **economy**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Economy/EnergyStar mode

##### scheduleActive

> **scheduleActive**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Schedule programming mode. This enables any programmed weekly schedule configurations.

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:289](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L289)

***

### ThermostatRunningState

> `const` **ThermostatRunningState**: `object`

The value of the Thermostat thermostatRunningState attribute

#### See

MatterSpecification.v11.Cluster § 4.3.7.33

#### Type declaration

##### cool

> **cool**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Cool State On

##### coolStage2

> **coolStage2**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Cool 2nd Stage State On

##### fan

> **fan**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Fan State On

##### fanStage2

> **fanStage2**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Fan 2nd Stage State On

##### fanStage3

> **fanStage3**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Fan 3rd Stage Stage On

##### heat

> **heat**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Heat State On

##### heatStage2

> **heatStage2**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Heat 2nd Stage State On

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:311](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L311)

***

### TlvGetWeeklyScheduleRequest

> `const` **TlvGetWeeklyScheduleRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Thermostat getWeeklySchedule command

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Type declaration

##### daysToReturn

> **daysToReturn**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### modeToReturn

> **modeToReturn**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L129)

***

### TlvGetWeeklyScheduleResponse

> `const` **TlvGetWeeklyScheduleResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Type declaration

##### dayOfWeekForSequence

> **dayOfWeekForSequence**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### modeForSequence

> **modeForSequence**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### numberOfTransitionsForSequence

> **numberOfTransitionsForSequence**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### transitions

> **transitions**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L144)

***

### TlvSetWeeklyScheduleRequest

> `const` **TlvSetWeeklyScheduleRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Thermostat setWeeklySchedule command

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Type declaration

##### dayOfWeekForSequence

> **dayOfWeekForSequence**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### modeForSequence

> **modeForSequence**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### numberOfTransitionsForSequence

> **numberOfTransitionsForSequence**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### transitions

> **transitions**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L110)

***

### TlvSetpointRaiseLowerRequest

> `const` **TlvSetpointRaiseLowerRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Thermostat setpointRaiseLower command

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Type declaration

##### amount

> **amount**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### mode

> **mode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`SetpointAdjustMode`](enumerations/SetpointAdjustMode.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:543](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L543)

***

### TlvThermostatScheduleTransition

> `const` **TlvThermostatScheduleTransition**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This represents a single transition in a Thermostat schedule

#### See

MatterSpecification.v11.Cluster § 4.3.9.5

#### Type declaration

##### coolSetpoint

> **coolSetpoint**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

##### heatSetpoint

> **heatSetpoint**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field represents the start time of the schedule transition during the associated day. The time will be
represented by a 16 bits unsigned integer to designate the minutes since midnight. For example, 6am will be
represented by 360 minutes since midnight and 11:30pm will be represented by 1410 minutes since midnight.

###### See

MatterSpecification.v11.Cluster § 4.3.9.5.1

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L84)
