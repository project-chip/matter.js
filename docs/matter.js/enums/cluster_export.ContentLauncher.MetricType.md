[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / MetricType

# Enumeration: MetricType

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).MetricType

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.9

## Table of contents

### Enumeration Members

- [Percentage](cluster_export.ContentLauncher.MetricType.md#percentage)
- [Pixels](cluster_export.ContentLauncher.MetricType.md#pixels)

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

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L59)

___

### Pixels

• **Pixels** = ``0``

This value is used for dimensions defined in a number of Pixels.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.9.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L48)
