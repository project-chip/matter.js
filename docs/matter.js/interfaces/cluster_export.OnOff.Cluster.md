[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OnOff](../modules/cluster_export.OnOff.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[OnOff](../modules/cluster_export.OnOff.md).Cluster

On/Off

Attributes and commands for turning devices on and off.

OnOffCluster supports optional features that you can enable with the OnOffCluster.with() factory method.

**`See`**

MatterSpecification.v11.Cluster § 1.5

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.OnOff.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.OnOff.Cluster.md#attributes)
- [base](cluster_export.OnOff.Cluster.md#base)
- [commands](cluster_export.OnOff.Cluster.md#commands)
- [events](cluster_export.OnOff.Cluster.md#events)
- [extensions](cluster_export.OnOff.Cluster.md#extensions)
- [features](cluster_export.OnOff.Cluster.md#features)
- [id](cluster_export.OnOff.Cluster.md#id)
- [name](cluster_export.OnOff.Cluster.md#name)
- [revision](cluster_export.OnOff.Cluster.md#revision)
- [supportedFeatures](cluster_export.OnOff.Cluster.md#supportedfeatures)
- [unknown](cluster_export.OnOff.Cluster.md#unknown)

### Methods

- [alter](cluster_export.OnOff.Cluster.md#alter)
- [enable](cluster_export.OnOff.Cluster.md#enable)
- [set](cluster_export.OnOff.Cluster.md#set)
- [with](cluster_export.OnOff.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

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
| `off` | [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.1 |
| `on` | [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.2 |
| `toggle` | [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.3 |

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

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `reserved`: [`BitField`](../modules/schema_export.md#bitfield)  }\>\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }]

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
| `levelControlForLighting` | [`BitFlag`](../modules/schema_export.md#bitflag) | LevelControlForLighting Behavior that supports lighting applications. |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``6``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"OnOff"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``4``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>, `ValuesT`\>

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

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LevelControlForLightingComponent; `flags`: \{ `levelControlForLighting`: ``true`` = true }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``6`` = 0x6; `name`: ``"OnOff"`` = "OnOff"; `revision`: ``4`` = 4 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
