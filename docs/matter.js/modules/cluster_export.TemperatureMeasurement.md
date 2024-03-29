[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / TemperatureMeasurement

# Namespace: TemperatureMeasurement

[cluster/export](cluster_export.md).TemperatureMeasurement

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.TemperatureMeasurement.Cluster.md)

### Variables

- [Cluster](cluster_export.TemperatureMeasurement.md#cluster)
- [ClusterInstance](cluster_export.TemperatureMeasurement.md#clusterinstance)
- [Complete](cluster_export.TemperatureMeasurement.md#complete)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.TemperatureMeasurement.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:76](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L76)

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:78](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L78)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1026`` = 0x402; `name`: ``"TemperatureMeasurement"`` = "TemperatureMeasurement"; `revision`: ``4`` = 4 }\>

**`See`**

[Cluster](cluster_export.TemperatureMeasurement.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:21](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L21)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.TemperatureMeasurement.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:80](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts#L80)
