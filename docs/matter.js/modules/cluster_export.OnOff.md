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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.OnOff.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `levelControlForLighting`: ``true``  } ? typeof [`LevelControlForLightingComponent`](cluster_export.OnOff.md#levelcontrolforlightingcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:317](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L317)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `onOff`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\>  }, { `off`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all OnOff clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:145](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L145)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `onOff`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `off`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.OnOff.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

On/Off

Attributes and commands for turning devices on and off.

OnOffCluster supports optional features that you can enable with the OnOffCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.5

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:298](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L298)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `globalSceneControl`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\>\> ; `offWaitTime`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>\> ; `onOff`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `onTime`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>\> ; `startUpOnOff`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `levelControlForLighting`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `off`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `offWithEffect`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `on`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `onWithRecallGlobalScene`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\> ; `onWithTimedOff`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `acceptOnlyWhenOn`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitField`](schema_export.md#bitfield-1)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\>\> ; `toggle`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, {}\>

This cluster supports all OnOff features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:329](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L329)

___

### LevelControlForLightingComponent

• `Const` **LevelControlForLightingComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `globalSceneControl`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  }, { `offWithEffect`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `acceptOnlyWhenOn`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitField`](schema_export.md#bitfield-1)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A OnOffCluster supports these elements if it supports feature LevelControlForLighting.

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:196](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L196)

___

### OnOffControl

• `Const` **OnOffControl**: `Object`

The value of OnOff.onOffControl

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.5.7.6.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acceptOnlyWhenOn` | [`BitFlag`](schema_export.md#bitflag-1) |
| `reserved` | [`BitField`](schema_export.md#bitfield-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:92](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L92)

___

### TlvOffWithEffectRequest

• `Const` **TlvOffWithEffectRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the OnOff offWithEffect command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.5.7.4

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:66](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L66)

___

### TlvOnWithTimedOffRequest

• `Const` **TlvOnWithTimedOffRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `acceptOnlyWhenOn`: [`BitFlag`](schema_export.md#bitflag-1) ; `reserved`: [`BitField`](schema_export.md#bitfield-1)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the OnOff onWithTimedOff command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.5.7.6

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L99)
