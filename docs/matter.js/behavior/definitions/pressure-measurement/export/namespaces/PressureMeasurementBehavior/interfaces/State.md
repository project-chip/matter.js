[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/pressure-measurement/export](../../../README.md) / [PressureMeasurementBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### maxMeasuredValue

> **maxMeasuredValue**: `null` \| `number`

This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

#### See

MatterSpecification.v11.Cluster § 2.4.5.3

#### Inherited from

`StateType.maxMeasuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L132)

***

### measuredValue

> **measuredValue**: `null` \| `number`

This attribute represents the pressure in kPa as follows:

MeasuredValue = 10 x Pressure [kPa]

The null value indicates that the value is not available.

#### See

MatterSpecification.v11.Cluster § 2.4.5.1

#### Inherited from

`StateType.measuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L112)

***

### minMeasuredValue

> **minMeasuredValue**: `null` \| `number`

This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

#### See

MatterSpecification.v11.Cluster § 2.4.5.2

#### Inherited from

`StateType.minMeasuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L122)

***

### tolerance?

> `optional` **tolerance**: `number`

This attribute indicates the magnitude of the possible error that is associated with ScaledValue.

See Measured Value.

#### See

MatterSpecification.v11.Cluster § 2.4.5.4

#### Inherited from

`StateType.tolerance`

#### Source

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L141)
