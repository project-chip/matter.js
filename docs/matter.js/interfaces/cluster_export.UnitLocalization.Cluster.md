[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [UnitLocalization](../modules/cluster_export.UnitLocalization.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[UnitLocalization](../modules/cluster_export.UnitLocalization.md).Cluster

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

MatterSpecification.v11.Core § 11.5

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.UnitLocalization.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.UnitLocalization.Cluster.md#attributes)
- [base](cluster_export.UnitLocalization.Cluster.md#base)
- [commands](cluster_export.UnitLocalization.Cluster.md#commands)
- [events](cluster_export.UnitLocalization.Cluster.md#events)
- [extensions](cluster_export.UnitLocalization.Cluster.md#extensions)
- [features](cluster_export.UnitLocalization.Cluster.md#features)
- [id](cluster_export.UnitLocalization.Cluster.md#id)
- [name](cluster_export.UnitLocalization.Cluster.md#name)
- [revision](cluster_export.UnitLocalization.Cluster.md#revision)
- [supportedFeatures](cluster_export.UnitLocalization.Cluster.md#supportedfeatures)
- [unknown](cluster_export.UnitLocalization.Cluster.md#unknown)

### Methods

- [alter](cluster_export.UnitLocalization.Cluster.md#alter)
- [enable](cluster_export.UnitLocalization.Cluster.md#enable)
- [set](cluster_export.UnitLocalization.Cluster.md#set)
- [with](cluster_export.UnitLocalization.Cluster.md#with)

## Properties

### attributes

• **attributes**: `Object`

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }]

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `temperatureUnit` | [`BitFlag`](../modules/schema_export.md#bitflag) | TemperatureUnit The Node can be configured to use different units of temperature when conveying values to a user. |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``45``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"UnitLocalization"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `temperatureUnit`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`TempUnit`](../enums/cluster_export.UnitLocalization.TempUnit.md), `any`\>  }  } = TemperatureUnitComponent; `flags`: \{ `temperatureUnit`: ``true`` = true }  }] ; `features`: \{ `temperatureUnit`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``45`` = 0x2d; `name`: ``"UnitLocalization"`` = "UnitLocalization"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
