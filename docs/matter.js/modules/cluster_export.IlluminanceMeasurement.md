[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / IlluminanceMeasurement

# Namespace: IlluminanceMeasurement

[cluster/export](cluster_export.md).IlluminanceMeasurement

## Table of contents

### Variables

- [Cluster](cluster_export.IlluminanceMeasurement.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` = 0x400; `name`: ``"IlluminanceMeasurement"`` = "IlluminanceMeasurement"; `revision`: ``3`` = 3 }\>

Illuminance Measurement

Attributes and commands for configuring the measurement of illuminance, and reporting illuminance measurements.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.2

#### Defined in

[packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:23](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts#L23)
