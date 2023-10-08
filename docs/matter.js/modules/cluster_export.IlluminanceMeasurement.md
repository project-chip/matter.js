[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / IlluminanceMeasurement

# Namespace: IlluminanceMeasurement

[cluster/export](cluster_export.md).IlluminanceMeasurement

## Table of contents

### Variables

- [Cluster](cluster_export.IlluminanceMeasurement.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `lightSensorType`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  } ; `id`: ``1024`` = 0x400; `name`: ``"IlluminanceMeasurement"`` = "IlluminanceMeasurement"; `revision`: ``3`` = 3 }\>

Illuminance Measurement

Attributes and commands for configuring the measurement of illuminance, and reporting illuminance measurements.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.2

#### Defined in

packages/matter.js/src/cluster/definitions/IlluminanceMeasurementCluster.ts:23
