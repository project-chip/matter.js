[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Channel](../modules/cluster_export.Channel.md) / Complete

# Interface: Complete

[cluster/export](../modules/cluster_export.md).[Channel](../modules/cluster_export.Channel.md).Complete

This cluster supports all Channel features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CompleteInstance`](../modules/cluster_export.Channel.md#completeinstance)\>

  ↳ **`Complete`**

## Table of contents

### Properties

- [attributes](cluster_export.Channel.Complete.md#attributes)
- [base](cluster_export.Channel.Complete.md#base)
- [commands](cluster_export.Channel.Complete.md#commands)
- [events](cluster_export.Channel.Complete.md#events)
- [extensions](cluster_export.Channel.Complete.md#extensions)
- [features](cluster_export.Channel.Complete.md#features)
- [id](cluster_export.Channel.Complete.md#id)
- [name](cluster_export.Channel.Complete.md#name)
- [revision](cluster_export.Channel.Complete.md#revision)
- [supportedFeatures](cluster_export.Channel.Complete.md#supportedfeatures)
- [unknown](cluster_export.Channel.Complete.md#unknown)

### Methods

- [alter](cluster_export.Channel.Complete.md#alter)
- [enable](cluster_export.Channel.Complete.md#enable)
- [set](cluster_export.Channel.Complete.md#set)
- [with](cluster_export.Channel.Complete.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `changeChannel` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } | - |
| `changeChannelByNumber` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | Change the channel to the channel with the given Number in the ChannelList attribute. **`See`** MatterSpecification.v11.Cluster § 6.6.4.3 |
| `skipChannel` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | This command provides channel up and channel down functionality, but allows channel index jumps of size Count. When the value of the increase or decrease is larger than the number of channels remaining in the given direction, then the behavior shall be to return to the beginning (or end) of the channel list and continue. For example, if the current channel is at index 0 and count value of -1 is given, then the current channel should change to the last channel. **`See`** MatterSpecification.v11.Cluster § 6.6.4.4 |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

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
| `channelList` | [`BitFlag`](../modules/schema_export.md#bitflag) | ChannelList Provides list of available channels. |
| `lineupInfo` | [`BitFlag`](../modules/schema_export.md#bitflag) | LineupInfo Provides lineup info, which is a reference to an external source of lineup information. |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<[`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\>, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"Channel"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `ValuesT`\>

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

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
