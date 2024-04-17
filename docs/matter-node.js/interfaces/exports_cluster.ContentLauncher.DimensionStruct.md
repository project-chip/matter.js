[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / DimensionStruct

# Interface: DimensionStruct

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).DimensionStruct

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.8

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvDimensionStruct`](../modules/exports_cluster.ContentLauncher.md#tlvdimensionstruct)\>

  ↳ **`DimensionStruct`**

## Table of contents

### Properties

- [height](exports_cluster.ContentLauncher.DimensionStruct.md#height)
- [metric](exports_cluster.ContentLauncher.DimensionStruct.md#metric)
- [width](exports_cluster.ContentLauncher.DimensionStruct.md#width)

## Properties

### height

• **height**: `number`

This indicates the height using the metric defined in Metric

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.8.2

#### Inherited from

TypeFromSchema.height

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:69

___

### metric

• **metric**: [`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)

This shall indicate metric used for defining Height/Width.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.8.3

#### Inherited from

TypeFromSchema.metric

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:75

___

### width

• **width**: `number`

This indicates the width using the metric defined in Metric

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.8.1

#### Inherited from

TypeFromSchema.width

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:63
