[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / TemperatureMeasurement

# Namespace: TemperatureMeasurement

[exports/cluster](exports_cluster.md).TemperatureMeasurement

## Table of contents

### Variables

- [Cluster](exports_cluster.TemperatureMeasurement.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1026`` ; `name`: ``"TemperatureMeasurement"`` ; `revision`: ``4``  }\>

Temperature Measurement

This cluster provides an interface to temperature measurement functionality, including configuration and
provision of notifications of temperature measurements.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 2.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TemperatureMeasurementCluster.d.ts:18
