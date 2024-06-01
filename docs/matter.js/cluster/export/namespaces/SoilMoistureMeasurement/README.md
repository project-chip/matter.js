[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / SoilMoistureMeasurement

# Namespace: SoilMoistureMeasurement

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/SoilMoistureMeasurementCluster.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoilMoistureMeasurementCluster.ts#L77)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxMeasuredValue

> `readonly` **maxMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

###### See

MatterSpecification.v11.Cluster § 2.6.4.3

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

MeasuredValue represents the water content in % as follows:

MeasuredValue = 100 x water content

Where 0% < = water content < = 100%, corresponding to a MeasuredValue in the range 0 to 10000. The
maximum resolution this format allows is 0.01%.

MinMeasuredValue and MaxMeasuredValue define the range of the sensor.

The null value indicates that the measurement is unknown, otherwise the range shall be as described in
Measured Value.

MeasuredValue is updated continuously as new measurements are made.

###### See

MatterSpecification.v11.Cluster § 2.6.4.1

##### attributes.minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

###### See

MatterSpecification.v11.Cluster § 2.6.4.2

##### attributes.tolerance

> `readonly` **tolerance**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

See Measured Value.

###### See

MatterSpecification.v11.Cluster § 2.6.4.4

##### id

> `readonly` **id**: `1032` = `0x408`

##### name

> `readonly` **name**: `"SoilMoistureMeasurement"` = `"SoilMoistureMeasurement"`

##### revision

> `readonly` **revision**: `3` = `3`

#### Source

[packages/matter.js/src/cluster/definitions/SoilMoistureMeasurementCluster.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoilMoistureMeasurementCluster.ts#L20)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/SoilMoistureMeasurementCluster.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoilMoistureMeasurementCluster.ts#L81)
