[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / TimeFormatLocalization

# Namespace: TimeFormatLocalization

[exports/cluster](exports_cluster.md).TimeFormatLocalization

## Table of contents

### Enumerations

- [CalendarType](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)
- [Feature](../enums/exports_cluster.TimeFormatLocalization.Feature.md)
- [HourFormat](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md)

### Type Aliases

- [Extension](exports_cluster.TimeFormatLocalization.md#extension)

### Variables

- [Base](exports_cluster.TimeFormatLocalization.md#base)
- [CalendarFormatComponent](exports_cluster.TimeFormatLocalization.md#calendarformatcomponent)
- [Cluster](exports_cluster.TimeFormatLocalization.md#cluster)
- [Complete](exports_cluster.TimeFormatLocalization.md#complete)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.TimeFormatLocalization.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `calendarFormat`: ``true``  } ? typeof [`CalendarFormatComponent`](exports_cluster.TimeFormatLocalization.md#calendarformatcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeFormatLocalizationCluster.d.ts:186

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `hourFormat`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md) \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all TimeFormatLocalization clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeFormatLocalizationCluster.d.ts:92

___

### CalendarFormatComponent

• `Const` **CalendarFormatComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md) \| ``null``, `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A TimeFormatLocalizationCluster supports these elements if it supports feature CalendarFormat.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeFormatLocalizationCluster.d.ts:113

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.TimeFormatLocalization.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Time Format Localization

Nodes should be expected to be deployed to any and all regions of the world. These global regions may have
differing preferences for how dates and times are conveyed. As such, Nodes that visually or audibly convey time
information need a mechanism by which they can be configured to use a user’s preferred format.

This cluster supports an interface to a Node. It provides attributes for determining and configuring time and
date formatting information that a Node shall utilize when conveying values to a user.

TimeFormatLocalizationCluster supports optional features that you can enable with the
TimeFormatLocalizationCluster.with() factory method.

**`See`**

MatterCoreSpecificationV1_1 § 11.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeFormatLocalizationCluster.d.ts:147

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, {}\>

This cluster supports all TimeFormatLocalization features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeFormatLocalizationCluster.d.ts:197
