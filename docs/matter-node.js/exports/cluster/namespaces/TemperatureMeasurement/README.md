[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / TemperatureMeasurement

# Namespace: TemperatureMeasurement

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/TemperatureMeasurementCluster.d.ts:64

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxMeasuredValue

> `readonly` **maxMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that is capable of being
measured. See Measured Value for more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.3.4.3

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

Represents the temperature in degrees Celsius as follows:

MeasuredValue = 100 x temperature [°C]

Where -273.15°C ≤ temperature ≤ 327.67°C, with a resolution of 0.01°C. The null value indicates that the
temperature is unknown.

###### See

MatterSpecification.v11.Cluster § 2.3.4.1

##### attributes.minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that is capable of being
measured. See Measured Value for more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.3.4.2

##### attributes.tolerance

> `readonly` **tolerance**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

See Measured Value.

###### See

MatterSpecification.v11.Cluster § 2.3.4.4

##### id

> `readonly` **id**: `1026`

##### name

> `readonly` **name**: `"TemperatureMeasurement"`

##### revision

> `readonly` **revision**: `4`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TemperatureMeasurementCluster.d.ts:14

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/TemperatureMeasurementCluster.d.ts:67
