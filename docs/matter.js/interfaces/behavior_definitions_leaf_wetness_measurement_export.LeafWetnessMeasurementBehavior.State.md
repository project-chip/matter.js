[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/leaf-wetness-measurement/export](../modules/behavior_definitions_leaf_wetness_measurement_export.md) / [LeafWetnessMeasurementBehavior](../modules/behavior_definitions_leaf_wetness_measurement_export.LeafWetnessMeasurementBehavior.md) / State

# Interface: State

[behavior/definitions/leaf-wetness-measurement/export](../modules/behavior_definitions_leaf_wetness_measurement_export.md).[LeafWetnessMeasurementBehavior](../modules/behavior_definitions_leaf_wetness_measurement_export.LeafWetnessMeasurementBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_leaf_wetness_measurement_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [maxMeasuredValue](behavior_definitions_leaf_wetness_measurement_export.LeafWetnessMeasurementBehavior.State.md#maxmeasuredvalue)
- [measuredValue](behavior_definitions_leaf_wetness_measurement_export.LeafWetnessMeasurementBehavior.State.md#measuredvalue)
- [minMeasuredValue](behavior_definitions_leaf_wetness_measurement_export.LeafWetnessMeasurementBehavior.State.md#minmeasuredvalue)
- [tolerance](behavior_definitions_leaf_wetness_measurement_export.LeafWetnessMeasurementBehavior.State.md#tolerance)

## Properties

### maxMeasuredValue

• **maxMeasuredValue**: ``null`` \| `number`

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.6.4.3

#### Inherited from

StateType.maxMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:60](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L60)

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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.6.4.1

#### Inherited from

StateType.measuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:44](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L44)

___

### minMeasuredValue

• **minMeasuredValue**: ``null`` \| `number`

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.6.4.2

#### Inherited from

StateType.minMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:52](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L52)

___

### tolerance

• `Optional` **tolerance**: `number`

See Measured Value.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.6.4.4

#### Inherited from

StateType.tolerance

#### Defined in

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:67](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L67)
