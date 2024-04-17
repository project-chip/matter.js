[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / DimensionStruct

# Interface: DimensionStruct

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).DimensionStruct

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.8

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvDimensionStruct`](../modules/cluster_export.ContentLauncher.md#tlvdimensionstruct)\>

  ↳ **`DimensionStruct`**

## Table of contents

### Properties

- [height](cluster_export.ContentLauncher.DimensionStruct.md#height)
- [metric](cluster_export.ContentLauncher.DimensionStruct.md#metric)
- [width](cluster_export.ContentLauncher.DimensionStruct.md#width)

## Properties

### height

• **height**: `number`

This indicates the height using the metric defined in Metric

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.8.2

#### Inherited from

TypeFromSchema.height

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L83)

___

### metric

• **metric**: [`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)

This shall indicate metric used for defining Height/Width.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.8.3

#### Inherited from

TypeFromSchema.metric

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L90)

___

### width

• **width**: `number`

This indicates the width using the metric defined in Metric

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.8.1

#### Inherited from

TypeFromSchema.width

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L76)
