[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/thermostat/export](../modules/behavior_definitions_thermostat_export.md) / [ThermostatBehavior](../modules/behavior_definitions_thermostat_export.ThermostatBehavior.md) / State

# Interface: State

[behavior/definitions/thermostat/export](../modules/behavior_definitions_thermostat_export.md).[ThermostatBehavior](../modules/behavior_definitions_thermostat_export.ThermostatBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_thermostat_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [acCapacity](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#accapacity)
- [acCapacityFormat](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#accapacityformat)
- [acCoilTemperature](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#accoiltemperature)
- [acCompressorType](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#accompressortype)
- [acErrorCode](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#acerrorcode)
- [acLouverPosition](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#aclouverposition)
- [acRefrigerantType](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#acrefrigeranttype)
- [acType](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#actype)
- [alarmMask](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#alarmmask)
- [controlSequenceOfOperation](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#controlsequenceofoperation)
- [emergencyHeatDelta](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#emergencyheatdelta)
- [localTemperature](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#localtemperature)
- [outdoorTemperature](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#outdoortemperature)
- [remoteSensing](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#remotesensing)
- [setpointChangeAmount](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#setpointchangeamount)
- [setpointChangeSource](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#setpointchangesource)
- [setpointChangeSourceTimestamp](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#setpointchangesourcetimestamp)
- [systemMode](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#systemmode)
- [temperatureSetpointHold](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#temperaturesetpointhold)
- [temperatureSetpointHoldDuration](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#temperaturesetpointholdduration)
- [thermostatProgrammingOperationMode](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#thermostatprogrammingoperationmode)
- [thermostatRunningState](behavior_definitions_thermostat_export.ThermostatBehavior.State.md#thermostatrunningstate)

## Properties

### acCapacity

• `Optional` **acCapacity**: `number`

This attribute indicates capacity of Mini Split AC in terms of the format defined by the
ACCapacityFormat attribute

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.45

#### Inherited from

StateType.acCapacity

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1417](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1417)

___

### acCapacityFormat

• `Optional` **acCapacityFormat**: [`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh)

This attribute specifies the format for the ACCapacity attribute.

Table 87. ACCapacity Values

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.51

#### Inherited from

StateType.acCapacityFormat

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1491](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1491)

___

### acCoilTemperature

• `Optional` **acCoilTemperature**: ``null`` \| `number`

This attribute represents the temperature of the AC coil, as measured locally or remotely (over the
network).

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.50

#### Inherited from

StateType.acCoilTemperature

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1482](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1482)

___

### acCompressorType

• `Optional` **acCompressorType**: [`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md)

This attribute indicates type of Compressor used within the Mini Split AC.

Table 84. ACCompressorType Values

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.47

#### Inherited from

StateType.acCompressorType

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1443](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1443)

___

### acErrorCode

• `Optional` **acErrorCode**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

This attribute indicates the type of errors encountered within the Mini Split AC. Error values are
reported with four bytes values. Each bit within the four bytes indicates the unique error.

Table 85. ACErrorCode Values

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.48

#### Inherited from

StateType.acErrorCode

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1457](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1457)

___

### acLouverPosition

• `Optional` **acLouverPosition**: [`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md)

This attribute indicates the position of Louver on the AC.

Table 86. ACLouverPosition Values

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.49

#### Inherited from

StateType.acLouverPosition

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1470](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1470)

___

### acRefrigerantType

• `Optional` **acRefrigerantType**: [`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md)

This attribute indicates type of refrigerant used within the Mini Split AC.

Table 83. ACRefrigerantType Values

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.46

#### Inherited from

StateType.acRefrigerantType

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1430](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1430)

___

### acType

• `Optional` **acType**: [`AcType`](../enums/cluster_export.Thermostat.AcType.md)

This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how
Cooling and Heating condition is achieved by Mini Split AC.

Table 82. ACType Values

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.44

#### Inherited from

StateType.acType

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1405](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1405)

___

### alarmMask

• `Optional` **alarmMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

This attribute specifies whether each of the alarms listed below is enabled. When the bit number
corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not
corresponding to a code in the table are reserved.

When the Alarms cluster is implemented on a device, and one of the alarm conditions included in this
table occurs, an alarm notification is generated, with the alarm code field set as listed in the table.

Table 76. Alarm Codes

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.25

#### Inherited from

StateType.alarmMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1255)

___

### controlSequenceOfOperation

• **controlSequenceOfOperation**: [`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md)

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

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.23

#### Inherited from

StateType.controlSequenceOfOperation

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1217)

___

### emergencyHeatDelta

• `Optional` **emergencyHeatDelta**: `number`

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

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.43

#### Inherited from

StateType.emergencyHeatDelta

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1391](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1391)

___

### localTemperature

• **localTemperature**: ``null`` \| `number`

This attribute indicates the current LocalTemperature value, when available. The value may be local, or
remote, depending on the value of the RemoteSensing attribute when supported.

  • If the LTNE feature is not supported:

    ◦ If the temperature measurement is invalid or currently unavailable, the attribute shall report
      null.

    ◦ If the temperature measurement is valid, the attribute shall report that value.

  • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the
    LocalTemperature value. In that case, the LocalTemperature attribute shall always report null.

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.2

#### Inherited from

StateType.localTemperature

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1167)

___

### outdoorTemperature

• `Optional` **outdoorTemperature**: ``null`` \| `number`

This attribute represents the outdoor temperature, as measured locally or remotely (over the network).

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.3

#### Inherited from

StateType.outdoorTemperature

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1174)

___

### remoteSensing

• `Optional` **remoteSensing**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

This attribute indicates when the local temperature, outdoor temperature and occupancy are being sensed
by remote networked sensors, rather than internal sensors.

A bit set to 1 indicates remote sensing of the relevant value.

Table 72. RemoteSensing Attribute Bit Values

If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall always
report a value of 0.

If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is present,
the write shall fail and the server shall report a CONSTRAINT_ERROR.

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.22

#### Inherited from

StateType.remoteSensing

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1192)

___

### setpointChangeAmount

• `Optional` **setpointChangeAmount**: ``null`` \| `number`

This attribute specifies the delta between the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the
SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement
SetpointChangeSource.

The null value indicates that the previous setpoint was unknown.

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.35

#### Inherited from

StateType.setpointChangeAmount

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1353](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1353)

___

### setpointChangeSource

• `Optional` **setpointChangeSource**: [`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md)

This attribute specifies the source of the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint).

This attribute enables service providers to determine whether changes to setpoints were initiated due to
occupant comfort, scheduled programming or some other source (e.g., electric utility or other service
provider). Because automation services may initiate frequent setpoint changes, this attribute clearly
differentiates the source of setpoint changes made at the thermostat.

Table 81. SetpointChangeSource Values

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.34

#### Inherited from

StateType.setpointChangeSource

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1337](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1337)

___

### setpointChangeSourceTimestamp

• `Optional` **setpointChangeSourceTimestamp**: `number`

This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was
recorded.

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.36

#### Inherited from

StateType.setpointChangeSourceTimestamp

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1361](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1361)

___

### systemMode

• **systemMode**: [`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md)

This attribute specifies the current operating mode of the thermostat, It shall be set to one of the
following values, as limited by the ControlSequenceOfOperation Attribute.

NOTE It is not mandatory to support all values.

Table 75. Interpretation of Heat, Cool and Auto SystemMode Values

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.24

#### Inherited from

StateType.systemMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1237)

___

### temperatureSetpointHold

• `Optional` **temperatureSetpointHold**: [`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md)

This attribute specifies the temperature hold status on the thermostat. If hold status is on, the
thermostat SHOULD maintain the temperature set point for the current mode until a system mode change. If
hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal
scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also
implement the TemperatureSetpointHoldDuration attribute.

Table 78. TemperatureSetpointHold Values

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.30

#### Inherited from

StateType.temperatureSetpointHold

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1268](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1268)

___

### temperatureSetpointHoldDuration

• `Optional` **temperatureSetpointHoldDuration**: ``null`` \| `number`

This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support
hold for a specified duration SHOULD implement this attribute. The null value indicates the field is
unused. All other values are reserved.

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.31

#### Inherited from

StateType.temperatureSetpointHoldDuration

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1281](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1281)

___

### thermostatProgrammingOperationMode

• `Optional` **thermostatProgrammingOperationMode**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `economy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

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

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.32

#### Inherited from

StateType.thermostatProgrammingOperationMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1307](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1307)

___

### thermostatRunningState

• `Optional` **thermostatRunningState**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fan`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heat`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

This attribute represents the current relay state of the heat, cool, and fan relays.

Table 80. HVAC Relay State Values

Unimplemented outputs shall be treated as if they were Off.

**`See`**

MatterSpecification.v11.Cluster § 4.3.7.33

#### Inherited from

StateType.thermostatRunningState

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:1322](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L1322)
