[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / FlowMeasurement

# Namespace: FlowMeasurement

[cluster/export](cluster_export.md).FlowMeasurement

## Table of contents

### Variables

- [Cluster](cluster_export.FlowMeasurement.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `maxMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  } ; `id`: ``1028`` = 0x404; `name`: ``"FlowMeasurement"`` = "FlowMeasurement"; `revision`: ``3`` = 3 }\>

Flow Measurement

This cluster provides an interface to flow measurement functionality, including configuration and provision of
notifications of flow measurements.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.5

#### Defined in

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:24](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L24)
