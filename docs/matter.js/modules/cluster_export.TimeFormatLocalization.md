[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / TimeFormatLocalization

# Namespace: TimeFormatLocalization

[cluster/export](cluster_export.md).TimeFormatLocalization

## Table of contents

### Enumerations

- [CalendarType](../enums/cluster_export.TimeFormatLocalization.CalendarType.md)
- [Feature](../enums/cluster_export.TimeFormatLocalization.Feature.md)
- [HourFormat](../enums/cluster_export.TimeFormatLocalization.HourFormat.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.TimeFormatLocalization.Cluster.md)
- [Complete](../interfaces/cluster_export.TimeFormatLocalization.Complete.md)

### Variables

- [Base](cluster_export.TimeFormatLocalization.md#base)
- [CalendarFormatComponent](cluster_export.TimeFormatLocalization.md#calendarformatcomponent)
- [Cluster](cluster_export.TimeFormatLocalization.md#cluster)
- [ClusterInstance](cluster_export.TimeFormatLocalization.md#clusterinstance)
- [Complete](cluster_export.TimeFormatLocalization.md#complete)
- [CompleteInstance](cluster_export.TimeFormatLocalization.md#completeinstance)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all TimeFormatLocalization clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `hourFormat`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/cluster_export.TimeFormatLocalization.HourFormat.md), `any`\>  } | - |
| `attributes.hourFormat` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/cluster_export.TimeFormatLocalization.HourFormat.md), `any`\> | The HourFormat attribute shall represent the format that the Node is currently configured to use when conveying the hour unit of time. If provided, this value shall take priority over any unit implied through the ActiveLocale Attribute. **`See`** [MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.4.6.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } = CalendarFormatComponent; `flags`: \{ `calendarFormat`: ``true`` = true }  }] | This metadata controls which TimeFormatLocalizationCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `calendarFormat`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.calendarFormat` | [`BitFlag`](schema_export.md#bitflag) | CalendarFormat The Node can be configured to use different calendar formats when conveying values to a user. |
| `id` | ``44`` | - |
| `name` | ``"TimeFormatLocalization"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:147](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L147)

___

### CalendarFormatComponent

• `Const` **CalendarFormatComponent**: `Object`

A TimeFormatLocalizationCluster supports these elements if it supports feature CalendarFormat.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `activeCalendarType`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md)[], `any`\>  } |
| `attributes.activeCalendarType` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md), `any`\> |
| `attributes.supportedCalendarTypes` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md)[], `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:103](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L103)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.TimeFormatLocalization.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:204](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L204)

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:206](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L206)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `hourFormat`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/cluster_export.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeCalendarType`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  } = CalendarFormatComponent; `flags`: \{ `calendarFormat`: ``true`` = true }  }] ; `features`: \{ `calendarFormat`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``44`` = 0x2c; `name`: ``"TimeFormatLocalization"`` = "TimeFormatLocalization"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.TimeFormatLocalization.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:187](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L187)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.TimeFormatLocalization.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:237](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L237)

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:239](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L239)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/cluster_export.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``44``, ``"ClusterId"``\> = Cluster.id; `name`: ``"TimeFormatLocalization"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.TimeFormatLocalization.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:212](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L212)
