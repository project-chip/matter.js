[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / IlluminanceMeasurement

# Namespace: IlluminanceMeasurement

[exports/cluster](exports_cluster.md).IlluminanceMeasurement

## Table of contents

### Variables

- [Cluster](exports_cluster.IlluminanceMeasurement.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `lightSensorType`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>

Illuminance Measurement

Attributes and commands for configuring the measurement of illuminance, and reporting illuminance measurements.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 2.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IlluminanceMeasurementCluster.d.ts:17
