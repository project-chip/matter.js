[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / UnitLocalization

# Namespace: UnitLocalization

[cluster/export](cluster_export.md).UnitLocalization

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.UnitLocalization.Feature.md)
- [TempUnit](../enums/cluster_export.UnitLocalization.TempUnit.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.UnitLocalization.Cluster.md)
- [Complete](../interfaces/cluster_export.UnitLocalization.Complete.md)

### Variables

- [Base](cluster_export.UnitLocalization.md#base)
- [Cluster](cluster_export.UnitLocalization.md#cluster)
- [ClusterInstance](cluster_export.UnitLocalization.md#clusterinstance)
- [Complete](cluster_export.UnitLocalization.md#complete)
- [CompleteInstance](cluster_export.UnitLocalization.md#completeinstance)
- [TemperatureUnitComponent](cluster_export.UnitLocalization.md#temperatureunitcomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all UnitLocalization clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] | This metadata controls which UnitLocalizationCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.temperatureUnit` | [`BitFlag`](schema_export.md#bitflag) | TemperatureUnit The Node can be configured to use different units of temperature when conveying values to a user. |
| `id` | ``45`` | - |
| `name` | ``"UnitLocalization"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:76](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L76)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.UnitLocalization.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:118](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L118)

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:120](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L120)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.UnitLocalization.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L100)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.UnitLocalization.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:146](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L146)

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:148](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L148)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `temperatureUnit`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``45``, ``"ClusterId"``\> = Cluster.id; `name`: ``"UnitLocalization"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.UnitLocalization.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:126](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L126)

___

### TemperatureUnitComponent

• `Const` **TemperatureUnitComponent**: `Object`

A UnitLocalizationCluster supports these elements if it supports feature TemperatureUnit.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `temperatureUnit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  } |
| `attributes.temperatureUnit` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:42](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L42)
