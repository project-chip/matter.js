[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/temperature-measurement/export](../../../README.md) / [TemperatureMeasurementBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### maxMeasuredValue

> **maxMeasuredValue**: `null` \| `number`

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that is capable of being
measured. See Measured Value for more details.

The null value indicates that the value is not available.

#### See

MatterSpecification.v11.Cluster § 2.3.4.3

#### Inherited from

`StateType.maxMeasuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L56)

***

### measuredValue

> **measuredValue**: `null` \| `number`

Represents the temperature in degrees Celsius as follows:

MeasuredValue = 100 x temperature [°C]

Where -273.15°C ≤ temperature ≤ 327.67°C, with a resolution of 0.01°C. The null value indicates that the
temperature is unknown.

#### See

MatterSpecification.v11.Cluster § 2.3.4.1

#### Inherited from

`StateType.measuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L36)

***

### minMeasuredValue

> **minMeasuredValue**: `null` \| `number`

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that is capable of being
measured. See Measured Value for more details.

The null value indicates that the value is not available.

#### See

MatterSpecification.v11.Cluster § 2.3.4.2

#### Inherited from

`StateType.minMeasuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L46)

***

### tolerance?

> `optional` **tolerance**: `number`

See Measured Value.

#### See

MatterSpecification.v11.Cluster § 2.3.4.4

#### Inherited from

`StateType.tolerance`

#### Source

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L63)
