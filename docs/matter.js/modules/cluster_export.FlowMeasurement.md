[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / FlowMeasurement

# Namespace: FlowMeasurement

[cluster/export](cluster_export.md).FlowMeasurement

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.FlowMeasurement.Cluster.md)

### Variables

- [Cluster](cluster_export.FlowMeasurement.md#cluster)
- [ClusterInstance](cluster_export.FlowMeasurement.md#clusterinstance)
- [Complete](cluster_export.FlowMeasurement.md#complete)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.FlowMeasurement.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:74](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L74)

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:76](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L76)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1028`` = 0x404; `name`: ``"FlowMeasurement"`` = "FlowMeasurement"; `revision`: ``3`` = 3 }\>

**`See`**

[Cluster](cluster_export.FlowMeasurement.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:21](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L21)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.FlowMeasurement.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:78](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L78)
