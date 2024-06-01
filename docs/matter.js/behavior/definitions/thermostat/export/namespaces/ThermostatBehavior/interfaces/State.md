[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/thermostat/export](../../../README.md) / [ThermostatBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### acCapacity?

> `optional` **acCapacity**: `number`

This attribute indicates capacity of Mini Split AC in terms of the format defined by the
ACCapacityFormat attribute

#### See

MatterSpecification.v11.Cluster § 4.3.7.45

#### Inherited from

`StateType.acCapacity`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1417](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1417)

***

### acCapacityFormat?

> `optional` **acCapacityFormat**: [`BtUh`](../../../../../../../cluster/export/namespaces/Thermostat/enumerations/AcCapacityFormat.md#btuh)

This attribute specifies the format for the ACCapacity attribute.

Table 87. ACCapacity Values

#### See

MatterSpecification.v11.Cluster § 4.3.7.51

#### Inherited from

`StateType.acCapacityFormat`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1491](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1491)

***

### acCoilTemperature?

> `optional` **acCoilTemperature**: `null` \| `number`

This attribute represents the temperature of the AC coil, as measured locally or remotely (over the
network).

#### See

MatterSpecification.v11.Cluster § 4.3.7.50

#### Inherited from

`StateType.acCoilTemperature`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1482](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1482)

***

### acCompressorType?

> `optional` **acCompressorType**: [`AcCompressorType`](../../../../../../../cluster/export/namespaces/Thermostat/enumerations/AcCompressorType.md)

This attribute indicates type of Compressor used within the Mini Split AC.

Table 84. ACCompressorType Values

#### See

MatterSpecification.v11.Cluster § 4.3.7.47

#### Inherited from

`StateType.acCompressorType`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1443](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1443)

***

### acErrorCode?

> `optional` **acErrorCode**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute indicates the type of errors encountered within the Mini Split AC. Error values are
reported with four bytes values. Each bit within the four bytes indicates the unique error.

Table 85. ACErrorCode Values

#### See

MatterSpecification.v11.Cluster § 4.3.7.48

#### Type declaration

##### coilSensorFail

> **coilSensorFail**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Indoor Coil Temperature Sensor Failure

##### compressorFail

> **compressorFail**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Compressor Failure or Refrigerant Leakage

##### fanFail

> **fanFail**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Fan Failure

##### outdoorSensorFail

> **outdoorSensorFail**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Outdoor Temperature Sensor Failure

##### roomSensorFail

> **roomSensorFail**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Room Temperature Sensor Failure

#### Inherited from

`StateType.acErrorCode`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1457](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1457)

***

### acLouverPosition?

> `optional` **acLouverPosition**: [`AcLouverPosition`](../../../../../../../cluster/export/namespaces/Thermostat/enumerations/AcLouverPosition.md)

This attribute indicates the position of Louver on the AC.

Table 86. ACLouverPosition Values

#### See

MatterSpecification.v11.Cluster § 4.3.7.49

#### Inherited from

`StateType.acLouverPosition`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1470](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1470)

***

### acRefrigerantType?

> `optional` **acRefrigerantType**: [`AcRefrigerantType`](../../../../../../../cluster/export/namespaces/Thermostat/enumerations/AcRefrigerantType.md)

This attribute indicates type of refrigerant used within the Mini Split AC.

Table 83. ACRefrigerantType Values

#### See

MatterSpecification.v11.Cluster § 4.3.7.46

#### Inherited from

`StateType.acRefrigerantType`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1430](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1430)

***

### acType?

> `optional` **acType**: [`AcType`](../../../../../../../cluster/export/namespaces/Thermostat/enumerations/AcType.md)

This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how
Cooling and Heating condition is achieved by Mini Split AC.

Table 82. ACType Values

#### See

MatterSpecification.v11.Cluster § 4.3.7.44

#### Inherited from

`StateType.acType`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1405](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1405)

***

### alarmMask?

> `optional` **alarmMask**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute specifies whether each of the alarms listed below is enabled. When the bit number
corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not
corresponding to a code in the table are reserved.

When the Alarms cluster is implemented on a device, and one of the alarm conditions included in this
table occurs, an alarm notification is generated, with the alarm code field set as listed in the table.

Table 76. Alarm Codes

#### See

MatterSpecification.v11.Cluster § 4.3.7.25

#### Type declaration

##### hardwareFailure

> **hardwareFailure**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### initializationFailure

> **initializationFailure**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### selfCalibrationFailure

> **selfCalibrationFailure**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

#### Inherited from

`StateType.alarmMask`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1255](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1255)

***

### controlSequenceOfOperation

> **controlSequenceOfOperation**: [`ControlSequenceOfOperation`](../../../../../../../cluster/export/namespaces/Thermostat/enumerations/ControlSequenceOfOperation.md)

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

#### See

MatterSpecification.v11.Cluster § 4.3.7.23

#### Inherited from

`StateType.controlSequenceOfOperation`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1217)

***

### emergencyHeatDelta?

> `optional` **emergencyHeatDelta**: `number`

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

#### See

MatterSpecification.v11.Cluster § 4.3.7.43

#### Inherited from

`StateType.emergencyHeatDelta`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1391](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1391)

***

### localTemperature

> **localTemperature**: `null` \| `number`

This attribute indicates the current LocalTemperature value, when available. The value may be local, or
remote, depending on the value of the RemoteSensing attribute when supported.

  • If the LTNE feature is not supported:

    ◦ If the temperature measurement is invalid or currently unavailable, the attribute shall report
      null.

    ◦ If the temperature measurement is valid, the attribute shall report that value.

  • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the
    LocalTemperature value. In that case, the LocalTemperature attribute shall always report null.

#### See

MatterSpecification.v11.Cluster § 4.3.7.2

#### Inherited from

`StateType.localTemperature`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1167](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1167)

***

### outdoorTemperature?

> `optional` **outdoorTemperature**: `null` \| `number`

This attribute represents the outdoor temperature, as measured locally or remotely (over the network).

#### See

MatterSpecification.v11.Cluster § 4.3.7.3

#### Inherited from

`StateType.outdoorTemperature`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1174)

***

### remoteSensing?

> `optional` **remoteSensing**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute indicates when the local temperature, outdoor temperature and occupancy are being sensed
by remote networked sensors, rather than internal sensors.

A bit set to 1 indicates remote sensing of the relevant value.

Table 72. RemoteSensing Attribute Bit Values

If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall always
report a value of 0.

If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is present,
the write shall fail and the server shall report a CONSTRAINT_ERROR.

#### See

MatterSpecification.v11.Cluster § 4.3.7.22

#### Type declaration

##### localTemperature

> **localTemperature**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

When set, LocalTemperature Value is derived from a remote node

##### occupancy

> **occupancy**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

When set, Occupancy is derived from a remote node

##### outdoorTemperature

> **outdoorTemperature**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

When set, OutdoorTemperature is derived from a remote node

#### Inherited from

`StateType.remoteSensing`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1192)

***

### setpointChangeAmount?

> `optional` **setpointChangeAmount**: `null` \| `number`

This attribute specifies the delta between the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the
SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement
SetpointChangeSource.

The null value indicates that the previous setpoint was unknown.

#### See

MatterSpecification.v11.Cluster § 4.3.7.35

#### Inherited from

`StateType.setpointChangeAmount`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1353](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1353)

***

### setpointChangeSource?

> `optional` **setpointChangeSource**: [`SetpointChangeSource`](../../../../../../../cluster/export/namespaces/Thermostat/enumerations/SetpointChangeSource.md)

This attribute specifies the source of the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint).

This attribute enables service providers to determine whether changes to setpoints were initiated due to
occupant comfort, scheduled programming or some other source (e.g., electric utility or other service
provider). Because automation services may initiate frequent setpoint changes, this attribute clearly
differentiates the source of setpoint changes made at the thermostat.

Table 81. SetpointChangeSource Values

#### See

MatterSpecification.v11.Cluster § 4.3.7.34

#### Inherited from

`StateType.setpointChangeSource`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1337](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1337)

***

### setpointChangeSourceTimestamp?

> `optional` **setpointChangeSourceTimestamp**: `number`

This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was
recorded.

#### See

MatterSpecification.v11.Cluster § 4.3.7.36

#### Inherited from

`StateType.setpointChangeSourceTimestamp`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1361](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1361)

***

### systemMode

> **systemMode**: [`SystemMode`](../../../../../../../cluster/export/namespaces/Thermostat/enumerations/SystemMode.md)

This attribute specifies the current operating mode of the thermostat, It shall be set to one of the
following values, as limited by the ControlSequenceOfOperation Attribute.

NOTE It is not mandatory to support all values.

Table 75. Interpretation of Heat, Cool and Auto SystemMode Values

#### See

MatterSpecification.v11.Cluster § 4.3.7.24

#### Inherited from

`StateType.systemMode`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1237)

***

### temperatureSetpointHold?

> `optional` **temperatureSetpointHold**: [`TemperatureSetpointHold`](../../../../../../../cluster/export/namespaces/Thermostat/enumerations/TemperatureSetpointHold.md)

This attribute specifies the temperature hold status on the thermostat. If hold status is on, the
thermostat SHOULD maintain the temperature set point for the current mode until a system mode change. If
hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal
scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also
implement the TemperatureSetpointHoldDuration attribute.

Table 78. TemperatureSetpointHold Values

#### See

MatterSpecification.v11.Cluster § 4.3.7.30

#### Inherited from

`StateType.temperatureSetpointHold`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1268](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1268)

***

### temperatureSetpointHoldDuration?

> `optional` **temperatureSetpointHoldDuration**: `null` \| `number`

This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support
hold for a specified duration SHOULD implement this attribute. The null value indicates the field is
unused. All other values are reserved.

#### See

MatterSpecification.v11.Cluster § 4.3.7.31

#### Inherited from

`StateType.temperatureSetpointHoldDuration`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1281](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1281)

***

### thermostatProgrammingOperationMode?

> `optional` **thermostatProgrammingOperationMode**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

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

#### See

MatterSpecification.v11.Cluster § 4.3.7.32

#### Type declaration

##### autoRecovery

> **autoRecovery**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Auto/recovery mode

##### economy

> **economy**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Economy/EnergyStar mode

##### scheduleActive

> **scheduleActive**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Schedule programming mode. This enables any programmed weekly schedule configurations.

#### Inherited from

`StateType.thermostatProgrammingOperationMode`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1307](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1307)

***

### thermostatRunningState?

> `optional` **thermostatRunningState**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute represents the current relay state of the heat, cool, and fan relays.

Table 80. HVAC Relay State Values

Unimplemented outputs shall be treated as if they were Off.

#### See

MatterSpecification.v11.Cluster § 4.3.7.33

#### Type declaration

##### cool

> **cool**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Cool State On

##### coolStage2

> **coolStage2**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Cool 2nd Stage State On

##### fan

> **fan**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Fan State On

##### fanStage2

> **fanStage2**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Fan 2nd Stage State On

##### fanStage3

> **fanStage3**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Fan 3rd Stage Stage On

##### heat

> **heat**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Heat State On

##### heatStage2

> **heatStage2**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Heat 2nd Stage State On

#### Inherited from

`StateType.thermostatRunningState`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1322](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1322)
