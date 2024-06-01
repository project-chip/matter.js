[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [PumpConfigurationAndControl](../README.md) / ControlMode

# Enumeration: ControlMode

## See

MatterSpecification.v11.Cluster § 4.2.6.3

## Enumeration Members

### Automatic

> **Automatic**: `7`

The operation of the pump is automatically optimized to provide the most suitable performance with respect
to comfort and energy savings.

This behavior is manufacturer defined. The pump can be stopped by setting the setpoint of the level control
cluster to 0, or by using the On/Off cluster. If the pump is started (at any setpoint), the speed of the
pump is entirely determined by the pump.

#### See

MatterSpecification.v11.Cluster § 4.2.6.3.6

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:210](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L210)

***

### ConstantFlow

> **ConstantFlow**: `3`

The pump will regulate its speed to maintain a constant flow through the pump.

The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case
of the internal flow sensor, this will be the range derived from the [MinConstFlow – MaxConstFlow]
attributes. In case of a remote flow sensor, this will be the range derived from the [MinMeasuredValue –
MaxMeasuredValue] attributes of the remote flow sensor.

#### See

MatterSpecification.v11.Cluster § 4.2.6.3.4

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:186](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L186)

***

### ConstantPressure

> **ConstantPressure**: `1`

The pump will regulate its speed to maintain a constant differential pressure over its flanges.

The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case
of the internal pressure sensor, this will be the range derived from the [MinConstPressure –
MaxConstPressure] attributes. In case of a remote pressure sensor, this will be the range derived from the
[MinMeasuredValue – MaxMeasuredValue] attributes of the remote pressure sensor.

#### See

MatterSpecification.v11.Cluster § 4.2.6.3.2

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:163](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L163)

***

### ConstantSpeed

> **ConstantSpeed**: `0`

The pump is running at a constant speed.

The setpoint is interpreted as a percentage of the range derived from the [MinConstSpeed – MaxConstSpeed]
attributes.

#### See

MatterSpecification.v11.Cluster § 4.2.6.3.1

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L151)

***

### ConstantTemperature

> **ConstantTemperature**: `5`

The pump will regulate its speed to maintain a constant temperature.

The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case
of the internal temperature sensor, this will be the range derived from the [MinConstTemp – MaxConstTemp]
attributes. In case of a remote temperature sensor, this will be the range derived from the
[MinMeasuredValue – MaxMeasuredValue] attributes of the remote temperature sensor.

#### See

MatterSpecification.v11.Cluster § 4.2.6.3.5

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L198)

***

### ProportionalPressure

> **ProportionalPressure**: `2`

The pump will regulate its speed to maintain a constant differential pressure over its flanges.

The setpoint is interpreted as a percentage of the range derived of the [MinCompPressure – MaxCompPressure]
attributes. The internal setpoint will be lowered (compensated) dependent on the flow in the pump (lower
flow ⇒ lower internal setpoint).

#### See

MatterSpecification.v11.Cluster § 4.2.6.3.3

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L174)
