[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [TimeFormatLocalization](../modules/exports_cluster.TimeFormatLocalization.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[TimeFormatLocalization](../modules/exports_cluster.TimeFormatLocalization.md).Cluster

Time Format Localization

Nodes should be expected to be deployed to any and all regions of the world. These global regions may have
differing preferences for how dates and times are conveyed. As such, Nodes that visually or audibly convey time
information need a mechanism by which they can be configured to use a user’s preferred format.

This cluster supports an interface to a Node. It provides attributes for determining and configuring time and
date formatting information that a Node shall utilize when conveying values to a user.

TimeFormatLocalizationCluster supports optional features that you can enable with the
TimeFormatLocalizationCluster.with() factory method.

**`See`**

MatterSpecification.v11.Core § 11.4

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.TimeFormatLocalization.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.TimeFormatLocalization.Cluster.md#attributes)
- [base](exports_cluster.TimeFormatLocalization.Cluster.md#base)
- [commands](exports_cluster.TimeFormatLocalization.Cluster.md#commands)
- [events](exports_cluster.TimeFormatLocalization.Cluster.md#events)
- [extensions](exports_cluster.TimeFormatLocalization.Cluster.md#extensions)
- [features](exports_cluster.TimeFormatLocalization.Cluster.md#features)
- [id](exports_cluster.TimeFormatLocalization.Cluster.md#id)
- [name](exports_cluster.TimeFormatLocalization.Cluster.md#name)
- [revision](exports_cluster.TimeFormatLocalization.Cluster.md#revision)
- [supportedFeatures](exports_cluster.TimeFormatLocalization.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.TimeFormatLocalization.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.TimeFormatLocalization.Cluster.md#alter)
- [enable](exports_cluster.TimeFormatLocalization.Cluster.md#enable)
- [set](exports_cluster.TimeFormatLocalization.Cluster.md#set)
- [with](exports_cluster.TimeFormatLocalization.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }]

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `calendarFormat` | [`BitFlag`](../modules/exports_schema.md#bitflag) | CalendarFormat The Node can be configured to use different calendar formats when conveying values to a user. |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"TimeFormatLocalization"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } ; `flags`: \{ `calendarFormat`: ``true``  }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``44`` ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
