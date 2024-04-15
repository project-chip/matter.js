[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ModeSelect](../modules/exports_cluster.ModeSelect.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[ModeSelect](../modules/exports_cluster.ModeSelect.md).Cluster

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

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.ModeSelect.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.ModeSelect.Cluster.md#attributes)
- [base](exports_cluster.ModeSelect.Cluster.md#base)
- [commands](exports_cluster.ModeSelect.Cluster.md#commands)
- [events](exports_cluster.ModeSelect.Cluster.md#events)
- [extensions](exports_cluster.ModeSelect.Cluster.md#extensions)
- [features](exports_cluster.ModeSelect.Cluster.md#features)
- [id](exports_cluster.ModeSelect.Cluster.md#id)
- [name](exports_cluster.ModeSelect.Cluster.md#name)
- [revision](exports_cluster.ModeSelect.Cluster.md#revision)
- [supportedFeatures](exports_cluster.ModeSelect.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.ModeSelect.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.ModeSelect.Cluster.md#alter)
- [enable](exports_cluster.ModeSelect.Cluster.md#enable)
- [set](exports_cluster.ModeSelect.Cluster.md#set)
- [with](exports_cluster.ModeSelect.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `value`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>[]\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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
| `changeToMode` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | On receipt of this command, if the NewMode field indicates a valid mode transition within the supported list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the server shall respond with an INVALID_COMMAND status response. **`See`** MatterSpecification.v11.Cluster § 1.8.6.1 |

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

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }]

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
| `onOff` | [`BitFlag`](../modules/exports_schema.md#bitflag) | OnOff Dependency with the On/Off cluster |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``80``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"ModeSelect"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `label`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newMode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
