[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Identify](../modules/cluster_export.Identify.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[Identify](../modules/cluster_export.Identify.md).Cluster

Identify

This cluster supports an endpoint identification state (e.g., flashing a light), that indicates to an observer
(e.g., an installer) which of several nodes and/or endpoints it is. It also supports a multicast request that
any endpoint that is identifying itself to respond to the initiator.

The state of this cluster may be shared on more than one endpoint on a node.

For Example: Two endpoints on a single node, one a temperature sensor, and one a humidity sensor, may both share
the same cluster instance and therefore identification state (e.g. single LED on the node).

Zigbee: Note that this cluster cannot be disabled, and remains functional regardless of the setting of the
DeviceEnable attribute in the Basic cluster.

IdentifyCluster supports optional features that you can enable with the IdentifyCluster.with() factory method.

**`See`**

MatterSpecification.v11.Cluster § 1.2

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.Identify.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.Identify.Cluster.md#attributes)
- [base](cluster_export.Identify.Cluster.md#base)
- [commands](cluster_export.Identify.Cluster.md#commands)
- [events](cluster_export.Identify.Cluster.md#events)
- [extensions](cluster_export.Identify.Cluster.md#extensions)
- [features](cluster_export.Identify.Cluster.md#features)
- [id](cluster_export.Identify.Cluster.md#id)
- [name](cluster_export.Identify.Cluster.md#name)
- [revision](cluster_export.Identify.Cluster.md#revision)
- [supportedFeatures](cluster_export.Identify.Cluster.md#supportedfeatures)
- [unknown](cluster_export.Identify.Cluster.md#unknown)

### Methods

- [alter](cluster_export.Identify.Cluster.md#alter)
- [enable](cluster_export.Identify.Cluster.md#enable)
- [set](cluster_export.Identify.Cluster.md#set)
- [with](cluster_export.Identify.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

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
| `identify` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | This command starts or stops the receiving device identifying itself. **`See`** MatterSpecification.v11.Cluster § 1.2.6.1 |
| `triggerEffect` | [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\> | This command allows the support of feedback to the user, such as a certain light effect. It is used to allow an implementation to provide visual feedback to the user under certain circumstances such as a color light turning green when it has successfully connected to a network. The use of this command and the effects themselves are entirely up to the implementer to use whenever a visual feedback is useful but it is not the same as and does not replace the identify mechanism used during commissioning. **`See`** MatterSpecification.v11.Cluster § 1.2.6.3 |

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

• **extensions**: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }]

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
| `query` | [`BitFlag`](../modules/schema_export.md#bitflag) | Query Multicast query for identification state |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``3``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"Identify"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>, `ValuesT`\>

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

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = QueryComponent; `flags`: \{ `query`: ``true`` = true }  }] ; `features`: \{ `query`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
