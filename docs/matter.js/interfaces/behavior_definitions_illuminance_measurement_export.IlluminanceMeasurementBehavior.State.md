[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/illuminance-measurement/export](../modules/behavior_definitions_illuminance_measurement_export.md) / [IlluminanceMeasurementBehavior](../modules/behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementBehavior.md) / State

# Interface: State

[behavior/definitions/illuminance-measurement/export](../modules/behavior_definitions_illuminance_measurement_export.md).[IlluminanceMeasurementBehavior](../modules/behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_illuminance_measurement_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [lightSensorType](behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementBehavior.State.md#lightsensortype)
- [maxMeasuredValue](behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementBehavior.State.md#maxmeasuredvalue)
- [measuredValue](behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementBehavior.State.md#measuredvalue)
- [minMeasuredValue](behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementBehavior.State.md#minmeasuredvalue)
- [tolerance](behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementBehavior.State.md#tolerance)

## Properties

### lightSensorType

• `Optional` **lightSensorType**: ``null`` \| `number`

The LightSensorType attribute specifies the electronic type of the light sensor. This attribute shall be
set to one of the non-reserved values listed in Values of the LightSensorType Attribute.

**`See`**

MatterSpecification.v11.Cluster § 2.2.5.5

#### Inherited from

StateType.lightSensorType

#### Defined in

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L75)

___

### maxMeasuredValue

• **maxMeasuredValue**: ``null`` \| `number`

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. A
value of null indicates that this attribute is not defined. See Measured Value for more details.

**`See`**

MatterSpecification.v11.Cluster § 2.2.5.3

#### Inherited from

StateType.maxMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L60)

___

### measuredValue

• **measuredValue**: ``null`` \| `number`

The MeasuredValue attribute represents the illuminance in Lux (symbol lx) as follows:

  • MeasuredValue = 10,000 x log10(illuminance) + 1,

where 1 lx ≤ illuminance ≤ 3.576 Mlx, corresponding to a MeasuredValue in the range 1 to 0xfffe. The
MeasuredValue attribute can take the following values:

  • 0 indicates a value of illuminance that is too low to be measured,

  • MinMeasuredValue ≤ MeasuredValue ≤ MaxMeasuredValue under normal circumstances,

  • null indicates that the illuminance measurement is invalid.

The MeasuredValue attribute is updated continuously as new measurements are made.

**`See`**

MatterSpecification.v11.Cluster § 2.2.5.1

#### Inherited from

StateType.measuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L44)

___

### minMeasuredValue

• **minMeasuredValue**: ``null`` \| `number`

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. A
value of null indicates that this attribute is not defined. See Measured Value for more details.

**`See`**

MatterSpecification.v11.Cluster § 2.2.5.2

#### Inherited from

StateType.minMeasuredValue

#### Defined in

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L52)

___

### tolerance

• `Optional` **tolerance**: `number`

See Measured Value.

**`See`**

MatterSpecification.v11.Cluster § 2.2.5.4

#### Inherited from

StateType.tolerance

#### Defined in

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L67)
