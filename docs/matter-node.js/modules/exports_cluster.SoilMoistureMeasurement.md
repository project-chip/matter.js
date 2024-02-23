[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / SoilMoistureMeasurement

# Namespace: SoilMoistureMeasurement

[exports/cluster](exports_cluster.md).SoilMoistureMeasurement

## Table of contents

### Variables

- [Cluster](exports_cluster.SoilMoistureMeasurement.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1032`` ; `name`: ``"SoilMoistureMeasurement"`` ; `revision`: ``3``  }\>

This is a base cluster. The server cluster provides an interface to water content measurement functionality. The
measurement is reportable and may be configured for reporting. Water content measurements include, but are not
limited to, leaf wetness, relative humidity, and soil moisture.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 2.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SoilMoistureMeasurementCluster.d.ts:17
