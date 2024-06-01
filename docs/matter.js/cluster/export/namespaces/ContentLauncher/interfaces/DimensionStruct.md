[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ContentLauncher](../README.md) / DimensionStruct

# Interface: DimensionStruct

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

## See

MatterSpecification.v11.Cluster § 6.7.5.8

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvDimensionStruct`](../README.md#tlvdimensionstruct)\>

## Properties

### height

> **height**: `number`

This indicates the height using the metric defined in Metric

#### See

MatterSpecification.v11.Cluster § 6.7.5.8.2

#### Inherited from

`TypeFromSchema.height`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L83)

***

### metric

> **metric**: [`MetricType`](../enumerations/MetricType.md)

This shall indicate metric used for defining Height/Width.

#### See

MatterSpecification.v11.Cluster § 6.7.5.8.3

#### Inherited from

`TypeFromSchema.metric`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L90)

***

### width

> **width**: `number`

This indicates the width using the metric defined in Metric

#### See

MatterSpecification.v11.Cluster § 6.7.5.8.1

#### Inherited from

`TypeFromSchema.width`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L76)
