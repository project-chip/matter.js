[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / MetricType

# Enumeration: MetricType

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).MetricType

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.9

## Table of contents

### Enumeration Members

- [Percentage](exports_cluster.ContentLauncher.MetricType.md#percentage)
- [Pixels](exports_cluster.ContentLauncher.MetricType.md#pixels)

## Enumeration Members

### Percentage

• **Percentage** = ``1``

This value is for dimensions defined as a percentage of the overall display dimensions. For example, if
using a Percentage Metric type for a Width measurement of 50.0, against a display width of 1920 pixels, then
the resulting value used would be 960 pixels (50.0% of 1920) for that dimension. Whenever a measurement uses
this Metric type, the resulting values shall be rounded ("floored") towards 0 if the measurement requires an
integer final value.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.9.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:47

___

### Pixels

• **Pixels** = ``0``

This value is used for dimensions defined in a number of Pixels.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.9.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:37
