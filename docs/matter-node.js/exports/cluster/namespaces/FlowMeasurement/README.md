[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / FlowMeasurement

# Namespace: FlowMeasurement

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/FlowMeasurementCluster.d.ts:62

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

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. See
Measured Value for more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.5.4.3

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

MeasuredValue represents the flow in m/h as follows: MeasuredValue = 10 x Flow

The null value indicates that the flow measurement is unknown, otherwise the range shall be as described
in Measured Value.

###### See

MatterSpecification.v11.Cluster § 2.5.4.1

##### attributes.minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. See
Measured Value for more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.5.4.2

##### attributes.tolerance

> `readonly` **tolerance**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

See Measured Value.

###### See

MatterSpecification.v11.Cluster § 2.5.4.4

##### id

> `readonly` **id**: `1028`

##### name

> `readonly` **name**: `"FlowMeasurement"`

##### revision

> `readonly` **revision**: `3`

#### Source

packages/matter.js/dist/esm/cluster/definitions/FlowMeasurementCluster.d.ts:14

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/FlowMeasurementCluster.d.ts:65
