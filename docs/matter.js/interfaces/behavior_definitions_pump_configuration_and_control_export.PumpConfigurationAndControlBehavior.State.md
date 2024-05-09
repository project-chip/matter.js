[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/pump-configuration-and-control/export](../modules/behavior_definitions_pump_configuration_and_control_export.md) / [PumpConfigurationAndControlBehavior](../modules/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.md) / State

# Interface: State

[behavior/definitions/pump-configuration-and-control/export](../modules/behavior_definitions_pump_configuration_and_control_export.md).[PumpConfigurationAndControlBehavior](../modules/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_pump_configuration_and_control_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [capacity](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#capacity)
- [controlMode](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#controlmode)
- [effectiveControlMode](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#effectivecontrolmode)
- [effectiveOperationMode](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#effectiveoperationmode)
- [lifetimeEnergyConsumed](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#lifetimeenergyconsumed)
- [lifetimeRunningHours](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#lifetimerunninghours)
- [maxFlow](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#maxflow)
- [maxPressure](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#maxpressure)
- [maxSpeed](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#maxspeed)
- [operationMode](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#operationmode)
- [power](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#power)
- [pumpStatus](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#pumpstatus)
- [speed](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior.State.md#speed)

## Properties

### capacity

• **capacity**: ``null`` \| `number`

This attribute specifies the actual capacity of the pump as a percentage of the effective maximum
setpoint value. It is updated dynamically as the speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, values
of capacity less than zero have no physical meaning.

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.17

#### Inherited from

StateType.capacity

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:687](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L687)

___

### controlMode

• `Optional` **controlMode**: [`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md)

This attribute specifies the control mode of the pump as defined in ControlModeEnum.

See the OperationMode attribute for a detailed description of the operation and control of the

pump.

ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing is vendor-specific.

In the case a device does not support a specific control mode, the write interaction to this attribute
with an unsupported control mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.23

#### Inherited from

StateType.controlMode

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:804](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L804)

___

### effectiveControlMode

• **effectiveControlMode**: [`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md)

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

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.16

#### Inherited from

StateType.effectiveControlMode

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:673](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L673)

___

### effectiveOperationMode

• **effectiveOperationMode**: [`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md)

This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.

The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless one
of the following points are true:

  • The pump is physically set to run with the local settings

  • The LocalOverride bit in the PumpStatus attribute is set,

See OperationMode and ControlMode attributes for a detailed description of the operation and control of
the pump.

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.15

#### Inherited from

StateType.effectiveOperationMode

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:649](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L649)

___

### lifetimeEnergyConsumed

• `Optional` **lifetimeEnergyConsumed**: ``null`` \| `number`

This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of
the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy
consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over”
and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance.

Valid range is 0 kWh to 4,294,967,294 kWh.

This attribute shall be null if the value is unknown.

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.21

#### Inherited from

StateType.lifetimeEnergyConsumed

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:747](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L747)

___

### lifetimeRunningHours

• `Optional` **lifetimeRunningHours**: ``null`` \| `number`

This attribute specifies the accumulated number of hours that the pump has been powered and the motor
has been running. It is updated dynamically as it increases. It is preserved over power cycles of the
pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If

the value is not available, this attribute will indicate the null value. Valid range is 0 to 16,777,214
hrs.

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.19

#### Inherited from

StateType.lifetimeRunningHours

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:714](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L714)

___

### maxFlow

• **maxFlow**: ``null`` \| `number`

This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.3

#### Inherited from

StateType.maxFlow

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:623](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L623)

___

### maxPressure

• **maxPressure**: ``null`` \| `number`

This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.1

#### Inherited from

StateType.maxPressure

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:602](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L602)

___

### maxSpeed

• **maxSpeed**: ``null`` \| `number`

This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.2

#### Inherited from

StateType.maxSpeed

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:612](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L612)

___

### operationMode

• **operationMode**: [`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md)

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

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.22

#### Inherited from

StateType.operationMode

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:782](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L782)

___

### power

• `Optional` **power**: ``null`` \| `number`

This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute
is updated dynamically as the power consumption of the pump changes.

This attribute is read only. If the value is not available (the measurement of power consumption is not
done in the pump), this attribute will indicate the null value.

Valid range is 0 to 16,777,214 Watts.

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.20

#### Inherited from

StateType.power

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:731](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L731)

___

### pumpStatus

• `Optional` **pumpStatus**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `running`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where
a pump controller function is active, the corresponding bit shall be set to 1. Where a pump controller
function is not active, the corresponding bit shall be set to 0.

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.14

#### Inherited from

StateType.pumpStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:632](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L632)

___

### speed

• `Optional` **speed**: ``null`` \| `number`

This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the
speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 to 65.534 RPM.

**`See`**

MatterSpecification.v11.Cluster § 4.2.7.18

#### Inherited from

StateType.speed

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:700](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L700)
