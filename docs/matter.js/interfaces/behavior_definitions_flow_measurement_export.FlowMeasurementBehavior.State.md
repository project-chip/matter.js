[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/flow-measurement/export](../modules/behavior_definitions_flow_measurement_export.md) / [FlowMeasurementBehavior](../modules/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior.md) / State

# Interface: State

[behavior/definitions/flow-measurement/export](../modules/behavior_definitions_flow_measurement_export.md).[FlowMeasurementBehavior](../modules/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_flow_measurement_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [maxMeasuredValue](behavior_definitions_flow_measurement_export.FlowMeasurementBehavior.State.md#maxmeasuredvalue)
- [measuredValue](behavior_definitions_flow_measurement_export.FlowMeasurementBehavior.State.md#measuredvalue)
- [minMeasuredValue](behavior_definitions_flow_measurement_export.FlowMeasurementBehavior.State.md#minmeasuredvalue)
- [tolerance](behavior_definitions_flow_measurement_export.FlowMeasurementBehavior.State.md#tolerance)

## Properties

### maxMeasuredValue

• **maxMeasuredValue**: ``null`` \| `number`

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. See
Measured Value for more details.

The null value indicates that the value is not available.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.5.4.3

#### Inherited from

StateType.maxMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:55](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L55)

___

### measuredValue

• **measuredValue**: ``null`` \| `number`

MeasuredValue represents the flow in m/h as follows: MeasuredValue = 10 x Flow

The null value indicates that the flow measurement is unknown, otherwise the range shall be as described
in Measured Value.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.5.4.1

#### Inherited from

StateType.measuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:35](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L35)

___

### minMeasuredValue

• **minMeasuredValue**: ``null`` \| `number`

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. See
Measured Value for more details.

The null value indicates that the value is not available.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.5.4.2

#### Inherited from

StateType.minMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:45](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L45)

___

### tolerance

• `Optional` **tolerance**: `number`

See Measured Value.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.5.4.4

#### Inherited from

StateType.tolerance

#### Defined in

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:62](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L62)
