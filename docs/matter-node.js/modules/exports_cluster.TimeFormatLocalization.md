[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / TimeFormatLocalization

# Namespace: TimeFormatLocalization

[exports/cluster](exports_cluster.md).TimeFormatLocalization

## Table of contents

### Enumerations

- [CalendarType](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)
- [Feature](../enums/exports_cluster.TimeFormatLocalization.Feature.md)
- [HourFormat](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.TimeFormatLocalization.Cluster.md)
- [Complete](../interfaces/exports_cluster.TimeFormatLocalization.Complete.md)

### Variables

- [Base](exports_cluster.TimeFormatLocalization.md#base)
- [CalendarFormatComponent](exports_cluster.TimeFormatLocalization.md#calendarformatcomponent)
- [Cluster](exports_cluster.TimeFormatLocalization.md#cluster)
- [ClusterInstance](exports_cluster.TimeFormatLocalization.md#clusterinstance)
- [Complete](exports_cluster.TimeFormatLocalization.md#complete)
- [CompleteInstance](exports_cluster.TimeFormatLocalization.md#completeinstance)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all TimeFormatLocalization clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `hourFormat`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md) \| ``null``, `any`\>  } | - |
| `attributes.hourFormat` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md) \| ``null``, `any`\> | The HourFormat attribute shall represent the format that the Node is currently configured to use when conveying the hour unit of time. If provided, this value shall take priority over any unit implied through the ActiveLocale Attribute. **`See`** MatterSpecification.v11.Core § 11.4.6.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md) \| ``null``, `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] | This metadata controls which TimeFormatLocalizationCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.calendarFormat` | [`BitFlag`](exports_schema.md#bitflag) | CalendarFormat The Node can be configured to use different calendar formats when conveying values to a user. |
| `id` | ``44`` | - |
| `name` | ``"TimeFormatLocalization"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:118

___

### CalendarFormatComponent

• `Const` **CalendarFormatComponent**: `Object`

A TimeFormatLocalizationCluster supports these elements if it supports feature CalendarFormat.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `activeCalendarType`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md) \| ``null``, `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  } |
| `attributes.activeCalendarType` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md) \| ``null``, `any`\> |
| `attributes.supportedCalendarTypes` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:81

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.TimeFormatLocalization.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:244

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:246

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md) \| ``null``, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md) \| ``null``, `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.TimeFormatLocalization.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:175

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.TimeFormatLocalization.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:301

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:303

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `activeCalendarType`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md) \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `attributeList`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `clusterRevision`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `eventList`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `featureMap`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `generatedCommandList`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `hourFormat`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md) \| ``null``, `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.TimeFormatLocalization.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeFormatLocalizationCluster.d.ts:250
