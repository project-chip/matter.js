[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / PumpConfigurationAndControl

# Namespace: PumpConfigurationAndControl

## Index

### Enumerations

- [ControlMode](enumerations/ControlMode.md)
- [Feature](enumerations/Feature.md)
- [OperationMode](enumerations/OperationMode.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)

## Variables

### AutomaticComponent

> `const` **AutomaticComponent**: `object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature Automatic.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxCompPressure

> `readonly` **maxCompPressure**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum compensated pressure the pump can achieve when it is working with
the ControlMode attribute set to ProportionalPressure.

Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.7

##### attributes.maxConstFlow

> `readonly` **maxConstFlow**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum flow the pump can achieve when it is working with the ControlMode
attribute set to ConstantFlow.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.11

##### attributes.maxConstPressure

> `readonly` **maxConstPressure**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum pressure the pump can achieve when it is working with the
ControlMode attribute set to ConstantPressure.

Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.5

##### attributes.maxConstSpeed

> `readonly` **maxConstSpeed**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum speed the pump can achieve when it is working with the ControlMode
attribute set to ConstantSpeed.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.9

##### attributes.maxConstTemp

> `readonly` **maxConstTemp**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum temperature the pump can maintain in the system when it is working
with the ControlMode attribute set to ConstantTemperature.

MaxConstTemp shall be greater than or equal to MinConstTemp

Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.13

##### attributes.minCompPressure

> `readonly` **minCompPressure**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum compensated pressure the pump can achieve when it is working with
the ControlMode attribute set to ProportionalPressure.

Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.6

##### attributes.minConstFlow

> `readonly` **minConstFlow**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum flow the pump can achieve when it is working with the Con

trolMode attribute set to ConstantFlow.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.10

##### attributes.minConstPressure

> `readonly` **minConstPressure**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum pressure the pump can achieve when it is working with the
ControlMode attribute set to ConstantPressure.

Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.4

##### attributes.minConstSpeed

> `readonly` **minConstSpeed**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum speed the pump can achieve when it is working with the ControlMode
attribute set to ConstantSpeed.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.8

##### attributes.minConstTemp

> `readonly` **minConstTemp**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum temperature the pump can maintain in the system when it is working
with the ControlMode attribute set to ConstantTemperature.

Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.12

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:245](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L245)

***

### Base

> `const` **Base**: `object`

These elements and properties are present in all PumpConfigurationAndControl clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.capacity

> `readonly` **capacity**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual capacity of the pump as a percentage of the effective maximum
setpoint value. It is updated dynamically as the speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, values
of capacity less than zero have no physical meaning.

###### See

MatterSpecification.v11.Cluster § 4.2.7.17

##### attributes.controlMode

> `readonly` **controlMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`ControlMode`](enumerations/ControlMode.md), `any`\>

This attribute specifies the control mode of the pump as defined in ControlModeEnum.

See the OperationMode attribute for a detailed description of the operation and control of the

pump.

ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing is vendor-specific.

In the case a device does not support a specific control mode, the write interaction to this attribute
with an unsupported control mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.23

##### attributes.effectiveControlMode

> `readonly` **effectiveControlMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`ControlMode`](enumerations/ControlMode.md), `any`\>

This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum.

This attribute contains the control mode that currently applies to the pump. It will have the value of
the ControlMode attribute, unless one of the following points are true:

  • The ControlMode attribute is set to Automatic. In this case, the value of the EffectiveControlMode
    shall match the behavior of the pump.

  • A remote sensor is used as the sensor for regulation of the pump. In this case, EffectiveControlMode
    will display ConstantPressure, ConstantFlow or ConstantTemperature if the remote sensor is a
    pressure sensor, a flow sensor or a temperature sensor respectively, regardless of the value of the
    ControlMode attribute.

In case the ControlMode attribute is not included on the device and no remote sensors are connected, the
value of the EffectiveControlMode shall match the vendor-specific behavior of the pump.

See OperationMode and ControlMode attributes for detailed a description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.16

##### attributes.effectiveOperationMode

> `readonly` **effectiveOperationMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`OperationMode`](enumerations/OperationMode.md), `any`\>

This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.

The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless one
of the following points are true:

  • The pump is physically set to run with the local settings

  • The LocalOverride bit in the PumpStatus attribute is set,

See OperationMode and ControlMode attributes for a detailed description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.15

##### attributes.lifetimeEnergyConsumed

> `readonly` **lifetimeEnergyConsumed**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of
the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy
consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over”
and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance.

Valid range is 0 kWh to 4,294,967,294 kWh.

This attribute shall be null if the value is unknown.

###### See

MatterSpecification.v11.Cluster § 4.2.7.21

##### attributes.lifetimeRunningHours

> `readonly` **lifetimeRunningHours**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated number of hours that the pump has been powered and the motor
has been running. It is updated dynamically as it increases. It is preserved over power cycles of the
pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If

the value is not available, this attribute will indicate the null value. Valid range is 0 to 16,777,214
hrs.

###### See

MatterSpecification.v11.Cluster § 4.2.7.19

##### attributes.maxFlow

> `readonly` **maxFlow**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.3

##### attributes.maxPressure

> `readonly` **maxPressure**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.1

##### attributes.maxSpeed

> `readonly` **maxSpeed**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.2

##### attributes.operationMode

> `readonly` **operationMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`OperationMode`](enumerations/OperationMode.md), `any`\>

This attribute specifies the operation mode of the pump as defined in OperationModeEnum.

The actual operating mode of the pump is a result of the setting of the attributes OperationMode,
ControlMode and the optional connection of a remote sensor. The operation and control is prioritized as
shown in the scheme below:

Priority Scheme of Pump Operation and Control

If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is
operated.

If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote sensor
decides the control mode of the pump. A connected remote pressure sensor will make the pump run in
control mode Constant pressure and vice versa for flow and temperature type sensors. This is regardless
of the setting of the ControlMode attribute.

If this attribute is Normal and no remote sensor is connected, the control mode of the pump is decided
by the ControlMode attribute.

OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing the value of this attribute is vendor-specific.

In the case a device does not support a specific operation mode, the write interaction to this attribute
with an unsupported operation mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.22

##### attributes.power

> `readonly` **power**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute
is updated dynamically as the power consumption of the pump changes.

This attribute is read only. If the value is not available (the measurement of power consumption is not
done in the pump), this attribute will indicate the null value.

Valid range is 0 to 16,777,214 Watts.

###### See

MatterSpecification.v11.Cluster § 4.2.7.20

##### attributes.pumpStatus

> `readonly` **pumpStatus**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where
a pump controller function is active, the corresponding bit shall be set to 1. Where a pump controller
function is not active, the corresponding bit shall be set to 0.

###### See

MatterSpecification.v11.Cluster § 4.2.7.14

##### attributes.speed

> `readonly` **speed**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the
speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 to 65.534 RPM.

###### See

MatterSpecification.v11.Cluster § 4.2.7.18

##### events

> `readonly` **events**: `object`

##### events.airDetection

> `readonly` **airDetection**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.dryRunning

> `readonly` **dryRunning**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicFatalFailure

> `readonly` **electronicFatalFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicNonFatalFailure

> `readonly` **electronicNonFatalFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicTemperatureHigh

> `readonly` **electronicTemperatureHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.generalFault

> `readonly` **generalFault**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.leakage

> `readonly` **leakage**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.motorTemperatureHigh

> `readonly` **motorTemperatureHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.powerMissingPhase

> `readonly` **powerMissingPhase**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.pumpBlocked

> `readonly` **pumpBlocked**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.pumpMotorFatalFailure

> `readonly` **pumpMotorFatalFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.sensorFailure

> `readonly` **sensorFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.supplyVoltageHigh

> `readonly` **supplyVoltageHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.supplyVoltageLow

> `readonly` **supplyVoltageLow**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.systemPressureHigh

> `readonly` **systemPressureHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.systemPressureLow

> `readonly` **systemPressureLow**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.turbineOperation

> `readonly` **turbineOperation**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which PumpConfigurationAndControlCluster elements matter.js activates for specific
feature combinations.

##### features

> `readonly` **features**: `object`

##### features.automatic

> `readonly` **automatic**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Automatic

Supports operating in automatic mode

##### features.compensatedPressure

> `readonly` **compensatedPressure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

CompensatedPressure

Supports operating in compensated pressure mode

##### features.constantFlow

> `readonly` **constantFlow**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantFlow

Supports operating in constant flow mode

##### features.constantPressure

> `readonly` **constantPressure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantPressure

Supports operating in constant pressure mode

##### features.constantSpeed

> `readonly` **constantSpeed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantSpeed

Supports operating in constant speed mode

##### features.constantTemperature

> `readonly` **constantTemperature**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantTemperature

Supports operating in constant temperature mode

##### features.localOperation

> `readonly` **localOperation**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LocalOperation

Supports operating using local settings

##### id

> `readonly` **id**: `512` = `0x200`

##### name

> `readonly` **name**: `"PumpConfigurationAndControl"` = `"PumpConfigurationAndControl"`

##### revision

> `readonly` **revision**: `4` = `4`

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:536](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L536)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:942](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L942)

***

### ClusterInstance

> `const` **ClusterInstance**: [`ExtensibleOnly`](../MutableCluster/interfaces/ExtensibleOnly.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.capacity

> `readonly` **capacity**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual capacity of the pump as a percentage of the effective maximum
setpoint value. It is updated dynamically as the speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, values
of capacity less than zero have no physical meaning.

###### See

MatterSpecification.v11.Cluster § 4.2.7.17

##### attributes.controlMode

> `readonly` **controlMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`ControlMode`](enumerations/ControlMode.md), `any`\>

This attribute specifies the control mode of the pump as defined in ControlModeEnum.

See the OperationMode attribute for a detailed description of the operation and control of the

pump.

ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing is vendor-specific.

In the case a device does not support a specific control mode, the write interaction to this attribute
with an unsupported control mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.23

##### attributes.effectiveControlMode

> `readonly` **effectiveControlMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`ControlMode`](enumerations/ControlMode.md), `any`\>

This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum.

This attribute contains the control mode that currently applies to the pump. It will have the value of
the ControlMode attribute, unless one of the following points are true:

  • The ControlMode attribute is set to Automatic. In this case, the value of the EffectiveControlMode
    shall match the behavior of the pump.

  • A remote sensor is used as the sensor for regulation of the pump. In this case, EffectiveControlMode
    will display ConstantPressure, ConstantFlow or ConstantTemperature if the remote sensor is a
    pressure sensor, a flow sensor or a temperature sensor respectively, regardless of the value of the
    ControlMode attribute.

In case the ControlMode attribute is not included on the device and no remote sensors are connected, the
value of the EffectiveControlMode shall match the vendor-specific behavior of the pump.

See OperationMode and ControlMode attributes for detailed a description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.16

##### attributes.effectiveOperationMode

> `readonly` **effectiveOperationMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`OperationMode`](enumerations/OperationMode.md), `any`\>

This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.

The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless one
of the following points are true:

  • The pump is physically set to run with the local settings

  • The LocalOverride bit in the PumpStatus attribute is set,

See OperationMode and ControlMode attributes for a detailed description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.15

##### attributes.lifetimeEnergyConsumed

> `readonly` **lifetimeEnergyConsumed**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of
the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy
consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over”
and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance.

Valid range is 0 kWh to 4,294,967,294 kWh.

This attribute shall be null if the value is unknown.

###### See

MatterSpecification.v11.Cluster § 4.2.7.21

##### attributes.lifetimeRunningHours

> `readonly` **lifetimeRunningHours**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated number of hours that the pump has been powered and the motor
has been running. It is updated dynamically as it increases. It is preserved over power cycles of the
pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If

the value is not available, this attribute will indicate the null value. Valid range is 0 to 16,777,214
hrs.

###### See

MatterSpecification.v11.Cluster § 4.2.7.19

##### attributes.maxFlow

> `readonly` **maxFlow**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.3

##### attributes.maxPressure

> `readonly` **maxPressure**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.1

##### attributes.maxSpeed

> `readonly` **maxSpeed**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.2

##### attributes.operationMode

> `readonly` **operationMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`OperationMode`](enumerations/OperationMode.md), `any`\>

This attribute specifies the operation mode of the pump as defined in OperationModeEnum.

The actual operating mode of the pump is a result of the setting of the attributes OperationMode,
ControlMode and the optional connection of a remote sensor. The operation and control is prioritized as
shown in the scheme below:

Priority Scheme of Pump Operation and Control

If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is
operated.

If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote sensor
decides the control mode of the pump. A connected remote pressure sensor will make the pump run in
control mode Constant pressure and vice versa for flow and temperature type sensors. This is regardless
of the setting of the ControlMode attribute.

If this attribute is Normal and no remote sensor is connected, the control mode of the pump is decided
by the ControlMode attribute.

OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing the value of this attribute is vendor-specific.

In the case a device does not support a specific operation mode, the write interaction to this attribute
with an unsupported operation mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.22

##### attributes.power

> `readonly` **power**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute
is updated dynamically as the power consumption of the pump changes.

This attribute is read only. If the value is not available (the measurement of power consumption is not
done in the pump), this attribute will indicate the null value.

Valid range is 0 to 16,777,214 Watts.

###### See

MatterSpecification.v11.Cluster § 4.2.7.20

##### attributes.pumpStatus

> `readonly` **pumpStatus**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where
a pump controller function is active, the corresponding bit shall be set to 1. Where a pump controller
function is not active, the corresponding bit shall be set to 0.

###### See

MatterSpecification.v11.Cluster § 4.2.7.14

##### attributes.speed

> `readonly` **speed**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the
speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 to 65.534 RPM.

###### See

MatterSpecification.v11.Cluster § 4.2.7.18

##### events

> `readonly` **events**: `object`

##### events.airDetection

> `readonly` **airDetection**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.dryRunning

> `readonly` **dryRunning**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicFatalFailure

> `readonly` **electronicFatalFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicNonFatalFailure

> `readonly` **electronicNonFatalFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicTemperatureHigh

> `readonly` **electronicTemperatureHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.generalFault

> `readonly` **generalFault**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.leakage

> `readonly` **leakage**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.motorTemperatureHigh

> `readonly` **motorTemperatureHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.powerMissingPhase

> `readonly` **powerMissingPhase**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.pumpBlocked

> `readonly` **pumpBlocked**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.pumpMotorFatalFailure

> `readonly` **pumpMotorFatalFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.sensorFailure

> `readonly` **sensorFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.supplyVoltageHigh

> `readonly` **supplyVoltageHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.supplyVoltageLow

> `readonly` **supplyVoltageLow**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.systemPressureHigh

> `readonly` **systemPressureHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.systemPressureLow

> `readonly` **systemPressureLow**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.turbineOperation

> `readonly` **turbineOperation**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which PumpConfigurationAndControlCluster elements matter.js activates for specific
feature combinations.

##### features

> `readonly` **features**: `object`

##### features.automatic

> `readonly` **automatic**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Automatic

Supports operating in automatic mode

##### features.compensatedPressure

> `readonly` **compensatedPressure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

CompensatedPressure

Supports operating in compensated pressure mode

##### features.constantFlow

> `readonly` **constantFlow**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantFlow

Supports operating in constant flow mode

##### features.constantPressure

> `readonly` **constantPressure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantPressure

Supports operating in constant pressure mode

##### features.constantSpeed

> `readonly` **constantSpeed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantSpeed

Supports operating in constant speed mode

##### features.constantTemperature

> `readonly` **constantTemperature**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantTemperature

Supports operating in constant temperature mode

##### features.localOperation

> `readonly` **localOperation**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LocalOperation

Supports operating using local settings

##### id

> `readonly` **id**: `512` = `0x200`

##### name

> `readonly` **name**: `"PumpConfigurationAndControl"` = `"PumpConfigurationAndControl"`

##### revision

> `readonly` **revision**: `4` = `4`

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:927](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L927)

***

### CompensatedPressureComponent

> `const` **CompensatedPressureComponent**: `object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature CompensatedPressure.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxCompPressure

> `readonly` **maxCompPressure**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum compensated pressure the pump can achieve when it is working with
the ControlMode attribute set to ProportionalPressure.

Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.7

##### attributes.minCompPressure

> `readonly` **minCompPressure**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum compensated pressure the pump can achieve when it is working with
the ControlMode attribute set to ProportionalPressure.

Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.6

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:363](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L363)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:1014](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L1014)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.capacity

> `readonly` **capacity**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual capacity of the pump as a percentage of the effective maximum
setpoint value. It is updated dynamically as the speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, values
of capacity less than zero have no physical meaning.

###### See

MatterSpecification.v11.Cluster § 4.2.7.17

##### attributes.controlMode

> `readonly` **controlMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`ControlMode`](enumerations/ControlMode.md), `any`\>

This attribute specifies the control mode of the pump as defined in ControlModeEnum.

See the OperationMode attribute for a detailed description of the operation and control of the

pump.

ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing is vendor-specific.

In the case a device does not support a specific control mode, the write interaction to this attribute
with an unsupported control mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.23

##### attributes.effectiveControlMode

> `readonly` **effectiveControlMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`ControlMode`](enumerations/ControlMode.md), `any`\>

This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum.

This attribute contains the control mode that currently applies to the pump. It will have the value of
the ControlMode attribute, unless one of the following points are true:

  • The ControlMode attribute is set to Automatic. In this case, the value of the EffectiveControlMode
    shall match the behavior of the pump.

  • A remote sensor is used as the sensor for regulation of the pump. In this case, EffectiveControlMode
    will display ConstantPressure, ConstantFlow or ConstantTemperature if the remote sensor is a
    pressure sensor, a flow sensor or a temperature sensor respectively, regardless of the value of the
    ControlMode attribute.

In case the ControlMode attribute is not included on the device and no remote sensors are connected, the
value of the EffectiveControlMode shall match the vendor-specific behavior of the pump.

See OperationMode and ControlMode attributes for detailed a description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.16

##### attributes.effectiveOperationMode

> `readonly` **effectiveOperationMode**: [`Attribute`](../../interfaces/Attribute.md)\<[`OperationMode`](enumerations/OperationMode.md), `any`\>

This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.

The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless one
of the following points are true:

  • The pump is physically set to run with the local settings

  • The LocalOverride bit in the PumpStatus attribute is set,

See OperationMode and ControlMode attributes for a detailed description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.15

##### attributes.lifetimeEnergyConsumed

> `readonly` **lifetimeEnergyConsumed**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of
the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy
consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over”
and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance.

Valid range is 0 kWh to 4,294,967,294 kWh.

This attribute shall be null if the value is unknown.

###### See

MatterSpecification.v11.Cluster § 4.2.7.21

##### attributes.lifetimeRunningHours

> `readonly` **lifetimeRunningHours**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated number of hours that the pump has been powered and the motor
has been running. It is updated dynamically as it increases. It is preserved over power cycles of the
pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If

the value is not available, this attribute will indicate the null value. Valid range is 0 to 16,777,214
hrs.

###### See

MatterSpecification.v11.Cluster § 4.2.7.19

##### attributes.maxCompPressure

> `readonly` **maxCompPressure**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxConstFlow

> `readonly` **maxConstFlow**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxConstPressure

> `readonly` **maxConstPressure**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxConstSpeed

> `readonly` **maxConstSpeed**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxConstTemp

> `readonly` **maxConstTemp**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxFlow

> `readonly` **maxFlow**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.3

##### attributes.maxPressure

> `readonly` **maxPressure**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.1

##### attributes.maxSpeed

> `readonly` **maxSpeed**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.2

##### attributes.minCompPressure

> `readonly` **minCompPressure**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minConstFlow

> `readonly` **minConstFlow**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minConstPressure

> `readonly` **minConstPressure**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minConstSpeed

> `readonly` **minConstSpeed**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minConstTemp

> `readonly` **minConstTemp**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.operationMode

> `readonly` **operationMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`OperationMode`](enumerations/OperationMode.md), `any`\>

This attribute specifies the operation mode of the pump as defined in OperationModeEnum.

The actual operating mode of the pump is a result of the setting of the attributes OperationMode,
ControlMode and the optional connection of a remote sensor. The operation and control is prioritized as
shown in the scheme below:

Priority Scheme of Pump Operation and Control

If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is
operated.

If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote sensor
decides the control mode of the pump. A connected remote pressure sensor will make the pump run in
control mode Constant pressure and vice versa for flow and temperature type sensors. This is regardless
of the setting of the ControlMode attribute.

If this attribute is Normal and no remote sensor is connected, the control mode of the pump is decided
by the ControlMode attribute.

OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing the value of this attribute is vendor-specific.

In the case a device does not support a specific operation mode, the write interaction to this attribute
with an unsupported operation mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.22

##### attributes.power

> `readonly` **power**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute
is updated dynamically as the power consumption of the pump changes.

This attribute is read only. If the value is not available (the measurement of power consumption is not
done in the pump), this attribute will indicate the null value.

Valid range is 0 to 16,777,214 Watts.

###### See

MatterSpecification.v11.Cluster § 4.2.7.20

##### attributes.pumpStatus

> `readonly` **pumpStatus**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where
a pump controller function is active, the corresponding bit shall be set to 1. Where a pump controller
function is not active, the corresponding bit shall be set to 0.

###### See

MatterSpecification.v11.Cluster § 4.2.7.14

##### attributes.speed

> `readonly` **speed**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the
speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 to 65.534 RPM.

###### See

MatterSpecification.v11.Cluster § 4.2.7.18

##### events

> `readonly` **events**: `object` = `Base.events`

##### events.airDetection

> `readonly` **airDetection**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.dryRunning

> `readonly` **dryRunning**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicFatalFailure

> `readonly` **electronicFatalFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicNonFatalFailure

> `readonly` **electronicNonFatalFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicTemperatureHigh

> `readonly` **electronicTemperatureHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.generalFault

> `readonly` **generalFault**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.leakage

> `readonly` **leakage**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.motorTemperatureHigh

> `readonly` **motorTemperatureHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.powerMissingPhase

> `readonly` **powerMissingPhase**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.pumpBlocked

> `readonly` **pumpBlocked**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.pumpMotorFatalFailure

> `readonly` **pumpMotorFatalFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.sensorFailure

> `readonly` **sensorFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.supplyVoltageHigh

> `readonly` **supplyVoltageHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.supplyVoltageLow

> `readonly` **supplyVoltageLow**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.systemPressureHigh

> `readonly` **systemPressureHigh**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.systemPressureLow

> `readonly` **systemPressureLow**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.turbineOperation

> `readonly` **turbineOperation**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### features

> `readonly` **features**: `object` = `Base.features`

##### features.automatic

> `readonly` **automatic**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Automatic

Supports operating in automatic mode

##### features.compensatedPressure

> `readonly` **compensatedPressure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

CompensatedPressure

Supports operating in compensated pressure mode

##### features.constantFlow

> `readonly` **constantFlow**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantFlow

Supports operating in constant flow mode

##### features.constantPressure

> `readonly` **constantPressure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantPressure

Supports operating in constant pressure mode

##### features.constantSpeed

> `readonly` **constantSpeed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantSpeed

Supports operating in constant speed mode

##### features.constantTemperature

> `readonly` **constantTemperature**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ConstantTemperature

Supports operating in constant temperature mode

##### features.localOperation

> `readonly` **localOperation**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LocalOperation

Supports operating using local settings

##### id

> `readonly` **id**: `512` = `Base.id`

##### name

> `readonly` **name**: `"PumpConfigurationAndControl"` = `Base.name`

##### revision

> `readonly` **revision**: `4` = `Base.revision`

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:955](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L955)

***

### ConstantFlowComponent

> `const` **ConstantFlowComponent**: `object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantFlow.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxConstFlow

> `readonly` **maxConstFlow**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum flow the pump can achieve when it is working with the ControlMode
attribute set to ConstantFlow.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.11

##### attributes.minConstFlow

> `readonly` **minConstFlow**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum flow the pump can achieve when it is working with the Con

trolMode attribute set to ConstantFlow.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.10

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:419](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L419)

***

### ConstantPressureComponent

> `const` **ConstantPressureComponent**: `object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantPressure.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxConstPressure

> `readonly` **maxConstPressure**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum pressure the pump can achieve when it is working with the
ControlMode attribute set to ConstantPressure.

Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.5

##### attributes.minConstPressure

> `readonly` **minConstPressure**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum pressure the pump can achieve when it is working with the
ControlMode attribute set to ConstantPressure.

Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.4

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L216)

***

### ConstantSpeedComponent

> `const` **ConstantSpeedComponent**: `object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantSpeed.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxConstSpeed

> `readonly` **maxConstSpeed**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum speed the pump can achieve when it is working with the ControlMode
attribute set to ConstantSpeed.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.9

##### attributes.minConstSpeed

> `readonly` **minConstSpeed**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum speed the pump can achieve when it is working with the ControlMode
attribute set to ConstantSpeed.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.8

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:392](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L392)

***

### ConstantTemperatureComponent

> `const` **ConstantTemperatureComponent**: `object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantTemperature.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxConstTemp

> `readonly` **maxConstTemp**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum temperature the pump can maintain in the system when it is working
with the ControlMode attribute set to ConstantTemperature.

MaxConstTemp shall be greater than or equal to MinConstTemp

Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.13

##### attributes.minConstTemp

> `readonly` **minConstTemp**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the minimum temperature the pump can maintain in the system when it is working
with the ControlMode attribute set to ConstantTemperature.

Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.12

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:449](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L449)

***

### PumpStatusBitmap

> `const` **PumpStatusBitmap**: `object`

#### See

MatterSpecification.v11.Cluster § 4.2.6.1

#### Type declaration

##### deviceFault

> **deviceFault**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

A fault related to the system or pump device is detected.

If this bit is set, it may correspond to an event in the range 2-16, see Events.

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.1

##### localOverride

> **localOverride**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Device control is overridden by hardware, such as an external STOP button or via a local HMI.

While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing OperationMode
shall generate a FAILURE error status until LocalOverride is cleared on the physical device. When
LocalOverride is cleared, the device shall return to the operation mode set in OperationMode.

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.3

##### remoteFlow

> **remoteFlow**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

A remote flow sensor is used as the sensor for the regulation of the pump.

If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is interpreted as a
percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]).

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.5

##### remotePressure

> **remotePressure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

A remote pressure sensor is used as the sensor for the regulation of the pump.

If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is interpreted as
a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]).

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.4

##### remoteTemperature

> **remoteTemperature**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

A remote temperature sensor is used as the sensor for the regulation of the pump.

If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is
interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue])

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.6

##### running

> **running**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Pump is currently running

##### speedHigh

> **speedHigh**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Setpoint is too high to achieve.

##### speedLow

> **speedLow**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Setpoint is too low to achieve.

##### supplyFault

> **supplyFault**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

A fault related to the supply to the pump is detected.

If this bit is set, it may correspond to an event in the range 0-1 or 13, see Events.

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.2

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L32)
