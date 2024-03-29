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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.4.5.3

#### Inherited from

StateType.maxMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:133](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L133)

___

### measuredValue

• **measuredValue**: ``null`` \| `number`

This attribute represents the pressure in kPa as follows:

MeasuredValue = 10 x Pressure [kPa]

The null value indicates that the value is not available.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.4.5.1

#### Inherited from

StateType.measuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:113](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L113)

___

### minMeasuredValue

• **minMeasuredValue**: ``null`` \| `number`

This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.4.5.2

#### Inherited from

StateType.minMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:123](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L123)

___

### tolerance

• `Optional` **tolerance**: `number`

This attribute indicates the magnitude of the possible error that is associated with ScaledValue.

See Measured Value.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.4.5.4

#### Inherited from

StateType.tolerance

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:142](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L142)
