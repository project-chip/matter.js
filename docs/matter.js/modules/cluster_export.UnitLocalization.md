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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.UnitLocalization.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `temperatureUnit`: ``true``  } ? typeof [`TemperatureUnitComponent`](cluster_export.UnitLocalization.md#temperatureunitcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:127](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L127)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `features`: \{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all UnitLocalization clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:54](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L54)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<{}, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: \{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: [`Branded`](util_export.md#branded)\<``45`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"UnitLocalization"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `features`: \{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.UnitLocalization.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag)  }, `T`\>\> = extender }

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

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:105](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L105)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `temperatureUnit`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `temperatureUnit`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: ``45`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"UnitLocalization"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all UnitLocalization features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:139](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L139)

___

### TemperatureUnitComponent

• `Const` **TemperatureUnitComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  }\>

A UnitLocalizationCluster supports these elements if it supports feature TemperatureUnit.

#### Defined in

[packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts:72](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/UnitLocalizationCluster.ts#L72)
