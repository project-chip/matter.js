[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Thermostat](../README.md) / Complete

# Interface: Complete

This cluster supports all Thermostat features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`CompleteInstance`](../README.md#completeinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### absMaxCoolSetpointLimit

> `readonly` **absMaxCoolSetpointLimit**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### absMaxHeatSetpointLimit

> `readonly` **absMaxHeatSetpointLimit**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### absMinCoolSetpointLimit

> `readonly` **absMinCoolSetpointLimit**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### absMinHeatSetpointLimit

> `readonly` **absMinHeatSetpointLimit**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### acCapacity

> `readonly` **acCapacity**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute indicates capacity of Mini Split AC in terms of the format defined by the
ACCapacityFormat attribute

###### See

MatterSpecification.v11.Cluster § 4.3.7.45

##### acCapacityFormat

> `readonly` **acCapacityFormat**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`BtUh`](../enumerations/AcCapacityFormat.md#btuh), `any`\>

This attribute specifies the format for the ACCapacity attribute.

Table 87. ACCapacity Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.51

##### acCoilTemperature

> `readonly` **acCoilTemperature**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute represents the temperature of the AC coil, as measured locally or remotely (over the
network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.50

##### acCompressorType

> `readonly` **acCompressorType**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`AcCompressorType`](../enumerations/AcCompressorType.md), `any`\>

This attribute indicates type of Compressor used within the Mini Split AC.

Table 84. ACCompressorType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.47

##### acErrorCode

> `readonly` **acErrorCode**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute indicates the type of errors encountered within the Mini Split AC. Error values are
reported with four bytes values. Each bit within the four bytes indicates the unique error.

Table 85. ACErrorCode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.48

##### acLouverPosition

> `readonly` **acLouverPosition**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enumerations/AcLouverPosition.md), `any`\>

This attribute indicates the position of Louver on the AC.

Table 86. ACLouverPosition Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.49

##### acRefrigerantType

> `readonly` **acRefrigerantType**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enumerations/AcRefrigerantType.md), `any`\>

This attribute indicates type of refrigerant used within the Mini Split AC.

Table 83. ACRefrigerantType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.46

##### acType

> `readonly` **acType**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`AcType`](../enumerations/AcType.md), `any`\>

This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how
Cooling and Heating condition is achieved by Mini Split AC.

Table 82. ACType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.44

##### alarmMask

> `readonly` **alarmMask**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies whether each of the alarms listed below is enabled. When the bit number
corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not
corresponding to a code in the table are reserved.

When the Alarms cluster is implemented on a device, and one of the alarm conditions included in this
table occurs, an alarm notification is generated, with the alarm code field set as listed in the table.

Table 76. Alarm Codes

###### See

MatterSpecification.v11.Cluster § 4.3.7.25

##### controlSequenceOfOperation

> `readonly` **controlSequenceOfOperation**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enumerations/ControlSequenceOfOperation.md), `any`\>

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

##### emergencyHeatDelta

> `readonly` **emergencyHeatDelta**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

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

##### localTemperature

> `readonly` **localTemperature**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

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

##### localTemperatureCalibration

> `readonly` **localTemperatureCalibration**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: []

##### maxCoolSetpointLimit

> `readonly` **maxCoolSetpointLimit**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### maxHeatSetpointLimit

> `readonly` **maxHeatSetpointLimit**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### minCoolSetpointLimit

> `readonly` **minCoolSetpointLimit**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### minHeatSetpointLimit

> `readonly` **minHeatSetpointLimit**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### minSetpointDeadBand

> `readonly` **minSetpointDeadBand**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### numberOfDailyTransitions

> `readonly` **numberOfDailyTransitions**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### numberOfWeeklyTransitions

> `readonly` **numberOfWeeklyTransitions**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### occupancy

> `readonly` **occupancy**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### occupiedCoolingSetpoint

> `readonly` **occupiedCoolingSetpoint**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### occupiedHeatingSetpoint

> `readonly` **occupiedHeatingSetpoint**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### occupiedSetback

> `readonly` **occupiedSetback**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### occupiedSetbackMax

> `readonly` **occupiedSetbackMax**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### occupiedSetbackMin

> `readonly` **occupiedSetbackMin**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### outdoorTemperature

> `readonly` **outdoorTemperature**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute represents the outdoor temperature, as measured locally or remotely (over the network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.3

##### piCoolingDemand

> `readonly` **piCoolingDemand**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### piHeatingDemand

> `readonly` **piHeatingDemand**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### remoteSensing

> `readonly` **remoteSensing**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

##### setpointChangeAmount

> `readonly` **setpointChangeAmount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the delta between the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the
SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement
SetpointChangeSource.

The null value indicates that the previous setpoint was unknown.

###### See

MatterSpecification.v11.Cluster § 4.3.7.35

##### setpointChangeSource

> `readonly` **setpointChangeSource**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`SetpointChangeSource`](../enumerations/SetpointChangeSource.md), `any`\>

This attribute specifies the source of the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint).

This attribute enables service providers to determine whether changes to setpoints were initiated due to
occupant comfort, scheduled programming or some other source (e.g., electric utility or other service
provider). Because automation services may initiate frequent setpoint changes, this attribute clearly
differentiates the source of setpoint changes made at the thermostat.

Table 81. SetpointChangeSource Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.34

##### setpointChangeSourceTimestamp

> `readonly` **setpointChangeSourceTimestamp**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was
recorded.

###### See

MatterSpecification.v11.Cluster § 4.3.7.36

##### startOfWeek

> `readonly` **startOfWeek**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`StartOfWeek`](../enumerations/StartOfWeek.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### systemMode

> `readonly` **systemMode**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`SystemMode`](../enumerations/SystemMode.md), `any`\>

This attribute specifies the current operating mode of the thermostat, It shall be set to one of the
following values, as limited by the ControlSequenceOfOperation Attribute.

NOTE It is not mandatory to support all values.

Table 75. Interpretation of Heat, Cool and Auto SystemMode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.24

##### temperatureSetpointHold

> `readonly` **temperatureSetpointHold**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enumerations/TemperatureSetpointHold.md), `any`\>

This attribute specifies the temperature hold status on the thermostat. If hold status is on, the
thermostat SHOULD maintain the temperature set point for the current mode until a system mode change. If
hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal
scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also
implement the TemperatureSetpointHoldDuration attribute.

Table 78. TemperatureSetpointHold Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.30

##### temperatureSetpointHoldDuration

> `readonly` **temperatureSetpointHoldDuration**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support
hold for a specified duration SHOULD implement this attribute. The null value indicates the field is
unused. All other values are reserved.

###### See

MatterSpecification.v11.Cluster § 4.3.7.31

##### thermostatProgrammingOperationMode

> `readonly` **thermostatProgrammingOperationMode**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

##### thermostatRunningMode

> `readonly` **thermostatRunningMode**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`ThermostatRunningMode`](../enumerations/ThermostatRunningMode.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### thermostatRunningState

> `readonly` **thermostatRunningState**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute represents the current relay state of the heat, cool, and fan relays.

Table 80. HVAC Relay State Values

Unimplemented outputs shall be treated as if they were Off.

###### See

MatterSpecification.v11.Cluster § 4.3.7.33

##### unoccupiedCoolingSetpoint

> `readonly` **unoccupiedCoolingSetpoint**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### unoccupiedHeatingSetpoint

> `readonly` **unoccupiedHeatingSetpoint**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### unoccupiedSetback

> `readonly` **unoccupiedSetback**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### unoccupiedSetbackMax

> `readonly` **unoccupiedSetbackMax**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### unoccupiedSetbackMin

> `readonly` **unoccupiedSetbackMin**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

#### Inherited from

`Identity.attributes`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `object`

#### clearWeeklySchedule

> `readonly` **clearWeeklySchedule**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

#### getRelayStatusLog

> `readonly` **getRelayStatusLog**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.3.8

#### getWeeklySchedule

> `readonly` **getWeeklySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

#### setWeeklySchedule

> `readonly` **setWeeklySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

#### setpointRaiseLower

> `readonly` **setpointRaiseLower**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.3.8

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### Inherited from

`Identity.events`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### autoMode

> `readonly` **autoMode**: [`BitFlag`](../../../../schema/README.md#bitflag)

AutoMode

Supports a System Mode of Auto

#### cooling

> `readonly` **cooling**: [`BitFlag`](../../../../schema/README.md#bitflag)

Cooling

Thermostat is capable of managing a cooling device

#### heating

> `readonly` **heating**: [`BitFlag`](../../../../schema/README.md#bitflag)

Heating

Thermostat is capable of managing a heating device

#### localTemperatureNotExposed

> `readonly` **localTemperatureNotExposed**: [`BitFlag`](../../../../schema/README.md#bitflag)

LocalTemperatureNotExposed

Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute

#### occupancy

> `readonly` **occupancy**: [`BitFlag`](../../../../schema/README.md#bitflag)

Occupancy

Supports Occupied and Unoccupied setpoints

#### scheduleConfiguration

> `readonly` **scheduleConfiguration**: [`BitFlag`](../../../../schema/README.md#bitflag)

ScheduleConfiguration

Supports remote configuration of a weekly schedule of setpoint transitions

#### setback

> `readonly` **setback**: [`BitFlag`](../../../../schema/README.md#bitflag)

Setback

Supports configurable setback (or span)

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`513`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"Thermostat"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `6`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: `object`

##### attributes.absMaxCoolSetpointLimit

> `readonly` **absMaxCoolSetpointLimit**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.absMaxHeatSetpointLimit

> `readonly` **absMaxHeatSetpointLimit**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.absMinCoolSetpointLimit

> `readonly` **absMinCoolSetpointLimit**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.absMinHeatSetpointLimit

> `readonly` **absMinHeatSetpointLimit**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.acCapacity

> `readonly` **acCapacity**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

This attribute indicates capacity of Mini Split AC in terms of the format defined by the
ACCapacityFormat attribute

###### See

MatterSpecification.v11.Cluster § 4.3.7.45

##### attributes.acCapacityFormat

> `readonly` **acCapacityFormat**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`BtUh`](../enumerations/AcCapacityFormat.md#btuh), `any`\>

This attribute specifies the format for the ACCapacity attribute.

Table 87. ACCapacity Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.51

##### attributes.acCoilTemperature

> `readonly` **acCoilTemperature**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute represents the temperature of the AC coil, as measured locally or remotely (over the
network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.50

##### attributes.acCompressorType

> `readonly` **acCompressorType**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`AcCompressorType`](../enumerations/AcCompressorType.md), `any`\>

This attribute indicates type of Compressor used within the Mini Split AC.

Table 84. ACCompressorType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.47

##### attributes.acErrorCode

> `readonly` **acErrorCode**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute indicates the type of errors encountered within the Mini Split AC. Error values are
reported with four bytes values. Each bit within the four bytes indicates the unique error.

Table 85. ACErrorCode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.48

##### attributes.acLouverPosition

> `readonly` **acLouverPosition**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enumerations/AcLouverPosition.md), `any`\>

This attribute indicates the position of Louver on the AC.

Table 86. ACLouverPosition Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.49

##### attributes.acRefrigerantType

> `readonly` **acRefrigerantType**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enumerations/AcRefrigerantType.md), `any`\>

This attribute indicates type of refrigerant used within the Mini Split AC.

Table 83. ACRefrigerantType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.46

##### attributes.acType

> `readonly` **acType**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`AcType`](../enumerations/AcType.md), `any`\>

This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how
Cooling and Heating condition is achieved by Mini Split AC.

Table 82. ACType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.44

##### attributes.alarmMask

> `readonly` **alarmMask**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies whether each of the alarms listed below is enabled. When the bit number
corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not
corresponding to a code in the table are reserved.

When the Alarms cluster is implemented on a device, and one of the alarm conditions included in this
table occurs, an alarm notification is generated, with the alarm code field set as listed in the table.

Table 76. Alarm Codes

###### See

MatterSpecification.v11.Cluster § 4.3.7.25

##### attributes.controlSequenceOfOperation

> `readonly` **controlSequenceOfOperation**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enumerations/ControlSequenceOfOperation.md), `any`\>

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

> `readonly` **emergencyHeatDelta**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

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

> `readonly` **localTemperature**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

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

> `readonly` **localTemperatureCalibration**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: []

##### attributes.maxCoolSetpointLimit

> `readonly` **maxCoolSetpointLimit**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxHeatSetpointLimit

> `readonly` **maxHeatSetpointLimit**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minCoolSetpointLimit

> `readonly` **minCoolSetpointLimit**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minHeatSetpointLimit

> `readonly` **minHeatSetpointLimit**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minSetpointDeadBand

> `readonly` **minSetpointDeadBand**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.numberOfDailyTransitions

> `readonly` **numberOfDailyTransitions**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.numberOfWeeklyTransitions

> `readonly` **numberOfWeeklyTransitions**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.occupancy

> `readonly` **occupancy**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.occupiedCoolingSetpoint

> `readonly` **occupiedCoolingSetpoint**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.occupiedHeatingSetpoint

> `readonly` **occupiedHeatingSetpoint**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.occupiedSetback

> `readonly` **occupiedSetback**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.occupiedSetbackMax

> `readonly` **occupiedSetbackMax**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.occupiedSetbackMin

> `readonly` **occupiedSetbackMin**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.outdoorTemperature

> `readonly` **outdoorTemperature**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute represents the outdoor temperature, as measured locally or remotely (over the network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.3

##### attributes.piCoolingDemand

> `readonly` **piCoolingDemand**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.piHeatingDemand

> `readonly` **piHeatingDemand**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.remoteSensing

> `readonly` **remoteSensing**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

> `readonly` **setpointChangeAmount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the delta between the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the
SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement
SetpointChangeSource.

The null value indicates that the previous setpoint was unknown.

###### See

MatterSpecification.v11.Cluster § 4.3.7.35

##### attributes.setpointChangeSource

> `readonly` **setpointChangeSource**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`SetpointChangeSource`](../enumerations/SetpointChangeSource.md), `any`\>

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

> `readonly` **setpointChangeSourceTimestamp**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was
recorded.

###### See

MatterSpecification.v11.Cluster § 4.3.7.36

##### attributes.startOfWeek

> `readonly` **startOfWeek**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`StartOfWeek`](../enumerations/StartOfWeek.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.systemMode

> `readonly` **systemMode**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`SystemMode`](../enumerations/SystemMode.md), `any`\>

This attribute specifies the current operating mode of the thermostat, It shall be set to one of the
following values, as limited by the ControlSequenceOfOperation Attribute.

NOTE It is not mandatory to support all values.

Table 75. Interpretation of Heat, Cool and Auto SystemMode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.24

##### attributes.temperatureSetpointHold

> `readonly` **temperatureSetpointHold**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enumerations/TemperatureSetpointHold.md), `any`\>

This attribute specifies the temperature hold status on the thermostat. If hold status is on, the
thermostat SHOULD maintain the temperature set point for the current mode until a system mode change. If
hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal
scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also
implement the TemperatureSetpointHoldDuration attribute.

Table 78. TemperatureSetpointHold Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.30

##### attributes.temperatureSetpointHoldDuration

> `readonly` **temperatureSetpointHoldDuration**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support
hold for a specified duration SHOULD implement this attribute. The null value indicates the field is
unused. All other values are reserved.

###### See

MatterSpecification.v11.Cluster § 4.3.7.31

##### attributes.thermostatProgrammingOperationMode

> `readonly` **thermostatProgrammingOperationMode**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

> `readonly` **thermostatRunningMode**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`ThermostatRunningMode`](../enumerations/ThermostatRunningMode.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.thermostatRunningState

> `readonly` **thermostatRunningState**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute represents the current relay state of the heat, cool, and fan relays.

Table 80. HVAC Relay State Values

Unimplemented outputs shall be treated as if they were Off.

###### See

MatterSpecification.v11.Cluster § 4.3.7.33

##### attributes.unoccupiedCoolingSetpoint

> `readonly` **unoccupiedCoolingSetpoint**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.unoccupiedHeatingSetpoint

> `readonly` **unoccupiedHeatingSetpoint**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.unoccupiedSetback

> `readonly` **unoccupiedSetback**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.unoccupiedSetbackMax

> `readonly` **unoccupiedSetbackMax**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.unoccupiedSetbackMin

> `readonly` **unoccupiedSetbackMin**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands

> `readonly` **commands**: `object`

##### commands.clearWeeklySchedule

> `readonly` **clearWeeklySchedule**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands.getRelayStatusLog

> `readonly` **getRelayStatusLog**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.8

##### commands.getWeeklySchedule

> `readonly` **getWeeklySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands.setWeeklySchedule

> `readonly` **setWeeklySchedule**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands.setpointRaiseLower

> `readonly` **setpointRaiseLower**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.3.8

##### features

> `readonly` **features**: `object`

##### features.autoMode

> `readonly` **autoMode**: [`BitFlag`](../../../../schema/README.md#bitflag)

AutoMode

Supports a System Mode of Auto

##### features.cooling

> `readonly` **cooling**: [`BitFlag`](../../../../schema/README.md#bitflag)

Cooling

Thermostat is capable of managing a cooling device

##### features.heating

> `readonly` **heating**: [`BitFlag`](../../../../schema/README.md#bitflag)

Heating

Thermostat is capable of managing a heating device

##### features.localTemperatureNotExposed

> `readonly` **localTemperatureNotExposed**: [`BitFlag`](../../../../schema/README.md#bitflag)

LocalTemperatureNotExposed

Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute

##### features.occupancy

> `readonly` **occupancy**: [`BitFlag`](../../../../schema/README.md#bitflag)

Occupancy

Supports Occupied and Unoccupied setpoints

##### features.scheduleConfiguration

> `readonly` **scheduleConfiguration**: [`BitFlag`](../../../../schema/README.md#bitflag)

ScheduleConfiguration

Supports remote configuration of a weekly schedule of setpoint transitions

##### features.setback

> `readonly` **setback**: [`BitFlag`](../../../../schema/README.md#bitflag)

Setback

Supports configurable setback (or span)

##### id

> `readonly` **id**: `513`

##### name

> `readonly` **name**: `"Thermostat"`

##### revision

> `readonly` **revision**: `6`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
