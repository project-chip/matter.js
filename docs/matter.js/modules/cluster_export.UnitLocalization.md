[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / UnitLocalization

# Namespace: UnitLocalization

[cluster/export](cluster_export.md).UnitLocalization

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.UnitLocalization.Feature.md)
- [TempUnit](../enums/cluster_export.UnitLocalization.TempUnit.md)

### Type Aliases

- [Extension](cluster_export.UnitLocalization.md#extension)

### Variables

- [Base](cluster_export.UnitLocalization.md#base)
- [Cluster](cluster_export.UnitLocalization.md#cluster)
- [Complete](cluster_export.UnitLocalization.md#complete)
- [TemperatureUnitComponent](cluster_export.UnitLocalization.md#temperatureunitcomponent)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.UnitLocalization.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `temperatureUnit`: ``true``  } ? typeof [`TemperatureUnitComponent`](cluster_export.UnitLocalization.md#temperatureunitcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:132](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L132)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all UnitLocalization clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:62](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L62)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.UnitLocalization.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Unit Localization

Nodes should be expected to be deployed to any and all regions of the world. These global regions may have
differing preferences for the units in which values are conveyed in communication to a user. As such, Nodes that
visually or audibly convey measurable values to the user need a mechanism by which they can be configured to use
a user’s preferred unit.

This cluster supports an interface to a Node. It provides attributes for determining and configuring the units
that a Node shall utilize when conveying values in communication to a user.

UnitLocalizationCluster supports optional features that you can enable with the UnitLocalizationCluster.with()
factory method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.5

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L113)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `temperatureUnit`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, {}, {}\>

This cluster supports all UnitLocalization features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:144](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L144)

___

### TemperatureUnitComponent

• `Const` **TemperatureUnitComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `temperatureUnit`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A UnitLocalizationCluster supports these elements if it supports feature TemperatureUnit.

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:80](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L80)
