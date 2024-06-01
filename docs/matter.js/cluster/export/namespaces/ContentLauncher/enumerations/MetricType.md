[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ContentLauncher](../README.md) / MetricType

# Enumeration: MetricType

## See

MatterSpecification.v11.Cluster § 6.7.5.9

## Enumeration Members

### Percentage

> **Percentage**: `1`

This value is for dimensions defined as a percentage of the overall display dimensions. For example, if
using a Percentage Metric type for a Width measurement of 50.0, against a display width of 1920 pixels, then
the resulting value used would be 960 pixels (50.0% of 1920) for that dimension. Whenever a measurement uses
this Metric type, the resulting values shall be rounded ("floored") towards 0 if the measurement requires an
integer final value.

#### See

MatterSpecification.v11.Cluster § 6.7.5.9.2

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L59)

***

### Pixels

> **Pixels**: `0`

This value is used for dimensions defined in a number of Pixels.

#### See

MatterSpecification.v11.Cluster § 6.7.5.9.1

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L48)
