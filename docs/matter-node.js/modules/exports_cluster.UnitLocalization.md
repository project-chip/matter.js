[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / UnitLocalization

# Namespace: UnitLocalization

[exports/cluster](exports_cluster.md).UnitLocalization

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.UnitLocalization.Feature.md)
- [TempUnit](../enums/exports_cluster.UnitLocalization.TempUnit.md)

### Type Aliases

- [Extension](exports_cluster.UnitLocalization.md#extension)

### Variables

- [Base](exports_cluster.UnitLocalization.md#base)
- [Cluster](exports_cluster.UnitLocalization.md#cluster)
- [Complete](exports_cluster.UnitLocalization.md#complete)
- [TemperatureUnitComponent](exports_cluster.UnitLocalization.md#temperatureunitcomponent)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.UnitLocalization.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `temperatureUnit`: ``true``  } ? typeof [`TemperatureUnitComponent`](exports_cluster.UnitLocalization.md#temperatureunitcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/UnitLocalizationCluster.d.ts:109

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `temperatureUnit`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all UnitLocalization clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/UnitLocalizationCluster.d.ts:43

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `temperatureUnit`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `temperatureUnit`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.UnitLocalization.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `temperatureUnit`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

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

MatterCoreSpecificationV1_1 § 11.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/UnitLocalizationCluster.d.ts:80

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `temperatureUnit`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `temperatureUnit`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, {}\>

This cluster supports all UnitLocalization features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/UnitLocalizationCluster.d.ts:120

___

### TemperatureUnitComponent

• `Const` **TemperatureUnitComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `temperatureUnit`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`TempUnit`](../enums/exports_cluster.UnitLocalization.TempUnit.md) \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A UnitLocalizationCluster supports these elements if it supports feature TemperatureUnit.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/UnitLocalizationCluster.d.ts:54
