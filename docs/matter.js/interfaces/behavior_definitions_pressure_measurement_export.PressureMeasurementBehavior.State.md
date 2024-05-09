[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/pressure-measurement/export](../modules/behavior_definitions_pressure_measurement_export.md) / [PressureMeasurementBehavior](../modules/behavior_definitions_pressure_measurement_export.PressureMeasurementBehavior.md) / State

# Interface: State

[behavior/definitions/pressure-measurement/export](../modules/behavior_definitions_pressure_measurement_export.md).[PressureMeasurementBehavior](../modules/behavior_definitions_pressure_measurement_export.PressureMeasurementBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_pressure_measurement_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [maxMeasuredValue](behavior_definitions_pressure_measurement_export.PressureMeasurementBehavior.State.md#maxmeasuredvalue)
- [measuredValue](behavior_definitions_pressure_measurement_export.PressureMeasurementBehavior.State.md#measuredvalue)
- [minMeasuredValue](behavior_definitions_pressure_measurement_export.PressureMeasurementBehavior.State.md#minmeasuredvalue)
- [tolerance](behavior_definitions_pressure_measurement_export.PressureMeasurementBehavior.State.md#tolerance)

## Properties

### maxMeasuredValue

• **maxMeasuredValue**: ``null`` \| `number`

This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

**`See`**

MatterSpecification.v11.Cluster § 2.4.5.3

#### Inherited from

StateType.maxMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L132)

___

### measuredValue

• **measuredValue**: ``null`` \| `number`

This attribute represents the pressure in kPa as follows:

MeasuredValue = 10 x Pressure [kPa]

The null value indicates that the value is not available.

**`See`**

MatterSpecification.v11.Cluster § 2.4.5.1

#### Inherited from

StateType.measuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L112)

___

### minMeasuredValue

• **minMeasuredValue**: ``null`` \| `number`

This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

**`See`**

MatterSpecification.v11.Cluster § 2.4.5.2

#### Inherited from

StateType.minMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L122)

___

### tolerance

• `Optional` **tolerance**: `number`

This attribute indicates the magnitude of the possible error that is associated with ScaledValue.

See Measured Value.

**`See`**

MatterSpecification.v11.Cluster § 2.4.5.4

#### Inherited from

StateType.tolerance

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L141)
