[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / IlluminanceMeasurement

# Namespace: IlluminanceMeasurement

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/IlluminanceMeasurementCluster.d.ts:74

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.lightSensorType

> `readonly` **lightSensorType**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `null`, `any`\>

The LightSensorType attribute specifies the electronic type of the light sensor. This attribute shall be
set to one of the non-reserved values listed in Values of the LightSensorType Attribute.

###### See

MatterSpecification.v11.Cluster § 2.2.5.5

##### attributes.maxMeasuredValue

> `readonly` **maxMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. A
value of null indicates that this attribute is not defined. See Measured Value for more details.

###### See

MatterSpecification.v11.Cluster § 2.2.5.3

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **minMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **id**: `1024`

##### name

> `readonly` **name**: `"IlluminanceMeasurement"`

##### revision

> `readonly` **revision**: `3`

#### Source

packages/matter.js/dist/esm/cluster/definitions/IlluminanceMeasurementCluster.d.ts:14

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/IlluminanceMeasurementCluster.d.ts:77
