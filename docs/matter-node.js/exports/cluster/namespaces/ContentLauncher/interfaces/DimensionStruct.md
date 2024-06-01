[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ContentLauncher](../README.md) / DimensionStruct

# Interface: DimensionStruct

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

## See

MatterSpecification.v11.Cluster § 6.7.5.8

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvDimensionStruct`](../README.md#tlvdimensionstruct)\>

## Properties

### height

> **height**: `number`

This indicates the height using the metric defined in Metric

#### See

MatterSpecification.v11.Cluster § 6.7.5.8.2

#### Inherited from

`TypeFromSchema.height`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:69

***

### metric

> **metric**: [`MetricType`](../enumerations/MetricType.md)

This shall indicate metric used for defining Height/Width.

#### See

MatterSpecification.v11.Cluster § 6.7.5.8.3

#### Inherited from

`TypeFromSchema.metric`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:75

***

### width

> **width**: `number`

This indicates the width using the metric defined in Metric

#### See

MatterSpecification.v11.Cluster § 6.7.5.8.1

#### Inherited from

`TypeFromSchema.width`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:63
