[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / IlluminanceMeasurement

# Namespace: IlluminanceMeasurement

[cluster/export](cluster_export.md).IlluminanceMeasurement

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.IlluminanceMeasurement.Cluster.md)

### Variables

- [Cluster](cluster_export.IlluminanceMeasurement.md#cluster)
- [ClusterInstance](cluster_export.IlluminanceMeasurement.md#clusterinstance)
- [Complete](cluster_export.IlluminanceMeasurement.md#complete)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.IlluminanceMeasurement.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:87](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L87)

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:89](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L89)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` = 0x400; `name`: ``"IlluminanceMeasurement"`` = "IlluminanceMeasurement"; `revision`: ``3`` = 3 }\>

**`See`**

[Cluster](cluster_export.IlluminanceMeasurement.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:21](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L21)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.IlluminanceMeasurement.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:91](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L91)
