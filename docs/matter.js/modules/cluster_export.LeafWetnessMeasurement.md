[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / LeafWetnessMeasurement

# Namespace: LeafWetnessMeasurement

[cluster/export](cluster_export.md).LeafWetnessMeasurement

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.LeafWetnessMeasurement.Cluster.md)

### Variables

- [Cluster](cluster_export.LeafWetnessMeasurement.md#cluster)
- [ClusterInstance](cluster_export.LeafWetnessMeasurement.md#clusterinstance)
- [Complete](cluster_export.LeafWetnessMeasurement.md#complete)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.LeafWetnessMeasurement.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:77](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L77)

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:79](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L79)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1031`` = 0x407; `name`: ``"LeafWetnessMeasurement"`` = "LeafWetnessMeasurement"; `revision`: ``3`` = 3 }\>

**`See`**

[Cluster](cluster_export.LeafWetnessMeasurement.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:20](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L20)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.LeafWetnessMeasurement.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts:81](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/definitions/LeafWetnessMeasurementCluster.ts#L81)
