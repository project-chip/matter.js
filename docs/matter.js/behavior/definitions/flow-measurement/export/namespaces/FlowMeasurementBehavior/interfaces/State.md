[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/flow-measurement/export](../../../README.md) / [FlowMeasurementBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### maxMeasuredValue

> **maxMeasuredValue**: `null` \| `number`

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. See
Measured Value for more details.

The null value indicates that the value is not available.

#### See

MatterSpecification.v11.Cluster § 2.5.4.3

#### Inherited from

`StateType.maxMeasuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L54)

***

### measuredValue

> **measuredValue**: `null` \| `number`

MeasuredValue represents the flow in m/h as follows: MeasuredValue = 10 x Flow

The null value indicates that the flow measurement is unknown, otherwise the range shall be as described
in Measured Value.

#### See

MatterSpecification.v11.Cluster § 2.5.4.1

#### Inherited from

`StateType.measuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L34)

***

### minMeasuredValue

> **minMeasuredValue**: `null` \| `number`

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. See
Measured Value for more details.

The null value indicates that the value is not available.

#### See

MatterSpecification.v11.Cluster § 2.5.4.2

#### Inherited from

`StateType.minMeasuredValue`

#### Source

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L44)

***

### tolerance?

> `optional` **tolerance**: `number`

See Measured Value.

#### See

MatterSpecification.v11.Cluster § 2.5.4.4

#### Inherited from

`StateType.tolerance`

#### Source

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L61)
