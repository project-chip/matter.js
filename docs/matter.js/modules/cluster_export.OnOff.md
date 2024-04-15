[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OnOff

# Namespace: OnOff

[cluster/export](cluster_export.md).OnOff

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.OnOff.Feature.md)
- [OnOffEffectIdentifier](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)
- [StartUpOnOff](../enums/cluster_export.OnOff.StartUpOnOff.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.OnOff.Cluster.md)
- [Complete](../interfaces/cluster_export.OnOff.Complete.md)
- [OffWithEffectRequest](../interfaces/cluster_export.OnOff.OffWithEffectRequest.md)
- [OnWithTimedOffRequest](../interfaces/cluster_export.OnOff.OnWithTimedOffRequest.md)

### Variables

- [Base](cluster_export.OnOff.md#base)
- [Cluster](cluster_export.OnOff.md#cluster)
- [ClusterInstance](cluster_export.OnOff.md#clusterinstance)
- [Complete](cluster_export.OnOff.md#complete)
- [CompleteInstance](cluster_export.OnOff.md#completeinstance)
- [LevelControlForLightingComponent](cluster_export.OnOff.md#levelcontrolforlightingcomponent)
- [OnOffControl](cluster_export.OnOff.md#onoffcontrol)
- [TlvOffWithEffectRequest](cluster_export.OnOff.md#tlvoffwitheffectrequest)
- [TlvOnWithTimedOffRequest](cluster_export.OnOff.md#tlvonwithtimedoffrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all OnOff clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `onOff`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>  } | - |
| `attributes.onOff` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> | The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively. **`See`** MatterSpecification.v11.Cluster § 1.5.6.1 |
| `commands` | \{ `off`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } | - |
| `commands.off` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.1 |
| `commands.on` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.2 |
| `commands.toggle` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.3 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `acceptOnlyWhenOn`: ... ; `reserved`: ...  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] | This metadata controls which OnOffCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.levelControlForLighting` | [`BitFlag`](schema_export.md#bitflag) | LevelControlForLighting Behavior that supports lighting applications. |
| `id` | ``6`` | - |
| `name` | ``"OnOff"`` | - |
| `revision` | ``4`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:242](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L242)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:311](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L311)

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:313](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L313)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<...\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>

**`See`**

[Cluster](cluster_export.OnOff.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:300](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L300)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.OnOff.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:368](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L368)

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:370](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L370)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `globalSceneControl`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `offWaitTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `onOff`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `startUpOnOff`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `off`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `offWithEffect`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `on`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `onWithTimedOff`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitField`](schema_export.md#bitfield)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `toggle`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``6``, ``"ClusterId"``\> = Cluster.id; `name`: ``"OnOff"`` = Cluster.name; `revision`: ``4`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.OnOff.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:319](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L319)

___

### LevelControlForLightingComponent

• `Const` **LevelControlForLightingComponent**: `Object`

A OnOffCluster supports these elements if it supports feature LevelControlForLighting.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `globalSceneControl`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } |
| `attributes.globalSceneControl` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> |
| `attributes.offWaitTime` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.onTime` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.startUpOnOff` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\> |
| `commands` | \{ `offWithEffect`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitField`](schema_export.md#bitfield)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\>  } |
| `commands.offWithEffect` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |
| `commands.onWithRecallGlobalScene` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |
| `commands.onWithTimedOff` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitField`](schema_export.md#bitfield)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L132)

___

### OnOffControl

• `Const` **OnOffControl**: `Object`

The value of OnOff.onOffControl

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acceptOnlyWhenOn` | [`BitFlag`](schema_export.md#bitflag) |
| `reserved` | [`BitField`](schema_export.md#bitfield) |

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L86)

___

### TlvOffWithEffectRequest

• `Const` **TlvOffWithEffectRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the OnOff offWithEffect command

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.4

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L53)

___

### TlvOnWithTimedOffRequest

• `Const` **TlvOnWithTimedOffRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitField`](schema_export.md#bitfield)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Input to the OnOff onWithTimedOff command

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L93)
