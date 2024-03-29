[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/temperature-measurement/export](../modules/behavior_definitions_temperature_measurement_export.md) / [TemperatureMeasurementBehavior](../modules/behavior_definitions_temperature_measurement_export.TemperatureMeasurementBehavior.md) / State

# Interface: State

[behavior/definitions/temperature-measurement/export](../modules/behavior_definitions_temperature_measurement_export.md).[TemperatureMeasurementBehavior](../modules/behavior_definitions_temperature_measurement_export.TemperatureMeasurementBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_temperature_measurement_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [maxMeasuredValue](behavior_definitions_temperature_measurement_export.TemperatureMeasurementBehavior.State.md#maxmeasuredvalue)
- [measuredValue](behavior_definitions_temperature_measurement_export.TemperatureMeasurementBehavior.State.md#measuredvalue)
- [minMeasuredValue](behavior_definitions_temperature_measurement_export.TemperatureMeasurementBehavior.State.md#minmeasuredvalue)
- [tolerance](behavior_definitions_temperature_measurement_export.TemperatureMeasurementBehavior.State.md#tolerance)

## Properties

### maxMeasuredValue

• **maxMeasuredValue**: ``null`` \| `number`

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that is capable of being
measured. See Measured Value for more details.

The null value indicates that the value is not available.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.3.4.3

#### Inherited from

StateType.maxMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:57](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L57)

___

### measuredValue

• **measuredValue**: ``null`` \| `number`

Represents the temperature in degrees Celsius as follows:

MeasuredValue = 100 x temperature [°C]

Where -273.15°C ≤ temperature ≤ 327.67°C, with a resolution of 0.01°C. The null value indicates that the
temperature is unknown.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.3.4.1

#### Inherited from

StateType.measuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:37](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L37)

___

### minMeasuredValue

• **minMeasuredValue**: ``null`` \| `number`

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that is capable of being
measured. See Measured Value for more details.

The null value indicates that the value is not available.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.3.4.2

#### Inherited from

StateType.minMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:47](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L47)

___

### tolerance

• `Optional` **tolerance**: `number`

See Measured Value.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.3.4.4

#### Inherited from

StateType.tolerance

#### Defined in

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:64](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L64)
