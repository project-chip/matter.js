[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PressureMeasurement](../modules/exports_cluster.PressureMeasurement.md) / Complete

# Interface: Complete

[exports/cluster](../modules/exports_cluster.md).[PressureMeasurement](../modules/exports_cluster.PressureMeasurement.md).Complete

This cluster supports all PressureMeasurement features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CompleteInstance`](../modules/exports_cluster.PressureMeasurement.md#completeinstance)\>

  ↳ **`Complete`**

## Table of contents

### Properties

- [attributes](exports_cluster.PressureMeasurement.Complete.md#attributes)
- [base](exports_cluster.PressureMeasurement.Complete.md#base)
- [commands](exports_cluster.PressureMeasurement.Complete.md#commands)
- [events](exports_cluster.PressureMeasurement.Complete.md#events)
- [extensions](exports_cluster.PressureMeasurement.Complete.md#extensions)
- [features](exports_cluster.PressureMeasurement.Complete.md#features)
- [id](exports_cluster.PressureMeasurement.Complete.md#id)
- [name](exports_cluster.PressureMeasurement.Complete.md#name)
- [revision](exports_cluster.PressureMeasurement.Complete.md#revision)
- [supportedFeatures](exports_cluster.PressureMeasurement.Complete.md#supportedfeatures)
- [unknown](exports_cluster.PressureMeasurement.Complete.md#unknown)

### Methods

- [alter](exports_cluster.PressureMeasurement.Complete.md#alter)
- [enable](exports_cluster.PressureMeasurement.Complete.md#enable)
- [set](exports_cluster.PressureMeasurement.Complete.md#set)
- [with](exports_cluster.PressureMeasurement.Complete.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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
| `extended` | [`BitFlag`](../modules/exports_schema.md#bitflag) | Extended The cluster is capable of extended range and resolution |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<[`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\>, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"PressureMeasurement"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``3``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scale`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\> ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
