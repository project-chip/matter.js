[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OnOff](../modules/exports_cluster.OnOff.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[OnOff](../modules/exports_cluster.OnOff.md).Cluster

On/Off

Attributes and commands for turning devices on and off.

OnOffCluster supports optional features that you can enable with the OnOffCluster.with() factory method.

**`See`**

MatterSpecification.v11.Cluster § 1.5

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.OnOff.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.OnOff.Cluster.md#attributes)
- [base](exports_cluster.OnOff.Cluster.md#base)
- [commands](exports_cluster.OnOff.Cluster.md#commands)
- [events](exports_cluster.OnOff.Cluster.md#events)
- [extensions](exports_cluster.OnOff.Cluster.md#extensions)
- [features](exports_cluster.OnOff.Cluster.md#features)
- [id](exports_cluster.OnOff.Cluster.md#id)
- [name](exports_cluster.OnOff.Cluster.md#name)
- [revision](exports_cluster.OnOff.Cluster.md#revision)
- [supportedFeatures](exports_cluster.OnOff.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.OnOff.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.OnOff.Cluster.md#alter)
- [enable](exports_cluster.OnOff.Cluster.md#enable)
- [set](exports_cluster.OnOff.Cluster.md#set)
- [with](exports_cluster.OnOff.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `off` | [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.1 |
| `on` | [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.2 |
| `toggle` | [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.3 |

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

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/exports_cluster.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `reserved`: [`BitField`](../modules/exports_schema.md#bitfield)  }\>\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }]

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
| `levelControlForLighting` | [`BitFlag`](../modules/exports_schema.md#bitflag) | LevelControlForLighting Behavior that supports lighting applications. |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``6``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"OnOff"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``4``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md), `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `effectVariant`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onOffControl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `onTime`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
