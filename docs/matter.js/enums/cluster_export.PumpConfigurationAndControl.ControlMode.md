[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PumpConfigurationAndControl](../modules/cluster_export.PumpConfigurationAndControl.md) / ControlMode

# Enumeration: ControlMode

[cluster/export](../modules/cluster_export.md).[PumpConfigurationAndControl](../modules/cluster_export.PumpConfigurationAndControl.md).ControlMode

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.3

## Table of contents

### Enumeration Members

- [Automatic](cluster_export.PumpConfigurationAndControl.ControlMode.md#automatic)
- [ConstantFlow](cluster_export.PumpConfigurationAndControl.ControlMode.md#constantflow)
- [ConstantPressure](cluster_export.PumpConfigurationAndControl.ControlMode.md#constantpressure)
- [ConstantSpeed](cluster_export.PumpConfigurationAndControl.ControlMode.md#constantspeed)
- [ConstantTemperature](cluster_export.PumpConfigurationAndControl.ControlMode.md#constanttemperature)
- [ProportionalPressure](cluster_export.PumpConfigurationAndControl.ControlMode.md#proportionalpressure)

## Enumeration Members

### Automatic

• **Automatic** = ``7``

The operation of the pump is automatically optimized to provide the most suitable performance with respect
to comfort and energy savings.

This behavior is manufacturer defined. The pump can be stopped by setting the setpoint of the level control
cluster to 0, or by using the On/Off cluster. If the pump is started (at any setpoint), the speed of the
pump is entirely determined by the pump.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.3.6

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:219](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L219)

___

### ConstantFlow

• **ConstantFlow** = ``3``

The pump will regulate its speed to maintain a constant flow through the pump.

The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case
of the internal flow sensor, this will be the range derived from the [MinConstFlow – MaxConstFlow]
attributes. In case of a remote flow sensor, this will be the range derived from the [MinMeasuredValue –
MaxMeasuredValue] attributes of the remote flow sensor.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.3.4

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:195](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L195)

___

### ConstantPressure

• **ConstantPressure** = ``1``

The pump will regulate its speed to maintain a constant differential pressure over its flanges.

The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case
of the internal pressure sensor, this will be the range derived from the [MinConstPressure –
MaxConstPressure] attributes. In case of a remote pressure sensor, this will be the range derived from the
[MinMeasuredValue – MaxMeasuredValue] attributes of the remote pressure sensor.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.3.2

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:172](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L172)

___

### ConstantSpeed

• **ConstantSpeed** = ``0``

The pump is running at a constant speed.

The setpoint is interpreted as a percentage of the range derived from the [MinConstSpeed – MaxConstSpeed]
attributes.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.3.1

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:160](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L160)

___

### ConstantTemperature

• **ConstantTemperature** = ``5``

The pump will regulate its speed to maintain a constant temperature.

The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case
of the internal temperature sensor, this will be the range derived from the [MinConstTemp – MaxConstTemp]
attributes. In case of a remote temperature sensor, this will be the range derived from the
[MinMeasuredValue – MaxMeasuredValue] attributes of the remote temperature sensor.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.3.5

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:207](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L207)

___

### ProportionalPressure

• **ProportionalPressure** = ``2``

The pump will regulate its speed to maintain a constant differential pressure over its flanges.

The setpoint is interpreted as a percentage of the range derived of the [MinCompPressure – MaxCompPressure]
attributes. The internal setpoint will be lowered (compensated) dependent on the flow in the pump (lower
flow ⇒ lower internal setpoint).

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.3.3

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:183](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L183)
