[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/leaf-wetness-measurement/export](../../../README.md) / [LeafWetnessMeasurementBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### maxMeasuredValue

> **maxMeasuredValue**: `null` \| `number`

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

#### See

MatterSpecification.v11.Cluster § 2.6.4.3

#### Inherited from

`StateType.maxMeasuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L59)

***

### measuredValue

> **measuredValue**: `null` \| `number`

MeasuredValue represents the water content in % as follows:

MeasuredValue = 100 x water content

Where 0% < = water content < = 100%, corresponding to a MeasuredValue in the range 0 to 10000. The
maximum resolution this format allows is 0.01%.

MinMeasuredValue and MaxMeasuredValue define the range of the sensor.

The null value indicates that the measurement is unknown, otherwise the range shall be as described in
Measured Value.

MeasuredValue is updated continuously as new measurements are made.

#### See

MatterSpecification.v11.Cluster § 2.6.4.1

#### Inherited from

`StateType.measuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L43)

***

### minMeasuredValue

> **minMeasuredValue**: `null` \| `number`

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

#### See

MatterSpecification.v11.Cluster § 2.6.4.2

#### Inherited from

`StateType.minMeasuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L51)

***

### tolerance?

> `optional` **tolerance**: `number`

See Measured Value.

#### See

MatterSpecification.v11.Cluster § 2.6.4.4

#### Inherited from

`StateType.tolerance`

#### Source

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L66)
