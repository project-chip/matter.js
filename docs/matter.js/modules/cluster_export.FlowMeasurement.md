[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / FlowMeasurement

# Namespace: FlowMeasurement

[cluster/export](cluster_export.md).FlowMeasurement

## Table of contents

### Variables

- [Cluster](cluster_export.FlowMeasurement.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `maxMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

Flow Measurement

This cluster provides an interface to flow measurement functionality, including configuration and provision of
notifications of flow measurements.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.5

#### Defined in

[packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FlowMeasurementCluster.ts#L23)
