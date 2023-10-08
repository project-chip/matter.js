[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / TimeFormatLocalization

# Namespace: TimeFormatLocalization

[cluster/export](cluster_export.md).TimeFormatLocalization

## Table of contents

### Enumerations

- [CalendarType](../enums/cluster_export.TimeFormatLocalization.CalendarType.md)
- [Feature](../enums/cluster_export.TimeFormatLocalization.Feature.md)
- [HourFormat](../enums/cluster_export.TimeFormatLocalization.HourFormat.md)

### Type Aliases

- [Extension](cluster_export.TimeFormatLocalization.md#extension)

### Variables

- [Base](cluster_export.TimeFormatLocalization.md#base)
- [CalendarFormatComponent](cluster_export.TimeFormatLocalization.md#calendarformatcomponent)
- [Cluster](cluster_export.TimeFormatLocalization.md#cluster)
- [Complete](cluster_export.TimeFormatLocalization.md#complete)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.TimeFormatLocalization.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `calendarFormat`: ``true``  } ? typeof [`CalendarFormatComponent`](cluster_export.TimeFormatLocalization.md#calendarformatcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:213

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `hourFormat`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`HourFormat`](../enums/cluster_export.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `features`: { `calendarFormat`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``44`` = 0x2c; `name`: ``"TimeFormatLocalization"`` = "TimeFormatLocalization"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all TimeFormatLocalization clusters.

#### Defined in

packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:115

___

### CalendarFormatComponent

• `Const` **CalendarFormatComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `activeCalendarType`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md)[], `any`\>  }  }\>

A TimeFormatLocalizationCluster supports these elements if it supports feature CalendarFormat.

#### Defined in

packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:149

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `hourFormat`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`HourFormat`](../enums/cluster_export.TimeFormatLocalization.HourFormat.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `calendarFormat`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `calendarFormat`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: { `calendarFormat`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``44`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `hourFormat`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`HourFormat`](../enums/cluster_export.TimeFormatLocalization.HourFormat.md), `any`\>  } ; `features`: { `calendarFormat`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``44`` = 0x2c; `name`: ``"TimeFormatLocalization"`` = "TimeFormatLocalization"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.TimeFormatLocalization.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `calendarFormat`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Time Format Localization

Nodes should be expected to be deployed to any and all regions of the world. These global regions may have
differing preferences for how dates and times are conveyed. As such, Nodes that visually or audibly convey time
information need a mechanism by which they can be configured to use a user’s preferred format.

This cluster supports an interface to a Node. It provides attributes for determining and configuring time and
date formatting information that a Node shall utilize when conveying values to a user.

TimeFormatLocalizationCluster supports optional features that you can enable with the
TimeFormatLocalizationCluster.with() factory method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.4

#### Defined in

packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:191

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md), `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `calendarFormat`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`HourFormat`](../enums/cluster_export.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`CalendarType`](../enums/cluster_export.TimeFormatLocalization.CalendarType.md)[], `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: { `calendarFormat`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``44`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"TimeFormatLocalization"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all TimeFormatLocalization features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:225
