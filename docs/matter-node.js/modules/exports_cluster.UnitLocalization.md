[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / UnitLocalization

# Namespace: UnitLocalization

[exports/cluster](exports_cluster.md).UnitLocalization

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.UnitLocalization.Feature.md)
- [TempUnit](../enums/exports_cluster.UnitLocalization.TempUnit.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.UnitLocalization.Cluster.md)
- [Complete](../interfaces/exports_cluster.UnitLocalization.Complete.md)

### Variables

- [Base](exports_cluster.UnitLocalization.md#base)
- [Cluster](exports_cluster.UnitLocalization.md#cluster)
- [ClusterInstance](exports_cluster.UnitLocalization.md#clusterinstance)
- [Complete](exports_cluster.UnitLocalization.md#complete)
- [CompleteInstance](exports_cluster.UnitLocalization.md#completeinstance)
- [TemperatureUnitComponent](exports_cluster.UnitLocalization.md#temperatureunitcomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all UnitLocalization clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`TempUnit`](../enums/exports_cluster.UnitLocalization.TempUnit.md) \| ``null``, `any`\>  }  } ; `flags`: \{ `temperatureUnit`: ``true``  }  }] | This metadata controls which UnitLocalizationCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `temperatureUnit`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.temperatureUnit` | [`BitFlag`](exports_schema.md#bitflag) | TemperatureUnit The Node can be configured to use different units of temperature when conveying values to a user. |
| `id` | ``45`` | - |
| `name` | ``"UnitLocalization"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:60

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.UnitLocalization.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:147

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:149

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`TempUnit`](../enums/exports_cluster.UnitLocalization.TempUnit.md) \| ``null``, `any`\>  }  } ; `flags`: \{ `temperatureUnit`: ``true``  }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``45`` ; `name`: ``"UnitLocalization"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.UnitLocalization.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:97

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.UnitLocalization.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:187

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:189

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`TempUnit`](../enums/exports_cluster.UnitLocalization.TempUnit.md) \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `temperatureUnit`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `temperatureUnit`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"UnitLocalization"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.UnitLocalization.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:153

___

### TemperatureUnitComponent

• `Const` **TemperatureUnitComponent**: `Object`

A UnitLocalizationCluster supports these elements if it supports feature TemperatureUnit.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `temperatureUnit`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`TempUnit`](../enums/exports_cluster.UnitLocalization.TempUnit.md) \| ``null``, `any`\>  } |
| `attributes.temperatureUnit` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`TempUnit`](../enums/exports_cluster.UnitLocalization.TempUnit.md) \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/UnitLocalizationCluster.d.ts:32
