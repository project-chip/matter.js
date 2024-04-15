[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [SoftwareDiagnostics](../modules/cluster_export.SoftwareDiagnostics.md) / Complete

# Interface: Complete

[cluster/export](../modules/cluster_export.md).[SoftwareDiagnostics](../modules/cluster_export.SoftwareDiagnostics.md).Complete

This cluster supports all SoftwareDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CompleteInstance`](../modules/cluster_export.SoftwareDiagnostics.md#completeinstance)\>

  ↳ **`Complete`**

## Table of contents

### Properties

- [attributes](cluster_export.SoftwareDiagnostics.Complete.md#attributes)
- [base](cluster_export.SoftwareDiagnostics.Complete.md#base)
- [commands](cluster_export.SoftwareDiagnostics.Complete.md#commands)
- [events](cluster_export.SoftwareDiagnostics.Complete.md#events)
- [extensions](cluster_export.SoftwareDiagnostics.Complete.md#extensions)
- [features](cluster_export.SoftwareDiagnostics.Complete.md#features)
- [id](cluster_export.SoftwareDiagnostics.Complete.md#id)
- [name](cluster_export.SoftwareDiagnostics.Complete.md#name)
- [revision](cluster_export.SoftwareDiagnostics.Complete.md#revision)
- [supportedFeatures](cluster_export.SoftwareDiagnostics.Complete.md#supportedfeatures)
- [unknown](cluster_export.SoftwareDiagnostics.Complete.md#unknown)

### Methods

- [alter](cluster_export.SoftwareDiagnostics.Complete.md#alter)
- [enable](cluster_export.SoftwareDiagnostics.Complete.md#enable)
- [set](cluster_export.SoftwareDiagnostics.Complete.md#set)
- [with](cluster_export.SoftwareDiagnostics.Complete.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

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

#### Type declaration

| Name | Type |
| :------ | :------ |
| `resetWatermarks` | [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `softwareFault` | [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> | The SoftwareFault Event shall be generated when a software fault takes place on the Node. The ID field shall be set to the ID of the software thread in which the last software fault occurred. The Name field shall be set to a manufacturer-specified name or prefix of the software thread in which the last software fault occurred. **`See`** MatterSpecification.v11.Core § 11.12.8.1 |

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `undefined`

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
| `watermarks` | [`BitFlag`](../modules/schema_export.md#bitflag) | Watermarks Node makes available the metrics for high watermark related to memory consumption. |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<[`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\>, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"SoftwareDiagnostics"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `ValuesT`\>

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

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentHeapFree`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `currentHeapHighWatermark`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `currentHeapUsed`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `threadMetrics`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `stackFreeCurrent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackFreeMinimum`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `stackSize`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[], `any`\>  } ; `commands`: \{ `resetWatermarks`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `watermarks`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `events`: \{ `softwareFault`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `faultRecording`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `id`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `watermarks`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``52``, ``"ClusterId"``\> = Cluster.id; `name`: ``"SoftwareDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
