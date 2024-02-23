[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / FlowMeasurement

# Namespace: FlowMeasurement

[exports/cluster](exports_cluster.md).FlowMeasurement

## Table of contents

### Variables

- [Cluster](exports_cluster.FlowMeasurement.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1028`` ; `name`: ``"FlowMeasurement"`` ; `revision`: ``3``  }\>

Flow Measurement

This cluster provides an interface to flow measurement functionality, including configuration and provision of
notifications of flow measurements.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 2.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FlowMeasurementCluster.d.ts:18
