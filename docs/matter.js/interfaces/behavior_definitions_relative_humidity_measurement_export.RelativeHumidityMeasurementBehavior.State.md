[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/relative-humidity-measurement/export](../modules/behavior_definitions_relative_humidity_measurement_export.md) / [RelativeHumidityMeasurementBehavior](../modules/behavior_definitions_relative_humidity_measurement_export.RelativeHumidityMeasurementBehavior.md) / State

# Interface: State

[behavior/definitions/relative-humidity-measurement/export](../modules/behavior_definitions_relative_humidity_measurement_export.md).[RelativeHumidityMeasurementBehavior](../modules/behavior_definitions_relative_humidity_measurement_export.RelativeHumidityMeasurementBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_relative_humidity_measurement_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [maxMeasuredValue](behavior_definitions_relative_humidity_measurement_export.RelativeHumidityMeasurementBehavior.State.md#maxmeasuredvalue)
- [measuredValue](behavior_definitions_relative_humidity_measurement_export.RelativeHumidityMeasurementBehavior.State.md#measuredvalue)
- [minMeasuredValue](behavior_definitions_relative_humidity_measurement_export.RelativeHumidityMeasurementBehavior.State.md#minmeasuredvalue)
- [tolerance](behavior_definitions_relative_humidity_measurement_export.RelativeHumidityMeasurementBehavior.State.md#tolerance)

## Properties

### maxMeasuredValue

• **maxMeasuredValue**: ``null`` \| `number`

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

**`See`**

MatterSpecification.v11.Cluster § 2.6.4.3

#### Inherited from

StateType.maxMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/RelativeHumidityMeasurementCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/RelativeHumidityMeasurementCluster.ts#L59)

___

### measuredValue

• **measuredValue**: ``null`` \| `number`

MeasuredValue represents the water content in % as follows:

MeasuredValue = 100 x water content

Where 0% < = water content < = 100%, corresponding to a MeasuredValue in the range 0 to 10000. The
maximum resolution this format allows is 0.01%.

MinMeasuredValue and MaxMeasuredValue define the range of the sensor.

The null value indicates that the measurement is unknown, otherwise the range shall be as described in
Measured Value.

MeasuredValue is updated continuously as new measurements are made.

**`See`**

MatterSpecification.v11.Cluster § 2.6.4.1

#### Inherited from

StateType.measuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/RelativeHumidityMeasurementCluster.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/RelativeHumidityMeasurementCluster.ts#L43)

___

### minMeasuredValue

• **minMeasuredValue**: ``null`` \| `number`

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

**`See`**

MatterSpecification.v11.Cluster § 2.6.4.2

#### Inherited from

StateType.minMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/RelativeHumidityMeasurementCluster.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/RelativeHumidityMeasurementCluster.ts#L51)

___

### tolerance

• `Optional` **tolerance**: `number`

See Measured Value.

**`See`**

MatterSpecification.v11.Cluster § 2.6.4.4

#### Inherited from

StateType.tolerance

#### Defined in

[packages/matter.js/src/cluster/definitions/RelativeHumidityMeasurementCluster.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/RelativeHumidityMeasurementCluster.ts#L66)
