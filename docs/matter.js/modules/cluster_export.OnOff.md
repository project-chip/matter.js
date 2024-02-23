[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OnOff

# Namespace: OnOff

[cluster/export](cluster_export.md).OnOff

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.OnOff.Feature.md)
- [OnOffEffectIdentifier](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)
- [StartUpOnOff](../enums/cluster_export.OnOff.StartUpOnOff.md)

### Type Aliases

- [Extension](cluster_export.OnOff.md#extension)

### Variables

- [Base](cluster_export.OnOff.md#base)
- [Cluster](cluster_export.OnOff.md#cluster)
- [Complete](cluster_export.OnOff.md#complete)
- [LevelControlForLightingComponent](cluster_export.OnOff.md#levelcontrolforlightingcomponent)
- [OnOffControl](cluster_export.OnOff.md#onoffcontrol)
- [TlvOffWithEffectRequest](cluster_export.OnOff.md#tlvoffwitheffectrequest)
- [TlvOnWithTimedOffRequest](cluster_export.OnOff.md#tlvonwithtimedoffrequest)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.OnOff.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `levelControlForLighting`: ``true``  } ? typeof [`LevelControlForLightingComponent`](cluster_export.OnOff.md#levelcontrolforlightingcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:305](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L305)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `onOff`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>

These elements and properties are present in all OnOff clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:130](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L130)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `onOff`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `commands`: \{ `off`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: \{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: [`Branded`](util_export.md#branded)\<``6`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"OnOff"`` ; `revision`: ``4`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `onOff`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.OnOff.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  }, `T`\>\> = extender }

On/Off

Attributes and commands for turning devices on and off.

OnOffCluster supports optional features that you can enable with the OnOffCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.5

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:283](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L283)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `globalSceneControl`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `offWaitTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `onOff`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `startUpOnOff`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `off`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `offWithEffect`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `on`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `onWithTimedOff`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitField`](schema_export.md#bitfield)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `toggle`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: ``6`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"OnOff"`` = Cluster.name; `revision`: ``4`` = Cluster.revision }\>

This cluster supports all OnOff features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:317](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L317)

___

### LevelControlForLightingComponent

• `Const` **LevelControlForLightingComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `globalSceneControl`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitField`](schema_export.md#bitfield)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\>  }  }\>

A OnOffCluster supports these elements if it supports feature LevelControlForLighting.

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:181](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L181)

___

### OnOffControl

• `Const` **OnOffControl**: `Object`

The value of OnOff.onOffControl

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.5.7.6.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acceptOnlyWhenOn` | [`BitFlag`](schema_export.md#bitflag) |
| `reserved` | [`BitField`](schema_export.md#bitfield) |

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:77](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L77)

___

### TlvOffWithEffectRequest

• `Const` **TlvOffWithEffectRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the OnOff offWithEffect command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.5.7.4

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:51](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L51)

___

### TlvOnWithTimedOffRequest

• `Const` **TlvOnWithTimedOffRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](schema_export.md#bitflag) ; `reserved`: [`BitField`](schema_export.md#bitfield)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Input to the OnOff onWithTimedOff command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.5.7.6

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:84](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L84)
