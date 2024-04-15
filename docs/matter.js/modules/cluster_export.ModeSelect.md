[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ModeSelect

# Namespace: ModeSelect

[cluster/export](cluster_export.md).ModeSelect

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.ModeSelect.Feature.md)

### Interfaces

- [ChangeToModeRequest](../interfaces/cluster_export.ModeSelect.ChangeToModeRequest.md)
- [Cluster](../interfaces/cluster_export.ModeSelect.Cluster.md)
- [Complete](../interfaces/cluster_export.ModeSelect.Complete.md)
- [ModeOptionStruct](../interfaces/cluster_export.ModeSelect.ModeOptionStruct.md)
- [SemanticTagStruct](../interfaces/cluster_export.ModeSelect.SemanticTagStruct.md)

### Variables

- [Base](cluster_export.ModeSelect.md#base)
- [Cluster](cluster_export.ModeSelect.md#cluster)
- [ClusterInstance](cluster_export.ModeSelect.md#clusterinstance)
- [Complete](cluster_export.ModeSelect.md#complete)
- [CompleteInstance](cluster_export.ModeSelect.md#completeinstance)
- [OnOffComponent](cluster_export.ModeSelect.md#onoffcomponent)
- [TlvChangeToModeRequest](cluster_export.ModeSelect.md#tlvchangetomoderequest)
- [TlvModeOptionStruct](cluster_export.ModeSelect.md#tlvmodeoptionstruct)
- [TlvSemanticTagStruct](cluster_export.ModeSelect.md#tlvsemantictagstruct)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all ModeSelect clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\>  }\>[], `any`\>  } | - |
| `attributes.currentMode` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> | This attribute represents the current mode of the server. The value of this field must match the Mode field of one of the entries in the SupportedModes attribute. **`See`** MatterSpecification.v11.Cluster § 1.8.5.4 |
| `attributes.description` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> | This attribute describes the purpose of the server, in readable text. For example, a coffee machine may have a Mode Select cluster for the amount of milk to add, and another Mode Select cluster for the amount of sugar to add. In this case, the first instance can have the description Milk and the second instance can have the description Sugar. This allows the user to tell the purpose of each of the instances. **`See`** MatterSpecification.v11.Cluster § 1.8.5.1 |
| `attributes.standardNamespace` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> | This attribute, when not null, shall indicate a single standard namespace for any standard semantic tag value supported in this or any other cluster instance with the same value of this attribute. A null value indicates no standard namespace, and therefore, no standard semantic tags are provided in this cluster instance. Each standard namespace and corresponding values and value meanings shall be defined in another document. **`See`** MatterSpecification.v11.Cluster § 1.8.5.2 |
| `attributes.startUpMode` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> | The StartUpMode attribute value indicates the desired startup mode for the server when it is supplied with power. If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, when the server is powered up, except in the case when the OnMode attribute overrides the StartUpMode attribute. This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode attribute shall return to its value prior to the restart. The value of this field shall match the Mode field of one of the entries in the SupportedModes attribute. If this attribute is not implemented, or is set to the null value, it shall have no effect. **`See`** MatterSpecification.v11.Cluster § 1.8.5.5 |
| `attributes.supportedModes` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\>  }\>[], `any`\> | This attribute is the list of supported modes that may be selected for the CurrentMode attribute. Each item in this list represents a unique mode as indicated by the Mode field of the ModeOptionStruct. Each entry in this list shall have a unique value for the Mode field. **`See`** MatterSpecification.v11.Cluster § 1.8.5.3 |
| `commands` | \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } | - |
| `commands.changeToMode` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | On receipt of this command, if the NewMode field indicates a valid mode transition within the supported list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the server shall respond with an INVALID_COMMAND status response. **`See`** MatterSpecification.v11.Cluster § 1.8.6.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] | This metadata controls which ModeSelectCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `onOff`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.onOff` | [`BitFlag`](schema_export.md#bitflag) | OnOff Dependency with the On/Off cluster |
| `id` | ``80`` | - |
| `name` | ``"ModeSelect"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:161](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L161)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.ModeSelect.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L290)

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:292](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L292)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `mfgCode`: ... ; `value`: ...  }\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.ModeSelect.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:262](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L262)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.ModeSelect.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:316](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L316)

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:318](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L318)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `onOff`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `onOff`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `mfgCode`: ... ; `value`: ...  }\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } = Cluster.commands; `features`: \{ `onOff`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``80``, ``"ClusterId"``\> = Cluster.id; `name`: ``"ModeSelect"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.ModeSelect.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:298](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L298)

___

### OnOffComponent

• `Const` **OnOffComponent**: `Object`

A ModeSelectCluster supports these elements if it supports feature OnOff.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.onMode` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L129)

___

### TlvChangeToModeRequest

• `Const` **TlvChangeToModeRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the ModeSelect changeToMode command

**`See`**

MatterSpecification.v11.Cluster § 1.8.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L117)

___

### TlvModeOptionStruct

• `Const` **TlvModeOptionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>

This is a struct representing a possible mode of the server.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L69)

___

### TlvSemanticTagStruct

• `Const` **TlvSemanticTagStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `mfgCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L35)
