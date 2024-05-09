[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ModeSelect](../modules/cluster_export.ModeSelect.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[ModeSelect](../modules/cluster_export.ModeSelect.md).Cluster

Mode Select

This cluster provides an interface for controlling a characteristic of a device that can be set to one of
several predefined values. For example, the light pattern of a disco ball, the mode of a massage chair, or the
wash cycle of a laundry machine.

The server allows the client to set a mode on the server. A mode is one of a list of options that may be
presented by a client for a user choice, or understood by the client, via the semantic tags on the mode.

A semantic tag is either a standard tag within a standard category namespace, or a manufacturer specific tag,
within the namespace of the vendor ID of the manufacturer. If there is no semantic tag, the mode is anonymous,
and the selection is made by the user solely based on the Label string.

Each cluster ID that indicates this specification shall define a distinct purpose for the cluster instance. For
example: A LightBlinking cluster ID supports blinking modes for a light (and is described that way).

An anonymous mode shall support the derived cluster purpose. A manufacturer specific semantic tag shall support
the derived cluster purpose. An anonymous mode shall NOT replace the meaning of a standard semantic tag, when
one exists, for the cluster purpose.

ModeSelectCluster supports optional features that you can enable with the ModeSelectCluster.with() factory
method.

**`See`**

MatterSpecification.v11.Cluster § 1.8

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.ModeSelect.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.ModeSelect.Cluster.md#attributes)
- [base](cluster_export.ModeSelect.Cluster.md#base)
- [commands](cluster_export.ModeSelect.Cluster.md#commands)
- [events](cluster_export.ModeSelect.Cluster.md#events)
- [extensions](cluster_export.ModeSelect.Cluster.md#extensions)
- [features](cluster_export.ModeSelect.Cluster.md#features)
- [id](cluster_export.ModeSelect.Cluster.md#id)
- [name](cluster_export.ModeSelect.Cluster.md#name)
- [revision](cluster_export.ModeSelect.Cluster.md#revision)
- [supportedFeatures](cluster_export.ModeSelect.Cluster.md#supportedfeatures)
- [unknown](cluster_export.ModeSelect.Cluster.md#unknown)

### Methods

- [alter](cluster_export.ModeSelect.Cluster.md#alter)
- [enable](cluster_export.ModeSelect.Cluster.md#enable)
- [set](cluster_export.ModeSelect.Cluster.md#set)
- [with](cluster_export.ModeSelect.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `value`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>[]\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

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
| `changeToMode` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | On receipt of this command, if the NewMode field indicates a valid mode transition within the supported list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the server shall respond with an INVALID_COMMAND status response. **`See`** MatterSpecification.v11.Cluster § 1.8.6.1 |

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

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }]

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
| `onOff` | [`BitFlag`](../modules/schema_export.md#bitflag) | OnOff Dependency with the On/Off cluster |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``80``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"ModeSelect"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

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

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
