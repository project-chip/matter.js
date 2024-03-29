[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [TimeFormatLocalization](../modules/exports_cluster.TimeFormatLocalization.md) / Complete

# Interface: Complete

[exports/cluster](../modules/exports_cluster.md).[TimeFormatLocalization](../modules/exports_cluster.TimeFormatLocalization.md).Complete

This cluster supports all TimeFormatLocalization features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CompleteInstance`](../modules/exports_cluster.TimeFormatLocalization.md#completeinstance)\>

  ↳ **`Complete`**

## Table of contents

### Properties

- [attributes](exports_cluster.TimeFormatLocalization.Complete.md#attributes)
- [base](exports_cluster.TimeFormatLocalization.Complete.md#base)
- [commands](exports_cluster.TimeFormatLocalization.Complete.md#commands)
- [events](exports_cluster.TimeFormatLocalization.Complete.md#events)
- [extensions](exports_cluster.TimeFormatLocalization.Complete.md#extensions)
- [features](exports_cluster.TimeFormatLocalization.Complete.md#features)
- [id](exports_cluster.TimeFormatLocalization.Complete.md#id)
- [name](exports_cluster.TimeFormatLocalization.Complete.md#name)
- [revision](exports_cluster.TimeFormatLocalization.Complete.md#revision)
- [supportedFeatures](exports_cluster.TimeFormatLocalization.Complete.md#supportedfeatures)
- [unknown](exports_cluster.TimeFormatLocalization.Complete.md#unknown)

### Methods

- [alter](exports_cluster.TimeFormatLocalization.Complete.md#alter)
- [enable](exports_cluster.TimeFormatLocalization.Complete.md#enable)
- [set](exports_cluster.TimeFormatLocalization.Complete.md#set)
- [with](exports_cluster.TimeFormatLocalization.Complete.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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

• **extensions**: `undefined`

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<[`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\>, ``"ClusterId"``\>

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `activeCalendarType`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `hourFormat`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`HourFormat`](../enums/exports_cluster.TimeFormatLocalization.HourFormat.md), `any`\> ; `supportedCalendarTypes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`CalendarType`](../enums/exports_cluster.TimeFormatLocalization.CalendarType.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `calendarFormat`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `calendarFormat`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``44``, ``"ClusterId"``\> ; `name`: ``"TimeFormatLocalization"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
