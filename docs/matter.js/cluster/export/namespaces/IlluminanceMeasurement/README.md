[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / IlluminanceMeasurement

# Namespace: IlluminanceMeasurement

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L86)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.lightSensorType

> `readonly` **lightSensorType**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

The LightSensorType attribute specifies the electronic type of the light sensor. This attribute shall be
set to one of the non-reserved values listed in Values of the LightSensorType Attribute.

###### See

MatterSpecification.v11.Cluster § 2.2.5.5

##### attributes.maxMeasuredValue

> `readonly` **maxMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. A
value of null indicates that this attribute is not defined. See Measured Value for more details.

###### See

MatterSpecification.v11.Cluster § 2.2.5.3

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The MeasuredValue attribute represents the illuminance in Lux (symbol lx) as follows:

  • MeasuredValue = 10,000 x log10(illuminance) + 1,

where 1 lx ≤ illuminance ≤ 3.576 Mlx, corresponding to a MeasuredValue in the range 1 to 0xfffe. The
MeasuredValue attribute can take the following values:

  • 0 indicates a value of illuminance that is too low to be measured,

  • MinMeasuredValue ≤ MeasuredValue ≤ MaxMeasuredValue under normal circumstances,

  • null indicates that the illuminance measurement is invalid.

The MeasuredValue attribute is updated continuously as new measurements are made.

###### See

MatterSpecification.v11.Cluster § 2.2.5.1

##### attributes.minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. A
value of null indicates that this attribute is not defined. See Measured Value for more details.

###### See

MatterSpecification.v11.Cluster § 2.2.5.2

##### attributes.tolerance

> `readonly` **tolerance**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

See Measured Value.

###### See

MatterSpecification.v11.Cluster § 2.2.5.4

##### id

> `readonly` **id**: `1024` = `0x400`

##### name

> `readonly` **name**: `"IlluminanceMeasurement"` = `"IlluminanceMeasurement"`

##### revision

> `readonly` **revision**: `3` = `3`

#### Source

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L20)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L90)
