[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Identify

# Namespace: Identify

[cluster/export](cluster_export.md).Identify

* THIS FILE IS GENERATED, DO NOT EDIT **

## Table of contents

### Enumerations

- [EffectIdentifier](../enums/cluster_export.Identify.EffectIdentifier.md)
- [EffectVariant](../enums/cluster_export.Identify.EffectVariant.md)
- [Feature](../enums/cluster_export.Identify.Feature.md)
- [IdentifyType](../enums/cluster_export.Identify.IdentifyType.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.Identify.Cluster.md)
- [Complete](../interfaces/cluster_export.Identify.Complete.md)
- [IdentifyQueryResponse](../interfaces/cluster_export.Identify.IdentifyQueryResponse.md)
- [IdentifyRequest](../interfaces/cluster_export.Identify.IdentifyRequest.md)
- [TriggerEffectRequest](../interfaces/cluster_export.Identify.TriggerEffectRequest.md)

### Variables

- [Base](cluster_export.Identify.md#base)
- [Cluster](cluster_export.Identify.md#cluster)
- [ClusterInstance](cluster_export.Identify.md#clusterinstance)
- [Complete](cluster_export.Identify.md#complete)
- [CompleteInstance](cluster_export.Identify.md#completeinstance)
- [QueryComponent](cluster_export.Identify.md#querycomponent)
- [TlvIdentifyQueryResponse](cluster_export.Identify.md#tlvidentifyqueryresponse)
- [TlvIdentifyRequest](cluster_export.Identify.md#tlvidentifyrequest)
- [TlvTriggerEffectRequest](cluster_export.Identify.md#tlvtriggereffectrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Identify clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `identifyTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } | - |
| `attributes.identifyTime` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> | This attribute specifies the remaining length of time, in seconds, that the endpoint will continue to identify itself. If this attribute is set to a value other than 0 then the device shall enter its identification state, in order to indicate to an observer which of several nodes and/or endpoints it is. It is RECOMMENDED that this state consists of flashing a light with a period of 0.5 seconds. The IdentifyTime attribute shall be decremented every second while in this state. If this attribute reaches or is set to the value 0 then the device shall terminate its identification state. **`See`** MatterSpecification.v11.Cluster § 1.2.5.1 |
| `attributes.identifyType` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\> | This attribute specifies how the identification state is presented to the user. This field shall contain one of the values listed below: Table 2. Values of the IdentifyType attribute **`See`** MatterSpecification.v11.Cluster § 1.2.5.2 |
| `commands` | \{ `identify`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } | - |
| `commands.identify` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | This command starts or stops the receiving device identifying itself. **`See`** MatterSpecification.v11.Cluster § 1.2.6.1 |
| `commands.triggerEffect` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\> | This command allows the support of feedback to the user, such as a certain light effect. It is used to allow an implementation to provide visual feedback to the user under certain circumstances such as a color light turning green when it has successfully connected to a network. The use of this command and the effects themselves are entirely up to the implementer to use whenever a visual feedback is useful but it is not the same as and does not replace the identify mechanism used during commissioning. **`See`** MatterSpecification.v11.Cluster § 1.2.6.3 |
| `extensions` | readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] | This metadata controls which IdentifyCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `query`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.query` | [`BitFlag`](schema_export.md#bitflag) | Query Multicast query for identification state |
| `id` | ``3`` | - |
| `name` | ``"Identify"`` | - |
| `revision` | ``4`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L226)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.Identify.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:324](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L324)

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:326](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L326)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>

**`See`**

[Cluster](cluster_export.Identify.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:303](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L303)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.Identify.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:350](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L350)

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:352](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L352)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: [`Merge`](util_export.md#merge)\<\{ `identifyTime`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `query`: [`BitFlag`](schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `identify`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `identifyQuery`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `query`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `triggerEffect`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `features`: \{ `query`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``3``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Identify"`` = Cluster.name; `revision`: ``4`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.Identify.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:332](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L332)

___

### QueryComponent

• `Const` **QueryComponent**: `Object`

A IdentifyCluster supports these elements if it supports feature Query.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `identifyQuery`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } |
| `commands.identifyQuery` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:189](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L189)

___

### TlvIdentifyQueryResponse

• `Const` **TlvIdentifyQueryResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L33)

___

### TlvIdentifyRequest

• `Const` **TlvIdentifyRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Identify identify command

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L91)

___

### TlvTriggerEffectRequest

• `Const` **TlvTriggerEffectRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>

Input to the Identify triggerEffect command

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L153)
