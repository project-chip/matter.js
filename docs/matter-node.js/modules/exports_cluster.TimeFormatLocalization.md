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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.TimeFormatLocalization.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `calendarFormat`: ``true``  } ? typeof [`CalendarFormatComponent`](exports_cluster.TimeFormatLocalization.md#calendarformatcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:230

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md) \| ``null``, `any`\>  } ; `features`: \{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>

These elements and properties are present in all TimeFormatLocalization clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:93

___

### CalendarFormatComponent

• `Const` **CalendarFormatComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md) \| ``null``, `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  }\>

A TimeFormatLocalizationCluster supports these elements if it supports feature CalendarFormat.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:120

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: {} ; `features`: \{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md) \| ``null``, `any`\>  } ; `features`: \{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.TimeFormatLocalization.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

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

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:156

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `activeCalendarType`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md) \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `attributeList`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `clusterRevision`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `eventList`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `featureMap`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `generatedCommandList`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `hourFormat`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md) \| ``null``, `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``44`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>

This cluster supports all TimeFormatLocalization features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:241
