[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / TemperatureMeasurement

# Namespace: TemperatureMeasurement

[cluster/export](cluster_export.md).TemperatureMeasurement

## Table of contents

### Variables

- [Cluster](cluster_export.TemperatureMeasurement.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `maxMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  } ; `id`: ``1026`` = 0x402; `name`: ``"TemperatureMeasurement"`` = "TemperatureMeasurement"; `revision`: ``4`` = 4 }\>

Temperature Measurement

This cluster provides an interface to temperature measurement functionality, including configuration and
provision of notifications of temperature measurements.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.3

#### Defined in

packages/matter.js/src/cluster/definitions/TemperatureMeasurementCluster.ts:24
